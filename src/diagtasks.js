/* ================= task-by-task diagnosis for the exam trainings =================
   TRAPS[taskId][field] = [[wrong answer(s), {de, en}], ...]
   field: line/field index (lines, nums, hval, pquery) or 'mc' (option index → message). */
const TRAPS = {
  j1: {
    0: [[['3.5', '3.0'], { de: 'Ganzzahldivision: 7 / 2 mit zwei int-Werten ergibt 3. Der Nachkommaanteil wird abgeschnitten, und das Ergebnis bleibt int (keine .0).', en: 'Integer division: 7 / 2 with two int values gives 3. The fractional part is cut off, and the result stays int (no .0).' }]],
    1: [[['3'], { de: '% ist der Rest, nicht der Quotient: 7 = 3 · 2 + 1, also 7 % 2 = 1.', en: '% is the remainder, not the quotient: 7 = 3 · 2 + 1, so 7 % 2 = 1.' }], [['3.5', '0.5'], { de: '% rechnet mit ganzen Zahlen: der Rest von 7 geteilt durch 2 ist 1.', en: '% works on integers: the remainder of 7 divided by 2 is 1.' }]],
    2: [[['3', '3.0'], { de: 'Der Cast bindet stärker als /: Zuerst wird a zu 7.0, dann 7.0 / 2 = 3.5. Nur (double)(a / b) ergäbe 3.0.', en: 'The cast binds tighter than /: first a becomes 7.0, then 7.0 / 2 = 3.5. Only (double)(a / b) would give 3.0.' }]],
    3: [[['9'], { de: 'String-Verkettung läuft von links: "" + a ist schon ein String, an den b angehängt wird: "7" + 2 = "72".', en: 'String concatenation goes left to right: "" + a is already a string, and b is appended to it: "7" + 2 = "72".' }]],
    4: [[['72'], { de: 'Von links ausgewertet: a + b sind zwei int-Werte, also zuerst 9. Erst danach wird mit "" ein String daraus.', en: 'Evaluated left to right: a + b are two int values, so 9 comes first. Only then does + "" turn it into a string.' }]]
  },
  j2: {
    0: [[['2'], { de: 'Call by value: x in f ist eine Kopie. Die Erhöhung bleibt in f, main sieht weiter 1.', en: 'Call by value: x in f is a copy. The increment stays inside f, main still sees 1.' }]],
    1: [[['10'], { de: 'Die Referenz wird kopiert, das Array nicht: a[0] = a[0] + 1 ändert das Array von main auf 11.', en: 'The reference is copied, not the array: a[0] = a[0] + 1 changes main’s array to 11.' }],
        [['101', '12'], { de: 'a = new int[] {100} ändert nur die lokale Kopie der Referenz. main zeigt weiter auf das alte Array mit 11.', en: 'a = new int[] {100} only changes the local copy of the reference. main still points to the old array, which holds 11.' }]]
  },
  j3: {
    0: [[['1'], { de: 'Dynamisches Binden: Entscheidend ist das Objekt (new B()), nicht der Variablentyp A. B.wert() liefert 5.', en: 'Dynamic binding: what counts is the object (new B()), not the variable type A. B.wert() returns 5.' }]],
    1: [[['2'], { de: 'Auch innerhalb von doppelt() wird wert() dynamisch gebunden: this ist ein B-Objekt, also 2 · 5 = 10.', en: 'Inside doppelt(), wert() is dynamically bound too: this is a B object, so 2 · 5 = 10.' }]],
    2: [[['10'], { de: 'y zeigt auf ein echtes A-Objekt: Dort gilt wert() = 1, also 2 · 1 = 2.', en: 'y points to a real A object: there wert() = 1, so 2 · 1 = 2.' }]]
  },
  j4: {
    0: [[['B/B'], { de: 'Überladen entscheidet der Compiler: x hat den statischen Typ A, und A kennt nur f(A). Zur Laufzeit läuft dann die überschreibende f(A) in B.', en: 'Overloading is decided by the compiler: x has the static type A, and A only knows f(A). At run time the overriding f(A) in B runs.' }],
        [['A/A'], { de: 'Überschreiben wird zur Laufzeit aufgelöst: x zeigt auf ein B-Objekt, also läuft B.f(A).', en: 'Overriding is resolved at run time: x points to a B object, so B.f(A) runs.' }]],
    1: [[['B/A', 'A/A'], { de: 'y und das Argument y haben beide den statischen Typ B: f(B) ist die genaueste passende Signatur.', en: 'y and the argument y both have static type B: f(B) is the most specific matching signature.' }]],
    2: [[['B/B'], { de: 'Das Argument x hat den statischen Typ A. f(B) passt dafür nicht; gewählt wird f(A), ausgeführt in B.', en: 'The argument x has static type A. f(B) does not match it; f(A) is chosen and executed in B.' }],
        [['A/A'], { de: 'Der Aufruf geht an y, und y ist ein B-Objekt: Die überschreibende f(A) in B läuft.', en: 'The call goes to y, and y is a B object: the overriding f(A) in B runs.' }]]
  },
  j5: {
    0: [[['8'], { de: 'Um eins verschoben: f(0) = 0, f(1) = 1, also f(7) = 13. Die 8 ist f(6).', en: 'Off by one: f(0) = 0, f(1) = 1, so f(7) = 13. 8 is f(6).' }], [['21'], { de: 'Um eins verschoben: 21 ist f(8). Beginne bei f(0) = 0 und f(1) = 1.', en: 'Off by one: 21 is f(8). Start with f(0) = 0 and f(1) = 1.' }]],
    1: [[['5'], { de: 'Gefragt ist die Zahl der Aufrufe, nicht der Wert f(5). Für die Aufrufe gilt A(n) = 1 + A(n − 1) + A(n − 2) mit A(0) = A(1) = 1.', en: 'The number of calls is asked for, not the value f(5). For the calls, A(n) = 1 + A(n − 1) + A(n − 2) with A(0) = A(1) = 1.' }],
        [['14'], { de: 'Den ersten Aufruf f(5) mitzählen: A(5) = 1 + A(4) + A(3) = 1 + 9 + 5 = 15.', en: 'Count the first call f(5) too: A(5) = 1 + A(4) + A(3) = 1 + 9 + 5 = 15.' }],
        [['9'], { de: '9 ist A(4). Für f(5) kommt noch eine Ebene dazu: A(5) = 1 + A(4) + A(3) = 15.', en: '9 is A(4). f(5) adds one more level: A(5) = 1 + A(4) + A(3) = 15.' }],
        [['8'], { de: 'Fibonacci-Zahl statt Aufrufzahl: Jeder Aufruf zählt, auch die Basisfälle f(1) und f(0).', en: 'Fibonacci number instead of call count: every call counts, including the base cases f(1) and f(0).' }]]
  },
  j6: {
    0: [[['24'], { de: 'Alle Werte summiert: Nur gerade Werte (e.wert % 2 == 0) werden addiert, die ungeraden übersprungen.', en: 'Summed all values: only even values (e.wert % 2 == 0) are added, the odd ones are skipped.' }],
        [['10'], { de: 'Ungerade statt gerade: % 2 == 0 trifft 4 und 10, nicht 3 und 7.', en: 'Odd instead of even: % 2 == 0 matches 4 and 10, not 3 and 7.' }],
        [['4'], { de: 'Die Rekursion geht nach dem ersten Treffer weiter: e.wert + g(e.next) läuft bis zum Ende der Liste.', en: 'The recursion continues after the first hit: e.wert + g(e.next) runs to the end of the list.' }]]
  },
  j7: {
    mc: { 0: { de: 'Ein Interface ist ein gültiger Variablentyp: Kreis implementiert Zeichenbar, also darf z auf einen Kreis zeigen.', en: 'An interface is a valid variable type: Kreis implements Zeichenbar, so z may point to a Kreis.' },
          2: { de: 'Der Cast wird übersetzt: Kreis ist Unterklasse von Form. Ein falscher Cast fiele erst zur Laufzeit auf (ClassCastException).', en: 'The cast compiles: Kreis is a subclass of Form. A wrong cast would only show up at run time (ClassCastException).' },
          3: { de: 'flaeche() ist in Form deklariert, wenn auch abstrakt. Über eine Form-Variable darf man sie aufrufen.', en: 'flaeche() is declared in Form, even if abstract. It may be called through a Form variable.' } }
  },
  h3: {
    0: [[['[1,2,3]'], { de: 'map (*2) verdoppelt jedes Element, bevor take 3 die ersten drei nimmt.', en: 'map (*2) doubles every element before take 3 takes the first three.' }], [['[0,2,4]'], { de: '[1..] beginnt bei 1, nicht bei 0.', en: '[1..] starts at 1, not at 0.' }]],
    1: [[['-6', '(-6)'], { de: 'Das wäre foldl. foldr klammert von rechts: 1 − (2 − (3 − 0)) = 2.', en: 'That would be foldl. foldr brackets from the right: 1 − (2 − (3 − 0)) = 2.' }], [['6'], { de: '(-) ist die Subtraktion: foldr (-) 0 [1,2,3] = 1 − (2 − (3 − 0)) = 2.', en: '(-) is subtraction: foldr (-) 0 [1,2,3] = 1 − (2 − (3 − 0)) = 2.' }], [['-4', '(-4)'], { de: 'foldr setzt den Startwert ganz rechts ein und klammert von rechts: 1 − (2 − (3 − 0)) = 2.', en: 'foldr puts the start value on the far right and brackets from the right: 1 − (2 − (3 − 0)) = 2.' }]],
    2: [[['2'], { de: 'Das wäre foldr. foldl klammert von links und beginnt mit dem Startwert: ((0 − 1) − 2) − 3 = −6.', en: 'That would be foldr. foldl brackets from the left and starts with the start value: ((0 − 1) − 2) − 3 = −6.' }], [['-4', '(-4)'], { de: 'Startwert vergessen: foldl beginnt mit 0 als linkem Argument, ((0 − 1) − 2) − 3 = −6.', en: 'Forgot the start value: foldl starts with 0 as the left argument, ((0 − 1) − 2) − 3 = −6.' }], [['6'], { de: '(-) ist die Subtraktion, nicht die Addition: ((0 − 1) − 2) − 3 = −6.', en: '(-) is subtraction, not addition: ((0 − 1) − 2) − 3 = −6.' }]],
    3: [[["[(1,'a'),(3,'a'),(1,'b'),(3,'b')]"], { de: 'Der erste Generator ist die äußere Schleife: Für jedes x laufen erst alle y durch.', en: 'The first generator is the outer loop: for each x all y run first.' }],
        [["[(1,'a'),(1,'b'),(2,'a'),(2,'b'),(3,'a'),(3,'b')]"], { de: 'Der Filter odd x fehlt: x = 2 fällt heraus.', en: 'The filter odd x is missing: x = 2 drops out.' }],
        [['[(1,a),(1,b),(3,a),(3,b)]'], { de: 'GHCi gibt Zeichen mit Hochkommas aus: (1,\'a\').', en: 'GHCi prints characters in single quotes: (1,\'a\').' }]]
  },
  h4: {
    0: [[['7'], { de: 'Das Muster x:y:ys entfernt zwei Elemente: y wird übersprungen, nicht abgezogen. f [10, 3, 4] = 10 − f [4] = 6.', en: 'The pattern x:y:ys removes two elements: y is skipped, not subtracted. f [10, 3, 4] = 10 − f [4] = 6.' }], [['11', '3'], { de: 'Nur x und die Rekursion über ys zählen: f [10, 3, 4] = 10 − f [4] = 10 − 4 = 6.', en: 'Only x and the recursion on ys count: f [10, 3, 4] = 10 − f [4] = 10 − 4 = 6.' }]],
    1: [[['-7'], { de: 'Die Rekursion klammert: x − f ys, also 1 − (3 − 5) = 3, nicht 1 − 3 − 5.', en: 'The recursion nests: x − f ys, so 1 − (3 − 5) = 3, not 1 − 3 − 5.' }], [['-3'], { de: 'f [5] passt auf die zweite Gleichung und liefert 5: 1 − (3 − 5) = 3.', en: 'f [5] matches the second equation and gives 5: 1 − (3 − 5) = 3.' }]]
  },
  h5: {
    mc: { 0: { de: 'length muss die ganze Liste durchlaufen, und [1..] ist unendlich.', en: 'length has to traverse the whole list, and [1..] is infinite.' },
          2: { de: 'takeWhile (> 0) hört erst beim ersten nicht positiven Element auf, und das gibt es in [1..] nicht.', en: 'takeWhile (> 0) only stops at the first non-positive element, and [1..] has none.' },
          3: { de: 'last braucht das Ende der Liste, und das gibt es bei [1..] nicht.', en: 'last needs the end of the list, which [1..] does not have.' } }
  },
  p2: {
    0: [[['lisa'], { de: 'Backtracking vergessen: Nach E = lisa sucht Prolog weiter und findet über Y = anna und die zweite elternteil-Klausel auch E = tom.', en: 'Forgot backtracking: after E = lisa Prolog keeps searching and finds E = tom via Y = anna and the second elternteil clause.' }],
        [['tom;lisa'], { de: 'Reihenfolge: Prolog probiert die Fakten von oben nach unten, also zuerst Y = peter (lisa), dann Y = anna (tom).', en: 'Order: Prolog tries the facts top to bottom, so first Y = peter (lisa), then Y = anna (tom).' }],
        [['peter;anna'], { de: 'Das sind die Kinder von hans. grossvater sucht die Enkel: vater(hans, Y), dann elternteil(Y, Z).', en: 'Those are hans’s children. grossvater looks for the grandchildren: vater(hans, Y), then elternteil(Y, Z).' }]],
    1: [[['hans'], { de: 'tom ist Kind von anna (über mutter), nicht von hans. hans ist sein Großvater.', en: 'tom is anna’s child (via mutter), not hans’s. hans is his grandfather.' }], [['false'], { de: 'Die zweite Klausel elternteil(X, Y) :- mutter(X, Y) liefert X = anna.', en: 'The second clause elternteil(X, Y) :- mutter(X, Y) gives X = anna.' }]],
    2: [[['true'], { de: 'Es gibt nur das Fakt vater(hans, anna). Was nicht ableitbar ist, gilt für Prolog als falsch (Closed World Assumption).', en: 'There is only the fact vater(hans, anna). Whatever cannot be derived is false for Prolog (closed world assumption).' }]]
  },
  p3: {
    0: [[['0+1+1+1'], { de: 'is rechnet aus: N is M + 1 liefert eine Zahl. Mit = entstünde nur der Term 0+1+1+1.', en: 'is evaluates: N is M + 1 gives a number. With = you would only get the term 0+1+1+1.' }]],
    1: [[['0+6+5+4'], { de: 'is rechnet aus: S is R + H liefert eine Zahl, hier 15.', en: 'is evaluates: S is R + H gives a number, here 15.' }]],
    2: [[['3'], { de: 'Die Liste hat zwei Elemente, [1, 2] und []. Was in den Elementen steht, zählt nicht mit.', en: 'The list has two elements, [1, 2] and []. What the elements contain does not count.' }], [['1'], { de: 'Auch [] ist ein Element der äußeren Liste: zwei Elemente.', en: '[] is an element of the outer list too: two elements.' }]]
  }
};
function dgTrap(t, field, raw) {
  const T = TRAPS[t.id]; if (!T) return null;
  if (field === 'mc') { const m = T.mc && T.mc[raw]; return m ? { m } : null; }
  const list = T[field]; if (!list) return null;
  const norm = t.type === 'pquery' ? (s => normAnswers(s).join(';')) : t.type === 'nums' ? (s => String(s).trim().replace(/[−–]/g, '-')) : normV;
  const g = norm(raw); if (!g) return null;
  for (const [answers, m] of list) if (answers.some(a => norm(a) === g)) return { m };
  return null;
}

/* Prolog programs: diagnose from how the student's program behaves on the tests */
const PROG_TIPS = {
  missing: { de: 'Das Prädikat fehlt oder heißt anders. Achte auf Name und Stelligkeit, etwa letztes/2.', en: 'The predicate is missing or has a different name. Check name and arity, e.g. letztes/2.' },
  syntax: { de: 'Syntaxfehler: Jede Klausel endet mit einem Punkt, Variablen beginnen mit einem Großbuchstaben.', en: 'Syntax error: every clause ends with a full stop, variables start with an upper-case letter.' },
  p4_head: { de: 'Kopf statt Ende: Das letzte Element findest du, indem du rekursiv über den Rest [_|T] gehst, bis nur noch [X] übrig ist.', en: 'Head instead of end: you find the last element by recursing over the rest [_|T] until only [X] is left.' },
  p4_many: { de: 'Mehrere Antworten: Deine Klauseln liefern nicht nur das letzte Element. Gib nur im Fall [X] ein Ergebnis zurück.', en: 'Several answers: your clauses return more than the last element. Return a result only in the case [X].' },
  p4_empty: { de: 'Die leere Liste hat kein letztes Element: Ein Basisfall letztes([], _) ist falsch.', en: 'The empty list has no last element: a base case letztes([], _) is wrong.' },
  p4_base: { de: 'Basisfall fehlt: letztes([X], X).', en: 'Base case missing: letztes([X], X).' },
  p5_append: { de: 'Hinten angehängt statt verdoppelt: Jedes Element soll direkt zweimal hintereinander stehen, also [H, H | R].', en: 'Appended instead of doubled: each element should appear twice in a row, i.e. [H, H | R].' },
  p5_copy: { de: 'Nur kopiert: Der Kopf muss zweimal in die Ergebnisliste, [H, H | R].', en: 'Only copied: the head has to go into the result twice, [H, H | R].' },
  p5_base: { de: 'Basisfall fehlt: verdoppeln([], []).', en: 'Base case missing: verdoppeln([], []).' },
  p6_many: { de: 'Mehrere Antworten: Der dritten Klausel fehlt X \\= Y. Beim Backtracking überspringt Prolog sonst ein passendes Element und liefert weitere, falsche Zählungen.', en: 'Several answers: the third clause lacks X \\= Y. Otherwise Prolog skips a matching element on backtracking and returns further, wrong counts.' },
  p6_inst: { de: 'Reihenfolge der Teilziele: N is M + 1 braucht ein gebundenes M. Erst zaehle(X, T, M), dann rechnen.', en: 'Order of subgoals: N is M + 1 needs M to be bound. Call zaehle(X, T, M) first, then compute.' },
  p6_term: { de: '= statt is: N = M + 1 baut nur einen Term wie 0+1+1. Rechnen lässt sich nur mit is.', en: '= instead of is: N = M + 1 only builds a term like 0+1+1. Only is evaluates arithmetic.' },
  p6_base: { de: 'Basisfall fehlt: zaehle(_, [], 0).', en: 'Base case missing: zaehle(_, [], 0).' },
  limit: { de: 'Endlosschleife: Die Rekursion erreicht ihren Basisfall nicht. Prüfe, ob der rekursive Aufruf auf einer kürzeren Liste arbeitet und der Basisfall vor der rekursiven Klausel greift.', en: 'Infinite loop: the recursion never reaches its base case. Check that the recursive call works on a shorter list and that the base case can match.' },
  inst: { de: 'Instanziierungsfehler: Auf der rechten Seite von is steht noch eine ungebundene Variable. Rechne erst nach dem rekursiven Aufruf.', en: 'Instantiation error: the right-hand side of is still contains an unbound variable. Compute after the recursive call.' }
};
function diagProg(t, items) {
  const tip = k => ({ m: PROG_TIPS[k] });
  const errs = items.map(it => it.info && it.info.err ? it.info.err.error : null);
  const RUN = ['inst', 'limit', 'unknown', 'cut'];
  if (errs.some(e => e && !RUN.includes(e))) return tip('syntax');
  if (errs.includes('unknown')) return tip('missing');
  if (errs.includes('limit')) return tip('limit');
  const got = i => (items[i] && items[i].info && items[i].info.got) || [];
  if (t.id === 'p4') {
    if (got(0).some(g => /X\s*=\s*1$/.test(g))) return tip('p4_head');
    if (!items[2].ok) return tip('p4_empty');
    if (got(0).length > 1) return tip('p4_many');
    if (!got(1).length) return tip('p4_base');
  }
  if (t.id === 'p5') {
    if (got(0).some(g => normV(g) === 'D=[1,2,1,2]')) return tip('p5_append');
    if (got(0).some(g => normV(g) === 'D=[1,2]')) return tip('p5_copy');
    if (!got(1).length) return tip('p5_base');
  }
  if (t.id === 'p6') {
    if (errs.includes('inst')) return tip('p6_inst');
    if (got(0).some(g => /\+/.test(g))) return tip('p6_term');
    if (got(0).length > 1) return tip('p6_many');
    if (!got(1).length || !got(2).length) return tip('p6_base');
  }
  if (errs.includes('inst')) return tip('inst');
  return null;
}
