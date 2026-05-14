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

    <div class="appointment-item">

      <span class="appointment-item__specialty">
        ${item.specialty}
      </span>

      <p class="appointment-item__detail mb-1">
        ${item.date}
        &bull;
        ${item.time}
        &bull;
        ${item.doctor}
        &bull;
        ${item.clinic}
      </p>

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
