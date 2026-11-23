/* ===== Wikipedia links for technical terms (first occurrence per page and language) ===== */
// [German article, English article, German spellings, English spellings, optional views]
const WIKI = [
  ['Imperative Programmierung', 'Imperative programming', 'imperative|imperativ', 'imperative'],
  ['Objektorientierte Programmierung', 'Object-oriented programming', 'objektorientierte Programmierung|objektorientierte|objektorientiert', 'object-oriented'],
  ['Funktionale Programmierung', 'Functional programming', 'funktionale Programmierung|funktionale|funktional', 'functional programming|functional'],
  ['Logische Programmierung', 'Logic programming', 'logische Programmierung|logische|logisch', 'logic programming|logic-based|logic'],
  ['Deklarative Programmierung', 'Declarative programming', 'deklarativen|deklarative', 'declarative'],
  ['Hoare-Kalkül', 'Hoare logic', 'Hoare-Kalküls|Hoare-Kalkül', 'Hoare logic'],
  ['Formale Verifikation', 'Formal verification', 'Programmverifikation|Verifikation', 'program verification|verification'],
  ['Schleifeninvariante', 'Loop invariant', 'Schleifeninvarianten|Schleifeninvariante', 'loop invariants|loop invariant'],
  ['Zusicherung', 'Assertion (software development)', 'Zusicherungen|Zusicherung', 'assertions|assertion'],
  ['Vorbedingung', 'Precondition', 'Vorbedingung', 'precondition'],
  ['Nachbedingung', 'Postcondition', 'Nachbedingung', 'postcondition'],
  ['Korrektheit (Informatik)', 'Correctness (computer science)', 'partielle Korrektheit|totale Korrektheit', 'partial correctness|total correctness'],
  ['Terminierung (Informatik)', 'Termination analysis', 'Terminierung', 'termination'],
  ['Rekursion', 'Recursion (computer science)', 'Rekursion', 'recursion'],
  ['Vollständige Induktion', 'Mathematical induction', 'vollständige Induktion|Induktion', 'mathematical induction|induction'],
  ['Weakest Precondition', 'Predicate transformer semantics', 'schwächste Vorbedingung', 'weakest precondition'],
  ['Off-by-one-Error', 'Off-by-one error', 'Off-by-one-Fehler', 'off-by-one errors|off-by-one error'],
  ['Ariane 5', 'Ariane 5', 'Ariane 5', 'Ariane 5'],
  ['Gleitkommazahl', 'Floating-point arithmetic', 'Gleitkommazahl', 'floating-point'],
  ['SeL4', 'SeL4', 'seL4', 'seL4'],
  ['Dafny', 'Dafny', 'Dafny', 'Dafny'], ['Frama-C', 'Frama-C', 'Frama-C', 'Frama-C'], ['Why3', 'Why3', 'Why3', 'Why3'], ['KeY', 'KeY', 'KeY', 'KeY'],
  ['Alan Turing', 'Alan Turing', 'Alan Turing|Turing', 'Alan Turing|Turing'],
  ['Robert W. Floyd', 'Robert W. Floyd', 'Robert W. Floyd|Floyd', 'Robert W. Floyd|Floyd'],
  ['Tony Hoare', 'Tony Hoare', 'C. A. R. (Tony) Hoare|Tony Hoare', 'C. A. R. (Tony) Hoare|Tony Hoare'],
  ['Edsger W. Dijkstra', 'Edsger W. Dijkstra', 'Edsger W. Dijkstra|Edsger Dijkstra|Dijkstra', 'Edsger W. Dijkstra|Edsger Dijkstra|Dijkstra'],
  ['Quicksort', 'Quicksort', 'Quicksort', 'Quicksort'],
  ['Turing Award', 'Turing Award', 'Turing Award', 'Turing Award'],
  ['Communications of the ACM', 'Communications of the ACM', 'Communications of the ACM', 'Communications of the ACM'],
  ['Flussdiagramm', 'Flowchart', 'Flussdiagrammen|Flussdiagramm', 'flowcharts|flowchart'],
  ['Bytecode', 'Bytecode', 'Bytecode', 'bytecode'],
  ['Java Virtual Machine', 'Java virtual machine', 'Java Virtual Machine|JVM', 'Java Virtual Machine|JVM'],
  ['Garbage Collection', 'Garbage collection (computer science)', 'automatischer Speicherbereinigung|Speicherbereinigung', 'garbage collection'],
  ['Zeiger (Informatik)', 'Pointer (computer programming)', 'Zeigerarithmetik', 'pointer arithmetic'],
  ['James Gosling', 'James Gosling', 'James Gosling|Gosling', 'James Gosling|Gosling'],
  ['Patrick Naughton', 'Patrick Naughton', 'Patrick Naughton', 'Patrick Naughton'],
  ['Sun Microsystems', 'Sun Microsystems', 'Sun Microsystems', 'Sun Microsystems'],
  ['Set-Top-Box', 'Set-top box', 'Set-Top-Boxen|Set-Top-Box', 'set-top boxes|set-top box'],
  ['World Wide Web', 'World Wide Web', 'Web', 'web'],
  ['Netscape Navigator', 'Netscape Navigator', 'Netscape Navigator', 'Netscape Navigator'],
  ['OpenJDK', 'OpenJDK', 'OpenJDK', 'OpenJDK'],
  ['GNU General Public License', 'GNU General Public License', 'GPL', 'GPL'],
  ['Oracle Corporation', 'Oracle Corporation', 'Oracle', 'Oracle'],
  ['Generische Programmierung', 'Generics in Java', 'Generische Typen', 'Generics'],
  ['Anonyme Funktion', 'Anonymous function', 'Lambda-Ausdrücke', 'Lambda expressions'],
  ['Long Term Support', 'Long-term support', 'Langzeitunterstützung', 'long-term support'],
  ['Thread (Informatik)', 'Thread (computing)', 'Virtuelle Threads', 'Virtual threads'],
  ['Post-Quanten-Kryptographie', 'Post-quantum cryptography', 'Post-Quanten-Kryptografie', 'post-quantum cryptography'],
  ['Android (Betriebssystem)', 'Android (operating system)', 'Android', 'Android'],
  ['Kotlin (Programmiersprache)', 'Kotlin (programming language)', 'Kotlin', 'Kotlin'],
  ['Spring (Framework)', 'Spring Boot', 'Spring Boot', 'Spring Boot'],
  ['Jakarta EE', 'Jakarta EE', 'Jakarta EE', 'Jakarta EE'],
  ['Apache Hadoop', 'Apache Hadoop', 'Hadoop', 'Hadoop'], ['Apache Kafka', 'Apache Kafka', 'Kafka', 'Kafka'], ['Apache Spark', 'Apache Spark', 'Spark', 'Spark'],
  ['Microservices', 'Microservices', 'Microservices', 'microservices'],
  ['Backend', 'Frontend and backend', 'Web-Backends|Backend', 'backends|backend'],
  ['TIOBE-Index', 'TIOBE index', 'TIOBE-Index', 'TIOBE index'],
  ['C++', 'C++', 'C++', 'C++'], ['C (Programmiersprache)', 'C (programming language)', 'C', 'C', ['java']],
  ['Python (Programmiersprache)', 'Python (programming language)', 'Python', 'Python'],
  ['Rust (Programmiersprache)', 'Rust (programming language)', 'Rust', 'Rust'],
  ['Swift (Programmiersprache)', 'Swift (programming language)', 'Swift', 'Swift'],
  ['Miranda (Programmiersprache)', 'Miranda (programming language)', 'Miranda', 'Miranda'],
  ['Lazy Evaluation', 'Lazy evaluation', 'Lazy Evaluation|lazy', 'lazy evaluation|lazily|lazy'],
  ['Haskell Brooks Curry', 'Haskell Curry', 'Haskell Curry', 'Haskell Curry'],
  ['Typinferenz', 'Type inference', 'Typinferenz', 'type inference'],
  ['Typklasse (Informatik)', 'Type class', 'Typklassen', 'type classes'],
  ['Monade (Informatik)', 'Monad (functional programming)', 'Monaden', 'monads'],
  ['Glasgow Haskell Compiler', 'Glasgow Haskell Compiler', 'Glasgow Haskell Compilers|Glasgow Haskell Compiler|GHC', 'Glasgow Haskell Compiler|GHC'],
  ['Pandoc', 'Pandoc', 'Pandoc', 'Pandoc'], ['ShellCheck', 'ShellCheck', 'ShellCheck', 'ShellCheck'],
  ['Cardano (Blockchain)', 'Cardano (blockchain platform)', 'Cardano', 'Cardano'],
  ['Blockchain', 'Blockchain', 'Blockchain-Plattformen|Blockchain', 'blockchain platforms|blockchain'],
  ['Standard Chartered', 'Standard Chartered', 'Standard Chartered', 'Standard Chartered'],
  ['ABN AMRO', 'ABN AMRO', 'ABN AMRO', 'ABN AMRO'],
  ['Kontrahentenrisiko', 'Credit risk', 'Kontrahentenrisiken', 'counterparty risk'],
  ['Groq', 'Groq', 'Groq', 'Groq'],
  ['Funktion höherer Ordnung', 'Higher-order function', 'Funktionen höherer Ordnung|Funktion höherer Ordnung', 'higher-order functions|higher-order function'],
  ['Pattern Matching', 'Pattern matching', 'Pattern Matching|Mustern', 'pattern matching|patterns'],
  ['Wirkung (Informatik)', 'Side effect (computer science)', 'Seiteneffekte', 'side effects'],
  ['Typsystem', 'Type system', 'Typsystem', 'type system'],
  ['Alain Colmerauer', 'Alain Colmerauer', 'Alain Colmerauer', 'Alain Colmerauer'],
  ['Philippe Roussel', 'Philippe Roussel', 'Philippe Roussel', 'Philippe Roussel'],
  ['Robert Kowalski', 'Robert Kowalski', 'Robert Kowalskis|Robert Kowalski', 'Robert Kowalski’s|Robert Kowalski'],
  ['David H. D. Warren', 'David H. D. Warren', 'David H. D. Warren', 'David H. D. Warren'],
  ['Frage-Antwort-System', 'Question answering', 'Frage-Antwort-System', 'question-answering system'],
  ['Natürliche Sprache', 'Natural language', 'natürliche Sprache|natürlicher Sprache', 'natural language'],
  ['Horn-Formel', 'Horn clause', 'Horn-Klauseln', 'Horn clauses'],
  ['Unifikation (Logik)', 'Unification (computer science)', 'Unifikation', 'unification'],
  ['Resolution (Logik)', 'Resolution (logic)', 'Resolution', 'resolution'],
  ['Backtracking', 'Backtracking', 'Backtracking', 'backtracking'],
  ['Compiler', 'Compiler', 'Compiler', 'compiler'],
  ['Fifth Generation Computer Systems', 'Fifth Generation Computer Systems', 'FGCS', 'FGCS'],
  ['Warren Abstract Machine', 'Warren Abstract Machine', 'Warren Abstract Machine', 'Warren Abstract Machine'],
  ['SWI-Prolog', 'SWI-Prolog', 'SWI-Prolog', 'SWI-Prolog'], ['SICStus Prolog', 'SICStus Prolog', 'SICStus', 'SICStus'],
  ['Internationale Organisation für Normung', 'ISO/IEC 13211', 'Internationaler Standard', 'International standard'],
  ['Definite Clause Grammar', 'Definite clause grammar', 'DCG', 'DCG'],
  ['Watson (Künstliche Intelligenz)', 'IBM Watson', 'IBM Watson', 'IBM Watson'],
  ['Jeopardy!', 'Jeopardy!', 'Jeopardy!', 'Jeopardy!'],
  ['Regelbasiertes System', 'Rule-based system', 'Regelbasierte Systeme', 'Rule-based systems'],
  ['Formale Methode', 'Formal methods', 'Formale Methoden', 'Formal methods'],
  ['Model Checking', 'Model checking', 'Modellprüfer', 'model checker'],
  ['Typprüfung', 'Type checking', 'Typprüfung', 'type checking'],
  ['Constraintprogrammierung', 'Constraint programming', 'Constraint-Programmierung', 'Constraint programming'],
  ['Datalog', 'Datalog', 'Datalog', 'Datalog'],
  ['Datenbank', 'Database', 'Datenbanken', 'databases'],
  ['Programmanalyse', 'Program analysis', 'Programmanalyse', 'program analysis'],
  // first year overview
  ['Zahlendarstellung', 'Numeral system', 'Zahlendarstellung', 'number representation', ['plan']],
  ['Schaltnetz', 'Combinational logic', 'Schaltnetze', 'combinational', ['plan']],
  ['Schaltwerk', 'Sequential logic', 'Schaltwerke', 'sequential circuits', ['plan']],
  ['Menge (Mathematik)', 'Set (mathematics)', 'Mengen', 'Sets', ['plan']],
  ['Relation (Mathematik)', 'Relation (mathematics)', 'Relationen', 'relations', ['plan']],
  ['Kombinatorik', 'Combinatorics', 'Kombinatorik', 'combinatorics', ['plan']],
  ['Graph (Graphentheorie)', 'Graph theory', 'Graphen', 'graphs', ['plan']],
  ['Folge (Mathematik)', 'Sequence', 'Folgen', 'Sequences', ['plan']],
  ['Reihe (Mathematik)', 'Series (mathematics)', 'Reihen', 'series', ['plan']],
  ['Stetige Funktion', 'Continuous function', 'Stetigkeit', 'continuity', ['plan']],
  ['Infinitesimalrechnung', 'Calculus', 'Differential- und Integralrechnung', 'differential and integral calculus', ['plan']],
  ['Sortierverfahren', 'Sorting algorithm', 'Sortieren', 'Sorting', ['plan']],
  ['Baum (Datenstruktur)', 'Tree (abstract data type)', 'Bäume', 'trees', ['plan']],
  ['Hashtabelle', 'Hash table', 'Hashing', 'hashing', ['plan']],
  ['Graphentheorie', 'Graph traversal', 'Graphalgorithmen', 'graph algorithms', ['plan']],
  ['Automat (Informatik)', 'Automata theory', 'Automaten', 'Automata', ['plan']],
  ['Reguläre Sprache', 'Regular language', 'reguläre Sprachen', 'regular languages', ['plan']],
  ['Formale Grammatik', 'Formal grammar', 'Grammatiken', 'grammars', ['plan']],
  ['Petri-Netz', 'Petri net', 'Petrinetze', 'Petri nets', ['plan']],
  ['Vektorraum', 'Vector space', 'Vektorräume', 'Vector spaces', ['plan']],
  ['Lineare Abbildung', 'Linear map', 'lineare Abbildungen', 'linear maps', ['plan']],
  ['Matrix (Mathematik)', 'Matrix (mathematics)', 'Matrizen', 'matrices', ['plan']],
  ['Eigenwertproblem', 'Eigenvalues and eigenvectors', 'Eigenwerte', 'eigenvalues', ['plan']],
  ['Prozess (Informatik)', 'Process (computing)', 'Prozesse', 'Processes', ['plan']],
  ['Speicherverwaltung', 'Memory management', 'Speicherverwaltung', 'memory management', ['plan']],
  ['Synchronisation (Informatik)', 'Synchronization (computer science)', 'Synchronisation', 'synchronisation', ['plan']],
  ['Dateisystem', 'File system', 'Dateisysteme', 'file systems', ['plan']]
];
const WIKI_VIEWS = ['plan', 'prog', 'java', 'haskell', 'prolog', 'hoare'];
const WIKI_SKIP = 'a,button,code,pre,nav,h1,h2,h3,label,input,textarea,select,.prog,.kicker,.facts,.chips,.pill,.crumbs,.syntax,.tag,.triple,.hero-demo,.frac,.part-card,.lang-box .lb-h,.tool .fields,#bw-out,#tr-table,#tr-prog,.ch-h,.cn,.num';
const wikiUrl = (l, title) => `https://${l}.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(title)}&go=Go`;
function buildWikiMatchers() {
  const out = {};
  for (const l of ['de', 'en']) {
    const map = new Map(), pats = [];
    WIKI.forEach((e, i) => (l === 'de' ? e[2] : e[3]).split('|').forEach(p => { const k = p.toLowerCase(); if (!map.has(k)) { map.set(k, i); pats.push(p); } }));
    pats.sort((a, b) => b.length - a.length);
    const alt = pats.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    out[l] = { re: new RegExp(`(?<![\\p{L}\\p{N}_-])(${alt})(?![\\p{L}\\p{N}_]|-[\\p{L}])`, 'giu'), map };
  }
  return out;
}
function autoWiki() {
  const M = buildWikiMatchers();
  for (const v of WIKI_VIEWS) {
    const root = document.getElementById('view-' + v); if (!root) continue;
    const used = new Set();
    root.querySelectorAll('a.wiki').forEach(a => { if (a.dataset.term) used.add(a.dataset.term); });
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => (!n.nodeValue.trim() || n.parentElement.closest(WIKI_SKIP)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    const nodes = []; let n; while ((n = walker.nextNode())) nodes.push(n);
    for (const node of nodes) {
      const langEl = node.parentElement.closest('.de, .en');
      const neutral = !langEl && !node.parentElement.closest('.chapters');
      const l = langEl ? (langEl.classList.contains('en') ? 'en' : 'de') : 'de';
      const { re, map } = M[l]; const text = node.nodeValue;
      re.lastIndex = 0;
      let m, last = 0; const frag = document.createDocumentFragment(); let changed = false;
      while ((m = re.exec(text))) {
        const idx = map.get(m[1].toLowerCase()); if (idx === undefined) continue;
        const e = WIKI[idx]; if (e[4] && !e[4].includes(v)) continue;
        const key = l + ':' + idx; if (used.has(key) || (neutral && used.has('en:' + idx))) continue;
        used.add(key); if (neutral) used.add('en:' + idx); changed = true;
        frag.append(text.slice(last, m.index));
        const a = document.createElement('a');
        const title = l === 'de' ? e[0] : e[1];
        a.className = 'wiki'; a.href = wikiUrl(l, title); a.target = '_blank'; a.rel = 'noopener'; a.dataset.term = key;
        a.title = 'Wikipedia: ' + title; a.textContent = m[1];
        if (neutral) { a.classList.add('wiki-n'); a.dataset.de = e[0]; a.dataset.en = e[1]; }
        frag.append(a); last = m.index + m[1].length;
      }
      if (changed) { frag.append(text.slice(last)); node.replaceWith(frag); }
    }
  }
}

function wikiLang() {
  document.querySelectorAll('a.wiki-n').forEach(a => { const title = a.dataset[lang] || a.dataset.de; a.href = wikiUrl(lang, title); a.title = 'Wikipedia: ' + title; });
}
