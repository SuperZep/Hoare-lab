/* ===== Mini-Prolog (pure Prolog: unification, SLD resolution, is/2, lists) ===== */
const PL = (() => {
  const LIMIT = { limit: true };
  let vid = 0;
  const mkVar = n => ({ t: 'v', n, id: ++vid });
  const atom = n => ({ t: 'a', n });
  const num = v => ({ t: 'n', v });
  const cmp = (f, a) => ({ t: 'c', f, a });
  const NIL = atom('[]');
  const cons = (h, tl) => cmp('.', [h, tl]);
  function perr(code, d) { const e = new Error(code); e.code = code; e.detail = d || ''; return e; }

  const SYM = '+-*/\\^<>=~:.?@#&$';
  function tokenize(src) {
    const toks = []; let i = 0, ws = true;
    while (i < src.length) {
      const c = src[i];
      if (/\s/.test(c)) { i++; ws = true; continue; }
      if (c === '%') { while (i < src.length && src[i] !== '\n') i++; ws = true; continue; }
      const push = tk => { tk.ws = ws; toks.push(tk); ws = false; };
      if (/[0-9]/.test(c)) { let j = i; while (j < src.length && /[0-9]/.test(src[j])) j++; push({ k: 'num', v: +src.slice(i, j) }); i = j; continue; }
      if (/[a-z]/.test(c)) { let j = i; while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++; push({ k: 'atom', v: src.slice(i, j) }); i = j; continue; }
      if (/[A-Z_]/.test(c)) { let j = i; while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++; push({ k: 'var', v: src.slice(i, j) }); i = j; continue; }
      if (c === "'") { let j = i + 1; while (j < src.length && src[j] !== "'") j++; if (j >= src.length) throw perr('quote'); push({ k: 'atom', v: src.slice(i + 1, j), q: true }); i = j + 1; continue; }
      if ('()[]|,'.includes(c)) { push({ k: c }); i++; continue; }
      if (c === '!') { push({ k: 'atom', v: '!' }); i++; continue; }
      if (c === '.' && (i + 1 >= src.length || /[\s%]/.test(src[i + 1]))) { push({ k: 'end' }); i++; continue; }
      if (SYM.includes(c)) { let j = i; while (j < src.length && SYM.includes(src[j])) j++; push({ k: 'atom', v: src.slice(i, j), sym: true }); i = j; continue; }
      throw perr('char', c);
    }
    return toks;
  }
  const INFIX = { ':-': [1200, 'xfx'], ',': [1000, 'xfy'], ';': [1100, 'xfy'], '=': [700, 'xfx'], '\\=': [700, 'xfx'], 'is': [700, 'xfx'],
    '<': [700, 'xfx'], '>': [700, 'xfx'], '=<': [700, 'xfx'], '>=': [700, 'xfx'], '=:=': [700, 'xfx'], '=\\=': [700, 'xfx'], '==': [700, 'xfx'], '\\==': [700, 'xfx'],
    '+': [500, 'yfx'], '-': [500, 'yfx'], '*': [400, 'yfx'], '/': [400, 'yfx'], '//': [400, 'yfx'], 'mod': [400, 'yfx'] };
  const PREFIX = { '\\+': [900, 'fy'], '-': [200, 'fy'] };

  function parseTerms(src, kind) {
    const toks = tokenize(src); let pos = 0; let names = {};
    const peek = () => toks[pos], next = () => toks[pos++];
    const expect = k => { const t = next(); if (!t || t.k !== k) throw perr('expect', k); return t; };
    const infixOf = t => { if (!t) return null; if (t.k === ',') return ','; if (t.k === 'atom' && INFIX[t.v] && t.v !== ',') return t.v; if (t.k === 'atom' && t.v === ';') return ';'; return null; };
    function startsTerm(t) { return t && (t.k === 'num' || t.k === 'var' || t.k === '(' || t.k === '[' || (t.k === 'atom' && !infixOf(t))); }
    function parse(max) {
      let [left, lp] = primary(max);
      for (;;) {
        const op = infixOf(peek()); if (!op) break;
        const [p, type] = INFIX[op];
        if (p > max) break;
        const lmax = type[0] === 'y' ? p : p - 1; if (lp > lmax) break;
        next();
        const right = parse(type[2] === 'y' ? p : p - 1);
        left = cmp(op, [left, right]); lp = p;
      }
      return left;
    }
    function primary(max) {
      const t = next(); if (!t) throw perr('end');
      if (t.k === 'num') return [num(t.v), 0];
      if (t.k === 'var') { if (t.v === '_') return [mkVar('_'), 0]; return [names[t.v] ||= mkVar(t.v), 0]; }
      if (t.k === '(') { const e = parse(1200); expect(')'); return [e, 0]; }
      if (t.k === '[') {
        if (peek() && peek().k === ']') { next(); return [NIL, 0]; }
        const items = [parse(999)];
        while (peek() && peek().k === ',') { next(); items.push(parse(999)); }
        let tail = NIL;
        if (peek() && peek().k === '|') { next(); tail = parse(999); }
        expect(']');
        return [items.reduceRight((acc, h) => cons(h, acc), tail), 0];
      }
      if (t.k === 'atom') {
        if (peek() && peek().k === '(' && !peek().ws) {
          next(); const args = [parse(999)];
          while (peek() && peek().k === ',') { next(); args.push(parse(999)); }
          expect(')'); return [cmp(t.v, args), 0];
        }
        if (PREFIX[t.v] && startsTerm(peek())) {
          if (t.v === '-' && peek().k === 'num' && !peek().ws) { const n = next(); return [num(-n.v), 0]; }
          const [p, type] = PREFIX[t.v]; if (p > max) return [atom(t.v), 0];
          const arg = parse(type[1] === 'y' ? p : p - 1); return [cmp(t.v, [arg]), p];
        }
        return [atom(t.v), INFIX[t.v] ? 1201 : 0];
      }
      throw perr('tok', t.k);
    }
    const out = [];
    while (pos < toks.length) { names = {}; const term = parse(1200); expect('end'); out.push({ term, names }); }
    return out;
  }
  function parseProgram(src) {
    const db = {}; let idx = 0;
    for (const { term } of parseTerms(src)) {
      let head = term, body = atom('true');
      if (term.t === 'c' && term.f === ':-' && term.a.length === 2) { head = term.a[0]; body = term.a[1]; }
      if (head.t === 'v' || head.t === 'n') throw perr('head');
      const key = keyOf(head); (db[key] ||= []).push({ head, body, idx: ++idx });
    }
    return db;
  }
  function parseQuery(src) {
    let s = src.trim().replace(/^\?-\s*/, ''); if (!/\.\s*$/.test(s)) s += '.';
    const r = parseTerms(s); if (r.length !== 1) throw perr('query');
    return r[0];
  }
  function parseTerm(src) { return parseQuery(src); }
  const keyOf = t => t.t === 'a' ? t.n + '/0' : t.f + '/' + t.a.length;

  function walk(t, s) { while (t.t === 'v' && s[t.id] !== undefined) t = s[t.id]; return t; }
  function occurs(v, t, s) { t = walk(t, s); if (t.t === 'v') return t.id === v.id; if (t.t === 'c') return t.a.some(x => occurs(v, x, s)); return false; }
  function bind(v, t, s, oc) { if (oc && occurs(v, t, s)) return null; const s2 = Object.create(s); s2[v.id] = t; return s2; }
  function unify(a, b, s, oc = false) {
    a = walk(a, s); b = walk(b, s);
    if (a.t === 'v' && b.t === 'v' && a.id === b.id) return s;
    if (a.t === 'v') return bind(a, b, s, oc);
    if (b.t === 'v') return bind(b, a, s, oc);
    if (a.t === 'a') return b.t === 'a' && a.n === b.n ? s : null;
    if (a.t === 'n') return b.t === 'n' && a.v === b.v ? s : null;
    if (b.t !== 'c' || a.f !== b.f || a.a.length !== b.a.length) return null;
    for (let i = 0; i < a.a.length; i++) { s = unify(a.a[i], b.a[i], s, oc); if (!s) return null; }
    return s;
  }
  function resolve(t, s) { t = walk(t, s); return t.t === 'c' ? cmp(t.f, t.a.map(x => resolve(x, s))) : t; }
  function rename(t, map) {
    if (t.t === 'v') return map[t.id] ||= mkVar(t.n);
    if (t.t === 'c') return cmp(t.f, t.a.map(x => rename(x, map)));
    return t;
  }
  function evalA(t, s) {
    t = walk(t, s);
    if (t.t === 'n') return t.v;
    if (t.t === 'v') throw perr('inst');
    if (t.t === 'c' && t.a.length === 2) {
      const x = evalA(t.a[0], s), y = evalA(t.a[1], s);
      switch (t.f) { case '+': return x + y; case '-': return x - y; case '*': return x * y;
        case '//': if (y === 0) throw perr('zero'); return Math.trunc(x / y);
        case '/': if (y === 0) throw perr('zero'); return x / y;
        case 'mod': if (y === 0) throw perr('zero'); return ((x % y) + y) % y; }
    }
    if (t.t === 'c' && t.f === '-' && t.a.length === 1) return -evalA(t.a[0], s);
    throw perr('type', fmt(t, s));
  }
  function same(a, b, s) { a = walk(a, s); b = walk(b, s); if (a.t !== b.t) return false; if (a.t === 'v') return a.id === b.id; if (a.t === 'a') return a.n === b.n; if (a.t === 'n') return a.v === b.v; return a.f === b.f && a.a.length === b.a.length && a.a.every((x, i) => same(x, b.a[i], s)); }

  function* solve(goals, s, db, ctx, depth) {
    if (!goals) { yield s; return; }
    if (++ctx.steps > ctx.max || depth > 1500) throw LIMIT;
    const g = walk(goals.g, s), rest = goals.next;
    if (g.t === 'v') throw perr('inst');
    if (g.t === 'n') throw perr('callable');
    const key = keyOf(g), a = g.a || [];
    switch (key) {
      case 'true/0': yield* solve(rest, s, db, ctx, depth); return;
      case 'fail/0': case 'false/0': return;
      case ',/2': yield* solve({ g: a[0], next: { g: a[1], next: rest } }, s, db, ctx, depth); return;
      case ';/2': yield* solve({ g: a[0], next: rest }, s, db, ctx, depth); yield* solve({ g: a[1], next: rest }, s, db, ctx, depth); return;
      case '=/2': { const s2 = unify(a[0], a[1], s); if (s2) yield* solve(rest, s2, db, ctx, depth); return; }
      case '\\=/2': if (!unify(a[0], a[1], s)) yield* solve(rest, s, db, ctx, depth); return;
      case '==/2': if (same(a[0], a[1], s)) yield* solve(rest, s, db, ctx, depth); return;
      case '\\==/2': if (!same(a[0], a[1], s)) yield* solve(rest, s, db, ctx, depth); return;
      case 'is/2': { const s2 = unify(a[0], num(evalA(a[1], s)), s); if (s2) yield* solve(rest, s2, db, ctx, depth); return; }
      case '</2': case '>/2': case '=</2': case '>=/2': case '=:=/2': case '=\\=/2': {
        const x = evalA(a[0], s), y = evalA(a[1], s);
        const ok = { '<': x < y, '>': x > y, '=<': x <= y, '>=': x >= y, '=:=': x === y, '=\\=': x !== y }[g.f];
        if (ok) yield* solve(rest, s, db, ctx, depth); return; }
      case '\\+/1': { let found = false; for (const _ of solve({ g: a[0], next: null }, s, db, ctx, depth + 1)) { found = true; break; } if (!found) yield* solve(rest, s, db, ctx, depth); return; }
      case '!/0': throw perr('cut');
    }
    const cls = db[key]; if (!cls) throw perr('unknown', key);
    for (const cl of cls) {
      const map = {}; const h = rename(cl.head, map), b = rename(cl.body, map);
      const s2 = unify(g, h, s);
      if (s2) yield* solve(b.t === 'a' && b.n === 'true' ? rest : { g: b, next: rest }, s2, db, ctx, depth + 1);
    }
  }

  const QUOTE_RE = /^[a-z][A-Za-z0-9_]*$/;
  function fmt(t, s, top = true) {
    t = walk(t, s || {});
    if (t.t === 'v') return '_' + (t.n && t.n !== '_' ? t.n : 'G') + t.id;
    if (t.t === 'n') return String(t.v);
    if (t.t === 'a') return t.n === '[]' || QUOTE_RE.test(t.n) || /^[+\-*/\\^<>=~:.?@#&$]+$/.test(t.n) ? t.n : "'" + t.n + "'";
    if (t.f === '.' && t.a.length === 2) {
      const items = []; let cur = t;
      while (cur.t === 'c' && cur.f === '.' && cur.a.length === 2) { items.push(fmt(cur.a[0], s, false)); cur = walk(cur.a[1], s || {}); }
      return '[' + items.join(',') + (cur.t === 'a' && cur.n === '[]' ? '' : '|' + fmt(cur, s, false)) + ']';
    }
    if (INFIX[t.f] && t.a.length === 2) return fmt(t.a[0], s, false) + (/^[a-z]/.test(t.f) ? ' ' + t.f + ' ' : t.f) + fmt(t.a[1], s, false);
    return t.f + '(' + t.a.map(x => fmt(x, s, false)).join(',') + ')';
  }


  /* SLD search tree for teaching: nodes in depth-first order with the clause used and the new bindings */
  function traceSLD(program, query, maxNodes = 70) {
    try {
      const db = typeof program === 'string' ? parseProgram(program) : program;
      const q = parseQuery(query);
      const qn = {}; Object.entries(q.names).forEach(([n, v]) => { if (!n.startsWith('_')) qn[v.id] = n; });
      const nice = {}; let nv = 0;
      const vname = v => qn[v.id] || nice[v.id] || (nice[v.id] = (v.n && v.n !== '_' ? v.n : 'V') + String(++nv).replace(/\d/g, d => '₀₁₂₃₄₅₆₇₈₉'[d]));
      const fd = (t, s) => {
        t = walk(t, s);
        if (t.t === 'v') return vname(t);
        if (t.t === 'n') return String(t.v);
        if (t.t === 'a') return t.n;
        if (t.f === '.' && t.a.length === 2) { const it = []; let c = t; while (c.t === 'c' && c.f === '.' && c.a.length === 2) { it.push(fd(c.a[0], s)); c = walk(c.a[1], s); } return '[' + it.join(', ') + (c.t === 'a' && c.n === '[]' ? '' : ' | ' + fd(c, s)) + ']'; }
        if (INFIX[t.f] && t.a.length === 2) return fd(t.a[0], s) + (/^[a-z]/.test(t.f) || t.f === ',' ? ' ' + t.f + ' ' : ' ' + t.f + ' ') + fd(t.a[1], s);
        return t.f + '(' + t.a.map(x => fd(x, s)).join(', ') + ')';
      };
      const flat = (goals, s) => { const out = []; let g = goals; while (g) { let x = walk(g.g, s); if (x.t === 'c' && x.f === ',' && x.a.length === 2) { g = { g: x.a[0], next: { g: x.a[1], next: g.next } }; continue; } if (!(x.t === 'a' && x.n === 'true')) out.push(x); g = g.next; } return out; };
      const varsIn = (t, s, acc = []) => { t = walk(t, s); if (t.t === 'v') { if (!acc.includes(t)) acc.push(t); } else if (t.t === 'c') t.a.forEach(x => varsIn(x, s, acc)); return acc; };
      const binds = (g, s, s2) => varsIn(g, s).filter(v => walk(v, s2) !== v).map(v => `${vname(v)} = ${fd(v, s2)}`).join(', ');
      const qvars = Object.entries(q.names).filter(([n]) => !n.startsWith('_'));
      const nodes = []; let truncated = false;
      function nodeU(goals, s, depth, parent, edge) {
        const gl = flat(goals, s);
        const nd = { id: nodes.length, parent, edge, goals: gl.length ? gl.map(x => fd(x, s)).join(', ') : '□', depth, kind: 'goal' };
        if (nodes.length >= maxNodes || depth > 30) { truncated = true; return null; }
        nodes.push(nd);
        if (!gl.length) { nd.kind = 'success'; nd.answer = qvars.length ? qvars.map(([n, v]) => `${n} = ${fd(v, s)}`).join(', ') : 'true'; return nd; }
        const g = gl[0], restL = gl.slice(1), mk = list => list.reduceRight((acc, x) => ({ g: x, next: acc }), null);
        const key = keyOf(g), a = g.a || [];
        let kids = 0;
        const BI = { '=/2': 1, '\\=/2': 1, 'is/2': 1, '</2': 1, '>/2': 1, '=</2': 1, '>=/2': 1, '=:=/2': 1, '=\\=/2': 1, '\\+/1': 1, '==/2': 1, '\\==/2': 1, 'fail/0': 1, 'false/0': 1 };
        if (key === ';/2') { kids += 2; nodeU({ g: a[0], next: mk(restL) }, s, depth + 1, nd.id, { builtin: ';', binds: '' }); nodeU({ g: a[1], next: mk(restL) }, s, depth + 1, nd.id, { builtin: ';', binds: '' }); }
        else if (BI[key]) {
          let s2 = null;
          try {
            if (key === '=/2') s2 = unify(a[0], a[1], s);
            else if (key === '\\=/2') s2 = unify(a[0], a[1], s) ? null : s;
            else if (key === 'is/2') s2 = unify(a[0], num(evalA(a[1], s)), s);
            else if (key === '==/2') s2 = same(a[0], a[1], s) ? s : null;
            else if (key === '\\==/2') s2 = same(a[0], a[1], s) ? null : s;
            else if (key === '\\+/1') { let f = false; for (const _ of solve({ g: a[0], next: null }, s, db, { steps: 0, max: 20000 }, 0)) { f = true; break; } s2 = f ? null : s; }
            else if (key === 'fail/0' || key === 'false/0') s2 = null;
            else { const x = evalA(a[0], s), y = evalA(a[1], s); s2 = ({ '<': x < y, '>': x > y, '=<': x <= y, '>=': x >= y, '=:=': x === y, '=\\=': x !== y }[g.f]) ? s : null; }
          } catch (e) { nd.kind = 'error'; nd.err = e.code || 'error'; return nd; }
          if (s2) { kids++; nodeU(mk(restL), s2, depth + 1, nd.id, { builtin: g.f, binds: binds(g, s, s2) }); }
        } else {
          const cls = db[key]; if (!cls) { nd.kind = 'error'; nd.err = 'unknown'; nd.detail = key; return nd; }
          for (const cl of cls) {
            if (nodes.length >= maxNodes) { truncated = true; break; }
            const map = {}; const h = rename(cl.head, map), b = rename(cl.body, map);
            const s2 = unify(g, h, s);
            if (!s2) continue;
            kids++;
            const body = b.t === 'a' && b.n === 'true' ? [] : [b];
            nodeU(mk([...body, ...restL]), s2, depth + 1, nd.id, { clause: cl.idx, binds: binds(g, s, s2) });
          }
        }
        if (!kids && nd.kind === 'goal') nd.kind = 'fail';
        return nd;
      }
      nodeU({ g: q.term, next: null }, {}, 0, null, null);
      return { nodes, truncated };
    } catch (e) {
      if (e === LIMIT) return { error: 'limit' };
      return { error: e.code || 'syntax', detail: e.detail };
    }
  }

  /* run a query: returns {answers:[{Var: 'val'}], more:boolean} or {error} */
  function run(program, query, maxAnswers = 8, maxSteps = 60000) {
    try {
      const db = typeof program === 'string' ? parseProgram(program) : program;
      const q = parseQuery(query);
      const ctx = { steps: 0, max: maxSteps }, answers = [];
      const qvars = Object.entries(q.names).filter(([n]) => !n.startsWith('_'));
      let more = false;
      try {
        for (const s of solve({ g: q.term, next: null }, {}, db, ctx, 0)) {
          if (answers.length >= maxAnswers) { more = true; break; }
          const ans = {}; qvars.forEach(([n, v]) => ans[n] = fmt(resolve(v, s), {}));
          answers.push(ans);
        }
      } catch (e) { if (e === LIMIT && answers.length) return { answers, limit: true }; throw e; }
      return { answers, more };
    } catch (e) {
      if (e === LIMIT) return { error: 'limit' };
      return { error: e.code || 'syntax', detail: e.detail };
    }
  }
  /* most general unifier check */
  function mgu(t1src, t2src) {
    const { term } = parseTerm(`p(${t1src}, ${t2src})`);
    const s = unify(term.a[0], term.a[1], {}, true);
    return { term, s };
  }
  function variant(a, b) {
    const m1 = new Map(), m2 = new Map();
    function go(x, y) {
      if (x.t === 'v' || y.t === 'v') {
        if (x.t !== 'v' || y.t !== 'v') return false;
        if (m1.has(x.id) || m2.has(y.id)) return m1.get(x.id) === y.id && m2.get(y.id) === x.id;
        m1.set(x.id, y.id); m2.set(y.id, x.id); return true;
      }
      if (x.t !== y.t) return false;
      if (x.t === 'a') return x.n === y.n;
      if (x.t === 'n') return x.v === y.v;
      return x.f === y.f && x.a.length === y.a.length && x.a.every((z, i) => go(z, y.a[i]));
    }
    return go(a, b);
  }
  /* user answer like "X = f(a), Y = b" for terms t1, t2 sharing variable names */
  function checkUnifier(t1src, t2src, userSrc) {
    const { term, names } = parseTerms(`p(${t1src}, ${t2src}).`)[0];
    const ref = unify(term.a[0], term.a[1], {}, true);
    const u = (userSrc || '').trim().replace(/^\{|\}$/g, '').trim();
    if (!u) return { error: 'empty' };
    let s = {};
    try {
      const q = parseTerms(`q(${u}).`)[0];
      const remap = t => {
        if (t.t === 'v') { if (t.n === '_') return mkVar('_'); return names[t.n] || (names[t.n] = mkVar(t.n)); }
        if (t.t === 'c') return cmp(t.f, t.a.map(remap));
        return t;
      };
      for (const p of q.term.a) {
        if (!(p.t === 'c' && p.f === '=' && p.a.length === 2)) return { error: 'form' };
        const Lv = remap(p.a[0]), R = remap(p.a[1]);
        if (Lv.t !== 'v') return { error: 'form' };
        if (Object.prototype.hasOwnProperty.call(s, Lv.id) || s[Lv.id] !== undefined) return { error: 'twice', detail: Lv.n };
        s = Object.create(s); s[Lv.id] = R;
      }
    } catch (e) { return { error: 'syntax' }; }
    let depth = 0;
    const res = t => { if (++depth > 5000) throw LIMIT; t = walk(t, s); return t.t === 'c' ? cmp(t.f, t.a.map(res)) : t; };
    let ua, ub;
    try { ua = res(term.a[0]); depth = 0; ub = res(term.a[1]); } catch (e) { return { ok: false, unifies: false }; }
    if (fmt(ua) !== fmt(ub)) return { ok: false, unifies: false };
    if (!ref) return { ok: false, unifies: true, ref: false };
    const ga = resolve(term.a[0], ref);
    if (!variant(ua, ga)) return { ok: false, unifies: true, general: false };
    return { ok: true };
  }
  function refUnifier(t1src, t2src) {
    const { term, names } = parseTerms(`p(${t1src}, ${t2src}).`)[0];
    const s = unify(term.a[0], term.a[1], {}, true);
    if (!s) return null;
    return Object.entries(names).filter(([n, v]) => walk(v, s) !== v).map(([n, v]) => `${n} = ${fmt(resolve(v, s))}`).join(', ');
  }
  /* true if the terms unify when the occurs check is switched off (used to name the typical mistake) */
  function unifiesWithoutOC(t1src, t2src) { try { const { term } = parseTerms(`p(${t1src}, ${t2src}).`)[0]; return !!unify(term.a[0], term.a[1], {}, false); } catch (e) { return false; } }
  return { run, parseProgram, checkUnifier, refUnifier, unifiesWithoutOC, traceSLD, fmt };
})();

/* ===== Haskell type comparison ===== */
const HT = (() => {
  function tokenize(s) {
    const t = []; let i = 0;
    while (i < s.length) {
      const c = s[i];
      if (/\s/.test(c)) { i++; continue; }
      if (s.startsWith('->', i)) { t.push('->'); i += 2; continue; }
      if (s.startsWith('=>', i)) { t.push('=>'); i += 2; continue; }
      if (s.startsWith('::', i)) { t.push('::'); i += 2; continue; }
      if ('()[],'.includes(c)) { t.push(c); i++; continue; }
      if (/[A-Za-z_]/.test(c)) { let j = i; while (j < s.length && /[A-Za-z0-9_']/.test(s[j])) j++; t.push(s.slice(i, j)); i = j; continue; }
      throw new Error('char');
    }
    return t;
  }
  function parse(src) {
    let toks = tokenize(src); let pos = 0;
    const ci = toks.indexOf('::'); if (ci >= 0) toks = toks.slice(ci + 1);
    const peek = () => toks[pos], next = () => toks[pos++];
    const expect = x => { if (next() !== x) throw new Error('expect ' + x); };
    let ctx = [];
    const di = toks.indexOf('=>');
    if (di >= 0) {
      const ctoks = toks.slice(0, di); toks = toks.slice(di + 1);
      const flat = ctoks.filter(x => x !== '(' && x !== ')');
      const groups = []; let cur = [];
      for (const x of flat) { if (x === ',') { groups.push(cur); cur = []; } else cur.push(x); }
      groups.push(cur);
      for (const g of groups) { if (g.length !== 2 || !/^[A-Z]/.test(g[0]) || !/^[a-z]/.test(g[1])) throw new Error('ctx'); ctx.push(g); }
    }
    function type() { const a = btype(); if (peek() === '->') { next(); return { k: 'fn', a, b: type() }; } return a; }
    function btype() { const f = atype(); const args = []; while (peek() && peek() !== '->' && peek() !== ')' && peek() !== ']' && peek() !== ',') args.push(atype()); return args.length ? { k: 'app', f, args } : f; }
    function atype() {
      const x = next(); if (x === undefined) throw new Error('end');
      if (x === '(') {
        if (peek() === ')') { next(); return { k: 'con', n: '()' }; }
        const items = [type()]; while (peek() === ',') { next(); items.push(type()); }
        expect(')'); return items.length === 1 ? items[0] : { k: 'tup', items };
      }
      if (x === '[') { const e = type(); expect(']'); return { k: 'list', e }; }
      if (/^[a-z_]/.test(x)) return { k: 'var', n: x };
      if (/^[A-Z]/.test(x)) return x === 'String' ? { k: 'list', e: { k: 'con', n: 'Char' } } : { k: 'con', n: x };
      throw new Error('tok');
    }
    const ty = type(); if (pos !== toks.length) throw new Error('rest');
    return { ctx, ty };
  }
  function canon(src) {
    const { ctx, ty } = parse(src); const m = new Map();
    const v = n => { if (!m.has(n)) m.set(n, 't' + m.size); return m.get(n); };
    const go = t => {
      switch (t.k) {
        case 'var': return v(t.n);
        case 'con': return t.n;
        case 'list': return '[' + go(t.e) + ']';
        case 'tup': return '(' + t.items.map(go).join(',') + ')';
        case 'fn': return '(' + go(t.a) + '->' + go(t.b) + ')';
        case 'app': return '(' + go(t.f) + ' ' + t.args.map(go).join(' ') + ')';
      }
    };
    const body = go(ty);
    const cs = ctx.filter(([, x]) => m.has(x)).map(([c, x]) => c + ' ' + m.get(x)).sort();
    return [...new Set(cs)].join(',') + '|' + body;
  }
  function eq(a, b) { try { return canon(a) === canon(b); } catch (e) { return null; } }
  /* one-way matching: is `spec` an instance of `gen` (type variables of gen replaced consistently)? */
  function same(x, y) { return JSON.stringify(x) === JSON.stringify(y); }
  function match(g, s, m) {
    if (g.k === 'var') { if (m.has(g.n)) return same(m.get(g.n), s); m.set(g.n, s); return true; }
    if (g.k !== s.k) return false;
    switch (g.k) {
      case 'con': return g.n === s.n;
      case 'list': return match(g.e, s.e, m);
      case 'tup': return g.items.length === s.items.length && g.items.every((x, i) => match(x, s.items[i], m));
      case 'fn': return match(g.a, s.a, m) && match(g.b, s.b, m);
      case 'app': return g.args.length === s.args.length && match(g.f, s.f, m) && g.args.every((x, i) => match(x, s.args[i], m));
    }
    return false;
  }
  function instanceOf(spec, gen) { try { return match(parse(gen).ty, parse(spec).ty, new Map()); } catch (e) { return null; } }
  function ctxOf(src) { try { return parse(src).ctx; } catch (e) { return null; } }
  function body(src) { const i = src.indexOf('=>'); return i >= 0 ? src.slice(i + 2) : src.replace(/^.*::/, ''); }
  return { eq, canon, instanceOf, ctxOf, body };
})();
