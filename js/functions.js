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
    const date = parseLocalDate(dateString);
    if (!date) return null;

    return getWeekdayKey(date);
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

function getWeekdayKey(date) {
    const map = ['dom','seg','ter','qua','qui','sex','sab'];
    return map[date.getDay()];
}

function generateAppointmentsData(doctors, timeSlots) {
    const AppointmentsData = [];

    const today = new Date();

    function formatDate(date) {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');

        return `${ano}-${mes}-${dia}`;
    }

    function getWeekLoad(dayIndex) {
        const week = Math.floor(dayIndex / 7) + 1;

        switch (week) {
            case 1: return 0.95;
            case 2: return 0.90;
            case 3: return 0.85;
            case 4: return 0.80;
            case 5: return 0.60;
            case 6: return 0.40;
            case 7: return 0.20;
            default: return 0.0;
        }
    }

    for (const doctor of doctors) {
        const schedule = {};

        for (let i = 0; i < 60; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const isoDate = formatDate(date);
            const weekday = getWeekdayKey(date);

            //  médico não trabalha nesse dia
            if (!doctor.workDays.includes(weekday)) {
                schedule[isoDate] = [];
                continue;
            }

            const load = getWeekLoad(i);

            // filtra slots válidos pro médico (período)
            const validSlots = timeSlots.filter(slot =>
                doctor.periods.includes(slot.period)
            );

            const occupiedCount = Math.floor(validSlots.length * load);

            const shuffled = [...validSlots].sort(() => Math.random() - 0.5);

            const occupiedSlots = shuffled
                .slice(0, occupiedCount)
                .map(s => s.id);

            schedule[isoDate] = occupiedSlots;
            }

        AppointmentsData.push({
            doctorId: doctor.id,
            schedule
        });
    }

    return AppointmentsData;
}


/** Mock: “Sair” zera o flag para a próxima abertura da raiz exibir o login de novo. */
document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-mock-entrada-clear="1"]');
    if (!link) return;
    event.preventDefault();
    try {
        localStorage.removeItem('healthnuts_mock_entrada');
    } catch (e) {
        /* ignore */
    }
    const href = link.getAttribute('href');
    if (href) window.location.href = href;
});
