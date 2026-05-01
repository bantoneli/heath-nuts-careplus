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
/*
function renderActions(data, showExpiry = true, category = null, limit = null) {
    const container = document.querySelector('#actions-list');
    if (!container) return;

    const selectedSpecialty = getSelectedSpecialty();

    const searchInput = document.querySelector('#actions-search-input');
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

    container.innerHTML = itemsHtml;
}
*/
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

function renderUserList(users, { isEstimated, hideCurrentUser = false }) {
  const container = document.getElementById("ranking-list");
  container.innerHTML = "";

  users.forEach(user => {
    const isCurrent = user.isCurrentUser;
    const shouldHighlight = isCurrent && !hideCurrentUser;

    const div = document.createElement("div");

    div.className = `
      ranking-general__item
      ${shouldHighlight ? "ranking-general__item--current" : ""}
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

function renderCompanyList(companies, currentCompany) {
  const container = document.getElementById("ranking-list");
  container.innerHTML = "";

  companies.forEach(company => {
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

  // 🔥 cria ranking global ANTES de qualquer filtro
  let fullRanking = applyRanking([...ranking]);

  const query = getSearchQuery();

  if (rankingType?.trim() === 'Equipe') {
    ranking = ranking.filter(user => user.company === baseUser.company);
  }
  // 2. Ordenar
  // aplica ranking primeiro
  ranking = applyRanking(ranking);

  // aplica busca só na lista
  ranking = applySearch(ranking, query, ['name', 'company']);

  //  podium usa ranking completo
  const podiumData = buildPodium(fullRanking, user => ({
    name: user.name,
    pts: user.points,
    avatarIcon: user.avatarIcon || 'bi-person'
  }));

    // 3.5 Criar podium
  renderPodium(podiumData);

  // 4. Encontrar usuário atual
  let currentUser = ranking.find(u => u.isCurrentUser);
  let isEstimated = false;

  // 5. Se não tiver pontos → média da empresa

  const isSearching = !!query;

  if (!currentUser && !isSearching) {
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
  const userNotInList = index === -1;

  // 🔥 sempre pega do ranking completo
  let realUser = fullRanking.find(u => u.isCurrentUser);

  // fallback estimado (somente fora de search)
  if (!realUser && isEstimated) {
    realUser = currentUser; // usa o estimado
  }

  if (realUser) {
    let fullIndex = fullRanking.findIndex(u => u.isCurrentUser);

    // caso estimado
    if (fullIndex === -1 && isEstimated) {
      fullIndex = fullRanking.findIndex(u => u.points < realUser.points);

      if (fullIndex === -1) {
        fullIndex = fullRanking.length;
      }
    }

    const performance = calculateUserPerformance({
      ranking: fullRanking,
      currentUserIndex: fullIndex,
      currentUser: realUser
    });

    if (rankingType?.trim() === 'Equipe') {
      const teamIndex = ranking.findIndex(u => u.isCurrentUser);

      if (teamIndex !== -1) {
        performance.position = teamIndex + 1;
      }
    }
    
    updateUserPerformance(performance);
  }
  
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
    visibleUsers = getVisibleSlice(rankedList, estimatedIndex);

  } else {
    visibleUsers =
      userNotInList
        ? ranking.slice(0, 5)
        : getVisibleSlice(ranking, index);
  }

  // 8. Render
  renderUserList(visibleUsers, {
    isEstimated,
    hideCurrentUser: userNotInList
  });
}

function renderCompanyRanking() {
  const baseUser = UsersRanking.find(u => u.isCurrentUser);

  // 1. calcular
  let companies = calculateCompanyScores(UsersRanking);

  // 2. ranking
  companies = applyRanking(companies, 'score');

  // 3. snapshot global
  const fullCompanies = [...companies];

  // 4. podium (sempre global)
  const podiumData = buildPodium(fullCompanies, company => ({
    name: company.company,
    pts: (company.score * 100).toFixed(1),
    avatarIcon: 'bi-building'
  }));

  renderPodium(podiumData);

  // 5. filtro (apenas lista)
  const query = getSearchQuery();
  companies = applySearch(companies, query, ['company']);

  // 6. empresa atual
  const currentCompany = baseUser.company;

  // 👉 índice no ranking global (para dashboard)
  const fullIndex = fullCompanies.findIndex(c => c.company === currentCompany);
  if (fullIndex === -1) return;

  const currentCompanyData = fullCompanies[fullIndex];

  // 7. cálculo do progresso
  let companyPointsToNext = 0;

  if (fullIndex > 0) {
    const nextCompany = fullCompanies[fullIndex - 1];

    companyPointsToNext = Math.max(
      0,
      nextCompany.score - currentCompanyData.score
    );
  }

  // 8. render dashboard
  renderCompanyPerformance({
    rank: currentCompanyData.rank,
    score: currentCompanyData.score,
    pointsToNext: companyPointsToNext
  });

  // 9. lista (respeita search)
  const index = companies.findIndex(c => c.company === currentCompany);

  // se não estiver na busca, não tenta centralizar
  const visibleCompanies =
    index === -1
      ? companies.slice(0, 5)
      : getVisibleSlice(companies, index);

  // 10. render lista
  renderCompanyList(visibleCompanies, currentCompany);
}

function renderDoctorDropdown(list) {
  const dropdown = document.querySelector('#doctor-dropdown');
  if (!dropdown) return;

  if (list.length === 0) {
    dropdown.innerHTML = `<div class="doctor-dropdown__item">Nenhum médico encontrado</div>`;
  } else {
    dropdown.innerHTML = list.map(doc => `
      <div class="doctor-dropdown__item" data-id="${doc.id}">
        <strong>${doc.name} - ${doc.specialty}</strong><br>
        <small>${doc.clinic}</small>
      </div>
    `).join('');
  }

  dropdown.classList.remove('d-none');
}

/**
 * Página Benefícios: carteira (saldo Nuts).
 */
function renderBenefitsWallet(data) {
  const root = document.querySelector('#benefits-wallet-placeholder');
  if (!root || !data) return;

  const weekly = typeof data.weeklyGain === 'number'
    ? `+${data.weeklyGain} esta semana`
    : data.weeklyGain;

  root.innerHTML = `
    <div class="benefits-wallet">
      <div class="benefits-wallet__icon-wrap" aria-hidden="true">
        <i class="bi bi-wallet2 benefits-wallet__icon"></i>
      </div>
      <div class="benefits-wallet__body">
        <span class="benefits-wallet__label">Nuts</span>
        <span class="benefits-wallet__balance">${data.balanceFormatted} nuts</span>
        <span class="benefits-wallet__weekly">${weekly}</span>
      </div>
    </div>`;
}

/**
 * Página Benefícios: linhas "Ganhe mais nuts".
 */
function renderBenefitsEarnRows(rows) {
  const root = document.querySelector('#benefits-earn-placeholder');
  if (!root || !rows) return;

  root.innerHTML = rows.map(row => `
    <div class="benefits-earn__row d-flex align-items-center flex-wrap gap-2 py-2 px-3">
      <div class="benefits-earn__text flex-grow-1 min-w-0">
        <span class="benefits-earn__title d-block">${row.title}</span>
        <span class="badge-pts badge-pts--yellow">+${row.nuts} nuts</span>
      </div>
      <a href="${row.linkHref}" class="benefits-earn__link small text-decoration-none">${row.linkLabel}</a>
    </div>
  `).join('');
}

/**
 * Página Benefícios: chips de categoria (reutiliza BEM de specialties-filters).
 */
function renderBenefitsCategoryPills(categories, activeCategory) {
  const wrap = document.querySelector('#benefits-category-pills');
  if (!wrap || !categories) return;

  const pillsHtml = categories.map(cat => {
    const isActive = cat === activeCategory;
    const activeClass = isActive ? ' specialties-filters__pill--active' : '';
    return `
      <button type="button" class="specialties-filters__pill${activeClass}"
        data-benefits-category="${cat}">${cat}</button>`;
  }).join('');

  wrap.innerHTML = `<div class="flex-nowrap specialties-filters__pills">${pillsHtml}</div>`;
}

/**
 * Página Benefícios: grid de recompensas (filtra por aba, categoria e busca).
 */
function renderBenefitsRewards(state) {
  const row = document.querySelector('#benefits-rewards-grid');
  if (!row || !state || !Array.isArray(state.rewards)) return;

  const tab =
    state.tab === 'resgatadas' ? 'resgatadas'
      : state.tab === 'disponiveis' ? 'disponiveis'
        : 'todos';
  const category = state.category || 'Todos';
  const query = (state.query || '').toLowerCase().trim();

  let list = [...state.rewards];
  if (tab === 'disponiveis') {
    list = list.filter(r => !r.redeemed);
  } else if (tab === 'resgatadas') {
    list = list.filter(r => r.redeemed);
  }

  if (category !== 'Todos') {
    list = list.filter(r => r.category === category);
  }

  if (query) {
    list = list.filter(r =>
      r.title.toLowerCase().includes(query) ||
      (r.description && r.description.toLowerCase().includes(query))
    );
  }

  if (list.length === 0) {
    row.innerHTML = `
      <div class="col-12">
        <div class="notification-list__end mb-0">
          <i class="bi bi-search"></i>
          <span>Nenhuma recompensa encontrada</span>
        </div>
      </div>`;
    return;
  }

  row.innerHTML = list.map(item => {
    const isResgatar = item.cta === 'resgatar';
    const btnClass = isResgatar ? 'btn-primary-custom' : 'btn-accent';
    const btnLabel = isResgatar ? 'Resgatar' : 'Detalhes';
    const metaHtml = item.meta
      ? `<span class="benefit-reward-card__meta small text-secondary">${item.meta}</span>`
      : '';

    return `
      <div class="col-12 col-md-6">
        <article class="benefit-reward-card h-100 d-flex flex-column">
          <div class="benefit-reward-card__head d-flex justify-content-between align-items-start gap-2">
            <div class="min-w-0">
              <h3 class="benefit-reward-card__title mb-1">${item.title}</h3>
              <p class="benefit-reward-card__desc small mb-2">${item.description}</p>
              <div class="d-flex flex-wrap gap-2 align-items-center">
                <span class="badge-pts badge-pts--yellow">${item.costNuts} nuts</span>
                <span class="benefit-reward-card__tag-cat small rounded-pill px-2 py-1">${item.category}</span>
              </div>
            </div>
            <button type="button" class="btn btn-sm ${btnClass} benefit-reward-card__cta flex-shrink-0"
              data-benefit-id="${item.id}" data-benefit-cta="${item.cta}">
              ${btnLabel}
            </button>
          </div>
          ${metaHtml ? `<div class="benefit-reward-card__foot mt-auto pt-2">${metaHtml}</div>` : ''}
        </article>
      </div>`;
  }).join('');
}

/**
 * Página Benefícios: histórico de resgates + fim de lista.
 */
function renderBenefitsRedemptionHistory(items) {
  const root = document.querySelector('#benefits-redemption-list');
  if (!root) return;

  const rows = (items || []).map(entry => `
    <div class="redemption-history__row d-flex justify-content-between align-items-start gap-3 py-3 px-2">
      <div class="min-w-0">
        <span class="redemption-history__title d-block fw-semibold">${entry.title}</span>
        <span class="redemption-history__date small text-secondary">${entry.redeemedAtLabel}</span>
      </div>
      <span class="redemption-history__nuts flex-shrink-0 fw-semibold text-secondary">${entry.nutsDelta} nuts</span>
    </div>
  `).join('');

  const endHtml = `
    <div class="notification-list__end mt-2 mb-0">
      <i class="bi bi-inbox"></i>
      <span>Sem mais registros</span>
    </div>`;

  root.innerHTML = rows + endHtml;
}

