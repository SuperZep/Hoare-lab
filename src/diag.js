/* ================= typical-mistake diagnosis =================
   Given a wrong answer, try to name the misconception behind it.
   Every function returns { k, rep } (message key + values) or null; the text is built at render time. */
const DGT = {
  de: {
    lab: 'Typischer Fehler',
    wp_unchanged: 'Zusicherung nur abgeschrieben: Vor einer Zuweisung gilt nicht dieselbe Formel wie danach. Ersetze die zugewiesene Variable durch die rechte Seite.',
    wp_forward: 'Vorwärts statt rückwärts gerechnet: Du hast die Zuweisung „rückgängig gemacht“ (etwa x − 2 statt x + 2). Die Zuweisungsregel setzt die rechte Seite ein: Aus ⟨φ⟩ nach x = t wird ⟨φ[x := t]⟩ davor.',
    wp_paren: 'Klammern vergessen: Die rechte Seite wird als Ganzes eingesetzt, also 2 · (x + y) und nicht 2 · x + y.',
    wp_lastonly: 'Nur die letzte Zuweisung berücksichtigt: Das ist die Zusicherung in der Mitte. Rechne noch über die erste Zuweisung zurück.',
    wp_firstonly: 'Die untere Zuweisung übersprungen: Von unten nach oben heißt, zuerst über die letzte Zuweisung zurückrechnen.',
    wp_order: 'Reihenfolge vertauscht: Zuerst wird die untere Zuweisung eingesetzt, danach die obere.',
    inv_post: 'Nachbedingung als Invariante: Sie gilt erst nach der Schleife. Die Invariante beschreibt den Zwischenstand nach jeder Runde.',
    inv_start: 'Randfall übersehen: Die Vorbedingung erlaubt {in}. Für diese Eingabe gilt deine Formel schon vor der Schleife nicht.',
    inv_bound: 'Schranke vergessen: Ohne {b} folgt aus I ∧ ¬B nicht die Nachbedingung. Ergänze die Invariante um {b}.',
    inv_weak: 'Zu schwach: Am Ende folgt aus I ∧ ¬B nicht die Nachbedingung. Die Invariante muss festhalten, was bisher berechnet wurde, also wie das Zwischenergebnis mit dem Zähler zusammenhängt.',
    inv_reach: 'Schon in einem echten Lauf falsch: Bei der Eingabe {in} gilt deine Formel nach {k} Schleifendurchläufen nicht mehr. Spiel die Schleife mit dieser Eingabe auf dem Papier durch.',
    inv_notind: 'Wahr, aber nicht induktiv: Deine Formel stimmt in jedem echten Lauf, aber aus I ∧ B allein folgt sie nach dem Rumpf nicht. Meist fehlt der Zusammenhang zwischen den Variablen, etwa res = 3 · i.',
    var_grows: 'Die Variante wächst ({v0} → {v1}): Sie muss in jeder Runde kleiner werden. Nimm den Abstand zur Schranke, zum Beispiel n − i statt i.',
    var_const: 'Die Variante ändert sich im Rumpf nicht ({v0} → {v1}). Sie muss von einer Variable abhängen, die der Rumpf verändert.',
    var_neg: 'Kann negativ werden: In der Schleife muss V ≥ 0 sein. Nutze die Schleifenbedingung; aus i < n folgt zum Beispiel n − i > 0.',
    mc_end: 'Die dritte Bedingung vergessen: Neben Start und Erhalt muss I ∧ ¬B die Nachbedingung liefern. Dafür fehlt hier eine Schranke oder ein Zusammenhang.',
    mc_keep: 'Erhalt zu schnell bejaht: Er muss für jeden Zustand mit I ∧ B gelten, nicht nur für die Werte, die das Programm wirklich durchläuft.',
    mc_start: 'Vorbedingung nicht ausgereizt: Die Invariante muss nach der Initialisierung für jede erlaubte Eingabe gelten, auch für Randfälle wie n = 0 oder y = 0.',
    mc_strict: 'Zu streng geprüft: Eine Invariante muss nicht wie die Musterlösung aussehen. Äquivalente Umformungen oder zusätzliche wahre Bedingungen sind erlaubt, solange Start, Erhalt und Ende gelten.',
    mc_other: 'Prüfe die drei Bedingungen der Reihe nach: Start, Erhalt, Ende. Die erste, die scheitert, ist die Antwort.',
    j_incl: 'Grenze mitgezählt: i < {b} läuft nur bis {b1}, nicht bis {b}.',
    j_from: 'Startwert übersehen: Die Schleife beginnt bei i = {a}.',
    j_floor: 'Abgerundet statt gezählt: Die Schleife läuft, solange x > 0 ist. Auch der letzte Durchlauf, nach dem x ≤ 0 wird, zählt mit.',
    j_off: 'Um eins verzählt: Zähle die Durchläufe einzeln, am besten in einer kleinen Tabelle mit x und y.',
    j_python: 'Gerechnet wie in Python oder in der Mathematik: In Java rundet / in Richtung 0, und % hat das Vorzeichen von p. Also {p} / {q} = {d} und {p} % {q} = {m}.',
    j_part: 'Nur einen Teil berechnet: z ist Quotient plus Rest, also p / q + p % q.',
    j_post: 'i++ und ++i verwechselt: i++ liefert den alten Wert und erhöht danach, ++i erhöht zuerst und liefert den neuen Wert. Beide Erhöhungen zählen.',
    j_values: 'Werte statt Indizes: Die Schleife nimmt die Elemente an den Positionen 0, 2, 4, …, egal ob die Werte gerade sind.',
    j_all: 'Alle Elemente summiert: i += 2 überspringt jedes zweite Element.',
    j_odd: 'Indizes ab 1 gezählt: Java-Arrays beginnen bei Index 0.',
    j_fact: 'Schrittweite übersehen: f ruft sich mit n − 2 auf, nicht mit n − 1.',
    j_base: 'Basisfall falsch: Für n ≤ 1 liefert f den Wert 1, nicht 0.',
    j_square: 'Die innere Schleife beginnt bei j = i, nicht bei 0: Sie wird mit jedem i kürzer.',
    j_strict: 'j = i zählt mit: Die innere Schleife läuft für jedes i auch einmal mit j = i.',
    h_noctx: 'Typklasse vergessen: Der Ausdruck benutzt eine Funktion mit Einschränkung, deshalb gehört {c} vor den Typ.',
    h_extractx: 'Unnötige Einschränkung: Für diesen Ausdruck wird keine Typklasse gebraucht.',
    h_ctx: 'Falsche Typklasse: Der Typ stimmt, aber die Einschränkung muss {c} lauten.',
    h_special: 'Zu speziell: Gefragt ist der allgemeinste Typ. Wo nichts einen bestimmten Typ erzwingt, steht eine Typvariable wie a.',
    h_paren: 'Klammern vergessen: Ein Argument mit Funktionstyp muss geklammert werden, etwa (a -> b) -> [a] -> [b]. Ohne Klammern bedeutet a -> b -> [a] etwas anderes.',
    h_curry: 'Tupel statt Currying: Haskell-Funktionen nehmen ihre Argumente nacheinander, also a -> b -> c statt (a, b) -> c.',
    u_occurs: 'Occurs-Check vergessen: Eine Variable kann nicht an einen Term gebunden werden, der sie selbst enthält, etwa X = f(X). Mit Occurs-Check sind die Terme nicht unifizierbar.',
    u_clash: 'Konflikt übersehen: Vergleiche Funktor und Stelligkeit Stelle für Stelle. Zwei verschiedene Konstanten oder Funktoren passen nie zusammen.',
    u_bind: 'Zu viel festgelegt: Du hast {v} an einen konkreten Term gebunden. Im allgemeinsten Unifikator bleibt {v} eine Variable.',
    u_check: 'Mach die Probe: Setze deine Substitution in beide Terme ein. Danach müssen sie Zeichen für Zeichen gleich sein.',
    u_missed: 'Zu früh aufgegeben: Variablen dürfen an beliebige Terme gebunden werden. Nur verschiedene Funktoren oder Konstanten und der Occurs-Check verhindern eine Unifikation.'
  },
  en: {
    lab: 'Typical mistake',
    wp_unchanged: 'Assertion just copied: before an assignment the formula is not the same as after it. Replace the assigned variable with the right-hand side.',
    wp_forward: 'Worked forwards instead of backwards: you “undid” the assignment (e.g. x − 2 instead of x + 2). The assignment rule plugs in the right-hand side: ⟨φ⟩ after x = t becomes ⟨φ[x := t]⟩ before it.',
    wp_paren: 'Missing parentheses: the right-hand side is substituted as a whole, so 2 · (x + y), not 2 · x + y.',
    wp_lastonly: 'Only the last assignment taken into account: that is the assertion in the middle. Work back over the first assignment as well.',
    wp_firstonly: 'Skipped the lower assignment: bottom-up means you first work back over the last assignment.',
    wp_order: 'Order swapped: the lower assignment is substituted first, then the upper one.',
    inv_post: 'Postcondition used as invariant: it only holds after the loop. The invariant describes the intermediate state after each round.',
    inv_start: 'Edge case missed: the precondition allows {in}. For this input your formula already fails before the loop.',
    inv_bound: 'Missing bound: without {b}, I ∧ ¬B does not imply the postcondition. Add {b} to the invariant.',
    inv_weak: 'Too weak: at the end, I ∧ ¬B does not imply the postcondition. The invariant must record what has been computed so far, i.e. how the intermediate result relates to the counter.',
    inv_reach: 'False even in a real run: for the input {in} your formula no longer holds after {k} iterations. Trace the loop with this input on paper.',
    inv_notind: 'True but not inductive: your formula holds in every real run, but I ∧ B alone does not imply it after the body. Usually the relation between the variables is missing, e.g. res = 3 · i.',
    var_grows: 'The variant grows ({v0} → {v1}): it must decrease in every round. Use the distance to the bound, e.g. n − i instead of i.',
    var_const: 'The variant does not change in the body ({v0} → {v1}). It must depend on a variable the body changes.',
    var_neg: 'Can become negative: inside the loop V ≥ 0 must hold. Use the loop condition; for example i < n gives n − i > 0.',
    mc_end: 'Forgot the third condition: besides start and preservation, I ∧ ¬B must give the postcondition. A bound or a relation is missing for that here.',
    mc_keep: 'Preservation accepted too quickly: it must hold for every state with I ∧ B, not only for the values the program actually reaches.',
    mc_start: 'Precondition not fully used: the invariant must hold after initialisation for every allowed input, including edge cases like n = 0 or y = 0.',
    mc_strict: 'Checked too strictly: an invariant need not look like the model solution. Equivalent rewritings or additional true conditions are fine as long as start, preservation and end hold.',
    mc_other: 'Check the three conditions in order: start, preservation, end. The first one that fails is the answer.',
    j_incl: 'Counted the bound: i < {b} only runs up to {b1}, not to {b}.',
    j_from: 'Missed the start value: the loop starts at i = {a}.',
    j_floor: 'Rounded down instead of counting: the loop runs while x > 0. The last iteration, after which x ≤ 0, counts too.',
    j_off: 'Off by one: count the iterations one by one, ideally in a small table with x and y.',
    j_python: 'Computed as in Python or in maths: in Java / rounds towards 0, and % takes the sign of p. So {p} / {q} = {d} and {p} % {q} = {m}.',
    j_part: 'Only computed part of it: z is quotient plus remainder, p / q + p % q.',
    j_post: 'Mixed up i++ and ++i: i++ yields the old value and increments afterwards, ++i increments first and yields the new value. Both increments count.',
    j_values: 'Values instead of indices: the loop takes the elements at positions 0, 2, 4, …, whether or not the values are even.',
    j_all: 'Summed all elements: i += 2 skips every second element.',
    j_odd: 'Counted indices from 1: Java arrays start at index 0.',
    j_fact: 'Missed the step size: f calls itself with n − 2, not n − 1.',
    j_base: 'Wrong base case: for n ≤ 1, f returns 1, not 0.',
    j_square: 'The inner loop starts at j = i, not at 0: it gets shorter with every i.',
    j_strict: 'j = i counts too: the inner loop also runs once with j = i for every i.',
    h_noctx: 'Forgot the type class: the expression uses a function with a constraint, so {c} belongs in front of the type.',
    h_extractx: 'Unnecessary constraint: this expression needs no type class.',
    h_ctx: 'Wrong type class: the type is right, but the constraint must be {c}.',
    h_special: 'Too specific: the most general type is asked for. Where nothing forces a particular type, a type variable like a appears.',
    h_paren: 'Missing parentheses: an argument with a function type must be parenthesised, e.g. (a -> b) -> [a] -> [b]. Without them, a -> b -> [a] means something else.',
    h_curry: 'Tuple instead of currying: Haskell functions take their arguments one after another, so a -> b -> c instead of (a, b) -> c.',
    u_occurs: 'Forgot the occurs check: a variable cannot be bound to a term that contains it, e.g. X = f(X). With the occurs check the terms are not unifiable.',
    u_clash: 'Missed a clash: compare functor and arity position by position. Two different constants or functors never match.',
    u_bind: 'Fixed too much: you bound {v} to a concrete term. In the most general unifier {v} stays a variable.',
    u_check: 'Check your answer: apply your substitution to both terms. Afterwards they must be identical, symbol by symbol.',
    u_missed: 'Gave up too early: variables may be bound to any term. Only different functors or constants and the occurs check prevent unification.'
  }
};
const dgt = (k, rep) => { let s = DGT[lang][k] ?? DGT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
function dgBox(tip) { return tip ? `<span class="dg" role="note"><b>${esc(dgt('lab'))}:</b> ${esc(dgt(tip.k, tip.rep))}</span>` : ''; }
const dgState = s => Object.entries(s || {}).map(([k, v]) => `${k} = ${Array.isArray(v) ? '[' + v.join(', ') + ']' : v}`).join(', ');

/* ---------- Hoare: assignment / weakest precondition ---------- */
function dgInverse(x, e) {
  if (e.t !== 'bin' || (e.op !== '+' && e.op !== '-')) return null;
  const isX = n => n.t === 'var' && n.v === x;
  if (isX(e.a) && !varsOf(e.b).has(x)) return { t: 'bin', op: e.op === '+' ? '-' : '+', a: e.a, b: e.b };
  if (e.op === '+' && isX(e.b) && !varsOf(e.a).has(x)) return { t: 'bin', op: '-', a: e.b, b: e.a };
  return null;
}
function diagWp(ex, user, stmts, post) {
  try {
    if (!stmts.length || stmts.some(s => s.k !== 'asg')) return null;
    const right = wpList(stmts, post)[0], cands = [['wp_unchanged', post]];
    let f = post, okF = true;
    for (let j = stmts.length - 1; j >= 0; j--) { const inv = dgInverse(stmts[j].x, stmts[j].e); if (!inv) { okF = false; break; } f = sub(f, stmts[j].x, inv); }
    if (okF) cands.push(['wp_forward', f]);
    let txt = pr(post);
    for (let j = stmts.length - 1; j >= 0; j--) txt = txt.replace(new RegExp(`(?<![A-Za-z0-9_])${stmts[j].x}(?![A-Za-z0-9_\\[])`, 'g'), stmts[j].src);
    try { cands.push(['wp_paren', parse(txt)]); } catch (e) {}
    if (stmts.length === 2) {
      cands.push(['wp_lastonly', wpList([stmts[1]], post)[0]], ['wp_firstonly', wpList([stmts[0]], post)[0]], ['wp_order', wpList([stmts[1], stmts[0]], post)[0]]);
    }
    for (const [k, cand] of cands) {
      if (equiv(ex, cand, right).ok) continue;
      if (equiv(ex, user, cand).ok) return { k };
    }
  } catch (e) {}
  return null;
}

/* ---------- Hoare: invariant and variant ---------- */
function dgBound(cond) {
  if (!cond || cond.t !== 'cmp') return null;
  if (cond.op === 'lt') return { t: 'cmp', op: 'le', a: cond.a, b: cond.b };
  if (cond.op === 'gt') return { t: 'cmp', op: 'ge', a: cond.a, b: cond.b };
  return null;
}
function dgHeads(ex, inv) { // first reachable loop head where inv is false: { input, k } or null
  const c = compile(ex);
  for (const g of grid(ex, ex.inputs)) {
    const s0 = Object.assign(baseState(ex), g);
    if (tryEv(c.pre, s0) !== true) continue;
    let s = tryRun(c.init, s0); if (!s) continue;
    for (let k = 0; k <= 60; k++) {
      if (tryEv(inv, s) !== true) return { input: pick(s0, ex.inputs), k };
      if (tryEv(c.cond, s) !== true) break;
      s = tryRun(c.body, s); if (!s) break;
    }
  }
  return null;
}
function diagInv(ex, user, R) {
  try {
    if (!R || R.ok) return null;
    const c = compile(ex);
    if (equiv(ex, user, c.post).ok) return { k: 'inv_post' };
    if (!R.start.ok) return { k: 'inv_start', rep: { in: dgState(R.start.input) } };
    if (!R.end.ok) {
      const b = dgBound(c.cond);
      if (b) { const R2 = checkInv(ex, { t: 'and', a: user, b }); if (R2.end.ok) return { k: 'inv_bound', rep: { b: pr(b) } }; }
      return { k: 'inv_weak' };
    }
    if (!R.keep.ok && !R.keep.undef) {
      const h = dgHeads(ex, user);
      return h ? { k: 'inv_reach', rep: { in: dgState(h.input), k: h.k } } : { k: 'inv_notind' };
    }
  } catch (e) {}
  return null;
}
function diagVar(R) {
  if (!R || R.ok) return null;
  if (!R.dec.ok) return R.dec.v1 > R.dec.v0 ? { k: 'var_grows', rep: { v0: R.dec.v0, v1: R.dec.v1 } } : R.dec.v1 === R.dec.v0 ? { k: 'var_const', rep: { v0: R.dec.v0, v1: R.dec.v1 } } : null;
  if (!R.nonneg.ok) return { k: 'var_neg' };
  return null;
}
function diagInvMC(picked, ans) {
  if (picked === ans) return null;
  if (picked === 3) return { k: ['mc_start', 'mc_keep', 'mc_end'][ans] };
  if (ans === 3) return { k: 'mc_strict' };
  return { k: 'mc_other' };
}

/* ---------- Haskell types ---------- */
function dgSplitTop(s, sep) { // split at top-level separator (outside () and [])
  const out = []; let d = 0, cur = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(' || ch === '[') d++; else if (ch === ')' || ch === ']') d--;
    if (d === 0 && s.startsWith(sep, i)) { out.push(cur); cur = ''; i += sep.length - 1; continue; }
    cur += ch;
  }
  out.push(cur); return out.map(x => x.trim());
}
function dgParenVariants(body) { // drop the parentheses of one function-typed group
  const out = [];
  for (let i = 0; i < body.length; i++) {
    if (body[i] !== '(') continue;
    let d = 0, j = i;
    for (; j < body.length; j++) { if (body[j] === '(') d++; else if (body[j] === ')') { d--; if (!d) break; } }
    const inner = body.slice(i + 1, j);
    if (dgSplitTop(inner, '->').length > 1 && dgSplitTop(inner, ',').length === 1) out.push(body.slice(0, i) + inner + body.slice(j + 1));
  }
  return out;
}
function diagHtype(user, correct) {
  try {
    const uc = HT.ctxOf(user), cc = HT.ctxOf(correct); if (uc === null || cc === null) return null;
    const ub = HT.body(user), cb = HT.body(correct);
    if (HT.eq(ub, cb)) {
      const ctxTxt = correct.includes('=>') ? correct.split('=>')[0].trim() + ' =>' : '';
      if (cc.length && !uc.length) return { k: 'h_noctx', rep: { c: ctxTxt } };
      if (!cc.length && uc.length) return { k: 'h_extractx' };
      return { k: 'h_ctx', rep: { c: ctxTxt } };
    }
    if (HT.instanceOf(ub, cb)) return { k: 'h_special' };
    let all = cb, vs = dgParenVariants(cb);
    for (let n = 0; n < 6; n++) { const nx = dgParenVariants(all); if (!nx.length) break; all = nx[0]; vs.push(all); }
    if (vs.some(v => HT.eq(ub, v))) return { k: 'h_paren' };
    const parts = dgSplitTop(cb, '->');
    if (parts.length >= 3 && HT.eq(ub, `(${parts[0]}, ${parts[1]}) -> ${parts.slice(2).join(' -> ')}`)) return { k: 'h_curry' };
  } catch (e) {}
  return null;
}

/* ---------- Prolog unification ---------- */
function dgPairs(txt) {
  const m = {}, re = /([A-Z_][A-Za-z0-9_]*)\s*=\s*(.+?)(?=,\s*[A-Z_][A-Za-z0-9_]*\s*=|$)/g;
  let x; const s = (txt || '').trim().replace(/^\{|\}$/g, '');
  while ((x = re.exec(s))) m[x[1]] = x[2].trim();
  return m;
}
function diagUnify(a, b, txt, notU) {
  try {
    const ref = PL.refUnifier(a, b);
    if (ref === null) { if (notU || !(txt || '').trim()) return null; return { k: PL.unifiesWithoutOC(a, b) ? 'u_occurs' : 'u_clash' }; }
    if (notU) return { k: 'u_missed' };
    if (!(txt || '').trim()) return null;
    const c = PL.checkUnifier(a, b, txt); if (c.error || c.ok) return null;
    if (c.unifies) {
      const U = dgPairs(txt), Rf = dgPairs(ref), isVar = t => /^[A-Z_][A-Za-z0-9_]*$/.test(t);
      for (const v of Object.keys(U)) if (!isVar(U[v]) && (Rf[v] === undefined || isVar(Rf[v]))) return { k: 'u_bind', rep: { v } };
      return null;
    }
    return { k: 'u_check' };
  } catch (e) { return null; }
}
