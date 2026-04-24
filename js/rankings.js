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
  renderActions(RankingsData.pointsHistory, true);
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
      renderActions(RankingsData.pointsHistory, true);
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
          renderActions(RankingsData.pointsHistory, true);
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
  // desativa especialidades
  document.querySelectorAll('.specialties-filters__pill').forEach(p => {
    p.classList.remove('specialties-filters__pill--active');
    p.disabled = true;
  });

  // desativa toggle Geral/Equipe
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