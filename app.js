/**
 * Controller principale PWA — TFA Sostegno Scuola Secondaria di Secondo Grado
 */

(function () {
  const STORAGE_KEY = 'tfa_secondo_grado_progress_v1';

  const defaultState = {
    theme: 'light',
    completedLessons: [],
    completedWritten: [],
    completedOral: [],
    writtenDrafts: {},
    quizStats: {
      totalAnswered: 0,
      totalCorrect: 0
    }
  };

  let state = loadState();
  let activeTopicFilter = 'all';
  let activeWrittenId = window.TFA_DATA.writtenTraces[0].id;
  let activeQuizSession = null;
  let quizTimerInterval = null;
  let oralTimers = {};
  let deferredInstallPrompt = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      return {
        ...structuredClone(defaultState),
        ...JSON.parse(raw)
      };
    } catch {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // Ignore quota errors in private browsing
    }
    updateDashboardStats();
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    setupNavigation();
    setupPWAInstall();
    renderDashboardTopics();
    renderTopicChips();
    renderLessons();
    setupQuizControls();
    renderWrittenSelector();
    renderWrittenWorkspace();
    renderOralCases();
    updateDashboardStats();
  });

  // Theme management
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
  }

  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    const next = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveState();
  });

  // Navigation
  function switchView(viewName) {
    document.querySelectorAll('.view-section').forEach((sec) => {
      const isMatch = sec.id === `view-${viewName}`;
      sec.hidden = !isMatch;
      sec.classList.toggle('active', isMatch);
    });
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      const isMatch = btn.dataset.view === viewName;
      btn.classList.toggle('active', isMatch);
      if (isMatch) {
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.removeAttribute('aria-current');
      }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.dataset.view));
    });
    document.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.dataset.goto));
    });
  }

  // Service Worker & Install Prompt
  function setupPWAInstall() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
    const installBtn = document.getElementById('install-pwa-btn');
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredInstallPrompt = e;
      installBtn.classList.remove('hidden');
    });
    installBtn.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      deferredInstallPrompt = null;
      installBtn.classList.add('hidden');
    });
  }

  // Dashboard KPI & Topics
  function getTotalLessonsCount() {
    return window.TFA_DATA.topics.reduce((acc, t) => acc + t.lessons.length, 0);
  }

  function updateDashboardStats() {
    const totalLessons = getTotalLessonsCount();
    const doneLessons = state.completedLessons.length;
    const pctLessons = totalLessons ? Math.round((doneLessons / totalLessons) * 100) : 0;

    document.getElementById('stat-lessons-count').textContent = `${doneLessons} / ${totalLessons}`;
    document.getElementById('stat-lessons-pct').textContent = `${pctLessons}%`;
    document.getElementById('prog-lessons').setAttribute('aria-valuenow', String(pctLessons));
    document.getElementById('prog-lessons-fill').style.width = `${pctLessons}%`;

    const { totalAnswered, totalCorrect } = state.quizStats;
    const quizPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    document.getElementById('stat-quiz-score').textContent = `${quizPct}%`;
    document.getElementById('stat-quiz-detail').textContent = `${totalCorrect} risposte corrette su ${totalAnswered} tentate`;

    document.getElementById('stat-written-count').textContent = `${state.completedWritten.length} / ${window.TFA_DATA.writtenTraces.length}`;
    document.getElementById('stat-oral-count').textContent = `${state.completedOral.length} / ${window.TFA_DATA.oralCases.length}`;
  }

  function renderDashboardTopics() {
    const grid = document.getElementById('dashboard-topics-grid');
    grid.innerHTML = '';
    window.TFA_DATA.topics.forEach((topic) => {
      const doneInTopic = topic.lessons.filter((l) => state.completedLessons.includes(l.id)).length;
      const card = document.createElement('article');
      card.className = 'topic-card';
      card.innerHTML = `
        <div>
          <span class="topic-badge" style="background-color: ${topic.color}">${topic.badge}</span>
          <h4>${topic.title}</h4>
          <p>${topic.description}</p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; padding-top:0.5rem; border-top:1px solid var(--border-color);">
          <span class="stat-label">${doneInTopic}/${topic.lessons.length} lezioni lette</span>
          <button class="btn btn-tonal" type="button" data-open-topic="${topic.id}">Apri modulo →</button>
        </div>
      `;
      card.querySelector('[data-open-topic]').addEventListener('click', () => {
        activeTopicFilter = topic.id;
        renderTopicChips();
        renderLessons();
        switchView('lezioni');
      });
      grid.appendChild(card);
    });
  }

  // View 2: Lezioni & Tips
  function renderTopicChips() {
    const container = document.getElementById('topic-filter-chips');
    container.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.type = 'button';
    allChip.className = `chip ${activeTopicFilter === 'all' ? 'active' : ''}`;
    allChip.textContent = 'Tutti gli Argomenti';
    allChip.addEventListener('click', () => {
      activeTopicFilter = 'all';
      renderTopicChips();
      renderLessons();
    });
    container.appendChild(allChip);

    window.TFA_DATA.topics.forEach((t) => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `chip ${activeTopicFilter === t.id ? 'active' : ''}`;
      chip.textContent = `${t.badge}: ${t.shortTitle}`;
      chip.addEventListener('click', () => {
        activeTopicFilter = t.id;
        renderTopicChips();
        renderLessons();
      });
      container.appendChild(chip);
    });
  }

  document.getElementById('lesson-search-input').addEventListener('input', () => {
    renderLessons();
  });

  function renderLessons() {
    const query = document.getElementById('lesson-search-input').value.trim().toLowerCase();
    const container = document.getElementById('lessons-container');
    container.innerHTML = '';

    let renderedCount = 0;

    window.TFA_DATA.topics.forEach((topic) => {
      if (activeTopicFilter !== 'all' && activeTopicFilter !== topic.id) return;

      topic.lessons.forEach((lesson) => {
        const searchable = `${topic.title} ${lesson.title} ${lesson.keyPoints.join(' ')} ${lesson.content} ${lesson.tips.join(' ')}`.toLowerCase();
        if (query && !searchable.includes(query)) return;

        renderedCount++;
        const isCompleted = state.completedLessons.includes(lesson.id);

        const article = document.createElement('article');
        article.className = 'lesson-card';
        article.innerHTML = `
          <div class="lesson-top">
            <div>
              <div class="lesson-meta-tags">
                <span class="topic-badge" style="background-color: ${topic.color}; margin-bottom:0;">${topic.badge} • ${topic.shortTitle}</span>
                <span class="pill-tag pill-outline">⏱ Lettura: ${lesson.readTime}</span>
                <span class="pill-tag pill-outline">🎯 Target: ${lesson.examTarget}</span>
              </div>
              <h3 class="lesson-title">${lesson.title}</h3>
            </div>
            <button class="btn ${isCompleted ? 'btn-primary' : 'btn-ghost'}" type="button" data-toggle-lesson="${lesson.id}">
              ${isCompleted ? '✓ Completata' : 'Segna come studiata'}
            </button>
          </div>

          <div class="keypoints-box">
            <h4>Concetti Chiave da Memorizzare</h4>
            <ul>
              ${lesson.keyPoints.map((kp) => `<li>${kp}</li>`).join('')}
            </ul>
          </div>

          <div class="lesson-body">
            ${lesson.content}
          </div>

          <div class="tips-callout">
            <h4>💡 Tips Esame Scritto &amp; Orale (II Grado)</h4>
            <ul>
              ${lesson.tips.map((tip) => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        `;

        article.querySelector('[data-toggle-lesson]').addEventListener('click', () => {
          const idx = state.completedLessons.indexOf(lesson.id);
          if (idx >= 0) {
            state.completedLessons.splice(idx, 1);
          } else {
            state.completedLessons.push(lesson.id);
          }
          saveState();
          renderLessons();
          renderDashboardTopics();
        });

        container.appendChild(article);
      });
    });

    if (renderedCount === 0) {
      container.innerHTML = `<div class="card"><p class="muted">Nessuna lezione trovata con i filtri correnti. Prova a cercare un altro termine (es. "PEI", "Erikson", "Goleman", "UDL").</p></div>`;
    }
  }

  // View 3: Simulatore Test Preselettivo (Anni Precedenti)
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function setupQuizControls() {
    document.getElementById('start-quiz-btn').addEventListener('click', startQuizSession);
    document.getElementById('reset-quiz-stats-btn').addEventListener('click', () => {
      state.quizStats = { totalAnswered: 0, totalCorrect: 0 };
      saveState();
    });
    document.getElementById('quiz-quit-btn').addEventListener('click', endQuizSessionEarly);
    document.getElementById('quiz-next-btn').addEventListener('click', handleNextQuizQuestion);
  }

  function startQuizSession() {
    const topicFilter = document.getElementById('quiz-topic-select').value;
    const mode = document.getElementById('quiz-mode-select').value;
    const requestedCount = parseInt(document.getElementById('quiz-count-select').value, 10);

    let pool = window.TFA_DATA.quizQuestions.filter(
      (q) => topicFilter === 'all' || q.topicId === topicFilter
    );
    pool = shuffleArray(pool).slice(0, requestedCount);

    // Per ogni domanda mescoliamo anche l'ordine delle opzioni mantenendo traccia della risposta esatta
    const preparedQuestions = pool.map((q) => {
      const indexedOptions = q.options.map((text, idx) => ({
        text,
        isCorrect: idx === q.correctIndex
      }));
      const shuffledOptions = shuffleArray(indexedOptions);
      return {
        ...q,
        shuffledOptions,
        selectedOptionIndex: null
      };
    });

    activeQuizSession = {
      mode,
      questions: preparedQuestions,
      currentIndex: 0,
      secondsElapsed: 0
    };

    document.getElementById('quiz-setup-panel').hidden = true;
    document.getElementById('quiz-results-panel').hidden = true;
    document.getElementById('quiz-arena').hidden = false;

    clearInterval(quizTimerInterval);
    updateQuizTimerDisplay();
    quizTimerInterval = setInterval(() => {
      if (!activeQuizSession) return;
      activeQuizSession.secondsElapsed++;
      updateQuizTimerDisplay();
    }, 1000);

    renderCurrentQuizQuestion();
  }

  function updateQuizTimerDisplay() {
    if (!activeQuizSession) return;
    const mins = String(Math.floor(activeQuizSession.secondsElapsed / 60)).padStart(2, '0');
    const secs = String(activeQuizSession.secondsElapsed % 60).padStart(2, '0');
    document.getElementById('quiz-timer-display').textContent = `⏱ ${mins}:${secs}`;
  }

  function renderCurrentQuizQuestion() {
    const session = activeQuizSession;
    const currentQ = session.questions[session.currentIndex];
    const total = session.questions.length;

    document.getElementById('quiz-question-counter').textContent = `Domanda ${session.currentIndex + 1} di ${total}`;
    document.getElementById('quiz-cycle-badge').textContent = currentQ.cycle;
    document.getElementById('quiz-question-text').textContent = currentQ.question;

    const optionsList = document.getElementById('quiz-options-list');
    optionsList.innerHTML = '';

    const feedbackBox = document.getElementById('quiz-feedback-box');
    feedbackBox.hidden = true;
    feedbackBox.innerHTML = '';

    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.disabled = currentQ.selectedOptionIndex === null;
    nextBtn.textContent = session.currentIndex === total - 1 ? 'Concludi e Vedi Esito →' : 'Domanda Successiva →';

    const letters = ['A', 'B', 'C', 'D'];
    currentQ.shuffledOptions.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <span class="option-letter">${letters[idx]}</span>
        <span>${opt.text}</span>
      `;
      btn.addEventListener('click', () => handleSelectQuizOption(idx));
      optionsList.appendChild(btn);
    });
  }

  function handleSelectQuizOption(selectedIdx) {
    const session = activeQuizSession;
    const currentQ = session.questions[session.currentIndex];

    // Se in modalità allenamento ha già risposto a questo quesito, blocca modifiche
    if (session.mode === 'training' && currentQ.selectedOptionIndex !== null) {
      return;
    }

    currentQ.selectedOptionIndex = selectedIdx;
    const optionButtons = document.querySelectorAll('#quiz-options-list .quiz-option-btn');

    if (session.mode === 'training') {
      const chosen = currentQ.shuffledOptions[selectedIdx];
      state.quizStats.totalAnswered++;
      if (chosen.isCorrect) {
        state.quizStats.totalCorrect++;
      }
      saveState();

      optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (currentQ.shuffledOptions[idx].isCorrect) {
          btn.classList.add('correct');
        } else if (idx === selectedIdx && !chosen.isCorrect) {
          btn.classList.add('wrong');
        }
      });

      const feedbackBox = document.getElementById('quiz-feedback-box');
      feedbackBox.hidden = false;
      feedbackBox.innerHTML = `
        <strong>${chosen.isCorrect ? '✅ Risposta Esatta (+0,5 pt)' : '❌ Risposta Errata (0 pt)'}</strong>
        <p style="margin:0.4rem 0 0;">${currentQ.explanation}</p>
      `;
    } else {
      optionButtons.forEach((btn, idx) => {
        btn.classList.toggle('selected', idx === selectedIdx);
      });
    }

    document.getElementById('quiz-next-btn').disabled = false;
  }

  function handleNextQuizQuestion() {
    if (!activeQuizSession) return;
    if (activeQuizSession.currentIndex < activeQuizSession.questions.length - 1) {
      activeQuizSession.currentIndex++;
      renderCurrentQuizQuestion();
    } else {
      finishQuizSession();
    }
  }

  function endQuizSessionEarly() {
    clearInterval(quizTimerInterval);
    activeQuizSession = null;
    document.getElementById('quiz-arena').hidden = true;
    document.getElementById('quiz-results-panel').hidden = true;
    document.getElementById('quiz-setup-panel').hidden = false;
  }

  function finishQuizSession() {
    clearInterval(quizTimerInterval);
    const session = activeQuizSession;
    let correctCount = 0;

    session.questions.forEach((q) => {
      const chosen = q.selectedOptionIndex !== null ? q.shuffledOptions[q.selectedOptionIndex] : null;
      const isRight = Boolean(chosen && chosen.isCorrect);
      if (isRight) correctCount++;

      if (session.mode === 'exam' && q.selectedOptionIndex !== null) {
        state.quizStats.totalAnswered++;
        if (isRight) state.quizStats.totalCorrect++;
      }
    });

    if (session.mode === 'exam') {
      saveState();
    }

    const total = session.questions.length;
    const miurPoints = (correctCount * 0.5).toFixed(1);
    const maxMiurPoints = (total * 0.5).toFixed(1);
    const pct = Math.round((correctCount / total) * 100);

    document.getElementById('quiz-arena').hidden = true;
    const resultsPanel = document.getElementById('quiz-results-panel');
    resultsPanel.hidden = false;

    resultsPanel.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:1rem; margin-bottom:1.25rem;">
        <div>
          <span class="pill-tag pill-outline">Esito Simulazione</span>
          <h3 style="margin:0.4rem 0 0.2rem; font-size:1.45rem;">Hai risposto esattamente a ${correctCount} su ${total} quesiti (${pct}%)</h3>
          <p class="muted">Punteggio calcolato secondo i criteri ufficiali TFA (+0,5 pt risposta esatta, 0 pt errata/omessa): <strong>${miurPoints} / ${maxMiurPoints} punti</strong></p>
        </div>
        <button class="btn btn-primary" type="button" id="new-quiz-from-results-btn">Nuova Simulazione</button>
      </div>

      <h4>Riepilogo Commentato delle Domande</h4>
      <div class="lessons-list">
        ${session.questions
          .map((q, idx) => {
            const chosen = q.selectedOptionIndex !== null ? q.shuffledOptions[q.selectedOptionIndex] : null;
            const correctOpt = q.shuffledOptions.find((o) => o.isCorrect);
            const isRight = Boolean(chosen && chosen.isCorrect);
            return `
              <div class="card" style="border-left: 4px solid ${isRight ? 'var(--accent-emerald)' : 'var(--accent-rose)'};">
                <span class="pill-tag pill-outline">${q.cycle}</span>
                <p style="font-weight:700; margin:0.5rem 0;">${idx + 1}. ${q.question}</p>
                <p style="margin:0.25rem 0; font-size:0.9rem;">
                  <strong>La tua risposta:</strong> ${chosen ? chosen.text : 'Nessuna risposta'} ${isRight ? '✅' : '❌'}
                </p>
                ${
                  !isRight
                    ? `<p style="margin:0.25rem 0; font-size:0.9rem; color:var(--accent-emerald);"><strong>Risposta corretta:</strong> ${correctOpt.text}</p>`
                    : ''
                }
                <p class="muted" style="margin-top:0.45rem; font-size:0.88rem;"><strong>Spiegazione:</strong> ${q.explanation}</p>
              </div>
            `;
          })
          .join('')}
      </div>
    `;

    document.getElementById('new-quiz-from-results-btn').addEventListener('click', () => {
      resultsPanel.hidden = true;
      document.getElementById('quiz-setup-panel').hidden = false;
    });
  }

  // View 4: Laboratorio Prova Scritta
  function renderWrittenSelector() {
    const container = document.getElementById('written-traces-selector');
    container.innerHTML = '';
    window.TFA_DATA.writtenTraces.forEach((trace, idx) => {
      const isDone = state.completedWritten.includes(trace.id);
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `chip ${activeWrittenId === trace.id ? 'active' : ''}`;
      chip.textContent = `Traccia ${idx + 1}: ${trace.title.slice(0, 38)}... ${isDone ? '✓' : ''}`;
      chip.addEventListener('click', () => {
        activeWrittenId = trace.id;
        renderWrittenSelector();
        renderWrittenWorkspace();
      });
      container.appendChild(chip);
    });
  }

  function renderWrittenWorkspace() {
    const trace = window.TFA_DATA.writtenTraces.find((t) => t.id === activeWrittenId);
    const savedDraft = state.writtenDrafts[trace.id] || '';
    const isCompleted = state.completedWritten.includes(trace.id);
    const container = document.getElementById('written-workspace');

    container.innerHTML = `
      <div class="card">
        <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-start; gap:1rem; margin-bottom:1rem;">
          <div>
            <span class="pill-tag pill-outline">${trace.university}</span>
            <h3 style="margin:0.45rem 0 0.35rem;">${trace.title}</h3>
          </div>
          <button class="btn ${isCompleted ? 'btn-primary' : 'btn-ghost'}" type="button" id="toggle-written-done-btn">
            ${isCompleted ? '✓ Traccia Completata' : 'Segna traccia come svolta'}
          </button>
        </div>

        <div class="keypoints-box">
          <h4>Consegna Ufficiale della Prova Scritta</h4>
          <p style="margin:0; font-weight:600;">"${trace.prompt}"</p>
        </div>

        <div class="written-grid">
          <div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.45rem;">
              <label for="written-editor" style="font-weight:700; font-size:0.92rem;">Il tuo svolgimento (Target consigliato: 150–260 parole / 15–22 righe)</label>
              <span class="stat-badge" id="written-word-counter">0 parole • ~0 righe</span>
            </div>
            <textarea id="written-editor" class="textarea-field" placeholder="Inizia a scrivere qui il tuo elaborato seguendo la struttura in 4 paragrafi (1. Quadro normativo → 2. Autori psicopedagogici → 3. Metodologie nel II Grado → 4. Ruolo del docente di sostegno)...">${savedDraft}</textarea>
            <div style="display:flex; flex-wrap:wrap; gap:0.7rem; margin-top:0.85rem;">
              <button class="btn btn-tonal" type="button" id="show-model-answer-btn">Mostra/Nascondi Svolgimento Modello 30/30</button>
              <button class="btn btn-ghost" type="button" id="clear-written-draft-btn">Svuota Bozza</button>
            </div>
            <div id="model-answer-container" class="model-answer-box" hidden>
              <strong>🏆 Svolgimento Modello da 30/30 (Calibrato per la Secondaria di II Grado):</strong>
              <p style="margin:0.6rem 0 0;">${trace.modelAnswer}</p>
            </div>
          </div>

          <div class="card" style="background-color:var(--bg-elevated);">
            <h4 style="margin-top:0;">Griglia di Autovalutazione Commissione</h4>
            <p class="muted" style="font-size:0.86rem; margin-bottom:0.8rem;">Spunta i punti man mano che li inserisci nel tuo elaborato per verificare la completezza prima di consegnare:</p>
            <div>
              ${trace.requiredElements
                .map(
                  (req, i) => `
                <label class="checklist-item">
                  <input type="checkbox" data-check-req="${i}" style="margin-top:0.25rem;" />
                  <span>${req}</span>
                </label>
              `
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    const editor = document.getElementById('written-editor');
    const wordCounter = document.getElementById('written-word-counter');

    function updateMetrics() {
      const text = editor.value.trim();
      const words = text ? text.split(/\s+/).length : 0;
      const approxLines = Math.ceil(words / 11);
      wordCounter.textContent = `${words} parole • ~${approxLines} righe`;
    }

    updateMetrics();
    editor.addEventListener('input', () => {
      state.writtenDrafts[trace.id] = editor.value;
      updateMetrics();
      saveState();
    });

    document.getElementById('show-model-answer-btn').addEventListener('click', () => {
      const box = document.getElementById('model-answer-container');
      box.hidden = !box.hidden;
    });

    document.getElementById('clear-written-draft-btn').addEventListener('click', () => {
      editor.value = '';
      state.writtenDrafts[trace.id] = '';
      updateMetrics();
      saveState();
    });

    document.getElementById('toggle-written-done-btn').addEventListener('click', () => {
      const idx = state.completedWritten.indexOf(trace.id);
      if (idx >= 0) {
        state.completedWritten.splice(idx, 1);
      } else {
        state.completedWritten.push(trace.id);
      }
      saveState();
      renderWrittenSelector();
      renderWrittenWorkspace();
    });
  }

  // View 5: Simulatore Prova Orale & Studi di Caso
  function renderOralCases() {
    const container = document.getElementById('oral-cases-container');
    container.innerHTML = '';

    window.TFA_DATA.oralCases.forEach((oralCase) => {
      const isDone = state.completedOral.includes(oralCase.id);
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <div class="lesson-top">
          <div>
            <span class="pill-tag pill-outline">Simulazione Colloquio Orale — Secondaria II Grado</span>
            <h3 class="lesson-title">${oralCase.title}</h3>
          </div>
          <button class="btn ${isDone ? 'btn-primary' : 'btn-ghost'}" type="button" data-toggle-oral="${oralCase.id}">
            ${isDone ? '✓ Caso Padroneggiato' : 'Segna come padroneggiato'}
          </button>
        </div>

        <div class="oral-context-box">
          <strong>📋 Contesto del Caso:</strong>
          <p style="margin:0.35rem 0 0.75rem;">${oralCase.context}</p>
          <strong>🎙 Domanda della Commissione:</strong>
          <p style="margin:0.35rem 0 0; font-weight:600; color:var(--primary);">"${oralCase.commissionQuestion}"</p>
        </div>

        <div class="oral-timer-bar">
          <strong>⏱ Timer Simulazione Esposizione Orale (5:00 min):</strong>
          <span id="oral-timer-${oralCase.id}" style="font-weight:800; font-variant-numeric:tabular-nums;">05:00</span>
          <button class="btn btn-tonal" type="button" data-start-oral-timer="${oralCase.id}">Avvia / Pausa</button>
          <button class="btn btn-ghost" type="button" data-reset-oral-timer="${oralCase.id}">Reset 5:00</button>
        </div>

        <details style="margin-top:0.75rem;">
          <summary style="cursor:pointer; font-weight:700; color:var(--primary);">Mostra Scaletta Risolutiva Completa e Riferimenti da Citare all'Orale</summary>
          <div style="margin-top:0.85rem; display:flex; flex-direction:column; gap:0.65rem;">
            ${oralCase.checklist
              .map(
                (item) => `
              <div class="keypoints-box" style="margin-bottom:0;">
                <h4 style="text-transform:none; font-size:0.95rem;">${item.step}</h4>
                <p style="margin:0; font-size:0.91rem;">${item.detail}</p>
              </div>
            `
              )
              .join('')}
          </div>
        </details>
      `;

      card.querySelector('[data-toggle-oral]').addEventListener('click', () => {
        const idx = state.completedOral.indexOf(oralCase.id);
        if (idx >= 0) {
          state.completedOral.splice(idx, 1);
        } else {
          state.completedOral.push(oralCase.id);
        }
        saveState();
        renderOralCases();
      });

      const timerDisplay = card.querySelector(`#oral-timer-${oralCase.id}`);
      if (!oralTimers[oralCase.id]) {
        oralTimers[oralCase.id] = { remaining: 300, interval: null };
      }

      card.querySelector('[data-start-oral-timer]').addEventListener('click', () => {
        const t = oralTimers[oralCase.id];
        if (t.interval) {
          clearInterval(t.interval);
          t.interval = null;
        } else {
          t.interval = setInterval(() => {
            if (t.remaining > 0) {
              t.remaining--;
              const m = String(Math.floor(t.remaining / 60)).padStart(2, '0');
              const s = String(t.remaining % 60).padStart(2, '0');
              timerDisplay.textContent = `${m}:${s}`;
            } else {
              clearInterval(t.interval);
              t.interval = null;
            }
          }, 1000);
        }
      });

      card.querySelector('[data-reset-oral-timer]').addEventListener('click', () => {
        const t = oralTimers[oralCase.id];
        clearInterval(t.interval);
        t.interval = null;
        t.remaining = 300;
        timerDisplay.textContent = '05:00';
      });

      container.appendChild(card);
    });
  }
})();
