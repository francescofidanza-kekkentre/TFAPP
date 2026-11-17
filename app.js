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

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      return { ...structuredClone(defaultState), ...JSON.parse(raw) };
    } catch { return structuredClone(defaultState); }
  }

  function saveState() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
    updateDashboardStats();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    state.theme = theme;
    saveState();
  }

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(state.theme);
    setupNavigation();
    setupPWAInstall();
    // ... (rest of initialization)
    document.getElementById('theme-toggle-btn').addEventListener('click', () => {
      const next = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });
  // ... rest of the file