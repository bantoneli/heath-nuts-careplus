/**
 * main.js
 * Inicialização global do dashboard Health Nuts.
 * Registra event listeners e renderiza dados mock.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'home', isSubpage: false });
  renderFooter();
  initDashboard();
});

function initEventListeners() {
}

//Renderiza dados iniciais do dashboard via mock data.
async function initDashboard() {

  // cria agendamento automático inicial
  createInitialNutritionAppointment();

  // pega agendamentos do usuário
  const userAppointments = getUserAppointmentsData();

  renderAppointments(userAppointments);

  renderActions(ActionsData.actions, {
    showExpiry:false,
    category:'Hábitos',
    limit: 1,
    specialty: 'Endocrinologia'
  });

  renderFutureAppointmentsCount();
}

function formatDate(dateString) {
    const date = parseLocalDate(dateString);

    if (!date) return '';

    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
}

function renderAppointments(data) {
  const container = document.querySelector('#appointments-list');

  if (!container) return;

  if (!data.length) {
    container.innerHTML = `
      <p class="text-muted mb-0">
        Nenhum agendamento encontrado.
      </p>
    `;
    return;
  }

  container.innerHTML = data.map(item => `

    <div class="d-flex justify-content-between align-items-center py-3 border-bottom">

      <div class="flex-grow-1 min-w-0 pe-3">

        <div class="fw-bold text-dark small mb-1">
          ${item.specialty}
        </div>

        <div class="text-muted small text-truncate">
          ${item.doctor}
          &bull;
          ${item.clinic}
        </div>

      </div>

      <div class="text-end flex-shrink-0">

        <div class="fw-semibold small text-dark">
          ${formatDate(item.date)}
        </div>

        <div class="app-time fw-bold fs-5 lh-1">
          ${item.time}
        </div>

      </div>

    </div>

  `).join('');
}

function renderFutureAppointmentsCount() {

  const element = document.querySelector(
    '#future-appointments-count'
  );

  if (!element) return;

  const appointments = getUserAppointmentsData();

  const total = appointments.length;

  const label =
    total === 1
      ? '1 futura'
      : `${total} futuras`;

  element.textContent = label;
}
