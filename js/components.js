/**
 Mock de dados para o dashboard Health Nuts.
 */

const DashboardData = {
  user: { name: 'João' },
  stats: {
    nuts: '3.456',
    consultas: 2,
    rankingCombinado: 234,
    rankingEmpresa: 3
  },
  priorityPts: 150,
  mission: {
    label: 'Missão do dia',
    description: 'Auferir pressão arterial',
    pts: 10
  },
  streak: {
    days: 5,
    pts: 10
  },
  ranking: [
    { specialty: 'Nutrição', pts: 1250, rank: 120, img: 'assets/img/nutricao.png', colorClass: 'text-success' },
    { specialty: 'Psicologia', pts: 1320, rank: 130, img: 'assets/img/psicologia.png', colorClass: 'text-info' },
    { specialty: 'Endocrinologia', pts: 1450, rank: 167, img: 'assets/img/endocrinologia.png', colorClass: 'text-danger' }
  ],
  appointments: [
    { specialty: 'Endocrinologista', date: 'Seg, 12 Nov', time: '09:00', doctor: 'Dra. Cora Coralina' },
    { specialty: 'Nutricionista', date: 'Qui, 22 Nov', time: '14:30', doctor: 'Nutricionista José Pereira' },
    { specialty: 'Dermatologista', date: 'Sex, 06 Dez', time: '11:15', doctor: 'Dr. João Pelin' }
  ],
  badges: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia']
};

/**
 * Simula fetch assíncrono com delay para feedback visual.
 * TODO: Devemos desabilitar após integração com a API.
 */
async function simulateLoading(ms = 800) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Mostra spinner no botão e desabilita durante loading.
 */
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

/**
 * Handler: Botão "Atualizar" — recarrega stats com feedback visual.
 */
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

/**
 * Handler: Botão Novo Agendamento abre modal ou exibe alerta.
 */
function handleNovoAgendamento() {
  alert('Funcionalidade de agendamento será implementada em breve!');
}

/**
 * Handler: Botão Ver Benefícios
 */
function handleVerBeneficios() {
  alert('Página de benefícios será implementada em breve!');
}

/**
 * Handler: Botão Ver Ranking
 */
function handleVerRanking() {
  alert('Ranking completo será implementado em breve!');
}

/**
 * Handler: Botão Ver Regulamento
 */
function handleVerRegulamento() {
  alert('Regulamento dos badges será implementado em breve!');
}

/**
 * Renderiza a lista de rankings a partir dos dados mock.
 */
function renderRanking(data) {
  const container = document.querySelector('#ranking-list');
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="ranking-item">
      <div class="ranking-item__icon">
        <img src="${item.img}" alt="${item.specialty}" width="36" height="36">
      </div>
      <div class="ranking-item__info">
        <span class="ranking-item__name">${item.specialty}</span>
        <span class="ranking-item__pts">${item.pts.toLocaleString('pt-BR')} pts</span>
      </div>
      <span class="ranking-item__rank">${item.rank}º</span>
    </div>
  `).join('');
}

/**
 * Renderiza a lista de agendamentos a partir dos dados mock.
 */
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

/**
 * Header
 */
function renderHeader(options = {}) {
  const placeholder = document.querySelector('#header-placeholder');
  if (!placeholder) return;

  const activePage = options.activePage || 'home';

  placeholder.innerHTML = `
  <header class="header py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4 d-flex align-items-center gap-2">
          <button class="btn btn-sm p-1 header__nav-link" aria-label="Menu">
            <i class="bi bi-grid-3x3-gap-fill fs-5"></i>
          </button>
          <span class="header__nav-link d-none d-sm-inline">Menu</span>
        </div>
        <div class="col-4 text-center d-flex align-items-center justify-content-center gap-2">
          <span class="header__logo-icon">
            <img src="assets/svg/health_nuts_icon.svg" alt="Health Nuts" width="36" height="36">
          </span>
          <span class="header__brand">Health Nuts</span>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end gap-2">
          <span class="header__nav-link d-none d-md-inline">Home</span>
          <a href="index.html" class="header__nav-link ${activePage === 'home' ? 'active' : ''}" aria-label="Home">
            <i class="bi bi-house-door-fill fs-5"></i>
          </a>
          <a href="#" class="header__nav-link" aria-label="Perfil">
            <i class="bi bi-person-circle fs-5"></i>
          </a>
        </div>
      </div>
    </div>
  </header>`;
}

/**
 * Footer
 */
function renderFooter() {
  const placeholder = document.querySelector('#footer-placeholder');
  if (!placeholder) return;

  placeholder.innerHTML = `
  <footer class="footer">
    <div class="container">
      Feito com <span class="footer__heart">&hearts;</span> por Care Plus. Todos os direitos reservados.
    </div>
  </footer>`;
}
