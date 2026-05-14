/**
 * notificacoes.js
 * Inicialização da página de Notificações.
 */

document.addEventListener('DOMContentLoaded', () => {
  renderHeader({ activePage: 'notifications', isSubpage: true });
  renderFooter();
  renderNotificationsList(NotificationsData);
  initNotificacoesListeners();
});

function initNotificacoesListeners() {
  const btnMarcar = document.querySelector('#btn-marcar-lidas');
  const btnLembretes = document.querySelector('#btn-ativar-lembretes');
  const btnConfigurar = document.querySelector('#btn-configurar-notif');

  if (btnMarcar) btnMarcar.addEventListener('click', handleMarcarComoLidas);
  if (btnLembretes) btnLembretes.addEventListener('click', () => {
    alert('Lembretes ativados com sucesso!');
  });
  if (btnConfigurar) btnConfigurar.addEventListener('click', () => {
    alert('Configurações de notificação serão implementadas em breve!');
  });
}

function renderNotificationsList(data) {
  const container = document.querySelector('#notifications-list');
  if (!container) return;

  const groupsHtml = data.groups.map(group => {
    const itemsHtml = group.items.map(item => {
      const iconColorClass = item.iconColor === 'accent'
        ? 'icon-circle--accent'
        : 'icon-circle--primary';

      let actionsHtml = '';
      if (item.pts) {
        actionsHtml += `<span class="badge-pts badge-pts--yellow">+${item.pts} pts</span>`;
      }
      if (item.badge) {
        actionsHtml += `<span class="badge-pts">${item.badge}</span>`;
      }
      if (item.action) {
        actionsHtml += `
          <button class="btn btn-primary-custom btn-sm notification-item__cta">
            ${item.action.icon ? `<i class="bi ${item.action.icon}"></i>` : ''}${item.action.label}
          </button>`;
      }

      return `
        <div class="notification-item ${item.unread ? 'notification-item--unread' : ''}">
          <div class="icon-circle ${iconColorClass}">
            <i class="bi ${item.icon}"></i>
          </div>
          <div class="notification-item__body">
            <span class="notification-item__title">${item.title}</span>
            <span class="notification-item__subtitle">${item.subtitle}</span>
          </div>
          <div class="notification-item__actions">
            ${actionsHtml}
          </div>
        </div>`;
    }).join('');

    return `
      <div class="notification-group">
        <h6 class="notification-group__title">${group.label}</h6>
        ${itemsHtml}
      </div>`;
  }).join('');

  const endHtml = `
    <div class="notification-list__end">
      <i class="bi bi-envelope-open"></i>
      <span>Sem mais notificações</span>
    </div>`;

  container.innerHTML = groupsHtml + endHtml;
}

function handleMarcarComoLidas() {
  const unreadItems = document.querySelectorAll('.notification-item--unread');
  unreadItems.forEach(item => item.classList.remove('notification-item--unread'));
}
