
/* ---- conditionals & arrays ---- */
EX.push(
  { id: 'c1', group: 'ifarr', mode: 'given', level: 1,
    title: { de: 'Maximum zweier Zahlen', en: 'Maximum of two numbers' },
    story: { de: 'Keine Schleife, nur eine Fallunterscheidung. Du übst die Bedingungsregel 2: Beide Zweige müssen bei derselben Nachbedingung ankommen.', en: 'No loop, just a case distinction. You practise conditional rule 2: both branches must arrive at the same postcondition.' },
    vars: { x: [-3, 4], y: [-3, 4], m: [-3, 4] }, inputs: ['x', 'y'], sample: { x: 3, y: 1 },
    pre: 'true', init: [{ if: 'x > y', then: [['m', 'x']], else: [['m', 'y']] }],
    post: 'm >= x && m >= y && (m = x || m = y)',
    notes: {
      'imp-i0t': { de: 'Im then-Zweig gilt x > y. Dann sind x ≥ x und x ≥ y wahr, und x = x ist sowieso wahr.', en: 'In the then branch x > y holds. So x ≥ x and x ≥ y are true, and x = x is trivially true.' },
      'imp-i0e': { de: 'Im else-Zweig gilt ¬(x > y), also y ≥ x. Damit sind y ≥ x und y ≥ y wahr, und y = y gilt trivial.', en: 'In the else branch ¬(x > y) holds, i.e. y ≥ x. So y ≥ x and y ≥ y are true, and y = y holds trivially.' }
    } },
  { id: 'c2', group: 'ifarr', mode: 'given', level: 3,
    title: { de: 'Euklid: größter gemeinsamer Teiler', en: 'Euclid: greatest common divisor' },
    story: { de: 'Der klassische Euklid mit Subtraktion. X und Y sind die Eingaben und werden nie verändert. Im Rumpf steht ein if/else: Du rechnest jeden Zweig getrennt rückwärts.', en: 'Classic Euclid with subtraction. X and Y are the inputs and are never changed. The body is an if/else: you work backwards through each branch separately.' },
    vars: { X: [1, 7], Y: [1, 7], x: [-1, 8], y: [-1, 8] }, inputs: ['X', 'Y'], sample: { X: 12, Y: 18 },
    pre: 'X > 0 && Y > 0', init: [['x', 'X'], ['y', 'Y']], cond: 'x != y',
    body: [{ if: 'x > y', then: [['x', 'x - y']], else: [['y', 'y - x']] }],
    post: 'x = gcd(X, Y)', inv: 'x > 0 && y > 0 && gcd(x, y) = gcd(X, Y)', variant: 'x + y', varNeedsInv: true,
    notes: {
      'imp-b0t': { de: 'Aus x > y folgt x − y > 0, und y > 0 steht schon in I. Außerdem gilt gcd(x − y, y) = gcd(x, y): Jeder gemeinsame Teiler von x und y teilt auch x − y, und umgekehrt.', en: 'From x > y we get x − y > 0, and y > 0 is already in I. Moreover gcd(x − y, y) = gcd(x, y): every common divisor of x and y also divides x − y, and vice versa.' },
      'imp-b0e': { de: 'Aus x ≠ y und ¬(x > y) folgt y > x, also y − x > 0. Genauso gilt gcd(x, y − x) = gcd(x, y).', en: 'From x ≠ y and ¬(x > y) we get y > x, so y − x > 0. Likewise gcd(x, y − x) = gcd(x, y).' },
      exit: { de: 'Aus ¬(x ≠ y) folgt x = y. Dann ist gcd(x, y) = gcd(x, x) = x, und I liefert x = gcd(X, Y).', en: 'From ¬(x ≠ y) we get x = y. Then gcd(x, y) = gcd(x, x) = x, and I gives x = gcd(X, Y).' },
      'imp-i': { de: 'Nach dem Einsetzen steht da X > 0 ∧ Y > 0 ∧ gcd(X, Y) = gcd(X, Y). Das folgt direkt aus der Vorbedingung.', en: 'After substitution it reads X > 0 ∧ Y > 0 ∧ gcd(X, Y) = gcd(X, Y), which follows directly from the precondition.' }
    } },
  { id: 'a1', group: 'ifarr', mode: 'find', level: 2,
    title: { de: 'Array-Summe', en: 'Array sum' },
    story: { de: 'Die Summe aller Einträge eines Arrays. Bei Arrays beschreibt die Invariante den Teil a[0] … a[i − 1], der schon bearbeitet ist.', en: 'The sum of all entries of an array. With arrays, the invariant describes the part a[0] … a[i − 1] that has already been processed.' },
    vars: { i: [-1, 5], res: [-5, 9] }, arrays: { a: { maxLen: 4, range: [-1, 2] } }, inputs: ['a'], sample: { a: [3, -1, 4, 2] },
    pre: 'true', init: [['i', '0'], ['res', '0']], cond: 'i < a.length',
    body: [['res', 'res + a[i]'], ['i', 'i + 1']], post: 'res = sum(a, 0, a.length - 1)',
    inv: '0 <= i && i <= a.length && res = sum(a, 0, i - 1)', variant: 'a.length - i',
    cands: [
      { f: 'res = sum(a, 0, i)', note: { de: 'Um eins verschoben: Am Start ist res = 0, aber sum(a, 0, 0) = a[0].', en: 'Off by one: at the start res = 0, but sum(a, 0, 0) = a[0].' } },
      { f: 'i <= a.length && res = sum(a, 0, i - 1)', note: { de: 'Fast. Ohne 0 ≤ i erlaubt I den Wert i = −1, und dann ist a[i] im Rumpf gar nicht definiert.', en: 'Almost. Without 0 ≤ i, I allows i = −1, and then a[i] in the body is not even defined.' } },
      { f: '0 <= i && i <= a.length && res = sum(a, 0, i - 1)', ok: true, note: { de: 'res ist die Summe der ersten i Einträge, und i bleibt ein gültiger Index oder genau a.length.', en: 'res is the sum of the first i entries, and i stays a valid index or exactly a.length.' } },
      { f: 'res = sum(a, 0, a.length - 1)', note: { de: 'Das ist die Nachbedingung selbst. Am Start gilt sie nur, wenn die Summe zufällig 0 ist.', en: 'That is the postcondition itself. At the start it only holds if the sum happens to be 0.' } }
    ],
    hints: { de: ['sum(a, von, bis) steht für a[von] + … + a[bis]. Ist bis < von, ist die Summe 0.', 'Nach i Runden enthält res genau a[0] + … + a[i − 1].', 'Ergänze die Schranken 0 ≤ i und i ≤ a.length.'],
             en: ['sum(a, from, to) means a[from] + … + a[to]. If to < from, the sum is 0.', 'After i rounds res contains exactly a[0] + … + a[i − 1].', 'Add the bounds 0 ≤ i and i ≤ a.length.'] } },
  { id: 'a2', group: 'ifarr', mode: 'find', level: 3,
    title: { de: 'Maximum im Array', en: 'Maximum of an array' },
    story: { de: 'Array und if zusammen: m merkt sich das bisher größte Element. Das if hat keinen else-Zweig, also brauchst du die Bedingungsregel 1.', en: 'Array and if together: m remembers the largest element so far. The if has no else branch, so you need conditional rule 1.' },
    vars: { i: [-1, 5], m: [-2, 3] }, arrays: { a: { maxLen: 4, range: [-1, 2] } }, inputs: ['a'], sample: { a: [2, 5, 1, 7, 3] },
    pre: 'a.length >= 1', init: [['m', 'a[0]'], ['i', '1']], cond: 'i < a.length',
    body: [{ if: 'a[i] > m', then: [['m', 'a[i]']] }, ['i', 'i + 1']], post: 'm = max(a, 0, a.length - 1)',
    inv: '1 <= i && i <= a.length && m = max(a, 0, i - 1)', variant: 'a.length - i',
    cands: [
      { f: 'm = a[i - 1]', note: { de: 'm ist nicht immer das zuletzt gelesene Element, sondern das größte bisher.', en: 'm is not always the last element read, but the largest so far.' } },
      { f: '1 <= i && i <= a.length && m = max(a, 0, i - 1)', ok: true, note: { de: 'm ist das Maximum von a[0] … a[i − 1]. Wegen i ≥ 1 ist dieser Bereich nie leer.', en: 'm is the maximum of a[0] … a[i − 1]. Because i ≥ 1 this range is never empty.' } },
      { f: 'm = max(a, 0, i)', note: { de: 'Um eins verschoben: a[i] wurde noch nicht angeschaut.', en: 'Off by one: a[i] has not been looked at yet.' } },
      { f: 'i <= a.length && m >= a[0]', note: { de: 'Stimmt, ist aber viel zu schwach für die Nachbedingung.', en: 'True, but far too weak for the postcondition.' } }
    ],
    hints: { de: ['max(a, von, bis) ist das größte Element von a[von] … a[bis].', 'Nach dem Rumpf mit Index i ist m = max(a, 0, i). Danach wird i erhöht.', 'Ergänze 1 ≤ i ≤ a.length, damit der Bereich nie leer ist und am Ende i = a.length folgt.'],
             en: ['max(a, from, to) is the largest element of a[from] … a[to].', 'After the body for index i, m = max(a, 0, i). Then i is incremented.', 'Add 1 ≤ i ≤ a.length so the range is never empty and i = a.length follows at the end.'] } }
);

/* ---- exam-only tasks ---- */
const EXAM = [
  { id: 'k1', title: { de: 'Fakultät', en: 'Factorial' },
    vars: { n: [0, 6], i: [-1, 7], f: [-2, 30] }, inputs: ['n'], sample: { n: 4 },
    pre: 'n >= 0', init: [['i', '0'], ['f', '1']], cond: 'i < n',
    body: [['i', 'i + 1'], ['f', 'f * i']], post: 'f = fact(n)', inv: 'i <= n && f = fact(i)', variant: 'n - i' },
  { id: 'k2', title: { de: 'Zweierpotenz', en: 'Power of two' },
    vars: { n: [0, 6], k: [-1, 7], p: [-2, 70] }, inputs: ['n'], sample: { n: 5 },
    pre: 'n >= 0', init: [['k', 'n'], ['p', '1']], cond: 'k > 0',
    body: [['p', 'p * 2'], ['k', 'k - 1']], post: 'p = 2 ^ n', inv: 'k >= 0 && p * 2 ^ k = 2 ^ n', variant: 'k' },
  { id: 'k3', title: { de: 'Summe der Quadrate', en: 'Sum of squares' },
    vars: { n: [0, 6], i: [-1, 7], s: [-2, 95] }, inputs: ['n'], sample: { n: 4 },
    pre: 'n >= 0', init: [['i', '0'], ['s', '0']], cond: 'i < n',
    body: [['i', 'i + 1'], ['s', 's + i * i']], post: '6 * s = n * (n + 1) * (2 * n + 1)', inv: 'i <= n && 6 * s = i * (i + 1) * (2 * i + 1)', variant: 'n - i' }
];
