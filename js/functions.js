function getSelectedSpecialty() {
    const active = document.querySelector('#specialties-filters .specialties-filters__pill--active');
    return active ? active.dataset.specialty : null;
}

function getSearchQuery() {
    const input = document.querySelector('#ranking-search-input');
    return input ? input.value.toLowerCase().trim() : '';
}

function parseLocalDate(dateString) {
    if (!dateString) return null;
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

function getDayKeyFromDate(dateString) {
    const weekdayMap = ['dom','seg','ter','qua','qui','sex','sab'];

    const date = parseLocalDate(dateString);
    if (!date) return null;

    return weekdayMap[date.getDay()];
}

function getFilteredActions(data, {
    specialty = null,
    category = null,
    query = '',
    limit = null
} = {}) {

    let result = [...data];

    // 1. FILTRO POR ESPECIALIDADE (se vier)
    if (specialty) {
        result = result.filter(item =>
            item.specialty === specialty
        );
    }

    // 2. CATEGORIA
    if (category) {
        result = result.filter(item =>
            item.category === category
        );
    }

    // 3. BUSCA
    if (query) {
        const q = query.toLowerCase().trim();

        result = result.filter(item =>
            item.title.toLowerCase().includes(q) ||
            item.subtitle.toLowerCase().includes(q)
        );
    }

    // 4. ORDENAÇÃO
    result.sort((a, b) => b.pts - a.pts);

    // 5. LIMITE
    if (limit !== null) {
        result = result.slice(0, limit);
    }

    return result;
}

function renderActions(data, {
    showExpiry = true,
    category = null,
    limit = null,
    specialty = null 
} = {}) {
    const container = document.querySelector('#actions-list');
    if (!container) return;

    const searchInput = document.querySelector('#actions-search-input');
    const query = searchInput ? searchInput.value : '';

    const selectedSpecialty = specialty || getSelectedSpecialty();

    if (!selectedSpecialty) {
        renderActionsList(container, [], { showExpiry });
        return;
    }

    const filteredData = getFilteredActions(data, {
        specialty: selectedSpecialty,
        category,
        query,
        limit
    });

    renderActionsList(container, filteredData, { showExpiry });
}