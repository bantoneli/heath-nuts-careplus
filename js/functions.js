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