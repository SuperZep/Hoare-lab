/* ===== Hoare Lab engine: parser, evaluator, substitution, bounded checker ===== */
const UNDEF = { undef: true };
function perr(code, detail) { const e = new Error(code); e.code = code; e.detail = detail || ''; return e; }

const SYMS = [['<=>','iff'],['⇔','iff'],['==>','imp'],['=>','imp'],['->','imp'],['⇒','imp'],['→','imp'],
  ['&&','and'],['∧','and'],['&','and'],['||','or'],['∨','or'],['|','or'],
  ['<=','le'],['≤','le'],['>=','ge'],['≥','ge'],['!=','ne'],['≠','ne'],['==','eq'],['=','eq'],['<','lt'],['>','gt'],
  ['!','not'],['¬','not'],['+','+'],['-','-'],['−','-'],['–','-'],['*','*'],['·','*'],['⋅','*'],['×','*'],['/','/'],['^','^'],
  ['(','('],[')',')'],['[','['],[']',']'],[',',','],['∑','sumsym']];
const FNS = { sum: 'sum', max: 'max', min: 'min', gcd: 'gcd', ggt: 'gcd', abs: 'abs', fact: 'fact' };
const ARRFN = ['sum', 'max', 'min'];

function tokenize(src) {
  const toks = []; let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (/\s/.test(c)) { i++; continue; }
    if (/[0-9]/.test(c)) { let j = i; while (j < src.length && /[0-9]/.test(src[j])) j++; toks.push({ k: 'num', v: Number(src.slice(i, j)), s: src.slice(i, j) }); i = j; continue; }
    if (/[A-Za-z_]/.test(c)) {
      let j = i; while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++;
      const w = src.slice(i, j), lw = w.toLowerCase();
      if (src.startsWith('.length', j)) { toks.push({ k: 'len', v: w, s: w + '.length' }); i = j + 7; continue; }
      if (lw === 'and' || lw === 'und') toks.push({ k: 'and', s: w });
      else if (lw === 'or' || lw === 'oder') toks.push({ k: 'or', s: w });
      else if (lw === 'not' || lw === 'nicht') toks.push({ k: 'not', s: w });
      else if (lw === 'true' || lw === 'wahr') toks.push({ k: 'bool', v: true, s: w });
      else if (lw === 'false' || lw === 'falsch') toks.push({ k: 'bool', v: false, s: w });
      else toks.push({ k: 'id', v: w, s: w });
      i = j; continue;
    }
    let m = null;
    for (const [s, k] of SYMS) { if (src.startsWith(s, i)) { m = [s, k]; break; } }
    if (!m) throw perr('char', c);
    if (m[1] === 'sumsym') toks.push({ k: 'id', v: 'sum', s: '∑' }); else toks.push({ k: m[1], s: m[0] });
    i += m[0].length;
  }
  return toks;
}

const CMPK = ['eq', 'ne', 'lt', 'le', 'gt', 'ge'];
function parse(src) {
  const toks = tokenize(String(src)); let pos = 0;
  if (!toks.length) throw perr('empty');
  const is = k => toks[pos] && toks[pos].k === k;
  const next = () => toks[pos++];
  const expect = k => { if (!is(k)) throw perr(k === ')' || k === ']' ? 'paren' : 'tok', toks[pos] ? toks[pos].s : ''); next(); };
  function iff() { let a = imp(); while (is('iff')) { next(); a = { t: 'iff', a, b: imp() }; } return a; }
  function imp() { const a = or(); if (is('imp')) { next(); return { t: 'imp', a, b: imp() }; } return a; }
  function or() { let a = and(); while (is('or')) { next(); a = { t: 'or', a, b: and() }; } return a; }
  function and() { let a = not(); while (is('and')) { next(); a = { t: 'and', a, b: not() }; } return a; }
  function not() { if (is('not')) { next(); return { t: 'not', a: not() }; } return cmp(); }
  function cmp() {
    let a = add();
    if (!toks[pos] || !CMPK.includes(toks[pos].k)) return a;
    let res = null;
    while (toks[pos] && CMPK.includes(toks[pos].k)) {
      const op = next().k; const b = add(); const c = { t: 'cmp', op, a, b };
      res = res ? { t: 'and', a: res, b: c } : c; a = b;
    }
    return res;
  }
  function add() { let a = mul(); while (is('+') || is('-')) { const op = next().k; a = { t: 'bin', op, a, b: mul() }; } return a; }
  function mul() { let a = un(); while (is('*') || is('/')) { const op = next().k; a = { t: 'bin', op, a, b: un() }; } return a; }
  function un() { if (is('-')) { next(); return { t: 'neg', a: un() }; } return pow(); }
  function pow() { const a = atom(); if (is('^')) { next(); return { t: 'bin', op: '^', a, b: un() }; } return a; }
  function atom() {
    const tk = next();
    if (!tk) throw perr('end');
    if (tk.k === 'num') return { t: 'num', v: tk.v };
    if (tk.k === 'len') return { t: 'fn', f: 'len', arr: tk.v };
    if (tk.k === 'id') {
      const f = FNS[tk.v.toLowerCase()];
      if (f && is('(')) {
        next();
        if (ARRFN.includes(f)) {
          const at = next(); if (!at || at.k !== 'id') throw perr('arrarg', f);
          expect(','); const a = iff(); expect(','); const b = iff(); expect(')');
          return { t: 'fn', f, arr: at.v, a, b };
        }
        const a = iff();
        if (f === 'gcd') { expect(','); const b = iff(); expect(')'); return { t: 'fn', f, a, b }; }
        expect(')'); return { t: 'fn', f, a };
      }
      if (is('[')) { next(); const a = iff(); expect(']'); return { t: 'idx', arr: tk.v, a }; }
      return { t: 'var', v: tk.v };
    }
    if (tk.k === 'bool') return { t: 'bool', v: tk.v };
    if (tk.k === '(') { const e = iff(); expect(')'); return e; }
    throw perr('tok', tk.s);
  }
  const e = iff();
  if (pos < toks.length) throw perr('tok', toks[pos].s);
  return e;
}

function ty(n) {
  switch (n.t) {
    case 'num': case 'var': return 'N';
    case 'bool': return 'B';
    case 'idx': need(n.a, 'N'); return 'N';
    case 'fn': if (n.a) need(n.a, 'N'); if (n.b) need(n.b, 'N'); return 'N';
    case 'neg': need(n.a, 'N'); return 'N';
    case 'bin': need(n.a, 'N'); need(n.b, 'N'); return 'N';
    case 'cmp': need(n.a, 'N'); need(n.b, 'N'); return 'B';
    case 'not': need(n.a, 'B'); return 'B';
    default: need(n.a, 'B'); need(n.b, 'B'); return 'B';
  }
}
function need(n, k) { if (ty(n) !== k) throw perr(k === 'B' ? 'needbool' : 'neednum'); }
function varsOf(n, acc = new Set()) { if (n.t === 'var') acc.add(n.v); if (n.arr) acc.add(n.arr); if (n.a) varsOf(n.a, acc); if (n.b) varsOf(n.b, acc); return acc; }
function usage(n, sc = new Set(), ar = new Set()) { if (n.t === 'var') sc.add(n.v); if (n.arr) ar.add(n.arr); if (n.a) usage(n.a, sc, ar); if (n.b) usage(n.b, sc, ar); return [sc, ar]; }

const isInt = v => Number.isInteger(v);
function arrOf(s, name) { const a = s[name]; if (!Array.isArray(a)) throw perr('notarray', name); return a; }
function ev(n, s) {
  switch (n.t) {
    case 'num': case 'bool': return n.v;
    case 'var': if (!(n.v in s)) throw perr('var', n.v); return s[n.v];
    case 'idx': { const A = arrOf(s, n.arr), i = ev(n.a, s); if (!isInt(i) || i < 0 || i >= A.length) throw UNDEF; return A[i]; }
    case 'fn': {
      if (n.f === 'len') return arrOf(s, n.arr).length;
      if (ARRFN.includes(n.f)) {
        const A = arrOf(s, n.arr), lo = ev(n.a, s), hi = ev(n.b, s);
        if (!isInt(lo) || !isInt(hi)) throw UNDEF;
        if (hi < lo) { if (n.f === 'sum') return 0; throw UNDEF; }
        if (lo < 0 || hi >= A.length) throw UNDEF;
        const part = A.slice(lo, hi + 1);
        return n.f === 'sum' ? part.reduce((x, y) => x + y, 0) : n.f === 'max' ? Math.max(...part) : Math.min(...part);
      }
      if (n.f === 'abs') return Math.abs(ev(n.a, s));
      if (n.f === 'fact') { const k = ev(n.a, s); if (!isInt(k) || k < 0 || k > 20) throw UNDEF; let r = 1; for (let j = 2; j <= k; j++) r *= j; return r; }
      if (n.f === 'gcd') { let x = ev(n.a, s), y = ev(n.b, s); if (!isInt(x) || !isInt(y) || x < 0 || y < 0) throw UNDEF; while (y) [x, y] = [y, x % y]; return x; }
      throw perr('tok', n.f);
    }
    case 'neg': return -ev(n.a, s);
    case 'bin': {
      const a = ev(n.a, s), b = ev(n.b, s); let r;
      switch (n.op) {
        case '+': r = a + b; break; case '-': r = a - b; break; case '*': r = a * b; break;
        case '/': if (b === 0) throw UNDEF; r = a / b; break;
        case '^': r = Math.pow(a, b); break;
      }
      if (!Number.isFinite(r)) throw UNDEF; return r;
    }
    case 'cmp': {
      const a = ev(n.a, s), b = ev(n.b, s), eq = Math.abs(a - b) < 1e-9;
      switch (n.op) { case 'eq': return eq; case 'ne': return !eq; case 'lt': return a < b && !eq; case 'le': return a < b || eq; case 'gt': return a > b && !eq; case 'ge': return a > b || eq; }
    }
    case 'not': return !ev(n.a, s);
    case 'and': return ev(n.a, s) && ev(n.b, s);
    case 'or': return ev(n.a, s) || ev(n.b, s);
    case 'imp': return !ev(n.a, s) || ev(n.b, s);
    case 'iff': return ev(n.a, s) === ev(n.b, s);
  }
}
function tryEv(n, s) { try { return ev(n, s); } catch (e) { if (e === UNDEF) return null; throw e; } }

const PREC = { iff: 0, imp: 1, or: 2, and: 3, not: 4, cmp: 5, '+': 6, '-': 6, '*': 7, '/': 7, neg: 8, '^': 9 };
function prec(n) { if (n.t === 'bin') return PREC[n.op]; if (n.t in PREC) return PREC[n.t]; return 10; }
const CMPS = { eq: '=', ne: '≠', lt: '<', le: '≤', gt: '>', ge: '≥' };
function pr(n, min = 0) {
  let s;
  switch (n.t) {
    case 'num': s = String(n.v); break;
    case 'var': s = n.v; break;
    case 'bool': s = n.v ? 'true' : 'false'; break;
    case 'idx': s = `${n.arr}[${pr(n.a)}]`; break;
    case 'fn':
      if (n.f === 'len') s = `${n.arr}.length`;
      else if (ARRFN.includes(n.f)) s = `${n.f}(${n.arr}, ${pr(n.a)}, ${pr(n.b)})`;
      else if (n.f === 'gcd') s = `gcd(${pr(n.a)}, ${pr(n.b)})`;
      else s = `${n.f}(${pr(n.a)})`;
      break;
    case 'iff': s = pr(n.a, 1) + ' ⇔ ' + pr(n.b, 1); break;
    case 'imp': s = pr(n.a, 2) + ' ⇒ ' + pr(n.b, 1); break;
    case 'or': s = pr(n.a, 2) + ' ∨ ' + pr(n.b, 2); break;
    case 'and': s = pr(n.a, 3) + ' ∧ ' + pr(n.b, 3); break;
    case 'not': s = '¬' + ((n.a.t === 'var' || n.a.t === 'bool') ? pr(n.a) : '(' + pr(n.a) + ')'); break;
    case 'cmp': s = pr(n.a, 6) + ' ' + CMPS[n.op] + ' ' + pr(n.b, 6); break;
    case 'neg': s = '−' + pr(n.a, 9); break;
    case 'bin': {
      const p = PREC[n.op];
      if (n.op === '^') s = pr(n.a, 10) + '^' + pr(n.b, 10);
      else s = pr(n.a, p) + ({ '+': ' + ', '-': ' − ', '*': ' · ', '/': ' / ' })[n.op] + pr(n.b, p + 1);
      break;
    }
  }
  return prec(n) < min ? '(' + s + ')' : s;
}
function sub(n, x, r) {
  if (n.t === 'var') return n.v === x ? r : n;
  if (n.t === 'num' || n.t === 'bool') return n;
  const o = { ...n }; if (n.a) o.a = sub(n.a, x, r); if (n.b) o.b = sub(n.b, x, r); return o;
}
const mkAnd = (a, b) => (a.t === 'bool' && a.v === true) ? b : { t: 'and', a, b };
const mkNot = a => ({ t: 'not', a });
const mkImp = (a, b) => ({ t: 'imp', a, b });

/* ---- statements ---- */
function compileStmts(list) {
  return list.map(s => Array.isArray(s)
    ? { k: 'asg', x: s[0], e: parse(s[1]), src: s[1] }
    : { k: 'if', c: parse(s.if), csrc: s.if, th: compileStmts(s.then), el: s.else ? compileStmts(s.else) : null });
}
function compile(ex) {
  if (ex._c) return ex._c;
  const c = {
    pre: parse(ex.pre), post: parse(ex.post),
    cond: ex.cond ? parse(ex.cond) : null, inv: ex.inv ? parse(ex.inv) : null, variant: ex.variant ? parse(ex.variant) : null,
    init: compileStmts(ex.init), body: ex.body ? compileStmts(ex.body) : [],
    scalars: Object.keys(ex.vars), arrays: Object.keys(ex.arrays || {})
  };
  c.names = [...c.arrays, ...c.scalars];
  c.allAsg = c.init.every(s => s.k === 'asg');
  // precompute all arrays for the grid
  c.arrVals = {};
  for (const a of c.arrays) {
    const { maxLen, range: [lo, hi] } = ex.arrays[a]; const out = [[]];
    let layer = [[]];
    for (let L = 1; L <= maxLen; L++) { const nl = []; for (const p of layer) for (let v = lo; v <= hi; v++) nl.push([...p, v]); out.push(...nl); layer = nl; }
    c.arrVals[a] = out;
  }
  Object.defineProperty(ex, '_c', { value: c, enumerable: false });
  return c;
}
function run(stmts, s) {
  let st = { ...s };
  for (const x of stmts) {
    if (x.k === 'asg') st[x.x] = ev(x.e, st);
    else st = ev(x.c, st) ? run(x.th, st) : (x.el ? run(x.el, st) : st);
  }
  return st;
}
function tryRun(stmts, s) { try { return run(stmts, s); } catch (e) { if (e === UNDEF) return null; throw e; } }

function* grid(ex, names) {
  const c = compile(ex), cur = {};
  function* rec(i) {
    if (i === names.length) { yield cur; return; }
    const n = names[i];
    if (c.arrVals[n]) { for (const A of c.arrVals[n]) { cur[n] = A; yield* rec(i + 1); } }
    else { const [lo, hi] = ex.vars[n]; for (let v = lo; v <= hi; v++) { cur[n] = v; yield* rec(i + 1); } }
  }
  yield* rec(0);
}
function gridSize(ex, names) { const c = compile(ex); return names.reduce((p, n) => p * (c.arrVals[n] ? c.arrVals[n].length : ex.vars[n][1] - ex.vars[n][0] + 1), 1); }
function* gridS(ex, names, limit = 90000) {
  if (gridSize(ex, names) <= limit) { yield* grid(ex, names); return; }
  const c = compile(ex); let seed = 12345;
  const rnd = () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const cur = {};
  for (let k = 0; k < limit; k++) {
    for (const n of names) { if (c.arrVals[n]) cur[n] = c.arrVals[n][Math.floor(rnd() * c.arrVals[n].length)]; else { const [lo, hi] = ex.vars[n]; cur[n] = lo + Math.floor(rnd() * (hi - lo + 1)); } }
    yield cur;
  }
}
const pick = (s, ns) => { const o = {}; ns.forEach(n => o[n] = s[n]); return o; };
function baseState(ex) { const c = compile(ex), s = {}; c.scalars.forEach(n => s[n] = 0); c.arrays.forEach(n => s[n] = []); return s; }

function userFormula(ex, src, kind) {
  let ast;
  try { ast = parse(src); } catch (e) { return { err: e.code || 'tok', detail: e.detail }; }
  const c = compile(ex);
  const [sc, ar] = usage(ast);
  for (const v of sc) { if (c.arrays.includes(v)) return { err: 'arrscalar', detail: v }; if (!c.scalars.includes(v)) return { err: 'var', detail: v }; }
  for (const v of ar) if (!c.arrays.includes(v)) return { err: 'notarray', detail: v };
  try { need(ast, kind); } catch (e) { return { err: e.code }; }
  return { ast };
}

function checkInv(ex, inv) {
  const c = compile(ex);
  const R = { start: { ok: true }, keep: { ok: true, n: 0 }, end: { ok: true, n: 0 } };
  for (const g of grid(ex, ex.inputs)) {
    const s0 = Object.assign(baseState(ex), g);
    if (tryEv(c.pre, s0) !== true) continue;
    const s1 = tryRun(c.init, s0); if (!s1) continue;
    if (tryEv(inv, s1) !== true) { R.start = { ok: false, input: pick(s0, ex.inputs), state: s1 }; break; }
  }
  for (const g of grid(ex, c.names)) {
    if (tryEv(inv, g) !== true) continue;
    const b = tryEv(c.cond, g); if (b === null) continue;
    if (b) {
      if (!R.keep.ok) continue;
      const s2 = tryRun(c.body, g);
      if (!s2) { R.keep.n++; R.keep = { ok: false, before: { ...g }, undef: true }; continue; }
      R.keep.n++;
      if (tryEv(inv, s2) !== true) R.keep = { ok: false, before: { ...g }, after: s2 };
    } else {
      if (!R.end.ok) continue;
      R.end.n++;
      if (tryEv(c.post, g) !== true) R.end = { ok: false, state: { ...g } };
    }
    if (!R.keep.ok && !R.end.ok) break;
  }
  R.ok = R.start.ok && R.keep.ok && R.end.ok;
  return R;
}

function checkVariant(ex, V, invAst) {
  const c = compile(ex), I = invAst || c.inv;
  const R = { nonneg: { ok: true }, dec: { ok: true }, n: 0 };
  for (const g of grid(ex, c.names)) {
    if (tryEv(I, g) !== true || tryEv(c.cond, g) !== true) continue;
    const v0 = tryEv(V, g); if (v0 === null) continue;
    R.n++;
    if (R.nonneg.ok && v0 < 0) R.nonneg = { ok: false, state: { ...g }, v: v0 };
    const s2 = tryRun(c.body, g); if (!s2) continue;
    const v1 = tryEv(V, s2);
    if (v1 !== null && R.dec.ok && !(v1 < v0)) R.dec = { ok: false, before: { ...g }, after: s2, v0, v1 };
    if (!R.nonneg.ok && !R.dec.ok) break;
  }
  R.ok = R.nonneg.ok && R.dec.ok;
  return R;
}

function equiv(ex, a, b) {
  const c = compile(ex);
  for (const g of gridS(ex, c.names)) {
    const va = tryEv(a, g), vb = tryEv(b, g);
    if (va === null || vb === null) continue;
    if (va !== vb) return { ok: false, state: { ...g }, va, vb };
  }
  return { ok: true };
}
function implies(ex, a, b) {
  const c = compile(ex);
  for (const g of gridS(ex, c.names)) {
    if (tryEv(a, g) !== true) continue;
    if (tryEv(b, g) === false) return { ok: false, state: { ...g } };
  }
  return { ok: true };
}

/* weakest preconditions */
function wp(s, Q) {
  if (s.k === 'asg') return sub(Q, s.x, s.e);
  const t = wpList(s.th, Q)[0], e = s.el ? wpList(s.el, Q)[0] : Q;
  return mkAnd(mkImp(s.c, t), mkImp(mkNot(s.c), e));
}
function wpList(stmts, Q) { const arr = [Q]; for (let j = stmts.length - 1; j >= 0; j--) arr.unshift(wp(stmts[j], arr[0])); return arr; }
const stmtCode = s => s.k === 'asg' ? `${s.x} = ${s.src};` : `if (${s.csrc}) { … }${s.el ? ' else { … }' : ''}`;

/* annotated program lines, RWTH style */
function annotateList(stmts, ctx, post, ind, L) {
  const pres = wpList(stmts, post);
  const A = (f, i, note) => L.push({ k: 'a', s: pr(f), f, ind: i, note });
  stmts.forEach((s, j) => {
    if (s.k === 'asg') {
      if (j === 0) A(pres[0], ind, 'imp');
      L.push({ k: 'c', s: `${s.x} = ${s.src};`, ind });
      A(pres[j + 1], ind, 'asg');
    } else {
      const phi = j === 0 ? ctx : pres[j];
      L.push({ k: 'c', s: `if (${s.csrc}) {`, ind });
      A(mkAnd(phi, s.c), ind + 1, 'cond');
      annotateList(s.th, mkAnd(phi, s.c), pres[j + 1], ind + 1, L);
      if (s.el) {
        L.push({ k: 'c', s: '} else {', ind });
        A(mkAnd(phi, mkNot(s.c)), ind + 1, 'cond');
        annotateList(s.el, mkAnd(phi, mkNot(s.c)), pres[j + 1], ind + 1, L);
        L.push({ k: 'c', s: '}', ind });
        A(pres[j + 1], ind, 'if2');
      } else {
        L.push({ k: 'c', s: '}', ind });
        A(pres[j + 1], ind, 'if1');
      }
    }
  });
  return L;
}
function annotate(ex, invAst) {
  const c = compile(ex), L = [];
  L.push({ k: 'a', s: pr(c.pre), f: c.pre, ind: 0, note: 'pre' });
  if (c.cond) {
    const I = invAst || c.inv;
    if (c.init.length) annotateList(c.init, c.pre, I, 0, L); else L.push({ k: 'a', s: pr(I), f: I, ind: 0, note: 'imp' });
    L.push({ k: 'c', s: `while (${ex.cond}) {`, ind: 0 });
    const IB = mkAnd(I, c.cond);
    L.push({ k: 'a', s: pr(IB), f: IB, ind: 1, note: 'loop' });
    annotateList(c.body, IB, I, 1, L);
    L.push({ k: 'c', s: '}', ind: 0 });
    const IN = mkAnd(I, mkNot(c.cond));
    L.push({ k: 'a', s: pr(IN), f: IN, ind: 0, note: 'loop' });
    L.push({ k: 'a', s: pr(c.post), f: c.post, ind: 0, note: 'imp' });
  } else annotateList(c.init, c.pre, c.post, 0, L);
  return L;
}
function auxName(ex) { const c = compile(ex); return c.names.includes('m') ? 'm0' : 'm'; }
function auxEx(ex) {
  if (ex._aux) return ex._aux;
  const a = { ...ex, id: ex.id + '_aux', vars: { ...ex.vars, [auxName(ex)]: [-3, 14] } };
  Object.defineProperty(ex, '_aux', { value: a, enumerable: false });
  return a;
}
function annotateVariant(ex, Vast, invAst) {
  const c = compile(ex), L = [], m = { t: 'var', v: auxName(ex) }, V = Vast || c.variant;
  const ctx = mkAnd({ t: 'cmp', op: 'eq', a: V, b: m }, ex.varNeedsInv ? mkAnd(invAst || c.inv, c.cond) : c.cond);
  L.push({ k: 'a', s: pr(ctx), f: ctx, ind: 1, note: 'var' });
  annotateList(c.body, ctx, { t: 'cmp', op: 'lt', a: V, b: m }, 1, L);
  return L;
}

/* guided steps (language-neutral) */
function genSteps(list, post, ctx, ind, prefix, out) {
  const pres = wpList(list, post);
  for (let j = list.length - 1; j >= 0; j--) {
    const s = list[j];
    if (s.k === 'asg') out.push({ k: 'input', id: prefix + j, code: `${s.x} = ${s.src};`, ind, after: pres[j + 1], expect: pres[j], x: s.x, tsrc: pr(s.e), br: prefix.slice(-1) });
    else {
      const phi = j === 0 ? ctx : pres[j];
      genSteps(s.th, pres[j + 1], mkAnd(phi, s.c), ind + 1, prefix + j + 't', out);
      if (s.el) genSteps(s.el, pres[j + 1], mkAnd(phi, mkNot(s.c)), ind + 1, prefix + j + 'e', out);
      else out.push({ k: 'implies', id: 'imp-' + prefix + j + 'n', upper: mkAnd(phi, mkNot(s.c)), lower: pres[j + 1], ind });
    }
  }
  if (list.length && list[0].k === 'asg') out.push({ k: 'implies', id: 'imp-' + prefix, upper: ctx, lower: pres[0], ind });
  return out;
}
function codeLines(stmts, ind, out = []) {
  for (const s of stmts) {
    if (s.k === 'asg') out.push({ k: 'c', s: `${s.x} = ${s.src};`, ind });
    else {
      out.push({ k: 'c', s: `if (${s.csrc}) {`, ind }); codeLines(s.th, ind + 1, out);
      if (s.el) { out.push({ k: 'c', s: '} else {', ind }); codeLines(s.el, ind + 1, out); }
      out.push({ k: 'c', s: '}', ind });
    }
  }
  return out;
}

function trace(ex, sample, max = 40) {
  const c = compile(ex);
  let s = Object.assign(baseState(ex), sample);
  s = run(c.init, s);
  if (!c.cond) return [{ it: 0, s: { ...s }, b: false }];
  const rows = [{ it: 0, s: { ...s }, b: ev(c.cond, s) }];
  let k = 0;
  while (ev(c.cond, s) && k < max) { s = run(c.body, s); k++; rows.push({ it: k, s: { ...s }, b: ev(c.cond, s) }); }
  return rows;
}

