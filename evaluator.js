/**
 * Modulo di Valutazione delle Simulazioni di Prova — TFAPP-SSSG
 * Copre Preselettiva, Prova Scritta e Prova Orale secondo i criteri ministeriali (/30, soglia 21/30).
 */
(function () {
  const EVAL_STORAGE_KEY = 'tfa_eval_history_v1';
  const PASS_THRESHOLD = 21;

  const KEYWORDS = {
    normativa: [
      { label: 'L. 104/1992', regex: /104\s*\/?\s*92|104\s*\/?\s*1992/i },
      { label: 'Sent. 215/1987', regex: /215\s*\/?\s*87|215\s*\/?\s*1987/i },
      { label: 'D.Lgs. 66/2017', regex: /66\s*\/?\s*2017|66\s*\/?\s*17/i },
      { label: 'D.Lgs. 96/2019', regex: /96\s*\/?\s*2019|96\s*\/?\s*19/i },
      { label: 'DI 182/2020 / DM 153/2023', regex: /182\s*\/?\s*2020|153\s*\/?\s*2023/i },
      { label: 'L. 170/2010 (DSA)', regex: /170\s*\/?\s*2010/i },
      { label: 'PEI / GLO', regex: /\b(pei|glo)\b/i },
      { label: 'PCTO / PFI / Progetto di Vita', regex: /\b(pcto|pfi|progetto di vita|328\s*\/?\s*2000)\b/i },
      { label: 'ICF / Profilo di Funzionamento', regex: /\b(icf|profilo di funzionamento)\b/i },
      { label: 'Autodeterminazione', regex: /autodeterminazion/i }
    ],
    psicopedagogia: [
      { label: 'Vygotskij / ZSP / Scaffolding', regex: /vygotsk|zsp|zona di sviluppo prossimale|scaffolding/i },
      { label: 'Piaget', regex: /piaget|operatorio formale/i },
      { label: 'Bruner', regex: /bruner|curricolo a spirale/i },
      { label: 'Erikson / Marcia', regex: /erikson|marcia|identit[àa]/i },
      { label: 'Ausubel / Metacognizione', regex: /ausubel|metacogniz|organizzatori anticipati/i },
      { label: 'Bandura / Autoefficacia', regex: /bandura|autoefficacia/i },
      { label: 'Goleman / Empatia', regex: /goleman|empatia|intelligenza emotiva/i }
    ],
    metodologie: [
      { label: 'UDL (Universal Design)', regex: /\budl\b|universal design/i },
      { label: 'Cooperative Learning / Jigsaw', regex: /cooperative|jigsaw|apprendimento cooperativo/i },
      { label: 'Peer Tutoring', regex: /peer tutoring|tutoraggio tra pari/i },
      { label: 'Flipped Classroom / EAS / Debate', regex: /flipped|debate|\beas\b/i },
      { label: 'TIC / Strumenti compensativi', regex: /\btic\b|compensativ|tecnologie/i },
      { label: 'Prove equipollenti / Differenziato', regex: /equipollent|differenziat|obiettivi minimi/i }
    ]
  };

  function loadHistory() {
    try {
      const raw = localStorage.getItem(EVAL_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  function saveHistory(items) {
    try {
      localStorage.setItem(EVAL_STORAGE_KEY, JSON.stringify(items.slice(0, 30)));
    } catch {}
    renderDashboardSummary();
  }

  function addEvaluationRecord(record) {
    const history = loadHistory();
    history.unshift({
      id: Date.now(),
      date: new Date().toLocaleString('it-IT', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }),
      ...record
    });
    saveHistory(history);
  }

  function formatPassBadge(score30) {
    const passed = score30 >= PASS_THRESHOLD;
    return `<span class="eval-score-badge ${passed ? 'pass' : 'fail'}">${score30.toFixed(1)} / 30 • ${passed ? 'IDONEO' : 'NON IDONEO'}</span>`;
  }

  /* -------------------------------------------------------------------------- */
  /* 1. VALUTAZIONE PROVA PRESELETTIVA                                          */
  /* -------------------------------------------------------------------------- */
  function initQuizEvaluator() {
    const panel = document.getElementById('eval-quiz-panel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="eval-header">
        <h3 class="eval-title">📋 Valutazione Ufficiale Simulazione Test</h3>
        <span id="eval-quiz-badge" class="eval-score-badge pass">0.0 / 30</span>
      </div>
      <p class="muted" style="margin-top:0;">Calcola il punteggio in trentesimi secondo i criteri dei bandi TFA (+0,5 pt per risposta esatta; opzione penalità -0,1 pt per errata). I dati si aggiornano automaticamente al termine di ogni test.</p>
      <div class="eval-inline-inputs">
        <div class="form-group">
          <label for="eq-total">Totale quesiti</label>
          <input id="eq-total" class="input-field" type="number" min="1" max="100" value="20" />
        </div>
        <div class="form-group">
          <label for="eq-correct">Risposte esatte</label>
          <input id="eq-correct" class="input-field" type="number" min="0" max="100" value="0" />
        </div>
        <div class="form-group">
          <label for="eq-wrong">Risposte errate</label>
          <input id="eq-wrong" class="input-field" type="number" min="0" max="100" value="0" />
        </div>
        <div class="form-group">
          <label for="eq-penalty">Penalità errori</label>
          <select id="eq-penalty" class="input-field">
            <option value="0">0 pt (Standard MIUR)</option>
            <option value="0.1">-0,1 pt (Atenei selettivi)</option>
          </select>
        </div>
      </div>
      <div class="eval-actions-row">
        <div id="eq-summary-text" class="muted">Inserisci o completa un test per calcolare l'esito.</div>
        <button id="eq-save-btn" class="btn btn-primary" type="button">Registra Valutazione Test</button>
      </div>
    `;

    const totalEl = document.getElementById('eq-total');
    const correctEl = document.getElementById('eq-correct');
    const wrongEl = document.getElementById('eq-wrong');
    const penaltyEl = document.getElementById('eq-penalty');
    const badgeEl = document.getElementById('eval-quiz-badge');
    const summaryEl = document.getElementById('eq-summary-text');
    const saveBtn = document.getElementById('eq-save-btn');

    function computeQuizScore() {
      const total = Math.max(1, Number(totalEl.value) || 20);
      const correct = Math.max(0, Math.min(total, Number(correctEl.value) || 0));
      const wrong = Math.max(0, Math.min(total - correct, Number(wrongEl.value) || 0));
      const penalty = Number(penaltyEl.value) || 0;

      const rawScore = Math.max(0, correct * 0.5 - wrong * penalty);
      const maxRaw = total * 0.5;
      const score30 = (rawScore / maxRaw) * 30;
      const passed = score30 >= PASS_THRESHOLD;

      badgeEl.className = `eval-score-badge ${passed ? 'pass' : 'fail'}`;
      badgeEl.textContent = `${score30.toFixed(1)} / 30 • ${passed ? 'IDONEO' : 'NON IDONEO'}`;
      summaryEl.textContent = `Punteggio grezzo: ${rawScore.toFixed(2)} / ${maxRaw.toFixed(1)} pt (${Math.round((correct / total) * 100)}% accuratezza).`;
      return { score30, correct, total, wrong };
    }

    [totalEl, correctEl, wrongEl, penaltyEl].forEach((el) => el.addEventListener('input', computeQuizScore));

    saveBtn.addEventListener('click', () => {
      const res = computeQuizScore();
      addEvaluationRecord({
        type: 'Preselettiva',
        label: `Test (${res.correct}/${res.total} esatte)`,
        score: Number(res.score30.toFixed(1))
      });
      summaryEl.textContent = `Valutazione salvata nel registro: ${res.score30.toFixed(1)} / 30.`;
    });

    // Osserva la comparsa dei risultati del quiz generati da app.js
    const resultsPanel = document.getElementById('quiz-results-panel');
    if (resultsPanel) {
      const observer = new MutationObserver(() => {
        if (!resultsPanel.hidden && resultsPanel.textContent.trim()) {
          const txt = resultsPanel.textContent;
          const ratioMatch = txt.match(/(\d+)\s*(?:su|\/)\s*(\d+)/i);
          if (ratioMatch) {
            const corr = Number(ratioMatch[1]);
            const tot = Number(ratioMatch[2]);
            totalEl.value = tot;
            correctEl.value = corr;
            wrongEl.value = Math.max(0, tot - corr);
            computeQuizScore();
          }
        }
      });
      observer.observe(resultsPanel, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
    }

    computeQuizScore();
  }

  /* -------------------------------------------------------------------------- */
  /* 2. CONTROLLO & VALUTAZIONE ELABORATO PROVA SCRITTA                         */
  /* -------------------------------------------------------------------------- */
  function initWrittenEvaluator() {
    const panel = document.getElementById('eval-written-panel');
    const workspace = document.getElementById('written-workspace');
    if (!panel || !workspace) return;

    panel.innerHTML = `
      <div class="eval-header">
        <h3 class="eval-title">✍️ Controllo Elaborato &amp; Griglia Valutazione (Prova Scritta)</h3>
        <span id="ew-score-badge" class="eval-score-badge fail">0.0 / 30</span>
      </div>
      <div class="eval-metrics-row">
        <div class="eval-metric-box">
          <span class="eval-metric-label">Parole scritte</span>
          <span id="ew-words" class="eval-metric-val">0</span>
        </div>
        <div class="eval-metric-box">
          <span class="eval-metric-label">Righe stimate (target 15-25)</span>
          <span id="ew-lines" class="eval-metric-val">0</span>
        </div>
        <div class="eval-metric-box">
          <span class="eval-metric-label">Paragrafi rilevati</span>
          <span id="ew-paras" class="eval-metric-val">0</span>
        </div>
        <div class="eval-metric-box">
          <span class="eval-metric-label">Parole chiave trovate</span>
          <span id="ew-kw-count" class="eval-metric-val">0</span>
        </div>
      </div>
      <div>
        <strong style="font-size:0.88rem;">Copertura concetti chiave nell'elaborato:</strong>
        <div id="ew-tags" class="eval-tags-list"></div>
      </div>
      <div class="eval-rubric-grid">
        <div class="eval-criterion">
          <label for="ew-c1">1. Padronanza normativa (PEI, GLO, L. 104/92, D.Lgs. 66/17, PCTO)</label>
          <span id="ew-c1-val" class="eval-criterion-pts">0 / 8</span>
          <input id="ew-c1" type="range" min="0" max="8" step="0.5" value="0" />
        </div>
        <div class="eval-criterion">
          <label for="ew-c2">2. Fondamenti psicopedagogici e sviluppo adolescenziale</label>
          <span id="ew-c2-val" class="eval-criterion-pts">0 / 8</span>
          <input id="ew-c2" type="range" min="0" max="8" step="0.5" value="0" />
        </div>
        <div class="eval-criterion">
          <label for="ew-c3">3. Proposta didattica inclusiva, UDL, TIC e valutazione</label>
          <span id="ew-c3-val" class="eval-criterion-pts">0 / 8</span>
          <input id="ew-c3" type="range" min="0" max="8" step="0.5" value="0" />
        </div>
        <div class="eval-criterion">
          <label for="ew-c4">4. Struttura in paragrafi, sintesi ed efficacia argomentativa</label>
          <span id="ew-c4-val" class="eval-criterion-pts">0 / 6</span>
          <input id="ew-c4" type="range" min="0" max="6" step="0.5" value="0" />
        </div>
      </div>
      <div class="eval-actions-row">
        <button id="ew-auto-btn" class="btn btn-secondary" type="button">Ricalcola da Testo</button>
        <button id="ew-save-btn" class="btn btn-primary" type="button">Emetti &amp; Salva Valutazione Scritta</button>
      </div>
      <div id="ew-feedback" class="eval-feedback-banner">Scrivi o modifica il tuo elaborato nell'area superiore per attivare il controllo automatico in tempo reale.</div>
    `;

    const c1 = document.getElementById('ew-c1');
    const c2 = document.getElementById('ew-c2');
    const c3 = document.getElementById('ew-c3');
    const c4 = document.getElementById('ew-c4');
    const badge = document.getElementById('ew-score-badge');
    const feedbackEl = document.getElementById('ew-feedback');

    function updateWrittenScoreDisplay() {
      const v1 = Number(c1.value);
      const v2 = Number(c2.value);
      const v3 = Number(c3.value);
      const v4 = Number(c4.value);
      document.getElementById('ew-c1-val').textContent = `${v1} / 8`;
      document.getElementById('ew-c2-val').textContent = `${v2} / 8`;
      document.getElementById('ew-c3-val').textContent = `${v3} / 8`;
      document.getElementById('ew-c4-val').textContent = `${v4} / 6`;
      const total = v1 + v2 + v3 + v4;
      const passed = total >= PASS_THRESHOLD;
      badge.className = `eval-score-badge ${passed ? 'pass' : 'fail'}`;
      badge.textContent = `${total.toFixed(1)} / 30 • ${passed ? 'IDONEO' : 'NON IDONEO'}`;
      return total;
    }

    function analyzeText(autoSetSliders = true) {
      const ta = workspace.querySelector('textarea');
      const text = ta ? ta.value.trim() : '';
      const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
      const lines = words ? Math.max(1, Math.round(words / 14)) : 0;
      const paras = text ? text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length : 0;

      document.getElementById('ew-words').textContent = words;
      document.getElementById('ew-lines').textContent = lines;
      document.getElementById('ew-paras').textContent = paras;

      const allChecks = [
        ...KEYWORDS.normativa.map((k) => ({ ...k, cat: 'normativa' })),
        ...KEYWORDS.psicopedagogia.map((k) => ({ ...k, cat: 'psicopedagogia' })),
        ...KEYWORDS.metodologie.map((k) => ({ ...k, cat: 'metodologie' }))
      ];

      let normHits = 0;
      let psicoHits = 0;
      let metHits = 0;
      const tagsHtml = allChecks
        .map((item) => {
          const found = item.regex.test(text);
          if (found) {
            if (item.cat === 'normativa') normHits++;
            if (item.cat === 'psicopedagogia') psicoHits++;
            if (item.cat === 'metodologie') metHits++;
          }
          return `<span class="eval-tag ${found ? 'found' : ''}">${found ? '✓ ' : ''}${item.label}</span>`;
        })
        .join('');

      document.getElementById('ew-tags').innerHTML = tagsHtml;
      document.getElementById('ew-kw-count').textContent = normHits + psicoHits + metHits;

      if (autoSetSliders) {
        c1.value = Math.min(8, normHits * 2);
        c2.value = Math.min(8, psicoHits * 2.5);
        c3.value = Math.min(8, metHits * 2.5);
        let structScore = 0;
        if (words >= 80) structScore += 2;
        if (lines >= 12 && lines <= 28) structScore += 2;
        if (paras >= 3) structScore += 2;
        else if (paras >= 2) structScore += 1;
        c4.value = Math.min(6, structScore);
      }

      const total = updateWrittenScoreDisplay();
      const missing = [];
      if (normHits < 2) missing.push('almeno 2 riferimenti normativi (es. D.Lgs. 66/2017, GLO, PEI)');
      if (psicoHits < 1) missing.push('almeno un autore psicopedagogico (es. Vygotskij, Bruner, Erikson)');
      if (metHits < 2) missing.push('strategie inclusive concrete (es. UDL, Cooperative Learning, TIC)');
      if (lines < 15) missing.push('estensione adeguata (puntare a 15-25 righe / ~220-350 parole)');
      if (paras < 3) missing.push('organizzazione in 3-4 paragrafi distinti');

      feedbackEl.innerHTML = missing.length
        ? `<strong>Suggerimenti per salire a ${Math.max(24, Math.min(30, total + 4))}/30:</strong> integra ${missing.join('; ')}.`
        : `<strong>Ottimo elaborato (${total.toFixed(1)}/30)!</strong> Struttura equilibrata e copertura completa di normativa, psicopedagogia e metodologie inclusive.`;
    }

    [c1, c2, c3, c4].forEach((el) => el.addEventListener('input', updateWrittenScoreDisplay));
    document.getElementById('ew-auto-btn').addEventListener('click', () => analyzeText(true));
    document.getElementById('ew-save-btn').addEventListener('click', () => {
      const total = updateWrittenScoreDisplay();
      addEvaluationRecord({
        type: 'Prova Scritta',
        label: 'Elaborato simulato',
        score: Number(total.toFixed(1))
      });
      feedbackEl.innerHTML = `<strong>Verbale registrato:</strong> punteggio salvato di <strong>${total.toFixed(1)} / 30</strong>.`;
    });

    workspace.addEventListener('input', (e) => {
      if (e.target && e.target.tagName === 'TEXTAREA') {
        analyzeText(true);
      }
    });

    const wsObserver = new MutationObserver(() => analyzeText(true));
    wsObserver.observe(workspace, { childList: true, subtree: true });
    analyzeText(true);
  }

  /* -------------------------------------------------------------------------- */
  /* 3. VALUTAZIONE PROVA ORALE (STUDIO DI CASO)                                */
  /* -------------------------------------------------------------------------- */
  function initOralEvaluator() {
    const panel = document.getElementById('eval-oral-panel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="eval-header">
        <h3 class="eval-title">🎤 Griglia di Valutazione Prova Orale (Studio di Caso)</h3>
        <span id="eo-score-badge" class="eval-score-badge pass">25.0 / 30 • IDONEO</span>
      </div>
      <div class="eval-inline-inputs">
        <div class="form-group">
          <label for="eo-case-select">Caso simulato</label>
          <select id="eo-case-select" class="input-field">
            <option value="Caso 1 — Rifiuto sostegno / Autodeterminazione">Caso 1 — Rifiuto sostegno &amp; Autodeterminazione</option>
            <option value="Caso 2 — Conflitto PEI Differenziato vs Equipollente">Caso 2 — Conflitto sul PEI Differenziato</option>
            <option value="Caso 3 — Progettazione PCTO inclusivo">Caso 3 — Progettazione PCTO inclusivo</option>
          </select>
        </div>
      </div>
      <div class="eval-rubric-grid">
        <div class="eval-criterion">
          <label for="eo-c1">1. Inquadramento bio-psico-sociale ICF e profilo dello studente</label>
          <span id="eo-c1-val" class="eval-criterion-pts">5 / 6</span>
          <input id="eo-c1" type="range" min="0" max="6" step="0.5" value="5" />
        </div>
        <div class="eval-criterion">
          <label for="eo-c2">2. Padronanza normativa II grado (GLO, 3 percorsi PEI, PCTO/PFI)</label>
          <span id="eo-c2-val" class="eval-criterion-pts">5 / 6</span>
          <input id="eo-c2" type="range" min="0" max="6" step="0.5" value="5" />
        </div>
        <div class="eval-criterion">
          <label for="eo-c3">3. Strategie didattiche inclusive, UDL e coinvolgimento CdC</label>
          <span id="eo-c3-val" class="eval-criterion-pts">5 / 6</span>
          <input id="eo-c3" type="range" min="0" max="6" step="0.5" value="5" />
        </div>
        <div class="eval-criterion">
          <label for="eo-c4">4. Gestione relazionale, famiglia e alleanza educativa</label>
          <span id="eo-c4-val" class="eval-criterion-pts">5 / 6</span>
          <input id="eo-c4" type="range" min="0" max="6" step="0.5" value="5" />
        </div>
        <div class="eval-criterion">
          <label for="eo-c5">5. Chiarezza espositiva, lessico tecnico e rispetto dei 5 minuti</label>
          <span id="eo-c5-val" class="eval-criterion-pts">5 / 6</span>
          <input id="eo-c5" type="range" min="0" max="6" step="0.5" value="5" />
        </div>
      </div>
      <div class="eval-actions-row">
        <span id="eo-feedback" class="muted">Esponi il caso ad alta voce entro i 5 minuti e valuta i 5 indicatori.</span>
        <button id="eo-save-btn" class="btn btn-primary" type="button">Salva Valutazione Orale</button>
      </div>
    `;

    const ids = ['eo-c1', 'eo-c2', 'eo-c3', 'eo-c4', 'eo-c5'];
    const badge = document.getElementById('eo-score-badge');
    const fb = document.getElementById('eo-feedback');

    function updateOral() {
      let sum = 0;
      ids.forEach((id) => {
        const val = Number(document.getElementById(id).value);
        document.getElementById(`${id}-val`).textContent = `${val} / 6`;
        sum += val;
      });
      const passed = sum >= PASS_THRESHOLD;
      badge.className = `eval-score-badge ${passed ? 'pass' : 'fail'}`;
      badge.textContent = `${sum.toFixed(1)} / 30 • ${passed ? 'IDONEO' : 'NON IDONEO'}`;
      return sum;
    }

    ids.forEach((id) => document.getElementById(id).addEventListener('input', updateOral));
    document.getElementById('eo-save-btn').addEventListener('click', () => {
      const score = updateOral();
      const caseLabel = document.getElementById('eo-case-select').value;
      addEvaluationRecord({
        type: 'Prova Orale',
        label: caseLabel,
        score: Number(score.toFixed(1))
      });
      fb.textContent = `Valutazione orale salvata: ${score.toFixed(1)} / 30.`;
    });

    updateOral();
  }

  /* -------------------------------------------------------------------------- */
  /* 4. RIEPILOGO REGISTRO VALUTAZIONI IN DASHBOARD                             */
  /* -------------------------------------------------------------------------- */
  function renderDashboardSummary() {
    const container = document.getElementById('eval-dashboard-summary');
    if (!container) return;
    const history = loadHistory();
    const avg = history.length
      ? history.reduce((acc, item) => acc + Number(item.score || 0), 0) / history.length
      : 0;

    const rows = history.slice(0, 6).map(
      (item) => `
      <div class="eval-history-item">
        <div><strong>${item.type}</strong> — ${item.label} <span class="muted">(${item.date})</span></div>
        ${formatPassBadge(Number(item.score))}
      </div>`
    ).join('');

    container.innerHTML = `
      <div class="eval-header">
        <h3 class="eval-title">🎓 Registro Valutazioni Simulazioni d'Esame</h3>
        <div style="display:flex;gap:0.5rem;align-items:center;">
          ${history.length ? formatPassBadge(avg).replace('IDONEO', 'MEDIA').replace('NON IDONEO', 'MEDIA') : '<span class="muted">Nessuna valutazione registrata</span>'}
          ${history.length ? '<button id="eval-clear-history" class="btn btn-ghost" type="button">Azzera registro</button>' : ''}
        </div>
      </div>
      ${history.length ? `<div class="eval-history-list">${rows}</div>` : '<p class="muted" style="margin:0;">Completa e salva una valutazione nelle sezioni Test, Prova Scritta o Prova Orale per tracciare il tuo punteggio medio in trentesimi.</p>'}
    `;

    const clearBtn = document.getElementById('eval-clear-history');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => saveHistory([]));
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initQuizEvaluator();
    initWrittenEvaluator();
    initOralEvaluator();
    renderDashboardSummary();
  });
})();
