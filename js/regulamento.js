/**
 * regulamento.js
 * Inicialização e interatividade da página de Regulamento.
 * Depende de mocks/data/mock-data.js e js/components.js (carregar antes via HTML).
 */

document.addEventListener('DOMContentLoaded', () => {
    renderHeader({ activePage: 'regulamento', isSubpage: true });
    renderFooter();
    initRegulamentoPage();
    initRegulamentoEvents();
});

function initRegulamentoPage() {
    renderSpecialtiesFilters(SpecialtiesData);
    renderActions(ActionsData.actions, false);
}


function initRegulamentoEvents() {
  // Specialty pills toggle
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('specialties-filters__pill')) {
            document.querySelectorAll('.specialties-filters__pill').forEach(p =>
                p.classList.remove('specialties-filters__pill--active')
            );
            e.target.classList.add('specialties-filters__pill--active');

            renderActions(ActionsData.actions, false);
        }
    });


    // Search   
    const searchInput = document.querySelector('#ranking-search-input');

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            renderActions(ActionsData.actions, false);
        });
    }


}
