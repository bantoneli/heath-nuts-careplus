const calendarState = {
  specialty: '',
  doctor: '',
  clinic: '',
  weekStart: null,
  selectedAppointment: null,
  draggingAppointment: null,
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
const trashZone = document.getElementById('calendar-trash-zone');

const modal = document.getElementById('calendar-reschedule-modal');
const body = document.getElementById('calendar-reschedule-modal-body');
const confirmButton = document.getElementById('calendar-reschedule-confirm');
const cancelButton = document.getElementById('calendar-reschedule-cancel');
const title = document.getElementById('calendar-reschedule-modal-title');

initCalendarPage();

function initCalendarPage() {
  renderHeader({ activePage: 'calendar', isSubpage: true });
  renderFooter();
  initializeAppointments();
  syncFilters();
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

function syncFilters() {

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
  firstWeekEnd.setDate(today.getDate() + (6 - today.getDay()));
  weekSelect.innerHTML += createWeekOption(firstWeekStart,firstWeekEnd);

  // PRÓXIMAS SEMANAS
  // começam no próximo domingo
  const nextSunday = new Date(firstWeekEnd);
  nextSunday.setDate(firstWeekEnd.getDate() + 1);

  for (let i = 0; i < 10; i++) {

    const weekStart = new Date(nextSunday);
    weekStart.setDate(nextSunday.getDate() + (i * 7));
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);
    weekSelect.innerHTML += createWeekOption(weekStart, weekEnd);
  }

  // começa na semana atual
  calendarState.weekStart = formatDate(firstWeekStart);

  weekSelect.value = calendarState.weekStart;
}

function scrollCalendarToDate(isoDate) {

  const scrollBody = document.getElementById('calendar-scroll-body');
  const columns = [...document.querySelectorAll('.calendar-day-column')];
  if (!columns.length) { return; }

  // tenta encontrar data exata
  let targetColumn = columns.find(column => {
    const firstSlot = column.querySelector('.calendar-slot');
    return (firstSlot && firstSlot.dataset.date === isoDate);
  });

  // fallback:
  // pega próximo dia disponível
  if (!targetColumn) {
    targetColumn = columns.find(column => {
      const firstSlot =column.querySelector('.calendar-slot');
      return (firstSlot && firstSlot.dataset.date > isoDate);
    });
  }

  // fallback final:
  // primeiro dia renderizado
  if (!targetColumn) { targetColumn = columns[0]; }
  if (!targetColumn) { return; }

  const sidebar = document.querySelector('.calendar-sidebar');

  const sidebarWidth = sidebar?.offsetWidth || 0;

  const targetLeft = targetColumn.offsetLeft - sidebarWidth;

  scrollBody.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  });
}

function bindEvents() {

  specialtyFilter.addEventListener('change', () => {

    calendarState.specialty = specialtyFilter.value;
    calendarState.selectedAppointment = null;

    if (calendarState.doctor) {
      calendarState.doctor = '';
      doctorFilter.value = '';
    }

    syncClinicFilter();
    syncDoctorFilter();
    enableAllPeriods();
    renderAppointmentsCards();
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
        syncFilters();

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
    scrollCalendarToDate(calendarState.weekStart);
  });

  document.querySelectorAll('.calendar-period-btn').forEach(btn => {

    btn.addEventListener('click', () => {

      const period = btn.dataset.period;
      const activePeriods = Object.values(
        calendarState.periods).filter(Boolean).length;

      const isCurrentlyActive = calendarState.periods[period];

      // impede desligar o último
      if (activePeriods === 1 && isCurrentlyActive) {return;}

      calendarState.periods[period] = !calendarState.periods[period];

      btn.classList.toggle('calendar-period-btn--inactive',
        !calendarState.periods[period]);
      
      syncDoctorFilter();
      renderTimeColumn();
      renderCalendar();
    });
  });

  if (trashZone) {

    trashZone?.addEventListener('click',() => {
      const appointment = calendarState.selectedAppointment;
      if (!appointment) { return; }
      openCancelAppointmentModal(appointment);
    });

    trashZone.addEventListener('dragover',event => {
      event.preventDefault();
      trashZone.classList.add('calendar-trash-zone--drag-over');
    });

    trashZone.addEventListener('dragleave',() => {
      trashZone.classList.remove('calendar-trash-zone--drag-over');
    });

    trashZone.addEventListener('drop',event => {
      event.preventDefault();
      trashZone.classList.remove('calendar-trash-zone--drag-over');
      const appointment = calendarState.draggingAppointment;
      if (!appointment) { return; }
      openCancelAppointmentModal(appointment);
    });
  }
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
  // TOGGLE OFF
  if (isSameAppointment(
      appointment,
      calendarState.selectedAppointment)
    ){
      calendarState.selectedAppointment = null;
      renderAppointmentsCards();
      return;
    }

  // ATIVA
  calendarState.selectedAppointment = appointment;

  renderAppointmentsCards();

  // filtros
  calendarState.specialty = appointment.specialty;
  calendarState.clinic = appointment.clinic;

  // médico
  const doctor =
    DoctorsData.find(
      doctor =>
        doctor.name ===
        appointment.doctor
    );

  if (doctor) {
    calendarState.doctor = String(doctor.id);
    applyDoctorPeriods(doctor);
    syncDoctorFilter();
  }

  // sincroniza filtros
  syncFilters();

  specialtyFilter.value = calendarState.specialty;
  clinicFilter.value = calendarState.clinic;
  doctorFilter.value = calendarState.doctor;

  
  renderTimeColumn();
  renderCalendar();
  scrollCalendarToDate(appointment.date);
}

function getWeekStartFromDate(dateString) {

  const date = parseLocalDate(dateString);
  const today = new Date();
  today.setHours(0,0,0,0);

  // primeira semana especial
  const firstWeekEnd = new Date(today);

  firstWeekEnd.setDate(today.getDate() + (6 - today.getDay()));

  // se estiver na semana atual
  if (date <= firstWeekEnd) {return formatDate(today);}

  // próximas semanas domingo->sábado
  const sunday = new Date(date);

  sunday.setDate(date.getDate() - date.getDay());

  return formatDate(sunday);
}

function openDoctorPicker({
  event,
  doctors,
  onSelect
}) {

  const picker = document.getElementById('calendar-doctor-picker');
  picker.innerHTML = '';

  doctors.forEach(doctor => {

    const item = document.createElement('div');

    item.className = 'calendar-doctor-picker__item';

    item.innerHTML = `
      <div>
        <strong>${doctor.name}</strong> -  ${doctor.specialty}
      </div>

      <div class="calendar-doctor-picker__clinic">
        ${doctor.clinic}
      </div>
    `;

    item.addEventListener('click', () => {
      picker.style.display = 'none';
      onSelect(doctor);
    });

    picker.appendChild(item);
  });

  picker.style.display = 'block';
  picker.style.left = `${event.clientX + 8}px`;
  picker.style.top = `${event.clientY + 8}px`;
}

function openScheduleRedirectModal({
  targetDoctor,
  newDate,
  newTime
}) {

  title.innerHTML =
    'Agendar consulta';

  body.innerHTML = `

    <div class="calendar-reschedule-modal__card">

      <div class="calendar-reschedule-modal__label">
        Novo agendamento
      </div>

      <strong>
        ${targetDoctor.specialty}
      </strong>

      <div>
        ${targetDoctor.name}
      </div>

      <div>
        ${newDate}
        -
        ${newTime}
      </div>

      <div>
        ${targetDoctor.clinic}
      </div>
    </div>

    <p class="mb-0">
      Deseja ir para a página de agendamento?
    </p>
  `;

  modal.classList.add( 'calendar-reschedule-modal--open' );

  const close = () => {
    modal.classList.remove( 'calendar-reschedule-modal--open');
  };

  cancelButton.onclick = close;

  confirmButton.onclick = () => {

    const params = new URLSearchParams({
      specialty: targetDoctor.specialty,
      doctor: targetDoctor.id,
      clinic: targetDoctor.clinic,
      date: newDate,
      time: newTime
    });

    window.location.href = `agendamento.html?${params.toString()}`;
  };
}

function openRescheduleModal({
  appointment,
  targetDoctor,
  newDate,
  newTime,
  onConfirm
}) {

  title.innerHTML = 'Reagendar consulta';

  body.innerHTML = `

    <div class="calendar-reschedule-modal__card">

      <div class="calendar-reschedule-modal__label">
        Consulta atual
      </div>

      <strong>
        ${appointment.specialty}
      </strong>

      <div>
        ${appointment.doctor}
      </div>

      <div>
        ${appointment.date}
        -
        ${appointment.time}
      </div>

      <div>
        ${appointment.clinic}
      </div>
    </div>

    <div class="calendar-reschedule-modal__card">

      <div class="calendar-reschedule-modal__label">
        Novo horário
      </div>

      <strong>
        ${targetDoctor.specialty}
      </strong>

      <div>
        ${targetDoctor.name}
      </div>

      <div>
        ${newDate}
        -
        ${newTime}
      </div>

      <div>
        ${targetDoctor.clinic}
      </div>
    </div>
  `;

  modal.classList.add(
    'calendar-reschedule-modal--open'
  );

  const close = () => {

    modal.classList.remove(
      'calendar-reschedule-modal--open'
    );
  };

  cancelButton.onclick = close;

  confirmButton.onclick = () => {

    close();

    onConfirm();
  };
}

function openCancelAppointmentModal(appointment) {

  title.innerHTML =
    'Deletar consulta';

  body.innerHTML = `

    <div
      class="
        calendar-reschedule-modal__card
      "
    >

      <div
        class="
          calendar-reschedule-modal__label
        "
      >
        Consulta
      </div>

      <strong>
        ${appointment.specialty}
      </strong>

      <div>
        ${appointment.doctor}
      </div>

      <div>
        ${appointment.date}
        -
        ${appointment.time}
      </div>

      <div>
        ${appointment.clinic}
      </div>

    </div>

    <p class="mb-0">
      Deseja cancelar esta consulta?
    </p>
  `;

  modal.classList.add(
    'calendar-reschedule-modal--open'
  );

  const close = () => {

    modal.classList.remove(
      'calendar-reschedule-modal--open'
    );
  };

  cancelButton.onclick = close;

  confirmButton.onclick = () => {

    close();

    cancelAppointment(
      appointment
    );
  };
}

function cancelAppointment(appointment) {

  const userAppointments =
    getUserAppointmentsData();

  const appointmentsData =
    getAppointmentsData();

  const appointmentIndex =
    userAppointments.findIndex(
      app => {

        return (
          app.date ===
            appointment.date &&

          app.time ===
            appointment.time &&

          app.doctor ===
            appointment.doctor
        );
      }
    );

  if (appointmentIndex === -1) {
    return;
  }

  const doctor =
    DoctorsData.find(
      doctor =>
        doctor.name ===
        appointment.doctor
    );

  if (!doctor) {
    return;
  }

  const doctorSchedule =
    appointmentsData.find(
      item =>
        item.doctorId ===
        doctor.id
    );

  if (!doctorSchedule) {
    return;
  }

  const slot =
    SchedulingData.timeSlots.find(
      slot =>
        slot.label ===
        appointment.time
    );

  if (!slot) {
    return;
  }

  doctorSchedule.schedule[
    appointment.date
  ] = (
    doctorSchedule.schedule[
      appointment.date
    ] || []
  ).filter(
    slotId =>
      slotId !== slot.id
  );

  userAppointments.splice(
    appointmentIndex,
    1
  );

  saveAppointmentsData(
    appointmentsData
  );

  saveUserAppointmentsData(
    userAppointments
  );

  calendarState.selectedAppointment =
    null;

  renderAppointmentsCards();

  renderCalendar();
}

function moveAppointment(
  appointment,
  newDate,
  newTime,
  targetDoctor = null
) {

  const userAppointments = getUserAppointmentsData();
  const appointmentsData = getAppointmentsData();

  // appointment do usuário
  const appointmentIndex = userAppointments.findIndex(app => {
    return (
      app.date === appointment.date &&
      app.time === appointment.time &&
      app.doctor === appointment.doctor
    );
  });

  if (appointmentIndex === -1) { return; }

  // médico ORIGINAL
  const originalDoctor = DoctorsData.find(
    doctor => doctor.name === appointment.doctor );

  if (!originalDoctor) { return; }

  // médico FINAL
  const finalDoctor = targetDoctor || originalDoctor;

  // agenda ORIGINAL
  const originalDoctorSchedule = appointmentsData.find(
    item => item.doctorId === originalDoctor.id );

  // agenda DESTINO
  const finalDoctorSchedule = appointmentsData.find(
    item => item.doctorId === finalDoctor.id );

  if (!originalDoctorSchedule || !finalDoctorSchedule ) { return; }

  // slot antigo
  const oldSlots = originalDoctorSchedule.schedule[
    appointment.date ] || [];

  // slot novo
  const newSlots = finalDoctorSchedule.schedule[
    newDate ] || [];

  // encontra slot ids
  const oldSlot = SchedulingData.timeSlots.find(
    slot => slot.label === appointment.time );

  const newSlot = SchedulingData.timeSlots.find(
    slot => slot.label === newTime );

  if (!oldSlot || !newSlot) { return; }

  // REMOVE slot antigo
  originalDoctorSchedule.schedule[ appointment.date ] = (
    originalDoctorSchedule.schedule[ appointment.date ] || []
  ).filter( slotId => slotId !== oldSlot.id );

  // limpa arrays vazios
  if (!originalDoctorSchedule.schedule[ appointment.date ].length) {
    delete originalDoctorSchedule.schedule[ appointment.date ];
  }

  // GARANTE array destino
  if (!finalDoctorSchedule.schedule[ newDate ]){
    finalDoctorSchedule.schedule[ newDate ] = [];
  }

  // EVITA DUPLICAÇÃO
  if (!finalDoctorSchedule.schedule[newDate].includes(newSlot.id)) {
    finalDoctorSchedule.schedule[newDate].push(newSlot.id);
  }

  // atualiza appointment usuário
  userAppointments[appointmentIndex] = {
    ...appointment,
    doctor: finalDoctor.name,
    doctorId: finalDoctor.id,
    specialty: finalDoctor.specialty,
    clinic: finalDoctor.clinic,
    date: newDate,
    time: newTime
  };

  calendarState.selectedAppointment = userAppointments[appointmentIndex];

  // salva
  saveAppointmentsData(appointmentsData);
  saveUserAppointmentsData(userAppointments);

  // atualiza navegação
  const targetWeek = getWeekStartFromDate(newDate);

  calendarState.weekStart = targetWeek;
  weekSelect.value = targetWeek;

  renderAppointmentsCards();
  renderCalendar();
  scrollCalendarToDate(newDate);
}

function isSameAppointment(a, b) {

  if (!a || !b) {
    return false;
  }

  return (
    a.date === b.date &&
    a.time === b.time &&
    a.doctor === b.doctor
  );
}

function renderAppointmentsCards() {


  trashZone?.classList.toggle(
    'calendar-trash-zone--visible',
    !!calendarState.selectedAppointment
  );

  const userAppointments = getUserAppointmentsData();

  document.getElementById(
    'calendar-appointments-count'
  ).innerText = `${userAppointments.length} consultas`;

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

    const card = document.createElement('div');
    card.className = 'calendar-mini-card';

    if (isSameAppointment(
      appointment,
      calendarState.selectedAppointment)
    ){
      card.classList.add('calendar-mini-card--active');
    }

    card.draggable = true;
    card.dataset.date = appointment.date;
    card.dataset.time = appointment.time;

    card.innerHTML = `

      <div class="calendar-mini-card__specialty">
        ${appointment.specialty}
        -
        ${appointment.doctor}
      </div>

      <div class="calendar-mini-card__meta">
        <i class="bi bi-calendar-event"></i>
        ${appointment.date}
        -
        ${appointment.time}
      </div>

      <div class="calendar-mini-card__meta">
        <i class="bi bi-clock"></i>
        ${appointment.clinic}
      </div>
    `;

    // CLICK
    card.addEventListener('click', () => {
      selectAppointmentCard(appointment);
    });

    // DRAG START
    card.addEventListener('dragstart', () => {
      calendarState.selectedAppointment = appointment;
      calendarState.draggingAppointment = appointment;
      // ativa visualmente sem rerender
      document
        .querySelectorAll('.calendar-mini-card')
        .forEach(card => {
          card.classList.remove('calendar-mini-card--active');
        });

      card.classList.add('calendar-mini-card--active');
    }
    );

    // DRAG END
    card.addEventListener('dragend', () => {
      calendarState.draggingAppointment = null;
    });

    appointmentsRow.appendChild(card);
  });
}

function hasWorkingDoctorsInDay(date) {
  const dayKey = getWeekdayKey(date);

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

  // médico
  if (calendarState.doctor) {

    doctors = doctors.filter(
      doctor => String(doctor.id) === String(calendarState.doctor)
    );
  }

  // períodos
  doctors = doctors.filter(doctor => {
    return doctor.periods.some(
      period => calendarState.periods[period]
    );
  });

  // trabalha no dia
  doctors = doctors.filter(
    doctor => doctor.workDays.includes(dayKey)
  );

  return doctors.length > 0;
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
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = [];

  for (let i = 0; i < 60; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    days.push(date);
  }

  days.forEach(date => {

    const isoDate = formatDate(date);

    const shouldRenderDay = hasWorkingDoctorsInDay(date);

    if (!shouldRenderDay) { return; }

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

function resolveSlotDoctors({
  isoDate,
  slot,
  slotElement
}) {

  const dayKey = getWeekdayKey(parseLocalDate(isoDate));

  const availableDoctors =
    getAvailableDoctorsForSlot(
      isoDate,
      slot.id,
      slot.period,
      dayKey
    );

  if (!availableDoctors.length) { return null; }

  return {
    doctors: availableDoctors,

    pickerEvent: {
      clientX:
        slotElement
          .getBoundingClientRect()
          .left,

      clientY:
        slotElement
          .getBoundingClientRect()
          .top
    }
  };
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

    const availableDoctors = getAvailableDoctorsForSlot(
      isoDate,
      slot.id,
      slot.period,
      dayKey
    );

    const hasAvailableDoctor = availableDoctors.length > 0;

    const blockedByLevel =isDateBlockedByLevel(isoDate);

    occupiedByUser = userAppointments.some(app => {

      // data/hora
      if ( app.date !== isoDate || app.time !== slot.label ) {
        return false;
      }

      // especialidade
      if ( calendarState.specialty && app.specialty !== calendarState.specialty) {
        return false;
      }

      // clínica
      if (calendarState.clinic && app.clinic !== calendarState.clinic) {
        return false;
      }

      // médico 
      const selectedDoctor = DoctorsData.find(
        doctor => String(doctor.id) === String(calendarState.doctor));

      if (
        calendarState.doctor && selectedDoctor && app.doctor !== selectedDoctor.name
      ) {
        return false;
      }

      // período
      if (slot.period && app.period && slot.period !== app.period) {
        return false;
      }

      return true;
    });

    if (occupiedByUser) { 
      slotElement.draggable = true;
      const userAppointment = userAppointments.find(app => {
        return (app.date === isoDate && app.time === slot.label);
      });

      slotElement.addEventListener('dragstart', () => {
        calendarState.selectedAppointment = userAppointment;
        calendarState.draggingAppointment = userAppointment;
        renderAppointmentsCards();
      });

      slotElement.addEventListener( 'click', () => {
        selectAppointmentCard(userAppointment);
      });

      slotElement.addEventListener( 'dragend', () => {
        calendarState.draggingAppointment = null;
      });

      slotElement.classList.add('calendar-slot--user');

    // BLOQUEADO POR REGRA
    }else if (blockedByLevel) {
      slotElement.classList.add('calendar-slot--blocked');

    // OCUPADO
    } else if (!hasAvailableDoctor && !blockedByLevel) {
      slotElement.classList.add('calendar-slot--occupied');
    
    // DISPONIVEL
    } else {
      slotElement.classList.add('calendar-slot--available');
      
      slotElement.addEventListener('click',() => {

          const appointment = calendarState.selectedAppointment;

          const resolved =
            resolveSlotDoctors({
              isoDate,
              slot,
              slotElement
            });

          if (!resolved) { return; }

          const { doctors, pickerEvent } = resolved;

          const handleDoctor = doctor => {

            // NOVO AGENDAMENTO
            if (!appointment) {

              openScheduleRedirectModal({
                targetDoctor: doctor,
                newDate: isoDate,
                newTime: slot.label
              });

              return;
            }

            // REMARCAÇÃO
            openRescheduleModal({
              appointment,
              targetDoctor: doctor,
              newDate: isoDate,
              newTime: slot.label,
              onConfirm: () => {

                moveAppointment(
                  appointment,
                  isoDate,
                  slot.label,
                  doctor
                );
              }
            });
          };

          // um médico
          if (doctors.length === 1) {
            handleDoctor(  doctors[0] );
            return;
          }

          // múltiplos médicos
          openDoctorPicker({
            event: pickerEvent,
            doctors,
            onSelect: handleDoctor
          });
        }
      );

      slotElement.addEventListener('dragover', event => { 
        event.preventDefault();
        slotElement.classList.add('drag-over');
      });

      slotElement.addEventListener( 'dragleave', () => {
        slotElement.classList.remove('drag-over');
      });

      slotElement.addEventListener('drop', event => {
        event.preventDefault();
        slotElement.classList.remove('drag-over');
        const appointment = calendarState.draggingAppointment;
        if (!appointment) { return; }
        const dayKey = getWeekdayKey( parseLocalDate(isoDate) );

        const availableDoctors =
          getAvailableDoctorsForSlot(
            isoDate,
            slot.id,
            slot.period,
            dayKey
          );

        // nenhum médico
        if (!availableDoctors.length) { return; }

        // somente um médico
        if (availableDoctors.length === 1) {

          const doctor = availableDoctors[0];

          openRescheduleModal({
            appointment,
            targetDoctor: doctor,
            newDate: isoDate,
            newTime: slot.label,

            onConfirm: () => {
              moveAppointment(
                appointment,
                isoDate,
                slot.label,
                doctor
              );
            }
          });

          return;
        }

        // múltiplos médicos
        openDoctorPicker({
          event,
          doctors: availableDoctors,
          onSelect: doctor => {

            openRescheduleModal({
              appointment,
              targetDoctor: doctor,
              newDate: isoDate,
              newTime: slot.label,

              onConfirm: () => {
                moveAppointment(
                  appointment,
                  isoDate,
                  slot.label,
                  doctor
                );
              }
            });
          }
        });
      });
    }

    

    slotElement.dataset.date = isoDate;
    slotElement.dataset.time = slot.label;

    slotElement.innerHTML = `
      <span class="calendar-slot__dot"></span>
    `;

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

  const scrollBody = document.getElementById('calendar-scroll-body');
  const daysRow = document.getElementById('calendar-days-row');

  scrollBody.addEventListener('scroll', () => {
    daysRow.style.transform = `translateX(-${scrollBody.scrollLeft}px)`;
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

  // reseta todos
  calendarState.periods = {
    manha: false,
    tarde: false,
    noite: false
  };

  // ativa somente os do médico
  doctor.periods.forEach(period => {

    calendarState.periods[period] =
      true;
  });

  // atualiza UI
  document.querySelectorAll('.calendar-period-btn').forEach(btn => {
    const period = btn.dataset.period;

    btn.classList.toggle(
      'calendar-period-btn--inactive',
      !calendarState.periods[period]
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

function isDateBlockedByLevel(isoDate ) {
  const specialty = calendarState.specialty;

  if (!specialty) {return false; }

  const level = getSpecialtyLevel(specialty);
  const minimumDays = getMinimumDaysByLevel(level);

  if (minimumDays <= 0) {return false;}

  const today = new Date();

  today.setHours(0,0,0,0);

  const limitDate = new Date(today);

  limitDate.setDate(today.getDate() + minimumDays);

  const targetDate = parseLocalDate(isoDate);

  targetDate.setHours(0,0,0,0);

  return targetDate < limitDate;
}