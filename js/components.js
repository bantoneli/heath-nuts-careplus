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

  const activeMenuItem = menuItems.find(m => m.pageKey === activePage) || menuItems[0];
  const headerLabel = activeMenuItem.label;
  const headerIcon = activeMenuItem.icon;

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

function renderPodium(data) {
  const container = document.querySelector('#ranking-podium');
  if (!container) return;

  container.innerHTML = data.map(item => `
    <div class="ranking-podium__item ranking-podium__item--${item.tier}">
      <span class="ranking-podium__avatar"><i class="bi ${item.avatarIcon}"></i></span>
      <span class="ranking-podium__name">${item.name}</span>
      <span class="ranking-podium__pts">${item.pts.toLocaleString('pt-BR')} pts</span>
    </div>
  `).join('');
}

function renderGeneralRanking(data) {
  const container = document.querySelector('#general-ranking-list');
  if (!container) return;

  container.innerHTML = data.map(item => {
    const currentClass = item.isCurrentUser ? ' ranking-general__item--current' : '';
    return `
      <div class="ranking-general__item${currentClass}">
        <span class="ranking-general__position">${item.position}º</span>
        <span class="ranking-general__avatar"><i class="bi ${item.avatarIcon}"></i></span>
        <div class="ranking-general__info">
          <span class="ranking-general__name">${item.name}</span>
          <span class="ranking-general__pts">${item.pts.toLocaleString('pt-BR')} pts</span>
        </div>
        <span class="ranking-general__gain">+${item.monthlyGain} pts este mês</span>
      </div>`;
  }).join('');
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

function renderSpecialtiesFilters(data) {
    const container = document.querySelector('#specialties-filters');
    if (!container) return;

    const pillsHtml = data.specialties.map(s => {
        const activeClass = s === data.activeSpecialty ? ' specialties-filters__pill--active' : '';
        return `<button class="specialties-filters__pill${activeClass}" data-specialty="${s}">${s}</button>`;
    }).join('');



    container.innerHTML = `
        <div class="flex-nowrap specialties-filters__pills">${pillsHtml}</div>
        `;
}

function renderActions(data, showExpiry = true, category = null, limit = null) {
    const container = document.querySelector('#actions-list');
    if (!container) return;

    const selectedSpecialty = getSelectedSpecialty();

    const searchInput = document.querySelector('#ranking-search-input');
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    // 🔥 1. FILTRO POR ESPECIALIDADE
    let filteredData = data.filter(item =>
        item.specialty === selectedSpecialty
    );

    // 🔥 2. FILTRO POR CATEGORIA (opcional)
    if (category) {
        filteredData = filteredData.filter(item =>
            item.category === category
        );
    }

    // 🔥 3. FILTRO POR BUSCA
    if (query) {
        filteredData = filteredData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.subtitle.toLowerCase().includes(query)
        );
    }

    // 🔥 4. ORDENAÇÃO POR PONTOS
    filteredData.sort((a, b) => b.pts - a.pts);

    // 🔥 5. LIMITE
    if (limit !== null) {
        filteredData = filteredData.slice(0, limit);
    }

    // 🔥 6. EMPTY STATE
    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="notification-list__end">
                <i class="bi bi-search"></i>
                <span>Nenhuma ação encontrada</span>
            </div>
        `;
        return;
    }

    // 🔥 7. RENDER
    const itemsHtml = filteredData.map(item => `
        <div class="actions__item">
            <span class="icon-circle icon-circle--primary">
                <i class="bi ${item.icon}"></i>
            </span>

            <div class="actions__info">
                <span class="actions__title">${item.title}</span>
                <span class="actions__subtitle">${item.subtitle}</span>
            </div>

            <div class="actions__meta">
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

    container.innerHTML = itemsHtml;
}

function renderRanking(selectedSpecialty) {
  // 1. Mapear dados por especialidade
  let ranking = UsersRanking
    .map(user => {
      const specialtyData = user.specialties?.[selectedSpecialty];

      return {
        ...user,
        points: specialtyData?.pts ?? null,
        monthlyGain: specialtyData?.monthlyGain ?? 0
      };
    })
    .filter(user => user.points !== null); // remove null

  // 2. Ordenar
  ranking.sort((a, b) => b.points - a.points);

  // 3. Rank
  ranking = ranking.map((user, index) => ({
    ...user,
    rank: index + 1
  }));

  // 4. Encontrar usuário atual
  let currentUser = ranking.find(u => u.isCurrentUser);
  let isEstimated = false;

  // 5. Se não tiver pontos → média da empresa
  if (!currentUser) {
    const baseUser = UsersRanking.find(u => u.isCurrentUser);

    const sameCompanyUsers = UsersRanking.filter(
      u => u.companyId === baseUser.companyId
    );

    const validPoints = sameCompanyUsers
      .map(u => u.specialties?.[selectedSpecialty]?.pts)
      .filter(p => p !== null && p !== undefined);

    const avg =
      validPoints.reduce((acc, val) => acc + val, 0) / validPoints.length || 0;

    currentUser = {
      ...baseUser,
      points: Math.round(avg),
      monthlyGain: 0,
      rank: null,
      isCurrentUser: true
    };

    isEstimated = true;
  }

  // 6. Índice do usuário
  let index = ranking.findIndex(u => u.isCurrentUser);

  // 7. Sempre 5 usuários
  let visibleUsers = [];

  if (isEstimated) {
    // descobrir onde ele ficaria no ranking
    let estimatedIndex = ranking.findIndex(u => u.points < currentUser.points);

    if (estimatedIndex === -1) {
      estimatedIndex = ranking.length;
    }

    // inserir ele na posição correta (simulação)
    const rankingWithEstimated = [...ranking];
    rankingWithEstimated.splice(estimatedIndex, 0, currentUser);

    // recalcular posições
    const rankedList = rankingWithEstimated.map((user, index) => ({
      ...user,
      rank: user.rank ?? index + 1
    }));

    // pegar 2 acima e 2 abaixo
    const start = Math.max(0, estimatedIndex - 2);
    visibleUsers = rankedList.slice(start, start + 5);

  } else {
    const start = Math.max(0, index - 2);
    visibleUsers = ranking.slice(start, start + 5);
  }

  // 8. Render
  const container = document.getElementById("ranking-list");
  container.innerHTML = "";

  visibleUsers.forEach(user => {
    const isCurrent = user.isCurrentUser;

    const div = document.createElement("div");
    div.className = `
      ranking-general__item
      ${isCurrent ? "ranking-general__item--current" : ""}
      ${isEstimated && isCurrent ? "ranking-general__item--estimated" : ""}
    `;

    div.innerHTML = `
      <div class="ranking-general__position">
        ${isEstimated && user.isCurrentUser ? "#" : (user.rank ?? "-")}
      </div>

      <div class="ranking-general__avatar">
        <i class="bi bi-person"></i>
      </div>

      <div class="ranking-general__info">
        <span class="ranking-general__name">
          ${user.name}
          ${isEstimated && isCurrent ? "(estimado)" : ""}
        </span>
        <span class="ranking-general__pts">
          ${user.points} pts • ${selectedSpecialty}
        </span>
      </div>

      <div class="ranking-general__gain">
        +${user.monthlyGain}
      </div>
    `;

    container.appendChild(div);
  });
}