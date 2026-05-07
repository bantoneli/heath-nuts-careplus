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
