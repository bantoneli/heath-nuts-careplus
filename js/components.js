/**
 * Componentes de UI compartilhados: renders e shell (header/footer).
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

function renderNotificationsList(data) {
  const container = document.querySelector('#notifications-list');
  if (!container) return;

  const groupsHtml = data.groups.map(group => {
    const itemsHtml = group.items.map(item => {
      const iconColorClass = item.iconColor === 'accent'
        ? 'icon-circle--accent'
        : 'icon-circle--primary';

      let actionsHtml = '';
      if (item.pts) {
        actionsHtml += `<span class="badge-pts badge-pts--yellow">+${item.pts} pts</span>`;
      }
      if (item.badge) {
        actionsHtml += `<span class="badge-pts">${item.badge}</span>`;
      }
      if (item.action) {
        actionsHtml += `
          <button class="btn btn-primary-custom btn-sm notification-item__cta">
            ${item.action.icon ? `<i class="bi ${item.action.icon}"></i>` : ''}${item.action.label}
          </button>`;
      }

      return `
        <div class="notification-item ${item.unread ? 'notification-item--unread' : ''}">
          <div class="icon-circle ${iconColorClass}">
            <i class="bi ${item.icon}"></i>
          </div>
          <div class="notification-item__body">
            <span class="notification-item__title">${item.title}</span>
            <span class="notification-item__subtitle">${item.subtitle}</span>
          </div>
          <div class="notification-item__actions">
            ${actionsHtml}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="notification-group">
        <h6 class="notification-group__title">${group.label}</h6>
        ${itemsHtml}
      </div>`;
  }).join('');

  const endHtml = `
    <div class="notification-list__end">
      <i class="bi bi-envelope-open"></i>
      <span>Sem mais notificações</span>
    </div>`;

  container.innerHTML = groupsHtml + endHtml;
}

function handleMarcarComoLidas() {
  const unreadItems = document.querySelectorAll('.notification-item--unread');
  unreadItems.forEach(item => item.classList.remove('notification-item--unread'));
}

function renderHeader(options = {}) {
  const placeholder = document.querySelector('#header-placeholder');
  if (!placeholder) return;

  const activePage = options.activePage || 'home';
  const prefix = options.isSubpage ? '../' : '';
  const homeHref = prefix + 'index.html';
  const notifHref = prefix + 'pages/notificacoes.html';

  const menuItems = [
    { label: 'Início',        icon: 'bi-house-door',        href: homeHref,                                  pageKey: 'home' },
    { label: 'Agendamentos',  icon: 'bi-calendar2-event',   href: prefix + 'pages/agendamento.html',         pageKey: 'agendamento' },
    { label: 'Rankings',      icon: 'bi-trophy',            href: prefix + 'pages/rankings.html',            pageKey: 'rankings' },
    { label: 'Benefícios',    icon: 'bi-gift',              href: prefix + 'pages/beneficios.html',          pageKey: 'beneficios' },
    { label: 'Notificações',  icon: 'bi-bell',              href: notifHref,                                 pageKey: 'notifications' },
    { label: 'Regulamento',   icon: 'bi-file-earmark-text', href: prefix + 'pages/regulamento.html',         pageKey: 'regulamento' },
    { divider: true },
    { label: 'Perfil',        icon: 'bi-person-circle',     href: '#',                                       pageKey: 'perfil' },
    { label: 'Sair',          icon: 'bi-box-arrow-right',   href: prefix + 'pages/login.html',               pageKey: 'login' },
  ];

  const menuItemsHtml = menuItems.map(item => {
    if (item.divider) return '<hr class="sidebar-menu__divider">';
    const activeClass = item.pageKey === activePage ? ' sidebar-menu__item--active' : '';
    return `<a href="${item.href}" class="sidebar-menu__item${activeClass}">
        <i class="bi ${item.icon}"></i>${item.label}
      </a>`;
  }).join('');

  placeholder.innerHTML = `
  <header class="header py-2">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4 d-flex align-items-center gap-2">
          <button class="btn btn-sm p-1 header__nav-link" data-bs-toggle="offcanvas" data-bs-target="#mainMenu" aria-label="Menu">
            <i class="bi bi-grid-3x3-gap-fill fs-5"></i>
          </button>
          <span class="header__nav-link d-none d-sm-inline" role="button" data-bs-toggle="offcanvas" data-bs-target="#mainMenu">Menu</span>
        </div>
        <div class="col-4 text-center d-flex align-items-center justify-content-center gap-2">
          <span class="header__logo-icon">
            <img src="${prefix}assets/svg/health_nuts_icon.svg" alt="Health Nuts" width="36" height="36">
          </span>
          <span class="header__brand">Health Nuts</span>
        </div>
        <div class="col-4 d-flex align-items-center justify-content-end gap-2">
          <span class="header__nav-link d-none d-md-inline ${activePage === 'notifications' ? '' : 'active'}">
            ${activePage === 'notifications' ? 'Notificações' : 'Home'}
          </span>
          <a href="${homeHref}" class="header__nav-link ${activePage === 'home' ? 'active' : ''}" aria-label="Home">
            <i class="bi bi-house-door-fill fs-5"></i>
          </a>
          <a href="${notifHref}" class="header__nav-link ${activePage === 'notifications' ? 'active' : ''}" aria-label="Notificações">
            <i class="bi bi-bell-fill fs-5"></i>
          </a>
        </div>
      </div>
    </div>
  </header>

  <div class="offcanvas offcanvas-start" tabindex="-1" id="mainMenu" aria-labelledby="mainMenuLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="mainMenuLabel">
        <i class="bi bi-grid-3x3-gap-fill me-2"></i>Menu
      </h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Fechar"></button>
    </div>
    <div class="offcanvas-body p-0">
      <nav class="sidebar-menu">
        ${menuItemsHtml}
      </nav>
    </div>
  </div>`;
}

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
