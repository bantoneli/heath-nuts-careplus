/**
 * main.js
 * Inicialização global do dashboard Health Nuts.
 * Registra event listeners e renderiza dados mock.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'home', isSubpage: false });
  renderFooter();
  initEventListeners();
  initDashboard();
});

function initEventListeners() {
  const btnAtualizar = document.querySelector('#btn-atualizar');
  const btnNovoAgendamento = document.querySelector('#btn-novo-agendamento');
  const btnVerBeneficios = document.querySelector('#btn-ver-beneficios');
  const btnVerRanking = document.querySelector('#btn-ver-ranking');
  const btnVerRegulamento = document.querySelector('#btn-ver-regulamento');

  if (btnAtualizar) btnAtualizar.addEventListener('click', handleAtualizar);
  if (btnNovoAgendamento) btnNovoAgendamento.addEventListener('click', handleNovoAgendamento);
  if (btnVerBeneficios) btnVerBeneficios.addEventListener('click', handleVerBeneficios);
  if (btnVerRanking) btnVerRanking.addEventListener('click', handleVerRanking);
  if (btnVerRegulamento) btnVerRegulamento.addEventListener('click', handleVerRegulamento);
}

/**
 * Renderiza dados iniciais do dashboard via mock data.
 */
async function initDashboard() {
  //renderRanking(DashboardData.ranking);
  renderAppointments(DashboardData.appointments);
  renderActions(ActionsData.actions, {
    showExpiry:false, 
    category:'Hábitos', 
    limit: 1, 
    specialty: 'Endocrinologia'
  });
}
