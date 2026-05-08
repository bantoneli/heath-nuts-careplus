(function () {
  'use strict';

  const DASHBOARD_HREF = '../index.html';
  const MOCK_LOGIN_MS = 500;

  function showFeedback(msg, type = 'error') {
    const box = document.getElementById('feedback-msg');
    const text = document.getElementById('feedback-text');
    const icon = box.querySelector('i');
    box.className = `feedback-msg ${type}`;
    icon.className =
      type === 'error' ? 'bi bi-exclamation-circle-fill' : 'bi bi-check-circle-fill';
    text.textContent = msg;
  }

  function redirectToDashboard() {
    window.location.href = DASHBOARD_HREF;
  }

  function mockLogin() {
    try {
      localStorage.setItem('healthnuts_mock_entrada', '1');
    } catch (e) {
      /* storage indisponível (ex.: modo privado restrito) */
    }
    showFeedback('Login realizado! Redirecionando…', 'success');
    setTimeout(redirectToDashboard, 650);
  }

  function simulateDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-senha');
    if (toggle) {
      toggle.addEventListener('click', () => {
        const input = document.getElementById('senha');
        const icon = document.getElementById('toggle-icon');
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        icon.className = show ? 'bi bi-eye-slash' : 'bi bi-eye';
      });
    }

    const form = document.getElementById('login-form');
    const btn = document.getElementById('btn-submit');
    if (!form || !btn) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      btn.classList.add('loading');
      try {
        await simulateDelay(MOCK_LOGIN_MS);
        mockLogin();
      } finally {
        btn.classList.remove('loading');
      }
    });
  });
})();
