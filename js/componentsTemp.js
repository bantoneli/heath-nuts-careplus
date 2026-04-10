function renderSpecialtiesFilters(data) {
    const container = document.querySelector('#specialties-filters');
    if (!container) return;

    const pillsHtml = data.specialties.map(s => {
        const activeClass = s === data.activeSpecialty ? ' specialties-filters__pill--active' : '';
        return `<button class="specialties-filters__pill${activeClass}" data-specialty="${s}">${s}</button>`;
    }).join('');



    container.innerHTML = `
        <div class="specialties-filters__pills">${pillsHtml}</div>
        `;
}

function renderActions(data, showExpiry = true) {
    const container = document.querySelector('#actions-list');
    if (!container) return;

    const itemsHtml = data.map(item => `
        <div class="actions__item">
            <span class="icon-circle icon-circle--primary">
                <i class="bi ${item.icon}"></i>
            </span>

            <div class="actions__info">
                <span class="actions__title">${item.title}</span>
                <span class="actions__subtitle">${item.subtitle}</span>
            </div>

            <div class="actions__meta">
                <span class="actions__nuts">+${item.nuts} nuts</span>
                <span class="actions__pts">+${item.pts} pts</span>

                ${showExpiry ? `
                    <span class="actions__expiry">
                        Expira em<br>${item.expiry}
                    </span>
                ` : ''}
            </div>
        </div>
    `).join('');

    const endHtml = `
        <div class="notification-list__end">
            <i class="bi bi-envelope-open"></i>
            <span>Sem mais registros</span>
        </div>`;

    container.innerHTML = itemsHtml + endHtml;
}