//Componentes de UI compartilhados: renders e shell (header/footer).

function renderHeader(options = {}) {
  const placeholder = document.querySelector('#header-placeholder');
  if (!placeholder) return;

  const activePage = options.activePage || 'home';
  const prefix = options.isSubpage ? '../' : '';

  const menuItems = [
    { label: 'Início',        icon: 'bi-house-door',        href: prefix + 'index.html',                                  pageKey: 'home' },
    { label: 'Agendamentos',  icon: 'bi-calendar2-event',   href: prefix + 'pages/agendamento.html',         pageKey: 'agendamento' },
    { label: 'Rankings',      icon: 'bi-trophy',            href: prefix + 'pages/rankings.html',            pageKey: 'rankings' },
    { label: 'Benefícios',    icon: 'bi-gift',              href: prefix + 'pages/beneficios.html',          pageKey: 'beneficios' },
    { label: 'Notificações',  icon: 'bi-bell',              href: prefix + 'pages/notificacoes.html',                                 pageKey: 'notifications' },
    { label: 'Regulamento',   icon: 'bi-file-earmark-text', href: prefix + 'pages/regulamento.html',         pageKey: 'regulamento' },
    { divider: true },
    { label: 'Perfil',        icon: 'bi-person-circle',     href: '#',                                       pageKey: 'perfil' },
    { label: 'Sair',          icon: 'bi-box-arrow-right',   href: prefix + 'pages/login.html',               pageKey: 'login', mockClearEntrada: true },
  ];

  const activeMenuItem = menuItems.find(m => m.pageKey === activePage) || menuItems[0];
  const headerLabel = activeMenuItem.label;
  const headerIcon = activeMenuItem.icon;

  const menuItemsHtml = menuItems.map(item => {
    if (item.divider) return '<hr class="sidebar-menu__divider">';
    const activeClass = item.pageKey === activePage ? ' sidebar-menu__item--active' : '';
    const mockEntradaClear = item.mockClearEntrada ? ' data-mock-entrada-clear="1"' : '';
    return `<a href="${item.href}" class="sidebar-menu__item${activeClass}"${mockEntradaClear}>
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
          <span class="header__nav-link d-none d-md-inline active">${headerLabel}</span>
          <a href="${activeMenuItem.href}" class="header__nav-link active" aria-label="${headerLabel}">
            <i class="bi ${headerIcon} fs-5"></i>
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

function renderSpecialtiesFilters(data, activeSpecialty = null) {
  const container = document.querySelector('#specialties-filters');
  if (!container) return;

  const pillsHtml = data.specialties.map(s => {
    const isActive = activeSpecialty && s === activeSpecialty;
    const activeClass = isActive ? ' specialties-filters__pill--active' : '';

    return `
      <button 
        type="button"
        class="specialties-filters__pill${activeClass}" 
        data-specialty="${s}">
        ${s}
      </button>
    `;
  }).join('');

  container.innerHTML = `
    <div class="flex-nowrap specialties-filters__pills">
      ${pillsHtml}
    </div>
  `;
}

function renderActionsList(container, data, { showExpiry = true } = {}) {
  if (!container) return;

  if (data.length === 0) {
      container.innerHTML = `
          <div class="notification-list__end">
              <i class="bi bi-search"></i>
              <span>Nenhuma ação encontrada</span>
          </div>
      `;
      return;
  }

  const html = data.map(item => `
      <div class="actions__item">
          <span class="icon-circle icon-circle--primary">
              <i class="bi ${item.icon}"></i>
          </span>

          <div class="actions__info">
              <span class="actions__title">${item.title}</span>
              <span class="actions__subtitle">${item.subtitle}</span>
          </div>

          <div class="actions__meta flex-sm-row">
              <span class="actions__nuts">+${item.nuts} nuts</span>
              <span class="actions__pts">+${item.pts} pts</span>

              ${showExpiry ? `
                  <span class="actions__expiry">
                      Expira em<br>${item.expiry}
                  </span>
              ` : ''}
          </div>
      </div>
  `).join('');

  container.innerHTML = html;
}

