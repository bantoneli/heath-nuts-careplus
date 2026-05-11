const calendarState = {
  specialty: '',
  doctor: '',
  clinic: '',
  weekStart: null
};

const SLOT_HEIGHT = 44;

const timeColumn = document.getElementById('calendar-time-column');
const daysRow = document.getElementById('calendar-days-row');
const columnsContainer = document.getElementById('calendar-columns');
const appointmentsRow = document.getElementById('calendar-appointments-row');

const specialtyFilter = document.getElementById('calendar-specialty-filter');
const doctorFilter = document.getElementById('calendar-doctor-filter');
const clinicFilter = document.getElementById('calendar-clinic-filter');
const weekSelect = document.getElementById('calendar-week-select');

initCalendarPage();

function initCalendarPage() {
  initializeAppointments();
  populateFilters();
  populateWeeks();
  renderTimeColumn();
  renderAppointmentsCards();
  renderCalendar();
  bindEvents();
}

function initializeAppointments() {

  let appointmentsData = getAppointmentsData();
  if (!appointmentsData.length) {
    appointmentsData = generateAppointmentsData(
      DoctorsData,
      SchedulingData.timeSlots
    );

    saveAppointmentsData(appointmentsData);
  }

  createInitialNutritionAppointment();
}

function populateFilters() {

  SpecialtiesData.specialties.forEach(specialty => {

    specialtyFilter.innerHTML += `
      <option value="${specialty}">${specialty}</option>
    `;
  });

  DoctorsData.forEach(doctor => {

    doctorFilter.innerHTML += `
      <option value="${doctor.id}">
        ${doctor.name}
      </option>
    `;
  });

  SchedulingData.clinics.forEach(clinic => {

    clinicFilter.innerHTML += `
      <option value="${clinic.id}">
        ${clinic.name}
      </option>
    `;
  });
}

function populateWeeks() {

  const today = new Date();

  const firstSunday = new Date(today);

  firstSunday.setDate(today.getDate() - today.getDay());

  for (let i = 0; i < 10; i++) {

    const weekStart = new Date(firstSunday);

    weekStart.setDate(firstSunday.getDate() + i * 7);

    const weekEnd = new Date(weekStart);

    weekEnd.setDate(weekStart.getDate() + 6);

    const value = formatDate(weekStart);

    const label = `${weekStart.toLocaleDateString('pt-BR')} → ${weekEnd.toLocaleDateString('pt-BR')}`;

    weekSelect.innerHTML += `
      <option value="${value}">${label}</option>
    `;
  }

  calendarState.weekStart = weekSelect.value;
}

function bindEvents() {

  specialtyFilter.addEventListener('change', () => {

    calendarState.specialty = specialtyFilter.value;

    renderCalendar();
  });

  doctorFilter.addEventListener('change', () => {

    calendarState.doctor = doctorFilter.value;

    renderCalendar();
  });

  clinicFilter.addEventListener('change', () => {

    calendarState.clinic = clinicFilter.value;

    renderCalendar();
  });

  weekSelect.addEventListener('change', () => {

    calendarState.weekStart = weekSelect.value;

    renderCalendar();
  });

  document.querySelectorAll('.calendar-period-btn').forEach(btn => {

    btn.addEventListener('click', () => {

      const period = btn.dataset.period;

      const slot = document.querySelector(`.calendar-time-slot[data-period="${period}"]`);

      if (!slot) return;

      slot.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });
}

function renderTimeColumn() {

  timeColumn.innerHTML = '';

  SchedulingData.timeSlots.forEach(slot => {

    timeColumn.innerHTML += `
      <div
        class="calendar-time-slot"
        data-period="${slot.period}"
        style="height:${SLOT_HEIGHT}px"
      >
        ${slot.label}
      </div>
    `;
  });
}

function renderAppointmentsCards() {

  const userAppointments = getUserAppointmentsData();

  document.getElementById('calendar-appointments-count').innerText = `${userAppointments.length} consultas`;

  appointmentsRow.innerHTML = '';

  if (!userAppointments.length) {

    appointmentsRow.innerHTML = `
      <div class="calendar-empty-state">
        Nenhuma consulta agendada.
      </div>
    `;

    return;
  }

  userAppointments.forEach(appointment => {

    appointmentsRow.innerHTML += `

      <div class="calendar-mini-card">

        <div class="calendar-mini-card__specialty">
          ${appointment.specialty}
        </div>

        <div class="calendar-mini-card__doctor">
          ${appointment.doctor}
        </div>

        <div class="calendar-mini-card__meta">
          <i class="bi bi-calendar-event"></i>
          ${appointment.date}
        </div>

        <div class="calendar-mini-card__meta">
          <i class="bi bi-clock"></i>
          ${appointment.time}
        </div>

      </div>
    `;
  });
}

function renderCalendar() {

  daysRow.innerHTML = '';

  columnsContainer.innerHTML = '';

  const start = parseLocalDate(calendarState.weekStart);

  const days = [];

  for (let i = 0; i < 60; i++) {

    const date = new Date(start);

    date.setDate(start.getDate() + i);

    days.push(date);
  }

  days.forEach(date => {

    const isoDate = formatDate(date);

    daysRow.innerHTML += `
      <div class="calendar-day-header">

        <div class="calendar-day-header__weekday">
          ${date.toLocaleDateString('pt-BR', { weekday: 'short' })}
        </div>

        <div class="calendar-day-header__date">
          ${date.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit'
          })}
        </div>

      </div>
    `;

    renderDayColumn(date, isoDate);
  });
}

function renderDayColumn(date, isoDate) {

  const column = document.createElement('div');

  column.className = 'calendar-day-column';

  const appointmentsData = getAppointmentsData();

  const userAppointments = getUserAppointmentsData();

  SchedulingData.timeSlots.forEach(slot => {

    const slotElement = document.createElement('div');

    slotElement.className = 'calendar-slot';

    slotElement.style.height = `${SLOT_HEIGHT}px`;

    let occupied = false;

    let occupiedByUser = false;

    DoctorsData.forEach(doctor => {

      if (calendarState.specialty && doctor.specialty !== calendarState.specialty) {
        return;
      }

      if (calendarState.doctor && doctor.id !== calendarState.doctor) {
        return;
      }

      if (calendarState.clinic && doctor.clinicId !== calendarState.clinic) {
        return;
      }

      const doctorSchedule = appointmentsData.find(
        item => item.doctorId === doctor.id
      );

      if (!doctorSchedule) return;

      const occupiedSlots = doctorSchedule.schedule[isoDate] || [];

      if (occupiedSlots.includes(slot.id)) {
        occupied = true;
      }
    });

    occupiedByUser = userAppointments.some(app => {
      return app.date === isoDate && app.time === slot.label;
    });

    if (occupiedByUser) {
      slotElement.classList.add('calendar-slot--user');
    }
    else if (occupied) {
      slotElement.classList.add('calendar-slot--occupied');
    }
    else {
      slotElement.classList.add('calendar-slot--available');
    }

    slotElement.dataset.date = isoDate;
    slotElement.dataset.time = slot.label;

    slotElement.innerHTML = `
      <span class="calendar-slot__dot"></span>
    `;

    slotElement.addEventListener('click', () => {

      window.location.href = `agendamento.html?date=${isoDate}&time=${slot.label}`;
    });

    column.appendChild(slotElement);
  });

  columnsContainer.appendChild(column);
}