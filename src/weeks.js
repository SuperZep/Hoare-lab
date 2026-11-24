/* ================= Wochenplan + Weiterlernen ================= */
/* Lecture period WS 2026/27 (RWTH): 12.10.2026 – 05.02.2027, Christmas break 23.12.2026 – 05.01.2027.
   The week-by-week order is an orientation plan based on the chapter order of the lecture, not an official schedule. */
const WT = {
  de: {
    kicker: 'Programmierung · WS 2026/27', title: 'Semester-Wochenplan',
    lede: 'Woche für Woche: was gerade in der Vorlesung dran ist, was du hier im Hoare Lab dazu übst und welche Seite im Netz dich weiterbringt.',
    disclaimer: 'Orientierungsplan: Die Reihenfolge folgt den Kapiteln der Vorlesung, das genaue Tempo legt die Vorlesung fest. Stand 24. November: Die Vorlesung ist bereits in Woche 9. Der Plan ist daran angepasst: Die ersten acht Wochen sind zusammengerückt, am Ende bleiben zwei Wochen für Wiederholung. Verbindlich sind die Ankündigungen im Moodle-Kurs und die wöchentlichen Übungsblätter.',
    week: 'Woche {n}', now: 'diese Woche', done: 'erledigt', mark: 'Als erledigt markieren', lab: 'Im Hoare Lab', ext: 'Weiterlernen', daily: 'Täglich-Schwerpunkt',
    progress: '{k} von {n} Wochen erledigt', before: 'Das Semester beginnt am 12. Oktober 2026.', after: 'Die Vorlesungszeit ist vorbei: Jetzt zählt die Klausurvorbereitung.',
    jump: 'Zur aktuellen Woche', thisweek: 'Diese Woche in Programmierung', open_plan: 'Zum Wochenplan →', break: 'Weihnachtspause', exam: 'Klausurphase',
    res_kicker: 'Programmierung · Ergänzungen', res_title: 'Weiterlernen',
    res_lede: 'Kostenlose Seiten, mit denen du neben den Übungsblättern trainieren kannst. Zu jeder steht, wofür sie sich eignet und zu welchem Kapitel der Vorlesung sie passt.',
    res_note: 'Alle Angebote sind kostenlos nutzbar, die meisten auf Englisch. Sie sind keine offiziellen Materialien der RWTH; maßgeblich bleiben Vorlesung, Moodle und Übungsblätter.',
    close: 'Schließen', cal_h: 'Semester auf einen Blick', list_h: 'Woche für Woche im Detail', kw: 'KW', ics: 'In den Kalender übernehmen (.ics)', ics_note: 'Für Google Kalender, Apple Kalender oder Outlook: Datei herunterladen und dort importieren.',
    leg_java: 'Java', leg_hoare: 'Hoare-Kalkül', leg_haskell: 'Haskell', leg_prolog: 'Prolog', leg_pause: 'vorlesungsfrei', leg_exam: 'Klausur', leg_rev: 'Wiederholung', rev: 'Wiederholung',
    m_start: 'Vorlesungsbeginn', m_end: 'Vorlesungsende', m_resume: 'Vorlesungen wieder', today_l: 'heute', wd5: ['Mo', 'Di', 'Mi', 'Do', 'Fr'],
    ics_ext: 'Kalenderdatei auf der öffentlichen Seite ↗', ics_ext_note: 'In dieser Vorschau sind Kalender-Downloads gesperrt. Auf der öffentlichen Seite funktioniert der Knopf „In den Kalender übernehmen“; die Datei dann in Google Kalender, Apple Kalender oder Outlook importieren.',
    ics_desc: 'Orientierungsplan aus dem Hoare Lab (keine offizielle Zeitplanung der RWTH). Verbindlich sind Moodle und die Übungsblätter.',
    fits: 'Passt zu', lang_en: 'Englisch', free: 'kostenlos', open: 'Öffnen ↗', how: 'So nutzt du es', used_in: 'Im Wochenplan: {w}'
  },
  en: {
    kicker: 'Programmierung · WS 2026/27', title: 'Semester week by week',
    lede: 'Week by week: what the lecture is covering, what you can practise here in Hoare Lab, and which site on the web takes you further.',
    disclaimer: 'Orientation plan: the order follows the chapters of the lecture; the lecture sets the actual pace. As of 24 November the lecture is already in week 9. The plan has been adjusted: the first eight weeks are compressed, and two weeks for review remain at the end. The announcements in the Moodle course and the weekly exercise sheets are what counts.',
    week: 'Week {n}', now: 'this week', done: 'done', mark: 'Mark as done', lab: 'In Hoare Lab', ext: 'Learn more', daily: 'Daily focus',
    progress: '{k} of {n} weeks done', before: 'The semester starts on 12 October 2026.', after: 'The lecture period is over: now it is all about exam preparation.',
    jump: 'Go to the current week', thisweek: 'This week in Programmierung', open_plan: 'Open the week plan →', break: 'Christmas break', exam: 'Exam period',
    res_kicker: 'Programmierung · extras', res_title: 'Learn more',
    res_lede: 'Free sites to train with alongside the exercise sheets. For each one you see what it is good for and which chapter of the lecture it fits.',
    res_note: 'All of these are free to use, most of them in English. They are not official RWTH material; the lecture, Moodle and the exercise sheets remain what counts.',
    close: 'Close', cal_h: 'The semester at a glance', list_h: 'Week by week in detail', kw: 'CW', ics: 'Add to your calendar (.ics)', ics_note: 'For Google Calendar, Apple Calendar or Outlook: download the file and import it there.',
    leg_java: 'Java', leg_hoare: 'Hoare logic', leg_haskell: 'Haskell', leg_prolog: 'Prolog', leg_pause: 'no lectures', leg_exam: 'Exam', leg_rev: 'Review', rev: 'Review',
    m_start: 'Lectures start', m_end: 'Lectures end', m_resume: 'Lectures resume', today_l: 'today', wd5: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
    ics_ext: 'Calendar file on the public site ↗', ics_ext_note: 'Calendar downloads are blocked in this preview. On the public site the “Add to your calendar” button works; then import the file into Google Calendar, Apple Calendar or Outlook.',
    ics_desc: 'Orientation plan from Hoare Lab (not an official RWTH schedule). Moodle and the exercise sheets are what counts.',
    fits: 'Fits', lang_en: 'English', free: 'free', open: 'Open ↗', how: 'How to use it', used_in: 'In the week plan: {w}'
  }
};
const wt = (k, rep) => { let s = WT[lang][k] ?? WT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };

/* external resources */
const RES = {
  cb: { name: 'CodingBat', by: 'Nick Parlante, Stanford', url: 'https://codingbat.com/java', lang: 'java',
        what: { de: 'Hunderte kurze Java-Aufgaben: eine Methode schreiben, sofort testen. Ideal, um Syntax und Schleifen in die Finger zu bekommen.', en: 'Hundreds of short Java problems: write one method, test it instantly. Ideal for getting syntax and loops into your fingers.' },
        how: { de: 'Pro Woche den passenden Abschnitt (z. B. Logic-1, Array-1) durcharbeiten, bis alle Haken grün sind.', en: 'Each week, work through the matching section (e.g. Logic-1, Array-1) until every check is green.' }, fits: 'II.1 · II.2 · II.3' },
  exj: { name: 'Exercism · Java', by: 'Exercism', url: 'https://exercism.org/tracks/java', lang: 'java',
        what: { de: 'Größere Übungen mit automatischen Tests und freiwilligem Feedback von menschlichen Mentor:innen.', en: 'Larger exercises with automatic tests and optional feedback from human mentors.' },
        how: { de: 'Gut für Klassen, Objekte und Vererbung, wenn CodingBat zu klein wird.', en: 'Good for classes, objects and inheritance once CodingBat feels too small.' }, fits: 'II.2 · II.4' },
  dj: { name: 'Dev.java · Learn', by: 'Oracle', url: 'https://dev.java/learn/', lang: 'java',
        what: { de: 'Die offiziellen Java-Tutorials, vom ersten Programm bis zu Klassen, Interfaces und Collections.', en: 'The official Java tutorials, from the first program to classes, interfaces and collections.' },
        how: { de: 'Zum Nachschlagen, wenn ein Konzept aus der Vorlesung unklar bleibt.', en: 'For looking things up when a concept from the lecture stays unclear.' }, fits: 'II.1 – II.4' },
  ptb: { name: 'Proof Tree Builder', by: 'Princeton University', url: 'https://proof-tree-builder.github.io/', lang: 'hoare',
        what: { de: 'Beweisassistent im Browser für Hoare-Logik: Regeln werden Schritt für Schritt angewendet.', en: 'In-browser proof assistant for Hoare logic: rules are applied step by step.' },
        how: { de: 'Achtung: Beweisbaum-Notation statt der Zusicherungen untereinander wie an der RWTH. Gut zum Verständnis der Regeln, nicht als Klausurformat.', en: 'Note: proof-tree notation instead of the assertions-between-lines style used at RWTH. Good for understanding the rules, not as the exam format.' }, fits: 'II.1.4' },
  mooc: { name: 'Haskell MOOC', by: 'University of Helsinki', url: 'https://haskell.mooc.fi/', lang: 'haskell',
        what: { de: 'Kompletter Haskell-Kurs mit Lektionen und automatisch geprüften Übungen, Teil 1 für den Einstieg.', en: 'A complete Haskell course with lectures and automatically checked exercises; part 1 is the introduction.' },
        how: { de: 'Teil 1 reicht für die Vorlesung. Lektion 1–5 decken Ausdrücke, Muster, Listen, Typklassen und data-Typen ab.', en: 'Part 1 is enough for the lecture. Lectures 1–5 cover expressions, patterns, lists, type classes and data types.' }, fits: 'III' },
  exh: { name: 'Exercism · Haskell', by: 'Exercism', url: 'https://exercism.org/tracks/haskell', lang: 'haskell',
        what: { de: 'Über hundert Haskell-Übungen mit Tests und Mentoring.', en: 'Over a hundred Haskell exercises with tests and mentoring.' },
        how: { de: 'Nach den ersten MOOC-Lektionen, um Rekursion und Funktionen höherer Ordnung zu üben.', en: 'After the first MOOC lectures, to practise recursion and higher-order functions.' }, fits: 'III' },
  lyah: { name: 'Learn You a Haskell', by: 'Miran Lipovača, Community-Fork', url: 'https://learnyouahaskell.github.io/', lang: 'haskell',
        what: { de: 'Locker geschriebenes Einführungsbuch, frei online, in einer aktualisierten Fassung.', en: 'A light-hearted introductory book, free online, in an updated edition.' },
        how: { de: 'Zum Lesen nebenbei; die Kapitel zu Typen und Typklassen sind besonders hilfreich.', en: 'For reading on the side; the chapters on types and type classes are especially helpful.' }, fits: 'III' },
  play: { name: 'Haskell Playground', by: 'haskell.org', url: 'https://play.haskell.org/', lang: 'haskell',
        what: { de: 'Haskell im Browser ausführen, ohne etwas zu installieren.', en: 'Run Haskell in the browser without installing anything.' },
        how: { de: 'Ausdrücke aus der Vorlesung ausprobieren und mit :: den Typ prüfen.', en: 'Try out expressions from the lecture and check their types with ::.' }, fits: 'III' },
  lpn: { name: 'Learn Prolog Now!', by: 'Blackburn, Bos, Striegnitz', url: 'https://lpn.swi-prolog.org/lpnpage.php?pageid=online', lang: 'prolog',
        what: { de: 'Der Klassiker zum Einstieg in Prolog; jedes Beispiel lässt sich direkt im Browser ausführen.', en: 'The classic introduction to Prolog; every example runs directly in the browser.' },
        how: { de: 'Kapitel 1–4 (Fakten, Unifikation, Rekursion, Listen) passen genau zur Vorlesung, Kapitel 5 zur Arithmetik.', en: 'Chapters 1–4 (facts, unification, recursion, lists) match the lecture exactly, chapter 5 covers arithmetic.' }, fits: 'IV' },
  swish: { name: 'SWISH', by: 'SWI-Prolog', url: 'https://swish.swi-prolog.org/', lang: 'prolog',
        what: { de: 'SWI-Prolog im Browser, mit Notebooks zum Speichern und Teilen.', en: 'SWI-Prolog in the browser, with notebooks to save and share.' },
        how: { de: 'Für eigene Programme, die größer sind als die Spielwiese hier im Hoare Lab.', en: 'For your own programs that are bigger than the playground here in Hoare Lab.' }, fits: 'IV' },
  exp: { name: 'Exercism · Prolog', by: 'Exercism', url: 'https://exercism.org/tracks/prolog', lang: 'prolog',
        what: { de: 'Über hundert Prolog-Übungen mit automatischen Tests.', en: 'Over a hundred Prolog exercises with automatic tests.' },
        how: { de: 'Ab der zweiten Prolog-Woche, wenn Rekursion und Listen sitzen.', en: 'From the second Prolog week, once recursion and lists are in place.' }, fits: 'IV' }
};
const RES_GROUPS = [['java', 'Java'], ['hoare', { de: 'Hoare-Kalkül', en: 'Hoare logic' }], ['haskell', 'Haskell'], ['prolog', 'Prolog']];

/* weeks: d = Monday (ISO), lab = [href, label], ext = [resKey, detail?, url?] */
const WEEKS = [
  { n: 1, k: 'java', s: { de: 'Einführung, erste Programme', en: 'Intro, first programs' }, d: '2026-10-12', ch: 'I · II.1.1', t: { de: 'Einführung, erste Java-Programme', en: 'Introduction, first Java programs' },
    x: { de: 'Was ist ein Programm, wie übersetzt und startet man es? Variablen, Ausgabe, die ersten Programme.', en: 'What is a program, how is it compiled and run? Variables, output, the first programs.' },
    lab: [['#prog', { de: 'Überblick Programmierung', en: 'Programmierung overview' }], ['#java', { de: 'Java-Seite', en: 'Java page' }]], ext: [['cb', 'Warmup-1', 'https://codingbat.com/java/Warmup-1'], ['dj']], daily: 'java' },
  { n: 2, k: 'java', s: { de: 'Datentypen, Kontrollstrukturen', en: 'Data types, control flow' }, d: '2026-10-19', ch: 'II.1.2 · II.1.3', t: { de: 'Datentypen und Kontrollstrukturen', en: 'Data types and control structures' },
    x: { de: 'int, double, boolean, char; if, while, for. Ganzzahldivision und Modulo sind klassische Fallen.', en: 'int, double, boolean, char; if, while, for. Integer division and modulo are classic traps.' },
    lab: [['#daily', { de: 'Täglich: Java verfolgen', en: 'Daily: tracing Java' }]], ext: [['cb', 'Logic-1', 'https://codingbat.com/java/Logic-1'], ['cb', 'Warmup-2', 'https://codingbat.com/java/Warmup-2']], daily: 'java' },
  { n: 3, k: 'hoare', s: { de: 'Hoare: Zuweisung', en: 'Hoare: assignment' }, d: '2026-10-22', ch: 'II.1.4', t: { de: 'Verifikation I: Hoare-Tripel und Zuweisung', en: 'Verification I: Hoare triples and assignment' },
    x: { de: 'Zusicherungen, Vor- und Nachbedingung, die Zuweisungsregel: von unten nach oben rechnen.', en: 'Assertions, pre- and postconditions, the assignment rule: working from the bottom up.' },
    lab: [['#hoare', { de: 'Lektion Hoare-Kalkül', en: 'Hoare logic lesson' }], ['#daily', { de: 'Täglich: schwächste Vorbedingung', en: 'Daily: weakest precondition' }]], ext: [['ptb']], daily: 'hwp' },
  { n: 4, k: 'hoare', s: { de: 'Hoare: Invarianten', en: 'Hoare: invariants' }, d: '2026-10-29', ch: 'II.1.4', t: { de: 'Verifikation II: Schleifen und Invarianten', en: 'Verification II: loops and invariants' },
    x: { de: 'Die while-Regel: Invariante am Anfang, Erhalt im Rumpf, Nachbedingung am Ende.', en: 'The while rule: invariant at the start, preserved by the body, postcondition at the end.' },
    lab: [['#practice', { de: 'Übungen mit gegebener Invariante', en: 'Exercises with a given invariant' }], ['#daily', { de: 'Täglich: Invariante prüfen', en: 'Daily: checking an invariant' }]], ext: [], daily: 'hinv' },
  { n: 5, k: 'hoare', s: { de: 'Invariante finden, Arrays', en: 'Finding invariants, arrays' }, d: '2026-11-05', ch: 'II.1.4 · II.1.5', t: { de: 'Invarianten finden, Terminierung, Arrays', en: 'Finding invariants, termination, arrays' },
    x: { de: 'Invariante selbst finden, Terminierung mit einer Variante zeigen; Reihungen (Arrays) in Java.', en: 'Finding the invariant yourself, proving termination with a variant; arrays in Java.' },
    lab: [['#practice', { de: 'Invariante finden, if/else, Arrays', en: 'Find the invariant, if/else, arrays' }], ['#exam-hoare', { de: 'Hoare-Klausur-Simulation', en: 'Hoare exam simulation' }]], ext: [['cb', 'Array-1', 'https://codingbat.com/java/Array-1']], daily: 'hinv' },
  { n: 6, k: 'java', s: { de: 'Objekte, Klassen', en: 'Objects, classes' }, d: '2026-11-12', ch: 'II.2', t: { de: 'Objekte, Klassen und Methoden', en: 'Objects, classes and methods' },
    x: { de: 'Klassen und Objekte, Methoden und Parameterübergabe: Werte gegen Referenzen.', en: 'Classes and objects, methods and parameter passing: values versus references.' },
    lab: [['#exam-java', { de: 'Java-Training: Parameter und Referenzen', en: 'Java training: parameters and references' }]], ext: [['exj'], ['cb', 'Array-2', 'https://codingbat.com/java/Array-2']], daily: 'java' },
  { n: 7, k: 'java', s: { de: 'Datenabstraktion, Strings', en: 'Abstraction, strings' }, d: '2026-11-16', ch: 'II.2', t: { de: 'Datenabstraktion, Konstruktoren, Strings', en: 'Data abstraction, constructors, strings' },
    x: { de: 'Kapselung mit private, Konstruktoren, vordefinierte Klassen wie String.', en: 'Encapsulation with private, constructors, predefined classes such as String.' },
    lab: [['#exam-java', { de: 'Java-Training: Ausgaben mit int und String', en: 'Java training: output with int and String' }]], ext: [['cb', 'String-1', 'https://codingbat.com/java/String-1']], daily: 'java' },
  { n: 8, k: 'java', s: { de: 'Rekursion, Listen', en: 'Recursion, lists' }, d: '2026-11-19', ch: 'II.3', t: { de: 'Rekursion und dynamische Datenstrukturen', en: 'Recursion and dynamic data structures' },
    x: { de: 'Rekursive Methoden, Aufrufe zählen; verkettete Listen.', en: 'Recursive methods, counting calls; linked lists.' },
    lab: [['#exam-java', { de: 'Java-Training: Rekursion, verkettete Liste', en: 'Java training: recursion, linked list' }]], ext: [['cb', 'Recursion-1', 'https://codingbat.com/java/Recursion-1']], daily: 'java' },
  { n: 9, k: 'java', s: { de: 'Vererbung, Interfaces', en: 'Inheritance, interfaces' }, d: '2026-11-23', ch: 'II.4', t: { de: 'Vererbung, abstrakte Klassen, Interfaces', en: 'Inheritance, abstract classes, interfaces' },
    x: { de: 'Unterklassen, dynamisches Binden, Überladen gegen Überschreiben, Interfaces und Pakete.', en: 'Subclasses, dynamic binding, overloading versus overriding, interfaces and packages.' },
    lab: [['#exam-java', { de: 'Java-Training: dynamisches Binden', en: 'Java training: dynamic binding' }]], ext: [['exj', { de: 'Konzepte', en: 'concepts' }, 'https://exercism.org/tracks/java/concepts'], ['dj', { de: 'Objektorientierung', en: 'object-oriented programming' }, 'https://dev.java/learn/language/oop/']], daily: 'java' },
  { n: 10, k: 'haskell', s: { de: 'Haskell: Grundlagen', en: 'Haskell basics' }, d: '2026-11-30', ch: 'III', t: { de: 'Haskell: Prinzipien, Deklarationen, Ausdrücke', en: 'Haskell: principles, declarations, expressions' },
    x: { de: 'Funktionen statt Anweisungen, GHCi, Ausdrücke und ihre Typen.', en: 'Functions instead of statements, GHCi, expressions and their types.' },
    lab: [['#haskell', { de: 'Haskell-Seite', en: 'Haskell page' }], ['#daily', { de: 'Täglich: Typ bestimmen', en: 'Daily: finding the type' }]], ext: [['mooc', { de: 'Lektion 1', en: 'Lecture 1' }, 'https://haskell.mooc.fi/part1#lecture-1-and-so-it-begins'], ['play']], daily: 'htype' },
  { n: 11, k: 'haskell', s: { de: 'Muster, Listen', en: 'Patterns, lists' }, d: '2026-12-07', ch: 'III', t: { de: 'Muster, Listen, Rekursion', en: 'Patterns, lists, recursion' },
    x: { de: 'Pattern Matching, Listen und rekursive Funktionen auf Listen.', en: 'Pattern matching, lists and recursive functions on lists.' },
    lab: [['#exam-haskell', { de: 'Haskell-Training: Pattern Matching', en: 'Haskell training: pattern matching' }]], ext: [['mooc', { de: 'Lektion 2–3', en: 'Lectures 2–3' }, 'https://haskell.mooc.fi/part1#lecture-2-either-you-die-a-hero']], daily: 'htype' },
  { n: 12, k: 'haskell', s: { de: 'Typen, Typklassen', en: 'Types, type classes' }, d: '2026-12-14', ch: 'III', t: { de: 'Typen und Datenstrukturen', en: 'Types and data structures' },
    x: { de: 'Polymorphie, Typklassen, eigene Datentypen mit data, Bäume.', en: 'Polymorphism, type classes, your own data types with data, trees.' },
    lab: [['#exam-haskell', { de: 'Haskell-Training: Typen bestimmen', en: 'Haskell training: determining types' }], ['#daily', { de: 'Täglich: Typ bestimmen', en: 'Daily: finding the type' }]], ext: [['mooc', { de: 'Lektion 4–5', en: 'Lectures 4–5' }, 'https://haskell.mooc.fi/part1#lecture-4-real-classy']], daily: 'htype' },
  { pause: true, k: 'pause', s: { de: 'Weihnachtspause', en: 'Christmas break' }, d: '2026-12-21', t: { de: 'Weihnachtspause (23.12. – 5.1.)', en: 'Christmas break (23 Dec – 5 Jan)' },
    x: { de: 'Keine Vorlesung. Ein guter Moment, den Java-Teil und den Hoare-Kalkül zu wiederholen, bevor es mit Haskell weitergeht.', en: 'No lectures. A good moment to review the Java part and Hoare logic before Haskell continues.' },
    lab: [['#exam-hoare', { de: 'Hoare-Klausur-Simulation', en: 'Hoare exam simulation' }], ['#exam-java', { de: 'Java-Training', en: 'Java training' }]], ext: [['lyah']] },
  { n: 13, k: 'haskell', s: { de: 'Höhere Ordnung, Lazy', en: 'Higher order, laziness' }, d: '2027-01-04', ch: 'III', t: { de: 'Funktionale Programmiertechniken', en: 'Functional programming techniques' },
    x: { de: 'Funktionen höherer Ordnung, map, filter, foldr und foldl, Lazy Evaluation. Vorlesung wieder ab 6. Januar.', en: 'Higher-order functions, map, filter, foldr and foldl, lazy evaluation. Lectures resume on 6 January.' },
    lab: [['#exam-haskell', { de: 'Haskell-Training: Auswerten und Lazy Evaluation', en: 'Haskell training: evaluation and lazy evaluation' }]], ext: [['exh'], ['play']], daily: 'htype' },
  { n: 14, k: 'prolog', s: { de: 'Prolog: Unifikation', en: 'Prolog: unification' }, d: '2027-01-11', ch: 'IV', t: { de: 'Prolog: Fakten, Regeln, Unifikation', en: 'Prolog: facts, rules, unification' },
    x: { de: 'Logisches Programmieren: Fakten, Regeln, Anfragen und die Unifikation mit Occurs-Check.', en: 'Logic programming: facts, rules, queries and unification with the occurs check.' },
    lab: [['#prolog', { de: 'Prolog-Seite', en: 'Prolog page' }], ['#exam-prolog', { de: 'Prolog-Training: Unifikation', en: 'Prolog training: unification' }], ['#daily', { de: 'Täglich: Unifikation', en: 'Daily: unification' }]], ext: [['lpn', { de: 'Kapitel 1–2', en: 'Chapters 1–2' }, 'https://lpn.swi-prolog.org/lpnpage.php?pagetype=html&pageid=lpn-htmlch1'], ['swish']], daily: 'unify' },
  { n: 15, k: 'prolog', s: { de: 'Resolution, Listen', en: 'Resolution, lists' }, d: '2027-01-18', ch: 'IV', t: { de: 'Resolution, Backtracking, Listen, Arithmetik', en: 'Resolution, backtracking, lists, arithmetic' },
    x: { de: 'Wie Prolog Antworten sucht, rekursive Prädikate auf Listen, Rechnen mit is.', en: 'How Prolog searches for answers, recursive predicates on lists, arithmetic with is.' },
    lab: [['#exam-prolog', { de: 'Prolog-Training: Anfragen und Prädikate', en: 'Prolog training: queries and predicates' }]], ext: [['lpn', { de: 'Kapitel 3–5', en: 'Chapters 3–5' }, 'https://lpn.swi-prolog.org/lpnpage.php?pagetype=html&pageid=lpn-htmlch3'], ['exp']], daily: 'unify' },
  { rev: true, k: 'rev', s: { de: 'Wiederholung, Probeklausuren', en: 'Review, practice exams' }, d: '2027-01-25', t: { de: 'Wiederholung und Probeklausuren', en: 'Review and practice exams' },
    x: { de: 'Die letzten zwei Vorlesungswochen bis zum 5. Februar: In der Vorlesung kommen meist Ergänzungen und Wiederholung. Schreib jetzt Probeklausuren mit Zeitlimit und arbeite gezielt an deinen schwächsten Themen.', en: 'The last two lecture weeks until 5 February: the lecture usually adds extras and revision. Now write timed practice exams and work specifically on your weakest topics.' },
    lab: [['#mock', { de: 'Probeklausur mit Zeitlimit', en: 'Timed practice exam' }], ['#progress', { de: 'Meine Schwächen', en: 'My weak spots' }], ['#print', { de: 'Probeklausur auf Papier', en: 'Practice exam on paper' }]], ext: [] },
  { exam: true, k: 'exam', s: { de: 'Klausurphase · Termin in RWTHonline', en: 'Exam period · date in RWTHonline' }, d: '2027-02-08', t: { de: 'Klausurvorbereitung', en: 'Exam preparation' },
    x: { de: 'Die Vorlesungszeit endet am 5. Februar. Die Klausur liegt meist im Februar; den Termin findest du in RWTHonline. Jetzt alle vier Klausur-Trainings unter Zeitdruck durchspielen.', en: 'The lecture period ends on 5 February. The exam is usually in February; you will find the date in RWTHonline. Now work through all four exam trainings under time pressure.' },
    lab: [['#exam', { de: 'Alle Klausur-Trainings', en: 'All exam trainings' }], ['#daily', { de: 'Täglich mit Bonusrunden', en: 'Daily with bonus rounds' }]], ext: [] }
];
const WKEY = 'hoarelab-weeks';
let WDONE = (() => { try { const a = JSON.parse(localStorage.getItem(WKEY)); return new Set(Array.isArray(a) ? a : []); } catch (e) { return new Set(); } })();
function wSave() { try { localStorage.setItem(WKEY, JSON.stringify([...WDONE])); } catch (e) {} }
const wL = o => (o && typeof o === 'object') ? (o[lang] ?? o.de) : o;
function wDate(iso, plus = 0) { const n = dNum(iso) + plus; const t = new Date(n * 864e5); return t.toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }); }
function wCurrent() {
  const t = dNum(dToday());
  let cur = -1;
  WEEKS.forEach((w, i) => { if (dNum(w.d) <= t) cur = i; });
  if (cur === WEEKS.length - 1 && t > dNum(WEEKS[cur].d) + 41) return { i: -2 };
  return { i: cur };
}
const wSym = w => w.pause ? '❄' : w.rev ? '↻' : '★';
const wHead = w => w.pause ? wt('break') : w.exam ? wt('exam') : w.rev ? wt('rev') : wt('week', { n: w.n });
function wLen(i) { // days from the start to the last weekday before the next entry (at most Friday of the same run)
  const a = dNum(WEEKS[i].d), nx = WEEKS[i + 1] ? dNum(WEEKS[i + 1].d) : a + 5;
  let e = Math.min(nx - 1, a + (WEEKS[i].rev ? 13 : 6)); while ([0, 6].includes(new Date(e * 864e5).getUTCDay())) e--;
  return e - a;
}
function wChip(href, label) { return `<a class="wk-lab" href="${href}">${esc(wL(label))}</a>`; }
function wExt(e) { const R = RES[e[0]]; const url = e[2] || R.url; return `<a class="wk-ext" href="${url}" target="_blank" rel="noopener"><b>${esc(R.name)}</b>${e[1] ? ` <span>${esc(wL(e[1]))}</span>` : ''} ↗</a>`; }
function wCard(w, i, cur) {
  const isNow = i === cur, done = w.n && WDONE.has(w.n);
  const kind = w.pause ? 'pause' : w.exam ? 'exam' : w.rev ? 'rev' : '';
  const head = wHead(w);
  const range = w.exam ? `${wDate(w.d)} –` : `${wDate(w.d)} – ${wDate(w.d, wLen(i))}`;
  return `<li class="wk ${kind} ${isNow ? 'now' : ''} ${done ? 'done' : ''}" id="wk-${i}">
    <div class="wk-rail" aria-hidden="true"><span class="wk-dot">${done ? '✓' : w.n || wSym(w)}</span></div>
    <div class="wk-body">
      <div class="wk-h"><span class="wk-n">${esc(head)}</span><span class="wk-date mono">${esc(range)}</span>${w.ch ? `<span class="wk-ch mono">${esc(w.ch)}</span>` : ''}${isNow ? `<span class="wk-now">${esc(wt('now'))}</span>` : ''}
        ${w.n ? `<label class="wk-check"><input type="checkbox" data-wk="${w.n}" ${done ? 'checked' : ''}> <span>${esc(wt('done'))}</span></label>` : ''}</div>
      <h3>${esc(wL(w.t))}</h3>
      <p>${esc(wL(w.x))}</p>
      <div class="wk-links">
        ${w.lab.length ? `<div class="wk-row"><span class="wk-lbl">${esc(wt('lab'))}</span>${w.lab.map(l => wChip(l[0], l[1])).join('')}</div>` : ''}
        ${w.ext.length ? `<div class="wk-row"><span class="wk-lbl">${esc(wt('ext'))}</span>${w.ext.map(wExt).join('')}</div>` : ''}
      </div>
    </div>
  </li>`;
}

/* ---------- compact semester calendar (Google-Calendar-like week rows) ---------- */
const CAL_FROM = '2026-10-12', CAL_TO = '2027-02-12', BREAK = ['2026-12-23', '2027-01-05'], LECT_END = '2027-02-05';
const CAL_MARK = { '2026-10-12': 'm_start', '2027-01-06': 'm_resume', '2027-02-05': 'm_end' };
function calEntry(day) { // index into WEEKS for a weekday (day number)
  const b0 = dNum(BREAK[0]), b1 = dNum(BREAK[1]);
  const pause = WEEKS.findIndex(w => w.pause), exam = WEEKS.findIndex(w => w.exam);
  if (day >= b0 && day <= b1) return pause;
  if (day > dNum(LECT_END)) return exam;
  let idx = -1; WEEKS.forEach((w, i) => { if (!w.pause && !w.exam && dNum(w.d) <= day) idx = i; });
  return idx;
}
function calRows() {
  const rows = [];
  for (let m = dNum(CAL_FROM); m <= dNum(CAL_TO); m += 7) {
    const days = [0, 1, 2, 3, 4].map(c => ({ n: m + c, e: calEntry(m + c) }));
    const segs = [];
    days.forEach((d, c) => { const last = segs[segs.length - 1]; if (last && last.e === d.e) last.to = c; else segs.push({ e: d.e, from: c, to: c }); });
    rows.push({ m, days, segs });
  }
  return rows;
}
function isoWeek(n) { const t = new Date(n * 864e5); const d = (t.getUTCDay() + 6) % 7; t.setUTCDate(t.getUTCDate() - d + 3); const y = t.getUTCFullYear(); const f = new Date(Date.UTC(y, 0, 4)); return 1 + Math.round(((t - f) / 864e5 - 3 + ((f.getUTCDay() + 6) % 7)) / 7); }
function calHTML(cur, mini) {
  const today = dNum(dToday()), loc = lang === 'de' ? 'de-DE' : 'en-GB';
  const mName = n => new Date(n * 864e5).toLocaleDateString(loc, { month: 'long', year: 'numeric', timeZone: 'UTC' });
  const table = rows => {
    let h = `<div class="cal" role="table" aria-label="${esc(wt('cal_h'))}"><div class="cal-row cal-head" role="row"><span class="cal-kw" role="columnheader">${esc(wt('kw'))}</span>${WT[lang].wd5.map(d => `<span role="columnheader">${d}</span>`).join('')}</div>`;
    let lastMonth = -1;
    for (const r of rows) {
      const mo = new Date(r.m * 864e5).getUTCMonth();
      if (mo !== lastMonth) { h += `<div class="cal-month" role="row"><span role="cell">${esc(mName(r.m))}</span></div>`; lastMonth = mo; }
      const isCur = today >= r.m && today < r.m + 7;
      h += `<div class="cal-row ${isCur ? 'cur' : ''}" role="row"><span class="cal-kw mono" role="rowheader">${isoWeek(r.m)}</span>`;
      r.days.forEach((d, c) => {
        const dt = new Date(d.n * 864e5), dd = dt.getUTCDate();
        const lbl = dd === 1 ? dt.toLocaleDateString(loc, { day: 'numeric', month: 'short', timeZone: 'UTC' }) : dd;
        const mk = CAL_MARK[dStr(d.n)];
        h += `<span class="cal-day ${d.n === today ? 'today' : ''}" style="grid-column:${c + 2}" role="cell"><i>${esc(lbl)}</i>${mk ? `<em title="${esc(wt(mk))}" aria-label="${esc(wt(mk))}"></em>` : ''}</span>`;
      });
      r.segs.forEach(sg => {
        if (sg.e < 0) return;
        const w = WEEKS[sg.e], done = w.n && WDONE.has(w.n);
        const head = w.n ? `W${w.n}` : wSym(w);
        h += `<button type="button" class="cal-ev k-${w.k} ${done ? 'done' : ''} ${sg.e === cur ? 'now' : ''}" style="grid-column:${sg.from + 2} / ${sg.to + 3}" data-wjump="${sg.e}" title="${esc((w.n ? wt('week', { n: w.n }) + ': ' : '') + wL(w.t))}"><b>${done ? '✓ ' : ''}${head}</b> <span>${esc(wL(w.s))}</span></button>`;
      });
      h += `</div>`;
    }
    return h + `</div>`;
  };
  const all = calRows(), cut = all.findIndex(r => r.m >= dNum('2026-12-01'));
  let html = `<div class="cal-split">${table(all.slice(0, cut))}${table(all.slice(cut))}</div>`;
  const leg = ['java', 'hoare', 'haskell', 'prolog', 'pause', 'rev', 'exam'].map(k => `<span class="cal-leg k-${k}"><i></i>${esc(wt('leg_' + k))}</span>`).join('');
  if (mini) return `<div class="cal-wrap mini">
    <div class="cal-top"><h2 id="cal-dlg-h">${esc(wt('cal_h'))}</h2>
      <div class="cal-top-a"><a class="btn" href="#weeks" data-dlg-go="1">${esc(wt('open_plan'))}</a><button type="button" class="btn ghost cal-x" data-dlg-close="1" aria-label="${esc(wt('close'))}">✕</button></div></div>
    <div class="cal-legend">${leg}</div>
    ${html}
  </div>`;
  return `<section class="cal-wrap" aria-labelledby="cal-h">
    <div class="cal-top"><h2 id="cal-h">${esc(wt('cal_h'))}</h2>${icsBlocked() ? `<a class="btn" href="${DSYNC_URL}#weeks" target="_blank" rel="noopener">⤓ ${esc(wt('ics_ext'))}</a>` : `<button type="button" class="btn" data-ics="1">⤓ ${esc(wt('ics'))}</button>`}</div>
    <div class="cal-legend">${leg}</div>
    <div class="cal-keys">${Object.entries(CAL_MARK).map(([d, k]) => `<span><em></em><b>${esc(wDate(d))}</b> ${esc(wt(k))}</span>`).join('')}</div>
    ${html}
    <p class="small muted">${esc(wt(icsBlocked() ? 'ics_ext_note' : 'ics_note'))}</p>
  </section>`;
}

/* ---------- .ics export ---------- */
/* inside the claude.ai artifact viewer .ics downloads are not allowed: link to the public site instead */
function icsBlocked() { try { return !!(window.claude && typeof window.claude.use === 'function') && location.hostname !== 'superzep.github.io'; } catch (e) { return false; } }
function icsEsc(t) { return String(t).replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
function icsFold(line) { // fold at 73 bytes (UTF-8 safe)
  const out = []; let cur = '', len = 0;
  for (const ch of line) { const b = new TextEncoder().encode(ch).length; if (len + b > 73) { out.push(cur); cur = ' ' + ch; len = 1 + b; } else { cur += ch; len += b; } }
  out.push(cur); return out.join('\r\n');
}
const icsDate = n => dStr(n).replace(/-/g, '');
function buildICS() {
  const ranges = {};
  for (let n = dNum(CAL_FROM); n <= dNum(CAL_TO); n++) {
    const wd = new Date(n * 864e5).getUTCDay(); if (wd === 0 || wd === 6) continue;
    const e = calEntry(n); if (e < 0) continue;
    const r = ranges[e] || (ranges[e] = { a: n, b: n }); r.a = Math.min(r.a, n); r.b = Math.max(r.b, n);
  }
  const pauseI = WEEKS.findIndex(w => w.pause); if (ranges[pauseI]) { ranges[pauseI] = { a: dNum(BREAK[0]), b: dNum(BREAK[1]) }; }
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');
  const L = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Hoare Lab//Wochenplan Programmierung WS 2026-27//' + lang.toUpperCase(), 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'X-WR-CALNAME:' + icsEsc('Programmierung WS 2026/27 · Hoare Lab'), 'X-WR-TIMEZONE:Europe/Berlin'];
  Object.entries(ranges).sort((x, y) => x[1].a - y[1].a).forEach(([i, r]) => {
    const w = WEEKS[i];
    const title = (w.n ? `Programmierung W${w.n}: ` : 'Programmierung: ') + wL(w.t);
    const lab = w.lab.map(l => '• ' + wL(l[1]) + ': ' + DSYNC_URL + l[0]).join('\n');
    const ext = w.ext.map(e => '• ' + RES[e[0]].name + (e[1] ? ' ' + wL(e[1]) : '') + ': ' + (e[2] || RES[e[0]].url)).join('\n');
    const desc = [wL(w.x), lab && (wt('lab') + ':\n' + lab), ext && (wt('ext') + ':\n' + ext), wt('ics_desc')].filter(Boolean).join('\n\n');
    L.push('BEGIN:VEVENT', `UID:hoarelab-ws2627-${w.n ? 'w' + w.n : w.pause ? 'pause' : w.rev ? 'rev' : 'exam'}@superzep.github.io`, 'DTSTAMP:' + stamp,
      'DTSTART;VALUE=DATE:' + icsDate(r.a), 'DTEND;VALUE=DATE:' + icsDate(r.b + 1),
      'SUMMARY:' + icsEsc(title), 'DESCRIPTION:' + icsEsc(desc), 'URL:' + DSYNC_URL + '#weeks', 'TRANSP:TRANSPARENT',
      'CATEGORIES:' + icsEsc(wt('leg_' + w.k)), 'END:VEVENT');
  });
  L.push('END:VCALENDAR');
  return L.map(icsFold).join('\r\n') + '\r\n';
}
function downloadICS() {
  const blob = new Blob([buildICS()], { type: 'text/calendar;charset=utf-8' });
  const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'programmierung-ws2026-27.ics';
  document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

function renderWeeks() {
  const root = document.getElementById('weeks'); if (!root) return;
  const { i: cur } = wCurrent(), teaching = WEEKS.filter(w => w.n).length, k = [...WDONE].filter(n => n <= teaching).length;
  const status = cur === -1 ? wt('before') : cur === -2 ? wt('after') : '';
  root.innerHTML = `<div class="wk-top">
      <div class="wk-prog"><div class="wk-prog-bar"><span style="width:${(k / teaching * 100).toFixed(1)}%"></span></div><span class="small">${esc(wt('progress', { k, n: teaching }))}</span></div>
      ${cur >= 0 ? `<button type="button" class="btn" data-wjump="${cur}">${esc(wt('jump'))}</button>` : ''}
    </div>
    ${status ? `<div class="fb info">${esc(status)}</div>` : ''}
    ${calHTML(cur)}
    <h2 class="wk-list-h">${esc(wt('list_h'))}</h2>
    <ol class="wk-list">${WEEKS.map((w, j) => wCard(w, j, cur)).join('')}</ol>`;
}
function renderThisWeek() {
  const el = document.getElementById('prog-thisweek'); if (!el) return;
  const { i } = wCurrent(); if (i < 0) { el.innerHTML = ''; return; }
  const w = WEEKS[i];
  el.innerHTML = `<a class="thisweek" href="#weeks">
    <span class="tw-k">${esc(wt('thisweek'))} · ${esc(wHead(w))}</span>
    <b>${esc(wL(w.t))}</b>
    <span class="tw-go">${esc(wt('open_plan'))}</span></a>`;
}
function renderResources() {
  const root = document.getElementById('resources'); if (!root) return;
  const usedIn = key => WEEKS.filter(w => w.ext.some(e => e[0] === key)).map(w => w.n ? String(w.n) : wSym(w));
  root.innerHTML = RES_GROUPS.map(([g, label]) => `<section class="res-g"><h2>${esc(wL(label))}</h2><div class="res-grid">${Object.entries(RES).filter(([, r]) => r.lang === g).map(([key, r]) => {
      const u = usedIn(key);
      return `<article class="res"><div class="res-h"><h3>${esc(r.name)}</h3><span class="res-by">${esc(r.by)}</span></div>
        <p>${esc(wL(r.what))}</p>
        <p class="res-how"><b>${esc(wt('how'))}:</b> ${esc(wL(r.how))}</p>
        <div class="res-f"><span class="res-tag">${esc(wt('fits'))} ${esc(r.fits)}</span><span class="res-tag">${esc(wt('free'))}</span><span class="res-tag">${esc(wt('lang_en'))}</span>${u.length ? `<span class="res-tag wk-ref">${esc(wt('used_in', { w: u.join(', ') }))}</span>` : ''}</div>
        <a class="btn primary res-go" href="${r.url}" target="_blank" rel="noopener">${esc(wt('open'))}</a></article>`;
    }).join('')}</div></section>`).join('') + `<p class="small muted res-note">${esc(wt('res_note'))}</p>`;
}
function initWeeks() {
  const root = document.getElementById('weeks'); if (!root) return;
  root.addEventListener('change', e => {
    const c = e.target.closest('[data-wk]'); if (!c) return;
    const n = +c.dataset.wk; if (c.checked) WDONE.add(n); else WDONE.delete(n); wSave(); renderWeeks();
    const el = document.querySelector(`#weeks [data-wk="${n}"]`); if (el) el.focus({ preventScroll: true });
  });
  root.addEventListener('click', e => {
    if (e.target.closest('[data-ics]')) { downloadICS(); return; }
    const b = e.target.closest('[data-wjump]'); if (!b) return;
    const el = document.getElementById('wk-' + b.dataset.wjump); if (el) el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' });
  });
}

/* ---------- header calendar popup ---------- */
function renderCalDlg() { const b = document.getElementById('cal-dlg-body'); if (b) b.innerHTML = calHTML(wCurrent().i, true); }
function openCalDlg() {
  const d = document.getElementById('cal-dlg'); if (!d) return;
  renderCalDlg();
  try { d.showModal(); } catch (e) { d.setAttribute('open', ''); }
  const cur = d.querySelector('.cal-ev.now') || d.querySelector('.cal-row.cur');
  if (cur) cur.scrollIntoView({ block: 'center' });
  const x = d.querySelector('.cal-x'); if (x) x.focus({ preventScroll: true });
}
function closeCalDlg() { const d = document.getElementById('cal-dlg'); if (d && d.open) { try { d.close(); } catch (e) { d.removeAttribute('open'); } } }
function calBtnLabel() { const b = document.getElementById('cal-btn'); if (b) b.setAttribute('aria-label', wt('cal_h')); }
function initCalDlg() {
  const btn = document.getElementById('cal-btn'), d = document.getElementById('cal-dlg'); if (!btn || !d) return;
  calBtnLabel();
  btn.addEventListener('click', openCalDlg);
  d.addEventListener('click', e => {
    if (e.target === d) { closeCalDlg(); return; }
    if (e.target.closest('[data-dlg-close]')) { closeCalDlg(); return; }
    if (e.target.closest('[data-dlg-go]')) { closeCalDlg(); return; }
    const ev = e.target.closest('[data-wjump]'); if (!ev) return;
    const i = ev.dataset.wjump; closeCalDlg();
    if (location.hash !== '#weeks') location.hash = '#weeks';
    setTimeout(() => { const el = document.getElementById('wk-' + i); if (el) el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'center' }); }, 60);
  });
  d.addEventListener('close', () => btn.focus({ preventScroll: true }));
}
