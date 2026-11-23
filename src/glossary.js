/* ================= Glossar DE ↔ EN =================
   [de, en, topic, definition de, definition en, link] */
const GLOSS = [
  ['Programmierparadigma', 'programming paradigm', 'gen', 'Grundlegender Denkstil beim Programmieren, etwa imperativ, objektorientiert, funktional oder logisch.', 'A basic style of thinking about programs, such as imperative, object-oriented, functional or logic.', '#prog'],
  ['imperative Programmierung', 'imperative programming', 'gen', 'Programme als Folge von Anweisungen, die den Zustand (die Variablen) Schritt für Schritt ändern.', 'Programs as a sequence of statements that change the state (the variables) step by step.', '#java'],
  ['deklarative Programmierung', 'declarative programming', 'gen', 'Man beschreibt, was gelten soll, nicht wie es berechnet wird. Funktionale und logische Sprachen sind deklarativ.', 'You describe what should hold, not how it is computed. Functional and logic languages are declarative.', '#prog'],
  ['Rekursion', 'recursion', 'gen', 'Eine Funktion oder ein Prädikat ruft sich selbst auf, mit einem kleineren Problem, bis ein Basisfall erreicht ist.', 'A function or predicate calls itself on a smaller problem until a base case is reached.', '#java'],
  ['Basisfall', 'base case', 'gen', 'Der Fall einer Rekursion, der ohne weiteren rekursiven Aufruf beantwortet wird, etwa die leere Liste.', 'The case of a recursion that is answered without a further recursive call, e.g. the empty list.', '#prolog'],
  ['Übersetzungszeit', 'compile time', 'gen', 'Der Zeitpunkt, zu dem der Compiler das Programm prüft. Hier wird zum Beispiel entschieden, welche überladene Methode gemeint ist.', 'When the compiler checks the program. This is where, for example, the overloaded method is chosen.', '#java'],
  ['Laufzeit', 'run time', 'gen', 'Der Zeitpunkt, zu dem das Programm ausgeführt wird. Hier wird zum Beispiel die überschreibende Methode ausgewählt.', 'When the program is executed. This is where, for example, the overriding method is selected.', '#java'],

  ['Zusicherung', 'assertion', 'hoare', 'Eine Formel ⟨φ⟩ zwischen zwei Programmzeilen, die an dieser Stelle in jedem Lauf gilt.', 'A formula ⟨φ⟩ between two program lines that holds at that point in every run.', '#hoare'],
  ['Vorbedingung', 'precondition', 'hoare', 'Die Zusicherung vor dem Programm: Was über die Eingaben vorausgesetzt wird.', 'The assertion before the program: what is assumed about the inputs.', '#hoare'],
  ['Nachbedingung', 'postcondition', 'hoare', 'Die Zusicherung nach dem Programm: Was das Programm garantiert.', 'The assertion after the program: what the program guarantees.', '#hoare'],
  ['Hoare-Tripel', 'Hoare triple', 'hoare', '⟨φ⟩ P ⟨ψ⟩: Gilt φ vor P und terminiert P, dann gilt danach ψ.', '⟨φ⟩ P ⟨ψ⟩: if φ holds before P and P terminates, then ψ holds afterwards.', '#hoare'],
  ['schwächste Vorbedingung', 'weakest precondition', 'hoare', 'Die allgemeinste Bedingung, unter der ein Programmstück die Nachbedingung herstellt. Für x = t ist sie ψ[x := t].', 'The most general condition under which a piece of code establishes the postcondition. For x = t it is ψ[x := t].', '#daily'],
  ['Zuweisungsregel', 'assignment rule', 'hoare', 'Vor x = t gilt die Nachbedingung, in der x durch t ersetzt ist. Man rechnet von unten nach oben.', 'Before x = t the postcondition holds with x replaced by t. You work from the bottom up.', '#hoare'],
  ['Konsequenzregel', 'consequence rule', 'hoare', 'Zwei Zusicherungen dürfen direkt untereinander stehen, wenn die untere aus der oberen folgt.', 'Two assertions may stand directly below each other if the lower one follows from the upper one.', '#hoare'],
  ['Schleifeninvariante', 'loop invariant', 'hoare', 'Eine Formel, die vor der Schleife gilt, von jedem Durchlauf erhalten wird und zusammen mit ¬B die Nachbedingung liefert.', 'A formula that holds before the loop, is preserved by every iteration and together with ¬B gives the postcondition.', '#practice'],
  ['Variante', 'variant', 'hoare', 'Ein ganzzahliger Ausdruck, der in der Schleife ≥ 0 ist und in jedem Durchlauf kleiner wird. Er beweist die Terminierung.', 'An integer expression that is ≥ 0 inside the loop and decreases in every iteration. It proves termination.', '#practice'],
  ['partielle Korrektheit', 'partial correctness', 'hoare', 'Wenn das Programm terminiert, dann gilt die Nachbedingung. Ob es terminiert, wird nicht gezeigt.', 'If the program terminates, the postcondition holds. Whether it terminates is not shown.', '#hoare'],
  ['totale Korrektheit', 'total correctness', 'hoare', 'Partielle Korrektheit plus Terminierung.', 'Partial correctness plus termination.', '#hoare'],
  ['Terminierung', 'termination', 'hoare', 'Das Programm hält nach endlich vielen Schritten an. Bei Schleifen zeigt man das mit einer Variante.', 'The program stops after finitely many steps. For loops this is shown with a variant.', '#hoare'],

  ['Klasse', 'class', 'java', 'Bauplan für Objekte: Sie legt Attribute und Methoden fest.', 'A blueprint for objects: it defines attributes and methods.', '#java'],
  ['Objekt', 'object', 'java', 'Ein Exemplar einer Klasse mit eigenen Attributwerten, erzeugt mit new.', 'An instance of a class with its own attribute values, created with new.', '#java'],
  ['Methode', 'method', 'java', 'Eine Funktion, die zu einer Klasse gehört.', 'A function that belongs to a class.', '#java'],
  ['Konstruktor', 'constructor', 'java', 'Spezielle Methode mit dem Namen der Klasse, die ein neues Objekt initialisiert.', 'A special method with the name of the class that initialises a new object.', '#java'],
  ['Reihung (Array)', 'array', 'java', 'Feste Anzahl von Elementen gleichen Typs, Zugriff über den Index ab 0.', 'A fixed number of elements of the same type, accessed by index from 0.', '#java'],
  ['Referenz', 'reference', 'java', 'Verweis auf ein Objekt oder Array. Variablen von Objekttypen speichern Referenzen, nicht das Objekt selbst.', 'A pointer to an object or array. Variables of object types store references, not the object itself.', '#exam-java'],
  ['Wertübergabe', 'call by value', 'java', 'Java übergibt immer eine Kopie des Werts. Bei Objekten ist das eine Kopie der Referenz.', 'Java always passes a copy of the value. For objects that is a copy of the reference.', '#exam-java'],
  ['Ganzzahldivision', 'integer division', 'java', 'Division zweier int-Werte; das Ergebnis wird in Richtung 0 abgeschnitten, 7 / 2 = 3.', 'Division of two int values; the result is truncated towards 0, 7 / 2 = 3.', '#daily'],
  ['Datenkapselung', 'encapsulation', 'java', 'Attribute werden mit private verborgen und nur über Methoden zugänglich gemacht.', 'Attributes are hidden with private and made accessible only through methods.', '#java'],
  ['Vererbung', 'inheritance', 'java', 'Eine Unterklasse übernimmt Attribute und Methoden ihrer Oberklasse (extends).', 'A subclass takes over the attributes and methods of its superclass (extends).', '#java'],
  ['Überschreiben', 'overriding', 'java', 'Eine Unterklasse definiert eine Methode mit derselben Signatur neu. Welche läuft, entscheidet die Laufzeit.', 'A subclass redefines a method with the same signature. Which one runs is decided at run time.', '#exam-java'],
  ['Überladen', 'overloading', 'java', 'Mehrere Methoden mit gleichem Namen, aber verschiedenen Parametertypen. Der Compiler wählt nach den statischen Typen.', 'Several methods with the same name but different parameter types. The compiler chooses by the static types.', '#exam-java'],
  ['dynamisches Binden', 'dynamic binding', 'java', 'Beim Aufruf wird die Methode des tatsächlichen Objekts ausgeführt, nicht die des Variablentyps.', 'On a call, the method of the actual object runs, not the one of the variable type.', '#exam-java'],
  ['abstrakte Klasse', 'abstract class', 'java', 'Eine Klasse, von der keine Objekte erzeugt werden können; sie kann abstrakte Methoden ohne Rumpf enthalten.', 'A class that cannot be instantiated; it may contain abstract methods without a body.', '#exam-java'],
  ['Schnittstelle (Interface)', 'interface', 'java', 'Eine Sammlung von Methodensignaturen, die Klassen mit implements umsetzen.', 'A collection of method signatures that classes implement with implements.', '#exam-java'],

  ['Funktion höherer Ordnung', 'higher-order function', 'haskell', 'Eine Funktion, die Funktionen als Argument nimmt oder zurückgibt, etwa map, filter oder foldr.', 'A function that takes or returns functions, such as map, filter or foldr.', '#haskell'],
  ['Typvariable', 'type variable', 'haskell', 'Platzhalter für einen beliebigen Typ, klein geschrieben wie a oder b.', 'A placeholder for any type, written in lower case like a or b.', '#haskell'],
  ['allgemeinster Typ', 'most general type', 'haskell', 'Der Typ, von dem alle anderen möglichen Typen eines Ausdrucks Spezialfälle sind.', 'The type of which all other possible types of an expression are special cases.', '#exam-haskell'],
  ['Typklasse', 'type class', 'haskell', 'Eine Menge von Typen mit gemeinsamen Funktionen, etwa Eq, Ord, Num. Steht als Einschränkung vor =>.', 'A set of types sharing functions, such as Eq, Ord, Num. Written as a constraint before =>.', '#haskell'],
  ['Polymorphie', 'polymorphism', 'haskell', 'Eine Funktion arbeitet für viele Typen, zum Beispiel length für Listen jeden Typs.', 'A function works for many types, for example length for lists of any type.', '#haskell'],
  ['Musterabgleich (Pattern Matching)', 'pattern matching', 'haskell', 'Die Gleichung wird nach der Form des Arguments ausgewählt, etwa [] oder (x:xs).', 'The equation is chosen by the shape of the argument, e.g. [] or (x:xs).', '#exam-haskell'],
  ['Bedarfsauswertung (Lazy Evaluation)', 'lazy evaluation', 'haskell', 'Ausdrücke werden erst ausgewertet, wenn ihr Wert gebraucht wird; so gehen auch unendliche Listen.', 'Expressions are evaluated only when their value is needed; this makes infinite lists possible.', '#exam-haskell'],
  ['Currying', 'currying', 'haskell', 'Funktionen nehmen ihre Argumente nacheinander: a -> b -> c statt (a, b) -> c.', 'Functions take their arguments one after another: a -> b -> c instead of (a, b) -> c.', '#haskell'],
  ['Listenkomprehension', 'list comprehension', 'haskell', 'Schreibweise wie [x * 2 | x <- xs, even x]: Generatoren und Filter erzeugen eine Liste.', 'Notation like [x * 2 | x <- xs, even x]: generators and filters build a list.', '#exam-haskell'],
  ['algebraischer Datentyp', 'algebraic data type', 'haskell', 'Eigener Typ mit data und Konstruktoren, etwa data Baum = Blatt | Knoten Baum Int Baum.', 'A custom type with data and constructors, e.g. data Baum = Blatt | Knoten Baum Int Baum.', '#exam-haskell'],
  ['Faltung (foldr, foldl)', 'fold', 'haskell', 'Fasst eine Liste mit einer Funktion zu einem Wert zusammen; foldr klammert von rechts, foldl von links.', 'Combines a list into one value with a function; foldr brackets from the right, foldl from the left.', '#exam-haskell'],

  ['Fakt', 'fact', 'prolog', 'Eine Klausel ohne Rumpf, die unbedingt gilt, etwa vater(hans, peter).', 'A clause without a body that holds unconditionally, e.g. vater(hans, peter).', '#prolog'],
  ['Regel', 'rule', 'prolog', 'Kopf :- Rumpf: Der Kopf gilt, wenn alle Teilziele des Rumpfs gelten.', 'Head :- body: the head holds if all subgoals of the body hold.', '#prolog'],
  ['Anfrage', 'query', 'prolog', '?- Ziel. Prolog sucht Belegungen der Variablen, für die das Ziel ableitbar ist.', '?- goal. Prolog searches for variable bindings under which the goal can be derived.', '#exam-prolog'],
  ['Term', 'term', 'prolog', 'Die Datenstruktur von Prolog: Konstante, Zahl, Variable oder zusammengesetzt wie f(a, X).', 'Prolog’s data structure: constant, number, variable or compound like f(a, X).', '#prolog'],
  ['Unifikation', 'unification', 'prolog', 'Zwei Terme durch eine Substitution der Variablen gleich machen.', 'Making two terms equal by substituting their variables.', '#exam-prolog'],
  ['allgemeinster Unifikator', 'most general unifier', 'prolog', 'Ein Unifikator, der nicht mehr festlegt als nötig; jeder andere ist ein Spezialfall davon.', 'A unifier that fixes no more than necessary; every other unifier is a special case of it.', '#exam-prolog'],
  ['Occurs-Check', 'occurs check', 'prolog', 'Prüft, dass eine Variable nicht an einen Term gebunden wird, der sie selbst enthält, wie X = f(X).', 'Checks that a variable is not bound to a term that contains it, like X = f(X).', '#daily'],
  ['Backtracking', 'backtracking', 'prolog', 'Scheitert ein Teilziel oder wird eine weitere Antwort verlangt, geht Prolog zur letzten Wahlmöglichkeit zurück.', 'When a subgoal fails or another answer is requested, Prolog goes back to the last choice point.', '#exam-prolog'],
  ['SLD-Resolution', 'SLD resolution', 'prolog', 'Prologs Beweisverfahren: Ziele von links nach rechts, Klauseln von oben nach unten.', 'Prolog’s proof procedure: goals left to right, clauses top to bottom.', '#prolog'],
  ['Closed World Assumption', 'closed-world assumption', 'prolog', 'Was nicht ableitbar ist, gilt als falsch.', 'Whatever cannot be derived is considered false.', '#exam-prolog']
];
const GLOSS_TOPICS = [['all', { de: 'Alle', en: 'All' }], ['gen', { de: 'Allgemein', en: 'General' }], ['hoare', { de: 'Hoare-Kalkül', en: 'Hoare logic' }], ['java', 'Java'], ['haskell', 'Haskell'], ['prolog', 'Prolog']];
let GL = { q: '', topic: 'all' };
function glNorm(s) { return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function renderGlossary() {
  const root = document.getElementById('glossary'); if (!root) return;
  const L2 = o => (o && typeof o === 'object') ? (o[lang] ?? o.de) : o;
  const q = glNorm(GL.q.trim());
  const rows = GLOSS.filter(g => (GL.topic === 'all' || g[2] === GL.topic) && (!q || glNorm(g[0] + ' ' + g[1] + ' ' + g[3] + ' ' + g[4]).includes(q)))
    .sort((a, b) => (lang === 'de' ? a[0] : a[1]).localeCompare(lang === 'de' ? b[0] : b[1], lang));
  const topicName = k => L2((GLOSS_TOPICS.find(t => t[0] === k) || [])[1]);
  const list = rows.map(g => `<div class="gl-row" role="listitem"><div class="gl-t"><b>${esc(lang === 'de' ? g[0] : g[1])}</b><span class="gl-o">${esc(lang === 'de' ? g[1] : g[0])}</span></div><p>${esc(lang === 'de' ? g[3] : g[4])}</p><div class="gl-m"><span class="gl-tag k-${g[2]}">${esc(topicName(g[2]))}</span><a href="${g[5]}">${lang === 'de' ? 'Zum Thema →' : 'Go to topic →'}</a></div></div>`).join('');
  const chips = GLOSS_TOPICS.map(([k, n]) => `<button type="button" class="gl-chip ${GL.topic === k ? 'on' : ''}" data-gt="${k}" aria-pressed="${GL.topic === k}">${esc(L2(n))}</button>`).join('');
  const cur = root.querySelector('#gl-q');
  if (!cur) {
    root.innerHTML = `<div class="gl-bar"><label class="gl-search"><span class="sr-only">${lang === 'de' ? 'Suchen' : 'Search'}</span><input id="gl-q" type="search" autocomplete="off" spellcheck="false"></label><div class="gl-chips" role="group"></div></div><p class="gl-count small muted" aria-live="polite"></p><div class="gl-list" role="list"></div>`;
  }
  const inp = root.querySelector('#gl-q'); inp.placeholder = lang === 'de' ? 'Begriff suchen, deutsch oder englisch …' : 'Search a term, German or English …';
  if (inp.value !== GL.q) inp.value = GL.q;
  root.querySelector('.gl-chips').innerHTML = chips;
  root.querySelector('.gl-list').innerHTML = list || `<p class="muted">${lang === 'de' ? 'Kein Begriff gefunden.' : 'No term found.'}</p>`;
  root.querySelector('.gl-count').textContent = lang === 'de' ? `${rows.length} von ${GLOSS.length} Begriffen` : `${rows.length} of ${GLOSS.length} terms`;
}
function initGlossary() {
  const root = document.getElementById('glossary'); if (!root) return;
  root.addEventListener('input', e => { if (e.target.id === 'gl-q') { GL.q = e.target.value; renderGlossary(); } });
  root.addEventListener('click', e => { const c = e.target.closest('[data-gt]'); if (c) { GL.topic = c.dataset.gt; renderGlossary(); const n = root.querySelector(`[data-gt="${GL.topic}"]`); if (n) n.focus(); } });
}
