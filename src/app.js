/* ===== App ===== */
const T = {
  de: {
    given: 'Invariante gegeben', find: 'Invariante finden', ifarr: 'if/else & Arrays', progress: '{d} von {n} Schritten',
    s_plan: 'Das Gerüst', s_before: 'Zusicherung vor', s_entry: 'Schleifeneintritt', s_exit: 'Schleifenende',
    s_init: 'Initialisierung', s_pre: 'Vorbedingung', s_var: 'Terminierung', s_sol: 'Vollständige Lösung',
    s_tab: 'Wertetabelle', s_cand: 'Kandidaten testen', s_own: 'Eigene Invariante',
    s_then: 'then-Zweig', s_else: 'else-Zweig', s_then_in: 'Eintritt in den then-Zweig', s_else_in: 'Eintritt in den else-Zweig', s_noelse: 'Bedingungsregel 1: B ist falsch',
    check: 'Prüfen', hint: 'Tipp', show: 'Lösung zeigen', next: 'Weiter', yes: 'Ja, folgt', no: 'Nein, folgt nicht',
    row: 'Nächste Runde', allrows: 'Alle Runden', reset: 'Aufgabe neu beginnen',
    ph: 'z. B. i <= n && res = 3*i', phv: 'z. B. n - i', pha: 'Zusicherung',
    syntax: 'Eingabe: = ≠ < <= > >= sowie && || ! => (oder ∧ ∨ ¬ ⇒ ≤ ≥). Multiplikation *, Potenz ^, Klammern ( ).',
    syntax_arr: 'Arrays: a[i], a.length, sum(a, von, bis) = a[von] + … + a[bis] (leerer Bereich: 0), max(a, von, bis).',
    syntax_gcd: 'gcd(x, y) ist der größte gemeinsame Teiler (ggT(x, y) geht auch).', syntax_fact: 'fact(n) = n!',
    ok_eq: 'Richtig. Deine Zusicherung ist äquivalent zur Musterlösung', neq: 'Noch nicht äquivalent. Gegenbeispiel:',
    neq_d: 'Hier ist deine Zusicherung {u}, die richtige aber {e}.', tr: 'wahr', fa: 'falsch',
    expected: 'Musterlösung (direkt eingesetzt, darf vereinfacht werden):',
    err_char: 'Unbekanntes Zeichen „{d}“.', err_end: 'Der Ausdruck endet zu früh.', err_paren: 'Eine schließende Klammer fehlt.',
    err_tok: 'Unerwartetes Symbol „{d}“.', err_empty: 'Bitte gib einen Ausdruck ein.', err_var: 'Die Variable „{d}“ kommt im Programm nicht vor.',
    err_needbool: 'Hier wird eine Bedingung (wahr oder falsch) erwartet, kein Zahlenwert.', err_neednum: 'Hier wird ein Zahlenwert erwartet, keine Bedingung.',
    err_arrscalar: '„{d}“ ist ein Array. Verwende a[i], a.length, sum(…) oder max(…).', err_notarray: '„{d}“ ist kein Array.',
    err_arrarg: 'Das erste Argument von {d}(…) muss ein Array sein, z. B. sum(a, 0, i - 1).',
    c_start: 'Start: Vorbedingung, dann Initialisierung ⇒ I', c_keep: 'Erhaltung: ⟨I ∧ B⟩ Rumpf ⟨I⟩', c_end: 'Ende: I ∧ ¬B ⇒ Nachbedingung',
    c_start_bad: 'Eingabe {i}: nach der Initialisierung ist {s}, aber I ist falsch.',
    c_keep_bad: 'Vorher {b} (I und B wahr). Nach dem Rumpf {a}: I ist falsch.',
    c_keep_undef: 'Im Zustand {b} gelten I und B, aber der Rumpf ist dort nicht ausführbar (z. B. Arrayindex außerhalb des Arrays).',
    c_end_bad: 'Im Zustand {s} gelten I und ¬B, die Nachbedingung aber nicht.',
    c_n: '{n} Zustände geprüft', c_all: 'Alle drei Pflichten erfüllt. Das ist eine gültige Schleifeninvariante.',
    c_note: 'Der Prüfer testet automatisch alle Zustände auf einem endlichen Zahlengitter. Das ersetzt keinen Beweis, findet aber fast jeden Fehler.',
    c_hint_start: 'Tipp: Die Invariante ist am Anfang zu stark. Setze die Startwerte ein und prüfe.',
    c_hint_keep: 'Tipp: Eine Runde zerstört die Invariante. Meist fehlt eine Beziehung oder eine Schranke, die den Rumpf absichert.',
    c_hint_end: 'Tipp: Die Invariante ist zu schwach. Oft fehlt eine Schranke wie i ≤ n.',
    v_prompt: 'Gib eine Variante V an: einen ganzzahligen Ausdruck, der nicht negativ ist, solange die Schleife läuft, und in jeder Runde echt kleiner wird.',
    v_nonneg: 'I ∧ B ⇒ V ≥ 0', v_dec: '⟨V = m ∧ B⟩ Rumpf ⟨V < m⟩',
    v_nonneg_bad: 'Im Zustand {s} gilt I ∧ B, aber V = {v} ist negativ.',
    v_dec_bad: 'Von {b} nach {a} wird V nicht kleiner ({v0} → {v1}).',
    v_ok: 'Gültige Variante. Die Schleife terminiert, aus partieller wird totale Korrektheit.',
    v_hint: 'Welche Größe misst den „Abstand zum Ziel“? Sie wird pro Runde kleiner und bleibt ≥ 0, solange B gilt.',
    plan_txt: 'Die Invariante I steht vor der Schleife und am Ende des Rumpfs. Du arbeitest wie in der Klausur rückwärts, also von unten nach oben, und nutzt bei jeder Zuweisung die Zuweisungsregel. Zu zeigen sind drei Dinge: Start, Erhaltung, Ende.',
    plan_txt_if: 'Hier gibt es keine Schleife. Nach der Bedingungsregel 2 bekommt der then-Zweig ⟨φ ∧ B⟩ und der else-Zweig ⟨φ ∧ ¬B⟩, und beide müssen bei derselben Nachbedingung ankommen. In jedem Zweig rechnest du von unten nach oben.',
    plan_txt_loopif: 'Im Rumpf steht ein if. Jeder Zweig bekommt seine eigene Eintrittszusicherung (φ ∧ B bzw. φ ∧ ¬B) und muss bei I ankommen.',
    plan_btn: 'Verstanden, los geht’s',
    before_txt: 'Was muss vor dieser Anweisung gelten, damit danach die Zusicherung darunter gilt? Du darfst vereinfachen.',
    before_hint: 'Ersetze in der Zusicherung darunter jedes {x} durch ({t}).',
    init_txt: 'Jetzt die Initialisierungen: Welche Zusicherung steht ganz oben, vor allen Startzuweisungen?',
    init_hint: 'Zwei Schritte von unten nach oben. Zwischenergebnis vor der letzten Startzuweisung:',
    imp_txt: 'Hier stehen zwei Zusicherungen direkt untereinander. Folgt die untere aus der oberen?',
    imp_txt_n: 'Das if hat keinen else-Zweig. Ist B falsch, passiert nichts. Dann muss die Zusicherung nach dem if schon aus φ ∧ ¬B folgen. Folgt sie?',
    imp_ok: 'Richtig.', imp_bad: 'Nicht ganz.', imp_generic: 'Setze die bekannten Fakten ein und vereinfache, dann siehst du es.',
    tab_txt: 'Führe das Programm mit {s} aus. Jede Zeile zeigt die Werte nach einer Runde. Suche eine Beziehung, die in jeder Zeile gilt.',
    tab_done: 'Siehst du eine Beziehung? Dann weiter.',
    cand_txt: 'Welcher Kandidat ist eine Invariante, mit der sich die Nachbedingung beweisen lässt? Klicke einen an. Der Prüfer testet alle drei Pflichten.',
    own_txt: 'Formuliere jetzt eine eigene Invariante. Sie darf anders aussehen als die Musterlösung, solange sie alle drei Pflichten erfüllt.',
    sol_txt: 'Die vollständig annotierte Lösung im Stil der RWTH-Übungen.',
    sol_var: 'Terminierung mit der Variante V = {v}:',
    n_pre: 'Vorbedingung', n_imp: 'folgt aus darüber', n_asg: 'Zuweisungsregel', n_loop: 'Schleifenregel', n_var: 'Variante',
    n_cond: 'Bedingungsregel', n_if1: 'Bedingungsregel 1', n_if2: 'Bedingungsregel 2',
    round: 'Runde', start: 'Start', inv_label: 'Invariante I', bw_need: 'Die Variable muss ein einfacher Name sein, z. B. i.',
    k_title: 'Klausur-Simulation', k_kicker: 'Programmierung · Aufgabe zum Hoare-Kalkül',
    k_intro: 'Eine Aufgabe wie in der schriftlichen Prüfung: Du bekommst ein Programm mit Vor- und Nachbedingung und füllst alle Zusicherungen selbst aus, ohne Tipps. Erst nach der Abgabe wird bewertet. Hast du eine eigene gültige Invariante gewählt, werden die übrigen Zeilen mit deiner Invariante bewertet, wie bei einer echten Korrektur.',
    k_pick: 'Aufgabe', k_random: 'Zufällige Aufgabe', k_timer: 'Mit Zeitlimit (20 Minuten)', k_start: 'Klausur starten',
    k_rules: 'Bewertung: Invariante 2 Punkte, jede Zusicherung 1 Punkt, Variante 1 Punkt.',
    k_a: 'a) Partielle Korrektheit', k_a_txt: 'Beweisen Sie die partielle Korrektheit des folgenden Programms mit dem Hoare-Kalkül. Ergänzen Sie dazu alle Zusicherungen. Zwei Zusicherungen dürfen nur dann direkt untereinander stehen, wenn die untere aus der oberen folgt.',
    k_inv: 'Die verwendete Schleifeninvariante ist', k_b: 'b) Terminierung',
    k_b_txt: 'Geben Sie eine Variante V an und beweisen Sie damit die Terminierung. {m} bezeichnet den Wert von V zu Beginn eines Schleifendurchlaufs.',
    k_submit: 'Abgeben und bewerten', k_left: 'verbleibend', k_score: '{p} von {t} Punkten', k_new: 'Neue Klausur', k_retry: 'Gleiche Aufgabe neu',
    k_expected: 'Erwartet:', k_timeup: 'Die Zeit ist abgelaufen. Die Klausur wurde automatisch abgegeben.',
    k_inv_used: 'Deine Invariante ist gültig. Die Zusicherungen wurden mit deiner Invariante bewertet.',
    k_inv_bad: 'Keine gültige Invariante. Die Zusicherungen wurden mit der Musterinvariante bewertet:',
    k_var_bad: 'Keine gültige Variante. Die Zeilen in b) wurden mit der Mustervariante bewertet:',
    k_g1: 'Sehr gut. So kannst du in die Prüfung gehen.', k_g2: 'Solide. Schau dir die roten Zeilen genau an.', k_g3: 'Übe die geführten Aufgaben noch einmal und versuche es dann erneut.',
    k_empty: 'leer', k_points: 'Punkte', k_practice: 'aus den Übungen', k_examonly: 'nur in der Klausur'
  },
  en: {
    given: 'Invariant given', find: 'Find the invariant', ifarr: 'if/else & arrays', progress: '{d} of {n} steps',
    s_plan: 'The skeleton', s_before: 'Assertion before', s_entry: 'Loop entry', s_exit: 'Loop exit',
    s_init: 'Initialisation', s_pre: 'Precondition', s_var: 'Termination', s_sol: 'Complete solution',
    s_tab: 'Value table', s_cand: 'Test candidates', s_own: 'Your own invariant',
    s_then: 'then branch', s_else: 'else branch', s_then_in: 'Entering the then branch', s_else_in: 'Entering the else branch', s_noelse: 'Conditional rule 1: B is false',
    check: 'Check', hint: 'Hint', show: 'Show solution', next: 'Next', yes: 'Yes, it follows', no: 'No, it does not',
    row: 'Next round', allrows: 'All rounds', reset: 'Restart exercise',
    ph: 'e.g. i <= n && res = 3*i', phv: 'e.g. n - i', pha: 'assertion',
    syntax: 'Input: = ≠ < <= > >= and && || ! => (or ∧ ∨ ¬ ⇒ ≤ ≥). Multiply with *, power with ^, parentheses ( ).',
    syntax_arr: 'Arrays: a[i], a.length, sum(a, from, to) = a[from] + … + a[to] (empty range: 0), max(a, from, to).',
    syntax_gcd: 'gcd(x, y) is the greatest common divisor.', syntax_fact: 'fact(n) = n!',
    ok_eq: 'Correct. Your assertion is equivalent to the model answer', neq: 'Not equivalent yet. Counterexample:',
    neq_d: 'Here your assertion is {u}, but the correct one is {e}.', tr: 'true', fa: 'false',
    expected: 'Model answer (substituted directly, may be simplified):',
    err_char: 'Unknown character “{d}”.', err_end: 'The expression ends too early.', err_paren: 'A closing parenthesis is missing.',
    err_tok: 'Unexpected symbol “{d}”.', err_empty: 'Please enter an expression.', err_var: 'The variable “{d}” does not occur in the program.',
    err_needbool: 'A condition (true or false) is expected here, not a number.', err_neednum: 'A number is expected here, not a condition.',
    err_arrscalar: '“{d}” is an array. Use a[i], a.length, sum(…) or max(…).', err_notarray: '“{d}” is not an array.',
    err_arrarg: 'The first argument of {d}(…) must be an array, e.g. sum(a, 0, i - 1).',
    c_start: 'Start: precondition, then initialisation ⇒ I', c_keep: 'Preservation: ⟨I ∧ B⟩ body ⟨I⟩', c_end: 'Exit: I ∧ ¬B ⇒ postcondition',
    c_start_bad: 'Input {i}: after initialisation we have {s}, but I is false.',
    c_keep_bad: 'Before {b} (I and B true). After the body {a}: I is false.',
    c_keep_undef: 'In state {b}, I and B hold, but the body cannot run there (e.g. array index out of bounds).',
    c_end_bad: 'In state {s}, I and ¬B hold but the postcondition does not.',
    c_n: '{n} states checked', c_all: 'All three duties hold. This is a valid loop invariant.',
    c_note: 'The checker automatically tests every state on a finite grid of numbers. That is no substitute for a proof, but it catches almost every mistake.',
    c_hint_start: 'Hint: the invariant is too strong at the start. Plug in the initial values and check.',
    c_hint_keep: 'Hint: one round breaks the invariant. Usually a relation or a bound that protects the body is missing.',
    c_hint_end: 'Hint: the invariant is too weak. Often a bound like i ≤ n is missing.',
    v_prompt: 'Enter a variant V: an integer expression that is non-negative while the loop runs and strictly decreases every round.',
    v_nonneg: 'I ∧ B ⇒ V ≥ 0', v_dec: '⟨V = m ∧ B⟩ body ⟨V < m⟩',
    v_nonneg_bad: 'In state {s}, I ∧ B holds but V = {v} is negative.',
    v_dec_bad: 'From {b} to {a}, V does not decrease ({v0} → {v1}).',
    v_ok: 'Valid variant. The loop terminates, so partial correctness becomes total correctness.',
    v_hint: 'Which quantity measures the “distance to the goal”? It shrinks every round and stays ≥ 0 while B holds.',
    plan_txt: 'The invariant I sits before the loop and at the end of the body. As in the exam, you work backwards, from the bottom up, applying the assignment rule at each assignment. Three things must be shown: start, preservation, exit.',
    plan_txt_if: 'There is no loop here. By conditional rule 2, the then branch gets ⟨φ ∧ B⟩ and the else branch gets ⟨φ ∧ ¬B⟩, and both must arrive at the same postcondition. In each branch you compute from the bottom up.',
    plan_txt_loopif: 'The body contains an if. Each branch gets its own entry assertion (φ ∧ B or φ ∧ ¬B) and must arrive at I.',
    plan_btn: 'Got it, let’s go',
    before_txt: 'What must hold before this statement so that the assertion below holds afterwards? You may simplify.',
    before_hint: 'In the assertion below, replace every {x} by ({t}).',
    init_txt: 'Now the initialisations: which assertion sits at the very top, before all initial assignments?',
    init_hint: 'Two steps from the bottom up. Intermediate result before the last initial assignment:',
    imp_txt: 'Two assertions stand directly below each other here. Does the lower one follow from the upper one?',
    imp_txt_n: 'The if has no else branch. If B is false, nothing happens, so the assertion after the if must already follow from φ ∧ ¬B. Does it?',
    imp_ok: 'Correct.', imp_bad: 'Not quite.', imp_generic: 'Plug in what you know and simplify, and you will see it.',
    tab_txt: 'Run the program with {s}. Each row shows the values after one round. Look for a relation that holds in every row.',
    tab_done: 'Do you see a relation? Then move on.',
    cand_txt: 'Which candidate is an invariant that lets you prove the postcondition? Click one. The checker tests all three duties.',
    own_txt: 'Now write your own invariant. It may look different from the model answer, as long as it satisfies all three duties.',
    sol_txt: 'The fully annotated solution in the style of the RWTH tutorials.',
    sol_var: 'Termination with the variant V = {v}:',
    n_pre: 'precondition', n_imp: 'follows from above', n_asg: 'assignment rule', n_loop: 'loop rule', n_var: 'variant',
    n_cond: 'conditional rule', n_if1: 'conditional rule 1', n_if2: 'conditional rule 2',
    round: 'Round', start: 'Start', inv_label: 'Invariant I', bw_need: 'The variable must be a simple name, e.g. i.',
    k_title: 'Exam simulation', k_kicker: 'Programmierung · Hoare logic exam task',
    k_intro: 'A task like in the written exam: you get a program with pre- and postcondition and fill in every assertion yourself, without hints. Grading happens only after you submit. If you choose your own valid invariant, the remaining lines are graded against your invariant, just as a real marker would.',
    k_pick: 'Task', k_random: 'Random task', k_timer: 'With time limit (20 minutes)', k_start: 'Start the exam',
    k_rules: 'Grading: invariant 2 points, each assertion 1 point, variant 1 point.',
    k_a: 'a) Partial correctness', k_a_txt: 'Prove the partial correctness of the following program using Hoare logic. To do so, fill in all assertions. Two assertions may stand directly below each other only if the lower one follows from the upper one.',
    k_inv: 'The loop invariant used is', k_b: 'b) Termination',
    k_b_txt: 'Give a variant V and use it to prove termination. {m} denotes the value of V at the start of a loop iteration.',
    k_submit: 'Submit and grade', k_left: 'left', k_score: '{p} of {t} points', k_new: 'New exam', k_retry: 'Same task again',
    k_expected: 'Expected:', k_timeup: 'Time is up. The exam was submitted automatically.',
    k_inv_used: 'Your invariant is valid. The assertions were graded against your invariant.',
    k_inv_bad: 'Not a valid invariant. The assertions were graded against the model invariant:',
    k_var_bad: 'Not a valid variant. The lines in b) were graded against the model variant:',
    k_g1: 'Very good. You are ready for the exam.', k_g2: 'Solid. Look closely at the red lines.', k_g3: 'Practise the guided exercises again, then try once more.',
    k_empty: 'empty', k_points: 'points', k_practice: 'from the exercises', k_examonly: 'exam only'
  }
};
let lang = 'de';
try { const s = localStorage.getItem('hoarelab-lang'); if (s === 'de' || s === 'en') lang = s; else if ((navigator.language || '').toLowerCase().startsWith('en')) lang = 'en'; } catch (e) {}
const t = (k, rep) => { let s = (T[lang][k] ?? T.de[k] ?? k); if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
const L = o => (o && typeof o === 'object') ? (o[lang] ?? o.de) : o;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const fmtN = v => { if (Array.isArray(v)) return '[' + v.map(fmtN).join(', ') + ']'; if (typeof v === 'boolean') return v ? t('tr') : t('fa'); const r = Number.isInteger(v) ? String(v) : String(Math.round(v * 1000) / 1000); return r.replace('-', '−'); };
const fmtS = (s, names) => (names || Object.keys(s)).filter(n => n in s).map(n => `${n} = ${fmtN(s[n])}`).join(', ');
const errMsg = r => t('err_' + r.err, { d: esc(r.detail || '') });
const reduceMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/* state */
const ST = { view: 'hoare', ex: 'g1', P: {}, tr: { n: 5, hl: -1 }, K: { phase: 'start', pick: 'random', timed: true, id: null, vals: {}, ends: 0, res: null, timeup: false } };
const prog = id => (ST.P[id] ||= { cur: 0, done: {}, val: {}, res: {}, rows: 1, hints: 0, vhint: false });
const exById = id => EX.find(e => e.id === id) || EXAM.find(e => e.id === id);

/* ---- annotated program rendering ---- */
function lnHTML(l, extra = '') {
  const note = l.note ? `<span class="nt">${t('n_' + l.note)}</span>` : '';
  const tx = l.k === 'a' ? `⟨${esc(l.s)}⟩` : esc(l.s);
  return `<div class="ln ${l.k === 'a' ? 'a' : 'c'} ${extra}" style="--ind:${l.ind || 0}"><span class="tx">${tx}</span>${note}</div>`;
}
function linesHTML(Ls) { return `<div class="prog">${Ls.map(l => lnHTML(l)).join('')}</div>`; }
function programHTML(ex, opts = {}) {
  const c = compile(ex), lines = [];
  lines.push(lnHTML({ k: 'a', s: pr(c.pre), ind: 0, note: 'pre' }));
  codeLines(c.init, 0).forEach(l => lines.push(lnHTML(l)));
  if (c.cond) {
    if (opts.showInv) lines.push(lnHTML({ k: 'a', s: pr(c.inv), ind: 0 }));
    else lines.push(`<div class="ln ask"><span class="tx">⟨ ? ⟩</span></div>`);
    lines.push(lnHTML({ k: 'c', s: `while (${ex.cond}) {`, ind: 0 }));
    codeLines(c.body, 1).forEach(l => lines.push(lnHTML(l)));
    lines.push(lnHTML({ k: 'c', s: '}', ind: 0 }));
  }
  lines.push(lnHTML({ k: 'a', s: pr(c.post), ind: 0 }));
  return `<div class="prog">${lines.join('')}</div>`;
}
function syntaxHTML(ex) {
  const extra = [];
  if (ex.arrays) extra.push(t('syntax_arr'));
  if (/gcd/.test(ex.post)) extra.push(t('syntax_gcd'));
  if (/fact/.test(ex.post)) extra.push(t('syntax_fact'));
  return `<p class="syntax">${t('syntax')}${extra.length ? '<br>' + extra.join(' ') : ''}</p>`;
}

/* ---- step generation ---- */
function stepTitle(s) {
  switch (s.k) {
    case 'info': return t('s_plan');
    case 'input': return (s.br === 't' ? t('s_then') + ': ' : s.br === 'e' ? t('s_else') + ': ' : '') + t('s_before');
    case 'init': return t('s_init');
    case 'implies':
      if (s.id === 'exit') return t('s_exit');
      if (s.id === 'imp-b') return t('s_entry');
      if (s.id === 'imp-i') return t('s_pre');
      if (s.id.endsWith('n')) return t('s_noelse');
      if (s.id.endsWith('t')) return t('s_then_in');
      if (s.id.endsWith('e')) return t('s_else_in');
      return t('s_entry');
    case 'table': return t('s_tab');
    case 'cands': return t('s_cand');
    case 'own': return t('s_own');
    case 'variant': return t('s_var');
    case 'sol': return t('s_sol');
  }
}
function stepsFor(ex) {
  const c = compile(ex), S = [];
  if (ex.mode === 'given') {
    S.push({ k: 'info', id: 'plan' });
    if (c.cond) {
      genSteps(c.body, c.inv, mkAnd(c.inv, c.cond), 1, 'b', S);
      S.push({ k: 'implies', id: 'exit', upper: mkAnd(c.inv, mkNot(c.cond)), lower: c.post, ind: 0 });
      if (c.allAsg) {
        const ia = wpList(c.init, c.inv);
        S.push({ k: 'init', id: 'init', code: c.init.map(stmtCode).join(' '), after: c.inv, expect: ia[0], mid: ia[ia.length - 2] });
        S.push({ k: 'implies', id: 'imp-i', upper: c.pre, lower: ia[0], ind: 0 });
      } else genSteps(c.init, c.inv, c.pre, 0, 'i', S);
    } else genSteps(c.init, c.post, c.pre, 0, 'i', S);
  } else {
    S.push({ k: 'table', id: 'tab' }, { k: 'cands', id: 'cand' }, { k: 'own', id: 'own' });
  }
  if (c.cond) S.push({ k: 'variant', id: 'var' });
  S.push({ k: 'sol', id: 'sol' });
  S.forEach(s => s.title = stepTitle(s));
  return S;
}

/* ---- feedback blocks ---- */
const chkRow = (ok, lab, d) => `<div class="chk-r"><span class="m ${ok ? 'y' : 'n'}">${ok ? '✓' : '✗'}</span><div><div class="lab">${lab}</div><div class="d">${d}</div></div></div>`;
function checkHTML(R, ex, withHint = true) {
  const c = compile(ex), parts = [];
  parts.push(chkRow(R.start.ok, t('c_start'), R.start.ok ? '' : t('c_start_bad', { i: esc(fmtS(R.start.input)), s: esc(fmtS(R.start.state, c.names)) })));
  parts.push(chkRow(R.keep.ok, t('c_keep'), R.keep.ok ? t('c_n', { n: R.keep.n }) : R.keep.undef ? t('c_keep_undef', { b: esc(fmtS(R.keep.before, c.names)) }) : t('c_keep_bad', { b: esc(fmtS(R.keep.before, c.names)), a: esc(fmtS(R.keep.after, c.names)) })));
  parts.push(chkRow(R.end.ok, t('c_end'), R.end.ok ? t('c_n', { n: R.end.n }) : t('c_end_bad', { s: esc(fmtS(R.end.state, c.names)) })));
  let hint = '';
  if (R.ok) hint = `<div class="fb ok"><span class="lab">${t('c_all')}</span></div>`;
  else if (withHint) hint = `<p class="small muted">${!R.start.ok ? t('c_hint_start') : !R.end.ok ? t('c_hint_end') : t('c_hint_keep')}</p>`;
  return `<div class="chk">${parts.join('')}</div>${hint}`;
}
function variantHTML(R, ex) {
  const c = compile(ex);
  return `<div class="chk">${chkRow(R.nonneg.ok, t('v_nonneg'), R.nonneg.ok ? t('c_n', { n: R.n }) : t('v_nonneg_bad', { s: esc(fmtS(R.nonneg.state, c.names)), v: fmtN(R.nonneg.v) }))}
    ${chkRow(R.dec.ok, t('v_dec'), R.dec.ok ? t('c_n', { n: R.n }) : t('v_dec_bad', { b: esc(fmtS(R.dec.before, c.names)), a: esc(fmtS(R.dec.after, c.names)), v0: fmtN(R.dec.v0), v1: fmtN(R.dec.v1) }))}</div>
    ${R.ok ? `<div class="fb ok"><span class="lab">${t('v_ok')}</span></div>` : ''}`;
}
const errHTML = r => `<div class="fb bad"><span>${errMsg(r)}</span></div>`;

/* ---- step bodies ---- */
function stepBody(ex, S, i, P) {
  const s = S[i], c = compile(ex), res = P.res[s.id], val = P.val[s.id] ?? '';
  const nextBtn = `<button class="btn ${P.done[s.id] ? 'primary' : 'ghost'}" type="button" data-act="next">${t('next')} →</button>`;
  const inputLine = (ph, ind) => `<div class="ln a" style="--ind:${ind || 0}"><span class="tx">⟨</span><input class="fx" id="in-${ex.id}-${s.id}" data-in="${s.id}" value="${esc(val)}" placeholder="${esc(ph)}" autocomplete="off" spellcheck="false" aria-label="${esc(s.title)}"><span class="tx">⟩</span></div>`;
  switch (s.k) {
    case 'info':
      return `<p>${!c.cond ? t('plan_txt_if') : t('plan_txt') + (c.body.some(x => x.k === 'if') ? ' ' + t('plan_txt_loopif') : '')}</p>${annotSkeleton(ex)}<div class="row"><button class="btn primary" type="button" data-act="done-next">${t('plan_btn')}</button></div>`;
    case 'input': case 'init': {
      let fb = '';
      if (res) {
        if (res.err) fb = errHTML(res);
        else if (res.ok) fb = `<div class="fb ok"><span class="lab">${t('ok_eq')}</span><span class="as">⟨${esc(pr(s.expect))}⟩</span></div>`;
        else if (res.shown) fb = `<div class="fb info"><span class="lab">${t('expected')}</span><span class="as">⟨${esc(pr(s.expect))}⟩</span></div>`;
        else fb = `<div class="fb bad"><span class="lab">${t('neq')}</span><span class="mono small">${esc(fmtS(res.state, c.names.filter(n => !res.vars || res.vars.includes(n))))}</span><span>${t('neq_d', { u: fmtN(res.va), e: fmtN(res.vb) })}</span></div>`;
      }
      const hint = P.res[s.id + '_h'] ? (s.k === 'input'
        ? `<div class="fb info">${t('before_hint', { x: `<b class="mono">${esc(s.x)}</b>`, t: `<b class="mono">${esc(s.tsrc)}</b>` })}</div>`
        : `<div class="fb info"><span>${t('init_hint')}</span><span class="as">⟨${esc(pr(s.mid))}⟩</span></div>`) : '';
      const codeLns = s.k === 'input'
        ? `<div class="ln c" style="--ind:${s.ind}"><span class="tx">${esc(s.code)}</span></div>${lnHTML({ k: 'a', s: pr(s.after), ind: s.ind })}`
        : codeLines(c.init, 0).map(l => lnHTML(l)).join('') + lnHTML({ k: 'a', s: pr(s.after), ind: 0 });
      return `<p>${s.k === 'input' ? t('before_txt') : t('init_txt')}</p>
        <div class="prog">${inputLine(t('ph'), s.k === 'input' ? s.ind : 0)}${codeLns}</div>
        ${syntaxHTML(ex)}
        <div class="row"><button class="btn primary" type="button" data-act="check">${t('check')}</button><button class="btn" type="button" data-act="hint">${t('hint')}</button><button class="btn ghost" type="button" data-act="show">${t('show')}</button>${nextBtn}</div>${hint}${fb}`;
    }
    case 'implies': {
      let fb = '';
      const note = ex.notes && ex.notes[s.id] ? L(ex.notes[s.id]) : t('imp_generic');
      if (res) fb = `<div class="fb ${res.correct ? 'ok' : 'bad'}"><span class="lab">${res.correct ? t('imp_ok') : t('imp_bad')}</span><span>${esc(note)}</span></div>`;
      return `<p>${s.id.endsWith('n') ? t('imp_txt_n') : t('imp_txt')}</p>${linesHTML([{ k: 'a', s: pr(s.upper), ind: s.ind }, { k: 'a', s: pr(s.lower), ind: s.ind, note: s.id.endsWith('n') ? 'if1' : 'imp' }])}
        <div class="row"><button class="btn" type="button" data-act="yes">${t('yes')}</button><button class="btn" type="button" data-act="no">${t('no')}</button>${nextBtn}</div>${fb}`;
    }
    case 'table': {
      const rows = trace(ex, ex.sample), shown = Math.min(P.rows, rows.length);
      const th = `<tr><th>${t('round')}</th>${c.names.map(n => `<th>${n}</th>`).join('')}<th>B: ${esc(pr(c.cond))}</th></tr>`;
      const tb = rows.map((r, k) => `<tr class="${k < shown ? (k === shown - 1 ? 'hl' : '') : 'ghost'}"><td>${k === 0 ? t('start') : k}</td>${c.names.map(n => `<td>${k < shown ? fmtN(r.s[n]) : '·'}</td>`).join('')}<td>${k < shown ? `<span class="${r.b ? 'yes' : 'no'}">${fmtN(r.b)}</span>` : '·'}</td></tr>`).join('');
      return `<p>${t('tab_txt', { s: `<span class="mono">${esc(fmtS(ex.sample))}</span>` })}</p>
        <div class="tblwrap"><table class="vt">${th}${tb}</table></div>
        <div class="row"><button class="btn" type="button" data-act="row" ${shown >= rows.length ? 'disabled' : ''}>${t('row')}</button><button class="btn ghost" type="button" data-act="allrows" ${shown >= rows.length ? 'disabled' : ''}>${t('allrows')}</button>${shown >= rows.length ? `<span class="small muted">${t('tab_done')}</span>` : ''}<span style="margin-left:auto"></span>${nextBtn}</div>`;
    }
    case 'cands': {
      const picked = res ? res.picked : -1;
      const list = ex.cands.map((cd, k) => {
        let detail = '';
        if (k === picked) detail = `${checkHTML(checkInv(ex, parse(cd.f)), ex)}<p class="small">${esc(L(cd.note))}</p>`;
        return `<div class="cand"><button type="button" data-act="cand" data-k="${k}" aria-expanded="${k === picked}"><span class="key">${'ABCD'[k]}</span>⟨${esc(pr(parse(cd.f)))}⟩</button>${detail}</div>`;
      }).join('');
      return `<p>${t('cand_txt')}</p><div class="cands">${list}</div><div class="row">${nextBtn}</div><p class="small muted">${t('c_note')}</p>`;
    }
    case 'own': {
      let fb = '';
      if (res) fb = res.err ? errHTML(res) : checkHTML(res.R, ex);
      const hints = ex.hints[lang].slice(0, P.hints).map(h => `<li>${esc(h)}</li>`).join('');
      return `<p>${t('own_txt')}</p>
        <div class="prog">${lnHTML({ k: 'a', s: pr(c.pre), ind: 0, note: 'pre' })}${codeLines(c.init, 0).map(l => lnHTML(l)).join('')}${inputLine(t('ph'), 0)}${lnHTML({ k: 'c', s: `while (${ex.cond}) { … }` })}${lnHTML({ k: 'a', s: pr(c.post), ind: 0 })}</div>
        ${syntaxHTML(ex)}
        <div class="row"><button class="btn primary" type="button" data-act="checkinv">${t('check')}</button><button class="btn" type="button" data-act="morehint" ${P.hints >= ex.hints[lang].length ? 'disabled' : ''}>${t('hint')} (${P.hints}/${ex.hints[lang].length})</button>${nextBtn}</div>
        ${hints ? `<ol class="hints">${hints}</ol>` : ''}${fb}<p class="small muted">${t('c_note')}</p>`;
    }
    case 'variant': {
      let fb = '';
      if (res) fb = res.err ? errHTML(res) : variantHTML(res.R, ex);
      return `<p>${t('v_prompt')}</p>
        <div class="inline-in"><span class="mono">V =</span><input id="in-${ex.id}-var" data-in="var" value="${esc(val)}" placeholder="${esc(t('phv'))}" autocomplete="off" spellcheck="false" aria-label="V"></div>
        <div class="row"><button class="btn primary" type="button" data-act="checkvar">${t('check')}</button><button class="btn" type="button" data-act="vhint">${t('hint')}</button>${nextBtn}</div>
        ${P.vhint ? `<div class="fb info">${t('v_hint')}</div>` : ''}${fb}`;
    }
    case 'sol':
      return `<p>${t('sol_txt')}</p>${linesHTML(annotate(ex))}${c.cond ? `<p>${t('sol_var', { v: `<span class="mono">${esc(pr(c.variant))}</span>` })}</p>${linesHTML(annotateVariant(ex))}` : ''}
        <div class="row"><button class="btn ghost" type="button" data-act="reset">${t('reset')}</button></div>`;
  }
}
function annotSkeleton(ex) {
  const c = compile(ex);
  if (!c.cond) return `<div class="prog">${annotate(ex).filter(l => l.note !== 'imp').map(l => lnHTML(l, l.note === 'asg' ? 'hl' : '')).join('')}</div>`;
  const I = pr(c.inv), lines = [];
  lines.push(lnHTML({ k: 'a', s: pr(c.pre), note: 'pre' }));
  codeLines(c.init, 0).forEach(l => lines.push(lnHTML(l)));
  lines.push(lnHTML({ k: 'a', s: I }, 'hl'));
  lines.push(lnHTML({ k: 'c', s: `while (${ex.cond}) {` }));
  lines.push(lnHTML({ k: 'a', s: pr(mkAnd(c.inv, c.cond)), ind: 1, note: 'loop' }));
  codeLines(c.body, 1).forEach(l => lines.push(lnHTML(l)));
  lines.push(lnHTML({ k: 'a', s: I, ind: 1 }, 'hl'));
  lines.push(lnHTML({ k: 'c', s: '}' }));
  lines.push(lnHTML({ k: 'a', s: pr(mkAnd(c.inv, mkNot(c.cond))), note: 'loop' }));
  lines.push(lnHTML({ k: 'a', s: pr(c.post) }));
  return `<div class="prog">${lines.join('')}</div>`;
}

/* ---- practice rendering ---- */
function renderList() {
  const grp = g => EX.filter(e => e.group === g).map(e => {
    const P = prog(e.id), n = stepsFor(e).length, d = Object.keys(P.done).length;
    return `<button type="button" class="exbtn" data-ex="${e.id}" aria-current="${ST.ex === e.id}"><span class="t">${esc(L(e.title))}</span><span class="lv" aria-label="level ${e.level}">${'●'.repeat(e.level)}${'○'.repeat(3 - e.level)}</span><span class="pr">${t('progress', { d: Math.min(d, n), n })}</span></button>`;
  }).join('');
  document.getElementById('exlist').innerHTML = ['given', 'find', 'ifarr'].map(g => `<div class="exgroup"><h3>${t(g)}</h3>${grp(g)}</div>`).join('')
    + `<a class="btn" href="#exam-hoare" style="justify-self:start">${t('k_title')} →</a>`;
}
function renderWS() {
  const ex = exById(ST.ex), P = prog(ex.id), S = stepsFor(ex), c = compile(ex);
  const steps = S.map((s, i) => {
    const open = i === P.cur, done = !!P.done[s.id];
    return `<section class="step ${open ? 'open' : ''} ${done ? 'done' : ''}">
      <button type="button" class="step-h" data-go="${i}" aria-expanded="${open}"><span class="dot">${done ? '✓' : i + 1}</span><span class="st">${esc(s.title)}</span>${s.code ? `<span class="code">${esc(s.code)}</span>` : ''}</button>
      ${open ? `<div class="step-b">${stepBody(ex, S, i, P)}</div>` : ''}</section>`;
  }).join('');
  document.getElementById('ws').innerHTML = `
    <div class="ws-h"><span class="badge">${t(ex.group)}${ex.group === 'ifarr' ? ' · ' + t(ex.mode) : ''}</span><h2>${esc(L(ex.title))}</h2><p class="prose">${esc(L(ex.story))}</p></div>
    ${programHTML(ex, { showInv: ex.mode === 'given' })}
    ${ex.mode === 'given' && c.cond ? `<div class="invbox">${t('inv_label')} = ⟨${esc(pr(c.inv))}⟩</div>` : ''}
    <div class="steps">${steps}</div>`;
}
function renderPractice() { renderList(); renderWS(); }

function handleWS(e) {
  const go = e.target.closest('[data-go]');
  const ex = exById(ST.ex), P = prog(ex.id), S = stepsFor(ex);
  if (go) { const i = +go.dataset.go; P.cur = P.cur === i ? -1 : i; renderWS(); return; }
  const b = e.target.closest('[data-act]'); if (!b) return;
  const s = S[P.cur], act = b.dataset.act;
  if (!s) return;
  const readVal = () => { const el = document.querySelector(`[data-in="${s.id}"]`); const v = el ? el.value : ''; P.val[s.id] = v; return v; };
  const advance = () => { P.cur = Math.min(P.cur + 1, S.length - 1); };
  switch (act) {
    case 'next': P.done[s.id] = P.done[s.id] || s.k === 'table' || s.k === 'sol'; advance(); break;
    case 'done-next': P.done[s.id] = true; advance(); break;
    case 'check': {
      const r = userFormula(ex, readVal(), 'B');
      if (r.err) P.res[s.id] = r;
      else { const q = equiv(ex, r.ast, s.expect); if (!q.ok) q.vars = [...new Set([...varsOf(r.ast), ...varsOf(s.expect)])]; P.res[s.id] = q.ok ? { ok: true } : q; if (q.ok) P.done[s.id] = true; }
      break; }
    case 'hint': P.res[s.id + '_h'] = true; break;
    case 'show': P.res[s.id] = { shown: true }; break;
    case 'yes': case 'no': {
      const truth = implies(ex, s.upper, s.lower).ok;
      const correct = (act === 'yes') === truth; P.res[s.id] = { correct }; if (correct) P.done[s.id] = true; break; }
    case 'row': P.rows++; break;
    case 'allrows': P.rows = 99; P.done[s.id] = true; break;
    case 'cand': { const k = +b.dataset.k; P.res[s.id] = { picked: k }; if (ex.cands[k].ok) P.done[s.id] = true; break; }
    case 'checkinv': {
      const r = userFormula(ex, readVal(), 'B');
      if (r.err) P.res[s.id] = r; else { const R = checkInv(ex, r.ast); P.res[s.id] = { R }; if (R.ok) P.done[s.id] = true; }
      break; }
    case 'morehint': P.hints++; break;
    case 'checkvar': {
      const r = userFormula(ex, readVal(), 'N');
      if (r.err) P.res[s.id] = r; else { const R = checkVariant(ex, r.ast); P.res[s.id] = { R }; if (R.ok) P.done[s.id] = true; }
      break; }
    case 'vhint': P.vhint = true; break;
    case 'reset': delete ST.P[ex.id]; break;
  }
  const P2 = prog(ex.id);
  if (S[P2.cur] && S[P2.cur].k === 'sol') P2.done.sol = true;
  renderPractice();
  if (act === 'next' || act === 'done-next') {
    const el = document.querySelector('.step.open'); if (el) el.scrollIntoView({ block: 'nearest', behavior: reduceMotion() ? 'auto' : 'smooth' });
    const inp = document.querySelector('.step.open input'); if (inp) inp.focus({ preventScroll: true });
  } else if (['check', 'checkinv', 'checkvar', 'hint', 'morehint', 'vhint'].includes(act)) {
    const inp = document.querySelector('.step.open [data-in]'); if (inp) inp.focus({ preventScroll: true });
  }
  snapshot();
}

/* ---- exam simulation ---- */
const POOL = () => [...EX.filter(e => e.cond), ...EXAM];
let kTimer = null;
function kBlankLines(ex) {
  const A = annotate(ex), V = annotateVariant(ex);
  return { A, V, aIdx: A.map((l, i) => (l.k === 'a' && i !== 0 && i !== A.length - 1) ? i : -1).filter(i => i >= 0), vIdx: V.map((l, i) => l.k === 'a' ? i : -1).filter(i => i >= 0) };
}
function kTotal(ex) { const b = kBlankLines(ex); return 2 + b.aIdx.length + 1 + b.vIdx.length; }
function kStart() {
  const pool = POOL();
  const id = ST.K.pick === 'random' ? pool[Math.floor(Math.random() * pool.length)].id : ST.K.pick;
  Object.assign(ST.K, { phase: 'run', id, vals: {}, res: null, timeup: false, ends: ST.K.timed ? Date.now() + 20 * 60 * 1000 : 0 });
  renderExam(); kArmTimer();
  const first = document.querySelector('#exam input.fx'); if (first) first.focus({ preventScroll: true });
}
function kArmTimer() {
  clearInterval(kTimer); kTimer = null;
  if (ST.K.phase !== 'run' || !ST.K.ends) return;
  kTimer = setInterval(() => {
    const left = ST.K.ends - Date.now();
    const el = document.getElementById('k-clock');
    if (left <= 0) { ST.K.timeup = true; kGrade(); return; }
    if (el) { const m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60; el.textContent = `${m}:${String(s).padStart(2, '0')}`; el.classList.toggle('warn', left < 120000); }
  }, 1000);
}
function kGrade() {
  clearInterval(kTimer); kTimer = null;
  const ex = exById(ST.K.id), c = compile(ex), V = ST.K.vals, res = { lines: {}, vlines: {}, pts: 0 };
  const iu = userFormula(ex, V.inv || '', 'B');
  let Igrade = c.inv;
  if (iu.ast) { res.invR = checkInv(ex, iu.ast); if (res.invR.ok) { Igrade = iu.ast; res.invOK = true; res.pts += 2; } }
  else res.invErr = iu;
  const A = annotate(ex, Igrade), b = kBlankLines(ex);
  b.aIdx.forEach(i => {
    const u = userFormula(ex, V['a' + i] || '', 'B');
    const ok = !!u.ast && equiv(ex, u.ast, A[i].f).ok;
    res.lines[i] = { ok, exp: A[i].s, err: u.err && (V['a' + i] || '').trim() ? u : null };
    if (ok) res.pts++;
  });
  const vu = userFormula(ex, V.var || '', 'N');
  let Vgrade = c.variant;
  if (vu.ast) { res.varR = checkVariant(ex, vu.ast, Igrade); if (res.varR.ok) { Vgrade = vu.ast; res.varOK = true; res.pts++; } }
  else res.varErr = vu;
  const VL = annotateVariant(ex, Vgrade, Igrade), ax = auxEx(ex);
  b.vIdx.forEach(i => {
    const u = userFormula(ax, V['v' + i] || '', 'B');
    const ok = !!u.ast && equiv(ax, u.ast, VL[i].f).ok;
    res.vlines[i] = { ok, exp: VL[i].s, err: u.err && (V['v' + i] || '').trim() ? u : null };
    if (ok) res.pts++;
  });
  res.total = kTotal(ex);
  ST.K.res = res; ST.K.phase = 'done';
  renderExam(); window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
  snapshot();
}
function kInputLine(key, ind, done, r) {
  const v = ST.K.vals[key] ?? '';
  const mark = done ? `<span class="nt kmark ${r.ok ? 'yes' : 'no'}">${r.ok ? '✓ 1' : '✗ 0'}</span>` : '';
  const inp = `<div class="ln a" style="--ind:${ind}"><span class="tx">⟨</span><input class="fx" data-k="${key}" value="${esc(v)}" placeholder="${esc(t('pha'))}" autocomplete="off" spellcheck="false" aria-label="${esc(t('pha'))}" ${done ? 'disabled' : ''}><span class="tx">⟩</span>${mark}</div>`;
  const exp = done && !r.ok ? `<div class="ln kexp" style="--ind:${ind}"><span class="tx">${t('k_expected')} ⟨${esc(r.exp)}⟩${r.err ? ' · ' + errMsg(r.err) : ''}</span></div>` : '';
  return inp + exp;
}
function renderExam() {
  const box = document.getElementById('exam'), K = ST.K;
  if (K.phase === 'start') {
    const pool = POOL();
    const opt = e => `<option value="${e.id}" ${K.pick === e.id ? 'selected' : ''}>${esc(L(e.title))} (${kTotal(e)} ${t('k_points')}, ${EXAM.includes(e) ? t('k_examonly') : t('k_practice')})</option>`;
    box.innerHTML = `
      <div class="plan-h"><div class="kicker">${t('k_kicker')}</div><h1 id="exam-title">${t('k_title')}</h1><p class="prose muted">${t('k_intro')}</p></div>
      <div class="kstart">
        <label class="f" for="k-pick"><span>${t('k_pick')}</span><select id="k-pick"><option value="random" ${K.pick === 'random' ? 'selected' : ''}>${t('k_random')}</option>${pool.map(opt).join('')}</select></label>
        <label class="kcheck" for="k-timed"><input type="checkbox" id="k-timed" ${K.timed ? 'checked' : ''}> <span>${t('k_timer')}</span></label>
        <p class="small muted">${t('k_rules')}</p>
        <div class="row"><button class="btn primary" type="button" data-k-act="start">${t('k_start')}</button></div>
      </div>`;
    return;
  }
  const ex = exById(K.id), c = compile(ex), b = kBlankLines(ex), done = K.phase === 'done', R = K.res;
  const aux = auxName(ex);
  const partA = b.A.map((l, i) => {
    if (l.k === 'c') return lnHTML(l);
    if (i === 0 || i === b.A.length - 1) return lnHTML({ ...l, note: null });
    return kInputLine('a' + i, l.ind, done, done ? R.lines[i] : null);
  }).join('');
  const partB = [lnHTML({ k: 'c', s: `while (${ex.cond}) {`, ind: 0 }), ...b.V.map((l, i) => l.k === 'c' ? lnHTML(l) : kInputLine('v' + i, l.ind, done, done ? R.vlines[i] : null)), lnHTML({ k: 'c', s: '}', ind: 0 })].join('');
  const invMark = done ? `<span class="kmark ${R.invOK ? 'yes' : 'no'}">${R.invOK ? '✓ 2' : '✗ 0'}</span>` : '';
  const varMark = done ? `<span class="kmark ${R.varOK ? 'yes' : 'no'}">${R.varOK ? '✓ 1' : '✗ 0'}</span>` : '';
  let invFb = '', varFb = '';
  if (done) {
    if (R.invOK) invFb = `<div class="fb ok">${t('k_inv_used')}</div>`;
    else invFb = `<div class="fb bad"><span>${R.invErr && (K.vals.inv || '').trim() ? errMsg(R.invErr) + ' ' : ''}${t('k_inv_bad')}</span><span class="as">⟨${esc(pr(c.inv))}⟩</span></div>${R.invR ? checkHTML(R.invR, ex, false) : ''}`;
    if (!R.varOK) varFb = `<div class="fb bad"><span>${R.varErr && (K.vals.var || '').trim() ? errMsg(R.varErr) + ' ' : ''}${t('k_var_bad')}</span><span class="as">V = ${esc(pr(c.variant))}</span></div>${R.varR ? variantHTML(R.varR, ex) : ''}`;
  }
  const pct = done ? R.pts / R.total : 0;
  const head = done
    ? `<div class="kscore"><div class="big">${t('k_score', { p: R.pts, t: R.total })}</div><div class="bar"><span style="width:${Math.round(pct * 100)}%"></span></div><p>${K.timeup ? t('k_timeup') + ' ' : ''}${pct >= 0.8 ? t('k_g1') : pct >= 0.5 ? t('k_g2') : t('k_g3')}</p>
       <div class="row"><button class="btn primary" type="button" data-k-act="new">${t('k_new')}</button><button class="btn" type="button" data-k-act="retry">${t('k_retry')}</button></div></div>`
    : `<div class="kbar"><span class="badge">${kTotal(ex)} ${t('k_points')}</span>${K.ends ? `<span class="kclock"><span id="k-clock">20:00</span> ${t('k_left')}</span>` : ''}</div>`;
  box.innerHTML = `
    <div class="plan-h"><div class="kicker">${t('k_kicker')}</div><h1 id="exam-title">${esc(L(ex.title))}</h1></div>
    <div class="kpaper">
      ${head}
      <section class="kpart"><h2>${t('k_a')}</h2><p>${t('k_a_txt')}</p>${syntaxHTML(ex)}
        <div class="prog">${partA}</div>
        <div class="kinv"><span>${t('k_inv')}</span><span class="tx as">⟨</span><input class="fx" data-k="inv" value="${esc(K.vals.inv ?? '')}" placeholder="${esc(t('ph'))}" autocomplete="off" spellcheck="false" aria-label="${esc(t('k_inv'))}" ${done ? 'disabled' : ''}><span class="tx as">⟩</span>${invMark}</div>
        ${invFb}
      </section>
      <section class="kpart"><h2>${t('k_b')}</h2><p>${t('k_b_txt', { m: `<span class="mono">${aux}</span>` })}</p>
        <div class="inline-in"><span class="mono">V =</span><input data-k="var" value="${esc(K.vals.var ?? '')}" placeholder="${esc(t('phv'))}" autocomplete="off" spellcheck="false" aria-label="V" ${done ? 'disabled' : ''}>${varMark}</div>
        <div class="prog">${partB}</div>
        ${varFb}
      </section>
      ${done ? `<section class="kpart"><h2>${t('s_sol')}</h2>${linesHTML(annotate(ex))}${linesHTML(annotateVariant(ex))}</section>` : `<div class="row"><button class="btn primary" type="button" data-k-act="submit">${t('k_submit')}</button></div>`}
    </div>`;
  if (!done && K.ends) { const left = Math.max(0, K.ends - Date.now()), m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60; const el = document.getElementById('k-clock'); if (el) el.textContent = `${m}:${String(s).padStart(2, '0')}`; }
}
function handleExam(e) {
  const b = e.target.closest('[data-k-act]'); if (!b) return;
  const act = b.dataset.kAct;
  if (act === 'start') kStart();
  else if (act === 'submit') kGrade();
  else if (act === 'new') { clearInterval(kTimer); ST.K.phase = 'start'; ST.K.res = null; renderExam(); window.scrollTo(0, 0); }
  else if (act === 'retry') { ST.K.pick = ST.K.id; kStart(); window.scrollTo(0, 0); }
  snapshot();
}

/* ---- lesson widgets ---- */
function renderBW() {
  const out = document.getElementById('bw-out');
  const x = document.getElementById('bw-var').value.trim();
  const tsrc = document.getElementById('bw-expr').value, psrc = document.getElementById('bw-post').value;
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(x)) { out.innerHTML = `<p class="err">${t('bw_need')}</p>`; return; }
  let tA, pA;
  try { tA = parse(tsrc); need(tA, 'N'); } catch (e) { out.innerHTML = `<p class="err">t: ${errMsg({ err: e.code, detail: e.detail })}</p>`; return; }
  try { pA = parse(psrc); need(pA, 'B'); } catch (e) { out.innerHTML = `<p class="err">φ: ${errMsg({ err: e.code, detail: e.detail })}</p>`; return; }
  out.innerHTML = linesHTML([{ k: 'a', s: pr(sub(pA, x, tA)), ind: 0, note: 'asg' }, { k: 'c', s: `${x} = ${tsrc.trim()};`, ind: 0 }, { k: 'a', s: pr(pA), ind: 0 }]);
}
function renderTracer() {
  const ex = exById('g2'), c = compile(ex);
  const rows = trace(ex, { n: ST.tr.n });
  document.getElementById('tr-nv').textContent = ST.tr.n;
  document.getElementById('tr-prog').innerHTML = [
    lnHTML({ k: 'a', s: pr(c.pre), note: 'pre' }), lnHTML({ k: 'c', s: 'i = 0; s = 0;' }),
    lnHTML({ k: 'c', s: `while (${ex.cond}) {   // I = ⟨${pr(c.inv)}⟩` }),
    ...codeLines(c.body, 1).map(l => lnHTML(l)), lnHTML({ k: 'c', s: '}' }), lnHTML({ k: 'a', s: pr(c.post) })].join('');
  const th = `<tr><th>${t('round')}</th><th>i</th><th>s</th><th>B: i &lt; n</th><th>i ≤ n</th><th>2 · s</th><th>i · (i + 1)</th><th>I</th></tr>`;
  const tb = rows.map((r, k) => {
    const I = ev(c.inv, { ...r.s });
    return `<tr class="${k === ST.tr.hl ? 'hl' : ''}"><td>${k === 0 ? t('start') : k}</td><td>${r.s.i}</td><td>${r.s.s}</td><td><span class="${r.b ? 'yes' : 'no'}">${fmtN(r.b)}</span></td><td>${fmtN(r.s.i <= r.s.n)}</td><td>${2 * r.s.s}</td><td>${r.s.i * (r.s.i + 1)}</td><td><span class="${I ? 'yes' : 'no'}">${I ? '✓' : '✗'}</span></td></tr>`;
  }).join('');
  document.getElementById('tr-table').innerHTML = `<table class="vt">${th}${tb}</table>`;
}

/* ---- view routing & language ---- */
const VIEWS = ['plan', 'prog', 'java', 'haskell', 'prolog', 'hoare', 'practice', 'exam', 'exam-java', 'exam-haskell', 'exam-prolog', 'exam-hoare'];
const PROG_VIEWS = VIEWS.filter(v => v !== 'plan');
const TOP_OF = { java: 'prog', haskell: 'prog', prolog: 'prog', hoare: 'prog', 'exam-java': 'exam', 'exam-haskell': 'exam', 'exam-prolog': 'exam', 'exam-hoare': 'exam' };
const SUB_OF = { 'exam-java': 'exam', 'exam-haskell': 'exam', 'exam-prolog': 'exam', 'exam-hoare': 'exam' };
const TITLES = { plan: 'Hoare Lab', prog: 'Programmierung · Hoare Lab', java: 'Java · Hoare Lab', haskell: 'Haskell · Hoare Lab', prolog: 'Prolog · Hoare Lab', hoare: 'Hoare-Kalkül · Hoare Lab', practice: 'Übungen · Hoare Lab', exam: 'Klausur · Hoare Lab', 'exam-java': 'Klausur Java · Hoare Lab', 'exam-haskell': 'Klausur Haskell · Hoare Lab', 'exam-prolog': 'Klausur Prolog · Hoare Lab', 'exam-hoare': 'Klausur Hoare-Kalkül · Hoare Lab' };
function showView(v, scroll) {
  if (!VIEWS.includes(v)) v = 'plan';
  ST.view = v;
  VIEWS.forEach(n => document.getElementById('view-' + n).classList.toggle('on', n === v));
  document.body.dataset.group = PROG_VIEWS.includes(v) ? 'prog' : 'none';
  const top = TOP_OF[v] || v;
  document.querySelectorAll('nav.views a').forEach(a => { if (a.dataset.view === top) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  const sub = SUB_OF[v] || v;
  document.querySelectorAll('nav.subnav a').forEach(a => { if (a.dataset.view === sub) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
  try { document.title = TITLES[v] || 'Hoare Lab'; } catch (e) {}
  if (v === 'practice') renderPractice();
  if (v === 'exam-hoare') { renderExam(); kArmTimer(); }
  if (v.startsWith('exam-') && LX[v.slice(5)]) renderLX(v.slice(5));
  if (scroll) window.scrollTo(0, 0);
}
function setLang(l) {
  lang = l;
  document.body.dataset.lang = l; document.documentElement.lang = l;
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
  try { localStorage.setItem('hoarelab-lang', l); } catch (e) {}
  renderBW(); renderTracer();
  if (ST.view === 'practice') renderPractice();
  if (ST.view === 'exam-hoare') renderExam();
  if (ST.view.startsWith('exam-') && LX[ST.view.slice(5)]) renderLX(ST.view.slice(5));
  snapshot();
}
function snapshot() { try { window.claude?.hot?.snapshot?.(() => ({ view: ST.view, ex: ST.ex, P: ST.P, tr: ST.tr, K: ST.K, LX: ST.LX })); } catch (e) {} }

function start(data) {
  if (data && data.P) { ST.P = data.P; ST.ex = data.ex || ST.ex; if (data.tr) ST.tr = data.tr; if (data.K) ST.K = { ...ST.K, ...data.K }; if (data.LX) ST.LX = data.LX; }
  document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  document.getElementById('exlist').addEventListener('click', e => { const b = e.target.closest('[data-ex]'); if (!b) return; ST.ex = b.dataset.ex; renderPractice(); snapshot(); if (innerWidth < 900) document.getElementById('ws').scrollIntoView({ block: 'start' }); });
  const ws = document.getElementById('ws');
  ws.addEventListener('click', handleWS);
  ws.addEventListener('input', e => { const i = e.target.closest('[data-in]'); if (i) prog(ST.ex).val[i.dataset.in] = i.value; });
  ws.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return; const i = e.target.closest('[data-in]'); if (!i) return;
    e.preventDefault(); const btn = document.querySelector('.step.open [data-act="check"], .step.open [data-act="checkinv"], .step.open [data-act="checkvar"]'); if (btn) btn.click();
  });
  const ek = document.getElementById('exam');
  ek.addEventListener('click', handleExam);
  ek.addEventListener('input', e => { const i = e.target.closest('[data-k]'); if (i) ST.K.vals[i.dataset.k] = i.value; });
  ek.addEventListener('change', e => { if (e.target.id === 'k-pick') ST.K.pick = e.target.value; if (e.target.id === 'k-timed') ST.K.timed = e.target.checked; });
  ek.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return; const i = e.target.closest('input[data-k]'); if (!i) return;
    e.preventDefault(); const all = [...ek.querySelectorAll('input[data-k]:not([disabled])')]; const n = all[all.indexOf(i) + 1]; if (n) n.focus();
  });
  ['lx-java', 'lx-haskell', 'lx-prolog'].forEach(id => { const el = document.getElementById(id); el.addEventListener('click', handleLX); el.addEventListener('input', handleLXInput); el.addEventListener('change', handleLXInput); });
  document.querySelectorAll('[data-scroll]').forEach(b => b.addEventListener('click', () => { const el = document.getElementById(b.dataset.scroll); if (el) el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth' }); }));
  ['bw-var', 'bw-expr', 'bw-post'].forEach(id => document.getElementById(id).addEventListener('input', renderBW));
  document.getElementById('tr-n').value = ST.tr.n;
  document.getElementById('tr-n').addEventListener('input', e => { ST.tr.n = +e.target.value; ST.tr.hl = -1; renderTracer(); });
  document.getElementById('tr-step').addEventListener('click', () => { const n = trace(exById('g2'), { n: ST.tr.n }).length; ST.tr.hl = (ST.tr.hl + 1) % n; renderTracer(); });
  document.getElementById('tr-reset').addEventListener('click', () => { ST.tr.hl = 0; renderTracer(); });
  window.addEventListener('hashchange', () => showView(location.hash.slice(1), true));
  setLang(lang);
  showView(location.hash.slice(1) || (data && data.view) || 'plan', false);
}
