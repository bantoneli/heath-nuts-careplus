/**
 * rankings.js
 * Inicialização e interatividade da página de Rankings.
 * Depende de mocks/data/mock-data.js e js/components.js (carregar antes via HTML).
 */

let currentSpecialty = null;

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'rankings', isSubpage: true });
  renderFooter();
  initRankingsPage();
  initRankingsEvents();
});

function initRankingsPage() {
  const activeSpecialty = SpecialtiesData.defaultSpecialty
  renderSpecialtiesFilters(SpecialtiesData, activeSpecialty);
  renderActions(RankingsData.pointsHistory);
  renderRanking(SpecialtiesData.defaultSpecialty);
  updateRankingTitle();
  currentSpecialty = SpecialtiesData.defaultSpecialty;
}

function getFiltersState() {
  const activeRanking = document.querySelector(
    '[data-ranking-type].specialties-filters__toggle-btn--active'
  )?.dataset.rankingType;

  const activeScope = document.querySelector(
    '[data-scope-type].specialties-filters__toggle-btn--active'
  )?.dataset.scopeType;

  return {
    rankingType: activeRanking,
    scopeType: activeScope
  };
}

function initRankingsEvents() {
  // Specialties filter
  document.addEventListener('click', (e) => {
    if (e.target.disabled) return;
    if (e.target.classList.contains('specialties-filters__pill')) {
      document.querySelectorAll('.specialties-filters__pill').forEach(p =>
        p.classList.remove('specialties-filters__pill--active')
      );
      e.target.classList.add('specialties-filters__pill--active');

      currentSpecialty = getSelectedSpecialty();

      renderRanking(currentSpecialty);
      updateRankingTitle();
      renderActions(RankingsData.pointsHistory);
    }
  });

  // Toggle groups (ranking type & scope)
  document.addEventListener('click', (e) => {
    if (e.target.disabled) return;
    if (e.target.classList.contains('specialties-filters__toggle-btn')) {
      const group = e.target.closest('.specialties-filters__toggle');

      if (group) {
        group.querySelectorAll('.specialties-filters__toggle-btn').forEach(b =>
          b.classList.remove('specialties-filters__toggle-btn--active')
        );

        e.target.classList.add('specialties-filters__toggle-btn--active');

        const { scopeType } = getFiltersState();

        if (scopeType === 'Empresas') {
          hideRankingActions();
          disableFiltersForCompanies();
        } else {
          enableFiltersForAssociates();
          document.querySelectorAll('.specialties-filters__pill')
            .forEach(p => {
              p.classList.toggle(
                'specialties-filters__pill--active',
                p.dataset.specialty === currentSpecialty
              );
            });
          
          showRankingActions();
          renderActions(RankingsData.pointsHistory);
        }
      }
      renderRanking(currentSpecialty);
      updateRankingTitle();
    }
  });

  // Search
  const searchInput = document.querySelector('#ranking-search-input');

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const specialty = getSelectedSpecialty();
      renderRanking(specialty);
    });
  }

  // Filters button placeholder
  const btnFilters = document.querySelector('#btn-ranking-filters');
  if (btnFilters) {
    btnFilters.addEventListener('click', () => {
      alert('Filtros avançados serão implementados em breve!');
    });
  }

  // "Ver mais" historico placeholder
  const btnVerMais = document.querySelector('#btn-ver-mais-historico');
  if (btnVerMais) {
    btnVerMais.addEventListener('click', async () => {
      setButtonLoading(btnVerMais, true);
      await simulateLoading(800);
      setButtonLoading(btnVerMais, false);
      alert('Histórico completo será implementado em breve!');
    });
  }
}

function disableFiltersForCompanies() {
  //  desativa especialidades
  document.querySelectorAll('.specialties-filters__pill').forEach(p => {
    p.classList.remove('specialties-filters__pill--active');
    p.disabled = true;
  });

  //  desativa toggle Geral/Equipe
  document.querySelectorAll('[data-ranking-type]').forEach(btn => {
    btn.disabled = true;
    btn.classList.remove('specialties-filters__toggle-btn--active');
  });

  //  força "Geral" como ativo (visualmente)
  document.querySelector('[data-ranking-type="Geral"]')
    ?.classList.add('specialties-filters__toggle-btn--active');
}

function enableFiltersForAssociates() {
  //  ativa especialidades
  const defaultSpecialty = SpecialtiesData.defaultSpecialty;

  document.querySelectorAll('.specialties-filters__pill').forEach(p => {
    p.disabled = false;

    p.classList.toggle(
      'specialties-filters__pill--active',
      p.dataset.specialty === defaultSpecialty
    );
  });

  //  ativa toggle Geral/Equipe
  document.querySelectorAll('[data-ranking-type]').forEach(btn => {
    btn.disabled = false;
  });
}

function updateRankingTitle() {
  const { rankingType, scopeType } = getFiltersState();
  const selectedSpecialty = getSelectedSpecialty();

  const titleEl = document.querySelector('.ranking-title');

  if (!titleEl) return;

  if (scopeType === 'Empresas') {
    titleEl.textContent = 'Ranking de Empresas';
    return;
  }

  const specialtyLabel = selectedSpecialty || '';

  if (rankingType === 'Equipe') {
    titleEl.textContent = `Ranking da sua empresa • ${specialtyLabel}`;
  } else {
    titleEl.textContent = `Ranking de Associados • ${specialtyLabel}`;
  }
}

function applyRanking(list, scoreKey = "points") {
  return [...list]
    .sort((a, b) => b[scoreKey] - a[scoreKey])
    .map((item, index) => ({
      ...item,
      rank: index + 1
    }));
}

function getVisibleSlice(list, index, size = 5) {
  const start = Math.max(0, index - Math.floor(size / 2));
  return list.slice(start, start + size);
}

function buildPodium(list, mapFn) {
  const tiers = ['gold', 'silver', 'bronze'];

  return list.slice(0, 3).map((item, index) => ({
    ...mapFn(item),
    tier: tiers[index]
  }));
}

function applySearch(list, query, fields) {
  if (!query) return list;

  const normalizedQuery = query.toLowerCase();

  return list.filter(item =>
    fields.some(field =>
      item[field]?.toLowerCase().includes(normalizedQuery)
    )
  );
}

function calculateUserPerformance({ ranking, currentUserIndex, currentUser }) {
  const position = currentUserIndex + 1;
  const totalUsers = ranking.length;

  const percentile = 1 - (position - 1) / totalUsers;
  const levels = [0.1, 0.3, 0.5, 0.7, 0.9, 1];

  const currentLevelIndex = levels.findIndex(l => percentile <= l);

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

  return {
    position,
    points: currentUser.points,
    pointsToNext,
    monthlyGain: currentUser.monthlyGain
  };
}

function updateUserPerformance({
  position,
  points,
  pointsToNext,
  monthlyGain
}) {
  const posEl = document.querySelector('#perf-position');
  const ptsEl = document.querySelector('#perf-points');
  const nextEl = document.querySelector('#perf-next');
  const gainEl = document.querySelector('#perf-monthly');

  if (posEl) posEl.textContent = position + 'º';

  if (ptsEl) {
    ptsEl.textContent = points.toLocaleString('pt-BR') + ' pts';
  }

  if (nextEl) {
    nextEl.textContent = 'Faltam ' + pointsToNext + ' pts';
  }
  
  if (gainEl) {
    gainEl.textContent = `Você ganhou ${monthlyGain} pts no último mês!`;
  }
}

function updateCompanyPerformance({ rank, score, pointsToNext }) {
  const posEl = document.querySelector('#perf-position');
  const ptsEl = document.querySelector('#perf-points');
  const nextEl = document.querySelector('#perf-next');

  if (posEl) posEl.textContent = rank + 'º';

  if (ptsEl) {
    ptsEl.textContent = (score * 100).toFixed(1) + '%';
  }

  if (nextEl) {
    if (pointsToNext > 0) {
      nextEl.textContent = `Faltam ${(pointsToNext * 100).toFixed(1)}%`;
    } else {
      nextEl.textContent = 'Você está no topo 🚀';
    }
  }
}

function calculateCompanyScores(users) {
  const specialties = Object.keys(users[0].specialties);

  // 1. líderes por especialidade
  const leaders = {};

  specialties.forEach(spec => {
    let max = 0;

    users.forEach(user => {
      const pts = user.specialties?.[spec]?.pts;
      if (pts && pts > max) max = pts;
    });

    leaders[spec] = max;
  });

  // 2. score normalizado por usuário
  const usersWithScore = users.map(user => {
    let values = [];

    Object.entries(user.specialties || {}).forEach(([spec, data]) => {
      const pts = data?.pts;
      const leader = leaders[spec];

      if (pts != null && leader > 0) {
        values.push(pts / leader);
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
  return Object.entries(companiesMap).map(([company, scores]) => ({
    company,
    score: scores.reduce((a, b) => a + b, 0) / scores.length
  }));
}

function renderCompanyPerformance({ rank, score, pointsToNext }) {
  const posEl = document.querySelector('#perf-position');
  const ptsEl = document.querySelector('#perf-points');
  const nextEl = document.querySelector('#perf-next');

  if (posEl) posEl.textContent = rank + 'º';

  if (ptsEl) {
    ptsEl.textContent = (score * 100).toFixed(1) + '%';
  }

  if (nextEl) {
    if (pointsToNext > 0) {
      nextEl.textContent = `Faltam ${(pointsToNext * 100).toFixed(1)}%`;
    } else {
      nextEl.textContent = 'Você está no topo 🚀';
    }
  }
}

function hideRankingActions() {
  const el = document.querySelector('#points-history');
  if (el) el.style.display = 'none';
}

function showRankingActions() {
  const el = document.querySelector('#points-history');
  if (el) el.style.display = '';
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

  //  cria ranking global ANTES de qualquer filtro
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

  //  sempre pega do ranking completo
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

  //  índice no ranking global (para dashboard)
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
