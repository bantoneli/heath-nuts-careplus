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

const RankingsData = {
  specialties: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia'],
  activeSpecialty: 'Endocrinologia',
  rankingTypes: ['Geral', 'Equipe'],
  scopeTypes: ['Associados', 'Empresas'],
  activeRankingType: 'Geral',
  activeScopeType: 'Associados',
  lastUpdated: 'Atualizado hoje, 08:00',

  userPerformance: {
    position: 167,
    points: 1250,
    pointsToNext: 150,
    monthlyGain: 120
  },

  topRanking: [
    { name: 'Ana Primeira', pts: 1950, avatarIcon: 'bi-person-fill', tier: 'gold' },
    { name: 'João Segundo', pts: 1820, avatarIcon: 'bi-person-fill', tier: 'silver' },
    { name: 'Maria Tercia', pts: 1520, avatarIcon: 'bi-person-fill', tier: 'bronze' }
  ],

  generalRanking: [
    { position: 165, name: 'Maria Silva', pts: 1450, monthlyGain: 60, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 166, name: 'Carlos Souza', pts: 1320, monthlyGain: 40, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 167, name: 'Você', pts: 1250, monthlyGain: 120, avatarIcon: 'bi-person-fill', isCurrentUser: true },
    { position: 168, name: 'Jane Doe', pts: 1240, monthlyGain: 30, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 169, name: 'Ana Campos', pts: 1210, monthlyGain: 20, avatarIcon: 'bi-person-fill', isCurrentUser: false }
  ],

  pointsHistory: [
    { icon: 'bi-heart-pulse', title: 'Avaliação de Saúde', subtitle: 'Avaliação Hormonal completa', nuts: 100, pts: 100, expiry: '05/set/2026' },
    { icon: 'bi-heart-pulse', title: 'Bioimpedância', subtitle: 'Realizar exame de bioimpedância', nuts: 50, pts: 50, expiry: '05/set/2026' },
    { icon: 'bi-heart-pulse', title: 'Calorimetria', subtitle: 'Realizar exame de calorimetria', nuts: 50, pts: 50, expiry: '05/set/2026' }
  ]
};
