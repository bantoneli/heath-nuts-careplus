/**
 * Página de agendamento: header/footer, listas a partir de SchedulingData e sincronização do resumo.
 */

const mapIframe = document.querySelector('.schedule-map__iframe');

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'agendamento', isSubpage: true });
  renderFooter();

  if (typeof SchedulingData === 'undefined') {
    return;
  }
  initScheduleDateDefault();
  window.AppointmentsData = generateAppointmentsData(DoctorsData,SchedulingData.timeSlots);
  updateSchedulingUI();
  wireScheduleInteractions();
  initSchedulePage();
  initDoctorSearchDropdown();
});

function initSchedulePage() {
    renderSpecialtiesFilters(SpecialtiesData, null);
}

function formatScheduleDateDisplay(isoDate) {
  if (!isoDate) {
    return 'Selecione a data';
  }
  const [y, m, d] = isoDate.split('-').map(Number);
  if (!y || !m || !d) {
    return 'Selecione a data';
  }
  const date = new Date(y, m - 1, d);
  let weekday = date.toLocaleDateString('pt-BR', { weekday: 'short' });
  weekday = weekday.replace(/\.$/, '');
  weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const rest = date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' });
  return `${weekday}, ${rest}`;
}
function syncSummaryFromState() {
  const specialty = getSelectedSpecialty() || 'Selecione';
  const doctor = getSelectedDoctor();
  const iso = SchedulingData.selectedDate || '';

  let slotLabel = SchedulingData.selectedSlotLabel || '—';

  if (SchedulingData.selectedSlotId === 'encaixe' && SchedulingData.selectedPeriod) {
    const periodMap = {
      manha: 'Manhã',
      tarde: 'Tarde',
      noite: 'Noite'
    };

    const periodLabel = periodMap[SchedulingData.selectedPeriod] || SchedulingData.selectedPeriod;

    slotLabel = `${slotLabel} • ${periodLabel}`;
  }

  const specialtyEl = document.querySelector('#summary-specialty');
  const doctorEl = document.querySelector('#summary-doctor');
  const dtEl = document.querySelector('#summary-datetime');
  const clinicEl = document.querySelector('#summary-clinic');

  if (specialtyEl) specialtyEl.textContent = specialty;
  if (doctorEl) doctorEl.textContent = doctor;

  if (dtEl) {
    const datePart = formatScheduleDateDisplay(iso);
    dtEl.textContent = `${datePart} • ${slotLabel}`;
  }

  const clinicId = SchedulingData.selectedClinicId;
  const clinic = SchedulingData.clinics.find(c => c.id == clinicId);

  if (clinicEl) {
    clinicEl.textContent = clinic?.name || 'Selecione';
  }

  applyLiveValidation();
}

function renderEncaixeButton(isActive = false) {
  const activeClass = isActive
    ? ' ranking-filters__pill--accent-active'
    : '';

  return `
    <button type="button"
      class="ranking-filters__pill${activeClass}"
      data-slot-id="encaixe"
      data-slot-label="Encaixe">
      Encaixe
    </button>
  `;
}

function canShowEncaixe() {
  const doctorId = SchedulingData.selectedDoctorId;
  const period = SchedulingData.selectedPeriod;

  if (!doctorId || !period) return true;

  const doctor = DoctorsData.find(d => d.id === doctorId);
  return doctor?.periods.includes(period);
}

function renderScheduleSlots(showEncaixe = false) {
  const slots = document.querySelector('#schedule-slots');
  if (!slots) return;

  const specialty = getSelectedSpecialty();
  const doctorId = SchedulingData.selectedDoctorId;

  const date = SchedulingData.selectedDate;

  if (date) {
    const weekday = getDayKeyFromDate(date);

    if (weekday === 'sab' || weekday === 'dom') {
      slots.innerHTML = '<p class="text-muted">Nenhum médico atendendo neste dia</p>';
      return;
    }
  }

  if (!specialty && !doctorId) {
    slots.innerHTML = '<p class="text-muted">Selecione médico ou especialidade desejada</p>';
    return;
  }

  const filteredSlots = getAvailableSlots(date);

  const selectedSlotId = SchedulingData.selectedSlotId;
  const isEncaixeSelected = selectedSlotId === 'encaixe';

  if (filteredSlots.length === 0) {
    if (showEncaixe && canShowEncaixe()) {
      buttons.push(renderEncaixeButton(isEncaixeSelected));
    }

    slots.innerHTML = '<p class="text-muted">Sem horários disponíveis este dia</p>';
    return;
  }

  let buttons = filteredSlots.map(slot => {
    const isActive = String(slot.id) === String(selectedSlotId)
      ? ' ranking-filters__pill--accent-active'
      : '';

    return `
      <button type="button"
        class="ranking-filters__pill${isActive}"
        data-slot-id="${slot.id}"
        data-slot-label="${slot.label}">
        ${slot.label}
      </button>
    `;
  });

  if (showEncaixe && canShowEncaixe()) {
    buttons.push(renderEncaixeButton(isEncaixeSelected));
  }

  slots.innerHTML = buttons.join('');
}

function renderScheduleClinic() {
  const clinicList = document.querySelector('#schedule-clinic-list');
  if (!clinicList) return;

  const query = SchedulingData.locationQuery?.toLowerCase().trim() || '';

  let clinics = SchedulingData.clinics;

  if (query) {
    clinics = clinics.filter(clinic =>
      clinic.name.toLowerCase().includes(query) ||
      clinic.detail.toLowerCase().includes(query)
    );
  }

  clinicList.innerHTML = clinics
    .map(clinic => {
      const active =
        clinic.id === SchedulingData.selectedClinicId
          ? ' clinic-list__item--active'
          : '';

      return `<li class="mb-0">
        <button type="button" class="clinic-list__item${active}"
          data-clinic-id="${clinic.id}"
          data-clinic-name="${clinic.name}"
          data-clinic-detail="${clinic.detail}"
          aria-pressed="${clinic.id === SchedulingData.selectedClinicId ? 'true' : 'false'}">
          <span class="clinic-list__icon" aria-hidden="true"><i class="bi bi-building"></i></span>
          <span class="clinic-list__body">
            <span class="clinic-list__title">${clinic.name}</span>
            <span class="clinic-list__detail">${clinic.detail}</span>
          </span>
        </button>
      </li>`;
    })
    .join('');
}

function initScheduleDateDefault() {
  const input = document.querySelector('#schedule-date');
  if (input) {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const dia = String(hoje.getDate()).padStart(2, '0');

    const hojeFormatado = `${ano}-${mes}-${dia}`;

    input.value = hojeFormatado; // já seta hoje
    SchedulingData.selectedDate = hojeFormatado;
    input.min = hojeFormatado;   // bloqueia datas anteriores
  }
}

function setExclusiveAccent(containerSelector, itemSelector, activeBtn) {
  document.querySelectorAll(`${containerSelector} ${itemSelector}`).forEach(btn => {
    btn.classList.remove('ranking-filters__pill--accent-active');
    btn.classList.remove('scheduling-filters__toggle-btn--accent-active');
  });
  if (activeBtn.classList.contains('ranking-filters__pill')) {
    activeBtn.classList.add('ranking-filters__pill--accent-active');
  } else {
    activeBtn.classList.add('scheduling-filters__toggle-btn--accent-active');
  }
}

function wireScheduleInteractions() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.specialties-filters__pill');
    if (!btn) return;

    const specialty = btn.dataset.specialty;
    const current = getSelectedSpecialty();

    const isSame = specialty === current;

    if (isSame) {
      setSpecialty(null); // desativa tudo
    } else {
      setSpecialty(specialty);
    }

    resetSlotSelection();
    resetDoctorSelection();
    updateSchedulingUI();
  });

  document.querySelector('#schedule-slots')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__pill');
    if (!btn) return;

    setExclusiveAccent('#schedule-slots', '.ranking-filters__pill', btn);

    const slotId = btn.dataset.slotId;
    const date = SchedulingData.selectedDate;

    const isSameSlot = String(SchedulingData.selectedSlotId) === String(slotId);

    // TOGGLE
    if (isSameSlot) {
      resetSlotSelection(); // remove highlight
      syncSummaryFromState();
      return;
    }

    SchedulingData.selectedSlotId = slotId;
    SchedulingData.selectedSlotLabel = btn.dataset.slotLabel;

    if (slotId === 'encaixe') {
      syncSummaryFromState();
      return;
    }

    const doctors = getDoctorsBySlot(slotId, date);

    const input = document.querySelector('#schedule-doctor-search');
    const dropdown = document.querySelector('#doctor-dropdown');

    if (doctors.length === 1) {
      applyDoctorSelection(doctors[0]);
      updateSchedulingUI(); //  CASO 1: só 1 médico → auto seleciona
    } else if (doctors.length > 1) {
      //  CASO 2: vários médicos → abre dropdown filtrado
      SchedulingData.selectedDoctorId = null;

      if (input) input.value = '';

      if (dropdown) {
        renderDoctorDropdown(doctors);
        dropdown.classList.remove('d-none');
      }
    }
  });

  document.querySelectorAll('#schedule-period button').forEach(btn => {
    btn.addEventListener('click', () => {

      const isActive = btn.classList.contains('scheduling-filters__toggle-btn--accent-active');

      //  limpa todos
      document.querySelectorAll('#schedule-period button')
        .forEach(b => b.classList.remove('scheduling-filters__toggle-btn--accent-active'));

      if (isActive) {
        //  desativar (toggle off)
        SchedulingData.selectedPeriod = null;
      } else {
        //  ativar novo
        btn.classList.add('scheduling-filters__toggle-btn--accent-active');
        SchedulingData.selectedPeriod = btn.dataset.period;
      }

      renderScheduleSlots(true);
      syncSummaryFromState();
    });
  });

  document.querySelector('#schedule-reminder')?.addEventListener('click', (e) => {
    const btn = e.target.closest('.scheduling-filters__toggle-btn');
    if (!btn) return;

    const value = btn.dataset.reminder;

    let selected = SchedulingData.selectedReminders || [];

    const isActive = btn.classList.contains('scheduling-filters__toggle-btn--accent-active');

    //  CASO: "none"
    if (value === 'none') {
      selected = ['none'];

      // desativa todos
      document.querySelectorAll('#schedule-reminder .scheduling-filters__toggle-btn')
        .forEach(b => b.classList.remove('scheduling-filters__toggle-btn--accent-active'));

      btn.classList.add('scheduling-filters__toggle-btn--accent-active');

    } else {
      // remove "none" se estiver ativo
      selected = selected.filter(r => r !== 'none');

      if (isActive) {
        // desativa
        selected = selected.filter(r => r !== value);
        btn.classList.remove('scheduling-filters__toggle-btn--accent-active');
      } else {
        // ativa
        selected.push(value);
        btn.classList.add('scheduling-filters__toggle-btn--accent-active');
      }

      // garante que botão "none" fique desativado
      const noneBtn = document.querySelector('[data-reminder="none"]');
      noneBtn?.classList.remove('scheduling-filters__toggle-btn--accent-active');
    }

    SchedulingData.selectedReminders = selected;

    // calcular pontos
    const points = calculateReminderPoints(selected);

    const badge = document.querySelector('.badge-pts');

    if (badge) {
      badge.style.display = 'inline-block';
      badge.textContent = `+${points} pts`;
    }
  });

  document.querySelector('#schedule-clinic-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.clinic-list__item');
    if (!btn) return;

    const newClinicId = btn.dataset.clinicId;

    //  pega clínica atual 
    const currentClinicId = SchedulingData.selectedClinicId;

    //  só reseta se mudou
    const hasChanged = currentClinicId !== newClinicId;

    // limpa UI
    document.querySelectorAll('.clinic-list__item').forEach(b => {
      b.classList.remove('clinic-list__item--active');
      b.setAttribute('aria-pressed', 'false');
    });

    if (hasChanged) {
      // ativa nova
      btn.classList.add('clinic-list__item--active');
      btn.setAttribute('aria-pressed', 'true');
      SchedulingData.selectedClinicId = newClinicId;
      resetDoctorSelection();
      updateMapByClinicId(newClinicId);
    } else {
      SchedulingData.selectedClinicId = null;
      mapIframe.src = SchedulingData.defaultLocationSrc;
    }

    updateSchedulingUI();
  });

  document.querySelector('#schedule-date')?.addEventListener('change', (e) => {
    SchedulingData.selectedDate = e.target.value;

    resetSlotSelection();
    updateSchedulingUI();
  });

  document.querySelector('#schedule-location-search')?.addEventListener('input', (e) => {
    SchedulingData.locationQuery = e.target.value.toLowerCase().trim();

    renderScheduleClinic();
  });

  const confirmBtn = document.querySelector('#btn-confirm-schedule');

  if (confirmBtn) {
    confirmBtn.addEventListener('click', async () => {
      const errors = validateScheduling();

      const hasError = Object.values(errors).some(Boolean);

      applyValidationStyles(errors);

      if (hasError) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      setButtonLoading(confirmBtn, true);
      await simulateLoading(900);
      setButtonLoading(confirmBtn, false);

      alert('Agendamento confirmado! Você receberá a confirmação por WhatsApp.');
    });
  }
}

function initDoctorSearchDropdown() {
  const input = document.querySelector('#schedule-doctor-search');
  const dropdown = document.querySelector('#doctor-dropdown');

  if (!input || !dropdown) return;

  //  Abrir lista ao focar/clicar
  function openDropdown() {
    const doctors = getDoctorsBySpecialty();
    renderDoctorDropdown(doctors);
  }

  input.addEventListener('focus', openDropdown);
  input.addEventListener('click', openDropdown);

  //  Filtrar enquanto digita
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();

    const doctors = getDoctorsBySpecialty();

    const filtered = doctors.filter(doc =>
      doc.name.toLowerCase().includes(value)
    );

    renderDoctorDropdown(filtered);
  });

  //  Selecionar médico
  dropdown.addEventListener('click', (e) => {
    const item = e.target.closest('.doctor-dropdown__item');
    if (!item) return;

    const doctorId = Number(item.dataset.id);
    const doctor = DoctorsData.find(d => d.id === doctorId);

    if (!doctor) return;

    dropdown.classList.add('d-none');

    applyDoctorSelection(doctor);
    updateSchedulingUI();
  });

  //  Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (
    !e.target.closest('.ranking-search') &&
    !e.target.closest('#schedule-slots') 
  ) {
    dropdown.classList.add('d-none');
  }
  });

  input.addEventListener('blur', () => { 
    const value = input.value.trim();

    const doctor = DoctorsData.find(d =>
      d.name.toLowerCase() === value.toLowerCase()
    );

    if (!doctor) {
      //  limpa tudo se não for válido
      input.value = '';
      SchedulingData.selectedDoctorId = null;
    } else {
      //  garante consistência
      input.value = doctor.name;
      SchedulingData.selectedDoctorId = doctor.id;
    }
    updateSchedulingUI();
  });

}

function getDoctorsBySpecialty() {
  const specialty = getSelectedSpecialty();
  const date = SchedulingData.selectedDate;

  if (!date) return [];

  const dayKey = getDayKeyFromDate(date);

  const selectedClinic = SchedulingData.clinics.find(
    c => c.id === SchedulingData.selectedClinicId
  )?.name;

  let doctors;
  const hasOnlyDateFilter = isOnlyDateFilterActive({
    date,
    specialty,
    period: SchedulingData.selectedPeriod,
    clinicId: SchedulingData.selectedClinicId
  });

  if (hasOnlyDateFilter) {
    //  mostra TODOS os médicos (ignora tudo)
    doctors = DoctorsData;
  } else {
    // comportamento normal
    doctors = DoctorsData.filter(doc => {
      const matchSpecialty = !specialty || doc.specialty === specialty;
      const matchClinic = !selectedClinic || doc.clinic === selectedClinic;
      const worksDay = doc.workDays.includes(dayKey);
      const worksPeriod =
        !SchedulingData.selectedPeriod || doc.periods.includes(SchedulingData.selectedPeriod);

      return matchSpecialty && matchClinic && worksDay && worksPeriod;
    });
  }

  // FILTRA POR DISPONIBILIDADE REAL
  const availableDoctors = hasOnlyDateFilter
    ? doctors // mostra TODOS
    : doctors.filter(doc => {
      const doctorSchedule = window.AppointmentsData.find(d => d.doctorId === doc.id);
      if (!doctorSchedule) return false;

      const bookedSlots = doctorSchedule.schedule[date] || [];

      const validSlots = SchedulingData.timeSlots.filter(slot => {
        const matchPeriod =
          !SchedulingData.selectedPeriod || slot.period === SchedulingData.selectedPeriod;

        return matchPeriod && doc.periods.includes(slot.period);
      });

      return validSlots.some(slot => !bookedSlots.includes(slot.id));
    });

  return availableDoctors.sort((a, b) =>
    a.name.localeCompare(b.name, 'pt-BR', { sensitivity: 'base' })
  );
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

function isSlotBooked(doctorId, date, slotId) {
  const doctor = window.AppointmentsData.find(d => d.doctorId === doctorId);
  if (!doctor) return false;

  const day = doctor.schedule[date];
  if (!day) return false;

  return day.includes(slotId);
}

function getAvailableSlots(date) {
  if (!date) return [];
  
  const dayKey = getDayKeyFromDate(date);

  const selectedDoctorId = SchedulingData.selectedDoctorId;

  let doctors;

  if (selectedDoctorId) {
    // CASO 1: médico selecionado
    doctors = DoctorsData.filter(doc => {
      const isSelected = doc.id === selectedDoctorId;
      const worksDay = doc.workDays.includes(dayKey);

      return isSelected && worksDay;
    });
  } else {
    // CASO 2: fluxo normal (sem médico específico)
    const selectedSpecialty = getSelectedSpecialty();
    const selectedClinic = SchedulingData.clinics.find(
      c => c.id === SchedulingData.selectedClinicId
    )?.name;

    doctors = DoctorsData.filter(doc => {
      const matchSpecialty = !selectedSpecialty || doc.specialty === selectedSpecialty;
      const matchClinic = !selectedClinic || doc.clinic === selectedClinic;
      const worksDay = doc.workDays.includes(dayKey);

      return matchSpecialty && matchClinic && worksDay;
    });
  }

  const availableSlots = new Set();

  for (const doctor of doctors) {
    const doctorSchedule = window.AppointmentsData.find(d => d.doctorId === doctor.id);
    if (!doctorSchedule) continue;

    const booked = doctorSchedule.schedule[date] || [];

    const validSlots = SchedulingData.timeSlots.filter(slot => {
      const matchPeriod =
        !SchedulingData.selectedPeriod || slot.period === SchedulingData.selectedPeriod;

      const worksPeriod = doctor.periods.includes(slot.period);

      return matchPeriod && worksPeriod;
    });

    for (const slot of validSlots) {
      if (!booked.includes(slot.id)) {
        availableSlots.add(slot.id);
      }
    }
  }

  return SchedulingData.timeSlots.filter(slot =>
      availableSlots.has(slot.id)
    );
}

function resetDoctorSelection() {
  SchedulingData.selectedDoctorId = null;

  const input = document.querySelector('#schedule-doctor-search');
  const dropdown = document.querySelector('#doctor-dropdown');

  if (input) input.value = '';
  if (dropdown) dropdown.classList.add('d-none');
}

function isOnlyDateFilterActive({ date, specialty, period, clinicId }) {
  return date && !specialty && !period && !clinicId;
}

function updateMapByClinicId(clinicId) {
  const mapIframe = document.querySelector('.schedule-map__iframe');

  if (!mapIframe) return;

  const clinic = SchedulingData.clinics.find(c => c.id == clinicId);

  if (clinic && clinic.mapUrl) {
    mapIframe.src = clinic.mapUrl;
  } else {
    mapIframe.src = SchedulingData.defaultLocationSrc;
  }
}

function getSelectedDoctor() {
  const doctorId = SchedulingData.selectedDoctorId;

  if (!doctorId) return 'Selecione';

  const doctor = DoctorsData.find(d => d.id == doctorId);

  return doctor?.name || 'Selecione';
}

function resetSlotSelection() {
  // limpa estado
  SchedulingData.selectedSlotId = null;
  SchedulingData.selectedSlotLabel = null;

  // limpa UI (remove highlight)
  document
    .querySelectorAll('#schedule-slots .ranking-filters__pill')
    .forEach(btn => btn.classList.remove('ranking-filters__pill--accent-active'));
}

function getDoctorsBySlot(slotId, date) {
  const slotIdNum = Number(slotId);
  if (!date || isNaN(slotIdNum)) return [];

  const slot = SchedulingData.timeSlots.find(s => s.id === slotIdNum);
  if (!slot) return [];

  const dayKey = getDayKeyFromDate(date);

  const baseDoctors = getDoctorsBySpecialty();

  return baseDoctors.filter(doctor => {
    const worksDay = doctor.workDays.includes(dayKey);
    const worksPeriod = doctor.periods.includes(slot.period);

    if (!worksDay || !worksPeriod) return false;

    return !isSlotBooked(doctor.id, date, slotIdNum);
  });
}

function applyDoctorSelection(doctor) {
  SchedulingData.selectedDoctorId = doctor.id;

  // input
  const input = document.querySelector('#schedule-doctor-search');
  if (input) input.value = doctor.name;

  // especialidade
  setSpecialty(doctor.specialty);

  // clínica
  const clinic = SchedulingData.clinics.find(c => c.name === doctor.clinic);
  if (clinic) {
    SchedulingData.selectedClinicId = clinic.id;
    updateMapByClinicId(clinic.id);
  }
}

function updateSchedulingUI() {
  renderScheduleSlots(true);
  renderScheduleClinic();
  renderActions(ActionsData.actions, {
    showExpiry: false, 
    category:'Engajamento', 
    limit: 4
  });
  syncSummaryFromState();
}

function setSpecialty(specialty) {
  const buttons = document.querySelectorAll('.specialties-filters__pill');

  buttons.forEach(btn =>
    btn.classList.remove('specialties-filters__pill--active')
  );

  if (!specialty) return;

  const target = [...buttons].find(
    btn => btn.dataset.specialty === specialty
  );

  if (target) target.classList.add('specialties-filters__pill--active');
}

function validateScheduling() {
  const errors = {
    specialty: !getSelectedSpecialty(),
    doctor: !SchedulingData.selectedDoctorId,
    date: !SchedulingData.selectedDate,
    slot: !SchedulingData.selectedSlotId,
    clinic: !SchedulingData.selectedClinicId
  };

  return errors;
}

function applyValidationStyles(errors) {
  // limpa tudo antes
  document.querySelectorAll('.is-invalid').forEach(el =>
    el.classList.remove('is-invalid')
  );

  if (errors.specialty) {
    document.querySelector('#specialties-filters')?.classList.add('is-invalid');
  }

  if (errors.doctor) {
    document.querySelector('#schedule-doctor-search')?.classList.add('is-invalid');
  }

  if (errors.date) {
    document.querySelector('#schedule-date')?.classList.add('is-invalid');
  }

  if (errors.slot) {
    document.querySelector('#schedule-slots')?.classList.add('is-invalid');
  }

  if (errors.clinic) {
    document.querySelector('#schedule-clinic-list')?.classList.add('is-invalid');
  }
}

function applyLiveValidation() {
  const specialty = getSelectedSpecialty();
  const doctor = SchedulingData.selectedDoctorId;
  const date = SchedulingData.selectedDate;
  const slot = SchedulingData.selectedSlotId;
  const clinic = SchedulingData.selectedClinicId;

  toggleInvalid('#specialties-filters', !specialty);
  toggleInvalid('#schedule-doctor-search', !doctor);
  toggleInvalid('#schedule-date', !date);
  toggleInvalid('#schedule-slots', !slot);
  toggleInvalid('#schedule-clinic-list', !clinic);
}

function toggleInvalid(selector, isInvalid) {
  const el = document.querySelector(selector);
  if (!el) return;

  if (!isInvalid) {
    el.classList.remove('is-invalid');
  }
}

function calculateReminderPoints(reminders) {
  if (reminders.includes('none')) return 0;

  if (reminders.includes('24h') && reminders.includes('2h')) {
    return 120;
  }

  if (reminders.includes('24h')) return 80;
  if (reminders.includes('2h')) return 40;

  return 0;
}
