/**
 * Componentes de UI compartilhados: renders e shell (header/footer).
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

  const tiers = ['gold', 'silver', 'bronze'];

  tiers.forEach((tier, index) => {
    const item = data[index];
    if (!item) return;

    const el = container.querySelector(`.ranking-podium__item--${tier}`);
    if (!el) return;

    const avatar = el.querySelector('.ranking-podium__avatar i');
    const name = el.querySelector('.ranking-podium__name');
    const pts = el.querySelector('.ranking-podium__pts');

    // Atualizar dados
    avatar.className = `bi ${item.avatarIcon}`;
    name.textContent = item.name;

    pts.textContent =
      typeof item.pts === 'number'
        ? item.pts.toLocaleString('pt-BR') + ' pts'
        : item.pts + '%';
  });
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

    //  1. FILTRO POR ESPECIALIDADE
    let filteredData = data.filter(item =>
        item.specialty === selectedSpecialty
    );

    //  2. FILTRO POR CATEGORIA (opcional)
    if (category) {
        filteredData = filteredData.filter(item =>
            item.category === category
        );
    }

    //  3. FILTRO POR BUSCA
    if (query) {
        filteredData = filteredData.filter(item =>
            item.title.toLowerCase().includes(query) ||
            item.subtitle.toLowerCase().includes(query)
        );
    }

    //  4. ORDENAÇÃO POR PONTOS
    filteredData.sort((a, b) => b.pts - a.pts);

    //  5. LIMITE
    if (limit !== null) {
        filteredData = filteredData.slice(0, limit);
    }

    //  6. EMPTY STATE
    if (filteredData.length === 0) {
        container.innerHTML = `
            <div class="notification-list__end">
                <i class="bi bi-search"></i>
                <span>Nenhuma ação encontrada</span>
            </div>
        `;
        return;
    }

    //  7. RENDER
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
  
  const { rankingType, scopeType } = getFiltersState();
  
  if (scopeType === 'Empresas') {
    renderCompanyRanking();
    return;
  }

  const baseUser = UsersRanking.find(u => u.isCurrentUser);

  let ranking = UsersRanking
    .map(user => {
      const specialtyData = user.specialties?.[selectedSpecialty];

      return {
        ...user,
        points: specialtyData?.pts ?? null,
        monthlyGain: specialtyData?.monthlyGain ?? 0
      };
    })
    .filter(user => user.points !== null);

  const query = getSearchQuery();

  if (query) {
    ranking = ranking.filter(user =>
      user.name.toLowerCase().includes(query) ||
      user.company.toLowerCase().includes(query)
    );
  }

  if (rankingType?.trim() === 'Equipe') {
    ranking = ranking.filter(user => user.company === baseUser.company);
  }
  // 2. Ordenar
  ranking.sort((a, b) => b.points - a.points);



  // 3. Rank
  ranking = ranking.map((user, index) => ({
    ...user,
    rank: index + 1
  }));

    // 3.5 Criar podium
  const podiumData = ranking.slice(0, 3).map((user, index) => {
    const tiers = ['gold', 'silver', 'bronze'];

    return {
      name: user.name,
      pts: user.points,
      avatarIcon: user.avatarIcon || 'bi-person',
      tier: tiers[index]
    };
  });
  renderPodium(podiumData);

  // 4. Encontrar usuário atual
  let currentUser = ranking.find(u => u.isCurrentUser);
  let isEstimated = false;

  // 5. Se não tiver pontos → média da empresa
  if (!currentUser) {
    const baseUser = UsersRanking.find(u => u.isCurrentUser);

    const sameCompanyUsers = UsersRanking.filter(
      u => u.company === baseUser.company
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

  const position = index + 1;
  const totalUsers = ranking.length;
  const percentile = 1 - (position - 1) / totalUsers;
  const levels = [0.1, 0.3, 0.5, 0.7, 0.9, 1];

  let currentLevelIndex = levels.findIndex(l => percentile <= l);

  // se estiver no último nível
  let pointsToNext = 0;

  if (currentLevelIndex < levels.length - 1) {
    const nextLevelThreshold = levels[currentLevelIndex];
    const targetPosition = Math.ceil((1 - nextLevelThreshold) * totalUsers);
    const targetIndex = targetPosition - 1;

    if (ranking[targetIndex]) {
      const targetPoints = ranking[targetIndex].points;

      pointsToNext = Math.max(
        0,
        targetPoints - currentUser.points + 1
      );
    }
  }

  //  atualizar card
  updatePerformanceCard({
    position,
    points: currentUser.points,
    pointsToNext
  });
  
  updateMonthlyPerformance(currentUser.monthlyGain);

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
          ${user.points} pts • ${user.company}
        </span>
      </div>

      <div class="ranking-general__gain">
        +${user.monthlyGain} pts no ultimo mês
      </div>
    `;

    container.appendChild(div);
  });
}

function renderCompanyRanking() {
  const baseUser = UsersRanking.find(u => u.isCurrentUser);

  // 1. descobrir líderes por especialidade
  const specialties = Object.keys(UsersRanking[0].specialties);

  const leaders = {};

  specialties.forEach(spec => {
    let max = 0;

    UsersRanking.forEach(user => {
      const pts = user.specialties?.[spec]?.pts;
      if (pts && pts > max) max = pts;
    });

    leaders[spec] = max;
  });

  // 2. calcular score normalizado por usuário
  const usersWithScore = UsersRanking.map(user => {
    let values = [];

    Object.entries(user.specialties || {}).forEach(([spec, data]) => {
      const pts = data?.pts;
      const leader = leaders[spec];

      if (
        pts !== null &&
        pts !== undefined &&
        leader > 0
      ) {
        const ratio = pts / leader;

        values.push(ratio);
      }
    });

    const avg =
      values.length > 0
        ? values.reduce((a, b) => a + b, 0) / values.length
        : null;

    return {
      ...user,
      generalizedScore: avg
    };
  }).filter(u => u.generalizedScore !== null);

  // 3. agrupar por empresa
  const companiesMap = {};

  usersWithScore.forEach(user => {
    if (!companiesMap[user.company]) {
      companiesMap[user.company] = [];
    }
    companiesMap[user.company].push(user.generalizedScore);
  });

  // 4. média por empresa
  let companies = Object.entries(companiesMap).map(([company, scores]) => {
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;

    return {
      company,
      score: avg
    };
  });

  const query = getSearchQuery();

  if (query) {
    companies = companies.filter(c =>
      c.company.toLowerCase().includes(query)
    );
  }

  // 5. ordenar
  companies.sort((a, b) => b.score - a.score);

  // 6. rank
  companies = companies.map((c, i) => ({
    ...c,
    rank: i + 1
  }));

  const podiumData = companies.slice(0, 3).map((company, index) => {
    const tiers = ['gold', 'silver', 'bronze'];

    return {
      name: company.company,
      pts: (company.score * 100).toFixed(1),
      avatarIcon: 'bi-building',
      tier: tiers[index]
    };
  });

  renderPodium(podiumData);

  //  7. encontrar empresa do usuário
  const currentCompany = baseUser.company;

  const index = companies.findIndex(c => c.company === currentCompany);
  if (index === -1) return;
  // 7.5 Fazer update do dashboard
  let companyPointsToNext = 0;

  if (index > 0) {
    const currentCompanyData = companies[index];
    const nextCompany = companies[index - 1];

    companyPointsToNext = Math.max(
      0,
      nextCompany.score - currentCompanyData.score
    );
  }

  // ATUALIZAR DASHBOARD COMPLETO
  const posEl = document.querySelector('#perf-position');
  const ptsEl = document.querySelector('#perf-points');
  const nextEl = document.querySelector('#perf-next');

  const currentCompanyData = companies[index];

  if (posEl) posEl.textContent = currentCompanyData.rank + 'º';

  if (ptsEl) {
    ptsEl.textContent = (currentCompanyData.score * 100).toFixed(1) + '%';
  }

  if (nextEl) {
    if (companyPointsToNext > 0) {
      nextEl.textContent = `Faltam ${(companyPointsToNext * 100).toFixed(1)}%`;
    } else {
      nextEl.textContent = 'Você está no topo 🚀';
    }
  }

  //  8. pegar 2 acima + 2 abaixo
  const start = Math.max(0, index - 2);
  const visibleCompanies = companies.slice(start, start + 5);

  // 9. render
  const container = document.getElementById("ranking-list");
  container.innerHTML = "";

  visibleCompanies.forEach(company => {
    const isCurrent = company.company === currentCompany;

    const div = document.createElement("div");

    div.className = `
      ranking-general__item
      ${isCurrent ? "ranking-general__item--current" : ""}
    `;

    div.innerHTML = `
      <div class="ranking-general__position">
        #${company.rank}
      </div>

      <div class="ranking-general__avatar">
        <i class="bi bi-building"></i>
      </div>

      <div class="ranking-general__info">
        <span class="ranking-general__name">
          ${company.company}
        </span>
      </div>
      <span class="ranking-general__pts">
        Score: ${(company.score * 100).toFixed(1)}%
      </span>
    `;

    container.appendChild(div);
  });
}