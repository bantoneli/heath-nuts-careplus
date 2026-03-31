/**
 * Dados mock para desenvolvimento (substituir por API quando existir).
 */

const DashboardData = {
  user: { name: 'João' },
  stats: {
    nuts: '3.456',
    consultas: 2,
    rankingCombinado: 234,
    rankingEmpresa: 3
  },
  priorityPts: 150,
  mission: {
    label: 'Missão do dia',
    description: 'Auferir pressão arterial',
    pts: 10
  },
  streak: {
    days: 5,
    pts: 10
  },
  ranking: [
    { specialty: 'Nutrição', pts: 1250, rank: 120, img: 'assets/img/nutricao.png', colorClass: 'text-success' },
    { specialty: 'Psicologia', pts: 1320, rank: 130, img: 'assets/img/psicologia.png', colorClass: 'text-info' },
    { specialty: 'Endocrinologia', pts: 1450, rank: 167, img: 'assets/img/endocrinologia.png', colorClass: 'text-danger' }
  ],
  appointments: [
    { specialty: 'Endocrinologista', date: 'Seg, 12 Nov', time: '09:00', doctor: 'Dra. Cora Coralina' },
    { specialty: 'Nutricionista', date: 'Qui, 22 Nov', time: '14:30', doctor: 'Nutricionista José Pereira' },
    { specialty: 'Dermatologista', date: 'Sex, 06 Dez', time: '11:15', doctor: 'Dr. João Pelin' }
  ],
  badges: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia']
};

const NotificationsData = {
  groups: [
    {
      label: 'Hoje',
      items: [
        {
          icon: 'bi-calendar-check-fill',
          iconColor: 'primary',
          title: 'Lembrete de consulta amanhã às 09:30',
          subtitle: 'Clínica Vida+ Centro • Check-in antecipado garante +30 pts',
          pts: 30,
          action: { label: 'Ver rota', icon: 'bi-signpost-split-fill' },
          unread: true
        },
        {
          icon: 'bi-graph-up-arrow',
          iconColor: 'accent',
          title: 'Você subiu para 12º no ranking da empresa',
          subtitle: 'Parabéns! Continue registrando hábitos diários.',
          badge: 'Novo',
          unread: true
        }
      ]
    },
    {
      label: 'Ontem',
      items: [
        {
          icon: 'bi-gift-fill',
          iconColor: 'primary',
          title: 'Cupom de benefício disponível: 20% em exames',
          subtitle: 'Resgate válido até 30/10 • Parceiro: Labsul Unidade 2',
          pts: 20,
          action: { label: 'Resgatar', icon: 'bi-qr-code' },
          unread: false
        },
        {
          icon: 'bi-trophy-fill',
          iconColor: 'accent',
          title: 'Meta semanal alcançada',
          subtitle: 'Você completou 5/5 hábitos de bem-estar • +50 pts creditados',
          pts: 50,
          unread: false
        }
      ]
    },
    {
      label: 'Esta semana',
      items: [
        {
          icon: 'bi-bell-fill',
          iconColor: 'primary',
          title: 'Notificações inteligentes ativadas',
          subtitle: 'Receba alertas de agendamentos, pontos e benefícios relevantes',
          action: { label: 'Configurar', icon: null },
          unread: false
        }
      ]
    }
  ]
};
