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

  const btnNovoAgendamento = document.querySelector('#btn-novo-agendamento');
  const btnVerBeneficios = document.querySelector('#btn-ver-beneficios');
  const btnVerRanking = document.querySelector('#btn-ver-ranking');
  const btnVerRegulamento = document.querySelector('#btn-ver-regulamento');

  if (btnNovoAgendamento) btnNovoAgendamento.addEventListener('click', handleNovoAgendamento);
  if (btnVerBeneficios) btnVerBeneficios.addEventListener('click', handleVerBeneficios);
  if (btnVerRanking) btnVerRanking.addEventListener('click', handleVerRanking);
  if (btnVerRegulamento) btnVerRegulamento.addEventListener('click', handleVerRegulamento);
}

//Renderiza dados iniciais do dashboard via mock data.
async function initDashboard() {
  renderAppointments(DashboardData.appointments);
  renderActions(ActionsData.actions, {
    showExpiry:false, 
    category:'Hábitos', 
    limit: 1, 
    specialty: 'Endocrinologia'
  });
}

function renderAppointments(data) {
  const container = document.querySelector('#appointments-list');
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="appointment-item">
      <span class="appointment-item__specialty">${item.specialty}</span>
      <p class="appointment-item__detail mb-0">${item.date} &bull; ${item.time} &bull; ${item.doctor}</p>
    </div>
  `).join('');
}
