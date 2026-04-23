function getSelectedSpecialty() {
    const active = document.querySelector('#specialties-filters .specialties-filters__pill--active');
    return active ? active.dataset.specialty : SpecialtiesData.defaultSpecialty;
}

function getSearchQuery() {
    const input = document.querySelector('#ranking-search-input');
    return input ? input.value.toLowerCase().trim() : '';
}