/* ================= first-visit tour ================= */
const TT = {
  de: {
    mob: 'Auf dem Handy findest du sie im Menü unter Programmierung.', next: 'Weiter', back: 'Zurück', skip: 'Überspringen', start: 'Tour starten', done_daily: 'Mit Täglich anfangen →', done_look: 'Selbst umsehen', of: '{i} von {n}', btn: 'Tour starten',
    s: [
      ['Willkommen im Hoare Lab', 'Eine unabhängige Lernhilfe für das erste Jahr Informatik an der RWTH Aachen, mit Schwerpunkt auf Programmierung und dem Hoare-Kalkül. In einer Minute zeigen wir dir, was es hier gibt.'],
      ['Deutsch oder Englisch', 'Alle Inhalte gibt es in beiden Sprachen. Du kannst jederzeit wechseln, auch mitten in einer Aufgabe.'],
      ['Das erste Studienjahr', 'Die Übersicht aller Module im 1. und 2. Semester, mit den Dozent:innen und ihren Kontaktseiten.'],
      ['Programmierung', 'Das Herz des Hoare Lab: je eine Seite zu Java, Haskell und Prolog, die Lektion zum Hoare-Kalkül, ein Wochenplan für das Semester und Links zum Weiterlernen.'],
      ['Täglich 5 Minuten', 'Jeden Tag fünf kurze Aufgaben aus allen Themen. Was du falsch machst, kommt nach 1, 3, 7 und 14 Tagen wieder, und die Flamme zählt deine Serie.'],
      ['Semester auf einen Blick', 'Der Kalender zeigt, was in welcher Woche dran ist. Als .ics-Datei übernimmst du ihn in Google, Apple oder Outlook.'],
      ['Übungen', 'Geführte Aufgaben zum Hoare-Kalkül, Schritt für Schritt: mit gegebener Invariante oder mit einer, die du selbst findest.'],
      ['Klausur', 'Klausur-Trainings für Hoare, Java, Haskell und Prolog, mit sofortiger Korrektur und Punktzahl. Dazu eine komplette Probeklausur aus allen vier Teilen mit Zeitlimit und geschätzter Note; unter „Fortschritt“ siehst du deine Schwächen.'],
      ['Tour wiederholen', 'Über das Fragezeichen startest du diese Tour jederzeit neu.'],
      ['Dein Fortschritt gehört dir', 'Es gibt keine Anmeldung: Was du übst, bleibt in diesem Browser. Mit einem QR-Code nimmst du es auf ein anderes Gerät mit. Viel Erfolg im Semester!']
    ]
  },
  en: {
    mob: 'On a phone you find them in the menu under Programmierung.', next: 'Next', back: 'Back', skip: 'Skip', start: 'Start the tour', done_daily: 'Start with Daily →', done_look: 'Look around', of: '{i} of {n}', btn: 'Take the tour',
    s: [
      ['Welcome to Hoare Lab', 'An independent study aid for the first year of computer science at RWTH Aachen, focused on Programmierung and Hoare logic. In one minute we show you what is here.'],
      ['German or English', 'Everything is available in both languages. You can switch at any time, even in the middle of a task.'],
      ['The first year', 'An overview of all modules in semesters 1 and 2, with the lecturers and their contact pages.'],
      ['Programmierung', 'The heart of Hoare Lab: one page each for Java, Haskell and Prolog, the Hoare logic lesson, a week-by-week plan for the semester and links to learn more.'],
      ['5 minutes a day', 'Five short tasks a day across all topics. Whatever you get wrong comes back after 1, 3, 7 and 14 days, and the flame counts your streak.'],
      ['The semester at a glance', 'The calendar shows what is covered in which week. As an .ics file you can add it to Google, Apple or Outlook.'],
      ['Exercises', 'Guided Hoare logic tasks, step by step: with a given invariant or with one you find yourself.'],
      ['Exam', 'Exam trainings for Hoare, Java, Haskell and Prolog, with instant grading and a score. Plus a complete practice exam from all four parts, timed and with an estimated grade; “Progress” shows your weak spots.'],
      ['Take the tour again', 'Use the question mark to restart this tour at any time.'],
      ['Your progress is yours', 'There is no sign-in: what you practise stays in this browser. A QR code takes it to another device. Good luck with the semester!']
    ]
  }
};
const TOUR_TARGETS = [null, '.lang', 'nav.views a[data-view="plan"]', 'nav.views a[data-view="prog"]', 'nav.views a[data-view="daily"]', '#cal-btn', 'nav.views a[data-view="practice"]', 'nav.views a[data-view="exam"]', '#tour-btn', null];
const TKEY = 'hoarelab-tour';
let TOUR = { i: -1, el: null, prevFocus: null };
const ttx = (k, rep) => { let s = TT[lang][k] ?? TT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
function tourSeen() { try { return localStorage.getItem(TKEY) === 'done'; } catch (e) { return false; } }
function tourMark() { try { localStorage.setItem(TKEY, 'done'); } catch (e) {} }
function tourTarget(i) {
  const sel = TOUR_TARGETS[i]; if (!sel) return null;
  const el = document.querySelector(sel); if (!el) return null;
  const r = el.getBoundingClientRect(), cs = getComputedStyle(el);
  if (!r.width || !r.height || cs.display === 'none' || cs.visibility === 'hidden') return null;
  return el;
}
function tourBuild() {
  if (TOUR.el) return TOUR.el;
  const root = document.createElement('div');
  root.className = 'tour'; root.innerHTML = `<div class="tour-hole" aria-hidden="true"></div><div class="tour-card" role="dialog" aria-modal="true" aria-labelledby="tour-h" aria-describedby="tour-b"></div>`;
  document.body.appendChild(root);
  root.addEventListener('click', e => {
    const l = e.target.closest('[data-tlang]'); if (l) { setLang(l.dataset.tlang); const q = root.querySelector(`[data-tlang="${l.dataset.tlang}"]`); if (q) q.focus(); return; }
    const b = e.target.closest('[data-tour]'); if (!b) return;
    const a = b.dataset.tour;
    if (a === 'next') tourGo(TOUR.i + 1); else if (a === 'back') tourGo(TOUR.i - 1);
    else if (a === 'skip' || a === 'look') tourEnd();
    else if (a === 'daily') { tourEnd(); location.hash = '#daily'; }
  });
  root.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); tourEnd(); }
    else if (e.key === 'ArrowRight' && TOUR.i < TT.de.s.length - 1) { e.preventDefault(); tourGo(TOUR.i + 1); }
    else if (e.key === 'ArrowLeft' && TOUR.i > 0) { e.preventDefault(); tourGo(TOUR.i - 1); }
    else if (e.key === 'Tab') { // keep focus inside the card
      const f = [...root.querySelectorAll('.tour-card button')]; if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  addEventListener('resize', () => { if (TOUR.i >= 0) tourPlace(); });
  TOUR.el = root; return root;
}
function tourCardHTML(i) {
  const n = TT.de.s.length, last = i === n - 1; let [h, b] = TT[lang].s[i];
  if (TOUR_TARGETS[i] && !tourTarget(i) && /practice|exam/.test(TOUR_TARGETS[i])) b += ' ' + ttx('mob');
  const dots = TT.de.s.map((_, j) => `<i class="${j === i ? 'on' : j < i ? 'past' : ''}"></i>`).join('');
  let btns;
  if (i === 0) btns = `<button type="button" class="btn ghost" data-tour="skip">${esc(ttx('skip'))}</button><button type="button" class="btn primary" data-tour="next">${esc(ttx('start'))}</button>`;
  else if (last) btns = `<button type="button" class="btn ghost" data-tour="look">${esc(ttx('done_look'))}</button><button type="button" class="btn primary" data-tour="daily">${esc(ttx('done_daily'))}</button>`;
  else btns = `<button type="button" class="btn ghost" data-tour="back">${esc(ttx('back'))}</button><button type="button" class="btn primary" data-tour="next">${esc(ttx('next'))}</button>`;
  return `${i > 0 && !last ? `<button type="button" class="tour-x" data-tour="skip" aria-label="${esc(ttx('skip'))}">✕</button>` : ''}
    ${i === 0 || last ? `<div class="tour-logo" aria-hidden="true">⟨⟩</div>` : ''}
    <h2 id="tour-h">${esc(h)}</h2><p id="tour-b">${esc(b)}</p>
    ${i <= 1 ? `<div class="tour-lang" role="group" aria-label="Sprache / Language"><button type="button" data-tlang="de" aria-pressed="${lang === 'de'}">Deutsch</button><button type="button" data-tlang="en" aria-pressed="${lang === 'en'}">English</button></div>` : ''}
    <div class="tour-foot"><span class="tour-dots" aria-label="${esc(ttx('of', { i: i + 1, n }))}">${dots}</span><span class="tour-btns">${btns}</span></div>`;
}
function tourPlace() {
  const root = TOUR.el, hole = root.querySelector('.tour-hole'), card = root.querySelector('.tour-card');
  const t = tourTarget(TOUR.i);
  document.querySelectorAll('.tour-lit').forEach(x => x.classList.remove('tour-lit'));
  if (!t) { root.classList.add('center'); hole.style.cssText = ''; card.style.cssText = ''; return; }
  root.classList.remove('center'); t.classList.add('tour-lit');
  const r = t.getBoundingClientRect(), pad = 6;
  hole.style.cssText = `left:${r.left - pad}px;top:${r.top - pad}px;width:${r.width + pad * 2}px;height:${r.height + pad * 2}px`;
  const cw = Math.min(360, innerWidth - 24), ch = card.offsetHeight;
  let left = r.left + r.width / 2 - cw / 2; left = Math.max(12, Math.min(left, innerWidth - cw - 12));
  let top = r.bottom + pad + 14, above = false;
  if (top + ch > innerHeight - 12) { top = Math.max(12, r.top - pad - 14 - ch); above = true; }
  const arrow = Math.max(18, Math.min(cw - 18, r.left + r.width / 2 - left));
  card.style.cssText = `left:${left}px;top:${top}px;width:${cw}px;--arrow:${arrow}px`;
  card.classList.toggle('above', above);
}
function tourGo(i) {
  const n = TT.de.s.length; if (i < 0 || i >= n) return;
  TOUR.i = i; const root = tourBuild(), card = root.querySelector('.tour-card');
  card.innerHTML = tourCardHTML(i);
  root.classList.add('on');
  tourPlace();
  const p = card.querySelector('.btn.primary'); if (p) p.focus({ preventScroll: true });
}
function tourStart() {
  if (TOUR.i >= 0) return;
  try { const d = document.getElementById('cal-dlg'); if (d && d.open) d.close(); } catch (e) {}
  TOUR.prevFocus = document.activeElement;
  window.scrollTo(0, 0);
  document.body.classList.add('touring');
  tourGo(0);
}
function tourEnd() {
  tourMark();
  if (TOUR.el) TOUR.el.classList.remove('on');
  document.querySelectorAll('.tour-lit').forEach(x => x.classList.remove('tour-lit'));
  document.body.classList.remove('touring');
  TOUR.i = -1;
  const b = document.getElementById('tour-btn'); if (b) b.focus({ preventScroll: true });
}
function tourLang() { if (TOUR.i >= 0) tourGo(TOUR.i); const b = document.getElementById('tour-btn'); if (b) b.setAttribute('aria-label', ttx('btn')); }
function initTour() {
  const b = document.getElementById('tour-btn');
  if (b) { b.addEventListener('click', tourStart); b.setAttribute('aria-label', ttx('btn')); }
  if (!tourSeen() && !DIMPORTED && !location.hash.startsWith('#import=')) setTimeout(tourStart, 500);
}
