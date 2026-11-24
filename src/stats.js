/* ================= learning statistics + "Meine Schwächen" ================= */
const STKEY = 'hoarelab-stats';
const ST_TOPICS = [
  ['hoare-wp', { de: 'Hoare: Zusicherungen und schwächste Vorbedingung', en: 'Hoare: assertions and weakest precondition' }, { gen: 'hwp' }, '#hoare'],
  ['hoare-inv', { de: 'Hoare: Schleifeninvarianten', en: 'Hoare: loop invariants' }, { gen: 'hinv' }, '#practice'],
  ['hoare-var', { de: 'Hoare: Varianten und Terminierung', en: 'Hoare: variants and termination' }, { href: '#practice' }, '#practice'],
  ['java-trace', { de: 'Java: Programme verfolgen', en: 'Java: tracing programs' }, { gen: 'java' }, '#java'],
  ['java-oo', { de: 'Java: Referenzen, Vererbung, Binden', en: 'Java: references, inheritance, binding' }, { href: '#exam-java' }, '#java'],
  ['hs-type', { de: 'Haskell: Typen bestimmen', en: 'Haskell: finding types' }, { gen: 'htype' }, '#haskell'],
  ['hs-eval', { de: 'Haskell: Auswerten, Muster, Lazy Evaluation', en: 'Haskell: evaluation, patterns, laziness' }, { href: '#haskell-steps' }, '#haskell'],
  ['pl-unify', { de: 'Prolog: Unifikation', en: 'Prolog: unification' }, { gen: 'unify' }, '#prolog'],
  ['pl-query', { de: 'Prolog: Anfragen und Backtracking', en: 'Prolog: queries and backtracking' }, { href: '#prolog-tree' }, '#prolog'],
  ['pl-prog', { de: 'Prolog: Prädikate schreiben', en: 'Prolog: writing predicates' }, { href: '#exam-prolog' }, '#prolog']
];
const GEN_TOPIC = { hwp: 'hoare-wp', hinv: 'hoare-inv', java: 'java-trace', htype: 'hs-type', unify: 'pl-unify' };
const TASK_TOPIC = { j1: 'java-trace', j5: 'java-trace', j6: 'java-trace', j2: 'java-oo', j3: 'java-oo', j4: 'java-oo', j7: 'java-oo',
  h1: 'hs-type', h2: 'hs-type', h3: 'hs-eval', h4: 'hs-eval', h5: 'hs-eval', p1: 'pl-unify', p2: 'pl-query', p3: 'pl-query', p4: 'pl-prog', p5: 'pl-prog', p6: 'pl-prog' };
function stFresh() { return { v: 1, t: {}, e: {} }; }
let STS = (() => { try { const j = JSON.parse(localStorage.getItem(STKEY)); if (j && j.v === 1) return Object.assign(stFresh(), j); } catch (e) {} return stFresh(); })();
function stSave() { try { localStorage.setItem(STKEY, JSON.stringify(STS)); } catch (e) {} }
function stTipKey(tip) { if (tip.k) return tip.k; let h = 0; const s = tip.m.de; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return 'm' + (h >>> 0).toString(36); }
/* record one answered item */
function stRecord(topic, ok, tip) {
  if (!topic) return;
  const T = STS.t[topic] || (STS.t[topic] = { n: 0, ok: 0, last: [] });
  T.n++; if (ok) T.ok++; T.last = [...T.last, ok ? 1 : 0].slice(-12);
  if (!ok && tip) {
    const k = stTipKey(tip), E = STS.e[k] || (STS.e[k] = { n: 0, topic });
    E.n++; E.d = dToday(); if (tip.k) { E.k = tip.k; E.rep = tip.rep || null; } else E.m = tip.m;
  }
  stSave();
}
function stAcc(topic) { const T = STS.t[topic]; return T && T.n ? T.ok / T.n : null; }
function stRecent(topic) { const T = STS.t[topic]; return T && T.last.length ? T.last.reduce((a, b) => a + b, 0) / T.last.length : null; }
/* generator to emphasise in Täglich: the weakest generator-backed topic with enough data */
function stWeakGen() {
  let best = null, bv = 2;
  for (const [g, tp] of Object.entries(GEN_TOPIC)) { const T = STS.t[tp]; if (!T || T.last.length < 3) continue; const r = stRecent(tp); if (r < 0.75 && r < bv) { bv = r; best = g; } }
  return best;
}
/* record the graded items of an exam-training task */
function stRecordTask(t, res) {
  const tp = TASK_TOPIC[t.id]; if (!tp || !res) return;
  if (t.type === 'pprog') { stRecord(tp, res.items.every(i => i.ok), res.tip); return; }
  if (t.type === 'self') return;
  res.items.forEach(it => stRecord(tp, it.ok, it.tip));
}

/* ---------- page ---------- */
const STT = {
  de: { empty: 'Noch keine Daten. Löse ein paar Aufgaben in Täglich, in den Übungen oder in den Klausur-Trainings; dann zeigt diese Seite, wo du stehst.',
        sum: '{n} Antworten ausgewertet, {p} % richtig', topics: 'Themen', errs: 'Deine häufigsten typischen Fehler', errs_none: 'Bisher kein typischer Fehler erkannt.',
        acc: '{p} % richtig', recent: 'zuletzt {p} %', nodata: 'noch keine Daten', n: '{n} Antworten', practise: 'Gezielt üben →', explain: 'Zum Thema',
        times: '{n}×', last: 'zuletzt {d}', strong: 'sicher', mid: 'fast sicher', weak: 'üben', reset: 'Statistik zurücksetzen', reset_q: 'Wirklich alles löschen?',
        note: 'Die Statistik bleibt nur in diesem Browser. Sie wird mit dem Übertragungscode aus Täglich nicht mitgenommen.', focus_h: 'Fokus-Runde', mock: 'Probeklausur schreiben →' },
  en: { empty: 'No data yet. Solve a few tasks in Daily, the exercises or the exam trainings; then this page shows where you stand.',
        sum: '{n} answers evaluated, {p} % correct', topics: 'Topics', errs: 'Your most frequent typical mistakes', errs_none: 'No typical mistake detected so far.',
        acc: '{p} % correct', recent: 'recently {p} %', nodata: 'no data yet', n: '{n} answers', practise: 'Practise this →', explain: 'Go to topic',
        times: '{n}×', last: 'last {d}', strong: 'solid', mid: 'nearly there', weak: 'practise', reset: 'Reset statistics', reset_q: 'Really delete everything?',
        note: 'The statistics stay in this browser only. They are not included in the transfer code from Daily.', focus_h: 'Focus round', mock: 'Take a practice exam →' }
};
const stt = (k, rep) => { let s = STT[lang][k] ?? STT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
let stResetArmed = 0;
function renderProgress() {
  const root = document.getElementById('progress'); if (!root) return;
  const L2 = o => (o && typeof o === 'object') ? (o[lang] ?? o.de) : o;
  const all = Object.values(STS.t).reduce((a, T) => ({ n: a.n + T.n, ok: a.ok + T.ok }), { n: 0, ok: 0 });
  if (!all.n) { root.innerHTML = `<div class="fb info">${esc(stt('empty'))}</div><div class="row"><a class="btn primary" href="#daily">Täglich →</a><a class="btn" href="#mock">${esc(stt('mock'))}</a></div>`; return; }
  const rows = ST_TOPICS.map(([k, name, act, href]) => {
    const T = STS.t[k], acc = stAcc(k), rec = stRecent(k);
    const lvl = rec === null ? '' : rec >= 0.85 ? 'strong' : rec >= 0.6 ? 'mid' : 'weak';
    const btn = act.gen ? `<button type="button" class="btn ${lvl === 'weak' ? 'primary' : ''}" data-focus="${act.gen}">${esc(stt('practise'))}</button>` : `<a class="btn ${lvl === 'weak' ? 'primary' : ''}" href="${act.href}">${esc(stt('practise'))}</a>`;
    return `<div class="st-row ${lvl}"><div class="st-name"><b>${esc(L2(name))}</b><span>${T ? esc(stt('n', { n: T.n })) + ' · ' + esc(stt('acc', { p: Math.round(acc * 100) })) : esc(stt('nodata'))}</span></div>
      <div class="st-bar" aria-hidden="true"><span style="width:${rec === null ? 0 : Math.round(rec * 100)}%"></span></div>
      <div class="st-lvl">${lvl ? `<span class="st-chip ${lvl}">${esc(stt(lvl))}</span><span class="small muted">${esc(stt('recent', { p: Math.round(rec * 100) }))}</span>` : ''}</div>
      <div class="st-act">${T ? btn : `<a class="btn ghost" href="${href}">${esc(stt('explain'))}</a>`}</div></div>`;
  }).join('');
  const errs = Object.entries(STS.e).sort((a, b) => b[1].n - a[1].n).slice(0, 8);
  const errHTML = errs.length ? errs.map(([key, E]) => {
    const name = L2((ST_TOPICS.find(t => t[0] === E.topic) || [, ''])[1]);
    const txt = E.m ? L2(E.m) : dgt(E.k, E.rep || undefined);
    return `<div class="st-err"><span class="st-cnt">${esc(stt('times', { n: E.n }))}</span><div><span class="st-topic">${esc(name)}</span><p>${esc(txt)}</p><span class="small muted">${esc(stt('last', { d: new Date(dNum(E.d) * 864e5).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' }) }))}</span></div></div>`;
  }).join('') : `<p class="muted">${esc(stt('errs_none'))}</p>`;
  root.innerHTML = `<div class="st-sum"><b>${esc(stt('sum', { n: all.n, p: Math.round(all.ok / all.n * 100) }))}</b><a class="btn" href="#mock">${esc(stt('mock'))}</a></div>
    <section class="st-sec"><h2>${esc(stt('topics'))}</h2><div class="st-list">${rows}</div></section>
    <section class="st-sec"><h2>${esc(stt('errs'))}</h2><div class="st-errs">${errHTML}</div></section>
    <p class="small muted">${esc(stt('note'))} · <button type="button" class="linkbtn" data-streset="1">${esc(stt('reset'))}</button></p>`;
}
function initProgress() {
  const root = document.getElementById('progress'); if (!root) return;
  root.addEventListener('click', e => {
    const f = e.target.closest('[data-focus]');
    if (f) { dStartFocus(f.dataset.focus); location.hash = '#daily'; return; }
    const r = e.target.closest('[data-streset]');
    if (r) { if (Date.now() - stResetArmed < 4000) { STS = stFresh(); stSave(); renderProgress(); } else { stResetArmed = Date.now(); r.textContent = stt('reset_q'); } }
  });
}
