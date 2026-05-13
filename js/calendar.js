const calendarState = {
  specialty: '',
  doctor: '',
  clinic: '',
  weekStart: null,
  selectedAppointment: null,
  periods: {
    manha: true,
    tarde: true,
    noite: true
  }
};

const SLOT_HEIGHT = 22;

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
  renderHeader({ activePage: 'agendamento', isSubpage: true });
  renderFooter();
  initializeAppointments();
  populateFilters();
  populateWeeks();
  renderTimeColumn();
  renderAppointmentsCards();
  renderCalendar();
  bindEvents();
  syncHorizontalScroll();
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

  syncSpecialtyFilter();
  syncClinicFilter();
  syncDoctorFilter();
}

function syncSpecialtyFilter() {

  specialtyFilter.innerHTML = `
    <option value="">Todas especialidades</option>
  `;

  let doctors = DoctorsData;

  if (calendarState.clinic) {
    doctors = doctors.filter(
      doctor => doctor.clinic === calendarState.clinic
    );
  }

  const specialties = [
    ...new Set(doctors.map(doctor => doctor.specialty))
  ];

  specialties.forEach(specialty => {

    specialtyFilter.innerHTML += `
      <option value="${specialty}">
        ${specialty}
      </option>
    `;
  });

  specialtyFilter.value = calendarState.specialty;
}

function syncClinicFilter() {

  const previousClinic = calendarState.clinic;

  clinicFilter.innerHTML = `
    <option value="">Todas clínicas</option>
  `;

  let doctors = DoctorsData;

  if (calendarState.specialty) {
    doctors = doctors.filter(
      doctor => doctor.specialty === calendarState.specialty
    );
  }

  const clinics = [
    ...new Set(
      doctors.map(doctor => doctor.clinic)
    )
  ];

  clinics.forEach(clinic => {

    clinicFilter.innerHTML += `
      <option value="${clinic}">
        ${clinic}
      </option>
    `;
  });

  const clinicStillExists =
    clinics.includes(previousClinic);

  if (clinicStillExists) {
    calendarState.clinic = previousClinic;
    clinicFilter.value = previousClinic;
  } else {
    calendarState.clinic = '';
    clinicFilter.value = '';
  }
}

function createWeekOption(startDate, endDate) {

  return `
    <option value="${formatDate(startDate)}">

      ${startDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
      })}

      →

      ${endDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      })}

    </option>
  `;
}

function populateWeeks() {

  weekSelect.innerHTML = '';

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  // PRIMEIRA SEMANA
  // começa hoje
  const firstWeekStart = new Date(today);

  // termina no próximo sábado
  const firstWeekEnd = new Date(today);

  firstWeekEnd.setDate(
    today.getDate() + (6 - today.getDay())
  );

  weekSelect.innerHTML += createWeekOption(
    firstWeekStart,
    firstWeekEnd
  );

  // PRÓXIMAS SEMANAS
  // começam no próximo domingo
  const nextSunday = new Date(firstWeekEnd);

  nextSunday.setDate(firstWeekEnd.getDate() + 1);

  for (let i = 0; i < 10; i++) {

    const weekStart = new Date(nextSunday);

    weekStart.setDate(
      nextSunday.getDate() + (i * 7)
    );

    const weekEnd = new Date(weekStart);

    weekEnd.setDate(
      weekStart.getDate() + 6
    );

    weekSelect.innerHTML += createWeekOption(
      weekStart,
      weekEnd
    );
  }

  // começa na semana atual
  calendarState.weekStart =
    formatDate(firstWeekStart);

  weekSelect.value =
    calendarState.weekStart;
}

function scrollCalendarToDate(isoDate) {

  const scrollBody =
    document.getElementById(
      'calendar-scroll-body'
    );

  const columns =
    document.querySelectorAll(
      '.calendar-day-column'
    );

  const targetColumn = [...columns].find(
    column => {

      const firstSlot =
        column.querySelector('.calendar-slot');

      return (
        firstSlot &&
        firstSlot.dataset.date === isoDate
      );
    }
  );

  if (!targetColumn) {
    return;
  }

  const sidebar =
    document.querySelector('.calendar-sidebar');

  const sidebarWidth =
    sidebar?.offsetWidth || 0;

  const targetLeft =
    targetColumn.offsetLeft - sidebarWidth;

  scrollBody.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  });
}

function bindEvents() {

  specialtyFilter.addEventListener('change', () => {

    calendarState.specialty = specialtyFilter.value;

    if (calendarState.doctor) {
      calendarState.doctor = '';
      doctorFilter.value = '';
    }

    syncClinicFilter();
    syncDoctorFilter();

    enableAllPeriods();

    renderTimeColumn();
    renderCalendar();
  });

  clinicFilter.addEventListener('change', () => {

    calendarState.clinic = clinicFilter.value;

    if (calendarState.doctor) {
      calendarState.doctor = '';
      doctorFilter.value = '';
    }

    syncSpecialtyFilter();
    syncDoctorFilter();

    enableAllPeriods();

    renderTimeColumn();
    renderCalendar();
  });

  doctorFilter.addEventListener('change', () => {

    calendarState.doctor = doctorFilter.value;

    if (calendarState.doctor) {

      const doctor = DoctorsData.find(
        item => String(item.id) === String(calendarState.doctor)
      );

      if (doctor) {

        // atualiza estado
        calendarState.specialty = doctor.specialty;
        calendarState.clinic = doctor.clinic;

        // recria listas
        syncSpecialtyFilter();
        syncClinicFilter();
        syncDoctorFilter();

        // atualiza selects visuais
        specialtyFilter.value = doctor.specialty;
        clinicFilter.value = doctor.clinic;
        doctorFilter.value = doctor.id;

        // períodos
        applyDoctorPeriods(doctor);
      }

    } else {
      calendarState.selectedAppointment = null;
      calendarState.weekStart = formatDate(new Date());
      weekSelect.value = calendarState.weekStart;
      enableAllPeriods();
      syncSpecialtyFilter();
      syncClinicFilter();
    }

    syncDoctorFilter();
    renderTimeColumn();
    renderCalendar();
  });

  weekSelect.addEventListener('change', () => {

    calendarState.weekStart = weekSelect.value;

    scrollCalendarToDate(
      calendarState.weekStart
    );
  });

  document.querySelectorAll('.calendar-period-btn').forEach(btn => {

    btn.addEventListener('click', () => {

      const period = btn.dataset.period;

      const activePeriods = Object.values(
        calendarState.periods
      ).filter(Boolean).length;

      const isCurrentlyActive =
        calendarState.periods[period];

      // impede desligar o último
      if (activePeriods === 1 && isCurrentlyActive) {
        return;
      }

      calendarState.periods[period] =
        !calendarState.periods[period];

      btn.classList.toggle(
        'calendar-period-btn--inactive',
        !calendarState.periods[period]
      );
      
      syncDoctorFilter();

      renderTimeColumn();

      renderCalendar();
    });
  });
}

function renderTimeColumn() {

  if (!canRenderCalendar()) {
    timeColumn.innerHTML = '';
    return;
  }

  timeColumn.innerHTML = '';

  getVisibleSlots().forEach(slot => {

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

function selectAppointmentCard(appointment) {

  calendarState.selectedAppointment =
    appointment;

  // filtros
  calendarState.specialty =
    appointment.specialty;

  calendarState.clinic =
    appointment.clinic;

  // encontra médico
  const doctor = DoctorsData.find(
    doctor =>
      doctor.name === appointment.doctor
  );

  if (doctor) {

    calendarState.doctor =
      String(doctor.id);

    applyDoctorPeriods(doctor);
  }

  // sincroniza selects
  syncSpecialtyFilter();
  syncClinicFilter();
  syncDoctorFilter();

  specialtyFilter.value =
    calendarState.specialty;

  clinicFilter.value =
    calendarState.clinic;

  doctorFilter.value =
    calendarState.doctor;

  renderTimeColumn();
  renderCalendar();

  // scroll até semana
  const appointmentDate =
    parseLocalDate(appointment.date);

  const sunday = new Date(appointmentDate);

  sunday.setDate(
    appointmentDate.getDate() -
    appointmentDate.getDay()
  );

  const weekValue =
    formatDate(sunday);

  weekSelect.value = weekValue;

  calendarState.weekStart = weekValue;

  // scroll horizontal
  scrollCalendarToDate(
    appointment.date
  );
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

      <div
        class="calendar-mini-card"
        data-date="${appointment.date}"
        data-time="${appointment.time}"
      >

        <div class="calendar-mini-card__specialty">
          ${appointment.specialty} - ${appointment.doctor}
        </div>


        <div class="calendar-mini-card__meta">
          <i class="bi bi-calendar-event"></i>
          ${appointment.date} - ${appointment.time}
        </div>

        <div class="calendar-mini-card__meta">
          <i class="bi bi-clock"></i>
          ${appointment.clinic}
        </div>

      </div>
    `;
    setTimeout(() => {

      const cards = document.querySelectorAll(
        '.calendar-mini-card'
      );

      const card = cards[cards.length - 1];

      card.addEventListener('click', () => {

        selectAppointmentCard(appointment);
      });

    });

  });
}

function renderCalendar() {

  if (!canRenderCalendar()) {

      columnsContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-center w-100 p-5">
          <div class="calendar-empty-state text-center">
            <i class="bi bi-calendar2-week fs-1 d-block mb-3"></i>

            Selecione uma especialidade, médico
            ou um agendamento existente
            para visualizar os horários.
          </div>
        </div>
      `;

      daysRow.innerHTML = '';
      return;
    }

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

  getVisibleSlots().forEach(slot => {

    const slotElement = document.createElement('div');

    slotElement.className = 'calendar-slot';

    slotElement.style.height = `${SLOT_HEIGHT}px`;

    const dayKey = getWeekdayKey(date);

    const availableDoctors =
      getAvailableDoctorsForSlot(
        isoDate,
        slot.id,
        slot.period,
        dayKey
      );

      const hasAvailableDoctor =
      availableDoctors.length > 0;

    occupiedByUser = userAppointments.some(app => {

      // data/hora
      if (
        app.date !== isoDate ||
        app.time !== slot.label
      ) {
        return false;
      }

      // especialidade
      if (
        calendarState.specialty &&
        app.specialty !== calendarState.specialty
      ) {
        return false;
      }

      // clínica
      if (
        calendarState.clinic &&
        app.clinic !== calendarState.clinic
      ) {
        return false;
      }

      // médico 
      const selectedDoctor = DoctorsData.find(
        doctor =>
          String(doctor.id) ===
          String(calendarState.doctor)
      );

      if (
        calendarState.doctor &&
        selectedDoctor &&
        app.doctor !== selectedDoctor.name
      ) {
        return false;
      }

      // período
      if (
        slot.period &&
        app.period &&
        slot.period !== app.period
      ) {
        return false;
      }

      return true;
    });

    if (occupiedByUser) {
      slotElement.classList.add('calendar-slot--user');
    }
    else if (!hasAvailableDoctor) {
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

    if (
      slotElement.classList.contains(
        'calendar-slot--available'
      )
    ) {

      slotElement.addEventListener('click', () => {

        window.location.href =
          `agendamento.html?date=${isoDate}&time=${slot.label}`;
      });
    }

    column.appendChild(slotElement);
  });

  columnsContainer.appendChild(column);
}

function getVisibleSlots() {

  return SchedulingData.timeSlots.filter(slot => {
    return calendarState.periods[slot.period];
  });
}

function syncHorizontalScroll() {

  const scrollBody =
    document.getElementById('calendar-scroll-body');

  const daysRow =
    document.getElementById('calendar-days-row');

  scrollBody.addEventListener('scroll', () => {

    daysRow.style.transform =
      `translateX(-${scrollBody.scrollLeft}px)`;
  });
}

function syncDoctorFilter() {

  const previousDoctor = calendarState.doctor;

  doctorFilter.innerHTML = `
    <option value="">Todos médicos</option>
  `;

  let doctors = [...DoctorsData];

  // especialidade
  if (calendarState.specialty) {
    doctors = doctors.filter(
      doctor => doctor.specialty === calendarState.specialty
    );
  }

  // clínica
  if (calendarState.clinic) {
    doctors = doctors.filter(
      doctor => doctor.clinic === calendarState.clinic
    );
  }

  // períodos ativos
  const activePeriods = Object.entries(calendarState.periods)
    .filter(([, active]) => active)
    .map(([period]) => period);

  // se nenhum período ativo → nenhum médico
  if (!activePeriods.length) {
    doctors = [];
  } else {

    doctors = doctors.filter(doctor =>
      doctor.periods.some(period =>
        activePeriods.includes(period)
      )
    );
  }

  doctors.forEach(doctor => {

    doctorFilter.innerHTML += `
      <option value="${doctor.id}">
        ${doctor.name}
      </option>
    `;
  });

  // mantém médico apenas se ainda for válido
  const doctorStillExists = doctors.some(
    doctor => String(doctor.id) === String(previousDoctor)
  );

  if (doctorStillExists) {

    calendarState.doctor = previousDoctor;
    doctorFilter.value = previousDoctor;

  } else {

    calendarState.doctor = '';
    doctorFilter.value = '';
  }
}

function applyDoctorPeriods(doctor) {

  const periods = doctor.periods || [];

  Object.keys(calendarState.periods).forEach(period => {

    const enabled = periods.includes(period);

    calendarState.periods[period] = enabled;

    const button = document.querySelector(
      `.calendar-period-btn[data-period="${period}"]`
    );

    if (!button) return;

    button.disabled = !enabled;

    button.classList.toggle(
      'calendar-period-btn--inactive',
      !enabled
    );
  });
}

function enableAllPeriods() {

  Object.keys(calendarState.periods).forEach(period => {

    calendarState.periods[period] = true;

    const button = document.querySelector(
      `.calendar-period-btn[data-period="${period}"]`
    );

    if (!button) return;

    button.disabled = false;

    button.classList.remove(
      'calendar-period-btn--inactive'
    );
  });
}

function canRenderCalendar() {

  return (
    !!calendarState.doctor ||
    !!calendarState.specialty ||
    !!calendarState.selectedAppointment
  );
}

function getAvailableDoctorsForSlot(
  isoDate,
  slotId,
  period,
  dayKey
) {

  let doctors = [...DoctorsData];

  // especialidade
  if (calendarState.specialty) {

    doctors = doctors.filter(
      doctor => doctor.specialty === calendarState.specialty
    );
  }

  // clínica
  if (calendarState.clinic) {

    doctors = doctors.filter(
      doctor => doctor.clinic === calendarState.clinic
    );
  }

  // médico específico
  if (calendarState.doctor) {

    doctors = doctors.filter(
      doctor =>
        String(doctor.id) ===
        String(calendarState.doctor)
    );
  }

  // período
  doctors = doctors.filter(
    doctor => doctor.periods.includes(period)
  );

  // dia da semana
  doctors = doctors.filter(
    doctor => doctor.workDays.includes(dayKey)
  );

  const appointmentsData = getAppointmentsData();

  // remove médicos ocupados
  doctors = doctors.filter(doctor => {

    const doctorSchedule = appointmentsData.find(
      item => item.doctorId === doctor.id
    );

    if (!doctorSchedule) {
      return true;
    }

    const occupiedSlots =
      doctorSchedule.schedule[isoDate] || [];

    return !occupiedSlots.includes(slotId);
  });

  return doctors;
}