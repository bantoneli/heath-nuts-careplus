/**
 * Comportamentos provisórios (delay simulado, alerts de placeholder).
 * Remover ou trocar por chamadas reais quando a API existir.
 */

async function simulateLoading(ms = 800) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function setButtonLoading(btn, loading) {
  if (loading) {
    btn.dataset.originalHtml = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Carregando…';
  } else {
    btn.disabled = false;
    btn.innerHTML = btn.dataset.originalHtml || btn.innerHTML;
  }
}

async function handleAtualizar() {
  const btn = document.querySelector('#btn-atualizar');
  if (!btn) return;

  setButtonLoading(btn, true);
  await simulateLoading(1000);

  const statsGrid = document.querySelector('#stats-grid');
  if (statsGrid) {
    statsGrid.classList.add('animate-pulse');
    setTimeout(() => statsGrid.classList.remove('animate-pulse'), 600);
  }

  setButtonLoading(btn, false);
}

function handleNovoAgendamento() {
  window.location.href = 'pages/agendamento.html';
}

function handleVerBeneficios() {
  alert('Página de benefícios será implementada em breve!');
}

function handleVerRanking() {
  alert('Ranking completo será implementado em breve!');
}

function handleVerRegulamento() {
  alert('Regulamento dos badges será implementado em breve!');
}

function handleAtivarLembretesMock() {
  alert('Lembretes ativados com sucesso!');
}

function handleConfigurarNotificacoesMock() {
  alert('Configurações de notificação serão implementadas em breve!');
}
