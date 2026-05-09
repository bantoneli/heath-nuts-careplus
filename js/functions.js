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

function getAppointmentsData() {
    return JSON.parse(sessionStorage.getItem('appointmentsData') || '[]');
}

function saveAppointmentsData(data) {
    sessionStorage.setItem('appointmentsData', JSON.stringify(data));
}

function getUserAppointmentsData() {
    return JSON.parse(sessionStorage.getItem('userAppointmentsData') || '[]');
}

function saveUserAppointmentsData(data) {
    sessionStorage.setItem('userAppointmentsData', JSON.stringify(data));
}

function addUserAppointment(appointment) {

    const current = getUserAppointmentsData();

    const alreadyExists = current.some(item => {
        return (
            item.doctor === appointment.doctor &&
            item.date === appointment.date &&
            item.time === appointment.time
        );
    });

    if (alreadyExists) {
        return false;
    }

    current.push(appointment);

    saveUserAppointmentsData(current);

    return true;
}

function createInitialNutritionAppointment() {

    const alreadyCreated = sessionStorage.getItem('initialAppointmentCreated');

    if (alreadyCreated === '1') {
        return;
    }

    const appointmentsData = getAppointmentsData();

    const nutritionDoctors = DoctorsData.filter(
        doctor => doctor.specialty === 'Nutrição'
    );

    if (!nutritionDoctors.length) {
        return;
    }

    const today = new Date();

    for (let i = 0; i < 7; i++) {

        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + 1 + i);

        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const isoDate = `${year}-${month}-${day}`;

        const weekdays = [
            'dom',
            'seg',
            'ter',
            'qua',
            'qui',
            'sex',
            'sab'
        ];

        const currentWeekday = weekdays[currentDate.getDay()];

        console.log('======================');
        console.log('DATA ANALISADA');
        console.log({
            isoDate,
            currentWeekday
        });

        for (const doctor of nutritionDoctors) {

            console.log('MÉDICO');
            console.log({
                name: doctor.name,
                specialty: doctor.specialty,
                availableDays: doctor.workDays,
                period: doctor.periods
            });

            const doctorWorksToday =
                doctor.workDays?.includes(currentWeekday);

            if (!doctorWorksToday) {
                continue;
}

            const doctorAppointments = appointmentsData.find(
                item => item.doctorId === doctor.id
            );

            if (!doctorAppointments) continue;

            const occupiedSlots = doctorAppointments.schedule[isoDate] || [];
            const availableSlots = SchedulingData.timeSlots.filter(slot => {

                const matchesPeriod =
                    doctor.periods?.includes(slot.period);

                const isOccupied =
                    occupiedSlots.includes(slot.id);

                return matchesPeriod && !isOccupied;
            });

            if (!availableSlots.length) continue;

            const randomIndex = Math.floor(
                Math.random() * availableSlots.length
            );

            const availableSlot = availableSlots[randomIndex];

            const appointment = {
                id: Date.now(),
                specialty: doctor.specialty,
                doctor: doctor.name,
                date: isoDate,
                time: availableSlot.label,
                clinic: doctor.clinic,
                createdAutomatically: true
            };

            addUserAppointment(appointment);

            occupyAppointmentSlot({
                doctorId: doctor.id,
                date: isoDate,
                slotId: availableSlot.id
            });

            sessionStorage.setItem('initialAppointmentCreated', '1');

            return appointment;
        }
    }
}

function occupyAppointmentSlot({
    doctorId,
    date,
    slotId
}) {

    const appointmentsData = getAppointmentsData();

    const doctorAppointments = appointmentsData.find(
        item => item.doctorId === doctorId
    );

    if (!doctorAppointments) {
        return;
    }

    if (!doctorAppointments.schedule[date]) {
        doctorAppointments.schedule[date] = [];
    }

    const alreadyOccupied = doctorAppointments.schedule[date]
        .includes(slotId);

    if (alreadyOccupied) {
        return;
    }

    doctorAppointments.schedule[date].push(slotId);

    saveAppointmentsData(appointmentsData);
}

/** Mock: “Sair” zera o flag para a próxima abertura da raiz exibir o login de novo. */
document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-mock-entrada-clear="1"]');
    if (!link) return;
    event.preventDefault();
    try {
        localStorage.removeItem('healthnuts_mock_entrada');

        sessionStorage.removeItem('appointmentsData');
        sessionStorage.removeItem('userAppointmentsData');

    } catch (e) {
        /* ignore */
    }
    const href = link.getAttribute('href');
    if (href) window.location.href = href;
});
