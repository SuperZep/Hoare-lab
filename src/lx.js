/* ===== Klausur-Training per language ===== */
const LXT = {
  de: {
    task: 'Aufgabe', pts: 'P.', check: 'Prüfen', show: 'Lösung zeigen', hide: 'Lösung ausblenden', reset: 'Alle Antworten löschen', checkall: 'Alle Aufgaben prüfen',
    total: '{p} von {t} Punkten', checked: '{n} von {m} Aufgaben geprüft', expected: 'Richtig wäre:', yours: 'Deine Antwort:', solution: 'Lösung',
    lines_hint: 'Eine Ausgabezeile pro Zeile.', not_unif: 'nicht unifizierbar', unif_ph: 'z. B. X = a, Y = f(b)',
    u_ok: 'Richtig, ein allgemeinster Unifikator.', u_notgen: 'Das ist ein Unifikator, aber nicht der allgemeinste.', u_wrong: 'Diese Substitution macht die Terme nicht gleich.',
    u_isnot: 'Die Terme sind nicht unifizierbar.', u_is: 'Die Terme sind unifizierbar.', u_err: 'Bitte in der Form X = Term, Y = Term eingeben.',
    q_hint: 'Antworten in der Reihenfolge, in der Prolog sie findet, durch Komma oder ; getrennt. Keine Antwort: false. Erfolg ohne Bindung: true.',
    run_tests: 'Tests ausführen', test: 'Test', t_ok: 'bestanden', t_fail: 'nicht bestanden', t_got: 'Prolog liefert:', t_want: 'Erwartet:', t_none: 'keine Antwort (false)', t_yes: 'true',
    t_extra: 'mehr oder andere Antworten als erwartet', perr_limit: 'Abbruch nach zu vielen Schritten (Endlosschleife?).', perr_unknown: 'Unbekanntes Prädikat {d}.', perr_syntax: 'Syntaxfehler im Programm oder in der Anfrage.', perr_inst: 'Arithmetik mit ungebundener Variable.', perr_cut: 'Der Cut ! wird hier nicht unterstützt.',
    self_txt: 'Schreibe deine Lösung zuerst selbst (auf Papier oder hier). Öffne dann die Musterlösung und hake ab, was deine Lösung erfüllt.', self_area: 'Deine Lösung (wird nicht automatisch geprüft)', self_pts: 'selbst bewertet',
    mc_pick: 'Wähle eine Antwort.', type_ph: 'z. B. Num a => a -> a', val_ph: 'Wert', num_ph: 'Zahl', err_type: 'Der Typ ist nicht lesbar. Beispiel: (a -> b) -> [a] -> [b]',
    pg_title: 'Prolog-Spielwiese', pg_txt: 'Probiere eigene Programme und Anfragen aus. Unterstützt werden reines Prolog, Listen, is/2, Vergleiche, = , \\= und \\+.', pg_prog: 'Programm', pg_query: 'Anfrage', pg_run: 'Ausführen', pg_noans: 'false.', pg_more: 'weitere Antworten vorhanden …',
    hub_hint: 'Aufgabentypen, wie sie in Klausuren zur Programmierung üblich sind. Jede Aufgabe wird sofort ausgewertet.', h1: 'Klausur-Training {l}', overview: 'Alle Klausuren'
  },
  en: {
    task: 'Task', pts: 'pts', check: 'Check', show: 'Show solution', hide: 'Hide solution', reset: 'Clear all answers', checkall: 'Check all tasks',
    total: '{p} of {t} points', checked: '{n} of {m} tasks checked', expected: 'Correct would be:', yours: 'Your answer:', solution: 'Solution',
    lines_hint: 'One output line per line.', not_unif: 'not unifiable', unif_ph: 'e.g. X = a, Y = f(b)',
    u_ok: 'Correct, a most general unifier.', u_notgen: 'That is a unifier, but not the most general one.', u_wrong: 'This substitution does not make the terms equal.',
    u_isnot: 'The terms are not unifiable.', u_is: 'The terms are unifiable.', u_err: 'Please enter it as X = term, Y = term.',
    q_hint: 'Answers in the order Prolog finds them, separated by commas or ;. No answer: false. Success without bindings: true.',
    run_tests: 'Run tests', test: 'Test', t_ok: 'passed', t_fail: 'failed', t_got: 'Prolog returns:', t_want: 'Expected:', t_none: 'no answer (false)', t_yes: 'true',
    t_extra: 'more or different answers than expected', perr_limit: 'Stopped after too many steps (infinite loop?).', perr_unknown: 'Unknown predicate {d}.', perr_syntax: 'Syntax error in the program or the query.', perr_inst: 'Arithmetic with an unbound variable.', perr_cut: 'The cut ! is not supported here.',
    self_txt: 'Write your own solution first (on paper or here). Then open the model solution and tick what your solution achieves.', self_area: 'Your solution (not checked automatically)', self_pts: 'self-assessed',
    mc_pick: 'Pick an answer.', type_ph: 'e.g. Num a => a -> a', val_ph: 'value', num_ph: 'number', err_type: 'The type cannot be read. Example: (a -> b) -> [a] -> [b]',
    pg_title: 'Prolog playground', pg_txt: 'Try your own programs and queries. Supported: pure Prolog, lists, is/2, comparisons, =, \\= and \\+.', pg_prog: 'Program', pg_query: 'Query', pg_run: 'Run', pg_noans: 'false.', pg_more: 'more answers available …',
    hub_hint: 'Task types that are common in Programmierung exams. Every task is graded immediately.', h1: 'Exam training: {l}', overview: 'All exams'
  }
};
const lt = (k, rep) => { let s = LXT[lang][k] ?? LXT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };

const FAM = `vater(hans, peter).
vater(hans, anna).
vater(peter, lisa).
mutter(anna, tom).

elternteil(X, Y) :- vater(X, Y).
elternteil(X, Y) :- mutter(X, Y).

grossvater(X, Z) :- vater(X, Y), elternteil(Y, Z).`;
const ARI = `laenge([], 0).
laenge([_|T], N) :- laenge(T, M), N is M + 1.

summe([], 0).
summe([H|T], S) :- summe(T, R), S is R + H.`;

const LX = {
  java: {
    title: 'Java', kicker: { de: 'Klausur-Training · Teil II', en: 'Exam training · part II' },
    intro: { de: 'Ausgaben vorhersagen, Rekursion nachrechnen, Objektorientierung durchschauen und eine Methode schreiben.', en: 'Predict outputs, trace recursion, see through object orientation and write a method.' },
    tasks: [
      { id: 'j1', type: 'lines', title: { de: 'Ausgabe: Ganzzahlen und Strings', en: 'Output: integers and strings' },
        q: { de: 'Was gibt das Programmstück aus?', en: 'What does this code print?' },
        code: `int a = 7, b = 2;
System.out.println(a / b);
System.out.println(a % b);
System.out.println((double) a / b);
System.out.println("" + a + b);
System.out.println(a + b + "");`, answer: ['3', '1', '3.5', '72', '9'],
        expl: { de: '7 / 2 ist Ganzzahldivision: 3. 7 % 2 ist der Rest: 1. Der Cast wirkt vor der Division, also 7.0 / 2 = 3.5. Bei "" + a + b wird von links ausgewertet: Zuerst entsteht ein String, an den 7 und 2 angehängt werden: 72. Bei a + b + "" wird zuerst 7 + 2 = 9 gerechnet und dann in einen String umgewandelt.',
                en: '7 / 2 is integer division: 3. 7 % 2 is the remainder: 1. The cast applies before the division, so 7.0 / 2 = 3.5. In "" + a + b evaluation goes left to right: first a string, then 7 and 2 are appended: 72. In a + b + "" first 7 + 2 = 9 is computed, then converted to a string.' } },
      { id: 'j2', type: 'lines', title: { de: 'Parameterübergabe und Referenzen', en: 'Parameter passing and references' },
        q: { de: 'Was gibt main aus?', en: 'What does main print?' },
        code: `static void f(int x, int[] a) {
    x = x + 1;
    a[0] = a[0] + 1;
    a = new int[] {100};
    a[0] = a[0] + 1;
}

public static void main(String[] args) {
    int x = 1;
    int[] a = {10};
    f(x, a);
    System.out.println(x);
    System.out.println(a[0]);
}`, answer: ['1', '11'],
        expl: { de: 'Java übergibt immer Werte (call by value). x ist eine Kopie, die Änderung bleibt in f. Bei einem Array wird die Referenz kopiert: a[0] = a[0] + 1 ändert das Array von main auf 11. Danach zeigt das lokale a auf ein neues Array. Diese Änderung sieht main nicht.',
                en: 'Java always passes values (call by value). x is a copy, so the change stays inside f. For an array the reference is copied: a[0] = a[0] + 1 changes main’s array to 11. Afterwards the local a points to a new array, and main does not see that change.' } },
      { id: 'j3', type: 'lines', title: { de: 'Dynamisches Binden', en: 'Dynamic binding' },
        q: { de: 'Was wird ausgegeben?', en: 'What is printed?' },
        code: `class A {
    int wert()    { return 1; }
    int doppelt() { return 2 * wert(); }
}
class B extends A {
    int wert()    { return 5; }
}

// in main:
A x = new B();
System.out.println(x.wert());
System.out.println(x.doppelt());
A y = new A();
System.out.println(y.doppelt());`, answer: ['5', '10', '2'],
        expl: { de: 'x hat den statischen Typ A, zeigt aber auf ein B-Objekt. Zur Laufzeit wird die Methode des tatsächlichen Objekts ausgeführt: wert() liefert 5. Auch innerhalb von doppelt() ruft wert() die überschriebene Methode auf: 2 · 5 = 10. Für ein echtes A-Objekt ergibt doppelt() 2 · 1 = 2.',
                en: 'x has the static type A but points to a B object. At run time the method of the actual object is executed: wert() returns 5. Inside doppelt(), wert() also calls the overriding method: 2 · 5 = 10. For a real A object doppelt() gives 2 · 1 = 2.' } },
      { id: 'j4', type: 'lines', title: { de: 'Überladen und Überschreiben', en: 'Overloading and overriding' },
        q: { de: 'Was wird ausgegeben? Achtung, das ist eine klassische Falle.', en: 'What is printed? Careful, this is a classic trap.' },
        code: `class A {
    String f(A o) { return "A/A"; }
}
class B extends A {
    String f(A o) { return "B/A"; }
    String f(B o) { return "B/B"; }
}

// in main:
A x = new B();
B y = new B();
System.out.println(x.f(y));
System.out.println(y.f(y));
System.out.println(y.f(x));`, answer: ['B/A', 'B/B', 'B/A'],
        expl: { de: 'Welche Signatur aufgerufen wird, entscheidet der Compiler anhand der statischen Typen. x hat den Typ A, und A kennt nur f(A): Gewählt wird f(A), zur Laufzeit läuft die überschreibende Version in B: B/A. y hat den Typ B, das Argument y ebenfalls: f(B) passt am genauesten: B/B. Im dritten Aufruf hat das Argument x den statischen Typ A: f(A), ausgeführt in B: B/A.',
                en: 'Which signature is called is decided by the compiler from the static types. x has type A, and A only knows f(A): f(A) is chosen, and at run time the overriding version in B runs: B/A. y has type B and so does the argument y: f(B) is the most specific match: B/B. In the third call the argument x has static type A: f(A), executed in B: B/A.' } },
      { id: 'j5', type: 'nums', title: { de: 'Rekursion nachrechnen', en: 'Tracing recursion' },
        q: { de: 'Gegeben ist die folgende Methode.', en: 'Consider the following method.' },
        code: `static int f(int n) {
    if (n <= 1) return n;
    return f(n - 1) + f(n - 2);
}`, fields: [{ label: { de: 'Wert von f(7)', en: 'value of f(7)' }, a: 13 }, { label: { de: 'Anzahl aller Aufrufe von f bei der Auswertung von f(5), einschließlich des ersten', en: 'number of calls of f when evaluating f(5), including the first' }, a: 15 }],
        expl: { de: 'f ist die Fibonacci-Folge: 0, 1, 1, 2, 3, 5, 8, 13. Für die Anzahl der Aufrufe A(n) gilt A(0) = A(1) = 1 und A(n) = 1 + A(n − 1) + A(n − 2). Also A(2) = 3, A(3) = 5, A(4) = 9, A(5) = 15.',
                en: 'f is the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13. For the number of calls A(n): A(0) = A(1) = 1 and A(n) = 1 + A(n − 1) + A(n − 2). So A(2) = 3, A(3) = 5, A(4) = 9, A(5) = 15.' } },
      { id: 'j6', type: 'nums', title: { de: 'Rekursive Datenstruktur', en: 'Recursive data structure' },
        q: { de: 'Was gibt das Programm aus?', en: 'What does the program print?' },
        code: `class Element {
    int wert; Element next;
    Element(int wert, Element next) { this.wert = wert; this.next = next; }
}

static int g(Element e) {
    if (e == null) return 0;
    if (e.wert % 2 == 0) return e.wert + g(e.next);
    return g(e.next);
}

// in main:
Element kopf = new Element(3, new Element(4, new Element(7, new Element(10, null))));
System.out.println(g(kopf));`, fields: [{ label: { de: 'Ausgabe', en: 'output' }, a: 14 }],
        expl: { de: 'g läuft rekursiv durch die Liste und addiert nur die geraden Werte: 4 + 10 = 14. Die Rekursion endet bei null.', en: 'g walks recursively through the list and adds only the even values: 4 + 10 = 14. The recursion ends at null.' } },
      { id: 'j7', type: 'mc', pts: 2, title: { de: 'Abstrakte Klassen und Interfaces', en: 'Abstract classes and interfaces' },
        q: { de: 'Welche der Anweisungen wird vom Compiler abgelehnt? Dabei sei f bereits als Form f = new Kreis(); deklariert.', en: 'Which statement does the compiler reject? Assume f has been declared as Form f = new Kreis();.' },
        code: `abstract class Form {
    abstract double flaeche();
}
interface Zeichenbar {
    void zeichne();
}
class Kreis extends Form implements Zeichenbar {
    double r;
    double flaeche() { return 3.14 * r * r; }
    public void zeichne() { }
}`,
        options: ['Zeichenbar z = new Kreis();', 'Form g = new Form();', 'Kreis k = (Kreis) f;', 'double d = f.flaeche();'], ok: 1,
        expl: { de: 'Von einer abstrakten Klasse kann man keine Objekte erzeugen. Variablen vom Typ Form oder Zeichenbar dürfen auf ein Kreis-Objekt zeigen, der Cast ist erlaubt, weil Kreis eine Unterklasse von Form ist, und flaeche() ist in Form deklariert.',
                en: 'You cannot create objects of an abstract class. Variables of type Form or Zeichenbar may point to a Kreis object, the cast is allowed because Kreis is a subclass of Form, and flaeche() is declared in Form.' } },
      { id: 'j8', type: 'self', title: { de: 'Programmieren: Palindrom', en: 'Programming: palindrome' },
        q: { de: 'Schreiben Sie eine Methode static boolean istPalindrom(int[] a), die genau dann true liefert, wenn a von vorne und von hinten gelesen gleich ist. Verwenden Sie kein Hilfsarray.', en: 'Write a method static boolean istPalindrom(int[] a) that returns true exactly when a reads the same forwards and backwards. Do not use a helper array.' },
        model: `static boolean istPalindrom(int[] a) {
    for (int i = 0; i < a.length / 2; i++) {
        if (a[i] != a[a.length - 1 - i]) {
            return false;
        }
    }
    return true;
}`,
        checks: [{ t: { de: 'Signatur und Rückgabetyp boolean stimmen', en: 'Signature and return type boolean are right' }, p: 1 },
                 { t: { de: 'Die Schleife läuft nur bis zur Mitte (a.length / 2)', en: 'The loop only runs to the middle (a.length / 2)' }, p: 1 },
                 { t: { de: 'Verglichen wird a[i] mit a[a.length - 1 - i]', en: 'It compares a[i] with a[a.length - 1 - i]' }, p: 2 },
                 { t: { de: 'Beim ersten Unterschied false, sonst am Ende true', en: 'false at the first difference, otherwise true at the end' }, p: 1 },
                 { t: { de: 'Leeres Array und Länge 1 liefern true', en: 'Empty array and length 1 return true' }, p: 1 }] }
    ]
  },
  haskell: {
    title: 'Haskell', kicker: { de: 'Klausur-Training · Teil III', en: 'Exam training · part III' },
    intro: { de: 'Typen bestimmen, Ausdrücke auswerten, Muster und Lazy Evaluation verstehen und eine Funktion auf Bäumen schreiben.', en: 'Determine types, evaluate expressions, understand patterns and lazy evaluation, and write a function on trees.' },
    tasks: [
      { id: 'h1', type: 'htype', title: { de: 'Typen bestimmen', en: 'Determining types' },
        q: { de: 'Geben Sie für jede Funktion den allgemeinsten Typ an, einschließlich Typklassen-Einschränkungen.', en: 'Give the most general type of each function, including type class constraints.' },
        code: `f x y     = x : y
twice g x = g (g x)
h (x, y)  = if x then y else y + 1`,
        fields: [{ label: 'f ::', a: 'a -> [a] -> [a]' }, { label: 'twice ::', a: '(a -> a) -> a -> a' }, { label: 'h ::', a: 'Num a => (Bool, a) -> a' }],
        expl: { de: 'f: (:) hängt ein Element vorne an eine Liste desselben Typs. twice: g wird auf sein eigenes Ergebnis angewendet, also müssen Argument- und Ergebnistyp gleich sein. h: x steht in der Bedingung und muss Bool sein; y + 1 verlangt Num, und beide Zweige haben den Typ von y.',
                en: 'f: (:) puts an element in front of a list of the same type. twice: g is applied to its own result, so argument and result type must be equal. h: x is the condition and must be Bool; y + 1 requires Num, and both branches have the type of y.' } },
      { id: 'h2', type: 'htype', title: { de: 'Typ mit Typklasse', en: 'Type with a type class' },
        q: { de: 'Welchen allgemeinsten Typ hat g?', en: 'What is the most general type of g?' },
        code: `g f xs = map f (filter even xs)`, fields: [{ label: 'g ::', a: 'Integral a => (a -> b) -> [a] -> [b]' }],
        expl: { de: 'even :: Integral a => a -> Bool erzwingt Integral für die Elemente von xs. map f wendet f auf diese Elemente an; das Ergebnis hat einen beliebigen Typ b.', en: 'even :: Integral a => a -> Bool forces Integral for the elements of xs. map f applies f to those elements; the result has an arbitrary type b.' } },
      { id: 'h3', type: 'hval', title: { de: 'Ausdrücke auswerten', en: 'Evaluating expressions' },
        q: { de: 'Zu welchem Wert werten die Ausdrücke aus? Schreiben Sie das Ergebnis so, wie GHCi es ausgibt.', en: 'What do the expressions evaluate to? Write the result the way GHCi prints it.' },
        fields: [{ label: 'take 3 (map (*2) [1..])', a: ['[2,4,6]'] }, { label: 'foldr (-) 0 [1,2,3]', a: ['2'] }, { label: 'foldl (-) 0 [1,2,3]', a: ['-6', '(-6)'] },
                 { label: `[ (x, y) | x <- [1..3], y <- "ab", odd x ]`, a: [`[(1,'a'),(1,'b'),(3,'a'),(3,'b')]`] }],
        expl: { de: 'Wegen Lazy Evaluation werden aus der unendlichen Liste nur drei Elemente berechnet. foldr klammert von rechts: 1 − (2 − (3 − 0)) = 2. foldl klammert von links: ((0 − 1) − 2) − 3 = −6. In der Listenkomprehension ist x die äußere Schleife, y die innere, und odd x filtert x = 2 heraus.',
                en: 'Thanks to lazy evaluation only three elements of the infinite list are computed. foldr brackets from the right: 1 − (2 − (3 − 0)) = 2. foldl brackets from the left: ((0 − 1) − 2) − 3 = −6. In the list comprehension x is the outer loop, y the inner one, and odd x filters out x = 2.' } },
      { id: 'h4', type: 'nums', title: { de: 'Pattern Matching', en: 'Pattern matching' },
        q: { de: 'Werten Sie die Aufrufe aus.', en: 'Evaluate the calls.' },
        code: `f :: [Int] -> Int
f []       = 0
f [x]      = x
f (x:y:ys) = x - f ys`, fields: [{ label: 'f [10, 3, 4]', a: 6 }, { label: 'f [1, 2, 3, 4, 5]', a: 3 }],
        expl: { de: 'Die dritte Gleichung nimmt zwei Elemente weg und rechnet x − f ys. f [10, 3, 4] = 10 − f [4] = 10 − 4 = 6. f [1, 2, 3, 4, 5] = 1 − f [3, 4, 5] = 1 − (3 − f [5]) = 1 − (3 − 5) = 3.', en: 'The third equation removes two elements and computes x − f ys. f [10, 3, 4] = 10 − f [4] = 10 − 4 = 6. f [1, 2, 3, 4, 5] = 1 − f [3, 4, 5] = 1 − (3 − f [5]) = 1 − (3 − 5) = 3.' } },
      { id: 'h5', type: 'mc', pts: 2, title: { de: 'Lazy Evaluation', en: 'Lazy evaluation' },
        q: { de: 'Welcher Ausdruck terminiert?', en: 'Which expression terminates?' },
        options: ['length [1..]', 'head (filter (> 100) [1..])', 'sum (takeWhile (> 0) [1..])', 'last [1..]'], ok: 1,
        expl: { de: 'Lazy Evaluation berechnet nur, was gebraucht wird. head braucht nur das erste Element der gefilterten Liste: 101. Die anderen Ausdrücke müssen die ganze unendliche Liste durchlaufen; takeWhile (> 0) hört nie auf, weil alle Zahlen positiv sind.', en: 'Lazy evaluation only computes what is needed. head needs only the first element of the filtered list: 101. The other expressions must traverse the whole infinite list; takeWhile (> 0) never stops because all numbers are positive.' } },
      { id: 'h6', type: 'self', title: { de: 'Programmieren: Binärbäume', en: 'Programming: binary trees' },
        q: { de: 'Gegeben ist data Baum = Blatt | Knoten Baum Int Baum. Schreiben Sie summe :: Baum -> Int (Summe aller Zahlen) und tiefe :: Baum -> Int (ein Blatt hat die Tiefe 0).', en: 'Given data Baum = Blatt | Knoten Baum Int Baum. Write summe :: Baum -> Int (sum of all numbers) and tiefe :: Baum -> Int (a leaf has depth 0).' },
        model: `data Baum = Blatt | Knoten Baum Int Baum

summe :: Baum -> Int
summe Blatt          = 0
summe (Knoten l x r) = summe l + x + summe r

tiefe :: Baum -> Int
tiefe Blatt          = 0
tiefe (Knoten l _ r) = 1 + max (tiefe l) (tiefe r)

-- b = Knoten (Knoten Blatt 1 Blatt) 2 (Knoten Blatt 3 (Knoten Blatt 4 Blatt))
-- summe b == 10,  tiefe b == 3`,
        checks: [{ t: { de: 'Je eine Gleichung für Blatt und für Knoten (Pattern Matching)', en: 'One equation for Blatt and one for Knoten (pattern matching)' }, p: 2 },
                 { t: { de: 'summe ruft sich auf beiden Teilbäumen auf', en: 'summe recurses on both subtrees' }, p: 1 },
                 { t: { de: 'tiefe rechnet 1 + max der beiden Teilbäume', en: 'tiefe computes 1 + max of the two subtrees' }, p: 2 },
                 { t: { de: 'Typsignaturen angegeben', en: 'Type signatures given' }, p: 1 }] }
    ]
  },
  prolog: {
    title: 'Prolog', kicker: { de: 'Klausur-Training · Teil IV', en: 'Exam training · part IV' },
    intro: { de: 'Unifikation, Anfragen mit Backtracking und kleine Prädikate, die ein eingebautes Mini-Prolog direkt testet.', en: 'Unification, queries with backtracking and small predicates that a built-in mini Prolog tests directly.' },
    tasks: [
      { id: 'p1', type: 'unify', title: { de: 'Unifikation', en: 'Unification' },
        q: { de: 'Sind die Terme unifizierbar? Geben Sie gegebenenfalls einen allgemeinsten Unifikator an, zum Beispiel X = a, Y = f(b). Verwenden Sie den Occurs-Check.', en: 'Are the terms unifiable? If so, give a most general unifier, for example X = a, Y = f(b). Use the occurs check.' },
        pairs: [['f(X, g(Y))', 'f(a, g(b))'], ['p(X, f(X))', 'p(g(Y), f(g(a)))'], ['h(X, X)', 'h(a, b)'], ['k(X, f(X))', 'k(Y, Y)'], ['[X, Y | Z]', '[1, 2, 3, 4]']],
        why: [null, null, { de: 'X müsste gleichzeitig a und b sein.', en: 'X would have to be a and b at the same time.' }, { de: 'Aus X = Y folgt f(X) = X. Der Occurs-Check schlägt fehl.', en: 'From X = Y we get f(X) = X. The occurs check fails.' }, null] },
      { id: 'p2', type: 'pquery', title: { de: 'Anfragen und Backtracking', en: 'Queries and backtracking' },
        q: { de: 'Welche Antworten liefert Prolog auf die Anfragen, und in welcher Reihenfolge?', en: 'Which answers does Prolog give to the queries, and in which order?' },
        program: FAM, queries: ['grossvater(hans, E)', 'elternteil(X, tom)', 'vater(peter, anna)'],
        expl: { de: 'Prolog probiert die Klauseln von oben nach unten und die Teilziele von links nach rechts. Für grossvater(hans, E) wird zuerst Y = peter gefunden (E = lisa), dann Y = anna, deren Kind tom über mutter gefunden wird.', en: 'Prolog tries clauses top to bottom and subgoals left to right. For grossvater(hans, E) it first finds Y = peter (E = lisa), then Y = anna, whose child tom is found via mutter.' } },
      { id: 'p3', type: 'pquery', title: { de: 'Rekursion und Arithmetik', en: 'Recursion and arithmetic' },
        q: { de: 'Welche Antworten liefert Prolog?', en: 'Which answers does Prolog give?' },
        program: ARI, queries: ['laenge([a, b, c], N)', 'summe([4, 5, 6], S)', 'laenge([[1, 2], []], N)'],
        expl: { de: 'is/2 rechnet erst, wenn die rechte Seite vollständig gebunden ist, deshalb steht der rekursive Aufruf vor der Rechnung. Die Liste [[1, 2], []] hat zwei Elemente, egal was in ihnen steht.', en: 'is/2 only computes once the right-hand side is fully bound, so the recursive call comes before the calculation. The list [[1, 2], []] has two elements, whatever they contain.' } },
      { id: 'p4', type: 'pprog', pts: 4, title: { de: 'Programmieren: letztes Element', en: 'Programming: last element' },
        q: { de: 'Schreiben Sie ein Prädikat letztes(L, X), das gilt, wenn X das letzte Element der Liste L ist.', en: 'Write a predicate letztes(L, X) that holds if X is the last element of the list L.' },
        starter: '% letztes(L, X)\n', model: `letztes([X], X).
letztes([_|T], X) :- letztes(T, X).`,
        tests: [{ q: 'letztes([1, 2, 3], X)', exp: ['X = 3'] }, { q: 'letztes([a], X)', exp: ['X = a'] }, { q: 'letztes([], X)', exp: false }, { q: 'letztes([1, 2, 3], 2)', exp: false }] },
      { id: 'p5', type: 'pprog', pts: 4, title: { de: 'Programmieren: verdoppeln', en: 'Programming: doubling' },
        q: { de: 'Schreiben Sie verdoppeln(L, D): D enthält jedes Element von L zweimal hintereinander, zum Beispiel verdoppeln([1, 2], [1, 1, 2, 2]).', en: 'Write verdoppeln(L, D): D contains each element of L twice in a row, for example verdoppeln([1, 2], [1, 1, 2, 2]).' },
        starter: '% verdoppeln(L, D)\n', model: `verdoppeln([], []).
verdoppeln([H|T], [H, H|R]) :- verdoppeln(T, R).`,
        tests: [{ q: 'verdoppeln([1, 2], D)', exp: ['D = [1,1,2,2]'] }, { q: 'verdoppeln([], D)', exp: ['D = []'] }, { q: 'verdoppeln([a], [a, a])', exp: true }, { q: 'verdoppeln([a], [a])', exp: false }] },
      { id: 'p6', type: 'pprog', pts: 4, title: { de: 'Programmieren: zählen', en: 'Programming: counting' },
        q: { de: 'Schreiben Sie zaehle(X, L, N): N ist die Anzahl der Vorkommen von X in der Liste L. Jede Anfrage soll genau eine Antwort liefern.', en: 'Write zaehle(X, L, N): N is the number of occurrences of X in the list L. Every query should give exactly one answer.' },
        starter: '% zaehle(X, L, N)\n', model: `zaehle(_, [], 0).
zaehle(X, [X|T], N) :- zaehle(X, T, M), N is M + 1.
zaehle(X, [Y|T], N) :- X \\= Y, zaehle(X, T, N).`,
        tests: [{ q: 'zaehle(a, [a, b, a], N)', exp: ['N = 2'] }, { q: 'zaehle(c, [a, b], N)', exp: ['N = 0'] }, { q: 'zaehle(1, [], N)', exp: ['N = 0'] }, { q: 'zaehle(b, [b, b, b, a], 3)', exp: true }] }
    ]
  }
};

/* ---- state, scoring ---- */
ST.LX = ST.LX || {};
const lxS = l => (ST.LX[l] ||= { v: {}, r: {}, sol: {} });
function taskMax(t) {
  switch (t.type) {
    case 'lines': return t.answer.length;
    case 'nums': case 'htype': case 'hval': return t.fields.length;
    case 'unify': return t.pairs.length;
    case 'pquery': return t.queries.length;
    case 'mc': case 'pprog': return t.pts;
    case 'self': return t.checks.reduce((s, c) => s + c.p, 0);
  }
}
const normV = s => String(s ?? '').replace(/\s+/g, '').replace(/−/g, '-');
function splitTop(s) { const out = []; let d = 0, cur = ''; for (const c of s) { if ('[('.includes(c)) d++; if ('])'.includes(c)) d--; if ((c === ',' || c === ';' || c === '\n') && d === 0) { out.push(cur); cur = ''; } else cur += c; } out.push(cur); return out.map(x => x.trim()).filter(Boolean); }
function normAnswers(s) {
  return splitTop(s || '').map(x => x.replace(/^[A-Z_][A-Za-z0-9_]*\s*=\s*/, '')).map(normV).map(x => ({ nein: 'false', no: 'false', falsch: 'false', ja: 'true', yes: 'true', wahr: 'true' }[x.toLowerCase()] || x));
}
function expectedAnswers(program, q) {
  const r = PL.run(program, q);
  if (r.error) return null;
  if (!r.answers.length) return ['false'];
  return r.answers.map(a => { const vals = Object.values(a); return vals.length ? vals.map(normV).join(',') : 'true'; });
}
function plErr(r) { return lt('perr_' + (r.error === 'limit' ? 'limit' : r.error === 'unknown' ? 'unknown' : r.error === 'inst' ? 'inst' : r.error === 'cut' ? 'cut' : 'syntax'), { d: r.detail || '' }); }
function infoText(i) { if (!i) return ''; if (i.err) return plErr(i.err); return (i.got.length ? i.got.join(' ; ') : lt('t_none')) + (i.extra ? ' · ' + lt('t_extra') : ''); }
function fmtAns(a) { const e = Object.entries(a); return e.length ? e.map(([k, v]) => `${k} = ${v}`).join(', ') : 'true'; }

function gradeTask(l, t) {
  const S = lxS(l), V = k => S.v[t.id + ':' + k] ?? '';
  const res = { items: [], pts: 0 };
  switch (t.type) {
    case 'lines': {
      const got = String(V('0')).split('\n').map(x => x.trim()).filter(x => x !== '');
      t.answer.forEach((a, i) => { const ok = normV(got[i]) === normV(a); res.items.push({ ok, got: got[i] ?? '', exp: a, tip: ok ? null : dgTrap(t, i, got[i] ?? '') }); if (ok) res.pts++; });
      break; }
    case 'nums': t.fields.forEach((f, i) => { const g = V(i).trim().replace('−', '-'); const ok = g !== '' && Number(g) === f.a; res.items.push({ ok, exp: String(f.a), tip: ok ? null : dgTrap(t, i, g) }); if (ok) res.pts++; }); break;
    case 'hval': t.fields.forEach((f, i) => { const g = normV(V(i)); const ok = f.a.some(a => normV(a) === g); res.items.push({ ok, exp: f.a[0], tip: ok ? null : dgTrap(t, i, V(i)) }); if (ok) res.pts++; }); break;
    case 'htype': t.fields.forEach((f, i) => { const g = V(i); const e = g.trim() ? HT.eq(g, f.a) : false; res.items.push({ ok: e === true, err: e === null, exp: f.a, tip: e === false && g.trim() ? diagHtype(g.replace(/^.*::/, ''), f.a) : null }); if (e === true) res.pts++; }); break;
    case 'mc': { const g = V('0'); res.items.push({ ok: g !== '' && +g === t.ok, tip: g !== '' && +g !== t.ok ? dgTrap(t, 'mc', +g) : null }); if (g !== '' && +g === t.ok) res.pts = t.pts; break; }
    case 'unify': t.pairs.forEach(([a, b], i) => {
      const ref = PL.refUnifier(a, b), notU = V('n' + i) === '1', txt = V(i);
      let ok = false, msg;
      if (ref === null) { ok = notU; msg = ok ? '' : 'u_isnot'; }
      else if (notU) { msg = 'u_is'; }
      else { const c = PL.checkUnifier(a, b, txt); if (c.error) msg = 'u_err'; else if (c.ok) ok = true; else msg = c.unifies ? 'u_notgen' : 'u_wrong'; }
      res.items.push({ ok, msg, exp: ref, tip: ok ? null : diagUnify(a, b, txt, notU) }); if (ok) res.pts++; }); break;
    case 'pquery': t.queries.forEach((q, i) => { const exp = expectedAnswers(t.program, q) || []; const got = normAnswers(V(i)); const ok = got.length === exp.length && got.every((g, j) => g === exp[j]); res.items.push({ ok, exp: exp.join(' ; '), tip: ok || !got.length ? null : dgTrap(t, i, V(i)) }); if (ok) res.pts++; }); break;
    case 'pprog': {
      const prog = V('0');
      let passed = 0;
      t.tests.forEach(ts => {
        const r = PL.run(prog, ts.q);
        let ok = false, info;
        if (r.error) info = { err: r };
        else {
          const got = [...new Set(r.answers.map(fmtAns))];
          if (ts.exp === false) ok = r.answers.length === 0;
          else if (ts.exp === true) ok = r.answers.length > 0;
          else ok = got.length === ts.exp.length && ts.exp.every(e => got.map(normV).includes(normV(e)));
          info = { got, extra: !ok && r.answers.length > 0 && ts.exp !== false };
        }
        res.items.push({ ok, info });
        if (ok) passed++;
      });
      res.pts = Math.round(t.pts * passed / t.tests.length); if (passed < t.tests.length && prog.trim()) res.tip = diagProg(t, res.items); break; }
    case 'self': t.checks.forEach((c, i) => { const ok = V('c' + i) === '1'; res.items.push({ ok }); if (ok) res.pts += c.p; }); break;
  }
  res.max = taskMax(t);
  return res;
}

/* ---- rendering ---- */
function codeHTML(src) { return `<pre class="code">${esc(src)}</pre>`; }
function fb(ok, inner) { return `<div class="fb ${ok ? 'ok' : 'bad'}">${inner}</div>`; }
function taskHTML(l, t, idx) {
  const S = lxS(l), r = S.r[t.id], showSol = !!S.sol[t.id], V = k => S.v[t.id + ':' + k] ?? '';
  const key = k => `data-lx="${l}" data-t="${t.id}" data-k="${k}"`;
  const mark = (i) => r && r.items[i] ? `<span class="lxm ${r.items[i].ok ? 'yes' : 'no'}">${r.items[i].ok ? '✓' : '✗'}</span>` : '';
  let body = '';
  switch (t.type) {
    case 'lines': {
      body = codeHTML(t.code) + `<label class="f" for="lx-${t.id}"><span>${lt('lines_hint')}</span><textarea id="lx-${t.id}" class="lxarea mono" rows="${t.answer.length + 1}" ${key('0')} spellcheck="false">${esc(V('0'))}</textarea></label>`;
      if (r) body += `<div class="lx-lines">${r.items.map((it, i) => `<div class="${it.ok ? 'yes' : 'no'}">${it.ok ? '✓' : '✗'} <span class="mono">${esc(it.got || '—')}</span>${!it.ok && showSol ? ` <span class="muted">→ ${esc(it.exp)}</span>` : ''}${!it.ok ? dgBox(it.tip) : ''}</div>`).join('')}</div>`;
      break; }
    case 'nums': case 'hval': case 'htype':
      body = (t.code ? codeHTML(t.code) : '') + `<div class="lxfields">${t.fields.map((f, i) => `<label class="lxf" for="lx-${t.id}-${i}"><span class="mono">${esc(L(f.label))}</span><span class="row"><input id="lx-${t.id}-${i}" class="mono" ${key(i)} value="${esc(V(i))}" placeholder="${esc(t.type === 'htype' ? lt('type_ph') : t.type === 'nums' ? lt('num_ph') : lt('val_ph'))}" autocomplete="off" spellcheck="false" ${t.type === 'nums' ? 'inputmode="numeric"' : ''}>${mark(i)}</span>${r && r.items[i] && r.items[i].err ? `<span class="err">${lt('err_type')}</span>` : ''}${r && r.items[i] && !r.items[i].ok && r.items[i].tip ? dgBox(r.items[i].tip) : ''}${r && !r.items[i].ok && showSol ? `<span class="lxexp">${lt('expected')} <b class="mono">${esc(t.type === 'nums' ? r.items[i].exp : Array.isArray(f.a) ? f.a[0] : f.a)}</b></span>` : ''}</label>`).join('')}</div>`;
      break;
    case 'mc':
      body = (t.code ? codeHTML(t.code) : '') + `<div class="lxmc" role="radiogroup">${t.options.map((o, i) => `<label class="lxopt ${r && showSol && i === t.ok ? 'right' : ''}"><input type="radio" name="lx-${t.id}" value="${i}" ${key('0')} ${V('0') === String(i) ? 'checked' : ''}> <span class="mono">${esc(o)}</span></label>`).join('')}</div>`;
      if (r && !r.items[0].ok && V('0') === '') body += `<p class="small muted">${lt('mc_pick')}</p>`;
      if (r && !r.items[0].ok && r.items[0].tip) body += dgBox(r.items[0].tip);
      break;
    case 'unify':
      body = `<div class="lxfields">${t.pairs.map(([a, b], i) => `<div class="lxf"><span class="mono">${esc(a)} &nbsp;≟&nbsp; ${esc(b)}</span>
        <span class="row"><input class="mono" ${key(i)} value="${esc(V(i))}" placeholder="${esc(lt('unif_ph'))}" autocomplete="off" spellcheck="false" aria-label="${esc(a + ' = ' + b)}" ${V('n' + i) === '1' ? 'disabled' : ''}>
        <label class="kcheck small"><input type="checkbox" ${key('n' + i)} ${V('n' + i) === '1' ? 'checked' : ''}> ${lt('not_unif')}</label>${mark(i)}</span>
        ${r && !r.items[i].ok && r.items[i].msg ? `<span class="err">${esc(lt(r.items[i].msg))}</span>` : ''}${r && !r.items[i].ok ? dgBox(r.items[i].tip) : ''}
        ${r && !r.items[i].ok && showSol ? `<span class="lxexp">${lt('expected')} <b class="mono">${esc(r.items[i].exp === null ? lt('not_unif') : r.items[i].exp)}</b>${t.why[i] ? ' · ' + esc(L(t.why[i])) : ''}</span>` : ''}</div>`).join('')}</div>`;
      break;
    case 'pquery':
      body = codeHTML(t.program) + `<p class="syntax">${lt('q_hint')}</p><div class="lxfields">${t.queries.map((q, i) => `<label class="lxf" for="lx-${t.id}-${i}"><span class="mono">?- ${esc(q)}.</span><span class="row"><input id="lx-${t.id}-${i}" class="mono" ${key(i)} value="${esc(V(i))}" autocomplete="off" spellcheck="false">${mark(i)}</span>${r && !r.items[i].ok ? dgBox(r.items[i].tip) : ''}${r && !r.items[i].ok && showSol ? `<span class="lxexp">${lt('expected')} <b class="mono">${esc(r.items[i].exp)}</b></span>` : ''}</label>`).join('')}</div>`;
      break;
    case 'pprog':
      body = `<label class="f" for="lx-${t.id}"><span>${lt('pg_prog')}</span><textarea id="lx-${t.id}" class="lxarea mono" rows="6" ${key('0')} spellcheck="false">${esc(V('0') || t.starter)}</textarea></label>
        <div class="lxtests">${t.tests.map((ts, i) => { const it = r && r.items[i]; return `<div class="lxtest ${it ? (it.ok ? 'yes' : 'no') : ''}"><span class="mono">?- ${esc(ts.q)}.</span><span class="small">${lt('t_want')} <span class="mono">${esc(ts.exp === false ? lt('t_none') : ts.exp === true ? lt('t_yes') : ts.exp.join(' ; '))}</span></span>${it ? `<span class="small">${it.ok ? '✓ ' + lt('t_ok') : '✗ ' + lt('t_got') + ' <span class="mono">' + esc(infoText(it.info)) + '</span>'}</span>` : ''}</div>`; }).join('')}</div>` + (r && r.tip ? dgBox(r.tip) : '');
      break;
    case 'self':
      body = `<p class="small muted">${lt('self_txt')}</p><label class="f" for="lx-${t.id}"><span>${lt('self_area')}</span><textarea id="lx-${t.id}" class="lxarea mono" rows="8" ${key('0')} spellcheck="false">${esc(V('0'))}</textarea></label>`;
      if (showSol) body += `<div class="lxsol"><span class="lab">${lt('solution')}</span>${codeHTML(t.model)}<div class="lxchecks">${t.checks.map((c, i) => `<label class="kcheck"><input type="checkbox" ${key('c' + i)} ${V('c' + i) === '1' ? 'checked' : ''}> <span>${esc(L(c.t))} <span class="muted">(${c.p} ${lt('pts')})</span></span></label>`).join('')}</div></div>`;
      break;
  }
  let sol = '';
  if (showSol && t.expl) sol = `<div class="fb info"><span class="lab">${lt('solution')}</span><span>${esc(L(t.expl))}</span></div>`;
  if (showSol && t.type === 'pprog') sol = `<div class="lxsol"><span class="lab">${lt('solution')}</span>${codeHTML(t.model)}</div>`;
  if (showSol && t.type === 'lines') sol = `<div class="fb info"><span class="lab">${lt('solution')}</span><pre class="code">${esc(t.answer.join('\n'))}</pre><span>${esc(L(t.expl))}</span></div>`;
  const VZ = { p2: ['#prolog-tree', 'viz_sld'], p3: ['#prolog-tree', 'viz_sld'], h4: ['#haskell-steps', 'viz_hs'], h3: ['#haskell-steps', 'viz_hs'] }[t.id];
  if (showSol && VZ) sol += `<p class="small"><a href="${VZ[0]}">${lang === 'de' ? (VZ[1] === 'viz_sld' ? 'Den Suchbaum Schritt für Schritt ansehen →' : 'Die Auswertung Schritt für Schritt ansehen →') : (VZ[1] === 'viz_sld' ? 'See the search tree step by step →' : 'See the evaluation step by step →')}</a></p>`;
  const max = taskMax(t);
  const badge = r ? `<span class="lxbadge ${r.pts === max ? 'full' : r.pts ? 'part' : 'zero'}">${r.pts} / ${max} ${lt('pts')}${t.type === 'self' ? ' · ' + lt('self_pts') : ''}</span>` : `<span class="lxbadge">${max} ${lt('pts')}</span>`;
  const checkBtn = t.type === 'self' ? '' : `<button class="btn primary" type="button" data-lxact="check" data-lx="${l}" data-t="${t.id}">${t.type === 'pprog' ? lt('run_tests') : lt('check')}</button>`;
  return `<article class="xt" id="xt-${t.id}">
    <header class="xt-h"><span class="xt-n">${lt('task')} ${idx + 1}</span><h3>${esc(L(t.title))}</h3>${badge}${reportLink({ area: 'Klausur ' + LX[l].title, id: t.id, name: L(t.title), answer: Object.entries(S.v).filter(([k]) => k.startsWith(t.id + ':')).map(([k, v]) => v).filter(Boolean).join(' | ') })}</header>
    <p>${esc(L(t.q))}</p>${body}
    <div class="row">${checkBtn}<button class="btn ${t.type === 'self' ? 'primary' : 'ghost'}" type="button" data-lxact="sol" data-lx="${l}" data-t="${t.id}">${showSol ? lt('hide') : lt('show')}</button></div>
    ${sol}</article>`;
}
function lxTotals(l) {
  const D = LX[l], S = lxS(l);
  const total = D.tasks.reduce((s, t) => s + taskMax(t), 0);
  const got = D.tasks.reduce((s, t) => s + (S.r[t.id] ? S.r[t.id].pts : 0), 0);
  const n = D.tasks.filter(t => S.r[t.id]).length;
  return { total, got, n, m: D.tasks.length };
}
function lxSummaryHTML(l) {
  const T = lxTotals(l), pct = T.total ? T.got / T.total : 0;
  return `<div class="lxsum"><div><div class="big">${lt('total', { p: T.got, t: T.total })}</div><div class="small muted">${lt('checked', { n: T.n, m: T.m })}</div></div>
    <div class="bar"><span style="width:${Math.round(pct * 100)}%"></span></div>
    <div class="row"><button class="btn" type="button" data-lxact="checkall" data-lx="${l}">${lt('checkall')}</button><button class="btn ghost" type="button" data-lxact="reset" data-lx="${l}">${lt('reset')}</button></div></div>`;
}
function playgroundHTML() {
  const S = lxS('prolog');
  const prog = S.v['pg:prog'] ?? FAM, q = S.v['pg:q'] ?? 'grossvater(hans, E)';
  const out = S.pg;
  let res = '';
  if (out) {
    if (out.error) res = `<div class="fb bad">${esc(plErr(out))}</div>`;
    else if (!out.answers.length) res = `<pre class="code">${lt('pg_noans')}</pre>`;
    else res = `<pre class="code">${esc(out.answers.map(fmtAns).join(' ;\n') + '.')}${out.more || out.limit ? '\n' + esc(lt('pg_more')) : ''}</pre>`;
  }
  return `<section class="tool" id="pg"><h3><span class="as">?-</span><span>${lt('pg_title')}</span></h3><p class="small muted">${lt('pg_txt')}</p>
    <label class="f" for="pg-prog"><span>${lt('pg_prog')}</span><textarea id="pg-prog" class="lxarea mono" rows="9" data-lx="prolog" data-t="pg" data-k="prog" spellcheck="false">${esc(prog)}</textarea></label>
    <div class="inline-in"><span class="mono">?-</span><input id="pg-q" class="mono" data-lx="prolog" data-t="pg" data-k="q" value="${esc(q)}" aria-label="${esc(lt('pg_query'))}" autocomplete="off" spellcheck="false"><button class="btn primary" type="button" data-lxact="pgrun" data-lx="prolog">${lt('pg_run')}</button></div>
    ${res}</section>`;
}
function renderLX(l) {
  const D = LX[l], box = document.getElementById('lx-' + l);
  if (!box) return;
  box.innerHTML = `<div class="page-h"><div class="kicker">${esc(L(D.kicker))}</div><h1 id="lx-${l}-title">${lt('h1', { l: D.title })}</h1><p class="lede">${esc(L(D.intro))}</p><p class="small muted">${lt('hub_hint')}</p></div>
    ${lxSummaryHTML(l)}
    <div class="xts">${D.tasks.map((tk, i) => taskHTML(l, tk, i)).join('')}</div>
    ${l === 'prolog' ? playgroundHTML() : ''}
    <div class="pager"><a class="btn" href="#${l}">← ${D.title}</a><a class="btn" href="#exam">${lt('overview')} →</a></div>`;
}
function rerenderTask(l, id) {
  const D = LX[l], i = D.tasks.findIndex(x => x.id === id), el = document.getElementById('xt-' + id);
  if (el && i >= 0) el.outerHTML = taskHTML(l, D.tasks[i], i);
  const sum = document.querySelector(`#lx-${l} .lxsum`); if (sum) sum.outerHTML = lxSummaryHTML(l);
}
function handleLX(e) {
  const b = e.target.closest('[data-lxact]'); if (!b) return;
  const l = b.dataset.lx, act = b.dataset.lxact, S = lxS(l), id = b.dataset.t;
  if (act === 'check') { const tk = LX[l].tasks.find(x => x.id === id); S.r[id] = gradeTask(l, tk); if (l !== 'mock') stRecordTask(tk, S.r[id]); rerenderTask(l, id); }
  else if (act === 'sol') { S.sol[id] = !S.sol[id]; const tk = LX[l].tasks.find(x => x.id === id); if (tk.type === 'self') S.r[id] = gradeTask(l, tk); rerenderTask(l, id); }
  else if (act === 'checkall') { LX[l].tasks.forEach(tk => { if (tk.type !== 'self' || S.sol[tk.id]) { S.r[tk.id] = gradeTask(l, tk); stRecordTask(tk, S.r[tk.id]); } }); renderLX(l); }
  else if (act === 'reset') { ST.LX[l] = { v: {}, r: {}, sol: {} }; renderLX(l); }
  else if (act === 'pgrun') { S.pg = PL.run(S.v['pg:prog'] ?? FAM, S.v['pg:q'] ?? 'grossvater(hans, E)'); const pg = document.getElementById('pg'); if (pg) pg.outerHTML = playgroundHTML(); }
  snapshot();
}
function handleLXInput(e) {
  const i = e.target.closest('[data-lx][data-k]'); if (!i) return;
  const l = i.dataset.lx, S = lxS(l), k = i.dataset.t + ':' + i.dataset.k;
  if (i.type === 'checkbox') {
    S.v[k] = i.checked ? '1' : '';
    const tk = LX[l].tasks.find(x => x.id === i.dataset.t);
    if (tk && tk.type === 'self') { S.r[tk.id] = gradeTask(l, tk); const badge = document.querySelector(`#xt-${tk.id} .lxbadge`); const r = S.r[tk.id]; if (badge) { badge.className = 'lxbadge ' + (r.pts === r.max ? 'full' : r.pts ? 'part' : 'zero'); badge.textContent = `${r.pts} / ${r.max} ${lt('pts')} · ${lt('self_pts')}`; } const sum = document.querySelector(`#lx-${l} .lxsum`); if (sum) sum.outerHTML = lxSummaryHTML(l); }
    if (tk && tk.type === 'unify') { const inp = document.querySelector(`[data-lx="${l}"][data-t="${tk.id}"][data-k="${i.dataset.k.slice(1)}"]`); if (inp) inp.disabled = i.checked; }
  } else if (i.type === 'radio') S.v[k] = i.value;
  else S.v[k] = i.value;
}

/* boot */
window.claude?.hot?.ready ? window.claude.hot.ready(start) : start(window.claude?.hot?.data ?? {});
