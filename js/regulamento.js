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
    renderSpecialtiesFilters(RegulamentoData);
    renderGeneralRanking(RegulamentoData.badges);
    renderActions(RegulamentoData.actions, false);
}


function initRegulamentoEvents() {
  // Specialty pills toggle
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('specialties-filters__pill')) {
            document.querySelectorAll('.specialties-filters__pill').forEach(p =>
                p.classList.remove('specialties-filters__pill--active')
            );
            e.target.classList.add('specialties-filters__pill--active');
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
    const btnFilters = document.querySelector('#btn-specialties-filters');
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
