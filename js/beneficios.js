/**
 * beneficios.js — página de Benefícios (carteira, recompensas, histórico).
 */

const benefitsPageState = {
  tab: 'todos',
  category: 'Todos',
  query: ''
};

function getBenefitsRewardsState() {
  return {
    rewards: BeneficiosData.rewards,
    tab: benefitsPageState.tab,
    category: benefitsPageState.category,
    query: benefitsPageState.query
  };
}

function refreshBenefitsRewards() {
  renderBenefitsRewards(getBenefitsRewardsState());
}

function initBenefitsCategoryPills() {
  const wrap = document.querySelector('#benefits-category-pills');
  if (!wrap || wrap.dataset.delegationBound === '1') return;
  wrap.dataset.delegationBound = '1';

  wrap.addEventListener('click', ev => {
    const btn = ev.target.closest('[data-benefits-category]');
    if (!btn) return;

    benefitsPageState.category = btn.getAttribute('data-benefits-category') || 'Todos';
    renderBenefitsCategoryPills(BeneficiosData.rewardCategories, benefitsPageState.category);
    refreshBenefitsRewards();
  });
}

function initBenefitsTabToggle() {
  const buttons = document.querySelectorAll('[data-benefits-tab]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-benefits-tab');
      if (!tab) return;

      benefitsPageState.tab = tab;
      buttons.forEach(b => {
        b.classList.toggle('specialties-filters__toggle-btn--active', b.getAttribute('data-benefits-tab') === tab);
      });
      refreshBenefitsRewards();
    });
  });
}

function initBenefitsSearch() {
  const input = document.querySelector('#benefits-search-input');
  if (!input) return;

  input.addEventListener('input', () => {
    benefitsPageState.query = input.value;
    refreshBenefitsRewards();
  });
}

function initBenefitsRewardActions() {
  const grid = document.querySelector('#benefits-rewards-grid');
  if (!grid) return;

  grid.addEventListener('click', ev => {
    const btn = ev.target.closest('[data-benefit-id]');
    if (!btn) return;

    const id = btn.getAttribute('data-benefit-id');
    const cta = btn.getAttribute('data-benefit-cta');
    const item = BeneficiosData.rewards.find(r => r.id === id);
    const title = item ? item.title : 'Recompensa';

    if (cta === 'resgatar') {
      alert(`Resgate simulado: ${title}. Integração com API em breve.`);
    } else {
      alert(`Detalhes de: ${title}. Conteúdo completo em breve.`);
    }
  });
}

function initBenefitsExport() {
  const btn = document.querySelector('#btn-exportar-beneficios');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    setButtonLoading(btn, true);
    await simulateLoading(900);
    setButtonLoading(btn, false);
    alert('Exportação simulada. O arquivo seria gerado pela API.');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'beneficios', isSubpage: true });
  renderFooter();

  renderBenefitsWallet(BeneficiosData.wallet);
  renderBenefitsEarnRows(BeneficiosData.earnMore);
  renderBenefitsCategoryPills(BeneficiosData.rewardCategories, benefitsPageState.category);
  initBenefitsCategoryPills();
  initBenefitsTabToggle();
  initBenefitsSearch();
  refreshBenefitsRewards();
  renderBenefitsRedemptionHistory(BeneficiosData.redemptionHistory);
  initBenefitsRewardActions();
  initBenefitsExport();
});

 //Página Benefícios: carteira (saldo Nuts).
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

 //Página Benefícios: linhas "Ganhe mais nuts".
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

//Página Benefícios: chips de categoria (reutiliza BEM de specialties-filters).
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

//Página Benefícios: grid de recompensas (filtra por aba, categoria e busca).
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

//Página Benefícios: histórico de resgates + fim de lista.
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
