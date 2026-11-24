/* ================= step-by-step visualisations: Prolog search tree, Haskell evaluation ================= */
const VZT = {
  de: { prog: 'Programm', fam: 'Familie', ari: 'Arithmetik und Listen', own: 'Eigenes Programm', query: 'Anfrage', build: 'Suchbaum erstellen', next: 'Nächster Schritt', prev: 'Schritt zurück', all: 'Alles zeigen', reset: 'Von vorn',
        step: 'Schritt {i} von {n}', answers: 'Gefundene Antworten', none: 'noch keine', legend: 'K3 = Klausel 3 des Programms. Jeder Knoten zeigt die noch offenen Ziele, die Kante die verwendete Klausel und die neuen Bindungen.',
        e_start: 'Start: Die Anfrage ist das erste Ziel.', e_clause: 'Das erste Ziel wird mit dem Kopf von Klausel {k} unifiziert{b}. Der Rumpf der Klausel ersetzt das Ziel.', e_builtin: 'Das eingebaute Prädikat {p} wird ausgewertet{b}.',
        e_success: 'Leere Zielliste: Erfolg. Prolog meldet {a}.', e_fail: 'Kein Kopf passt auf das erste Ziel: Fehlschlag. Prolog geht zurück (Backtracking) und probiert die nächste Klausel weiter oben im Baum.', e_error: 'Fehler: {d}', binds: ' mit {b}',
        truncated: 'Der Baum wurde nach {n} Knoten abgeschnitten, vermutlich ist er unendlich.', err_syntax: 'Das Programm oder die Anfrage enthält einen Syntaxfehler.', err_unknown: 'Unbekanntes Prädikat: {d}', clause: 'Klausel',
        hs_ex: 'Beispiel', hs_list: 'Liste', hs_op: 'Operator', hs_z: 'Startwert', hs_n: 'n', hs_k: 'Faktor', hs_from: 'ab', hs_steps: 'Auswertung', hs_def: 'Definition',
        ex_foldr: 'foldr', ex_foldl: 'foldl', ex_lazy: 'take und map auf [a..] (Lazy Evaluation)', ex_pat: 'Pattern Matching: f (x:y:ys) = x − f ys',
        n_start: 'Ausgangsausdruck.', n_foldr1: 'foldr f z (x:xs) = x `f` foldr f z xs: Das erste Element wird links abgespalten.', n_foldr_b: 'foldr f z [] = z: Die leere Liste liefert den Startwert, ganz rechts.', n_calc: 'Die innerste Klammer wird ausgerechnet: {c}.',
        n_foldl1: 'foldl f z (x:xs) = foldl f (z `f` x) xs: Der Akkumulator wächst, wird aber wegen Lazy Evaluation noch nicht ausgerechnet.', n_foldl_b: 'foldl f z [] = z: Übrig bleibt der aufgebaute Ausdruck, links geklammert.',
        n_enum: '[{a}..] liefert genau ein weiteres Element: {a} : [{a1}..].', n_map: 'map f (x:xs) = f x : map f xs', n_take: 'take n (x:xs) = x : take (n − 1) xs', n_mul: '({k}) {a} wird ausgerechnet, weil GHCi den Wert ausgeben will: {v}.',
        n_take0: 'take 0 _ = []: Hier hört die Auswertung auf. Der Rest der unendlichen Liste wird nie berechnet.', n_list: 'Listenschreibweise.',
        n_pat2: 'Das Muster (x:y:ys) passt mit x = {x}, y = {y}, ys = [{ys}]. y wird übersprungen.', n_pat1: 'Das Muster [x] passt: f [{x}] = {x}.', n_pat0: 'Das Muster [] passt: f [] = 0.' },
  en: { prog: 'Program', fam: 'Family', ari: 'Arithmetic and lists', own: 'Your own program', query: 'Query', build: 'Build the search tree', next: 'Next step', prev: 'Step back', all: 'Show all', reset: 'Start over',
        step: 'Step {i} of {n}', answers: 'Answers found', none: 'none yet', legend: 'K3 = clause 3 of the program. Each node shows the open goals, each edge the clause used and the new bindings.',
        e_start: 'Start: the query is the first goal.', e_clause: 'The first goal is unified with the head of clause {k}{b}. The clause body replaces the goal.', e_builtin: 'The built-in predicate {p} is evaluated{b}.',
        e_success: 'Empty goal list: success. Prolog reports {a}.', e_fail: 'No head matches the first goal: failure. Prolog goes back (backtracking) and tries the next clause higher up in the tree.', e_error: 'Error: {d}', binds: ' with {b}',
        truncated: 'The tree was cut off after {n} nodes; it is probably infinite.', err_syntax: 'The program or the query contains a syntax error.', err_unknown: 'Unknown predicate: {d}', clause: 'clause',
        hs_ex: 'Example', hs_list: 'List', hs_op: 'Operator', hs_z: 'Start value', hs_n: 'n', hs_k: 'Factor', hs_from: 'from', hs_steps: 'Evaluation', hs_def: 'Definition',
        ex_foldr: 'foldr', ex_foldl: 'foldl', ex_lazy: 'take and map on [a..] (lazy evaluation)', ex_pat: 'Pattern matching: f (x:y:ys) = x − f ys',
        n_start: 'Starting expression.', n_foldr1: 'foldr f z (x:xs) = x `f` foldr f z xs: the first element is split off on the left.', n_foldr_b: 'foldr f z [] = z: the empty list gives the start value, on the far right.', n_calc: 'The innermost bracket is computed: {c}.',
        n_foldl1: 'foldl f z (x:xs) = foldl f (z `f` x) xs: the accumulator grows but, due to lazy evaluation, is not computed yet.', n_foldl_b: 'foldl f z [] = z: what remains is the expression built up, bracketed to the left.',
        n_enum: '[{a}..] yields exactly one more element: {a} : [{a1}..].', n_map: 'map f (x:xs) = f x : map f xs', n_take: 'take n (x:xs) = x : take (n − 1) xs', n_mul: '({k}) {a} is computed because GHCi wants to print the value: {v}.',
        n_take0: 'take 0 _ = []: evaluation stops here. The rest of the infinite list is never computed.', n_list: 'List notation.',
        n_pat2: 'The pattern (x:y:ys) matches with x = {x}, y = {y}, ys = [{ys}]. y is skipped.', n_pat1: 'The pattern [x] matches: f [{x}] = {x}.', n_pat0: 'The pattern [] matches: f [] = 0.' }
};
const vzt = (k, rep) => { let s = VZT[lang][k] ?? VZT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };

/* ---------- Prolog search tree ---------- */
let SLD = { prog: 'fam', own: 'p(a).\np(b).\nq(b).\nr(X) :- p(X), q(X).', query: 'grossvater(hans, E)', res: null, k: 1 };
const SLD_PRESETS = { fam: ['grossvater(hans, E)', 'elternteil(X, tom)', 'vater(peter, anna)'], ari: ['laenge([a, b], N)', 'summe([4, 5], S)', 'laenge(L, 1)'], own: ['r(X)'] };
function sldProgram() { return SLD.prog === 'fam' ? FAM : SLD.prog === 'ari' ? ARI : SLD.own; }
function sldClauses(src) { return src.split(/\.\s*(?:\n|$)/).map(s => s.replace(/%.*$/gm, '').trim()).filter(Boolean).map(s => s + '.'); }
function sldBuild() { SLD.res = PL.traceSLD(sldProgram(), SLD.query, 70); SLD.k = 1; }
function sldTreeHTML(nodes, k) {
  const shown = nodes.slice(0, k), cur = shown[shown.length - 1];
  const kids = id => shown.filter(n => n.parent === id);
  const lab = n => n.edge ? `<span class="sld-e">${n.edge.clause ? 'K' + n.edge.clause : esc(n.edge.builtin)}${n.edge.binds ? ` · <span class="mono">${esc(n.edge.binds)}</span>` : ''}</span>` : '';
  const box = n => {
    const done = shown.indexOf(n) < shown.length - 1 || n.kind !== 'goal';
    const st = n.kind === 'success' ? `<span class="sld-ok">✓ ${esc(n.answer)}</span>` : n.kind === 'fail' && done ? '<span class="sld-no">✗</span>' : n.kind === 'error' ? `<span class="sld-no">⚠ ${esc(n.err)}</span>` : '';
    return `<div class="sld-n ${n.kind} ${n === cur ? 'cur' : ''}">${lab(n)}<span class="sld-g mono">${esc(n.goals)}</span>${st}</div>`;
  };
  const rec = n => `<li>${box(n)}${kids(n.id).length ? `<ul>${kids(n.id).map(rec).join('')}</ul>` : ''}</li>`;
  return `<ul class="sld-tree">${shown.length ? rec(shown[0]) : ''}</ul>`;
}
function sldExplain(n) {
  if (!n) return '';
  if (n.kind === 'error') return vzt('e_error', { d: n.err === 'unknown' ? vzt('err_unknown', { d: n.detail }) : n.err });
  const b = n.edge && n.edge.binds ? vzt('binds', { b: n.edge.binds }) : '';
  let s = !n.edge ? vzt('e_start') : n.edge.clause ? vzt('e_clause', { k: n.edge.clause, b }) : vzt('e_builtin', { p: n.edge.builtin, b });
  if (n.kind === 'success') s += ' ' + vzt('e_success', { a: n.answer });
  if (n.kind === 'fail') s += ' ' + vzt('e_fail');
  return s;
}
function renderSLD() {
  const root = document.getElementById('sld'); if (!root) return;
  if (!SLD.res) sldBuild();
  const R = SLD.res, src = sldProgram(), cls = sldClauses(src);
  const curNode = R.nodes ? R.nodes[SLD.k - 1] : null, usedK = curNode && curNode.edge && curNode.edge.clause;
  const answers = R.nodes ? R.nodes.slice(0, SLD.k).filter(n => n.kind === 'success').map(n => n.answer) : [];
  root.innerHTML = `<div class="sld-ctrl">
      <label class="f"><span>${esc(vzt('prog'))}</span><select data-sp="1">${[['fam', vzt('fam')], ['ari', vzt('ari')], ['own', vzt('own')]].map(([k, n]) => `<option value="${k}" ${SLD.prog === k ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></label>
      <label class="f sld-q"><span>${esc(vzt('query'))}</span><span class="row"><span class="mono">?-</span><input class="mono" data-sq="1" value="${esc(SLD.query)}" spellcheck="false" autocomplete="off"><button type="button" class="btn primary" data-sact="build">${esc(vzt('build'))}</button></span></label>
      <div class="sld-pre">${(SLD_PRESETS[SLD.prog] || []).map(q => `<button type="button" class="gl-chip" data-spre="${esc(q)}">${esc(q)}</button>`).join('')}</div></div>
    <div class="sld-grid">
      <div class="sld-prog">${SLD.prog === 'own' ? `<textarea class="mono lxarea" rows="7" data-sown="1" spellcheck="false">${esc(SLD.own)}</textarea>` : ''}
        <ol class="sld-cl">${cls.map((c, i) => `<li class="${usedK === i + 1 ? 'on' : ''}"><span class="mono">K${i + 1}</span><code>${esc(c)}</code></li>`).join('')}</ol></div>
      <div class="sld-main">
        ${R.error ? `<div class="fb bad">${esc(R.error === 'unknown' ? vzt('err_unknown', { d: R.detail }) : vzt('err_syntax'))}</div>` : `
        <div class="sld-bar"><button type="button" class="btn" data-sact="prev" ${SLD.k <= 1 ? 'disabled' : ''}>← ${esc(vzt('prev'))}</button><button type="button" class="btn primary" data-sact="next" ${SLD.k >= R.nodes.length ? 'disabled' : ''}>${esc(vzt('next'))} →</button><button type="button" class="btn ghost" data-sact="all">${esc(vzt('all'))}</button><button type="button" class="btn ghost" data-sact="reset">${esc(vzt('reset'))}</button><span class="small muted">${esc(vzt('step', { i: SLD.k, n: R.nodes.length }))}</span></div>
        <div class="fb info sld-x" aria-live="polite">${esc(sldExplain(curNode))}</div>
        <div class="sld-wrap">${sldTreeHTML(R.nodes, SLD.k)}</div>
        ${R.truncated && SLD.k >= R.nodes.length ? `<p class="small muted">${esc(vzt('truncated', { n: R.nodes.length }))}</p>` : ''}
        <p class="sld-ans"><b>${esc(vzt('answers'))}:</b> ${answers.length ? answers.map(a => `<span class="mono">${esc(a)}</span>`).join(' ; ') : esc(vzt('none'))}</p>`}
        <p class="small muted">${esc(vzt('legend'))}</p></div></div>`;
}
function initSLD() {
  const root = document.getElementById('sld'); if (!root) return;
  root.addEventListener('click', e => {
    const p = e.target.closest('[data-spre]'); if (p) { SLD.query = p.dataset.spre; sldBuild(); renderSLD(); return; }
    const b = e.target.closest('[data-sact]'); if (!b) return;
    const a = b.dataset.sact, n = SLD.res && SLD.res.nodes ? SLD.res.nodes.length : 1;
    if (a === 'build') { const q = root.querySelector('[data-sq]'); if (q) SLD.query = q.value; sldBuild(); }
    else if (a === 'next') SLD.k = Math.min(n, SLD.k + 1);
    else if (a === 'prev') SLD.k = Math.max(1, SLD.k - 1);
    else if (a === 'all') SLD.k = n;
    else if (a === 'reset') SLD.k = 1;
    renderSLD();
    const f = root.querySelector(`[data-sact="${a}"]`); if (f && !f.disabled) f.focus({ preventScroll: true });
    const c = root.querySelector('.sld-n.cur'); if (c && (a === 'next' || a === 'prev')) c.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  });
  root.addEventListener('change', e => {
    if (e.target.closest('[data-sp]')) { SLD.prog = e.target.value; SLD.query = SLD_PRESETS[SLD.prog][0]; sldBuild(); renderSLD(); }
  });
  root.addEventListener('input', e => { if (e.target.closest('[data-sown]')) SLD.own = e.target.value; if (e.target.closest('[data-sq]')) SLD.query = e.target.value; });
  root.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.closest('[data-sq]')) { e.preventDefault(); SLD.query = e.target.value; sldBuild(); renderSLD(); } });
}

/* ---------- Haskell evaluation steps ---------- */
let HS = { ex: 'foldr', list: '1, 2, 3', op: '-', z: '0', n: '3', k: '2', a: '1', i: 1 };
const hN = v => v < 0 ? `(${v})` : String(v);
const hAp = (op, a, b) => op === '+' ? a + b : op === '-' ? a - b : a * b;
function hsSteps() {
  const xs = HS.list.split(',').map(s => parseInt(s.trim(), 10)).filter(v => !isNaN(v)).slice(0, 7), op = HS.op, z = parseInt(HS.z, 10) || 0, S = [];
  const L = a => `[${a.join(',')}]`;
  if (HS.ex === 'foldr') {
    const render = (pre, tail, tailIsOp) => { let s = tail, isOp = tailIsOp; for (let j = pre.length - 1; j >= 0; j--) { s = `${hN(pre[j])} ${op} ${isOp ? '(' + s + ')' : s}`; isOp = true; } return s; };
    S.push([`foldr (${op}) ${hN(z)} ${L(xs)}`, vzt('n_start')]);
    for (let i = 1; i <= xs.length; i++) S.push([render(xs.slice(0, i), `foldr (${op}) ${hN(z)} ${L(xs.slice(i))}`, false), vzt('n_foldr1')]);
    S.push([render(xs, hN(z), false), vzt('n_foldr_b')]);
    let v = z;
    for (let j = xs.length - 1; j >= 0; j--) { const nv = hAp(op, xs[j], v); S.push([render(xs.slice(0, j), j ? hN(nv) : String(nv), false), vzt('n_calc', { c: `${hN(xs[j])} ${op} ${hN(v)} = ${nv}` })]); v = nv; }
  } else if (HS.ex === 'foldl') {
    const acc = n => { let s = hN(z); for (let i = 0; i < n; i++) s = `${i ? '(' + s + ')' : s} ${op} ${hN(xs[i])}`; return s; };
    S.push([`foldl (${op}) ${hN(z)} ${L(xs)}`, vzt('n_start')]);
    for (let i = 1; i <= xs.length; i++) S.push([`foldl (${op}) (${acc(i)}) ${L(xs.slice(i))}`, vzt('n_foldl1')]);
    S.push([acc(xs.length), vzt('n_foldl_b')]);
    let v = z;
    for (let j = 0; j < xs.length; j++) {
      const nv = hAp(op, v, xs[j]); let s = j < xs.length - 1 ? hN(nv) : String(nv);
      for (let i = j + 1; i < xs.length; i++) s = `${i > j + 1 ? '(' + s + ')' : s} ${op} ${hN(xs[i])}`;
      S.push([s, vzt('n_calc', { c: `${hN(v)} ${op} ${hN(xs[j])} = ${nv}` })]); v = nv;
    }
  } else if (HS.ex === 'lazy') {
    const n = Math.max(0, Math.min(5, parseInt(HS.n, 10) || 0)), k = parseInt(HS.k, 10) || 2, a = parseInt(HS.a, 10) || 1, f = `(*${k})`;
    const pre = P => P.length ? P.join(' : ') + ' : ' : '';
    S.push([`take ${n} (map ${f} [${a}..])`, vzt('n_start')]);
    const P = [];
    for (let i = 0; i < n; i++) {
      const c = a + i, r = n - i;
      S.push([`${pre(P)}take ${r} (map ${f} (${c} : [${c + 1}..]))`, vzt('n_enum', { a: c, a1: c + 1 })]);
      S.push([`${pre(P)}take ${r} (${f} ${c} : map ${f} [${c + 1}..])`, vzt('n_map')]);
      S.push([`${pre(P)}${f} ${c} : take ${r - 1} (map ${f} [${c + 1}..])`, vzt('n_take')]);
      P.push(c * k);
      S.push([`${pre(P)}take ${r - 1} (map ${f} [${c + 1}..])`, vzt('n_mul', { k: '*' + k, a: c, v: c * k })]);
    }
    S.push([`${pre(P)}[]`, vzt('n_take0')]);
    S.push([`[${P.join(',')}]`, vzt('n_list')]);
  } else {
    const render = (pre, tail, tailIsOp) => { let s = tail, isOp = tailIsOp; for (let j = pre.length - 1; j >= 0; j--) { s = `${hN(pre[j])} - ${isOp ? '(' + s + ')' : s}`; isOp = true; } return s; };
    S.push([`f ${L(xs)}`, vzt('n_start')]);
    let rest = xs.slice(), pre = [];
    while (rest.length >= 2) { const [x, y, ...ys] = rest; pre.push(x); rest = ys; S.push([render(pre, `f ${L(rest)}`, false), vzt('n_pat2', { x, y, ys: ys.join(',') })]); }
    const base = rest.length ? rest[0] : 0;
    S.push([render(pre, hN(base), false), rest.length ? vzt('n_pat1', { x: base }) : vzt('n_pat0')]);
    let v = base;
    for (let j = pre.length - 1; j >= 0; j--) { const nv = pre[j] - v; S.push([render(pre.slice(0, j), j ? hN(nv) : String(nv), false), vzt('n_calc', { c: `${hN(pre[j])} - ${hN(v)} = ${nv}` })]); v = nv; }
  }
  return S;
}
const HS_DEF = {
  foldr: 'foldr :: (a -> b -> b) -> b -> [a] -> b\nfoldr f z []     = z\nfoldr f z (x:xs) = f x (foldr f z xs)',
  foldl: 'foldl :: (b -> a -> b) -> b -> [a] -> b\nfoldl f z []     = z\nfoldl f z (x:xs) = foldl f (f z x) xs',
  lazy: 'take 0 _      = []\ntake n (x:xs) = x : take (n - 1) xs\n\nmap f []     = []\nmap f (x:xs) = f x : map f xs',
  pat: 'f :: [Int] -> Int\nf []       = 0\nf [x]      = x\nf (x:y:ys) = x - f ys'
};
function renderHS() {
  const root = document.getElementById('hsteps'); if (!root) return;
  const S = hsSteps(); HS.i = Math.min(Math.max(1, HS.i), S.length);
  const inp = (k, lab, w) => `<label class="f"><span>${esc(lab)}</span><input class="mono" data-hs="${k}" value="${esc(HS[k])}" style="width:${w}" spellcheck="false" autocomplete="off"></label>`;
  const params = HS.ex === 'lazy' ? inp('n', vzt('hs_n'), '5ch') + inp('k', vzt('hs_k'), '5ch') + inp('a', vzt('hs_from'), '5ch')
    : HS.ex === 'pat' ? inp('list', vzt('hs_list'), '18ch')
    : inp('list', vzt('hs_list'), '14ch') + `<label class="f"><span>${esc(vzt('hs_op'))}</span><select data-hs="op">${['-', '+', '*'].map(o => `<option ${HS.op === o ? 'selected' : ''}>${o}</option>`).join('')}</select></label>` + inp('z', vzt('hs_z'), '6ch');
  root.innerHTML = `<div class="sld-ctrl"><label class="f"><span>${esc(vzt('hs_ex'))}</span><select data-hs="ex">${[['foldr', vzt('ex_foldr')], ['foldl', vzt('ex_foldl')], ['lazy', vzt('ex_lazy')], ['pat', vzt('ex_pat')]].map(([k, n]) => `<option value="${k}" ${HS.ex === k ? 'selected' : ''}>${esc(n)}</option>`).join('')}</select></label>${params}</div>
    <div class="sld-grid hs-grid"><div class="sld-prog"><span class="small muted">${esc(vzt('hs_def'))}</span><pre class="code">${esc(HS_DEF[HS.ex])}</pre></div>
    <div class="sld-main">
      <div class="sld-bar"><button type="button" class="btn" data-hact="prev" ${HS.i <= 1 ? 'disabled' : ''}>← ${esc(vzt('prev'))}</button><button type="button" class="btn primary" data-hact="next" ${HS.i >= S.length ? 'disabled' : ''}>${esc(vzt('next'))} →</button><button type="button" class="btn ghost" data-hact="all">${esc(vzt('all'))}</button><button type="button" class="btn ghost" data-hact="reset">${esc(vzt('reset'))}</button><span class="small muted">${esc(vzt('step', { i: HS.i, n: S.length }))}</span></div>
      <div class="fb info sld-x" aria-live="polite">${esc(S[HS.i - 1][1])}</div>
      <ol class="hs-steps">${S.slice(0, HS.i).map((s, j) => `<li class="${j === HS.i - 1 ? 'cur' : ''}"><span class="hs-eq">${j ? '=' : ''}</span><code>${esc(s[0])}</code></li>`).join('')}</ol></div></div>`;
}
function initHS() {
  const root = document.getElementById('hsteps'); if (!root) return;
  root.addEventListener('click', e => {
    const b = e.target.closest('[data-hact]'); if (!b) return;
    const n = hsSteps().length, a = b.dataset.hact;
    HS.i = a === 'next' ? Math.min(n, HS.i + 1) : a === 'prev' ? Math.max(1, HS.i - 1) : a === 'all' ? n : 1;
    renderHS(); const f = root.querySelector(`[data-hact="${a}"]`); if (f && !f.disabled) f.focus({ preventScroll: true });
  });
  const upd = e => { const i = e.target.closest('[data-hs]'); if (!i) return; HS[i.dataset.hs] = i.value; if (i.dataset.hs === 'ex' || e.type === 'change') { HS.i = 1; renderHS(); const again = root.querySelector(`[data-hs="${i.dataset.hs}"]`); if (again && again.tagName === 'INPUT') { again.focus(); again.setSelectionRange(again.value.length, again.value.length); } } };
  root.addEventListener('change', upd);
}
