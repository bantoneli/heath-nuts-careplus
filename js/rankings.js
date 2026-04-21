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
  renderActions(RankingsData.pointsHistory, true);
  renderRanking(SpecialtiesData.activeSpecialty);
  updateRankingTitle();
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
    if (e.target.disabled) return;
    if (e.target.classList.contains('specialties-filters__pill')) {
      document.querySelectorAll('.specialties-filters__pill').forEach(p =>
        p.classList.remove('specialties-filters__pill--active')
      );
      e.target.classList.add('specialties-filters__pill--active');

      const selectedSpecialty = getSelectedSpecialty();

      renderRanking(selectedSpecialty);
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
          disableFiltersForCompanies();
        } else {
          enableFiltersForAssociates();
          document.querySelectorAll('.specialties-filters__pill')
            .forEach(p => {
              p.classList.toggle(
                'specialties-filters__pill--active',
                p.dataset.specialty === SpecialtiesData.activeSpecialty
              );
            });
        }
      }
      const selectedSpecialty = getSelectedSpecialty();
      renderRanking(selectedSpecialty);
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
  // ❌ desativa especialidades
  document.querySelectorAll('.specialties-filters__pill').forEach(p => {
    p.classList.remove('specialties-filters__pill--active');
    p.disabled = true;
  });

  // ❌ desativa toggle Geral/Equipe
  document.querySelectorAll('[data-ranking-type]').forEach(btn => {
    btn.disabled = true;
    btn.classList.remove('specialties-filters__toggle-btn--active');
  });

  // ✔ força "Geral" como ativo (visualmente)
  document.querySelector('[data-ranking-type="Geral"]')
    ?.classList.add('specialties-filters__toggle-btn--active');
}

function enableFiltersForAssociates() {
  // ✔ ativa especialidades
  const defaultSpecialty = SpecialtiesData.defaultSpecialty;

  document.querySelectorAll('.specialties-filters__pill').forEach(p => {
    p.disabled = false;

    p.classList.toggle(
      'specialties-filters__pill--active',
      p.dataset.specialty === defaultSpecialty
    );
  });

  // ✔ ativa toggle Geral/Equipe
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

function updateMonthlyPerformance(monthlyGain) {
  const msgEl = document.querySelector('.priority-msg');
  if (!msgEl) return;

  msgEl.innerHTML = `
    <span class="priority-msg__dot"></span>
    Você ganhou <strong>${monthlyGain >= 0 ? '+' : ''}${monthlyGain} pontos</strong> este mês
  `;
  
  const dotEl = msgEl.querySelector('.priority-msg__dot');

  if (!dotEl) return;
}