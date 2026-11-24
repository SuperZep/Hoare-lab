/* ================= quick extras: report a task, installable app, printable exam ================= */
const XT = {
  de: { report: 'Aufgabe melden', report_t: 'Fehler oder Unklarheit in dieser Aufgabe melden (öffnet GitHub)', install: 'Als App installieren', install_ios: 'Auf dem iPhone: Teilen-Symbol, dann „Zum Home-Bildschirm“.', installed: 'Als App installiert · funktioniert auch offline', offline: 'Offline: Die Seite läuft aus dem Speicher.',
        pr_kicker: 'Klausur · zum Ausdrucken', pr_title: 'Probeklausur auf Papier', pr_lede: 'Alle Klausur-Trainings als eine Probeklausur zum Ausdrucken oder als PDF. Die Lösungen kommen auf eigene Seiten am Ende.',
        pr_parts: 'Teile', pr_hoare: 'Programm für den Hoare-Kalkül', pr_sol: 'Lösungen anhängen', pr_print: 'Drucken oder als PDF speichern', pr_note: 'Tipp: Im Druckdialog „Als PDF speichern“ wählen. Kopf- und Fußzeilen des Browsers am besten ausschalten.',
        pr_head: 'Probeklausur Programmierung', pr_sub: 'Übungsklausur aus dem Hoare Lab, keine Originalklausur der RWTH', pr_name: 'Name', pr_time: 'Bearbeitungszeit: {m} Minuten', pr_pts: 'Punkte', pr_sum: 'Summe', pr_task: 'Aufgabe', pr_sols: 'Lösungen',
        pr_inv: 'Invariante', pr_var: 'Variante', pr_fill: 'Ergänzen Sie die fehlenden Zusicherungen, die Schleifeninvariante und den Nachweis der Terminierung mit einer Variante.', pr_term: 'Terminierung', pr_notu: 'nicht unifizierbar', pr_ans: 'Antwort', pr_blocked: 'Das Drucken ist in dieser Vorschau gesperrt. Auf der öffentlichen Seite funktioniert es:', pr_open: 'Öffentliche Seite öffnen ↗' },
  en: { report: 'Report this task', report_t: 'Report a mistake or something unclear in this task (opens GitHub)', install: 'Install as an app', install_ios: 'On iPhone: tap Share, then “Add to Home Screen”.', installed: 'Installed as an app · works offline too', offline: 'Offline: the page is running from storage.',
        pr_kicker: 'Exam · printable', pr_title: 'Practice exam on paper', pr_lede: 'All exam trainings as one practice exam to print or save as PDF. The solutions come on separate pages at the end.',
        pr_parts: 'Parts', pr_hoare: 'Program for Hoare logic', pr_sol: 'Append solutions', pr_print: 'Print or save as PDF', pr_note: 'Tip: choose “Save as PDF” in the print dialog. It is best to switch off the browser’s headers and footers.',
        pr_head: 'Practice exam Programmierung', pr_sub: 'Practice exam from Hoare Lab, not an original RWTH exam', pr_name: 'Name', pr_time: 'Working time: {m} minutes', pr_pts: 'Points', pr_sum: 'Total', pr_task: 'Task', pr_sols: 'Solutions',
        pr_inv: 'Invariant', pr_var: 'Variant', pr_fill: 'Fill in the missing assertions, the loop invariant and the termination proof with a variant.', pr_term: 'Termination', pr_notu: 'not unifiable', pr_ans: 'Answer', pr_blocked: 'Printing is blocked in this preview. It works on the public site:', pr_open: 'Open the public site ↗' }
};
const xt = (k, rep) => { let s = XT[lang][k] ?? XT.de[k] ?? k; if (rep) for (const r in rep) s = s.split('{' + r + '}').join(rep[r]); return s; };
const xL = o => (o && typeof o === 'object' && !Array.isArray(o)) ? (o[lang] ?? o.de) : o;
const PUBLIC_URL = 'https://superzep.github.io/Hoare-lab/';
const inPreview = () => { try { return !!(window.claude && typeof window.claude.use === 'function') && !/github\.io$/.test(location.hostname); } catch (e) { return false; } };

/* ---------- report a task (GitHub issue, prefilled) ---------- */
function reportURL(ctx) {
  const title = `[${ctx.area}] ${ctx.id}${ctx.name ? ' · ' + ctx.name : ''}`;
  const lines = [
    lang === 'de' ? '**Was ist falsch oder unklar?**' : '**What is wrong or unclear?**', '', '', '',
    '---', `Bereich / area: ${ctx.area}`, `Aufgabe / task: ${ctx.id}${ctx.name ? ' (' + ctx.name + ')' : ''}`,
    ctx.answer ? `Meine Antwort / my answer: \`${String(ctx.answer).replace(/\s*\n\s*/g, ' / ').slice(0, 300).replace(/`/g, "'")}\`` : '',
    `Seite / page: ${PUBLIC_URL}#${ST.view}`, `Sprache / language: ${lang}`, `Datum / date: ${new Date().toISOString().slice(0, 10)}`
  ].filter(x => x !== null);
  return `https://github.com/SuperZep/Hoare-lab/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
function reportLink(ctx) { return `<a class="rep-link" href="${reportURL(ctx)}" target="_blank" rel="noopener" title="${esc(xt('report_t'))}">⚑ ${esc(xt('report'))}</a>`; }

/* ---------- installable app (PWA, only on the public site) ---------- */
let XPROMPT = null;
function pwaOK() { return /github\.io$/.test(location.hostname) || location.hostname === 'localhost'; }
function initPWA() {
  if (!pwaOK()) return;
  try {
    const head = document.head;
    const add = (rel, href, extra) => { const l = document.createElement('link'); l.rel = rel; l.href = href; Object.assign(l, extra || {}); head.appendChild(l); };
    add('manifest', 'manifest.webmanifest'); add('apple-touch-icon', 'apple-touch-icon.png');
    const m = document.createElement('meta'); m.name = 'theme-color'; m.content = '#2C40CF'; head.appendChild(m);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
  } catch (e) {}
  addEventListener('beforeinstallprompt', e => { e.preventDefault(); XPROMPT = e; renderInstall(); });
  addEventListener('appinstalled', () => { XPROMPT = null; renderInstall(); });
  addEventListener('online', renderInstall); addEventListener('offline', renderInstall);
  renderInstall();
}
function renderInstall() {
  const el = document.getElementById('install-box'); if (!el) return;
  if (!pwaOK()) { el.innerHTML = ''; return; }
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
  let h = '';
  if (!navigator.onLine) h += `<span class="inst-off">● ${esc(xt('offline'))}</span> `;
  if (standalone) h += `<span class="inst-ok">✓ ${esc(xt('installed'))}</span>`;
  else if (XPROMPT) h += `<button type="button" class="btn" id="install-btn">⤓ ${esc(xt('install'))}</button>`;
  else if (ios) h += `<span class="small">${esc(xt('install_ios'))}</span>`;
  el.innerHTML = h;
  const b = document.getElementById('install-btn');
  if (b) b.addEventListener('click', async () => { try { XPROMPT.prompt(); await XPROMPT.userChoice; } catch (e) {} XPROMPT = null; renderInstall(); });
}

/* ---------- printable practice exam ---------- */
let PR = { parts: { hoare: true, java: true, haskell: true, prolog: true }, hoare: 'k1', sol: true };
const blank = (n = 1, cls = '') => `<div class="pr-blank ${cls}">${'<i></i>'.repeat(n)}</div>`;
function prTask(l, t, no) {
  const pts = taskMax(t);
  let body = '';
  const code = t.code ? `<pre class="pr-code">${esc(t.code)}</pre>` : '';
  switch (t.type) {
    case 'lines': body = code + blank(t.answer.length); break;
    case 'nums': case 'hval': case 'htype': body = code + t.fields.map(f => `<div class="pr-f"><span class="mono">${esc(xL(f.label))}</span>${blank(1, 'inline')}</div>`).join(''); break;
    case 'mc': body = code + `<ul class="pr-mc">${t.options.map(o => `<li><span class="box"></span><span class="mono">${esc(o)}</span></li>`).join('')}</ul>`; break;
    case 'unify': body = t.pairs.map(([a, b]) => `<div class="pr-f"><span class="mono">${esc(a)} ≟ ${esc(b)}</span>${blank(1, 'inline')}</div>`).join(''); break;
    case 'pquery': body = `<pre class="pr-code">${esc(t.program)}</pre>` + t.queries.map(q => `<div class="pr-f"><span class="mono">?- ${esc(q)}.</span>${blank(1, 'inline')}</div>`).join(''); break;
    case 'pprog': body = blank(6); break;
    case 'self': body = blank(10); break;
  }
  return `<section class="pr-task"><h3><span>${esc(xt('pr_task'))} ${no}</span> ${esc(xL(t.title))}<em>${pts} ${esc(xt('pr_pts'))}</em></h3><p>${esc(xL(t.q))}</p>${body}</section>`;
}
function prSol(l, t, no) {
  let a = '';
  switch (t.type) {
    case 'lines': a = `<pre class="pr-code">${esc(t.answer.join('\n'))}</pre>`; break;
    case 'nums': case 'hval': case 'htype': a = t.fields.map(f => `<div class="pr-f"><span class="mono">${esc(xL(f.label))}</span> <b class="mono">${esc(Array.isArray(f.a) ? f.a[0] : f.a)}</b></div>`).join(''); break;
    case 'mc': a = `<p><b class="mono">${esc(t.options[t.ok])}</b></p>`; break;
    case 'unify': a = t.pairs.map(([x, y]) => { const r = PL.refUnifier(x, y); return `<div class="pr-f"><span class="mono">${esc(x)} ≟ ${esc(y)}</span> <b class="mono">${esc(r === null ? xt('pr_notu') : '{ ' + r + ' }')}</b></div>`; }).join(''); break;
    case 'pquery': a = t.queries.map(q => `<div class="pr-f"><span class="mono">?- ${esc(q)}.</span> <b class="mono">${esc((expectedAnswers(t.program, q) || []).join(' ; '))}</b></div>`).join(''); break;
    case 'pprog': case 'self': a = `<pre class="pr-code">${esc(t.model)}</pre>`; break;
  }
  return `<section class="pr-task sol"><h3><span>${esc(xt('pr_task'))} ${no}</span> ${esc(xL(t.title))}</h3>${a}${t.expl ? `<p class="pr-expl">${esc(xL(t.expl))}</p>` : ''}</section>`;
}
function prHoare(ex, no, sol) {
  const b = kBlankLines(ex), c = compile(ex);
  const line = (l, i, blankIt) => l.k === 'a'
    ? `<div class="pr-ln a" style="--ind:${l.ind || 0}">${blankIt ? '⟨<span class="pr-gap"></span>⟩' : '⟨' + esc(l.s) + '⟩'}</div>`
    : `<div class="pr-ln" style="--ind:${l.ind || 0}">${esc(l.s)}</div>`;
  const A = b.A.map((l, i) => line(l, i, !sol && b.aIdx.includes(i))).join('');
  const V = b.V.map((l, i) => line(l, i, !sol && b.vIdx.includes(i))).join('');
  const pts = kTotal(ex);
  return `<section class="pr-task ${sol ? 'sol' : ''}"><h3><span>${esc(xt('pr_task'))} ${no}</span> Hoare-Kalkül: ${esc(xL(ex.title))}${sol ? '' : `<em>${pts} ${esc(xt('pr_pts'))}</em>`}</h3>
    ${sol ? '' : `<p>${esc(xt('pr_fill'))}</p>`}
    <div class="pr-prog">${A}</div>
    <div class="pr-f"><span>${esc(xt('pr_inv'))}:</span>${sol ? ` <b class="mono">⟨${esc(pr(c.inv))}⟩</b>` : blank(1, 'inline')}</div>
    <div class="pr-f"><span>${esc(xt('pr_var'))}:</span>${sol ? ` <b class="mono">V = ${esc(pr(c.variant))}</b>` : blank(1, 'inline')}</div>
    <h4>${esc(xt('pr_term'))}</h4><div class="pr-prog">${V}</div></section>`;
}
function renderPrint() {
  const root = document.getElementById('printexam'); if (!root) return;
  const parts = [];
  let no = 0; const sheet = [], sols = [], ptsRows = [];
  if (PR.parts.hoare) { const ex = EXAM.find(e => e.id === PR.hoare) || EXAM[0]; no++; sheet.push(prHoare(ex, no, false)); sols.push(prHoare(ex, no, true)); ptsRows.push([no, 'Hoare-Kalkül', kTotal(ex)]); }
  for (const l of ['java', 'haskell', 'prolog']) {
    if (!PR.parts[l]) continue;
    LX[l].tasks.forEach(t => { no++; sheet.push(prTask(l, t, no)); sols.push(prSol(l, t, no)); ptsRows.push([no, `${LX[l].title}: ${xL(t.title)}`, taskMax(t)]); });
  }
  const total = ptsRows.reduce((s, r) => s + r[2], 0), minutes = Math.max(30, Math.round(total * 1.2 / 5) * 5);
  const cover = `<header class="pr-cover"><div><h2>${esc(xt('pr_head'))}</h2><p>${esc(xt('pr_sub'))} · ${esc(xt('pr_time', { m: minutes }))}</p></div><div class="pr-name">${esc(xt('pr_name'))}: <span></span></div></header>
    <table class="pr-pts"><thead><tr><th>${esc(xt('pr_task'))}</th><th></th><th>${esc(xt('pr_pts'))}</th><th>✓</th></tr></thead><tbody>${ptsRows.map(r => `<tr><td>${r[0]}</td><td>${esc(r[1])}</td><td>${r[2]}</td><td></td></tr>`).join('')}<tr class="sum"><td></td><td>${esc(xt('pr_sum'))}</td><td>${total}</td><td></td></tr></tbody></table>`;
  const ctrl = `<div class="pr-ctrl">
      <fieldset><legend>${esc(xt('pr_parts'))}</legend>${[['hoare', 'Hoare-Kalkül'], ['java', 'Java'], ['haskell', 'Haskell'], ['prolog', 'Prolog']].map(([k, n]) => `<label class="kcheck"><input type="checkbox" data-pp="${k}" ${PR.parts[k] ? 'checked' : ''}> ${n}</label>`).join('')}</fieldset>
      <label class="f"><span>${esc(xt('pr_hoare'))}</span><select data-ph="1">${EXAM.map(e => `<option value="${e.id}" ${PR.hoare === e.id ? 'selected' : ''}>${esc(xL(e.title))}</option>`).join('')}</select></label>
      <label class="kcheck"><input type="checkbox" data-ps="1" ${PR.sol ? 'checked' : ''}> ${esc(xt('pr_sol'))}</label>
      ${inPreview() ? `<p class="small">${esc(xt('pr_blocked'))} <a href="${PUBLIC_URL}#print" target="_blank" rel="noopener">${esc(xt('pr_open'))}</a></p>` : `<button type="button" class="btn primary" data-pprint="1">🖶 ${esc(xt('pr_print'))}</button>`}
      <p class="small muted">${esc(xt('pr_note'))}</p></div>`;
  root.innerHTML = ctrl + `<div class="pr-sheet">${cover}${sheet.join('')}${PR.sol ? `<div class="pr-solpart"><h2>${esc(xt('pr_sols'))}</h2>${sols.join('')}</div>` : ''}</div>`;
}
function initPrint() {
  const root = document.getElementById('printexam'); if (!root) return;
  root.addEventListener('change', e => {
    const p = e.target.closest('[data-pp]'); if (p) PR.parts[p.dataset.pp] = p.checked;
    if (e.target.closest('[data-ph]')) PR.hoare = e.target.value;
    if (e.target.closest('[data-ps]')) PR.sol = e.target.checked;
    renderPrint();
  });
  root.addEventListener('click', e => { if (e.target.closest('[data-pprint]')) { try { window.print(); } catch (err) {} } });
}

/* ---- anonymous visit counter (GoatCounter: no cookies, no personal data) ----
   Loaded only on the public site, never in the claude.ai artifact or locally.
   Hash routes are counted as pages (/#daily, /#mock …); an #import code is never sent. */
function gcPath() {
  const h = location.hash.slice(1), v = h.startsWith('import=') ? 'import' : (h.split(/[?&=]/)[0] || 'plan');
  return '/#' + v;
}
function initCounter() {
  if (!/\.github\.io$/.test(location.hostname)) return;
  try {
    window.goatcounter = { no_onload: true };
    let last = null;
    const count = () => { const p = gcPath(); if (p === last || !window.goatcounter || !window.goatcounter.count) return; last = p; window.goatcounter.count({ path: p }); };
    const s = document.createElement('script');
    s.async = true; s.src = 'https://gc.zgo.at/count.js';
    s.dataset.goatcounter = 'https://hoare-lab.goatcounter.com/count';
    s.onload = () => { count(); window.addEventListener('hashchange', () => setTimeout(count, 0)); };
    document.head.appendChild(s);
  } catch (e) {}
}
