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
  syncSummaryFromState();
  renderScheduleBenefits();
  renderScheduleClinic();
  renderScheduleSlots();
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

function getSelectedSlotLabel() {
  const active = document.querySelector('#schedule-slots .ranking-filters__pill--accent-active');
  return active ? active.dataset.slotLabel || active.textContent.trim() : '—';
}

function syncSummaryFromState() {
  const specialty = getSelectedSpecialty() || 'Selecione';
  const doctor = getSelectedDoctor();
  const dateInput = document.querySelector('#schedule-date');
  const iso = SchedulingData.selectedDate || '';
  const slotLabel = getSelectedSlotLabel();

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

  if (clinicEl && clinicId) {
    const clinic = SchedulingData.clinics.find(c => c.id == clinicId);

    clinicEl.textContent = clinic?.name || '—';
  }
}

function renderScheduleSlots() {
  const slots = document.querySelector('#schedule-slots');
  if (!slots) return;

  const specialty = getSelectedSpecialty();
  const doctorId = SchedulingData.selectedDoctorId;

  if (!specialty && !doctorId) {
    slots.innerHTML = '<p class="text-muted">Selecione médico ou especialidade desejada</p>';
    return;
  }

  const date = document.querySelector('#schedule-date')?.value;

  const filteredSlots = getAvailableSlots(date);

  if (filteredSlots.length === 0) {
    slots.innerHTML = '<p class="text-muted">Sem horários disponíveis</p>';
    return;
  }

  slots.innerHTML = filteredSlots.map(slot => {
    return `<button type="button"
      class="ranking-filters__pill"
      data-slot-id="${slot.id}"
      data-slot-label="${slot.label}">
      ${slot.label}
    </button>`;
  }).join('');
}

function renderScheduleClinic() {
  const clinicList = document.querySelector('#schedule-clinic-list');
  if (clinicList) {
    clinicList.innerHTML = SchedulingData.clinics
      .map(clinic => {
        const active =
          clinic.id === SchedulingData.selectedClinicId ? ' clinic-list__item--active' : '';
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
}

function renderScheduleBenefits() {
  const benefits = document.querySelector('#schedule-benefits-list');
  if (benefits) {
    benefits.innerHTML = SchedulingData.benefits
      .map(
        b => `<li class="schedule-benefits-list__row">
        <span class="schedule-benefits-list__label">${b.label}</span>
        <span class="badge-pts badge-pts--yellow">+${b.pts} pts</span>
      </li>`
      )
      .join('');
  }
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
    btn.classList.remove('ranking-filters__toggle-btn--accent-active');
  });
  if (activeBtn.classList.contains('ranking-filters__pill')) {
    activeBtn.classList.add('ranking-filters__pill--accent-active');
  } else {
    activeBtn.classList.add('ranking-filters__toggle-btn--accent-active');
  }
}

function wireScheduleInteractions() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('specialties-filters__pill')) {
      const clicked = e.target;
      const isActive = clicked.classList.contains('specialties-filters__pill--active');

      // limpa todos
      document.querySelectorAll('.specialties-filters__pill').forEach(p =>
        p.classList.remove('specialties-filters__pill--active')
      );

      // se NÃO estava ativo → ativa
      if (!isActive) {
        clicked.classList.add('specialties-filters__pill--active');
      }

      // reset do médico ao trocar / limpar especialidade
      resetDoctorSelection();
      syncSummaryFromState();
      renderScheduleSlots();
    }
  });

  document.querySelector('#schedule-slots')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__pill');
    if (!btn) return;
    setExclusiveAccent('#schedule-slots', '.ranking-filters__pill', btn);
    SchedulingData.selectedSlotLabel = btn.dataset.slotLabel;
    SchedulingData.selectedSlotId = btn.dataset.slotId;

    syncSummaryFromState(); 
  });

  document.querySelectorAll('#schedule-period button').forEach(btn => {
    btn.addEventListener('click', () => {

      const isActive = btn.classList.contains('ranking-filters__toggle-btn--accent-active');

      //  limpa todos
      document.querySelectorAll('#schedule-period button')
        .forEach(b => b.classList.remove('ranking-filters__toggle-btn--accent-active'));

      if (isActive) {
        //  desativar (toggle off)
        SchedulingData.selectedPeriod = null;
      } else {
        //  ativar novo
        btn.classList.add('ranking-filters__toggle-btn--accent-active');
        SchedulingData.selectedPeriod = btn.dataset.period;
      }

      renderScheduleSlots();
    });
  });

  document.querySelector('#schedule-reminder')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__toggle-btn');
    if (!btn) return;
    setExclusiveAccent('#schedule-reminder', '.ranking-filters__toggle-btn', btn);
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
      renderScheduleSlots();
      updateMapByClinicId(newClinicId);
    } else {
      SchedulingData.selectedClinicId = null;
      mapIframe.src = SchedulingData.defaultLocationSrc;
    }

  });

  document.querySelector('#schedule-date')?.addEventListener('change', (e) => {
    const doctorId = SchedulingData.selectedDoctorId;
    if (!doctorId) return;

    SchedulingData.selectedDate = e.target.value;

    resetSlotSelection();
    renderScheduleSlots();
    syncSummaryFromState();
  });

  const confirmBtn = document.querySelector('#btn-confirm-schedule');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', async () => {
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

    // preenche input
    input.value = doctor.name;

    // fecha dropdown
    dropdown.classList.add('d-none');
    
    // salva estado
    SchedulingData.selectedDoctorId = doctor.id;
    
    const specialty = doctor.specialty;

    document.querySelectorAll('.specialties-filters__pill').forEach(btn => {
      btn.classList.remove('specialties-filters__pill--active');
    });

    const targetBtn = [...document.querySelectorAll('.specialties-filters__pill')]
      .find(btn => btn.textContent.trim() === specialty);

    if (targetBtn) {
      targetBtn.classList.add('specialties-filters__pill--active');
    }


    const clinic = SchedulingData.clinics.find(c => c.name === doctor.clinic);
    if (clinic) {
      SchedulingData.selectedClinicId = clinic.id;
      updateMapByClinicId(clinic.id);
    }
    syncSummaryFromState();
    renderScheduleSlots();
    renderScheduleClinic();
  });

  //  Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.ranking-search')) {
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
      renderScheduleSlots();
    } else {
      //  garante consistência
      input.value = doctor.name;
      SchedulingData.selectedDoctorId = doctor.id;
    }
    syncSummaryFromState();
  });

}



function getDoctorsBySpecialty() {
  const specialty = getSelectedSpecialty();
  const date = document.querySelector('#schedule-date')?.value;

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

  function getWeekdayKey(date) {
    const map = ['dom','seg','ter','qua','qui','sex','sab'];
    return map[date.getDay()];
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