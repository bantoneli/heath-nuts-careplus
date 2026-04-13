/**
 * Página de agendamento: header/footer, listas a partir de SchedulingData e sincronização do resumo.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'agendamento', isSubpage: true });
  renderFooter();

  if (typeof SchedulingData === 'undefined') {
    return;
  }

  renderSchedulingLists();
  initScheduleDateDefault();
  syncSummaryFromState();
  wireScheduleInteractions();
});

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

function getSelectedSpecialty() {
  const active = document.querySelector('#schedule-specialty-pills .ranking-filters__pill--accent-active');
  return active ? active.dataset.specialty : SchedulingData.defaultSpecialty;
}

function syncSummaryFromState() {
  const specialty = getSelectedSpecialty();
  const doctor = SchedulingData.doctorBySpecialty[specialty] || '—';
  const dateInput = document.querySelector('#schedule-date');
  const iso = dateInput ? dateInput.value : '';
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

  const activeClinic = document.querySelector('.clinic-list__item--active');
  if (clinicEl && activeClinic) {
    clinicEl.textContent = activeClinic.dataset.clinicName || '—';
  }
}

function renderSchedulingLists() {
  const pills = document.querySelector('#schedule-specialty-pills');
  if (pills) {
    pills.innerHTML = SchedulingData.specialties.map(spec => {
      const active =
        spec === SchedulingData.defaultSpecialty ? ' ranking-filters__pill--accent-active' : '';
      return `<button type="button" class="ranking-filters__pill${active}" data-specialty="${spec}">${spec}</button>`;
    }).join('');
  }

  const slots = document.querySelector('#schedule-slots');
  if (slots) {
    slots.innerHTML = SchedulingData.timeSlots.map(slot => {
      const active =
        slot.id === SchedulingData.defaultSlotId ? ' ranking-filters__pill--accent-active' : '';
      return `<button type="button" class="ranking-filters__pill${active}" data-slot-id="${slot.id}" data-slot-label="${slot.label}">${slot.label}</button>`;
    }).join('');
  }

  const clinicList = document.querySelector('#schedule-clinic-list');
  if (clinicList) {
    clinicList.innerHTML = SchedulingData.clinics
      .map(clinic => {
        const active =
          clinic.id === SchedulingData.defaultClinicId ? ' clinic-list__item--active' : '';
        return `<li class="mb-0">
          <button type="button" class="clinic-list__item${active}"
            data-clinic-id="${clinic.id}"
            data-clinic-name="${clinic.name}"
            data-clinic-detail="${clinic.detail}"
            aria-pressed="${clinic.id === SchedulingData.defaultClinicId ? 'true' : 'false'}">
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
  if (input && SchedulingData.defaultDateIso) {
    input.value = SchedulingData.defaultDateIso;
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
  document.querySelector('#schedule-specialty-pills')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__pill');
    if (!btn) return;
    setExclusiveAccent('#schedule-specialty-pills', '.ranking-filters__pill', btn);
    syncSummaryFromState();
  });

  document.querySelector('#schedule-slots')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__pill');
    if (!btn) return;
    setExclusiveAccent('#schedule-slots', '.ranking-filters__pill', btn);
    syncSummaryFromState();
  });

  document.querySelector('#schedule-period')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__toggle-btn');
    if (!btn) return;
    setExclusiveAccent('#schedule-period', '.ranking-filters__toggle-btn', btn);
  });

  document.querySelector('#schedule-reminder')?.addEventListener('click', e => {
    const btn = e.target.closest('.ranking-filters__toggle-btn');
    if (!btn) return;
    setExclusiveAccent('#schedule-reminder', '.ranking-filters__toggle-btn', btn);
  });

  document.querySelector('#schedule-clinic-list')?.addEventListener('click', e => {
    const btn = e.target.closest('.clinic-list__item');
    if (!btn) return;
    document.querySelectorAll('.clinic-list__item').forEach(b => {
      b.classList.remove('clinic-list__item--active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('clinic-list__item--active');
    btn.setAttribute('aria-pressed', 'true');
    syncSummaryFromState();
  });

  document.querySelector('#schedule-date')?.addEventListener('change', () => {
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
