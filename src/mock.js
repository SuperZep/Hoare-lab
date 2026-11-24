/* ================= Probeklausur: mixed full exam ================= */
const MKT = {
  de: { kicker: 'Klausur · alle Teile', title: 'Probeklausur', lede: 'Eine komplette Klausur aus allen vier Teilen: Hoare-Kalkül, Java, Haskell und Prolog. Jede Probeklausur wird neu zusammengestellt; ausgewertet wird erst beim Abgeben, wie in der echten Klausur.',
        start: 'Probeklausur starten', timed: 'Mit Zeitlimit ({m} Minuten)', rules: 'Während der Bearbeitung gibt es keine Rückmeldung. Nach dem Abgeben siehst du Punkte pro Teil, eine geschätzte Note, alle Lösungen und deine typischen Fehler. Dein Stand wird im Browser gespeichert, du kannst die Seite also auch neu laden.',
        resume: 'Weiterschreiben', discard: 'Verwerfen und neu beginnen', running: 'Eine Probeklausur ist noch offen.', submit: 'Abgeben und auswerten', submit_q: 'Wirklich abgeben? Danach ist keine Änderung mehr möglich.', left: 'übrig', timeup: 'Die Zeit ist abgelaufen, die Klausur wurde automatisch abgegeben.',
        part: 'Teil {n}', pts: '{n} Punkte', pt1: '1 Punkt', task: 'Aufgabe {n}', total: 'Gesamt', grade: 'Geschätzte Note', grade_note: 'übliche Skala mit Bestehensgrenze 50 %; die echte Notenskala legt der Lehrstuhl fest.', passed: 'bestanden', failed: 'nicht bestanden',
        score: '{p} von {t} Punkten ({q} %)', new: 'Neue Probeklausur', weak: 'Meine Schwächen ansehen →', errs: 'Typische Fehler in dieser Klausur', errs_none: 'Kein typischer Fehler erkannt.', review: 'Durchsicht mit Lösungen',
        unanswered: 'nicht beantwortet', compose: 'Zusammensetzung', hoare_prog: 'Programm verifizieren', items: '{n} Aufgaben', confirm: 'Abgeben', cancel: 'Weiterschreiben', ans_ph: 'Antwort' },
  en: { kicker: 'Exam · all parts', title: 'Practice exam', lede: 'A complete exam from all four parts: Hoare logic, Java, Haskell and Prolog. Every practice exam is put together anew; grading happens only when you hand it in, as in the real exam.',
        start: 'Start the practice exam', timed: 'With time limit ({m} minutes)', rules: 'There is no feedback while you work. After handing in you see points per part, an estimated grade, all solutions and your typical mistakes. Your progress is saved in the browser, so you can reload the page.',
        resume: 'Continue', discard: 'Discard and start over', running: 'A practice exam is still open.', submit: 'Hand in and grade', submit_q: 'Really hand in? No changes are possible afterwards.', left: 'left', timeup: 'Time is up, the exam was handed in automatically.',
        part: 'Part {n}', pts: '{n} points', pt1: '1 point', task: 'Task {n}', total: 'Total', grade: 'Estimated grade', grade_note: 'usual German scale with a 50 % pass mark; the real scale is set by the chair.', passed: 'passed', failed: 'not passed',
        score: '{p} of {t} points ({q} %)', new: 'New practice exam', weak: 'See my weak spots →', errs: 'Typical mistakes in this exam', errs_none: 'No typical mistake detected.', review: 'Review with solutions',
        unanswered: 'not answered', compose: 'Composition', hoare_prog: 'Verify a program', items: '{n} tasks', confirm: 'Hand in', cancel: 'Keep writing', ans_ph: 'answer' }
};
const mkt = (k, rep) => { let s = MKT[lang][k] ?? MKT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
const MKEY = 'hoarelab-mock';
const MK_PARTS = [['hoare', 'Hoare-Kalkül'], ['java', 'Java'], ['haskell', 'Haskell'], ['prolog', 'Prolog']];
let MOCK = (() => { try { const j = JSON.parse(localStorage.getItem(MKEY)); if (j && j.v === 1) return j; } catch (e) {} return { v: 1, phase: 'start', timed: true }; })();
let mkTimer = null, mkConfirm = false;
function mkSave() { try { localStorage.setItem(MKEY, JSON.stringify(MOCK)); } catch (e) {} }
function mkGrade(p) { const s = [[.95, '1,0'], [.90, '1,3'], [.85, '1,7'], [.80, '2,0'], [.75, '2,3'], [.70, '2,7'], [.65, '3,0'], [.60, '3,3'], [.55, '3,7'], [.50, '4,0']]; for (const [x, g] of s) if (p >= x - 1e-9) return lang === 'de' ? g : g.replace(',', '.'); return lang === 'de' ? '5,0' : '5.0'; }
function mkCompose() {
  const r = dRng(Date.now() >>> 0), pickN = (arr, n) => dShuffle(arr, r).slice(0, n), sd = () => Math.floor(r() * 4294967296) >>> 0;
  const pool = POOL();
  const gens = [['hoare', 'hwp'], ['hoare', 'hwp'], ['hoare', 'hinv'], ['java', 'java'], ['java', 'java'], ['java', 'java'], ['haskell', 'htype'], ['haskell', 'htype'], ['prolog', 'unify'], ['prolog', 'unify']].map(([part, g]) => ({ part, g, s: sd() }));
  const lx = [...pickN(['j1', 'j2', 'j3', 'j4', 'j5', 'j6', 'j7'], 2), ...pickN(['h1', 'h2', 'h3', 'h4', 'h5'], 2), ...pickN(['p1', 'p2', 'p3'], 1), ...pickN(['p4', 'p5', 'p6'], 1)];
  return { hoare: pool[Math.floor(r() * pool.length)].id, gens, lx };
}
const mkTask = id => { for (const l of ['java', 'haskell', 'prolog']) { const t = LX[l].tasks.find(x => x.id === id); if (t) return [l, t]; } return [null, null]; };
function mkPartOf(id) { return id[0] === 'j' ? 'java' : id[0] === 'h' ? 'haskell' : 'prolog'; }
function mkSetupLX() {
  LX.mock = { title: lang === 'de' ? 'Probeklausur' : 'Practice exam', tasks: (MOCK.lx || []).map(id => mkTask(id)[1]).filter(Boolean) };
  ST.LX = ST.LX || {}; MOCK.lxv = MOCK.lxv || {};
  ST.LX.mock = { v: MOCK.lxv, r: MOCK.lxr || {}, sol: MOCK.phase === 'done' ? Object.fromEntries(LX.mock.tasks.map(t => [t.id, true])) : {} };
}
function mkMax() {
  let m = { hoare: kTotal(exById(MOCK.hoare)), java: 0, haskell: 0, prolog: 0 };
  MOCK.gens.forEach(x => m[x.part] += 1);
  MOCK.lx.forEach(id => { const [, t] = mkTask(id); if (t) m[mkPartOf(id)] += taskMax(t); });
  return m;
}
function mkStart() {
  const c = mkCompose();
  Object.assign(MOCK, { phase: 'run', created: Date.now(), hoare: c.hoare, gens: c.gens, lx: c.lx, hv: {}, gv: {}, lxv: {}, lxr: {}, res: null, timeup: false });
  const max = Object.values(mkMax()).reduce((a, b) => a + b, 0);
  MOCK.minutes = Math.min(120, Math.max(60, Math.round(max * 2 / 5) * 5));
  MOCK.ends = MOCK.timed ? Date.now() + MOCK.minutes * 60000 : 0;
  mkSave(); mkSetupLX(); renderMock(); window.scrollTo(0, 0); mkArm();
}
function mkArm() {
  clearInterval(mkTimer); mkTimer = null;
  if (MOCK.phase !== 'run' || !MOCK.ends) return;
  const tick = () => {
    const left = MOCK.ends - Date.now(), el = document.getElementById('mk-clock');
    if (left <= 0) { MOCK.timeup = true; mkSubmit(); return; }
    if (el) { const m = Math.floor(left / 60000), s = Math.floor(left / 1000) % 60; el.textContent = `${m}:${String(s).padStart(2, '0')}`; el.classList.toggle('warn', left < 5 * 60000); }
  };
  tick(); mkTimer = setInterval(tick, 1000);
}
function mkSubmit() {
  clearInterval(mkTimer); mkTimer = null; mkConfirm = false;
  const gres = MOCK.gens.map((x, i) => { const G = dItem(x), v = MOCK.gv[i] || {}; let r; try { r = G.check(v); } catch (e) { r = { err: '' }; } const ok = r.err === undefined && !!r.ok, empty = !String(v.a || '').trim() && v.n !== '1'; return { ok, tip: ok || empty ? null : (r.tip || null), empty }; });
  const ex = exById(MOCK.hoare), H = hoareGradeWith(ex, MOCK.hv);
  mkSetupLX();
  const S = ST.LX.mock;
  LX.mock.tasks.forEach(t => { S.r[t.id] = gradeTask('mock', t); S.sol[t.id] = true; });
  MOCK.lxr = S.r;
  const pts = { hoare: H.pts, java: 0, haskell: 0, prolog: 0 };
  MOCK.gens.forEach((x, i) => { if (gres[i].ok) pts[x.part]++; });
  LX.mock.tasks.forEach(t => pts[mkPartOf(t.id)] += S.r[t.id].pts);
  try {
    MOCK.gens.forEach((x, i) => { if (!gres[i].empty) stRecord(GEN_TOPIC[x.g], gres[i].ok, gres[i].tip); });
    if (Object.values(MOCK.hv).some(v => String(v).trim())) hoareRecord(H);
    LX.mock.tasks.forEach(t => { if (Object.entries(S.v).some(([k, v]) => k.startsWith(t.id + ':') && String(v).trim())) stRecordTask(t, S.r[t.id]); });
  } catch (e) {}
  const max = mkMax(), P = Object.values(pts).reduce((a, b) => a + b, 0), M = Object.values(max).reduce((a, b) => a + b, 0);
  MOCK.res = { gres, hoare: H, pts, max, P, M };
  MOCK.phase = 'done'; mkSave(); renderMock(); window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
}
function mkGenHTML(i, done) {
  const x = MOCK.gens[i], G = dItem(x), v = MOCK.gv[i] || {}, r = done ? MOCK.res.gres[i] : null;
  let input;
  if (G.kind === 'mc') input = `<div class="dl-opts">${G.opts.map((o, k) => { const sel = v.a === String(k); return `<button type="button" class="dl-opt ${sel ? 'sel' : ''} ${done && k === G.answer ? 'right' : ''} ${done && sel && k !== G.answer ? 'wrong' : ''}" data-mopt="${i}:${k}" ${done ? 'disabled' : ''} aria-pressed="${sel}"><span class="k">${'ABCD'[k]}</span>${esc(dt(o))}</button>`; }).join('')}</div>`;
  else {
    const ph = G.kind === 'num' ? dt('java_ph') : G.kind === 'unify' ? dt('unify_ph') : G.kind === 'text' ? dt(G.ph) : 'x + 2 > 5';
    input = `<div class="dl-in"><input class="mono" data-mg="${i}" value="${esc(v.a || '')}" placeholder="${esc(ph)}" autocomplete="off" spellcheck="false" autocapitalize="off" ${done || v.n === '1' ? 'disabled' : ''}>${G.kind === 'unify' ? `<label class="kcheck small"><input type="checkbox" data-mgn="${i}" ${v.n === '1' ? 'checked' : ''} ${done ? 'disabled' : ''}> ${esc(dt('not_unif'))}</label>` : ''}</div>`;
  }
  const fb = done ? `<div class="fb ${r.ok ? 'ok' : 'bad'}"><span class="lab">${r.ok ? esc(dt('right')) : r.empty ? esc(mkt('unanswered')) : esc(dt('wrong'))}</span>${dgBox(r.tip)}${G.solution()}</div>` : '';
  return `<div class="mk-q">${G.body()}${input}${fb}</div>`;
}
function mkTaskHead(no, pts, mark) { return `<header class="mk-th"><span class="xt-n">${esc(mkt('task', { n: no }))}</span>${mark || ''}<span class="mk-pts">${pts === 1 ? esc(mkt('pt1')) : esc(mkt('pts', { n: pts }))}</span></header>`; }
function renderMock() {
  const root = document.getElementById('mock'); if (!root) return;
  if (MOCK.phase !== 'start' && (!MOCK.gens || !exById(MOCK.hoare))) MOCK.phase = 'start';
  if (MOCK.phase === 'run' && MOCK.ends && Date.now() > MOCK.ends) { MOCK.timeup = true; mkSetupLX(); mkSubmit(); return; }
  if (MOCK.phase === 'start') {
    const est = 90;
    root.innerHTML = `<div class="mk-start">
      <div class="mk-compose"><h2>${esc(mkt('compose'))}</h2><ol>
        <li><b>Hoare-Kalkül</b> · ${esc(mkt('hoare_prog'))} + ${esc(dt('t_hwp'))} + ${esc(dt('t_hinv'))}</li>
        <li><b>Java</b> · ${esc(dt('t_java'))} + 2 ${esc(lang === 'de' ? 'Klausuraufgaben' : 'exam tasks')}</li>
        <li><b>Haskell</b> · ${esc(dt('t_htype'))} + 2 ${esc(lang === 'de' ? 'Klausuraufgaben' : 'exam tasks')}</li>
        <li><b>Prolog</b> · ${esc(dt('t_unify'))} + ${esc(lang === 'de' ? 'Anfragen oder Unifikation und ein Prädikat zum Schreiben' : 'queries or unification and a predicate to write')}</li></ol></div>
      <label class="kcheck"><input type="checkbox" data-mtimed="1" ${MOCK.timed ? 'checked' : ''}> ${esc(mkt('timed', { m: '60–120' }))}</label>
      <p class="small muted">${esc(mkt('rules'))}</p>
      <div class="row"><button type="button" class="btn primary" data-mact="start">${esc(mkt('start'))}</button></div></div>`;
    return;
  }
  const done = MOCK.phase === 'done', R = MOCK.res, max = mkMax();
  let no = 0, html = '';
  MK_PARTS.forEach(([p, name], pi) => {
    let body = '';
    if (p === 'hoare') {
      no++;
      const ex = exById(MOCK.hoare), H = done ? R.hoare : null;
      body += `<article class="mk-task">${mkTaskHead(no, kTotal(ex), done ? `<span class="lxbadge ${H.pts === H.total ? 'full' : H.pts ? 'part' : 'zero'}">${H.pts} / ${H.total}</span>` : '')}<h3>${esc(mkt('hoare_prog'))}: ${esc(L(ex.title))}</h3>${syntaxHTML(ex)}<div class="kpaper mk-kp">${hoarePaperHTML(ex, MOCK.hv, done, H)}</div></article>`;
    }
    MOCK.gens.forEach((x, i) => { if (x.part !== p) return; no++; const r = done ? R.gres[i] : null;
      body += `<article class="mk-task">${mkTaskHead(no, 1, done ? `<span class="lxbadge ${r.ok ? 'full' : 'zero'}">${r.ok ? 1 : 0} / 1</span>` : '')}<h3>${esc(dt('t_' + x.g))}</h3>${mkGenHTML(i, done)}</article>`; });
    LX.mock.tasks.forEach((t, k) => { if (mkPartOf(t.id) !== p) return; no++;
      body += taskHTML('mock', t, no - 1).replace(/(id|for|name)="(xt|lx)-/g, '$1="mk$2-'); });
    const pp = done ? `${R.pts[p]} / ${max[p]}` : mkt('pts', { n: max[p] });
    html += `<section class="mk-part" id="mk-part-${p}"><h2><span>${esc(mkt('part', { n: pi + 1 }))}</span> ${esc(name)}<em>${esc(pp)}</em></h2>${body}</section>`;
  });
  let head;
  if (done) {
    const q = R.P / R.M, g = mkGrade(q), ok = q >= 0.5 - 1e-9;
    const tips = [];
    R.gres.forEach(r => r.tip && tips.push(r.tip));
    if (R.hoare.invTip) tips.push(R.hoare.invTip); if (R.hoare.varTip) tips.push(R.hoare.varTip);
    LX.mock.tasks.forEach(t => { const r = ST.LX.mock.r[t.id]; if (!r) return; if (r.tip) tips.push(r.tip); (r.items || []).forEach(it => it.tip && tips.push(it.tip)); });
    const seen = new Set(), uniq = tips.filter(tp => { const k = stTipKey(tp); if (seen.has(k)) return false; seen.add(k); return true; });
    head = `<div class="mk-result">
      ${MOCK.timeup ? `<div class="fb info">${esc(mkt('timeup'))}</div>` : ''}
      <div class="mk-res-top"><div><span class="mk-gl">${esc(mkt('grade'))}</span><b class="mk-grade ${ok ? 'ok' : 'bad'}">${g}</b><span class="mk-pass ${ok ? 'ok' : 'bad'}">${esc(mkt(ok ? 'passed' : 'failed'))}</span></div>
        <div class="mk-res-sc"><b>${esc(mkt('score', { p: R.P, t: R.M, q: Math.round(q * 100) }))}</b><span class="small muted">${esc(mkt('grade_note'))}</span></div></div>
      <div class="mk-bars">${MK_PARTS.map(([p, name]) => `<div class="mk-bar"><span>${esc(name)}</span><i><b style="width:${max[p] ? Math.round(R.pts[p] / max[p] * 100) : 0}%"></b></i><em>${R.pts[p]} / ${max[p]}</em></div>`).join('')}</div>
      <div class="mk-errs"><h3>${esc(mkt('errs'))}</h3>${uniq.length ? uniq.map(dgBox).join('') : `<p class="muted">${esc(mkt('errs_none'))}</p>`}</div>
      <div class="row"><button type="button" class="btn primary" data-mact="new">${esc(mkt('new'))}</button><a class="btn" href="#progress">${esc(mkt('weak'))}</a></div></div>
      <h2 class="mk-review">${esc(mkt('review'))}</h2>`;
  } else {
    head = `<div class="mk-bar-top"><span class="badge">${esc(mkt('pts', { n: Object.values(max).reduce((a, b) => a + b, 0) }))}</span>${MOCK.ends ? `<span class="kclock"><span id="mk-clock">–</span> ${esc(mkt('left'))}</span>` : ''}
      <span class="mk-jump">${MK_PARTS.map(([p, n], i) => `<a href="#mock" data-mjump="${p}">${i + 1} · ${esc(n)}</a>`).join('')}</span>
      <button type="button" class="btn primary" data-mact="submit">${esc(mkt('submit'))}</button></div>
      ${mkConfirm ? `<div class="fb info mk-confirm">${esc(mkt('submit_q'))} <span class="row"><button type="button" class="btn primary" data-mact="confirm">${esc(mkt('confirm'))}</button><button type="button" class="btn" data-mact="cancel">${esc(mkt('cancel'))}</button></span></div>` : ''}`;
  }
  root.innerHTML = `<div class="mk ${done ? 'mk-done' : 'mk-run'}">${head}${html}${done ? '' : `<div class="row mk-end"><button type="button" class="btn primary" data-mact="submit">${esc(mkt('submit'))}</button></div>`}</div>`;
  if (done) root.querySelectorAll('input, textarea, select').forEach(el => { if (!el.closest('.mk-result')) el.disabled = true; });
  else mkArm();
}
function initMock() {
  const root = document.getElementById('mock'); if (!root) return;
  root.addEventListener('click', e => {
    const o = e.target.closest('[data-mopt]');
    if (o) { const [i, k] = o.dataset.mopt.split(':'); MOCK.gv[i] = { a: k }; mkSave(); root.querySelectorAll(`[data-mopt^="${i}:"]`).forEach(b => { const on = b.dataset.mopt === o.dataset.mopt; b.classList.toggle('sel', on); b.setAttribute('aria-pressed', on); }); return; }
    const j = e.target.closest('[data-mjump]'); if (j) { e.preventDefault(); const el = document.getElementById('mk-part-' + j.dataset.mjump); if (el) el.scrollIntoView({ behavior: reduceMotion() ? 'auto' : 'smooth', block: 'start' }); return; }
    const b = e.target.closest('[data-mact]');
    if (b) {
      const a = b.dataset.mact;
      if (a === 'start') mkStart();
      else if (a === 'submit') { mkConfirm = true; renderMock(); const c = root.querySelector('.mk-confirm'); if (c) { c.scrollIntoView({ block: 'center' }); const cb = c.querySelector('[data-mact="confirm"]'); if (cb) cb.focus({ preventScroll: true }); } }
      else if (a === 'confirm') mkSubmit();
      else if (a === 'cancel') { mkConfirm = false; renderMock(); }
      else if (a === 'new') { MOCK = { v: 1, phase: 'start', timed: MOCK.timed }; mkSave(); renderMock(); window.scrollTo(0, 0); }
      return;
    }
  });
  root.addEventListener('change', e => { const tm = e.target.closest('[data-mtimed]'); if (tm) { MOCK.timed = tm.checked; mkSave(); } });
  const onInput = e => {
    const g = e.target.closest('[data-mg]'); if (g) { const i = g.dataset.mg; MOCK.gv[i] = Object.assign(MOCK.gv[i] || {}, { a: g.value }); mkSave(); return; }
    const n = e.target.closest('[data-mgn]'); if (n) { const i = n.dataset.mgn; MOCK.gv[i] = Object.assign(MOCK.gv[i] || {}, { n: n.checked ? '1' : '' }); const inp = root.querySelector(`[data-mg="${i}"]`); if (inp) inp.disabled = n.checked; mkSave(); return; }
    if (MOCK.phase !== 'run') return;
    if (e.target.closest('[data-lx="mock"]')) { handleLXInput(e); MOCK.lxv = ST.LX.mock.v; mkSave(); return; }
    const k = e.target.closest('[data-k]'); if (k && MOCK.hv) { MOCK.hv[k.dataset.k] = k.value; mkSave(); }
  };
  root.addEventListener('input', onInput); root.addEventListener('change', onInput);
  if (MOCK.phase !== 'start' && MOCK.gens) mkSetupLX();
}
