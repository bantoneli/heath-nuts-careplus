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
