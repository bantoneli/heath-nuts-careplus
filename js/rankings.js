/**
 * rankings.js
 * Inicialização e interatividade da página de Rankings.
 * Depende de mocks/data/mock-data.js e js/components.js (carregar antes via HTML).
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'rankings', isSubpage: true });
  renderFooter();
  initRankingsPage();
  initRankingsEvents();
});

function initRankingsPage() {
  renderSpecialtiesFilters(SpecialtiesData);
  renderPodium(RankingsData.topRanking);
  renderGeneralRanking(RankingsData.generalRanking);
  updatePerformanceCard(RankingsData.userPerformance);
  renderActions(RankingsData.pointsHistory, true);
  renderRanking(SpecialtiesData.activeSpecialty)
}

function updatePerformanceCard(perf) {
  const posEl = document.querySelector('#perf-position');
  const ptsEl = document.querySelector('#perf-points');
  const nextEl = document.querySelector('#perf-next');

  if (posEl) posEl.textContent = perf.position + 'º';
  if (ptsEl) ptsEl.textContent = perf.points.toLocaleString('pt-BR') + ' pts';
  if (nextEl) nextEl.textContent = 'Faltam ' + perf.pointsToNext + ' pts';
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
    if (e.target.classList.contains('specialties-filters__pill')) {
      document.querySelectorAll('.specialties-filters__pill').forEach(p =>
        p.classList.remove('specialties-filters__pill--active')
      );
      e.target.classList.add('specialties-filters__pill--active');
    }
  });

  // Toggle groups (ranking type & scope)
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('specialties-filters__toggle-btn')) {
      const group = e.target.closest('.specialties-filters__toggle');
      if (group) {
        group.querySelectorAll('.specialties-filters__toggle-btn').forEach(b =>
          b.classList.remove('specialties-filters__toggle-btn--active')
        );
        e.target.classList.add('specialties-filters__toggle-btn--active');

        const state = getFiltersState();
      }
    }
  });

  // Search
  const searchInput = document.querySelector('#ranking-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const filtered = RankingsData.generalRanking.filter(item =>
        item.name.toLowerCase().includes(query)
      );
      renderGeneralRanking(filtered);
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
