/* ================= Täglich · 5 Minuten =================
   Five short tasks a day, generated from the date. Mistakes return
   (Leitner boxes: 1, 3, 7, 14 days). A streak counts consecutive days. */
const DT = {
  de: {
    t_hwp: 'Hoare · schwächste Vorbedingung', t_hinv: 'Hoare · Invariante prüfen', t_java: 'Java · Programm verfolgen', t_htype: 'Haskell · Typ bestimmen', t_unify: 'Prolog · Unifikation',
    check: 'Prüfen', next: 'Weiter', retry: 'Nochmal versuchen', reveal: 'Lösung zeigen', finish: 'Runde abschließen',
    right: 'Richtig.', wrong: 'Noch nicht.', revealed: 'Lösung', review: 'Wiederholung',
    syntax: 'Die Formel ist nicht lesbar. Schreibe zum Beispiel x + 2 > 5 && y >= 0.', unknown: 'Unbekannte Variable: {v}. Erlaubt sind x und y.',
    hwp_q: 'Ergänze die oberste Zusicherung: Welche schwächste Vorbedingung braucht das Programm, damit am Ende die Nachbedingung gilt?',
    hwp_hint: 'Schreibe ∧ als &&, ∨ als ||, ≤ als <=. Arbeite von unten nach oben: Ersetze die Variable durch die rechte Seite der Zuweisung.',
    hwp_cex: 'Gegenbeispiel: Für {s} ist deine Formel {a}, die richtige Vorbedingung aber {b}.',
    hinv_q: 'Ist ⟨ {i} ⟩ eine geeignete Schleifeninvariante für den Beweis? Falls nicht, ist genau eine der drei Bedingungen verletzt. Welche?',
    o_start: 'Gilt nicht vor der Schleife', o_keep: 'Bleibt im Schleifenrumpf nicht erhalten', o_end: 'Liefert am Ende nicht die Nachbedingung', o_ok: 'Ist eine korrekte Invariante',
    inv_start: 'Für die Eingabe {in} gilt nach der Initialisierung {st}, und dort ist die Invariante falsch.',
    inv_keep: 'Vor dem Rumpf gilt {b}: Invariante und Schleifenbedingung sind wahr. Nach dem Rumpf gilt {a}, und dort ist die Invariante falsch.',
    inv_end: 'Im Zustand {st} sind die Invariante und ¬B wahr, die Nachbedingung aber nicht.',
    inv_ok: 'Alle drei Bedingungen gelten: am Anfang, nach jedem Durchlauf und am Ende zusammen mit ¬B.',
    true_: 'wahr', false_: 'falsch',
    java_q: 'Welchen Wert hat {v} am Ende?', java_ph: 'Zahl',
    htype_q: 'Welchen allgemeinsten Typ hat der Ausdruck? Typklassen-Einschränkungen gehören dazu.', htype_ph: 'z. B. Num a => a -> [a]', htype_err: 'Den Typ kann ich nicht lesen. Schreibe zum Beispiel (a -> b) -> [a] -> [b].',
    unify_q: 'Sind die beiden Terme unifizierbar? Gib gegebenenfalls einen allgemeinsten Unifikator an, mit Occurs-Check.', unify_ph: 'z. B. X = a, Y = f(Z)', not_unif: 'nicht unifizierbar',
    u_err: 'Schreibe den Unifikator als Liste von Gleichungen: X = a, Y = f(b).', u_wrong: 'Mit dieser Substitution werden die Terme nicht gleich.', u_notgen: 'Die Terme werden gleich, aber der Unifikator ist nicht der allgemeinste.', u_is: 'Die Terme sind unifizierbar.', u_isnot: 'Die Terme sind nicht unifizierbar.',
    clash: 'Funktorkonflikt: {a} und {b} passen nicht zusammen.', occurs: 'Occurs-Check: {v} müsste gleich {t} sein, und {t} enthält {v} selbst.',
    to_topic: 'Zum Thema →',
    kicker: 'Täglich · etwa 5 Minuten', title: 'Fünf Aufgaben am Tag', lede: 'Jeden Tag ein kurzer Mix aus Hoare-Kalkül, Java, Haskell und Prolog. Was du falsch machst, kommt nach einem, drei, sieben und vierzehn Tagen wieder, bis es sitzt.',
    streak_n: '{n} Tag in Folge', streak_ns: '{n} Tage in Folge', streak_0: 'Noch keine Serie', best: 'Rekord: {n}', due: '{n} Wiederholung fällig', dues: '{n} Wiederholungen fällig', due_0: 'Keine Wiederholungen fällig',
    task_of: 'Aufgabe {i} von {n}', bonus: 'Bonusrunde {n}',
    done_h: 'Runde geschafft', done_bonus: 'Bonusrunde geschafft', score: '{k} von {n} richtig',
    done_streak: 'Deine Serie: {n} Tag in Folge.', done_streaks: 'Deine Serie: {n} Tage in Folge.', done_back: 'Falsche Aufgaben kommen morgen als Wiederholung zurück.', done_clean: 'Alles richtig. Morgen gibt es neue Aufgaben.',
    more: 'Bonusrunde starten', more_note: 'Bonusrunden zählen nicht für die Serie, ihre Fehler kommen aber ebenfalls wieder.',
    reset: 'Fortschritt zurücksetzen', reset_q: 'Serie, Wiederholungen und Statistik löschen?',
    stats: 'Insgesamt {k} von {n} Aufgaben richtig', local: 'Dein Fortschritt bleibt nur in diesem Browser gespeichert.',
    sync_btn: 'Auf ein anderes Gerät übertragen', sync_close: 'Schließen', sync_h: 'Fortschritt übertragen',
    sync_p: 'Es gibt keine Anmeldung: Dein Fortschritt liegt nur in diesem Browser. So nimmst du ihn auf ein anderes Gerät mit:',
    sync_qr: 'Mit dem Handy scannen', sync_or: 'oder den Link auf dem anderen Gerät öffnen, zum Beispiel per Mail oder Messenger an dich selbst.',
    copy_link: 'Link kopieren', copy_code: 'Nur den Code kopieren', copied: 'Kopiert ✓', copy_fail: 'Kopieren nicht möglich: Markiere den Text und kopiere ihn von Hand.',
    sync_in_h: 'Code von einem anderen Gerät einfügen', sync_in_ph: 'Code oder Link einfügen', sync_apply: 'Übernehmen',
    sync_merge: 'Beide Stände werden zusammengeführt: die längere Serie, alle Wiederholungen und alle geübten Tage. Nichts geht verloren.',
    sync_ok: 'Fortschritt übernommen. {s}. {r}.', sync_bad: 'Dieser Code ist ungültig oder unvollständig.', sync_wait: 'Code wird erstellt …',
    sync_note: 'Der Code enthält nur deinen Lernstand, keinen Namen und keine persönlichen Daten.',
    wd: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'], today: 'heute'
  },
  en: {
    t_hwp: 'Hoare · weakest precondition', t_hinv: 'Hoare · checking an invariant', t_java: 'Java · tracing a program', t_htype: 'Haskell · finding the type', t_unify: 'Prolog · unification',
    check: 'Check', next: 'Next', retry: 'Try again', reveal: 'Show solution', finish: 'Finish round',
    right: 'Correct.', wrong: 'Not yet.', revealed: 'Solution', review: 'Review',
    syntax: 'The formula cannot be read. Write, for example, x + 2 > 5 && y >= 0.', unknown: 'Unknown variable: {v}. Only x and y are allowed.',
    hwp_q: 'Fill in the top assertion: which weakest precondition does the program need so that the postcondition holds at the end?',
    hwp_hint: 'Write ∧ as &&, ∨ as ||, ≤ as <=. Work from the bottom up: replace the variable with the right-hand side of the assignment.',
    hwp_cex: 'Counterexample: for {s} your formula is {a}, but the correct precondition is {b}.',
    hinv_q: 'Is ⟨ {i} ⟩ a suitable loop invariant for the proof? If not, exactly one of the three conditions is violated. Which one?',
    o_start: 'Does not hold before the loop', o_keep: 'Is not preserved by the loop body', o_end: 'Does not give the postcondition at the end', o_ok: 'Is a correct invariant',
    inv_start: 'For the input {in}, the initialisation gives {st}, and there the invariant is false.',
    inv_keep: 'Before the body we have {b}: the invariant and the loop condition are true. After the body we have {a}, and there the invariant is false.',
    inv_end: 'In the state {st} the invariant and ¬B are true, but the postcondition is not.',
    inv_ok: 'All three conditions hold: at the start, after every iteration, and at the end together with ¬B.',
    true_: 'true', false_: 'false',
    java_q: 'What is the value of {v} at the end?', java_ph: 'number',
    htype_q: 'What is the most general type of the expression? Include type class constraints.', htype_ph: 'e.g. Num a => a -> [a]', htype_err: 'I cannot read this type. Write, for example, (a -> b) -> [a] -> [b].',
    unify_q: 'Are the two terms unifiable? If so, give a most general unifier, with the occurs check.', unify_ph: 'e.g. X = a, Y = f(Z)', not_unif: 'not unifiable',
    u_err: 'Write the unifier as a list of equations: X = a, Y = f(b).', u_wrong: 'With this substitution the terms do not become equal.', u_notgen: 'The terms become equal, but the unifier is not the most general one.', u_is: 'The terms are unifiable.', u_isnot: 'The terms are not unifiable.',
    clash: 'Clash: {a} and {b} do not match.', occurs: 'Occurs check: {v} would have to equal {t}, and {t} contains {v} itself.',
    to_topic: 'Go to the topic →',
    kicker: 'Daily · about 5 minutes', title: 'Five tasks a day', lede: 'Every day a short mix of Hoare logic, Java, Haskell and Prolog. Whatever you get wrong comes back after one, three, seven and fourteen days, until it sticks.',
    streak_n: '{n} day in a row', streak_ns: '{n} days in a row', streak_0: 'No streak yet', best: 'Best: {n}', due: '{n} review due', dues: '{n} reviews due', due_0: 'No reviews due',
    task_of: 'Task {i} of {n}', bonus: 'Bonus round {n}',
    done_h: 'Round complete', done_bonus: 'Bonus round complete', score: '{k} of {n} correct',
    done_streak: 'Your streak: {n} day in a row.', done_streaks: 'Your streak: {n} days in a row.', done_back: 'The tasks you got wrong come back tomorrow as reviews.', done_clean: 'All correct. New tasks tomorrow.',
    more: 'Start a bonus round', more_note: 'Bonus rounds do not count towards the streak, but their mistakes come back as well.',
    reset: 'Reset progress', reset_q: 'Delete streak, reviews and statistics?',
    stats: '{k} of {n} tasks correct overall', local: 'Your progress is stored only in this browser.',
    sync_btn: 'Transfer to another device', sync_close: 'Close', sync_h: 'Transfer your progress',
    sync_p: 'There is no sign-in: your progress lives only in this browser. To take it to another device:',
    sync_qr: 'Scan with your phone', sync_or: 'or open the link on the other device, for example by emailing or messaging it to yourself.',
    copy_link: 'Copy link', copy_code: 'Copy the code only', copied: 'Copied ✓', copy_fail: 'Copying is not possible here: select the text and copy it by hand.',
    sync_in_h: 'Paste a code from another device', sync_in_ph: 'Paste a code or link', sync_apply: 'Apply',
    sync_merge: 'Both records are merged: the longer streak, all reviews and all practised days. Nothing is lost.',
    sync_ok: 'Progress transferred. {s}. {r}.', sync_bad: 'This code is invalid or incomplete.', sync_wait: 'Creating the code …',
    sync_note: 'The code contains only your learning progress, no name and no personal data.',
    wd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'], today: 'today'
  }
};
const dt = (k, rep) => { let s = DT[lang][k] ?? DT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
const dL = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[lang] ?? o.de) : o;

/* ---------- random ---------- */
function dRng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function dHash(str) { let h = 2166136261; for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const dInt = (r, lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
const dPick = (r, a) => a[Math.floor(r() * a.length)];
function dShuffle(a, r) { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const dState = s => Object.entries(s).map(([k, v]) => `${k} = ${Array.isArray(v) ? '[' + v.join(', ') + ']' : v}`).join(', ');

/* ---------- generator 1: weakest precondition ---------- */
const HWP_EX = () => ({ vars: { x: [-8, 14], y: [-8, 14] }, pre: 'true', post: 'true', init: [], body: [], inputs: [] });
function genHwp(seed) {
  const r = dRng(seed);
  const A = [() => ['x', `x + ${dInt(r, 1, 5)}`], () => ['x', `x - ${dInt(r, 1, 4)}`], () => ['x', '2 * x'], () => ['x', 'x + y'],
             () => ['y', `y + ${dInt(r, 1, 4)}`], () => ['y', 'y - x'], () => ['y', `x + ${dInt(r, 1, 3)}`], () => ['y', '3 * y']];
  const P = [() => `x > ${dInt(r, 2, 8)}`, () => 'x = y', () => `x + y = ${dInt(r, 3, 10)}`, () => 'y >= x', () => `x < y + ${dInt(r, 1, 4)}`, () => '2 * x <= y', () => `y > ${dInt(r, 0, 6)} && x >= 0`];
  let stmts, post;
  for (let k = 0; k < 50; k++) {
    const n = r() < 0.45 ? 1 : 2;
    stmts = [...Array(n)].map(() => dPick(r, A)());
    if (n === 2 && stmts[0][0] === stmts[1][0] && stmts[0][1] === stmts[1][1]) continue;
    post = dPick(r, P)();
    const last = stmts[stmts.length - 1][0];
    if (post.includes(last)) break;
  }
  const comp = compileStmts(stmts), chain = wpList(comp, parse(post));
  const ex = HWP_EX();
  return {
    topic: 'hwp', link: '#hoare', kind: 'formula',
    body() {
      let h = `<p>${esc(dt('hwp_q'))}</p><div class="dl-prog mono">`;
      h += `<div class="dl-asr ask">⟨ ? ⟩</div>`;
      stmts.forEach((s, i) => { h += `<div class="dl-ln">${esc(s[0] + ' = ' + s[1] + ';')}</div>`; if (i < stmts.length - 1) h += `<div class="dl-asr dim">⟨ … ⟩</div>`; });
      h += `<div class="dl-asr">⟨ ${esc(pr(parse(post)))} ⟩</div></div><p class="syntax">${esc(dt('hwp_hint'))}</p>`;
      return h;
    },
    check(v) {
      const src = (v.a || '').trim(); if (!src) return { err: dt('syntax') };
      const u = userFormula(ex, src, 'B');
      if (u.err) return { err: u.err === 'var' ? dt('unknown', { v: u.detail }) : dt('syntax') };
      const e = equiv(ex, u.ast, chain[0]);
      if (e.ok) return { ok: true };
      return { ok: false, why: dt('hwp_cex', { s: dState(e.state), a: dt(e.va ? 'true_' : 'false_'), b: dt(e.vb ? 'true_' : 'false_') }), tip: diagWp(ex, u.ast, comp, parse(post)) };
    },
    solution() {
      let h = `<div class="dl-prog mono sol">`;
      chain.forEach((f, i) => { h += `<div class="dl-asr">⟨ ${esc(pr(f))} ⟩</div>`; if (i < stmts.length) h += `<div class="dl-ln">${esc(stmts[i][0] + ' = ' + stmts[i][1] + ';')}</div>`; });
      return h + '</div>';
    }
  };
}

/* ---------- generator 2: invariant check ---------- */
const HINV = [
  { ex: 'g1', c: ['i <= n && res = 3 * i', 'res = 3 * i', 'i <= n && res = 3 * i && n > 0', 'i <= n && res = i + i + i', 'i <= n + 1 && res = 3 * i', 'i <= n && res = 3 * i && i <= 4'] },
  { ex: 'g2', c: ['i <= n && 2 * s = i * (i + 1)', '2 * s = i * (i + 1)', 'i <= n && 2 * s = i * i + i', 'i >= 0 && 2 * s = i * (i + 1)', 'i <= n && 2 * s = i * (i + 1) && n >= 1'] },
  { ex: 'g3', c: ['z >= 0 && res * x ^ z = x ^ y', 'z >= 0 && res * x ^ z = x ^ y && y > 0', 'z >= 0 && z <= y && res * x ^ z = x ^ y', 'z >= 0', 'z >= 0 && res * x ^ z = x ^ y && z < 4'] }
];
const HINV_CACHE = {};
function hinvResult(exId, inv) {
  const k = exId + '|' + inv; if (HINV_CACHE[k]) return HINV_CACHE[k];
  const ex = EX.find(e => e.id === exId), R = checkInv(ex, parse(inv));
  const fails = ['start', 'keep', 'end'].filter(c => !R[c].ok);
  return (HINV_CACHE[k] = { R, fails, ans: fails.length ? ['start', 'keep', 'end'].indexOf(fails[0]) : 3 });
}
function genHinv(seed) {
  const r = dRng(seed), L = dPick(r, HINV), ex = EX.find(e => e.id === L.ex);
  const start = dInt(r, 0, L.c.length - 1);
  let inv = L.c[start], res = hinvResult(L.ex, inv);
  for (let k = 1; res.fails.length > 1 && k < L.c.length; k++) { inv = L.c[(start + k) % L.c.length]; res = hinvResult(L.ex, inv); }
  const c = compile(ex), opts = ['o_start', 'o_keep', 'o_end', 'o_ok'];
  const code = [...codeLines(c.init, 0), { s: `while (${ex.cond}) {`, ind: 0 }, ...codeLines(c.body, 1), { s: '}', ind: 0 }];
  return {
    topic: 'hinv', link: '#practice', kind: 'mc', opts,
    body() {
      const q = dt('hinv_q', { i: '\u0001' }).split('\u0001');
      return `<p>${esc(q[0])}<code class="dl-inv">${esc(pr(parse(inv)))}</code>${esc(q[1] || '')}</p><div class="dl-prog mono"><div class="dl-asr">⟨ ${esc(pr(c.pre))} ⟩</div>${code.map(l => `<div class="dl-ln" style="padding-left:${l.ind * 2}ch">${esc(l.s)}</div>`).join('')}<div class="dl-asr">⟨ ${esc(pr(c.post))} ⟩</div></div>`;
    },
    check(v) { return v.a === undefined || v.a === '' ? { err: '' } : { ok: +v.a === res.ans, tip: diagInvMC(+v.a, res.ans) }; },
    answer: res.ans,
    solution() {
      const R = res.R; let t;
      if (res.ans === 3) t = dt('inv_ok');
      else if (res.ans === 0) t = dt('inv_start', { in: dState(R.start.input), st: dState(pickNames(R.start.state, c.names)) });
      else if (res.ans === 1) t = dt('inv_keep', { b: dState(pickNames(R.keep.before, c.names)), a: dState(pickNames(R.keep.after || {}, c.names)) });
      else t = dt('inv_end', { st: dState(pickNames(R.end.state, c.names)) });
      return `<p><b>${esc(dt(opts[res.ans]))}.</b> ${esc(t)}</p>`;
    }
  };
}
const pickNames = (s, ns) => { const o = {}; ns.forEach(n => { if (s && n in s) o[n] = s[n]; }); return o; };

/* ---------- generator 3: Java tracing ---------- */
const jdiv = (a, b) => Math.trunc(a / b), jmod = (a, b) => a - b * Math.trunc(a / b);
function genJava(seed) {
  const r = dRng(seed), kind = dInt(r, 0, 6);
  let code, v, ans, ex, alts = [];
  if (kind === 0) {
    const a = dInt(r, 0, 2), b = dInt(r, 4, 7), k = dInt(r, 2, 3); let s = 0; const ts = []; for (let i = a; i < b; i++) { s += k * i; ts.push(s); }
    code = `int s = 0;\nfor (int i = ${a}; i < ${b}; i++) {\n    s = s + ${k} * i;\n}`; v = 's'; ans = s;
    alts = [[s + k * b, 'j_incl', { b, b1: b - 1 }], [s - k * a, 'j_from', { a }]];
    ex = { de: `i läuft von ${a} bis ${b - 1} (nicht bis ${b}). Zwischenwerte von s: ${ts.join(', ')}.`, en: `i runs from ${a} to ${b - 1} (not to ${b}). Intermediate values of s: ${ts.join(', ')}.` };
  } else if (kind === 1) {
    const X = dInt(r, 7, 16), c = dInt(r, 2, 4); let x = X, y = 0; const xs = [x]; while (x > 0) { x -= c; y++; xs.push(x); }
    code = `int x = ${X};\nint y = 0;\nwhile (x > 0) {\n    x = x - ${c};\n    y = y + 1;\n}`; v = 'y'; ans = y;
    alts = [[Math.floor(X / c), 'j_floor'], [y - 1, 'j_off'], [y + 1, 'j_off']];
    ex = { de: `x nimmt die Werte ${xs.join(', ')} an. Die Schleife läuft ${y}-mal; danach ist x ≤ 0.`, en: `x takes the values ${xs.join(', ')}. The loop runs ${y} times; afterwards x ≤ 0.` };
  } else if (kind === 2) {
    const p = (r() < 0.6 ? -1 : 1) * dInt(r, 7, 19), q = dInt(r, 2, 5), d = jdiv(p, q), m = jmod(p, q);
    code = `int p = ${p};\nint q = ${q};\nint z = p / q + p % q;`; v = 'z'; ans = d + m;
    alts = [[Math.floor(p / q) + (((p % q) + q) % q), 'j_python', { p, q, d, m }], [Math.floor(p / q), 'j_python', { p, q, d, m }], [d, 'j_part'], [m, 'j_part']];
    ex = { de: `Ganzzahlige Division rundet in Java in Richtung 0: ${p} / ${q} = ${d}. Der Rest hat das Vorzeichen von p: ${p} % ${q} = ${m}. Also z = ${d} + ${m < 0 ? '(' + m + ')' : m} = ${d + m}.`, en: `Integer division in Java rounds towards 0: ${p} / ${q} = ${d}. The remainder takes the sign of p: ${p} % ${q} = ${m}. So z = ${d} + ${m < 0 ? '(' + m + ')' : m} = ${d + m}.` };
  } else if (kind === 3) {
    const a = dInt(r, 1, 7);
    code = `int i = ${a};\nint j = i++ + ++i;`; v = 'j'; ans = a + (a + 2);
    alts = [[2 * a + 1, 'j_post'], [2 * a + 3, 'j_post'], [2 * a + 2 === ans ? -1e9 : 2 * a + 2, 'j_post'], [2 * a, 'j_post'], [2 * a + 4, 'j_post']];
    ex = { de: `i++ liefert den alten Wert ${a} und erhöht i auf ${a + 1}. ++i erhöht zuerst auf ${a + 2} und liefert ${a + 2}. Also j = ${a} + ${a + 2} = ${ans}.`, en: `i++ yields the old value ${a} and increments i to ${a + 1}. ++i increments first to ${a + 2} and yields ${a + 2}. So j = ${a} + ${a + 2} = ${ans}.` };
  } else if (kind === 4) {
    const arr = [...Array(dInt(r, 5, 6))].map(() => dInt(r, -3, 9)); let s = 0; const used = []; for (let i = 0; i < arr.length; i += 2) { s += arr[i]; used.push(arr[i]); }
    code = `int[] a = {${arr.join(', ')}};\nint s = 0;\nfor (int i = 0; i < a.length; i += 2) {\n    s += a[i];\n}`; v = 's'; ans = s;
    alts = [[arr.filter(x => x % 2 === 0).reduce((p, x) => p + x, 0), 'j_values'], [arr.reduce((p, x) => p + x, 0), 'j_all'], [arr.filter((_, i) => i % 2 === 1).reduce((p, x) => p + x, 0), 'j_odd']];
    ex = { de: `Summiert werden die Elemente an den Indizes 0, 2, 4, …, nicht die geraden Werte: ${used.join(' + ')} = ${s}.`, en: `The loop adds the elements at indices 0, 2, 4, …, not the even values: ${used.join(' + ')} = ${s}.` };
  } else if (kind === 5) {
    const n = dInt(r, 4, 8); let f = 1; const fs = []; for (let k = n; k > 1; k -= 2) { f *= k; fs.push(k); }
    code = `static int f(int n) {\n    if (n <= 1) return 1;\n    return n * f(n - 2);\n}\n\nint v = f(${n});`; v = 'v'; ans = f;
    { let fa = 1; for (let k = 2; k <= n; k++) fa *= k; alts = [[fa, 'j_fact'], [0, 'j_base']]; }
    ex = { de: `f(${n}) = ${fs.join(' · ')} · f(${n % 2 ? 1 : 0}) = ${fs.join(' · ')} · 1 = ${f}.`, en: `f(${n}) = ${fs.join(' · ')} · f(${n % 2 ? 1 : 0}) = ${fs.join(' · ')} · 1 = ${f}.` };
  } else {
    const n = dInt(r, 3, 6); let c = 0; for (let i = 0; i < n; i++) for (let j = i; j < n; j++) c++;
    code = `int c = 0;\nfor (int i = 0; i < ${n}; i++) {\n    for (int j = i; j < ${n}; j++) {\n        c++;\n    }\n}`; v = 'c'; ans = c;
    alts = [[n * n, 'j_square'], [n * (n - 1) / 2, 'j_strict']];
    ex = { de: `Für i = 0 läuft die innere Schleife ${n}-mal, für i = 1 ${n - 1}-mal, … für i = ${n - 1} einmal: ${[...Array(n)].map((_, k) => n - k).join(' + ')} = ${c}.`, en: `For i = 0 the inner loop runs ${n} times, for i = 1 ${n - 1} times, … for i = ${n - 1} once: ${[...Array(n)].map((_, k) => n - k).join(' + ')} = ${c}.` };
  }
  return {
    topic: 'java', link: '#java', kind: 'num', answer: ans, alts,
    body() { return `<p>${esc(dt('java_q', { v }))}</p><pre class="code">${esc(code)}</pre>`; },
    check(vv) { const g = (vv.a || '').trim().replace(/[−–]/g, '-'); if (!/^-?\d+$/.test(g)) return { err: '' }; if (+g === ans) return { ok: true }; const al = alts.find(x => x[0] === +g && x[0] !== ans); return { ok: false, tip: al ? { k: al[1], rep: al[2] } : null }; },
    solution() { return `<p><b class="mono">${esc(v)} = ${ans}</b>. ${esc(dL(ex))}</p>`; }
  };
}

/* ---------- generator 4: Haskell types ---------- */
const HPOOL = [
  ['\\x y -> x', 'a -> b -> a', { de: 'Zwei Argumente beliebigen Typs; zurück kommt das erste.', en: 'Two arguments of arbitrary type; the first is returned.' }],
  ['\\f x -> f (f x)', '(a -> a) -> a -> a', { de: 'f wird auf sein eigenes Ergebnis angewendet. Argument- und Ergebnistyp von f müssen also gleich sein.', en: 'f is applied to its own result, so its argument and result type must be equal.' }],
  ['map not', '[Bool] -> [Bool]', { de: 'map :: (a -> b) -> [a] -> [b] mit not :: Bool -> Bool, also a = b = Bool.', en: 'map :: (a -> b) -> [a] -> [b] with not :: Bool -> Bool, so a = b = Bool.' }],
  ['filter even', 'Integral a => [a] -> [a]', { de: 'even :: Integral a => a -> Bool. Die Einschränkung wandert in den Typ von filter even.', en: 'even :: Integral a => a -> Bool. The constraint carries over to the type of filter even.' }],
  ['\\(x, y) -> (y, x)', '(a, b) -> (b, a)', { de: 'Das Paar wird vertauscht. Die beiden Komponenten dürfen verschiedene Typen haben.', en: 'The pair is swapped. The two components may have different types.' }],
  ['head . tail', '[a] -> a', { de: 'Erst tail :: [a] -> [a], dann head :: [a] -> a. Ergebnis: das zweite Element.', en: 'First tail :: [a] -> [a], then head :: [a] -> a. Result: the second element.' }],
  ['\\x xs -> x : x : xs', 'a -> [a] -> [a]', { de: '(:) :: a -> [a] -> [a]. x wird zweimal vorne an xs angehängt.', en: '(:) :: a -> [a] -> [a]. x is put in front of xs twice.' }],
  ['fst . snd', '(a, (b, c)) -> b', { de: 'snd liefert die zweite Komponente, die selbst ein Paar sein muss; fst nimmt davon die erste.', en: 'snd yields the second component, which must itself be a pair; fst takes its first component.' }],
  ['\\f g x -> g (f x)', '(a -> b) -> (b -> c) -> a -> c', { de: 'f macht aus a ein b, g aus b ein c. Das ist Komposition in umgekehrter Reihenfolge.', en: 'f turns an a into a b, g turns a b into a c. This is composition in reverse order.' }],
  ['\\x y -> x == y', 'Eq a => a -> a -> Bool', { de: '(==) :: Eq a => a -> a -> Bool. Beide Argumente haben denselben Typ.', en: '(==) :: Eq a => a -> a -> Bool. Both arguments have the same type.' }],
  ['\\x -> if x then 1 else 0', 'Num a => Bool -> a', { de: 'x steht in der Bedingung, ist also Bool. Die Literale 1 und 0 haben einen Typ der Klasse Num.', en: 'x is the condition, so it is Bool. The literals 1 and 0 have a type in class Num.' }],
  ['map (\\x -> (x, x))', '[a] -> [(a, a)]', { de: 'Jedes Element wird zu einem Paar aus sich selbst.', en: 'Every element becomes a pair of itself.' }],
  ['\\xs -> map show xs', 'Show a => [a] -> [String]', { de: 'show :: Show a => a -> String, und map wendet es auf jedes Element an.', en: 'show :: Show a => a -> String, and map applies it to every element.' }],
  ['\\x y -> x < y || x == y', 'Ord a => a -> a -> Bool', { de: '(<) verlangt Ord. Weil Eq eine Oberklasse von Ord ist, reicht Ord a.', en: '(<) requires Ord. Since Eq is a superclass of Ord, Ord a is enough.' }],
  ['\\f -> f 1', 'Num a => (a -> b) -> b', { de: 'f bekommt das Literal 1, sein Argumenttyp gehört also zur Klasse Num. Das Ergebnis ist beliebig.', en: 'f receives the literal 1, so its argument type is in class Num. The result type is arbitrary.' }],
  ['\\p -> filter (not . p)', '(a -> Bool) -> [a] -> [a]', { de: 'p ist ein Prädikat; not . p ebenfalls. filter behält die Elemente, für die p falsch ist.', en: 'p is a predicate, and so is not . p. filter keeps the elements for which p is false.' }],
  ['zip [True]', '[b] -> [(Bool, b)]', { de: 'zip :: [a] -> [b] -> [(a, b)], und das erste Argument legt a = Bool fest.', en: 'zip :: [a] -> [b] -> [(a, b)], and the first argument fixes a = Bool.' }],
  ['\\x -> [x, x + 1]', 'Num a => a -> [a]', { de: 'x + 1 verlangt Num. Alle Listenelemente haben denselben Typ.', en: 'x + 1 requires Num. All list elements have the same type.' }],
  ['(++ "!")', 'String -> String', { de: '"!" ist ein String, also [Char]. (++) verbindet zwei Listen gleichen Typs.', en: '"!" is a String, i.e. [Char]. (++) joins two lists of the same type.' }],
  ['\\f xs -> map f (map f xs)', '(a -> a) -> [a] -> [a]', { de: 'f wird zweimal angewendet; deshalb muss f :: a -> a sein.', en: 'f is applied twice, so f must have type a -> a.' }]
];
function genHtype(seed) {
  const r = dRng(seed), [e, t, ex] = dPick(r, HPOOL);
  return {
    topic: 'htype', link: '#haskell', kind: 'text', ph: 'htype_ph',
    body() { return `<p>${esc(dt('htype_q'))}</p><pre class="code">${esc(e)} :: ?</pre>`; },
    check(v) { const g = (v.a || '').trim(); if (!g) return { err: '' }; const q = HT.eq(g.replace(/^.*::/, ''), t); if (q === null) return { err: dt('htype_err') }; return q === true ? { ok: true } : { ok: false, tip: diagHtype(g.replace(/^.*::/, ''), t) }; },
    solution() { return `<p><b class="mono">${esc(e)} :: ${esc(t)}</b></p><p>${esc(dL(ex))}</p>`; }
  };
}

/* ---------- generator 5: unification ---------- */
const uFmt = t => t.v ? t.v : t.a.length ? `${t.f}(${t.a.map(uFmt).join(', ')})` : t.f;
function uGen(r, d) {
  if (d === 0 || r() < 0.3) return { f: dPick(r, ['a', 'b', 'c']), a: [] };
  const [f, n] = dPick(r, [['f', 2], ['g', 1], ['h', 2]]);
  return { f, a: [...Array(n)].map(() => uGen(r, d - 1)) };
}
function uVarify(t, r, p, top) {
  if (!top && r() < p) return { v: dPick(r, ['X', 'Y', 'Z']) };
  return t.a.length ? { f: t.f, a: t.a.map(x => uVarify(x, r, p, false)) } : t;
}
function uMutate(t, r) { // change one atom
  if (t.v) return t;
  if (!t.a.length) return { f: dPick(r, ['a', 'b', 'c'].filter(x => x !== t.f)), a: [] };
  const i = dInt(r, 0, t.a.length - 1); return { f: t.f, a: t.a.map((x, j) => j === i ? uMutate(x, r) : x) };
}
function uWalk(t, s) { while (t.v && s[t.v]) t = s[t.v]; return t; }
function uRes(t, s) { t = uWalk(t, s); return t.v ? t : { f: t.f, a: t.a.map(x => uRes(x, s)) }; }
function uOcc(v, t, s) { t = uWalk(t, s); return t.v ? t.v === v : t.a.some(x => uOcc(v, x, s)); }
function uUnify(a, b) {
  const s = {}, st = [[a, b]];
  while (st.length) {
    let [x, y] = st.pop(); x = uWalk(x, s); y = uWalk(y, s);
    if (x.v && y.v && x.v === y.v) continue;
    if (x.v || y.v) { const [v, t] = x.v ? [x, y] : [y, x]; if (uOcc(v.v, t, s)) return { ok: false, why: 'occurs', v: v.v, t: uFmt(uRes(t, s)) }; s[v.v] = t; continue; }
    if (x.f !== y.f || x.a.length !== y.a.length) return { ok: false, why: 'clash', a: uFmt(uRes(x, s)), b: uFmt(uRes(y, s)) };
    for (let i = x.a.length - 1; i >= 0; i--) st.push([x.a[i], y.a[i]]);
  }
  return { ok: true, mgu: ['X', 'Y', 'Z'].filter(v => s[v]).map(v => `${v} = ${uFmt(uRes({ v }, s))}`).join(', ') };
}
const uVars = t => t.v ? [t.v] : t.a.flatMap(uVars);
function genUnify(seed) {
  const r = dRng(seed), want = r() < 0.65;
  let t1, t2, u;
  for (let k = 0; k < 400; k++) {
    const root = dPick(r, [['p', 2], ['k', 3], ['f', 2]]);
    const sk = { f: root[0], a: [...Array(root[1])].map(() => uGen(r, 2)) };
    t1 = uVarify(sk, r, 0.35, true); t2 = uVarify(sk, r, 0.3, true);
    if (r() < 0.35) t2 = uMutate(t2, r);
    if (r() < 0.25) { const v = dPick(r, uVars(t1).concat(['X'])); const i = dInt(r, 0, t2.a.length - 1); t2 = { f: t2.f, a: t2.a.map((x, j) => j === i ? { f: 'g', a: [{ v }] } : x) }; }
    const s1 = uFmt(t1), s2 = uFmt(t2);
    if (s1 === s2 || s1.length + s2.length > 44 || !uVars(t1).length || !uVars(t2).length) continue;
    u = uUnify(t1, t2);
    if (u.ok === want && (!u.ok || u.mgu)) break;
  }
  const a = uFmt(t1), b = uFmt(t2);
  return {
    topic: 'unify', link: '#prolog', kind: 'unify',
    body() { return `<p>${esc(dt('unify_q'))}</p><div class="dl-terms mono"><span>${esc(a)}</span><span class="dl-eq">≟</span><span>${esc(b)}</span></div>`; },
    check(v) {
      const no = v.n === '1', txt = (v.a || '').trim();
      if (!u.ok) return no ? { ok: true } : (txt ? { ok: false, why: dt('u_isnot'), tip: diagUnify(a, b, txt, false) } : { err: '' });
      if (no) return { ok: false, why: dt('u_is'), tip: diagUnify(a, b, txt, true) };
      if (!txt) return { err: '' };
      const c = PL.checkUnifier(a, b, txt);
      if (c.error) return { err: dt('u_err') };
      return c.ok ? { ok: true } : { ok: false, why: dt(c.unifies ? 'u_notgen' : 'u_wrong'), tip: diagUnify(a, b, txt, false) };
    },
    expect: u,
    solution() {
      if (u.ok) return `<p><b class="mono">{ ${esc(u.mgu)} }</b></p>`;
      return `<p><b>${esc(dt('not_unif'))}.</b> ${esc(u.why === 'clash' ? dt('clash', { a: u.a, b: u.b }) : dt('occurs', { v: u.v, t: u.t }))}</p>`;
    }
  };
}

const DGEN = { hwp: genHwp, hinv: genHinv, java: genJava, htype: genHtype, unify: genUnify };
const DTOPICS = ['hwp', 'hinv', 'java', 'htype', 'unify'];
const DITEMS = {};
function dItem(it) { const k = it.g + ':' + it.s; return DITEMS[k] || (DITEMS[k] = DGEN[it.g](it.s)); }

/* ---------- storage, dates, streak ---------- */
const DKEY = 'hoarelab-daily';
function dFresh() { return { v: 1, streak: 0, best: 0, last: null, days: [], box: {}, sess: null, stats: { n: 0, ok: 0 } }; }
function dLoad() { try { const j = JSON.parse(localStorage.getItem(DKEY)); if (j && j.v === 1) return Object.assign(dFresh(), j); } catch (e) {} return dFresh(); }
let DS = dLoad();
function dSave() { try { localStorage.setItem(DKEY, JSON.stringify(DS)); } catch (e) {} }
const d2 = n => String(n).padStart(2, '0');
function dToday() { const d = new Date(); return `${d.getFullYear()}-${d2(d.getMonth() + 1)}-${d2(d.getDate())}`; }
function dNum(s) { const [y, m, d] = s.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); }
function dStr(n) { const t = new Date(n * 864e5); return `${t.getUTCFullYear()}-${d2(t.getUTCMonth() + 1)}-${d2(t.getUTCDate())}`; }
function dStreak() { return DS.last && dNum(dToday()) - dNum(DS.last) <= 1 ? DS.streak : 0; }
function dDue(day) { return Object.entries(DS.box).filter(([, b]) => b.d <= day).sort((a, b) => a[1].d - b[1].d).map(([k]) => k); }

function dBuild(date, round) {
  const r = dRng(dHash(date + '#' + round));
  const due = dDue(dNum(date)).slice(0, 2).map(k => { const [g, s] = k.split(':'); return { g, s: +s, rev: true }; }).filter(x => DGEN[x.g]);
  const have = new Set(due.map(x => x.g)), order = dShuffle(DTOPICS, r);
  const fresh = [...order.filter(t => !have.has(t)), ...order.filter(t => have.has(t))].slice(0, 5 - due.length)
    .map(g => ({ g, s: dHash(date + '#' + round + '#' + g) }));
  const items = dShuffle([...due, ...fresh], r);
  return { date, round, items, idx: 0, res: items.map(() => null), done: false };
}
function dSession() {
  const today = dToday();
  if (!DS.sess || DS.sess.date !== today) { DS.sess = dBuild(today, 0); dSave(); }
  return DS.sess;
}
function dRecord(it, ok) {
  const k = it.g + ':' + it.s, today = dNum(dToday()), b = DS.box[k];
  if (ok) { if (b) { const nb = b.b + 1; if (nb > 4) delete DS.box[k]; else DS.box[k] = { b: nb, d: today + [0, 1, 3, 7, 14][nb] }; } }
  else DS.box[k] = { b: 1, d: today + 1 };
  DS.stats.n++; if (ok) DS.stats.ok++;
}
function dComplete(S) {
  S.done = true;
  if (S.round === 0 && DS.last !== S.date) {
    DS.streak = DS.last && dNum(S.date) - dNum(DS.last) === 1 ? DS.streak + 1 : 1;
    DS.last = S.date; DS.best = Math.max(DS.best, DS.streak);
    DS.days = [...DS.days.filter(d => d !== S.date), S.date].slice(-120);
  }
  dSave(); dNavBadge();
}


/* ---------- transfer between devices (no server) ---------- */
const DSYNC_URL = 'https://superzep.github.io/Hoare-lab/';
let DSY = { open: false, code: null, msg: null, copied: '', banner: null };
const b64u = u8 => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
const unb64u = str => { const s = atob(str.replace(/-/g, '+').replace(/_/g, '/')); const u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; };
async function dZip(u8, how) {
  const cs = how === 'z' ? new CompressionStream('deflate-raw') : new DecompressionStream('deflate-raw');
  const out = new Blob([u8]).stream().pipeThrough(cs);
  return new Uint8Array(await new Response(out).arrayBuffer());
}
function dPack() {
  const t = dNum(dToday()), gi = g => DTOPICS.indexOf(g);
  const o = { t, s: DS.streak, b: DS.best, l: DS.last ? dNum(DS.last) - t : null, d: DS.days.map(x => dNum(x) - t).filter(x => x > -60),
    n: DS.stats.n, k: DS.stats.ok, x: Object.entries(DS.box).map(([key, v]) => { const [g, sd] = key.split(':'); return [gi(g), (+sd).toString(36), v.b, v.d - t]; }) };
  try { if (WDONE.size) o.w = [...WDONE]; } catch (e) {}
  const S = DS.sess;
  if (S && S.date === dToday()) o.q = [S.round, S.idx, S.done ? 1 : 0, S.items.map(i => [gi(i.g), i.s.toString(36), i.rev ? 1 : 0]), S.res.map(r => r ? (r.ok ? 1 : 0) : -1)];
  return o;
}
function dUnpack(o) {
  const ok = o && Number.isInteger(o.t) && Array.isArray(o.x) && Array.isArray(o.d);
  if (!ok) throw new Error('form');
  const g = i => { if (!DTOPICS[i]) throw new Error('topic'); return DTOPICS[i]; };
  const R = { streak: +o.s || 0, best: +o.b || 0, last: o.l === null || o.l === undefined ? null : dStr(o.t + o.l), days: o.d.map(x => dStr(o.t + x)),
    stats: { n: +o.n || 0, ok: +o.k || 0 }, box: {}, sess: null, weeks: Array.isArray(o.w) ? o.w.filter(Number.isInteger) : [] };
  for (const [i, sd, b, d] of o.x) R.box[g(i) + ':' + parseInt(sd, 36)] = { b: Math.min(4, Math.max(1, +b)), d: o.t + d };
  if (o.q && dStr(o.t) === dToday()) {
    const [round, idx, done, items, res] = o.q;
    R.sess = { date: dToday(), round, idx, done: !!done, items: items.map(([i, sd, rv]) => ({ g: g(i), s: parseInt(sd, 36), ...(rv ? { rev: true } : {}) })), res: res.map(r => r < 0 ? null : { ok: r === 1 }) };
  }
  return R;
}
async function dExport() {
  const json = new TextEncoder().encode(JSON.stringify(dPack()));
  try { return 'HL1z' + b64u(await dZip(json, 'z')); } catch (e) { return 'HL1j' + b64u(json); }
}
async function dDecode(txt) {
  txt = (txt || '').trim(); const m = txt.match(/HL1([zj])([A-Za-z0-9_-]+)/); if (!m) throw new Error('nocode');
  let u8 = unb64u(m[2]); if (m[1] === 'z') u8 = await dZip(u8, 'u');
  return dUnpack(JSON.parse(new TextDecoder().decode(u8)));
}
function dMerge(R) {
  if (R.last && (!DS.last || dNum(R.last) > dNum(DS.last) || (R.last === DS.last && R.streak > DS.streak))) { DS.last = R.last; DS.streak = R.streak; }
  DS.best = Math.max(DS.best, R.best, DS.streak);
  DS.days = [...new Set([...DS.days, ...R.days])].sort().slice(-120);
  for (const [k, v] of Object.entries(R.box)) { const L = DS.box[k]; if (!L || v.d < L.d) DS.box[k] = v; }
  if (R.stats.n > DS.stats.n) DS.stats = R.stats;
  if (R.sess) { const L = DS.sess, cnt = S => S ? S.res.filter(Boolean).length + (S.done ? 99 : 0) + S.round * 100 : -1; if (!L || L.date !== R.sess.date || cnt(R.sess) > cnt(L)) DS.sess = R.sess; }
  try { if (R.weeks.length) { R.weeks.forEach(n => WDONE.add(n)); wSave(); } } catch (e) {}
  dSave(); DC = { v: {}, fb: null, shown: false };
}
async function dApplyCode(txt, fromLink) {
  try { dMerge(await dDecode(txt)); DSY.msg = { ok: true }; } catch (e) { DSY.msg = { ok: false }; }
  if (fromLink) { DSY.banner = DSY.msg; DSY.msg = null; DSY.open = false; renderDaily(); window.scrollTo(0, 0); return; }
  DSY.open = true; DSY.code = null; renderDaily(); dSyncRefresh();
}
function dQR(text) {
  try { const q = qrcode(0, 'L'); q.addData(text, 'Byte'); q.make(); const n = q.getModuleCount(); let p = '';
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) p += `M${c + 4} ${r + 4}h1v1h-1z`;
    return `<svg class="dl-qr" viewBox="0 0 ${n + 8} ${n + 8}" role="img" aria-label="QR"><rect width="${n + 8}" height="${n + 8}" fill="#fff"/><path d="${p}" fill="#000" shape-rendering="crispEdges"/></svg>`;
  } catch (e) { return ''; }
}
function dSyncMsg(m) {
  if (!m.ok) return dt('sync_bad');
  const n = dStreak(), due = dDue(dNum(dToday())).length;
  return dt('sync_ok', { s: n ? dt(n === 1 ? 'streak_n' : 'streak_ns', { n }) : dt('streak_0'), r: due ? dt(due === 1 ? 'due' : 'dues', { n: due }) : dt('due_0') });
}
function dSyncHTML() {
  if (!DSY.open) return '';
  const link = DSY.code ? DSYNC_URL + '#import=' + DSY.code : '';
  const msg = DSY.msg ? `<div class="fb ${DSY.msg.ok ? 'ok' : 'bad'}" role="status">${esc(dSyncMsg(DSY.msg))}</div>` : '';
  return `<section class="dl-sync" aria-labelledby="dl-sync-h">
    <div class="dl-sync-h"><h2 id="dl-sync-h">${esc(dt('sync_h'))}</h2><button type="button" class="btn ghost" data-dact="sync">${esc(dt('sync_close'))}</button></div>
    ${msg}
    <p>${esc(dt('sync_p'))}</p>
    <div class="dl-sync-grid">
      <div class="dl-sync-out">
        ${DSY.code ? `<figure class="dl-qrbox">${dQR(link)}<figcaption>${esc(dt('sync_qr'))}</figcaption></figure>` : `<p class="muted">${esc(dt('sync_wait'))}</p>`}
        <div class="dl-sync-link">
          <p class="small">${esc(dt('sync_or'))}</p>
          <textarea class="mono" rows="3" readonly id="dl-sync-link" aria-label="Link">${esc(link)}</textarea>
          <div class="dl-actions start"><button type="button" class="btn primary" data-dact="copylink" ${DSY.code ? '' : 'disabled'}>${esc(DSY.copied === 'link' ? dt('copied') : dt('copy_link'))}</button><button type="button" class="btn" data-dact="copycode" ${DSY.code ? '' : 'disabled'}>${esc(DSY.copied === 'code' ? dt('copied') : dt('copy_code'))}</button></div>
          ${DSY.copied === 'fail' ? `<p class="err">${esc(dt('copy_fail'))}</p>` : ''}
          <p class="small muted">${esc(dt('sync_note'))}</p>
        </div>
      </div>
      <div class="dl-sync-in">
        <h3>${esc(dt('sync_in_h'))}</h3>
        <textarea class="mono" rows="3" id="dl-sync-in" placeholder="${esc(dt('sync_in_ph'))}" spellcheck="false" autocapitalize="off"></textarea>
        <div class="dl-actions start"><button type="button" class="btn primary" data-dact="import">${esc(dt('sync_apply'))}</button></div>
        <p class="small muted">${esc(dt('sync_merge'))}</p>
      </div>
    </div>
  </section>`;
}
async function dSyncRefresh() {
  const code = await dExport();
  if (!DSY.open) return;
  DSY.code = code; const el = document.querySelector('#daily .dl-sync');
  if (el) el.outerHTML = dSyncHTML();
}
async function dCopy(what) {
  const txt = what === 'link' ? DSYNC_URL + '#import=' + DSY.code : DSY.code;
  let ok = false;
  try { await navigator.clipboard.writeText(txt); ok = true; } catch (e) {
    try { const ta = document.getElementById('dl-sync-link'); const old = ta.value; ta.value = txt; ta.select(); ok = document.execCommand('copy'); ta.value = old; } catch (e2) {}
  }
  DSY.copied = ok ? what : 'fail';
  const el = document.querySelector('#daily .dl-sync'); if (el) el.outerHTML = dSyncHTML();
  if (ok) setTimeout(() => { if (DSY.copied === what) { DSY.copied = ''; const e2 = document.querySelector('#daily .dl-sync'); if (e2) e2.outerHTML = dSyncHTML(); } }, 2500);
}
/* called by the router for #import=CODE */
let DIMPORTED = false;
function dImportFromHash(h) {
  DIMPORTED = true;
  const code = h.slice('import='.length);
  try { history.replaceState(null, '', location.pathname + location.search + '#daily'); } catch (e) {}
  dApplyCode(code, true);
}

/* ---------- UI ---------- */
let DC = { v: {}, fb: null, shown: false };
const FLAME = '<svg class="flame" viewBox="0 0 16 16" aria-hidden="true"><path d="M8.3.7c.5 2.5-.9 3.9-2.2 5.3C4.8 7.4 3.4 8.8 3.4 11c0 2.6 2 4.4 4.6 4.4s4.6-1.8 4.6-4.4c0-2.1-1-3.7-2.1-5-.1 1.2-.7 2.2-1.6 2.7.5-2.2-.1-5.6-.6-8z" fill="currentColor"/><path d="M8 15.4c-1.4 0-2.4-1-2.4-2.4 0-1.3.8-2.1 1.6-2.9.2.8.6 1.3 1.2 1.6-.1-1 .2-2 .8-2.8.7.9 1.3 1.9 1.3 3.5 0 1.8-1.1 3-2.5 3z" fill="#fff" opacity=".32"/></svg>';
function dNavBadge() {
  const n = dStreak(), el = document.getElementById('nav-streak');
  if (el) { el.textContent = n; el.hidden = n === 0; el.classList.toggle('today', DS.last === dToday()); }
  const t = document.getElementById('plan-daily-streak');
  if (t) t.innerHTML = n ? `${FLAME} ${esc(dt(n === 1 ? 'streak_n' : 'streak_ns', { n }))}` : '';
}
function dWeek() {
  const t = dNum(dToday()), set = new Set(DS.days);
  return `<div class="dl-week" aria-label="7 days">${[...Array(7)].map((_, k) => { const n = t - 6 + k, s = dStr(n), wd = new Date(n * 864e5).getUTCDay(); return `<span class="dl-day ${set.has(s) ? 'on' : ''} ${k === 6 ? 'now' : ''}" title="${s}"><i></i><span>${k === 6 ? esc(dt('today')) : DT[lang].wd[wd]}</span></span>`; }).join('')}</div>`;
}
function dHeader() {
  const n = dStreak(), due = dDue(dNum(dToday())).length;
  return `<div class="dl-stats">
    <div class="dl-streak ${n ? 'on' : ''}">${FLAME}<div><b>${n ? esc(dt(n === 1 ? 'streak_n' : 'streak_ns', { n })) : esc(dt('streak_0'))}</b><span>${esc(dt('best', { n: DS.best }))}</span></div></div>
    ${dWeek()}
    <div class="dl-due"><b>${due}</b><span>${esc(due ? dt(due === 1 ? 'due' : 'dues', { n: due }).replace(/^\d+\s*/, '') : dt('due_0'))}</span></div>
  </div>`;
}
function dProgress(S) {
  return `<div class="dl-bar" role="progressbar" aria-valuemin="0" aria-valuemax="${S.items.length}" aria-valuenow="${S.res.filter(Boolean).length}">${S.items.map((_, i) => { const r = S.res[i]; return `<span class="${r ? (r.ok ? 'ok' : 'bad') : ''} ${i === S.idx && !S.done ? 'cur' : ''}"></span>`; }).join('')}</div>`;
}
function dCard(S) {
  const it = S.items[S.idx], G = dItem(it), r = S.res[S.idx], locked = DC.shown || (r && r.ok && DC.fb && DC.fb.ok);
  const key = `data-dl="a"`;
  let input = '';
  if (G.kind === 'mc') {
    input = `<div class="dl-opts" role="radiogroup">${G.opts.map((o, i) => { const sel = DC.v.a === String(i), right = DC.fb && i === G.answer, wrongSel = DC.fb && sel && i !== G.answer; return `<button type="button" class="dl-opt ${sel ? 'sel' : ''} ${right ? 'right' : ''} ${wrongSel ? 'wrong' : ''}" data-opt="${i}" role="radio" aria-checked="${sel}" ${DC.fb ? 'disabled' : ''}><span class="k">${'ABCD'[i]}</span>${esc(dt(o))}</button>`; }).join('')}</div>`;
  } else {
    const ph = G.kind === 'num' ? dt('java_ph') : G.kind === 'unify' ? dt('unify_ph') : G.kind === 'text' ? dt(G.ph) : 'x + 2 > 5';
    input = `<div class="dl-in"><input id="dl-input" class="mono" ${key} value="${esc(DC.v.a || '')}" placeholder="${esc(ph)}" autocomplete="off" spellcheck="false" autocapitalize="off" ${G.kind === 'num' ? 'inputmode="numeric"' : ''} ${locked || DC.v.n === '1' ? 'disabled' : ''} aria-label="${esc(dt('t_' + G.topic))}">
      ${G.kind === 'unify' ? `<label class="kcheck small"><input type="checkbox" data-dl="n" ${DC.v.n === '1' ? 'checked' : ''} ${locked ? 'disabled' : ''}> ${esc(dt('not_unif'))}</label>` : ''}</div>`;
  }
  let fbh = '', btns = '';
  if (DC.fb && DC.fb.err) fbh = `<div class="fb info" role="status">${esc(DC.fb.err)}</div>`;
  else if (DC.fb && DC.fb.ok) fbh = `<div class="fb ok" role="status"><span class="lab">${esc(dt('right'))}</span>${G.solution()}</div>`;
  else if (DC.shown) fbh = `<div class="fb ${DC.fb ? 'bad' : 'info'}" role="status"><span class="lab">${esc(dt(DC.fb ? 'wrong' : 'revealed'))}</span>${DC.fb && DC.fb.why ? `<span>${esc(DC.fb.why)}</span>` : ''}${DC.fb ? dgBox(DC.fb.tip) : ''}${G.solution()}</div>`;
  else if (DC.fb) fbh = `<div class="fb bad" role="status"><span class="lab">${esc(dt('wrong'))}</span>${DC.fb.why ? `<span>${esc(DC.fb.why)}</span>` : ''}${dgBox(DC.fb.tip)}</div>`;
  const last = S.idx === S.items.length - 1;
  if ((DC.fb && DC.fb.ok) || DC.shown) btns = `<a class="btn ghost" href="${G.link}">${esc(dt('to_topic'))}</a><button type="button" class="btn primary" data-dact="next">${esc(dt(last ? 'finish' : 'next'))}</button>`;
  else if (DC.fb && !DC.fb.err) btns = `<button type="button" class="btn" data-dact="reveal">${esc(dt('reveal'))}</button><button type="button" class="btn primary" data-dact="check">${esc(dt('check'))}</button>`;
  else if (G.kind !== 'mc') btns = `<button type="button" class="btn primary" data-dact="check">${esc(dt('check'))}</button>`;
  return `<article class="dl-card" aria-live="polite">
    <div class="dl-card-h"><span class="dl-topic t-${G.topic}">${esc(dt('t_' + G.topic))}</span>${it.rev ? `<span class="dl-rev">↻ ${esc(dt('review'))}</span>` : ''}<span class="dl-count mono">${esc(dt('task_of', { i: S.idx + 1, n: S.items.length }))}</span>${reportLink({ area: 'Täglich', id: it.g + ':' + it.s, name: dt('t_' + G.topic), answer: DC.v.a || (DC.v.n === '1' ? 'nicht unifizierbar' : '') })}</div>
    <div class="dl-q">${G.body()}</div>
    ${input}
    ${fbh}
    <div class="dl-actions">${btns}</div>
  </article>`;
}
function dDone(S) {
  const k = S.res.filter(r => r && r.ok).length, n = S.items.length, st = dStreak();
  return `<article class="dl-card dl-done">
    <div class="dl-done-flame ${S.round === 0 ? 'on' : ''}">${FLAME}<b>${st}</b></div>
    <h2>${esc(dt(S.round ? 'done_bonus' : 'done_h'))}</h2>
    <p class="dl-score">${esc(dt('score', { k, n }))}</p>
    <p>${S.round === 0 ? esc(dt(st === 1 ? 'done_streak' : 'done_streaks', { n: st })) + ' ' : ''}${esc(dt(k < n ? 'done_back' : 'done_clean'))}</p>
    <div class="dl-actions center"><button type="button" class="btn primary" data-dact="more">${esc(dt('more'))}</button></div>
    <p class="small muted">${esc(dt('more_note'))}</p>
  </article>`;
}
function renderDaily() {
  const root = document.getElementById('daily'); if (!root) return;
  const S = dSession();
  root.innerHTML = `${DSY.banner ? `<div class="fb ${DSY.banner.ok ? 'ok' : 'bad'} dl-banner" role="status">${esc(dSyncMsg(DSY.banner))}</div>` : ''}${dHeader()}
    <div class="dl-main">
      <div class="dl-round"><span class="mono small muted">${S.round ? esc(dt('bonus', { n: S.round })) : esc(new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' }))}</span>${dProgress(S)}</div>
      ${S.done ? dDone(S) : dCard(S)}
    </div>
    <p class="dl-foot small muted">${esc(dt('stats', { k: DS.stats.ok, n: DS.stats.n }))} · ${esc(dt('local'))} <button type="button" class="linkbtn strong" data-dact="sync" aria-expanded="${DSY.open}">${esc(dt('sync_btn'))}</button> · <button type="button" class="linkbtn" data-dact="reset">${esc(dt('reset'))}</button></p>
    ${dSyncHTML()}`;
  dNavBadge();
  const inp = document.getElementById('dl-input');
  if (inp && !inp.disabled && !DSY.open && document.activeElement === document.body && innerWidth > 720) inp.focus({ preventScroll: true });
}
function dFocusAfter(sel) { const el = document.querySelector('#daily ' + sel); if (el) el.focus({ preventScroll: true }); }
function dAct(a) {
  DSY.banner = null;
  const S = dSession();
  if (a === 'check' && !S.done) {
    const it = S.items[S.idx], G = dItem(it), res = G.check(DC.v);
    if (res.err !== undefined) { DC.fb = res.err ? { err: res.err } : null; renderDaily(); return; }
    if (!S.res[S.idx]) { S.res[S.idx] = { ok: res.ok }; dRecord(it, res.ok); dSave(); }
    DC.fb = res; if (!res.ok && G.kind === 'mc') DC.shown = true;
    renderDaily(); dFocusAfter(res.ok || G.kind === 'mc' ? '[data-dact="next"]' : '#dl-input');
  } else if (a === 'reveal') {
    const it = S.items[S.idx];
    if (!S.res[S.idx]) { S.res[S.idx] = { ok: false }; dRecord(it, false); dSave(); }
    DC.shown = true; renderDaily(); dFocusAfter('[data-dact="next"]');
  } else if (a === 'next') {
    DC = { v: {}, fb: null, shown: false };
    if (S.idx < S.items.length - 1) { S.idx++; dSave(); }
    else dComplete(S);
    renderDaily(); dFocusAfter(S.done ? '[data-dact="more"]' : '#dl-input');
  } else if (a === 'more') {
    DC = { v: {}, fb: null, shown: false };
    DS.sess = dBuild(dToday(), S.round + 1); dSave(); renderDaily(); dFocusAfter('#dl-input');
  } else if (a === 'sync') {
    DSY.open = !DSY.open; DSY.msg = null; DSY.code = null; DSY.copied = '';
    renderDaily();
    if (DSY.open) { dSyncRefresh(); const el = document.querySelector('#daily .dl-sync'); if (el) el.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' }); }
  } else if (a === 'copylink' || a === 'copycode') { dCopy(a === 'copylink' ? 'link' : 'code');
  } else if (a === 'import') { const t = document.getElementById('dl-sync-in'); if (t && t.value.trim()) dApplyCode(t.value);
  } else if (a === 'reset') {
    if (!confirmReset()) return;
    DS = dFresh(); DC = { v: {}, fb: null, shown: false }; dSave(); renderDaily();
  }
}
let dResetArmed = 0;
function confirmReset() { // two clicks instead of a blocking confirm()
  const b = document.querySelector('#daily [data-dact="reset"]');
  if (Date.now() - dResetArmed < 4000) { dResetArmed = 0; return true; }
  dResetArmed = Date.now(); if (b) b.textContent = dt('reset_q'); return false;
}
function initDaily() {
  const root = document.getElementById('daily'); if (!root) return;
  root.addEventListener('click', e => {
    const o = e.target.closest('[data-opt]'); if (o && !o.disabled) { DC.v.a = o.dataset.opt; DC.fb = null; dAct('check'); return; }
    const b = e.target.closest('[data-dact]'); if (b) dAct(b.dataset.dact);
  });
  root.addEventListener('input', e => {
    const i = e.target.closest('[data-dl]'); if (!i) return;
    if (i.type === 'checkbox') { DC.v[i.dataset.dl] = i.checked ? '1' : ''; const t = document.getElementById('dl-input'); if (t) t.disabled = i.checked; }
    else DC.v[i.dataset.dl] = i.value;
    if (DC.fb && DC.fb.err) { DC.fb = null; const f = root.querySelector('.fb.info'); if (f) f.remove(); }
  });
  root.addEventListener('keydown', e => {
    if (e.key !== 'Enter' || e.isComposing) return;
    if (e.target.id === 'dl-input' || e.target.type === 'checkbox') { e.preventDefault(); const nx = root.querySelector('[data-dact="next"]'); if (nx) dAct('next'); else dAct('check'); }
  });
  dNavBadge();
}
