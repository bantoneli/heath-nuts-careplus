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

const BeneficiosData = {
  wallet: {
    balanceFormatted: '3.456',
    weeklyGain: 120
  },
  earnMore: [
    {
      title: 'Retorno preventivo',
      nuts: 120,
      linkLabel: 'Ver calendário',
      linkHref: 'agendamento.html'
    },
    {
      title: 'Missão de passos diários',
      nuts: 20,
      linkLabel: 'Ver regulamento',
      linkHref: 'regulamento.html'
    }
  ],
  rewardCategories: ['Todos', 'Saúde', 'Bem-estar', 'Produtos'],
  rewards: [
    {
      id: 'r1',
      title: 'Voucher Alimentação',
      description: 'R$30 em parceiros',
      costNuts: 250,
      category: 'Bem-estar',
      cta: 'resgatar',
      meta: 'Entrega imediata',
      redeemed: false
    },
    {
      id: 'r2',
      title: 'Sessão de massagem',
      description: '30 min em rede credenciada',
      costNuts: 400,
      category: 'Bem-estar',
      cta: 'detalhes',
      meta: 'Limitado',
      redeemed: true
    },
    {
      id: 'r3',
      title: 'Check-up laboratorial',
      description: 'Painel básico de exames',
      costNuts: 600,
      category: 'Saúde',
      cta: 'resgatar',
      meta: '3 restantes',
      redeemed: false
    },
    {
      id: 'r4',
      title: 'Kit bem-estar',
      description: 'Produtos selecionados',
      costNuts: 180,
      category: 'Produtos',
      cta: 'detalhes',
      meta: 'Entrega imediata',
      redeemed: true
    },
    {
      id: 'r5',
      title: 'Consulta nutricional',
      description: '1 sessão online',
      costNuts: 320,
      category: 'Saúde',
      cta: 'resgatar',
      redeemed: false
    },
    {
      id: 'r6',
      title: 'Cashback parceiro',
      description: '10% em farmácias',
      costNuts: 150,
      category: 'Produtos',
      cta: 'detalhes',
      redeemed: true
    }
  ],
  redemptionHistory: [
    { title: 'Sessão de massagem', redeemedAtLabel: 'Resgatado em 3 Set 2025', nutsDelta: -400 },
    { title: 'Kit bem-estar', redeemedAtLabel: 'Resgatado em 28 Ago 2025', nutsDelta: -180 },
    { title: 'Cashback parceiro', redeemedAtLabel: 'Resgatado em 2 Ago 2025', nutsDelta: -150 }
  ]
};

const RankingsData = {
  lastUpdated: 'Atualizado hoje, 08:00',

  pointsHistory: [
    { id: 1, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Avaliação de Saúde', subtitle: 'Avaliação hormonal completa', nuts: 100, pts: 100, expiry: '05/set/2026' },
    { id: 2, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Bioimpedância', subtitle: 'Realizar exame de bioimpedância', nuts: 50, pts: 50, expiry: '05/set/2026' },
    { id: 3, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Calorimetria', subtitle: 'Realizar exame de calorimetria', nuts: 50, pts: 50, expiry: '05/set/2026' },
    { id: 4, specialty: 'Nutrição', category: 'Exames', icon: 'bi-file-earmark-medical', title: 'Exames realizados', subtitle: 'Realizar exames e enviar resultados', nuts: 500, pts: 500, expiry: '05/set/2026' },
    { id: 5, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-heart-pulse', title: 'Monitoramento cardíaco', subtitle: 'Registrar batimentos diariamente', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 6, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-heart', title: 'Pressão arterial', subtitle: 'Registrar pressão diariamente', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 7, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-activity', title: 'Passos diários', subtitle: 'Atingir 10.000 passos', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 8, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-lightning-charge', title: 'Treino HIIT', subtitle: 'Realizar treino HIIT', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 9, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-speedometer', title: 'Pesagem diária', subtitle: 'Registrar peso diariamente', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 18, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-droplet', title: 'Rotina de skincare', subtitle: 'Realizar rotina diária de cuidados com a pele', nuts: 15, pts: 15, expiry: '05/set/2026' },
    { id: 19, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-sun', title: 'Uso de protetor solar', subtitle: 'Aplicar protetor solar no dia', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 11, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-chat-dots', title: 'Acompanhamento contínuo', subtitle: '4 consultas seguidas sem cancelar', nuts: 1000, pts: 1000, expiry: '05/set/2026' },
    { id: 17, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-journal-text', title: 'Registro emocional', subtitle: 'Preencher diário emocional', nuts: 15, pts: 15, expiry: '05/set/2026' },
    { id: 12, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-moon-stars', title: 'Higiene do sono', subtitle: 'Seguir rotina de higiene do sono', nuts: 20, pts: 20, expiry: '05/set/2026' },
    { id: 22, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up', title: 'Colesterol controlado', subtitle: 'Manter níveis ideais', nuts: 100, pts: 100, expiry: '05/set/2026' },
    { id: 13, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up-arrow', title: 'Melhora do colesterol', subtitle: 'Melhorar níveis entre exames', nuts: 100, pts: 100, expiry: '05/set/2026' },
    { id: 14, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-cup-straw', title: 'Hidratação adequada', subtitle: 'Registrar consumo ideal de água no dia', nuts: 10, pts: 10, expiry: '05/set/2026' },
    { id: 15, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-egg-fried', title: 'Plano alimentar seguido', subtitle: 'Seguir plano alimentar prescrito no dia', nuts: 20, pts: 20, expiry: '05/set/2026' },
    { id: 16, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-capsule', title: 'Adesão medicamentosa', subtitle: 'Tomar medicação conforme prescrição', nuts: 20, pts: 20, expiry: '05/set/2026' },
    { id: 20, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-moon', title: 'Sono adequado', subtitle: 'Dormir pelo menos 7h', nuts: 20, pts: 20, expiry: '05/set/2026' },
    { id: 21, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-moon', title: 'Qualidade do sono', subtitle: 'Registrar sono adequado', nuts: 20, pts: 20 }
  ]
};

const SchedulingData = {
  locationQuery: '',

  timeSlots: [
    { id: 1, label: '07:00', period: 'manha' },
    { id: 2, label: '07:30', period: 'manha' },
    { id: 3, label: '08:00', period: 'manha' },
    { id: 4, label: '08:30', period: 'manha' },
    { id: 5, label: '09:00', period: 'manha' },
    { id: 6, label: '09:30', period: 'manha' },
    { id: 7, label: '10:00', period: 'manha' },
    { id: 8, label: '10:30', period: 'manha' },
    { id: 9, label: '11:00', period: 'manha' },
    { id: 10, label: '11:30', period: 'manha' },
    { id: 11, label: '12:00', period: 'tarde' },
    { id: 12, label: '12:30', period: 'tarde' },
    { id: 13, label: '13:00', period: 'tarde' },
    { id: 14, label: '13:30', period: 'tarde' },
    { id: 15, label: '14:00', period: 'tarde' },
    { id: 16, label: '14:30', period: 'tarde' },
    { id: 17, label: '15:00', period: 'tarde' },
    { id: 18, label: '15:30', period: 'tarde' },
    { id: 19, label: '16:00', period: 'tarde' },
    { id: 20, label: '16:30', period: 'tarde' },
    { id: 21, label: '17:00', period: 'tarde' },
    { id: 22, label: '17:30', period: 'tarde' },
    { id: 23, label: '18:00', period: 'noite' },
    { id: 24, label: '18:30', period: 'noite' },
    { id: 25, label: '19:00', period: 'noite' },
    { id: 26, label: '19:30', period: 'noite' },
    { id: 27, label: '20:00', period: 'noite' },
    { id: 28, label: '20:30', period: 'noite' },
    { id: 29, label: '21:00', period: 'noite' },
    { id: 30, label: '21:30', period: 'noite' },
    { id: 31, label: '22:00', period: 'noite' },
    { id: 32, label: '22:30', period: 'noite' },
    { id: 33, label: '23:00', period: 'noite' },
    { id: 34, label: '23:30', period: 'noite' },
  ],

  defaultSlotId: null,

  clinics: [
    {
      id: 'campo-belo',
      name: 'Care Plus Clinic - Campo Belo',
      detail: '500 m • Av. Ver. José Diniz, 3843',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.670010071031!2d-46.67928595623112!3d-23.616164824169186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51ab8b43e18d%3A0x2aaf5ed566847b88!2sCare%20Plus%20Clinic%20-%20Campo%20Belo!5e0!3m2!1spt-BR!2sbr!4v1777065020355!5m2!1spt-BR!2sbr'
    },
    {
      id: 'brooklin',
      name: 'Care Plus Clinic - Brooklin',
      detail: '3,5 km • Av. das Nações Unidas, 12.901',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.8472069233103!2d-46.699995789409364!3d-23.60981207867806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573e934b44f1%3A0xc552bd962d85b095!2sCare%20Plus%20Clinic%20-%20Brooklin!5e0!3m2!1spt-BR!2sbr!4v1777063989555!5m2!1spt-BR!2sbr'
    },
    {
      id: 'morumbi',
      name: 'Care Plus Clinic - Morumbi',
      detail: '4,4 km • Av. Roque Petroni Júnior, 1089',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4986292719723!2d-46.70371375622964!3d-23.622307524154195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51fb46bb19f7%3A0x5a1afd88cb62d7aa!2sCare%20Plus%20Clinic%20-%20Morumbi!5e0!3m2!1spt-BR!2sbr!4v1777064072306!5m2!1spt-BR!2sbr'
    }
  ],
  defaultClinicId: null,
  defaultLocationSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1213657543467!2d-46.65725205624265!3d-23.564084224296913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7dbf9ff57%3A0x4ca8eb5c4f7ecca9!2sFIAP%20-%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1777063893471!5m2!1spt-BR!2sbr',

  benefits: [
    { label: 'Chegue no horário', pts: 20 },
    { label: 'Adicione no Google Calendar', pts: 30 },
    { label: 'Confirme a presença', pts: 15 },
    { label: 'Responda este questionário', pts: 25 }
  ],

  selectedReminders: ['24h', '2h']
};

const SpecialtiesData = {
  specialties: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia'],
  defaultSpecialty: 'Endocrinologia',
}

const ActionsData = {
  actions: [
    { id: 1, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Avaliação de Saúde', subtitle: 'Avaliação hormonal completa', nuts: 100, pts: 100 },
    { id: 2, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Bioimpedância', subtitle: 'Realizar exame de bioimpedância', nuts: 50, pts: 50 },
    { id: 3, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-heart-pulse', title: 'Calorimetria', subtitle: 'Realizar exame de calorimetria', nuts: 50, pts: 50 },

    // Consulta
    { id: 4, specialty: 'Endocrinologia', category: 'Consulta', icon: 'bi-calendar-check', title: 'Consulta realizada', subtitle: 'Comparecer a uma consulta marcada', nuts: 1000, pts: 1000 },
    { id: 5, specialty: 'Dermatologia', category: 'Consulta', icon: 'bi-calendar-check', title: 'Consulta realizada', subtitle: 'Comparecer a uma consulta marcada', nuts: 1000, pts: 1000 },
    { id: 6, specialty: 'Nutrição', category: 'Consulta', icon: 'bi-calendar-check', title: 'Consulta realizada', subtitle: 'Comparecer a uma consulta marcada', nuts: 1000, pts: 1000 },
    { id: 7, specialty: 'Odontologia', category: 'Consulta', icon: 'bi-calendar-check', title: 'Consulta realizada', subtitle: 'Comparecer a uma consulta marcada', nuts: 1000, pts: 1000 },
    { id: 8, specialty: 'Psicologia', category: 'Consulta', icon: 'bi-calendar-check', title: 'Consulta realizada', subtitle: 'Comparecer a uma consulta marcada', nuts: 1000, pts: 1000 },

    // Cancelamentos
    { id: 9, specialty: 'Endocrinologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3-5 dias)', subtitle: 'Desmarcar consulta com 3 a 5 dias de antecedência', nuts: 200, pts: 200 },
    { id: 10, specialty: 'Endocrinologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (1-2 dias)', subtitle: 'Desmarcar consulta com 1 a 2 dias de antecedência', nuts: 100, pts: 100 },
    { id: 11, specialty: 'Endocrinologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3h)', subtitle: 'Desmarcar consulta com pelo menos 3 horas de antecedência', nuts: 50, pts: 50 },

    { id: 12, specialty: 'Dermatologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3-5 dias)', subtitle: 'Desmarcar consulta com 3 a 5 dias de antecedência', nuts: 200, pts: 200 },
    { id: 13, specialty: 'Dermatologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (1-2 dias)', subtitle: 'Desmarcar consulta com 1 a 2 dias de antecedência', nuts: 100, pts: 100 },
    { id: 14, specialty: 'Dermatologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3h)', subtitle: 'Desmarcar consulta com pelo menos 3 horas de antecedência', nuts: 50, pts: 50 },

    { id: 15, specialty: 'Nutrição', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3-5 dias)', subtitle: 'Desmarcar consulta com 3 a 5 dias de antecedência', nuts: 200, pts: 200 },
    { id: 16, specialty: 'Nutrição', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (1-2 dias)', subtitle: 'Desmarcar consulta com 1 a 2 dias de antecedência', nuts: 100, pts: 100 },
    { id: 17, specialty: 'Nutrição', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3h)', subtitle: 'Desmarcar consulta com pelo menos 3 horas de antecedência', nuts: 50, pts: 50 },

    { id: 18, specialty: 'Odontologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3-5 dias)', subtitle: 'Desmarcar consulta com 3 a 5 dias de antecedência', nuts: 200, pts: 200 },
    { id: 19, specialty: 'Odontologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (1-2 dias)', subtitle: 'Desmarcar consulta com 1 a 2 dias de antecedência', nuts: 100, pts: 100 },
    { id: 20, specialty: 'Odontologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3h)', subtitle: 'Desmarcar consulta com pelo menos 3 horas de antecedência', nuts: 50, pts: 50 },

    { id: 21, specialty: 'Psicologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3-5 dias)', subtitle: 'Desmarcar consulta com 3 a 5 dias de antecedência', nuts: 200, pts: 200 },
    { id: 22, specialty: 'Psicologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (1-2 dias)', subtitle: 'Desmarcar consulta com 1 a 2 dias de antecedência', nuts: 100, pts: 100 },
    { id: 23, specialty: 'Psicologia', category: 'Consulta', icon: 'bi-calendar-x', title: 'Cancelamento antecipado (3h)', subtitle: 'Desmarcar consulta com pelo menos 3 horas de antecedência', nuts: 50, pts: 50 },

    // Engajamento
    { id: 24, specialty: 'Endocrinologia', category: 'Engajamento', icon: 'bi-calendar-plus', title: 'Adicionar ao calendário', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 25, specialty: 'Nutrição', category: 'Engajamento', icon: 'bi-calendar-plus', title: 'Adicionar ao calendário', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 26, specialty: 'Psicologia', category: 'Engajamento', icon: 'bi-calendar-plus', title: 'Adicionar ao calendário', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },

    { id: 27, specialty: 'Endocrinologia', category: 'Engajamento', icon: 'bi-check2-circle', title: 'Confirmar consulta', subtitle: 'Confirmar consulta no aplicativo', nuts: 50, pts: 50 },
    { id: 28, specialty: 'Nutrição', category: 'Engajamento', icon: 'bi-check2-circle', title: 'Confirmar consulta', subtitle: 'Confirmar consulta no aplicativo', nuts: 50, pts: 50 },
    { id: 29, specialty: 'Psicologia', category: 'Engajamento', icon: 'bi-check2-circle', title: 'Confirmar consulta', subtitle: 'Confirmar consulta no aplicativo', nuts: 50, pts: 50 },

    { id: 30, specialty: 'Endocrinologia', category: 'Engajamento', icon: 'bi-ui-checks', title: 'Questionário pré-consulta', subtitle: 'Preencher questionário pré-consulta', nuts: 50, pts: 50 },
    { id: 31, specialty: 'Nutrição', category: 'Engajamento', icon: 'bi-ui-checks', title: 'Questionário pré-consulta', subtitle: 'Preencher questionário pré-consulta', nuts: 50, pts: 50 },
    { id: 32, specialty: 'Psicologia', category: 'Engajamento', icon: 'bi-ui-checks', title: 'Questionário pré-consulta', subtitle: 'Preencher questionário pré-consulta', nuts: 50, pts: 50 },

    // Exames
    { id: 33, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-file-earmark-medical', title: 'Exames realizados', subtitle: 'Realizar exames e enviar resultados', nuts: 500, pts: 500 },
    { id: 34, specialty: 'Nutrição', category: 'Exames', icon: 'bi-file-earmark-medical', title: 'Exames realizados', subtitle: 'Realizar exames e enviar resultados', nuts: 500, pts: 500 },

    // Hábitos
    { id: 35, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-heart-pulse', title: 'Monitoramento cardíaco', subtitle: 'Registrar batimentos diariamente', nuts: 10, pts: 10 },
    { id: 36, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-heart', title: 'Pressão arterial', subtitle: 'Registrar pressão diariamente', nuts: 10, pts: 10 },
    { id: 37, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-activity', title: 'Passos diários', subtitle: 'Atingir 10.000 passos', nuts: 10, pts: 10 },
    { id: 38, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-lightning-charge', title: 'Treino HIIT', subtitle: 'Realizar treino HIIT', nuts: 10, pts: 10 },
    { id: 39, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-speedometer', title: 'Pesagem diária', subtitle: 'Registrar peso diariamente', nuts: 10, pts: 10 },

    // Prevenção
    { id: 40, specialty: 'Odontologia', category: 'Prevenção', icon: 'bi-emoji-smile', title: 'Limpeza dentária', subtitle: 'Realizar limpeza semestral', nuts: 1000, pts: 1000 },
    { id: 41, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-droplet', title: 'Rotina de skincare', subtitle: 'Realizar rotina diária de cuidados com a pele', nuts: 15, pts: 15 },
    { id: 42, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-sun', title: 'Uso de protetor solar', subtitle: 'Aplicar protetor solar no dia', nuts: 10, pts: 10 },

    // Saúde mental
    { id: 43, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-chat-dots', title: 'Acompanhamento contínuo', subtitle: '4 consultas seguidas sem cancelar', nuts: 1000, pts: 1000 },
    { id: 44, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-journal-text', title: 'Registro emocional', subtitle: 'Preencher diário emocional', nuts: 15, pts: 15 },
    { id: 45, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-moon-stars', title: 'Higiene do sono', subtitle: 'Seguir rotina de higiene do sono', nuts: 20, pts: 20 },

    // Extras hábitos / clínico
    { id: 46, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up', title: 'Colesterol controlado', subtitle: 'Manter níveis ideais', nuts: 100, pts: 100 },
    { id: 47, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up-arrow', title: 'Melhora do colesterol', subtitle: 'Melhorar níveis entre exames', nuts: 100, pts: 100 },
    { id: 48, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-cup-straw', title: 'Hidratação adequada', subtitle: 'Registrar consumo ideal de água no dia', nuts: 10, pts: 10 },
    { id: 49, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-egg-fried', title: 'Plano alimentar seguido', subtitle: 'Seguir plano alimentar prescrito no dia', nuts: 20, pts: 20 },
    { id: 50, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-capsule', title: 'Adesão medicamentosa', subtitle: 'Tomar medicação conforme prescrição', nuts: 20, pts: 20 },
    { id: 51, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-moon', title: 'Sono adequado', subtitle: 'Dormir pelo menos 7h', nuts: 20, pts: 20 },
    { id: 52, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-moon', title: 'Qualidade do sono', subtitle: 'Registrar sono adequado', nuts: 20, pts: 20 },
    // Mais ações para exemplificar pontos
    { id: 53, specialty: 'Odontologia', category: 'Engajamento', icon: 'bi-check2-circle', title: 'Confirmar consulta', subtitle: 'Confirmar consulta no aplicativo', nuts: 50, pts: 50 },
    { id: 54, specialty: 'Odontologia', category: 'Engajamento', icon: 'bi-ui-checks', title: 'Questionário pré-consulta', subtitle: 'Preencher questionário pré-consulta', nuts: 50, pts: 50 },
    { id: 55, specialty: 'Odontologia', category: 'Engajamento', icon: 'bi-calendar-plus', title: 'Adicionar ao calendário', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 56, specialty: 'Dermatologia', category: 'Engajamento', icon: 'bi-check2-circle', title: 'Confirmar consulta', subtitle: 'Confirmar consulta no aplicativo', nuts: 50, pts: 50 },
    { id: 57, specialty: 'Dermatologia', category: 'Engajamento', icon: 'bi-ui-checks', title: 'Questionário pré-consulta', subtitle: 'Preencher questionário pré-consulta', nuts: 50, pts: 50 },
    { id: 58, specialty: 'Dermatologia', category: 'Engajamento', icon: 'bi-calendar-plus', title: 'Adicionar ao calendário', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 59, specialty: 'Dermatologia', category: 'Engajamento', icon: 'bi-clock', title: 'Chegar no horario', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 60, specialty: 'Odontologia', category: 'Engajamento', icon: 'bi-clock', title: 'Chegar no horario', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 61, specialty: 'Nutrição', category: 'Engajamento', icon: 'bi-clock', title: 'Chegar no horario', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 62, specialty: 'Endocrinologia', category: 'Engajamento', icon: 'bi-clock', title: 'Chegar no horario', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },
    { id: 63, specialty: 'Psicologia', category: 'Engajamento', icon: 'bi-clock', title: 'Chegar no horario', subtitle: 'Adicionar consulta ao calendário', nuts: 100, pts: 100 },

  ]
}

const UsersRanking = [
  {
    "id": 1,
    "name": "Maria Alves",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 5687,
        "monthlyGain": 25
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7109,
        "monthlyGain": 61
      },
      "Odontologia": {
        "pts": 9159,
        "monthlyGain": 157
      },
      "Psicologia": {
        "pts": 1585,
        "monthlyGain": 282
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 2,
    "name": "Fernanda Martins",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 7176,
        "monthlyGain": 217
      },
      "Endocrinologia": {
        "pts": 2609,
        "monthlyGain": 133
      },
      "Nutrição": {
        "pts": 4351,
        "monthlyGain": 14
      },
      "Odontologia": {
        "pts": 8912,
        "monthlyGain": 51
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 3,
    "name": "Você",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 5438,
        "monthlyGain": 130
      },
      "Endocrinologia": {
        "pts": 2809,
        "monthlyGain": 191
      },
      "Nutrição": {
        "pts": 5001,
        "monthlyGain": 200
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4718,
        "monthlyGain": 189
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": true
  },
  {
    "id": 4,
    "name": "Aline Santos",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 586,
        "monthlyGain": 40
      },
      "Nutrição": {
        "pts": 3039,
        "monthlyGain": 23
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1006,
        "monthlyGain": 284
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 5,
    "name": "Maria Martins",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 9061,
        "monthlyGain": 237
      },
      "Endocrinologia": {
        "pts": 2883,
        "monthlyGain": 198
      },
      "Nutrição": {
        "pts": 1017,
        "monthlyGain": 106
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5357,
        "monthlyGain": 246
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 6,
    "name": "Felipe Rocha",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 5643,
        "monthlyGain": 101
      },
      "Endocrinologia": {
        "pts": 9651,
        "monthlyGain": 216
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 6613,
        "monthlyGain": 43
      },
      "Psicologia": {
        "pts": 870,
        "monthlyGain": 111
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 7,
    "name": "Camila Gomes",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 9981,
        "monthlyGain": 296
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3001,
        "monthlyGain": 270
      },
      "Odontologia": {
        "pts": 1580,
        "monthlyGain": 219
      },
      "Psicologia": {
        "pts": 7046,
        "monthlyGain": 222
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 8,
    "name": "Carlos Nogueira",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 3936,
        "monthlyGain": 55
      },
      "Endocrinologia": {
        "pts": 2270,
        "monthlyGain": 19
      },
      "Nutrição": {
        "pts": 647,
        "monthlyGain": 175
      },
      "Odontologia": {
        "pts": 7962,
        "monthlyGain": 62
      },
      "Psicologia": {
        "pts": 5237,
        "monthlyGain": 53
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 9,
    "name": "Mariana Rocha",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 5068,
        "monthlyGain": 139
      },
      "Endocrinologia": {
        "pts": 6889,
        "monthlyGain": 227
      },
      "Nutrição": {
        "pts": 5915,
        "monthlyGain": 118
      },
      "Odontologia": {
        "pts": 9142,
        "monthlyGain": 295
      },
      "Psicologia": {
        "pts": 1803,
        "monthlyGain": 295
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 10,
    "name": "Renata Ribeiro",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2115,
        "monthlyGain": 277
      },
      "Odontologia": {
        "pts": 4154,
        "monthlyGain": 39
      },
      "Psicologia": {
        "pts": 3906,
        "monthlyGain": 115
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 11,
    "name": "João Silva",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2075,
        "monthlyGain": 240
      },
      "Nutrição": {
        "pts": 6931,
        "monthlyGain": 105
      },
      "Odontologia": {
        "pts": 2344,
        "monthlyGain": 215
      },
      "Psicologia": {
        "pts": 7402,
        "monthlyGain": 63
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 12,
    "name": "Gustavo Lima",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 5358,
        "monthlyGain": 102
      },
      "Endocrinologia": {
        "pts": 2439,
        "monthlyGain": 230
      },
      "Nutrição": {
        "pts": 8285,
        "monthlyGain": 176
      },
      "Odontologia": {
        "pts": 4289,
        "monthlyGain": 194
      },
      "Psicologia": {
        "pts": 5875,
        "monthlyGain": 32
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 13,
    "name": "Patricia Santos",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 1054,
        "monthlyGain": 277
      },
      "Endocrinologia": {
        "pts": 6135,
        "monthlyGain": 24
      },
      "Nutrição": {
        "pts": 5580,
        "monthlyGain": 235
      },
      "Odontologia": {
        "pts": 904,
        "monthlyGain": 247
      },
      "Psicologia": {
        "pts": 670,
        "monthlyGain": 174
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 14,
    "name": "Eduardo Silva",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 2670,
        "monthlyGain": 42
      },
      "Endocrinologia": {
        "pts": 6978,
        "monthlyGain": 175
      },
      "Nutrição": {
        "pts": 6175,
        "monthlyGain": 128
      },
      "Odontologia": {
        "pts": 8590,
        "monthlyGain": 35
      },
      "Psicologia": {
        "pts": 8615,
        "monthlyGain": 80
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 15,
    "name": "Gustavo Nogueira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 9195,
        "monthlyGain": 158
      },
      "Endocrinologia": {
        "pts": 2181,
        "monthlyGain": 152
      },
      "Nutrição": {
        "pts": 5481,
        "monthlyGain": 295
      },
      "Odontologia": {
        "pts": 8158,
        "monthlyGain": 89
      },
      "Psicologia": {
        "pts": 822,
        "monthlyGain": 101
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 16,
    "name": "Felipe Santos",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 4604,
        "monthlyGain": 163
      },
      "Nutrição": {
        "pts": 9403,
        "monthlyGain": 39
      },
      "Odontologia": {
        "pts": 5481,
        "monthlyGain": 188
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 17,
    "name": "Carlos Araujo",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 492,
        "monthlyGain": 13
      },
      "Endocrinologia": {
        "pts": 5339,
        "monthlyGain": 192
      },
      "Nutrição": {
        "pts": 1228,
        "monthlyGain": 213
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 3317,
        "monthlyGain": 57
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 18,
    "name": "Mariana Souza",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 8027,
        "monthlyGain": 101
      },
      "Endocrinologia": {
        "pts": 4402,
        "monthlyGain": 112
      },
      "Nutrição": {
        "pts": 6502,
        "monthlyGain": 193
      },
      "Odontologia": {
        "pts": 8719,
        "monthlyGain": 165
      },
      "Psicologia": {
        "pts": 8411,
        "monthlyGain": 3
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 19,
    "name": "Larissa Santos",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 7886,
        "monthlyGain": 192
      },
      "Endocrinologia": {
        "pts": 2976,
        "monthlyGain": 117
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5592,
        "monthlyGain": 143
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 20,
    "name": "Patricia Cardoso",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 4306,
        "monthlyGain": 288
      },
      "Endocrinologia": {
        "pts": 9870,
        "monthlyGain": 120
      },
      "Nutrição": {
        "pts": 8474,
        "monthlyGain": 249
      },
      "Odontologia": {
        "pts": 8147,
        "monthlyGain": 8
      },
      "Psicologia": {
        "pts": 593,
        "monthlyGain": 37
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 21,
    "name": "Fernanda Dias",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 9689,
        "monthlyGain": 283
      },
      "Endocrinologia": {
        "pts": 366,
        "monthlyGain": 126
      },
      "Nutrição": {
        "pts": 4336,
        "monthlyGain": 290
      },
      "Odontologia": {
        "pts": 3660,
        "monthlyGain": 130
      },
      "Psicologia": {
        "pts": 5783,
        "monthlyGain": 76
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 22,
    "name": "João Ribeiro",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 5897,
        "monthlyGain": 164
      },
      "Endocrinologia": {
        "pts": 1762,
        "monthlyGain": 32
      },
      "Nutrição": {
        "pts": 4439,
        "monthlyGain": 222
      },
      "Odontologia": {
        "pts": 8899,
        "monthlyGain": 187
      },
      "Psicologia": {
        "pts": 5684,
        "monthlyGain": 186
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 23,
    "name": "Larissa Monteiro",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 144,
        "monthlyGain": 171
      },
      "Nutrição": {
        "pts": 1331,
        "monthlyGain": 185
      },
      "Odontologia": {
        "pts": 3665,
        "monthlyGain": 259
      },
      "Psicologia": {
        "pts": 1394,
        "monthlyGain": 113
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 24,
    "name": "Lucas Ferreira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2029,
        "monthlyGain": 266
      },
      "Endocrinologia": {
        "pts": 5349,
        "monthlyGain": 39
      },
      "Nutrição": {
        "pts": 8934,
        "monthlyGain": 176
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 25,
    "name": "Renata Melo",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 5468,
        "monthlyGain": 143
      },
      "Endocrinologia": {
        "pts": 1771,
        "monthlyGain": 247
      },
      "Nutrição": {
        "pts": 3664,
        "monthlyGain": 101
      },
      "Odontologia": {
        "pts": 9584,
        "monthlyGain": 252
      },
      "Psicologia": {
        "pts": 6830,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 26,
    "name": "João Araujo",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 243,
        "monthlyGain": 290
      },
      "Endocrinologia": {
        "pts": 9931,
        "monthlyGain": 229
      },
      "Nutrição": {
        "pts": 7521,
        "monthlyGain": 141
      },
      "Odontologia": {
        "pts": 6965,
        "monthlyGain": 199
      },
      "Psicologia": {
        "pts": 7313,
        "monthlyGain": 262
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 27,
    "name": "João Dias",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 6706,
        "monthlyGain": 134
      },
      "Endocrinologia": {
        "pts": 2389,
        "monthlyGain": 236
      },
      "Nutrição": {
        "pts": 816,
        "monthlyGain": 39
      },
      "Odontologia": {
        "pts": 8558,
        "monthlyGain": 40
      },
      "Psicologia": {
        "pts": 1189,
        "monthlyGain": 30
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 28,
    "name": "Felipe Alves",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 6185,
        "monthlyGain": 77
      },
      "Endocrinologia": {
        "pts": 2932,
        "monthlyGain": 128
      },
      "Nutrição": {
        "pts": 9288,
        "monthlyGain": 270
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 9831,
        "monthlyGain": 286
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 29,
    "name": "Ricardo Silva",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 6851,
        "monthlyGain": 189
      },
      "Nutrição": {
        "pts": 2867,
        "monthlyGain": 96
      },
      "Odontologia": {
        "pts": 442,
        "monthlyGain": 69
      },
      "Psicologia": {
        "pts": 1928,
        "monthlyGain": 280
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 30,
    "name": "Patricia Silva",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 4911,
        "monthlyGain": 28
      },
      "Endocrinologia": {
        "pts": 1989,
        "monthlyGain": 39
      },
      "Nutrição": {
        "pts": 4600,
        "monthlyGain": 148
      },
      "Odontologia": {
        "pts": 6074,
        "monthlyGain": 45
      },
      "Psicologia": {
        "pts": 2848,
        "monthlyGain": 56
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 31,
    "name": "Patricia Santos",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 4681,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": 3586,
        "monthlyGain": 250
      },
      "Nutrição": {
        "pts": 421,
        "monthlyGain": 172
      },
      "Odontologia": {
        "pts": 6169,
        "monthlyGain": 149
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 32,
    "name": "Lucas Batista",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 9678,
        "monthlyGain": 89
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 9683,
        "monthlyGain": 69
      },
      "Odontologia": {
        "pts": 8559,
        "monthlyGain": 158
      },
      "Psicologia": {
        "pts": 8091,
        "monthlyGain": 204
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 33,
    "name": "Carlos Martins",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 7360,
        "monthlyGain": 180
      },
      "Endocrinologia": {
        "pts": 8730,
        "monthlyGain": 256
      },
      "Nutrição": {
        "pts": 6074,
        "monthlyGain": 70
      },
      "Odontologia": {
        "pts": 1974,
        "monthlyGain": 277
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 34,
    "name": "Paulo Freitas",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7725,
        "monthlyGain": 69
      },
      "Nutrição": {
        "pts": 9913,
        "monthlyGain": 119
      },
      "Odontologia": {
        "pts": 5221,
        "monthlyGain": 66
      },
      "Psicologia": {
        "pts": 5264,
        "monthlyGain": 13
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 35,
    "name": "Eduardo Cardoso",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 7539,
        "monthlyGain": 216
      },
      "Endocrinologia": {
        "pts": 1542,
        "monthlyGain": 166
      },
      "Nutrição": {
        "pts": 5276,
        "monthlyGain": 71
      },
      "Odontologia": {
        "pts": 4088,
        "monthlyGain": 141
      },
      "Psicologia": {
        "pts": 4823,
        "monthlyGain": 94
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 36,
    "name": "Fernanda Barros",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 8101,
        "monthlyGain": 111
      },
      "Endocrinologia": {
        "pts": 4695,
        "monthlyGain": 118
      },
      "Nutrição": {
        "pts": 9311,
        "monthlyGain": 293
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 3889,
        "monthlyGain": 290
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 37,
    "name": "Paulo Pereira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 9815,
        "monthlyGain": 100
      },
      "Endocrinologia": {
        "pts": 5330,
        "monthlyGain": 67
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6408,
        "monthlyGain": 299
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 38,
    "name": "João Freitas",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 6020,
        "monthlyGain": 43
      },
      "Endocrinologia": {
        "pts": 4262,
        "monthlyGain": 54
      },
      "Nutrição": {
        "pts": 644,
        "monthlyGain": 73
      },
      "Odontologia": {
        "pts": 6137,
        "monthlyGain": 150
      },
      "Psicologia": {
        "pts": 3758,
        "monthlyGain": 168
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 39,
    "name": "Diego Teixeira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2029,
        "monthlyGain": 107
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 8614,
        "monthlyGain": 206
      },
      "Odontologia": {
        "pts": 2579,
        "monthlyGain": 120
      },
      "Psicologia": {
        "pts": 3552,
        "monthlyGain": 7
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 40,
    "name": "Diego Cardoso",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 3384,
        "monthlyGain": 210
      },
      "Endocrinologia": {
        "pts": 8266,
        "monthlyGain": 283
      },
      "Nutrição": {
        "pts": 2201,
        "monthlyGain": 185
      },
      "Odontologia": {
        "pts": 8689,
        "monthlyGain": 135
      },
      "Psicologia": {
        "pts": 3168,
        "monthlyGain": 81
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 41,
    "name": "Patricia Alves",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 2652,
        "monthlyGain": 88
      },
      "Endocrinologia": {
        "pts": 109,
        "monthlyGain": 179
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 3626,
        "monthlyGain": 56
      },
      "Psicologia": {
        "pts": 7710,
        "monthlyGain": 83
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 42,
    "name": "Paulo Lima",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 5930,
        "monthlyGain": 153
      },
      "Endocrinologia": {
        "pts": 1541,
        "monthlyGain": 232
      },
      "Nutrição": {
        "pts": 2849,
        "monthlyGain": 12
      },
      "Odontologia": {
        "pts": 3373,
        "monthlyGain": 225
      },
      "Psicologia": {
        "pts": 9383,
        "monthlyGain": 123
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 43,
    "name": "Renata Gomes",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 1545,
        "monthlyGain": 288
      },
      "Endocrinologia": {
        "pts": 1107,
        "monthlyGain": 27
      },
      "Nutrição": {
        "pts": 7827,
        "monthlyGain": 290
      },
      "Odontologia": {
        "pts": 4748,
        "monthlyGain": 243
      },
      "Psicologia": {
        "pts": 5436,
        "monthlyGain": 276
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 44,
    "name": "Mariana Ferreira",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 8181,
        "monthlyGain": 207
      },
      "Endocrinologia": {
        "pts": 3606,
        "monthlyGain": 292
      },
      "Nutrição": {
        "pts": 7733,
        "monthlyGain": 152
      },
      "Odontologia": {
        "pts": 6469,
        "monthlyGain": 275
      },
      "Psicologia": {
        "pts": 4170,
        "monthlyGain": 251
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 45,
    "name": "Juliana Gomes",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 7559,
        "monthlyGain": 88
      },
      "Endocrinologia": {
        "pts": 5956,
        "monthlyGain": 295
      },
      "Nutrição": {
        "pts": 9115,
        "monthlyGain": 125
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6850,
        "monthlyGain": 256
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 46,
    "name": "Gustavo Costa",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 4857,
        "monthlyGain": 57
      },
      "Endocrinologia": {
        "pts": 9639,
        "monthlyGain": 261
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1706,
        "monthlyGain": 245
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 47,
    "name": "Renata Gomes",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5491,
        "monthlyGain": 192
      },
      "Nutrição": {
        "pts": 163,
        "monthlyGain": 18
      },
      "Odontologia": {
        "pts": 4791,
        "monthlyGain": 246
      },
      "Psicologia": {
        "pts": 1185,
        "monthlyGain": 102
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 48,
    "name": "João Melo",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 2623,
        "monthlyGain": 84
      },
      "Endocrinologia": {
        "pts": 7776,
        "monthlyGain": 227
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 5761,
        "monthlyGain": 2
      },
      "Psicologia": {
        "pts": 5113,
        "monthlyGain": 180
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 49,
    "name": "Gustavo Rocha",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7304,
        "monthlyGain": 233
      },
      "Nutrição": {
        "pts": 2493,
        "monthlyGain": 52
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7196,
        "monthlyGain": 31
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 50,
    "name": "Ana Martins",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1952,
        "monthlyGain": 281
      },
      "Nutrição": {
        "pts": 9603,
        "monthlyGain": 168
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4118,
        "monthlyGain": 102
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 51,
    "name": "Camila Nogueira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6774,
        "monthlyGain": 77
      },
      "Odontologia": {
        "pts": 5538,
        "monthlyGain": 4
      },
      "Psicologia": {
        "pts": 6250,
        "monthlyGain": 247
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 52,
    "name": "Bruno Santos",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 4008,
        "monthlyGain": 88
      },
      "Endocrinologia": {
        "pts": 4593,
        "monthlyGain": 197
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1585,
        "monthlyGain": 172
      },
      "Psicologia": {
        "pts": 2197,
        "monthlyGain": 150
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 53,
    "name": "Gustavo Gomes",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 338,
        "monthlyGain": 105
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 544,
        "monthlyGain": 147
      },
      "Odontologia": {
        "pts": 2042,
        "monthlyGain": 72
      },
      "Psicologia": {
        "pts": 4786,
        "monthlyGain": 37
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 54,
    "name": "Mariana Monteiro",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 9866,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": 7129,
        "monthlyGain": 117
      },
      "Nutrição": {
        "pts": 3804,
        "monthlyGain": 269
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7139,
        "monthlyGain": 288
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 55,
    "name": "João Gomes",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 2698,
        "monthlyGain": 275
      },
      "Endocrinologia": {
        "pts": 3467,
        "monthlyGain": 185
      },
      "Nutrição": {
        "pts": 7168,
        "monthlyGain": 111
      },
      "Odontologia": {
        "pts": 1696,
        "monthlyGain": 262
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 56,
    "name": "Carlos Barros",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 7787,
        "monthlyGain": 141
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2968,
        "monthlyGain": 165
      },
      "Psicologia": {
        "pts": 2197,
        "monthlyGain": 173
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 57,
    "name": "Felipe Pereira",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 6492,
        "monthlyGain": 210
      },
      "Nutrição": {
        "pts": 7239,
        "monthlyGain": 230
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8733,
        "monthlyGain": 133
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 58,
    "name": "Lucas Lima",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 540,
        "monthlyGain": 130
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5994,
        "monthlyGain": 146
      },
      "Odontologia": {
        "pts": 9373,
        "monthlyGain": 167
      },
      "Psicologia": {
        "pts": 8581,
        "monthlyGain": 130
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 59,
    "name": "Carlos Martins",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 3312,
        "monthlyGain": 260
      },
      "Endocrinologia": {
        "pts": 928,
        "monthlyGain": 146
      },
      "Nutrição": {
        "pts": 6394,
        "monthlyGain": 117
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7470,
        "monthlyGain": 32
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 60,
    "name": "Mariana Pereira",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 2313,
        "monthlyGain": 264
      },
      "Endocrinologia": {
        "pts": 1149,
        "monthlyGain": 150
      },
      "Nutrição": {
        "pts": 4380,
        "monthlyGain": 39
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7780,
        "monthlyGain": 183
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 61,
    "name": "Mariana Alves",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 6867,
        "monthlyGain": 30
      },
      "Endocrinologia": {
        "pts": 4604,
        "monthlyGain": 150
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2737,
        "monthlyGain": 12
      },
      "Psicologia": {
        "pts": 6502,
        "monthlyGain": 286
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 62,
    "name": "Lucas Batista",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 8538,
        "monthlyGain": 281
      },
      "Endocrinologia": {
        "pts": 2875,
        "monthlyGain": 56
      },
      "Nutrição": {
        "pts": 2415,
        "monthlyGain": 28
      },
      "Odontologia": {
        "pts": 209,
        "monthlyGain": 130
      },
      "Psicologia": {
        "pts": 7494,
        "monthlyGain": 37
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 63,
    "name": "Carlos Oliveira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 8382,
        "monthlyGain": 213
      },
      "Endocrinologia": {
        "pts": 4305,
        "monthlyGain": 281
      },
      "Nutrição": {
        "pts": 5757,
        "monthlyGain": 74
      },
      "Odontologia": {
        "pts": 3168,
        "monthlyGain": 71
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 64,
    "name": "Ana Lima",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 7130,
        "monthlyGain": 42
      },
      "Endocrinologia": {
        "pts": 6405,
        "monthlyGain": 57
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8588,
        "monthlyGain": 57
      },
      "Psicologia": {
        "pts": 4183,
        "monthlyGain": 89
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 65,
    "name": "Ricardo Dias",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 4348,
        "monthlyGain": 0
      },
      "Nutrição": {
        "pts": 4811,
        "monthlyGain": 18
      },
      "Odontologia": {
        "pts": 888,
        "monthlyGain": 282
      },
      "Psicologia": {
        "pts": 2529,
        "monthlyGain": 4
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 66,
    "name": "Aline Gomes",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9243,
        "monthlyGain": 207
      },
      "Nutrição": {
        "pts": 6108,
        "monthlyGain": 18
      },
      "Odontologia": {
        "pts": 5504,
        "monthlyGain": 38
      },
      "Psicologia": {
        "pts": 3331,
        "monthlyGain": 90
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 67,
    "name": "Camila Batista",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7464,
        "monthlyGain": 264
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7255,
        "monthlyGain": 30
      },
      "Psicologia": {
        "pts": 6093,
        "monthlyGain": 38
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 68,
    "name": "Camila Martins",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 3759,
        "monthlyGain": 46
      },
      "Endocrinologia": {
        "pts": 2216,
        "monthlyGain": 209
      },
      "Nutrição": {
        "pts": 4497,
        "monthlyGain": 27
      },
      "Odontologia": {
        "pts": 3753,
        "monthlyGain": 250
      },
      "Psicologia": {
        "pts": 4183,
        "monthlyGain": 274
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 69,
    "name": "Larissa Lima",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1391,
        "monthlyGain": 192
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5157,
        "monthlyGain": 53
      },
      "Odontologia": {
        "pts": 6856,
        "monthlyGain": 217
      },
      "Psicologia": {
        "pts": 4671,
        "monthlyGain": 90
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 70,
    "name": "Camila Ferreira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 5838,
        "monthlyGain": 41
      },
      "Endocrinologia": {
        "pts": 9125,
        "monthlyGain": 277
      },
      "Nutrição": {
        "pts": 2437,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2658,
        "monthlyGain": 286
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 71,
    "name": "Ricardo Dias",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1846,
        "monthlyGain": 178
      },
      "Nutrição": {
        "pts": 5589,
        "monthlyGain": 190
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2392,
        "monthlyGain": 82
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 72,
    "name": "Aline Martins",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 5367,
        "monthlyGain": 277
      },
      "Endocrinologia": {
        "pts": 6361,
        "monthlyGain": 280
      },
      "Nutrição": {
        "pts": 8101,
        "monthlyGain": 232
      },
      "Odontologia": {
        "pts": 3210,
        "monthlyGain": 173
      },
      "Psicologia": {
        "pts": 2925,
        "monthlyGain": 143
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 73,
    "name": "Mariana Barros",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2150,
        "monthlyGain": 42
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 4207,
        "monthlyGain": 264
      },
      "Psicologia": {
        "pts": 2172,
        "monthlyGain": 229
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 74,
    "name": "Bruno Barros",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 3937,
        "monthlyGain": 148
      },
      "Endocrinologia": {
        "pts": 3985,
        "monthlyGain": 74
      },
      "Nutrição": {
        "pts": 297,
        "monthlyGain": 176
      },
      "Odontologia": {
        "pts": 767,
        "monthlyGain": 36
      },
      "Psicologia": {
        "pts": 8595,
        "monthlyGain": 32
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 75,
    "name": "João Freitas",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5645,
        "monthlyGain": 217
      },
      "Nutrição": {
        "pts": 1823,
        "monthlyGain": 91
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2335,
        "monthlyGain": 255
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 76,
    "name": "Ricardo Batista",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 3029,
        "monthlyGain": 65
      },
      "Endocrinologia": {
        "pts": 9493,
        "monthlyGain": 124
      },
      "Nutrição": {
        "pts": 1798,
        "monthlyGain": 70
      },
      "Odontologia": {
        "pts": 1951,
        "monthlyGain": 38
      },
      "Psicologia": {
        "pts": 1712,
        "monthlyGain": 59
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 77,
    "name": "Eduardo Nogueira",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 2548,
        "monthlyGain": 227
      },
      "Endocrinologia": {
        "pts": 1893,
        "monthlyGain": 170
      },
      "Nutrição": {
        "pts": 6385,
        "monthlyGain": 95
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1067,
        "monthlyGain": 17
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 78,
    "name": "Ana Silva",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 8853,
        "monthlyGain": 25
      },
      "Endocrinologia": {
        "pts": 897,
        "monthlyGain": 241
      },
      "Nutrição": {
        "pts": 7862,
        "monthlyGain": 193
      },
      "Odontologia": {
        "pts": 374,
        "monthlyGain": 85
      },
      "Psicologia": {
        "pts": 8139,
        "monthlyGain": 202
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 79,
    "name": "Maria Santos",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 3077,
        "monthlyGain": 187
      },
      "Endocrinologia": {
        "pts": 5281,
        "monthlyGain": 203
      },
      "Nutrição": {
        "pts": 1032,
        "monthlyGain": 170
      },
      "Odontologia": {
        "pts": 605,
        "monthlyGain": 66
      },
      "Psicologia": {
        "pts": 9803,
        "monthlyGain": 168
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 80,
    "name": "Larissa Lima",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 8072,
        "monthlyGain": 185
      },
      "Endocrinologia": {
        "pts": 4769,
        "monthlyGain": 152
      },
      "Nutrição": {
        "pts": 1549,
        "monthlyGain": 191
      },
      "Odontologia": {
        "pts": 4733,
        "monthlyGain": 130
      },
      "Psicologia": {
        "pts": 3592,
        "monthlyGain": 87
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 81,
    "name": "Gustavo Rocha",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 8022,
        "monthlyGain": 98
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1194,
        "monthlyGain": 285
      },
      "Odontologia": {
        "pts": 3019,
        "monthlyGain": 27
      },
      "Psicologia": {
        "pts": 6210,
        "monthlyGain": 148
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 82,
    "name": "Eduardo Costa",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 425,
        "monthlyGain": 79
      },
      "Endocrinologia": {
        "pts": 2439,
        "monthlyGain": 256
      },
      "Nutrição": {
        "pts": 2125,
        "monthlyGain": 290
      },
      "Odontologia": {
        "pts": 7553,
        "monthlyGain": 254
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 83,
    "name": "Mariana Lima",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7622,
        "monthlyGain": 109
      },
      "Nutrição": {
        "pts": 830,
        "monthlyGain": 238
      },
      "Odontologia": {
        "pts": 3736,
        "monthlyGain": 76
      },
      "Psicologia": {
        "pts": 4904,
        "monthlyGain": 123
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 84,
    "name": "Ana Araujo",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 2925,
        "monthlyGain": 101
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 6311,
        "monthlyGain": 238
      },
      "Psicologia": {
        "pts": 9384,
        "monthlyGain": 236
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 85,
    "name": "Juliana Pereira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 2665,
        "monthlyGain": 7
      },
      "Endocrinologia": {
        "pts": 7120,
        "monthlyGain": 40
      },
      "Nutrição": {
        "pts": 8166,
        "monthlyGain": 30
      },
      "Odontologia": {
        "pts": 3200,
        "monthlyGain": 216
      },
      "Psicologia": {
        "pts": 5675,
        "monthlyGain": 184
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 86,
    "name": "Felipe Freitas",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 9701,
        "monthlyGain": 214
      },
      "Endocrinologia": {
        "pts": 910,
        "monthlyGain": 17
      },
      "Nutrição": {
        "pts": 4836,
        "monthlyGain": 257
      },
      "Odontologia": {
        "pts": 4068,
        "monthlyGain": 75
      },
      "Psicologia": {
        "pts": 1695,
        "monthlyGain": 108
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 87,
    "name": "Felipe Rocha",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 4128,
        "monthlyGain": 124
      },
      "Endocrinologia": {
        "pts": 7262,
        "monthlyGain": 233
      },
      "Nutrição": {
        "pts": 7119,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": 9659,
        "monthlyGain": 294
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 88,
    "name": "Eduardo Souza",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3586,
        "monthlyGain": 81
      },
      "Endocrinologia": {
        "pts": 4276,
        "monthlyGain": 213
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 89,
    "name": "Ricardo Lima",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 211,
        "monthlyGain": 286
      },
      "Endocrinologia": {
        "pts": 5687,
        "monthlyGain": 28
      },
      "Nutrição": {
        "pts": 1429,
        "monthlyGain": 287
      },
      "Odontologia": {
        "pts": 3491,
        "monthlyGain": 179
      },
      "Psicologia": {
        "pts": 7158,
        "monthlyGain": 79
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 90,
    "name": "Juliana Carvalho",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 6178,
        "monthlyGain": 147
      },
      "Endocrinologia": {
        "pts": 445,
        "monthlyGain": 83
      },
      "Nutrição": {
        "pts": 4435,
        "monthlyGain": 247
      },
      "Odontologia": {
        "pts": 913,
        "monthlyGain": 44
      },
      "Psicologia": {
        "pts": 7673,
        "monthlyGain": 57
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 91,
    "name": "Fernanda Monteiro",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 9544,
        "monthlyGain": 133
      },
      "Endocrinologia": {
        "pts": 8493,
        "monthlyGain": 197
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 3741,
        "monthlyGain": 77
      },
      "Psicologia": {
        "pts": 3081,
        "monthlyGain": 5
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 92,
    "name": "Patricia Monteiro",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 7188,
        "monthlyGain": 127
      },
      "Endocrinologia": {
        "pts": 6989,
        "monthlyGain": 191
      },
      "Nutrição": {
        "pts": 9957,
        "monthlyGain": 118
      },
      "Odontologia": {
        "pts": 7671,
        "monthlyGain": 0
      },
      "Psicologia": {
        "pts": 1575,
        "monthlyGain": 238
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 93,
    "name": "Aline Freitas",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1553,
        "monthlyGain": 119
      },
      "Endocrinologia": {
        "pts": 6755,
        "monthlyGain": 134
      },
      "Nutrição": {
        "pts": 9350,
        "monthlyGain": 5
      },
      "Odontologia": {
        "pts": 9607,
        "monthlyGain": 184
      },
      "Psicologia": {
        "pts": 9525,
        "monthlyGain": 96
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 94,
    "name": "Ricardo Santos",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 1158,
        "monthlyGain": 232
      },
      "Endocrinologia": {
        "pts": 3061,
        "monthlyGain": 243
      },
      "Nutrição": {
        "pts": 1090,
        "monthlyGain": 273
      },
      "Odontologia": {
        "pts": 7607,
        "monthlyGain": 73
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 95,
    "name": "Diego Lima",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2718,
        "monthlyGain": 291
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8140,
        "monthlyGain": 102
      },
      "Psicologia": {
        "pts": 2148,
        "monthlyGain": 284
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 96,
    "name": "Lucas Batista",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3534,
        "monthlyGain": 76
      },
      "Nutrição": {
        "pts": 5091,
        "monthlyGain": 107
      },
      "Odontologia": {
        "pts": 2234,
        "monthlyGain": 235
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 97,
    "name": "Aline Monteiro",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8110,
        "monthlyGain": 86
      },
      "Endocrinologia": {
        "pts": 5548,
        "monthlyGain": 256
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 4130,
        "monthlyGain": 44
      },
      "Psicologia": {
        "pts": 8587,
        "monthlyGain": 1
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 98,
    "name": "Mariana Teixeira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 2060,
        "monthlyGain": 154
      },
      "Endocrinologia": {
        "pts": 2742,
        "monthlyGain": 229
      },
      "Nutrição": {
        "pts": 8871,
        "monthlyGain": 164
      },
      "Odontologia": {
        "pts": 8011,
        "monthlyGain": 105
      },
      "Psicologia": {
        "pts": 2346,
        "monthlyGain": 246
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 99,
    "name": "Aline Alves",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 7640,
        "monthlyGain": 114
      },
      "Endocrinologia": {
        "pts": 5730,
        "monthlyGain": 176
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 100,
    "name": "Larissa Melo",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 239,
        "monthlyGain": 79
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1682,
        "monthlyGain": 294
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5388,
        "monthlyGain": 151
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 101,
    "name": "Bruno Freitas",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 4364,
        "monthlyGain": 198
      },
      "Endocrinologia": {
        "pts": 5602,
        "monthlyGain": 54
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7858,
        "monthlyGain": 90
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 102,
    "name": "João Souza",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2748,
        "monthlyGain": 41
      },
      "Nutrição": {
        "pts": 9330,
        "monthlyGain": 202
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6955,
        "monthlyGain": 61
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 103,
    "name": "Fernanda Barros",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5178,
        "monthlyGain": 271
      },
      "Nutrição": {
        "pts": 4879,
        "monthlyGain": 267
      },
      "Odontologia": {
        "pts": 4992,
        "monthlyGain": 290
      },
      "Psicologia": {
        "pts": 3793,
        "monthlyGain": 222
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 104,
    "name": "Juliana Dias",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 2864,
        "monthlyGain": 100
      },
      "Endocrinologia": {
        "pts": 1895,
        "monthlyGain": 97
      },
      "Nutrição": {
        "pts": 7593,
        "monthlyGain": 204
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7422,
        "monthlyGain": 226
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 105,
    "name": "Ana Martins",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 4099,
        "monthlyGain": 136
      },
      "Endocrinologia": {
        "pts": 1934,
        "monthlyGain": 200
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8067,
        "monthlyGain": 72
      },
      "Psicologia": {
        "pts": 8589,
        "monthlyGain": 281
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 106,
    "name": "Mariana Oliveira",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 6128,
        "monthlyGain": 25
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6298,
        "monthlyGain": 239
      },
      "Odontologia": {
        "pts": 9516,
        "monthlyGain": 141
      },
      "Psicologia": {
        "pts": 5859,
        "monthlyGain": 139
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 107,
    "name": "Felipe Martins",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5172,
        "monthlyGain": 27
      },
      "Odontologia": {
        "pts": 7881,
        "monthlyGain": 140
      },
      "Psicologia": {
        "pts": 1892,
        "monthlyGain": 240
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 108,
    "name": "Juliana Souza",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 2049,
        "monthlyGain": 209
      },
      "Endocrinologia": {
        "pts": 3918,
        "monthlyGain": 272
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8022,
        "monthlyGain": 208
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 109,
    "name": "Eduardo Lima",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 5209,
        "monthlyGain": 0
      },
      "Endocrinologia": {
        "pts": 9875,
        "monthlyGain": 296
      },
      "Nutrição": {
        "pts": 1742,
        "monthlyGain": 241
      },
      "Odontologia": {
        "pts": 7182,
        "monthlyGain": 291
      },
      "Psicologia": {
        "pts": 9135,
        "monthlyGain": 123
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 110,
    "name": "Felipe Teixeira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 2822,
        "monthlyGain": 232
      },
      "Endocrinologia": {
        "pts": 5283,
        "monthlyGain": 249
      },
      "Nutrição": {
        "pts": 6658,
        "monthlyGain": 177
      },
      "Odontologia": {
        "pts": 5305,
        "monthlyGain": 250
      },
      "Psicologia": {
        "pts": 1145,
        "monthlyGain": 207
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 111,
    "name": "Mariana Rocha",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8302,
        "monthlyGain": 293
      },
      "Endocrinologia": {
        "pts": 2046,
        "monthlyGain": 157
      },
      "Nutrição": {
        "pts": 2957,
        "monthlyGain": 118
      },
      "Odontologia": {
        "pts": 2116,
        "monthlyGain": 82
      },
      "Psicologia": {
        "pts": 1777,
        "monthlyGain": 55
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 112,
    "name": "Camila Oliveira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 5248,
        "monthlyGain": 79
      },
      "Endocrinologia": {
        "pts": 9716,
        "monthlyGain": 199
      },
      "Nutrição": {
        "pts": 2547,
        "monthlyGain": 103
      },
      "Odontologia": {
        "pts": 5808,
        "monthlyGain": 91
      },
      "Psicologia": {
        "pts": 7386,
        "monthlyGain": 39
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 113,
    "name": "Maria Lima",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 5537,
        "monthlyGain": 49
      },
      "Endocrinologia": {
        "pts": 5193,
        "monthlyGain": 131
      },
      "Nutrição": {
        "pts": 3588,
        "monthlyGain": 263
      },
      "Odontologia": {
        "pts": 5941,
        "monthlyGain": 73
      },
      "Psicologia": {
        "pts": 9672,
        "monthlyGain": 271
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 114,
    "name": "Mariana Freitas",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8778,
        "monthlyGain": 150
      },
      "Nutrição": {
        "pts": 1670,
        "monthlyGain": 176
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5558,
        "monthlyGain": 20
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 115,
    "name": "Lucas Monteiro",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 5670,
        "monthlyGain": 26
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4241,
        "monthlyGain": 237
      },
      "Odontologia": {
        "pts": 8712,
        "monthlyGain": 198
      },
      "Psicologia": {
        "pts": 2312,
        "monthlyGain": 215
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 116,
    "name": "Maria Melo",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 5499,
        "monthlyGain": 107
      },
      "Endocrinologia": {
        "pts": 1873,
        "monthlyGain": 188
      },
      "Nutrição": {
        "pts": 8469,
        "monthlyGain": 49
      },
      "Odontologia": {
        "pts": 7064,
        "monthlyGain": 291
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 117,
    "name": "Larissa Costa",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 2701,
        "monthlyGain": 224
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 205,
        "monthlyGain": 127
      },
      "Odontologia": {
        "pts": 5887,
        "monthlyGain": 254
      },
      "Psicologia": {
        "pts": 7144,
        "monthlyGain": 71
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 118,
    "name": "Fernanda Rocha",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 1220,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": 8872,
        "monthlyGain": 32
      },
      "Nutrição": {
        "pts": 500,
        "monthlyGain": 50
      },
      "Odontologia": {
        "pts": 2068,
        "monthlyGain": 41
      },
      "Psicologia": {
        "pts": 1412,
        "monthlyGain": 260
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 119,
    "name": "Camila Cardoso",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 3105,
        "monthlyGain": 259
      },
      "Endocrinologia": {
        "pts": 9854,
        "monthlyGain": 269
      },
      "Nutrição": {
        "pts": 3763,
        "monthlyGain": 67
      },
      "Odontologia": {
        "pts": 8565,
        "monthlyGain": 208
      },
      "Psicologia": {
        "pts": 1418,
        "monthlyGain": 275
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 120,
    "name": "Renata Gomes",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 4815,
        "monthlyGain": 112
      },
      "Endocrinologia": {
        "pts": 2441,
        "monthlyGain": 131
      },
      "Nutrição": {
        "pts": 483,
        "monthlyGain": 243
      },
      "Odontologia": {
        "pts": 2850,
        "monthlyGain": 226
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 121,
    "name": "Paulo Dias",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 6191,
        "monthlyGain": 76
      },
      "Endocrinologia": {
        "pts": 501,
        "monthlyGain": 78
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9182,
        "monthlyGain": 92
      },
      "Psicologia": {
        "pts": 3383,
        "monthlyGain": 30
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 122,
    "name": "Felipe Batista",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 8583,
        "monthlyGain": 82
      },
      "Endocrinologia": {
        "pts": 9583,
        "monthlyGain": 106
      },
      "Nutrição": {
        "pts": 1045,
        "monthlyGain": 273
      },
      "Odontologia": {
        "pts": 9767,
        "monthlyGain": 192
      },
      "Psicologia": {
        "pts": 318,
        "monthlyGain": 294
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 123,
    "name": "Ricardo Dias",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3889,
        "monthlyGain": 56
      },
      "Nutrição": {
        "pts": 5385,
        "monthlyGain": 201
      },
      "Odontologia": {
        "pts": 3345,
        "monthlyGain": 278
      },
      "Psicologia": {
        "pts": 8806,
        "monthlyGain": 272
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 124,
    "name": "Larissa Silva",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 8541,
        "monthlyGain": 258
      },
      "Endocrinologia": {
        "pts": 5348,
        "monthlyGain": 119
      },
      "Nutrição": {
        "pts": 8196,
        "monthlyGain": 261
      },
      "Odontologia": {
        "pts": 9704,
        "monthlyGain": 91
      },
      "Psicologia": {
        "pts": 9282,
        "monthlyGain": 140
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 125,
    "name": "Fernanda Dias",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 9379,
        "monthlyGain": 292
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1952,
        "monthlyGain": 279
      },
      "Odontologia": {
        "pts": 2892,
        "monthlyGain": 194
      },
      "Psicologia": {
        "pts": 9493,
        "monthlyGain": 128
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 126,
    "name": "Paulo Barros",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 1592,
        "monthlyGain": 9
      },
      "Endocrinologia": {
        "pts": 6006,
        "monthlyGain": 297
      },
      "Nutrição": {
        "pts": 9830,
        "monthlyGain": 170
      },
      "Odontologia": {
        "pts": 5219,
        "monthlyGain": 29
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 127,
    "name": "Gustavo Alves",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 3382,
        "monthlyGain": 125
      },
      "Endocrinologia": {
        "pts": 7737,
        "monthlyGain": 119
      },
      "Nutrição": {
        "pts": 6095,
        "monthlyGain": 190
      },
      "Odontologia": {
        "pts": 1331,
        "monthlyGain": 258
      },
      "Psicologia": {
        "pts": 6816,
        "monthlyGain": 294
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 128,
    "name": "Gustavo Souza",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 8029,
        "monthlyGain": 238
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6629,
        "monthlyGain": 291
      },
      "Odontologia": {
        "pts": 5668,
        "monthlyGain": 220
      },
      "Psicologia": {
        "pts": 4897,
        "monthlyGain": 206
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 129,
    "name": "Larissa Costa",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 7546,
        "monthlyGain": 287
      },
      "Endocrinologia": {
        "pts": 8881,
        "monthlyGain": 190
      },
      "Nutrição": {
        "pts": 3600,
        "monthlyGain": 263
      },
      "Odontologia": {
        "pts": 5070,
        "monthlyGain": 50
      },
      "Psicologia": {
        "pts": 5264,
        "monthlyGain": 111
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 130,
    "name": "Larissa Oliveira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 272,
        "monthlyGain": 196
      },
      "Endocrinologia": {
        "pts": 1936,
        "monthlyGain": 264
      },
      "Nutrição": {
        "pts": 1894,
        "monthlyGain": 179
      },
      "Odontologia": {
        "pts": 6218,
        "monthlyGain": 201
      },
      "Psicologia": {
        "pts": 1068,
        "monthlyGain": 74
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 131,
    "name": "Fernanda Monteiro",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 1141,
        "monthlyGain": 211
      },
      "Endocrinologia": {
        "pts": 8192,
        "monthlyGain": 288
      },
      "Nutrição": {
        "pts": 8985,
        "monthlyGain": 48
      },
      "Odontologia": {
        "pts": 4900,
        "monthlyGain": 189
      },
      "Psicologia": {
        "pts": 6110,
        "monthlyGain": 77
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 132,
    "name": "Maria Martins",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 6626,
        "monthlyGain": 62
      },
      "Nutrição": {
        "pts": 6325,
        "monthlyGain": 220
      },
      "Odontologia": {
        "pts": 5319,
        "monthlyGain": 244
      },
      "Psicologia": {
        "pts": 2502,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 133,
    "name": "Lucas Ribeiro",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 166,
        "monthlyGain": 106
      },
      "Nutrição": {
        "pts": 531,
        "monthlyGain": 184
      },
      "Odontologia": {
        "pts": 7236,
        "monthlyGain": 140
      },
      "Psicologia": {
        "pts": 3637,
        "monthlyGain": 202
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 134,
    "name": "Patricia Araujo",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 5723,
        "monthlyGain": 101
      },
      "Endocrinologia": {
        "pts": 9993,
        "monthlyGain": 261
      },
      "Nutrição": {
        "pts": 7499,
        "monthlyGain": 202
      },
      "Odontologia": {
        "pts": 3992,
        "monthlyGain": 80
      },
      "Psicologia": {
        "pts": 4810,
        "monthlyGain": 140
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 135,
    "name": "Ana Souza",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 5304,
        "monthlyGain": 175
      },
      "Endocrinologia": {
        "pts": 8563,
        "monthlyGain": 196
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2229,
        "monthlyGain": 33
      },
      "Psicologia": {
        "pts": 5864,
        "monthlyGain": 86
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 136,
    "name": "Camila Dias",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 592,
        "monthlyGain": 111
      },
      "Endocrinologia": {
        "pts": 8179,
        "monthlyGain": 33
      },
      "Nutrição": {
        "pts": 1453,
        "monthlyGain": 7
      },
      "Odontologia": {
        "pts": 1663,
        "monthlyGain": 178
      },
      "Psicologia": {
        "pts": 2043,
        "monthlyGain": 260
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 137,
    "name": "Gustavo Cardoso",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 8229,
        "monthlyGain": 121
      },
      "Endocrinologia": {
        "pts": 7040,
        "monthlyGain": 112
      },
      "Nutrição": {
        "pts": 9746,
        "monthlyGain": 227
      },
      "Odontologia": {
        "pts": 3318,
        "monthlyGain": 113
      },
      "Psicologia": {
        "pts": 7480,
        "monthlyGain": 167
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 138,
    "name": "Maria Rocha",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3974,
        "monthlyGain": 189
      },
      "Nutrição": {
        "pts": 7710,
        "monthlyGain": 244
      },
      "Odontologia": {
        "pts": 182,
        "monthlyGain": 267
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 139,
    "name": "Diego Carvalho",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 7337,
        "monthlyGain": 295
      },
      "Endocrinologia": {
        "pts": 1225,
        "monthlyGain": 84
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 983,
        "monthlyGain": 36
      },
      "Psicologia": {
        "pts": 5189,
        "monthlyGain": 218
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 140,
    "name": "Aline Teixeira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8824,
        "monthlyGain": 12
      },
      "Endocrinologia": {
        "pts": 3406,
        "monthlyGain": 1
      },
      "Nutrição": {
        "pts": 3375,
        "monthlyGain": 243
      },
      "Odontologia": {
        "pts": 8082,
        "monthlyGain": 161
      },
      "Psicologia": {
        "pts": 2677,
        "monthlyGain": 208
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 141,
    "name": "Maria Rocha",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 7479,
        "monthlyGain": 137
      },
      "Endocrinologia": {
        "pts": 8187,
        "monthlyGain": 36
      },
      "Nutrição": {
        "pts": 4568,
        "monthlyGain": 298
      },
      "Odontologia": {
        "pts": 9908,
        "monthlyGain": 271
      },
      "Psicologia": {
        "pts": 552,
        "monthlyGain": 161
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 142,
    "name": "Felipe Oliveira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 8305,
        "monthlyGain": 41
      },
      "Endocrinologia": {
        "pts": 7057,
        "monthlyGain": 230
      },
      "Nutrição": {
        "pts": 291,
        "monthlyGain": 217
      },
      "Odontologia": {
        "pts": 5429,
        "monthlyGain": 42
      },
      "Psicologia": {
        "pts": 9583,
        "monthlyGain": 157
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 143,
    "name": "Paulo Freitas",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 4618,
        "monthlyGain": 158
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6086,
        "monthlyGain": 186
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7996,
        "monthlyGain": 21
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 144,
    "name": "Eduardo Pereira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 2478,
        "monthlyGain": 95
      },
      "Endocrinologia": {
        "pts": 5024,
        "monthlyGain": 201
      },
      "Nutrição": {
        "pts": 8756,
        "monthlyGain": 14
      },
      "Odontologia": {
        "pts": 5935,
        "monthlyGain": 127
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 145,
    "name": "Patricia Alves",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 158,
        "monthlyGain": 132
      },
      "Endocrinologia": {
        "pts": 1782,
        "monthlyGain": 220
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7073,
        "monthlyGain": 56
      },
      "Psicologia": {
        "pts": 5012,
        "monthlyGain": 178
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 146,
    "name": "Diego Barros",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2607,
        "monthlyGain": 76
      },
      "Endocrinologia": {
        "pts": 2189,
        "monthlyGain": 278
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2423,
        "monthlyGain": 248
      },
      "Psicologia": {
        "pts": 4443,
        "monthlyGain": 59
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 147,
    "name": "Diego Pereira",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 7183,
        "monthlyGain": 163
      },
      "Endocrinologia": {
        "pts": 5059,
        "monthlyGain": 174
      },
      "Nutrição": {
        "pts": 3185,
        "monthlyGain": 53
      },
      "Odontologia": {
        "pts": 2159,
        "monthlyGain": 233
      },
      "Psicologia": {
        "pts": 970,
        "monthlyGain": 133
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 148,
    "name": "Aline Rocha",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4725,
        "monthlyGain": 236
      },
      "Endocrinologia": {
        "pts": 5842,
        "monthlyGain": 125
      },
      "Nutrição": {
        "pts": 125,
        "monthlyGain": 161
      },
      "Odontologia": {
        "pts": 5339,
        "monthlyGain": 210
      },
      "Psicologia": {
        "pts": 2714,
        "monthlyGain": 279
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 149,
    "name": "Felipe Dias",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 9988,
        "monthlyGain": 54
      },
      "Endocrinologia": {
        "pts": 9784,
        "monthlyGain": 57
      },
      "Nutrição": {
        "pts": 7622,
        "monthlyGain": 74
      },
      "Odontologia": {
        "pts": 347,
        "monthlyGain": 214
      },
      "Psicologia": {
        "pts": 8531,
        "monthlyGain": 210
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 150,
    "name": "Eduardo Souza",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 7825,
        "monthlyGain": 66
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5289,
        "monthlyGain": 37
      },
      "Odontologia": {
        "pts": 2899,
        "monthlyGain": 285
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 151,
    "name": "Aline Martins",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 5046,
        "monthlyGain": 31
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1243,
        "monthlyGain": 55
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 152,
    "name": "Eduardo Gomes",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 2572,
        "monthlyGain": 221
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5905,
        "monthlyGain": 284
      },
      "Odontologia": {
        "pts": 2463,
        "monthlyGain": 137
      },
      "Psicologia": {
        "pts": 5645,
        "monthlyGain": 256
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 153,
    "name": "Camila Araujo",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 2700,
        "monthlyGain": 54
      },
      "Endocrinologia": {
        "pts": 6625,
        "monthlyGain": 139
      },
      "Nutrição": {
        "pts": 9999,
        "monthlyGain": 256
      },
      "Odontologia": {
        "pts": 7098,
        "monthlyGain": 286
      },
      "Psicologia": {
        "pts": 1015,
        "monthlyGain": 89
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 154,
    "name": "Patricia Ferreira",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8256,
        "monthlyGain": 273
      },
      "Nutrição": {
        "pts": 8708,
        "monthlyGain": 74
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 3568,
        "monthlyGain": 272
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 155,
    "name": "Mariana Freitas",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 7614,
        "monthlyGain": 45
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3122,
        "monthlyGain": 49
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1037,
        "monthlyGain": 127
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 156,
    "name": "Carlos Gomes",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 5175,
        "monthlyGain": 46
      },
      "Endocrinologia": {
        "pts": 4845,
        "monthlyGain": 279
      },
      "Nutrição": {
        "pts": 6741,
        "monthlyGain": 178
      },
      "Odontologia": {
        "pts": 3899,
        "monthlyGain": 183
      },
      "Psicologia": {
        "pts": 9298,
        "monthlyGain": 99
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 157,
    "name": "Renata Batista",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5719,
        "monthlyGain": 177
      },
      "Endocrinologia": {
        "pts": 7370,
        "monthlyGain": 172
      },
      "Nutrição": {
        "pts": 1556,
        "monthlyGain": 88
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8448,
        "monthlyGain": 88
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 158,
    "name": "Felipe Freitas",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 4611,
        "monthlyGain": 210
      },
      "Endocrinologia": {
        "pts": 7267,
        "monthlyGain": 168
      },
      "Nutrição": {
        "pts": 8741,
        "monthlyGain": 179
      },
      "Odontologia": {
        "pts": 2430,
        "monthlyGain": 240
      },
      "Psicologia": {
        "pts": 2865,
        "monthlyGain": 179
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 159,
    "name": "Fernanda Santos",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 9393,
        "monthlyGain": 210
      },
      "Endocrinologia": {
        "pts": 9566,
        "monthlyGain": 99
      },
      "Nutrição": {
        "pts": 2849,
        "monthlyGain": 72
      },
      "Odontologia": {
        "pts": 9512,
        "monthlyGain": 14
      },
      "Psicologia": {
        "pts": 9840,
        "monthlyGain": 274
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 160,
    "name": "João Pereira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 8951,
        "monthlyGain": 287
      },
      "Endocrinologia": {
        "pts": 5477,
        "monthlyGain": 45
      },
      "Nutrição": {
        "pts": 6075,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": 4388,
        "monthlyGain": 68
      },
      "Psicologia": {
        "pts": 4050,
        "monthlyGain": 175
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 161,
    "name": "João Silva",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 6235,
        "monthlyGain": 16
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 8096,
        "monthlyGain": 277
      },
      "Odontologia": {
        "pts": 3413,
        "monthlyGain": 276
      },
      "Psicologia": {
        "pts": 3058,
        "monthlyGain": 196
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 162,
    "name": "Larissa Ribeiro",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 4836,
        "monthlyGain": 28
      },
      "Endocrinologia": {
        "pts": 1488,
        "monthlyGain": 11
      },
      "Nutrição": {
        "pts": 6093,
        "monthlyGain": 285
      },
      "Odontologia": {
        "pts": 5882,
        "monthlyGain": 12
      },
      "Psicologia": {
        "pts": 9482,
        "monthlyGain": 252
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 163,
    "name": "Paulo Lima",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 7834,
        "monthlyGain": 207
      },
      "Endocrinologia": {
        "pts": 4321,
        "monthlyGain": 251
      },
      "Nutrição": {
        "pts": 7510,
        "monthlyGain": 204
      },
      "Odontologia": {
        "pts": 6414,
        "monthlyGain": 159
      },
      "Psicologia": {
        "pts": 5505,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 164,
    "name": "Diego Melo",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1167,
        "monthlyGain": 165
      },
      "Nutrição": {
        "pts": 1930,
        "monthlyGain": 255
      },
      "Odontologia": {
        "pts": 2684,
        "monthlyGain": 163
      },
      "Psicologia": {
        "pts": 4346,
        "monthlyGain": 273
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 165,
    "name": "Ana Freitas",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 7698,
        "monthlyGain": 147
      },
      "Endocrinologia": {
        "pts": 1126,
        "monthlyGain": 80
      },
      "Nutrição": {
        "pts": 5460,
        "monthlyGain": 170
      },
      "Odontologia": {
        "pts": 9930,
        "monthlyGain": 268
      },
      "Psicologia": {
        "pts": 9008,
        "monthlyGain": 248
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 166,
    "name": "Larissa Melo",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 1487,
        "monthlyGain": 195
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6713,
        "monthlyGain": 161
      },
      "Odontologia": {
        "pts": 8883,
        "monthlyGain": 34
      },
      "Psicologia": {
        "pts": 5027,
        "monthlyGain": 287
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 167,
    "name": "Fernanda Oliveira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 6363,
        "monthlyGain": 21
      },
      "Endocrinologia": {
        "pts": 4364,
        "monthlyGain": 203
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1592,
        "monthlyGain": 29
      },
      "Psicologia": {
        "pts": 4473,
        "monthlyGain": 250
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 168,
    "name": "Gustavo Rocha",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 1367,
        "monthlyGain": 137
      },
      "Endocrinologia": {
        "pts": 3414,
        "monthlyGain": 18
      },
      "Nutrição": {
        "pts": 1882,
        "monthlyGain": 138
      },
      "Odontologia": {
        "pts": 607,
        "monthlyGain": 18
      },
      "Psicologia": {
        "pts": 8434,
        "monthlyGain": 242
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 169,
    "name": "Renata Ribeiro",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 1285,
        "monthlyGain": 271
      },
      "Endocrinologia": {
        "pts": 4632,
        "monthlyGain": 93
      },
      "Nutrição": {
        "pts": 1595,
        "monthlyGain": 215
      },
      "Odontologia": {
        "pts": 9119,
        "monthlyGain": 177
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 170,
    "name": "Felipe Carvalho",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 9130,
        "monthlyGain": 285
      },
      "Endocrinologia": {
        "pts": 1482,
        "monthlyGain": 222
      },
      "Nutrição": {
        "pts": 342,
        "monthlyGain": 96
      },
      "Odontologia": {
        "pts": 7372,
        "monthlyGain": 26
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 171,
    "name": "Felipe Santos",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 5024,
        "monthlyGain": 130
      },
      "Endocrinologia": {
        "pts": 1134,
        "monthlyGain": 66
      },
      "Nutrição": {
        "pts": 9195,
        "monthlyGain": 253
      },
      "Odontologia": {
        "pts": 978,
        "monthlyGain": 283
      },
      "Psicologia": {
        "pts": 2973,
        "monthlyGain": 194
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 172,
    "name": "Felipe Melo",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 4047,
        "monthlyGain": 231
      },
      "Endocrinologia": {
        "pts": 8194,
        "monthlyGain": 187
      },
      "Nutrição": {
        "pts": 7739,
        "monthlyGain": 17
      },
      "Odontologia": {
        "pts": 507,
        "monthlyGain": 72
      },
      "Psicologia": {
        "pts": 888,
        "monthlyGain": 46
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 173,
    "name": "João Nogueira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7610,
        "monthlyGain": 66
      },
      "Odontologia": {
        "pts": 8903,
        "monthlyGain": 144
      },
      "Psicologia": {
        "pts": 7787,
        "monthlyGain": 292
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 174,
    "name": "Maria Correia",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 7568,
        "monthlyGain": 237
      },
      "Endocrinologia": {
        "pts": 8745,
        "monthlyGain": 188
      },
      "Nutrição": {
        "pts": 5942,
        "monthlyGain": 116
      },
      "Odontologia": {
        "pts": 7195,
        "monthlyGain": 159
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 175,
    "name": "Carlos Freitas",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 9417,
        "monthlyGain": 102
      },
      "Endocrinologia": {
        "pts": 8021,
        "monthlyGain": 180
      },
      "Nutrição": {
        "pts": 2828,
        "monthlyGain": 44
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6688,
        "monthlyGain": 32
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 176,
    "name": "Fernanda Carvalho",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 8514,
        "monthlyGain": 57
      },
      "Endocrinologia": {
        "pts": 9147,
        "monthlyGain": 58
      },
      "Nutrição": {
        "pts": 3647,
        "monthlyGain": 220
      },
      "Odontologia": {
        "pts": 2619,
        "monthlyGain": 77
      },
      "Psicologia": {
        "pts": 1550,
        "monthlyGain": 193
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 177,
    "name": "Larissa Cardoso",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 5938,
        "monthlyGain": 8
      },
      "Endocrinologia": {
        "pts": 9400,
        "monthlyGain": 156
      },
      "Nutrição": {
        "pts": 7939,
        "monthlyGain": 26
      },
      "Odontologia": {
        "pts": 7378,
        "monthlyGain": 263
      },
      "Psicologia": {
        "pts": 840,
        "monthlyGain": 226
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 178,
    "name": "Camila Silva",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 7827,
        "monthlyGain": 185
      },
      "Endocrinologia": {
        "pts": 1834,
        "monthlyGain": 34
      },
      "Nutrição": {
        "pts": 8536,
        "monthlyGain": 207
      },
      "Odontologia": {
        "pts": 755,
        "monthlyGain": 38
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 179,
    "name": "Ana Oliveira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 4641,
        "monthlyGain": 82
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3748,
        "monthlyGain": 114
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 180,
    "name": "Mariana Martins",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 1682,
        "monthlyGain": 72
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9212,
        "monthlyGain": 172
      },
      "Psicologia": {
        "pts": 457,
        "monthlyGain": 196
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 181,
    "name": "Ricardo Oliveira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5878,
        "monthlyGain": 136
      },
      "Nutrição": {
        "pts": 4192,
        "monthlyGain": 31
      },
      "Odontologia": {
        "pts": 7064,
        "monthlyGain": 80
      },
      "Psicologia": {
        "pts": 4402,
        "monthlyGain": 34
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 182,
    "name": "Maria Freitas",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 8328,
        "monthlyGain": 170
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4755,
        "monthlyGain": 238
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4046,
        "monthlyGain": 195
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 183,
    "name": "Lucas Lima",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 9034,
        "monthlyGain": 244
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6257,
        "monthlyGain": 88
      },
      "Odontologia": {
        "pts": 6064,
        "monthlyGain": 139
      },
      "Psicologia": {
        "pts": 2228,
        "monthlyGain": 187
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 184,
    "name": "Juliana Alves",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1877,
        "monthlyGain": 150
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1028,
        "monthlyGain": 66
      },
      "Psicologia": {
        "pts": 6199,
        "monthlyGain": 59
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 185,
    "name": "Carlos Ferreira",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 3932,
        "monthlyGain": 211
      },
      "Endocrinologia": {
        "pts": 6333,
        "monthlyGain": 44
      },
      "Nutrição": {
        "pts": 8490,
        "monthlyGain": 72
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7379,
        "monthlyGain": 128
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 186,
    "name": "Eduardo Freitas",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 3340,
        "monthlyGain": 29
      },
      "Endocrinologia": {
        "pts": 1663,
        "monthlyGain": 242
      },
      "Nutrição": {
        "pts": 6096,
        "monthlyGain": 49
      },
      "Odontologia": {
        "pts": 8215,
        "monthlyGain": 80
      },
      "Psicologia": {
        "pts": 2099,
        "monthlyGain": 101
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 187,
    "name": "Diego Oliveira",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 1559,
        "monthlyGain": 199
      },
      "Endocrinologia": {
        "pts": 9131,
        "monthlyGain": 51
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9774,
        "monthlyGain": 271
      },
      "Psicologia": {
        "pts": 8687,
        "monthlyGain": 4
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 188,
    "name": "Ricardo Ribeiro",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4756,
        "monthlyGain": 79
      },
      "Endocrinologia": {
        "pts": 6206,
        "monthlyGain": 176
      },
      "Nutrição": {
        "pts": 2216,
        "monthlyGain": 123
      },
      "Odontologia": {
        "pts": 173,
        "monthlyGain": 297
      },
      "Psicologia": {
        "pts": 1258,
        "monthlyGain": 230
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 189,
    "name": "João Nogueira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 5574,
        "monthlyGain": 230
      },
      "Endocrinologia": {
        "pts": 3564,
        "monthlyGain": 233
      },
      "Nutrição": {
        "pts": 5604,
        "monthlyGain": 84
      },
      "Odontologia": {
        "pts": 8079,
        "monthlyGain": 34
      },
      "Psicologia": {
        "pts": 8348,
        "monthlyGain": 1
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 190,
    "name": "Carlos Dias",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 5182,
        "monthlyGain": 46
      },
      "Endocrinologia": {
        "pts": 1635,
        "monthlyGain": 178
      },
      "Nutrição": {
        "pts": 7439,
        "monthlyGain": 17
      },
      "Odontologia": {
        "pts": 8943,
        "monthlyGain": 209
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 191,
    "name": "Lucas Ferreira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 616,
        "monthlyGain": 61
      },
      "Endocrinologia": {
        "pts": 5831,
        "monthlyGain": 34
      },
      "Nutrição": {
        "pts": 8088,
        "monthlyGain": 282
      },
      "Odontologia": {
        "pts": 7209,
        "monthlyGain": 277
      },
      "Psicologia": {
        "pts": 2556,
        "monthlyGain": 90
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 192,
    "name": "Eduardo Pereira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2269,
        "monthlyGain": 3
      },
      "Endocrinologia": {
        "pts": 4724,
        "monthlyGain": 240
      },
      "Nutrição": {
        "pts": 4898,
        "monthlyGain": 274
      },
      "Odontologia": {
        "pts": 789,
        "monthlyGain": 237
      },
      "Psicologia": {
        "pts": 2469,
        "monthlyGain": 5
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 193,
    "name": "Carlos Lima",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 9460,
        "monthlyGain": 214
      },
      "Endocrinologia": {
        "pts": 4653,
        "monthlyGain": 219
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7007,
        "monthlyGain": 208
      },
      "Psicologia": {
        "pts": 596,
        "monthlyGain": 35
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 194,
    "name": "Ana Costa",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 6682,
        "monthlyGain": 219
      },
      "Endocrinologia": {
        "pts": 8823,
        "monthlyGain": 63
      },
      "Nutrição": {
        "pts": 422,
        "monthlyGain": 193
      },
      "Odontologia": {
        "pts": 8629,
        "monthlyGain": 262
      },
      "Psicologia": {
        "pts": 6321,
        "monthlyGain": 8
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 195,
    "name": "Patricia Dias",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 2580,
        "monthlyGain": 295
      },
      "Endocrinologia": {
        "pts": 6913,
        "monthlyGain": 11
      },
      "Nutrição": {
        "pts": 9489,
        "monthlyGain": 20
      },
      "Odontologia": {
        "pts": 850,
        "monthlyGain": 174
      },
      "Psicologia": {
        "pts": 536,
        "monthlyGain": 106
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 196,
    "name": "Maria Monteiro",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 6191,
        "monthlyGain": 275
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1752,
        "monthlyGain": 211
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2638,
        "monthlyGain": 92
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 197,
    "name": "Mariana Alves",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 2289,
        "monthlyGain": 35
      },
      "Endocrinologia": {
        "pts": 3403,
        "monthlyGain": 27
      },
      "Nutrição": {
        "pts": 6419,
        "monthlyGain": 102
      },
      "Odontologia": {
        "pts": 5851,
        "monthlyGain": 245
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 198,
    "name": "Aline Barros",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 2443,
        "monthlyGain": 10
      },
      "Endocrinologia": {
        "pts": 5080,
        "monthlyGain": 146
      },
      "Nutrição": {
        "pts": 481,
        "monthlyGain": 104
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5286,
        "monthlyGain": 159
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 199,
    "name": "Mariana Melo",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 1068,
        "monthlyGain": 178
      },
      "Endocrinologia": {
        "pts": 6495,
        "monthlyGain": 217
      },
      "Nutrição": {
        "pts": 2535,
        "monthlyGain": 271
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8264,
        "monthlyGain": 107
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 200,
    "name": "Diego Oliveira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 657,
        "monthlyGain": 123
      },
      "Nutrição": {
        "pts": 5060,
        "monthlyGain": 74
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4128,
        "monthlyGain": 229
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 201,
    "name": "Mariana Dias",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2342,
        "monthlyGain": 103
      },
      "Endocrinologia": {
        "pts": 3866,
        "monthlyGain": 153
      },
      "Nutrição": {
        "pts": 8726,
        "monthlyGain": 91
      },
      "Odontologia": {
        "pts": 7378,
        "monthlyGain": 21
      },
      "Psicologia": {
        "pts": 7632,
        "monthlyGain": 122
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 202,
    "name": "Gustavo Teixeira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 7154,
        "monthlyGain": 295
      },
      "Endocrinologia": {
        "pts": 8275,
        "monthlyGain": 235
      },
      "Nutrição": {
        "pts": 6321,
        "monthlyGain": 77
      },
      "Odontologia": {
        "pts": 9675,
        "monthlyGain": 73
      },
      "Psicologia": {
        "pts": 5928,
        "monthlyGain": 167
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 203,
    "name": "Eduardo Oliveira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 5517,
        "monthlyGain": 44
      },
      "Endocrinologia": {
        "pts": 7008,
        "monthlyGain": 269
      },
      "Nutrição": {
        "pts": 5131,
        "monthlyGain": 126
      },
      "Odontologia": {
        "pts": 136,
        "monthlyGain": 16
      },
      "Psicologia": {
        "pts": 612,
        "monthlyGain": 225
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 204,
    "name": "Renata Martins",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4267,
        "monthlyGain": 260
      },
      "Endocrinologia": {
        "pts": 6117,
        "monthlyGain": 119
      },
      "Nutrição": {
        "pts": 2680,
        "monthlyGain": 33
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 205,
    "name": "Renata Nogueira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 6469,
        "monthlyGain": 240
      },
      "Endocrinologia": {
        "pts": 7001,
        "monthlyGain": 90
      },
      "Nutrição": {
        "pts": 8821,
        "monthlyGain": 285
      },
      "Odontologia": {
        "pts": 4206,
        "monthlyGain": 76
      },
      "Psicologia": {
        "pts": 4634,
        "monthlyGain": 58
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 206,
    "name": "Aline Monteiro",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 2154,
        "monthlyGain": 39
      },
      "Endocrinologia": {
        "pts": 6326,
        "monthlyGain": 176
      },
      "Nutrição": {
        "pts": 9585,
        "monthlyGain": 120
      },
      "Odontologia": {
        "pts": 2273,
        "monthlyGain": 175
      },
      "Psicologia": {
        "pts": 2693,
        "monthlyGain": 201
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 207,
    "name": "João Martins",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 160,
        "monthlyGain": 137
      },
      "Endocrinologia": {
        "pts": 3097,
        "monthlyGain": 53
      },
      "Nutrição": {
        "pts": 650,
        "monthlyGain": 99
      },
      "Odontologia": {
        "pts": 6373,
        "monthlyGain": 70
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 208,
    "name": "Felipe Silva",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 782,
        "monthlyGain": 229
      },
      "Nutrição": {
        "pts": 5052,
        "monthlyGain": 114
      },
      "Odontologia": {
        "pts": 1274,
        "monthlyGain": 276
      },
      "Psicologia": {
        "pts": 2846,
        "monthlyGain": 199
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 209,
    "name": "Ana Dias",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 9508,
        "monthlyGain": 176
      },
      "Endocrinologia": {
        "pts": 2940,
        "monthlyGain": 152
      },
      "Nutrição": {
        "pts": 3883,
        "monthlyGain": 263
      },
      "Odontologia": {
        "pts": 6873,
        "monthlyGain": 167
      },
      "Psicologia": {
        "pts": 9811,
        "monthlyGain": 17
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 210,
    "name": "Fernanda Cardoso",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2649,
        "monthlyGain": 68
      },
      "Nutrição": {
        "pts": 5085,
        "monthlyGain": 41
      },
      "Odontologia": {
        "pts": 4963,
        "monthlyGain": 205
      },
      "Psicologia": {
        "pts": 7911,
        "monthlyGain": 207
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 211,
    "name": "Renata Lima",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 4090,
        "monthlyGain": 125
      },
      "Endocrinologia": {
        "pts": 3493,
        "monthlyGain": 31
      },
      "Nutrição": {
        "pts": 6829,
        "monthlyGain": 95
      },
      "Odontologia": {
        "pts": 439,
        "monthlyGain": 39
      },
      "Psicologia": {
        "pts": 6125,
        "monthlyGain": 144
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 212,
    "name": "Renata Martins",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 4093,
        "monthlyGain": 162
      },
      "Endocrinologia": {
        "pts": 7488,
        "monthlyGain": 148
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6165,
        "monthlyGain": 62
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 213,
    "name": "Ricardo Freitas",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 4007,
        "monthlyGain": 247
      },
      "Endocrinologia": {
        "pts": 3454,
        "monthlyGain": 137
      },
      "Nutrição": {
        "pts": 5883,
        "monthlyGain": 19
      },
      "Odontologia": {
        "pts": 7146,
        "monthlyGain": 189
      },
      "Psicologia": {
        "pts": 5809,
        "monthlyGain": 288
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 214,
    "name": "Camila Barros",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 7893,
        "monthlyGain": 176
      },
      "Endocrinologia": {
        "pts": 3096,
        "monthlyGain": 152
      },
      "Nutrição": {
        "pts": 2066,
        "monthlyGain": 196
      },
      "Odontologia": {
        "pts": 2944,
        "monthlyGain": 103
      },
      "Psicologia": {
        "pts": 6915,
        "monthlyGain": 179
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 215,
    "name": "Maria Araujo",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 174,
        "monthlyGain": 274
      },
      "Endocrinologia": {
        "pts": 7485,
        "monthlyGain": 218
      },
      "Nutrição": {
        "pts": 7482,
        "monthlyGain": 33
      },
      "Odontologia": {
        "pts": 1933,
        "monthlyGain": 79
      },
      "Psicologia": {
        "pts": 684,
        "monthlyGain": 94
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 216,
    "name": "Lucas Nogueira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 2894,
        "monthlyGain": 217
      },
      "Endocrinologia": {
        "pts": 9870,
        "monthlyGain": 55
      },
      "Nutrição": {
        "pts": 8023,
        "monthlyGain": 248
      },
      "Odontologia": {
        "pts": 9749,
        "monthlyGain": 297
      },
      "Psicologia": {
        "pts": 3550,
        "monthlyGain": 119
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 217,
    "name": "Juliana Oliveira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 9737,
        "monthlyGain": 94
      },
      "Endocrinologia": {
        "pts": 6299,
        "monthlyGain": 158
      },
      "Nutrição": {
        "pts": 4236,
        "monthlyGain": 81
      },
      "Odontologia": {
        "pts": 4409,
        "monthlyGain": 163
      },
      "Psicologia": {
        "pts": 7789,
        "monthlyGain": 288
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 218,
    "name": "Maria Barros",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 5221,
        "monthlyGain": 37
      },
      "Endocrinologia": {
        "pts": 924,
        "monthlyGain": 212
      },
      "Nutrição": {
        "pts": 8098,
        "monthlyGain": 110
      },
      "Odontologia": {
        "pts": 7629,
        "monthlyGain": 190
      },
      "Psicologia": {
        "pts": 8516,
        "monthlyGain": 179
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 219,
    "name": "Eduardo Monteiro",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 9142,
        "monthlyGain": 40
      },
      "Endocrinologia": {
        "pts": 2757,
        "monthlyGain": 111
      },
      "Nutrição": {
        "pts": 1166,
        "monthlyGain": 149
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7823,
        "monthlyGain": 54
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 220,
    "name": "Paulo Rocha",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 2225,
        "monthlyGain": 89
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5412,
        "monthlyGain": 173
      },
      "Odontologia": {
        "pts": 4238,
        "monthlyGain": 136
      },
      "Psicologia": {
        "pts": 2137,
        "monthlyGain": 92
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 221,
    "name": "Mariana Cardoso",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 5940,
        "monthlyGain": 294
      },
      "Psicologia": {
        "pts": 4805,
        "monthlyGain": 170
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 222,
    "name": "João Souza",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 8117,
        "monthlyGain": 132
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6967,
        "monthlyGain": 100
      },
      "Odontologia": {
        "pts": 7070,
        "monthlyGain": 197
      },
      "Psicologia": {
        "pts": 8514,
        "monthlyGain": 167
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 223,
    "name": "Larissa Ribeiro",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9784,
        "monthlyGain": 123
      },
      "Nutrição": {
        "pts": 1470,
        "monthlyGain": 117
      },
      "Odontologia": {
        "pts": 2506,
        "monthlyGain": 214
      },
      "Psicologia": {
        "pts": 2565,
        "monthlyGain": 31
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 224,
    "name": "Juliana Ribeiro",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 8069,
        "monthlyGain": 61
      },
      "Endocrinologia": {
        "pts": 4012,
        "monthlyGain": 201
      },
      "Nutrição": {
        "pts": 3045,
        "monthlyGain": 262
      },
      "Odontologia": {
        "pts": 1516,
        "monthlyGain": 295
      },
      "Psicologia": {
        "pts": 2762,
        "monthlyGain": 236
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 225,
    "name": "Larissa Costa",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 6454,
        "monthlyGain": 192
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 9034,
        "monthlyGain": 124
      },
      "Odontologia": {
        "pts": 7977,
        "monthlyGain": 102
      },
      "Psicologia": {
        "pts": 1116,
        "monthlyGain": 94
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 226,
    "name": "Maria Pereira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 778,
        "monthlyGain": 79
      },
      "Endocrinologia": {
        "pts": 7211,
        "monthlyGain": 110
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8676,
        "monthlyGain": 17
      },
      "Psicologia": {
        "pts": 9364,
        "monthlyGain": 112
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 227,
    "name": "Camila Costa",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 4407,
        "monthlyGain": 229
      },
      "Endocrinologia": {
        "pts": 5998,
        "monthlyGain": 104
      },
      "Nutrição": {
        "pts": 4772,
        "monthlyGain": 213
      },
      "Odontologia": {
        "pts": 4148,
        "monthlyGain": 52
      },
      "Psicologia": {
        "pts": 8740,
        "monthlyGain": 89
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 228,
    "name": "Eduardo Pereira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 6220,
        "monthlyGain": 13
      },
      "Endocrinologia": {
        "pts": 4705,
        "monthlyGain": 191
      },
      "Nutrição": {
        "pts": 6093,
        "monthlyGain": 264
      },
      "Odontologia": {
        "pts": 9232,
        "monthlyGain": 176
      },
      "Psicologia": {
        "pts": 9568,
        "monthlyGain": 51
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 229,
    "name": "Diego Ferreira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 3334,
        "monthlyGain": 241
      },
      "Endocrinologia": {
        "pts": 8348,
        "monthlyGain": 149
      },
      "Nutrição": {
        "pts": 6496,
        "monthlyGain": 115
      },
      "Odontologia": {
        "pts": 7526,
        "monthlyGain": 211
      },
      "Psicologia": {
        "pts": 8187,
        "monthlyGain": 13
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 230,
    "name": "Gustavo Martins",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 980,
        "monthlyGain": 187
      },
      "Endocrinologia": {
        "pts": 5498,
        "monthlyGain": 24
      },
      "Nutrição": {
        "pts": 4686,
        "monthlyGain": 78
      },
      "Odontologia": {
        "pts": 8863,
        "monthlyGain": 285
      },
      "Psicologia": {
        "pts": 790,
        "monthlyGain": 84
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 231,
    "name": "Gustavo Cardoso",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 1419,
        "monthlyGain": 185
      },
      "Endocrinologia": {
        "pts": 8419,
        "monthlyGain": 122
      },
      "Nutrição": {
        "pts": 9878,
        "monthlyGain": 150
      },
      "Odontologia": {
        "pts": 6341,
        "monthlyGain": 169
      },
      "Psicologia": {
        "pts": 2924,
        "monthlyGain": 46
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 232,
    "name": "João Araujo",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 7625,
        "monthlyGain": 141
      },
      "Endocrinologia": {
        "pts": 8749,
        "monthlyGain": 62
      },
      "Nutrição": {
        "pts": 5025,
        "monthlyGain": 284
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8295,
        "monthlyGain": 215
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 233,
    "name": "Patricia Nogueira",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1786,
        "monthlyGain": 138
      },
      "Endocrinologia": {
        "pts": 1260,
        "monthlyGain": 147
      },
      "Nutrição": {
        "pts": 9772,
        "monthlyGain": 6
      },
      "Odontologia": {
        "pts": 1718,
        "monthlyGain": 94
      },
      "Psicologia": {
        "pts": 9905,
        "monthlyGain": 214
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 234,
    "name": "Aline Pereira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 911,
        "monthlyGain": 7
      },
      "Odontologia": {
        "pts": 6317,
        "monthlyGain": 96
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 235,
    "name": "Bruno Costa",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 5169,
        "monthlyGain": 192
      },
      "Endocrinologia": {
        "pts": 8044,
        "monthlyGain": 285
      },
      "Nutrição": {
        "pts": 5696,
        "monthlyGain": 240
      },
      "Odontologia": {
        "pts": 8460,
        "monthlyGain": 235
      },
      "Psicologia": {
        "pts": 4642,
        "monthlyGain": 35
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 236,
    "name": "Fernanda Correia",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 8843,
        "monthlyGain": 288
      },
      "Endocrinologia": {
        "pts": 9877,
        "monthlyGain": 293
      },
      "Nutrição": {
        "pts": 2857,
        "monthlyGain": 262
      },
      "Odontologia": {
        "pts": 3317,
        "monthlyGain": 259
      },
      "Psicologia": {
        "pts": 6975,
        "monthlyGain": 72
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 237,
    "name": "Diego Oliveira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 379,
        "monthlyGain": 63
      },
      "Endocrinologia": {
        "pts": 9400,
        "monthlyGain": 85
      },
      "Nutrição": {
        "pts": 851,
        "monthlyGain": 299
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 9229,
        "monthlyGain": 250
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 238,
    "name": "Bruno Lima",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2533,
        "monthlyGain": 250
      },
      "Odontologia": {
        "pts": 627,
        "monthlyGain": 160
      },
      "Psicologia": {
        "pts": 1230,
        "monthlyGain": 172
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 239,
    "name": "Ricardo Melo",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5725,
        "monthlyGain": 116
      },
      "Nutrição": {
        "pts": 1525,
        "monthlyGain": 28
      },
      "Odontologia": {
        "pts": 5593,
        "monthlyGain": 144
      },
      "Psicologia": {
        "pts": 296,
        "monthlyGain": 42
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 240,
    "name": "Eduardo Santos",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 919,
        "monthlyGain": 284
      },
      "Endocrinologia": {
        "pts": 3355,
        "monthlyGain": 195
      },
      "Nutrição": {
        "pts": 3700,
        "monthlyGain": 200
      },
      "Odontologia": {
        "pts": 8777,
        "monthlyGain": 155
      },
      "Psicologia": {
        "pts": 1484,
        "monthlyGain": 279
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 241,
    "name": "Fernanda Teixeira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 3353,
        "monthlyGain": 167
      },
      "Endocrinologia": {
        "pts": 746,
        "monthlyGain": 246
      },
      "Nutrição": {
        "pts": 7868,
        "monthlyGain": 275
      },
      "Odontologia": {
        "pts": 2174,
        "monthlyGain": 256
      },
      "Psicologia": {
        "pts": 4791,
        "monthlyGain": 186
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 242,
    "name": "Ricardo Cardoso",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 6789,
        "monthlyGain": 72
      },
      "Endocrinologia": {
        "pts": 3843,
        "monthlyGain": 172
      },
      "Nutrição": {
        "pts": 2647,
        "monthlyGain": 257
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 243,
    "name": "João Ribeiro",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 8558,
        "monthlyGain": 289
      },
      "Endocrinologia": {
        "pts": 237,
        "monthlyGain": 106
      },
      "Nutrição": {
        "pts": 9621,
        "monthlyGain": 244
      },
      "Odontologia": {
        "pts": 9658,
        "monthlyGain": 200
      },
      "Psicologia": {
        "pts": 8702,
        "monthlyGain": 282
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 244,
    "name": "Renata Correia",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8076,
        "monthlyGain": 186
      },
      "Endocrinologia": {
        "pts": 9585,
        "monthlyGain": 189
      },
      "Nutrição": {
        "pts": 6109,
        "monthlyGain": 214
      },
      "Odontologia": {
        "pts": 7909,
        "monthlyGain": 155
      },
      "Psicologia": {
        "pts": 341,
        "monthlyGain": 227
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 245,
    "name": "Eduardo Gomes",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 1421,
        "monthlyGain": 142
      },
      "Endocrinologia": {
        "pts": 4969,
        "monthlyGain": 5
      },
      "Nutrição": {
        "pts": 5703,
        "monthlyGain": 152
      },
      "Odontologia": {
        "pts": 2029,
        "monthlyGain": 51
      },
      "Psicologia": {
        "pts": 8830,
        "monthlyGain": 9
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 246,
    "name": "Mariana Carvalho",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 8745,
        "monthlyGain": 60
      },
      "Endocrinologia": {
        "pts": 9038,
        "monthlyGain": 20
      },
      "Nutrição": {
        "pts": 205,
        "monthlyGain": 25
      },
      "Odontologia": {
        "pts": 3232,
        "monthlyGain": 105
      },
      "Psicologia": {
        "pts": 5383,
        "monthlyGain": 237
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 247,
    "name": "Gustavo Lima",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 3201,
        "monthlyGain": 118
      },
      "Endocrinologia": {
        "pts": 5985,
        "monthlyGain": 37
      },
      "Nutrição": {
        "pts": 5180,
        "monthlyGain": 258
      },
      "Odontologia": {
        "pts": 5815,
        "monthlyGain": 212
      },
      "Psicologia": {
        "pts": 4224,
        "monthlyGain": 236
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 248,
    "name": "Carlos Santos",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3348,
        "monthlyGain": 254
      },
      "Endocrinologia": {
        "pts": 3622,
        "monthlyGain": 43
      },
      "Nutrição": {
        "pts": 7935,
        "monthlyGain": 118
      },
      "Odontologia": {
        "pts": 5372,
        "monthlyGain": 254
      },
      "Psicologia": {
        "pts": 786,
        "monthlyGain": 5
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 249,
    "name": "Larissa Silva",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9408,
        "monthlyGain": 289
      },
      "Nutrição": {
        "pts": 239,
        "monthlyGain": 261
      },
      "Odontologia": {
        "pts": 7767,
        "monthlyGain": 69
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 250,
    "name": "Lucas Carvalho",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 1026,
        "monthlyGain": 189
      },
      "Endocrinologia": {
        "pts": 8468,
        "monthlyGain": 207
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 3122,
        "monthlyGain": 243
      },
      "Psicologia": {
        "pts": 9143,
        "monthlyGain": 166
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 251,
    "name": "Maria Ferreira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 9519,
        "monthlyGain": 38
      },
      "Endocrinologia": {
        "pts": 7595,
        "monthlyGain": 222
      },
      "Nutrição": {
        "pts": 1249,
        "monthlyGain": 50
      },
      "Odontologia": {
        "pts": 283,
        "monthlyGain": 80
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 252,
    "name": "Mariana Carvalho",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 3810,
        "monthlyGain": 181
      },
      "Endocrinologia": {
        "pts": 3592,
        "monthlyGain": 217
      },
      "Nutrição": {
        "pts": 2443,
        "monthlyGain": 134
      },
      "Odontologia": {
        "pts": 1141,
        "monthlyGain": 135
      },
      "Psicologia": {
        "pts": 5751,
        "monthlyGain": 117
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 253,
    "name": "Mariana Souza",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 9112,
        "monthlyGain": 135
      },
      "Endocrinologia": {
        "pts": 9490,
        "monthlyGain": 74
      },
      "Nutrição": {
        "pts": 5798,
        "monthlyGain": 215
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 572,
        "monthlyGain": 111
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 254,
    "name": "Ana Correia",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 693,
        "monthlyGain": 285
      },
      "Endocrinologia": {
        "pts": 7915,
        "monthlyGain": 26
      },
      "Nutrição": {
        "pts": 1400,
        "monthlyGain": 143
      },
      "Odontologia": {
        "pts": 3711,
        "monthlyGain": 38
      },
      "Psicologia": {
        "pts": 7812,
        "monthlyGain": 97
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 255,
    "name": "Ricardo Teixeira",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9303,
        "monthlyGain": 298
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8489,
        "monthlyGain": 45
      },
      "Psicologia": {
        "pts": 2644,
        "monthlyGain": 30
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 256,
    "name": "Carlos Martins",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5379,
        "monthlyGain": 291
      },
      "Endocrinologia": {
        "pts": 6017,
        "monthlyGain": 160
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 4350,
        "monthlyGain": 11
      },
      "Psicologia": {
        "pts": 513,
        "monthlyGain": 137
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 257,
    "name": "Bruno Cardoso",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 2547,
        "monthlyGain": 1
      },
      "Endocrinologia": {
        "pts": 5049,
        "monthlyGain": 30
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1581,
        "monthlyGain": 128
      },
      "Psicologia": {
        "pts": 4330,
        "monthlyGain": 52
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 258,
    "name": "Ana Ferreira",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 5311,
        "monthlyGain": 175
      },
      "Endocrinologia": {
        "pts": 3869,
        "monthlyGain": 283
      },
      "Nutrição": {
        "pts": 3684,
        "monthlyGain": 179
      },
      "Odontologia": {
        "pts": 3501,
        "monthlyGain": 163
      },
      "Psicologia": {
        "pts": 9862,
        "monthlyGain": 260
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 259,
    "name": "Patricia Souza",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 3101,
        "monthlyGain": 153
      },
      "Endocrinologia": {
        "pts": 520,
        "monthlyGain": 249
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 5083,
        "monthlyGain": 98
      },
      "Psicologia": {
        "pts": 5550,
        "monthlyGain": 27
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 260,
    "name": "Lucas Ribeiro",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 3014,
        "monthlyGain": 67
      },
      "Endocrinologia": {
        "pts": 4494,
        "monthlyGain": 155
      },
      "Nutrição": {
        "pts": 5658,
        "monthlyGain": 73
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 261,
    "name": "Ricardo Pereira",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3253,
        "monthlyGain": 181
      },
      "Nutrição": {
        "pts": 3291,
        "monthlyGain": 181
      },
      "Odontologia": {
        "pts": 7440,
        "monthlyGain": 277
      },
      "Psicologia": {
        "pts": 8004,
        "monthlyGain": 56
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 262,
    "name": "Larissa Batista",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 6163,
        "monthlyGain": 155
      },
      "Endocrinologia": {
        "pts": 6492,
        "monthlyGain": 174
      },
      "Nutrição": {
        "pts": 153,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 9186,
        "monthlyGain": 199
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 263,
    "name": "Eduardo Dias",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 6098,
        "monthlyGain": 107
      },
      "Endocrinologia": {
        "pts": 8037,
        "monthlyGain": 128
      },
      "Nutrição": {
        "pts": 5674,
        "monthlyGain": 163
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1793,
        "monthlyGain": 5
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 264,
    "name": "Lucas Melo",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 3542,
        "monthlyGain": 100
      },
      "Endocrinologia": {
        "pts": 5697,
        "monthlyGain": 8
      },
      "Nutrição": {
        "pts": 9051,
        "monthlyGain": 59
      },
      "Odontologia": {
        "pts": 5857,
        "monthlyGain": 13
      },
      "Psicologia": {
        "pts": 9396,
        "monthlyGain": 46
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 265,
    "name": "Carlos Costa",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 6852,
        "monthlyGain": 133
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 3170,
        "monthlyGain": 164
      },
      "Psicologia": {
        "pts": 6482,
        "monthlyGain": 32
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 266,
    "name": "Felipe Martins",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2769,
        "monthlyGain": 49
      },
      "Endocrinologia": {
        "pts": 9326,
        "monthlyGain": 296
      },
      "Nutrição": {
        "pts": 6349,
        "monthlyGain": 27
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7230,
        "monthlyGain": 136
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 267,
    "name": "Patricia Oliveira",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 1493,
        "monthlyGain": 10
      },
      "Endocrinologia": {
        "pts": 8176,
        "monthlyGain": 138
      },
      "Nutrição": {
        "pts": 6728,
        "monthlyGain": 267
      },
      "Odontologia": {
        "pts": 6387,
        "monthlyGain": 104
      },
      "Psicologia": {
        "pts": 7697,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 268,
    "name": "Aline Cardoso",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2948,
        "monthlyGain": 238
      },
      "Endocrinologia": {
        "pts": 9443,
        "monthlyGain": 196
      },
      "Nutrição": {
        "pts": 7366,
        "monthlyGain": 218
      },
      "Odontologia": {
        "pts": 4244,
        "monthlyGain": 154
      },
      "Psicologia": {
        "pts": 365,
        "monthlyGain": 135
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 269,
    "name": "Paulo Costa",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 3912,
        "monthlyGain": 243
      },
      "Endocrinologia": {
        "pts": 4382,
        "monthlyGain": 6
      },
      "Nutrição": {
        "pts": 2843,
        "monthlyGain": 6
      },
      "Odontologia": {
        "pts": 3182,
        "monthlyGain": 151
      },
      "Psicologia": {
        "pts": 3192,
        "monthlyGain": 121
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 270,
    "name": "Larissa Teixeira",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2406,
        "monthlyGain": 68
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9888,
        "monthlyGain": 234
      },
      "Psicologia": {
        "pts": 7809,
        "monthlyGain": 219
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 271,
    "name": "Paulo Nogueira",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 3027,
        "monthlyGain": 142
      },
      "Endocrinologia": {
        "pts": 9335,
        "monthlyGain": 292
      },
      "Nutrição": {
        "pts": 3153,
        "monthlyGain": 292
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 272,
    "name": "Larissa Alves",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 287,
        "monthlyGain": 228
      },
      "Endocrinologia": {
        "pts": 724,
        "monthlyGain": 32
      },
      "Nutrição": {
        "pts": 8759,
        "monthlyGain": 89
      },
      "Odontologia": {
        "pts": 7777,
        "monthlyGain": 54
      },
      "Psicologia": {
        "pts": 7889,
        "monthlyGain": 199
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 273,
    "name": "Carlos Correia",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 3679,
        "monthlyGain": 215
      },
      "Endocrinologia": {
        "pts": 7167,
        "monthlyGain": 267
      },
      "Nutrição": {
        "pts": 9794,
        "monthlyGain": 135
      },
      "Odontologia": {
        "pts": 1283,
        "monthlyGain": 122
      },
      "Psicologia": {
        "pts": 5407,
        "monthlyGain": 136
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 274,
    "name": "Diego Rocha",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 4280,
        "monthlyGain": 107
      },
      "Endocrinologia": {
        "pts": 8111,
        "monthlyGain": 2
      },
      "Nutrição": {
        "pts": 3625,
        "monthlyGain": 121
      },
      "Odontologia": {
        "pts": 9763,
        "monthlyGain": 43
      },
      "Psicologia": {
        "pts": 2916,
        "monthlyGain": 234
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 275,
    "name": "Patricia Nogueira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 6953,
        "monthlyGain": 290
      },
      "Endocrinologia": {
        "pts": 7059,
        "monthlyGain": 267
      },
      "Nutrição": {
        "pts": 1304,
        "monthlyGain": 66
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8380,
        "monthlyGain": 209
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 276,
    "name": "Gustavo Santos",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 432,
        "monthlyGain": 209
      },
      "Endocrinologia": {
        "pts": 641,
        "monthlyGain": 17
      },
      "Nutrição": {
        "pts": 2399,
        "monthlyGain": 275
      },
      "Odontologia": {
        "pts": 2228,
        "monthlyGain": 227
      },
      "Psicologia": {
        "pts": 134,
        "monthlyGain": 116
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 277,
    "name": "Fernanda Alves",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8545,
        "monthlyGain": 236
      },
      "Nutrição": {
        "pts": 633,
        "monthlyGain": 21
      },
      "Odontologia": {
        "pts": 6054,
        "monthlyGain": 146
      },
      "Psicologia": {
        "pts": 7683,
        "monthlyGain": 111
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 278,
    "name": "Fernanda Alves",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1477,
        "monthlyGain": 107
      },
      "Nutrição": {
        "pts": 6132,
        "monthlyGain": 146
      },
      "Odontologia": {
        "pts": 2223,
        "monthlyGain": 57
      },
      "Psicologia": {
        "pts": 3212,
        "monthlyGain": 112
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 279,
    "name": "Juliana Santos",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 2501,
        "monthlyGain": 247
      },
      "Endocrinologia": {
        "pts": 2534,
        "monthlyGain": 91
      },
      "Nutrição": {
        "pts": 288,
        "monthlyGain": 18
      },
      "Odontologia": {
        "pts": 4466,
        "monthlyGain": 135
      },
      "Psicologia": {
        "pts": 367,
        "monthlyGain": 252
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 280,
    "name": "Paulo Correia",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 487,
        "monthlyGain": 89
      },
      "Endocrinologia": {
        "pts": 4221,
        "monthlyGain": 203
      },
      "Nutrição": {
        "pts": 3321,
        "monthlyGain": 57
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8409,
        "monthlyGain": 25
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 281,
    "name": "Juliana Martins",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 9498,
        "monthlyGain": 30
      },
      "Endocrinologia": {
        "pts": 9722,
        "monthlyGain": 66
      },
      "Nutrição": {
        "pts": 464,
        "monthlyGain": 142
      },
      "Odontologia": {
        "pts": 3978,
        "monthlyGain": 70
      },
      "Psicologia": {
        "pts": 7649,
        "monthlyGain": 155
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 282,
    "name": "Eduardo Souza",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 3155,
        "monthlyGain": 8
      },
      "Endocrinologia": {
        "pts": 9102,
        "monthlyGain": 192
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 4899,
        "monthlyGain": 186
      },
      "Psicologia": {
        "pts": 1051,
        "monthlyGain": 95
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 283,
    "name": "Carlos Melo",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 9474,
        "monthlyGain": 119
      },
      "Endocrinologia": {
        "pts": 4850,
        "monthlyGain": 8
      },
      "Nutrição": {
        "pts": 4337,
        "monthlyGain": 231
      },
      "Odontologia": {
        "pts": 8668,
        "monthlyGain": 275
      },
      "Psicologia": {
        "pts": 2214,
        "monthlyGain": 114
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 284,
    "name": "Camila Gomes",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 7120,
        "monthlyGain": 209
      },
      "Endocrinologia": {
        "pts": 9412,
        "monthlyGain": 200
      },
      "Nutrição": {
        "pts": 7370,
        "monthlyGain": 103
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4028,
        "monthlyGain": 211
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 285,
    "name": "Aline Pereira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 7346,
        "monthlyGain": 124
      },
      "Endocrinologia": {
        "pts": 5943,
        "monthlyGain": 8
      },
      "Nutrição": {
        "pts": 5778,
        "monthlyGain": 53
      },
      "Odontologia": {
        "pts": 3263,
        "monthlyGain": 200
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 286,
    "name": "Patricia Oliveira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 3208,
        "monthlyGain": 169
      },
      "Endocrinologia": {
        "pts": 7623,
        "monthlyGain": 155
      },
      "Nutrição": {
        "pts": 6292,
        "monthlyGain": 195
      },
      "Odontologia": {
        "pts": 7263,
        "monthlyGain": 67
      },
      "Psicologia": {
        "pts": 256,
        "monthlyGain": 161
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 287,
    "name": "Eduardo Costa",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3627,
        "monthlyGain": 90
      },
      "Odontologia": {
        "pts": 5431,
        "monthlyGain": 66
      },
      "Psicologia": {
        "pts": 9902,
        "monthlyGain": 77
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 288,
    "name": "Fernanda Pereira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 9486,
        "monthlyGain": 9
      },
      "Endocrinologia": {
        "pts": 2408,
        "monthlyGain": 243
      },
      "Nutrição": {
        "pts": 6111,
        "monthlyGain": 86
      },
      "Odontologia": {
        "pts": 4526,
        "monthlyGain": 299
      },
      "Psicologia": {
        "pts": 7330,
        "monthlyGain": 187
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 289,
    "name": "Maria Lima",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9673,
        "monthlyGain": 187
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 290,
    "name": "Diego Ribeiro",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9002,
        "monthlyGain": 139
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 291,
    "name": "Bruno Monteiro",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 462,
        "monthlyGain": 274
      },
      "Endocrinologia": {
        "pts": 2866,
        "monthlyGain": 154
      },
      "Nutrição": {
        "pts": 1320,
        "monthlyGain": 29
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6028,
        "monthlyGain": 214
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 292,
    "name": "Lucas Dias",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 1494,
        "monthlyGain": 61
      },
      "Endocrinologia": {
        "pts": 5296,
        "monthlyGain": 227
      },
      "Nutrição": {
        "pts": 2222,
        "monthlyGain": 150
      },
      "Odontologia": {
        "pts": 181,
        "monthlyGain": 42
      },
      "Psicologia": {
        "pts": 682,
        "monthlyGain": 290
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 293,
    "name": "Mariana Dias",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 5535,
        "monthlyGain": 123
      },
      "Endocrinologia": {
        "pts": 6635,
        "monthlyGain": 232
      },
      "Nutrição": {
        "pts": 4378,
        "monthlyGain": 61
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5997,
        "monthlyGain": 6
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 294,
    "name": "Mariana Lima",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 717,
        "monthlyGain": 284
      },
      "Endocrinologia": {
        "pts": 3390,
        "monthlyGain": 87
      },
      "Nutrição": {
        "pts": 6393,
        "monthlyGain": 190
      },
      "Odontologia": {
        "pts": 4084,
        "monthlyGain": 186
      },
      "Psicologia": {
        "pts": 3648,
        "monthlyGain": 75
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 295,
    "name": "Fernanda Batista",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 4636,
        "monthlyGain": 286
      },
      "Endocrinologia": {
        "pts": 8481,
        "monthlyGain": 283
      },
      "Nutrição": {
        "pts": 2895,
        "monthlyGain": 15
      },
      "Odontologia": {
        "pts": 8595,
        "monthlyGain": 75
      },
      "Psicologia": {
        "pts": 1665,
        "monthlyGain": 133
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 296,
    "name": "Ricardo Barros",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 756,
        "monthlyGain": 221
      },
      "Nutrição": {
        "pts": 593,
        "monthlyGain": 119
      },
      "Odontologia": {
        "pts": 1102,
        "monthlyGain": 18
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 297,
    "name": "Larissa Teixeira",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2599,
        "monthlyGain": 277
      },
      "Nutrição": {
        "pts": 2450,
        "monthlyGain": 102
      },
      "Odontologia": {
        "pts": 3803,
        "monthlyGain": 260
      },
      "Psicologia": {
        "pts": 3028,
        "monthlyGain": 29
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 298,
    "name": "Larissa Monteiro",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 4827,
        "monthlyGain": 31
      },
      "Endocrinologia": {
        "pts": 5813,
        "monthlyGain": 11
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2241,
        "monthlyGain": 125
      },
      "Psicologia": {
        "pts": 8944,
        "monthlyGain": 263
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 299,
    "name": "Ana Martins",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 9522,
        "monthlyGain": 228
      },
      "Endocrinologia": {
        "pts": 8717,
        "monthlyGain": 166
      },
      "Nutrição": {
        "pts": 8692,
        "monthlyGain": 140
      },
      "Odontologia": {
        "pts": 4515,
        "monthlyGain": 111
      },
      "Psicologia": {
        "pts": 1773,
        "monthlyGain": 287
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 300,
    "name": "Carlos Correia",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2391,
        "monthlyGain": 77
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2682,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": 4992,
        "monthlyGain": 241
      },
      "Psicologia": {
        "pts": 6936,
        "monthlyGain": 19
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 301,
    "name": "Lucas Santos",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 3730,
        "monthlyGain": 289
      },
      "Endocrinologia": {
        "pts": 9427,
        "monthlyGain": 73
      },
      "Nutrição": {
        "pts": 8539,
        "monthlyGain": 162
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2869,
        "monthlyGain": 277
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 302,
    "name": "Ricardo Cardoso",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2182,
        "monthlyGain": 195
      },
      "Endocrinologia": {
        "pts": 4576,
        "monthlyGain": 27
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 125,
        "monthlyGain": 209
      },
      "Psicologia": {
        "pts": 9371,
        "monthlyGain": 135
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 303,
    "name": "Paulo Ferreira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 4942,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7520,
        "monthlyGain": 280
      },
      "Odontologia": {
        "pts": 1739,
        "monthlyGain": 98
      },
      "Psicologia": {
        "pts": 2289,
        "monthlyGain": 212
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 304,
    "name": "Aline Correia",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 4527,
        "monthlyGain": 282
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1005,
        "monthlyGain": 25
      },
      "Odontologia": {
        "pts": 7752,
        "monthlyGain": 155
      },
      "Psicologia": {
        "pts": 2457,
        "monthlyGain": 216
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 305,
    "name": "Eduardo Araujo",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 1564,
        "monthlyGain": 236
      },
      "Endocrinologia": {
        "pts": 3079,
        "monthlyGain": 59
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7640,
        "monthlyGain": 203
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 306,
    "name": "Diego Araujo",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 1703,
        "monthlyGain": 80
      },
      "Endocrinologia": {
        "pts": 2868,
        "monthlyGain": 35
      },
      "Nutrição": {
        "pts": 6673,
        "monthlyGain": 125
      },
      "Odontologia": {
        "pts": 1571,
        "monthlyGain": 141
      },
      "Psicologia": {
        "pts": 2320,
        "monthlyGain": 149
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 307,
    "name": "Renata Ribeiro",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 379,
        "monthlyGain": 233
      },
      "Endocrinologia": {
        "pts": 9663,
        "monthlyGain": 106
      },
      "Nutrição": {
        "pts": 1509,
        "monthlyGain": 16
      },
      "Odontologia": {
        "pts": 2381,
        "monthlyGain": 281
      },
      "Psicologia": {
        "pts": 7932,
        "monthlyGain": 263
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 308,
    "name": "Felipe Barros",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 9050,
        "monthlyGain": 55
      },
      "Endocrinologia": {
        "pts": 3453,
        "monthlyGain": 65
      },
      "Nutrição": {
        "pts": 4526,
        "monthlyGain": 271
      },
      "Odontologia": {
        "pts": 591,
        "monthlyGain": 105
      },
      "Psicologia": {
        "pts": 1413,
        "monthlyGain": 299
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 309,
    "name": "Fernanda Cardoso",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4338,
        "monthlyGain": 140
      },
      "Endocrinologia": {
        "pts": 3047,
        "monthlyGain": 18
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1017,
        "monthlyGain": 157
      },
      "Psicologia": {
        "pts": 8574,
        "monthlyGain": 119
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 310,
    "name": "Carlos Cardoso",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 1125,
        "monthlyGain": 28
      },
      "Endocrinologia": {
        "pts": 6735,
        "monthlyGain": 192
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2775,
        "monthlyGain": 92
      },
      "Psicologia": {
        "pts": 6422,
        "monthlyGain": 104
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 311,
    "name": "Carlos Correia",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 4124,
        "monthlyGain": 229
      },
      "Endocrinologia": {
        "pts": 6584,
        "monthlyGain": 157
      },
      "Nutrição": {
        "pts": 730,
        "monthlyGain": 57
      },
      "Odontologia": {
        "pts": 7230,
        "monthlyGain": 235
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 312,
    "name": "João Ferreira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 793,
        "monthlyGain": 153
      },
      "Endocrinologia": {
        "pts": 6707,
        "monthlyGain": 50
      },
      "Nutrição": {
        "pts": 6014,
        "monthlyGain": 61
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7331,
        "monthlyGain": 279
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 313,
    "name": "Renata Silva",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 7269,
        "monthlyGain": 62
      },
      "Endocrinologia": {
        "pts": 949,
        "monthlyGain": 244
      },
      "Nutrição": {
        "pts": 1056,
        "monthlyGain": 277
      },
      "Odontologia": {
        "pts": 1519,
        "monthlyGain": 27
      },
      "Psicologia": {
        "pts": 9279,
        "monthlyGain": 244
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 314,
    "name": "Juliana Rocha",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 9157,
        "monthlyGain": 150
      },
      "Endocrinologia": {
        "pts": 9696,
        "monthlyGain": 140
      },
      "Nutrição": {
        "pts": 7973,
        "monthlyGain": 77
      },
      "Odontologia": {
        "pts": 7525,
        "monthlyGain": 96
      },
      "Psicologia": {
        "pts": 3039,
        "monthlyGain": 18
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 315,
    "name": "Fernanda Ribeiro",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 4403,
        "monthlyGain": 181
      },
      "Endocrinologia": {
        "pts": 6641,
        "monthlyGain": 13
      },
      "Nutrição": {
        "pts": 4886,
        "monthlyGain": 66
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 4088,
        "monthlyGain": 29
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 316,
    "name": "Gustavo Santos",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 3630,
        "monthlyGain": 190
      },
      "Endocrinologia": {
        "pts": 8674,
        "monthlyGain": 15
      },
      "Nutrição": {
        "pts": 5285,
        "monthlyGain": 14
      },
      "Odontologia": {
        "pts": 6878,
        "monthlyGain": 78
      },
      "Psicologia": {
        "pts": 5261,
        "monthlyGain": 135
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 317,
    "name": "Camila Lima",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 109,
        "monthlyGain": 263
      },
      "Endocrinologia": {
        "pts": 8182,
        "monthlyGain": 205
      },
      "Nutrição": {
        "pts": 5629,
        "monthlyGain": 295
      },
      "Odontologia": {
        "pts": 3474,
        "monthlyGain": 288
      },
      "Psicologia": {
        "pts": 8907,
        "monthlyGain": 227
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 318,
    "name": "Larissa Costa",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 5159,
        "monthlyGain": 23
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 9286,
        "monthlyGain": 113
      },
      "Odontologia": {
        "pts": 3410,
        "monthlyGain": 195
      },
      "Psicologia": {
        "pts": 3469,
        "monthlyGain": 112
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 319,
    "name": "Fernanda Barros",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 3839,
        "monthlyGain": 60
      },
      "Endocrinologia": {
        "pts": 7060,
        "monthlyGain": 250
      },
      "Nutrição": {
        "pts": 429,
        "monthlyGain": 257
      },
      "Odontologia": {
        "pts": 7942,
        "monthlyGain": 256
      },
      "Psicologia": {
        "pts": 7653,
        "monthlyGain": 194
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 320,
    "name": "Fernanda Araujo",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 7568,
        "monthlyGain": 275
      },
      "Endocrinologia": {
        "pts": 7872,
        "monthlyGain": 246
      },
      "Nutrição": {
        "pts": 8365,
        "monthlyGain": 50
      },
      "Odontologia": {
        "pts": 1689,
        "monthlyGain": 167
      },
      "Psicologia": {
        "pts": 8101,
        "monthlyGain": 164
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 321,
    "name": "Fernanda Santos",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5446,
        "monthlyGain": 193
      },
      "Nutrição": {
        "pts": 2237,
        "monthlyGain": 283
      },
      "Odontologia": {
        "pts": 2615,
        "monthlyGain": 172
      },
      "Psicologia": {
        "pts": 283,
        "monthlyGain": 208
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 322,
    "name": "Ricardo Correia",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 2937,
        "monthlyGain": 65
      },
      "Nutrição": {
        "pts": 8775,
        "monthlyGain": 131
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7356,
        "monthlyGain": 138
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 323,
    "name": "Fernanda Oliveira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 4552,
        "monthlyGain": 286
      },
      "Endocrinologia": {
        "pts": 1153,
        "monthlyGain": 146
      },
      "Nutrição": {
        "pts": 6673,
        "monthlyGain": 184
      },
      "Odontologia": {
        "pts": 136,
        "monthlyGain": 147
      },
      "Psicologia": {
        "pts": 4314,
        "monthlyGain": 136
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 324,
    "name": "Lucas Souza",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 301,
        "monthlyGain": 56
      },
      "Endocrinologia": {
        "pts": 6134,
        "monthlyGain": 116
      },
      "Nutrição": {
        "pts": 2591,
        "monthlyGain": 24
      },
      "Odontologia": {
        "pts": 5725,
        "monthlyGain": 174
      },
      "Psicologia": {
        "pts": 8318,
        "monthlyGain": 137
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 325,
    "name": "Ana Freitas",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 1743,
        "monthlyGain": 125
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1027,
        "monthlyGain": 248
      },
      "Odontologia": {
        "pts": 547,
        "monthlyGain": 23
      },
      "Psicologia": {
        "pts": 4974,
        "monthlyGain": 187
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 326,
    "name": "Bruno Cardoso",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 6062,
        "monthlyGain": 152
      },
      "Endocrinologia": {
        "pts": 4711,
        "monthlyGain": 131
      },
      "Nutrição": {
        "pts": 3983,
        "monthlyGain": 242
      },
      "Odontologia": {
        "pts": 5994,
        "monthlyGain": 273
      },
      "Psicologia": {
        "pts": 6794,
        "monthlyGain": 64
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 327,
    "name": "Ricardo Melo",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 2514,
        "monthlyGain": 46
      },
      "Endocrinologia": {
        "pts": 1535,
        "monthlyGain": 56
      },
      "Nutrição": {
        "pts": 2233,
        "monthlyGain": 87
      },
      "Odontologia": {
        "pts": 6087,
        "monthlyGain": 212
      },
      "Psicologia": {
        "pts": 4760,
        "monthlyGain": 26
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 328,
    "name": "Maria Batista",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 3296,
        "monthlyGain": 254
      },
      "Endocrinologia": {
        "pts": 3664,
        "monthlyGain": 296
      },
      "Nutrição": {
        "pts": 6487,
        "monthlyGain": 17
      },
      "Odontologia": {
        "pts": 2779,
        "monthlyGain": 213
      },
      "Psicologia": {
        "pts": 1615,
        "monthlyGain": 232
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 329,
    "name": "Lucas Cardoso",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 9052,
        "monthlyGain": 264
      },
      "Endocrinologia": {
        "pts": 6411,
        "monthlyGain": 263
      },
      "Nutrição": {
        "pts": 9673,
        "monthlyGain": 160
      },
      "Odontologia": {
        "pts": 5691,
        "monthlyGain": 27
      },
      "Psicologia": {
        "pts": 3556,
        "monthlyGain": 75
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 330,
    "name": "Carlos Melo",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 4723,
        "monthlyGain": 266
      },
      "Endocrinologia": {
        "pts": 4163,
        "monthlyGain": 203
      },
      "Nutrição": {
        "pts": 6983,
        "monthlyGain": 197
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1127,
        "monthlyGain": 133
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 331,
    "name": "Paulo Melo",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 6089,
        "monthlyGain": 96
      },
      "Endocrinologia": {
        "pts": 5698,
        "monthlyGain": 169
      },
      "Nutrição": {
        "pts": 1423,
        "monthlyGain": 134
      },
      "Odontologia": {
        "pts": 6834,
        "monthlyGain": 83
      },
      "Psicologia": {
        "pts": 7197,
        "monthlyGain": 173
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 332,
    "name": "Bruno Ribeiro",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 545,
        "monthlyGain": 283
      },
      "Nutrição": {
        "pts": 9382,
        "monthlyGain": 2
      },
      "Odontologia": {
        "pts": 4057,
        "monthlyGain": 65
      },
      "Psicologia": {
        "pts": 973,
        "monthlyGain": 42
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 333,
    "name": "Larissa Dias",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 7492,
        "monthlyGain": 17
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7859,
        "monthlyGain": 123
      },
      "Odontologia": {
        "pts": 3655,
        "monthlyGain": 22
      },
      "Psicologia": {
        "pts": 7639,
        "monthlyGain": 203
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 334,
    "name": "Carlos Freitas",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 9841,
        "monthlyGain": 92
      },
      "Endocrinologia": {
        "pts": 460,
        "monthlyGain": 101
      },
      "Nutrição": {
        "pts": 2919,
        "monthlyGain": 47
      },
      "Odontologia": {
        "pts": 8865,
        "monthlyGain": 146
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 335,
    "name": "Ana Dias",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 4630,
        "monthlyGain": 256
      },
      "Endocrinologia": {
        "pts": 1710,
        "monthlyGain": 230
      },
      "Nutrição": {
        "pts": 9272,
        "monthlyGain": 47
      },
      "Odontologia": {
        "pts": 7987,
        "monthlyGain": 1
      },
      "Psicologia": {
        "pts": 4532,
        "monthlyGain": 192
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 336,
    "name": "Aline Oliveira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 7202,
        "monthlyGain": 109
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 6311,
        "monthlyGain": 105
      },
      "Psicologia": {
        "pts": 9112,
        "monthlyGain": 283
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 337,
    "name": "João Santos",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2200,
        "monthlyGain": 177
      },
      "Endocrinologia": {
        "pts": 407,
        "monthlyGain": 115
      },
      "Nutrição": {
        "pts": 207,
        "monthlyGain": 119
      },
      "Odontologia": {
        "pts": 6834,
        "monthlyGain": 51
      },
      "Psicologia": {
        "pts": 7664,
        "monthlyGain": 210
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 338,
    "name": "Diego Teixeira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 4507,
        "monthlyGain": 282
      },
      "Endocrinologia": {
        "pts": 7753,
        "monthlyGain": 120
      },
      "Nutrição": {
        "pts": 8517,
        "monthlyGain": 136
      },
      "Odontologia": {
        "pts": 3634,
        "monthlyGain": 179
      },
      "Psicologia": {
        "pts": 9090,
        "monthlyGain": 47
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 339,
    "name": "Lucas Martins",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 2339,
        "monthlyGain": 141
      },
      "Endocrinologia": {
        "pts": 9926,
        "monthlyGain": 88
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1337,
        "monthlyGain": 73
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 340,
    "name": "Felipe Ferreira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 4501,
        "monthlyGain": 279
      },
      "Endocrinologia": {
        "pts": 533,
        "monthlyGain": 166
      },
      "Nutrição": {
        "pts": 7171,
        "monthlyGain": 91
      },
      "Odontologia": {
        "pts": 1757,
        "monthlyGain": 282
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 341,
    "name": "Camila Nogueira",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 8654,
        "monthlyGain": 70
      },
      "Endocrinologia": {
        "pts": 4207,
        "monthlyGain": 42
      },
      "Nutrição": {
        "pts": 7030,
        "monthlyGain": 22
      },
      "Odontologia": {
        "pts": 1893,
        "monthlyGain": 160
      },
      "Psicologia": {
        "pts": 3610,
        "monthlyGain": 226
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 342,
    "name": "Aline Freitas",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 7242,
        "monthlyGain": 207
      },
      "Endocrinologia": {
        "pts": 1474,
        "monthlyGain": 88
      },
      "Nutrição": {
        "pts": 7861,
        "monthlyGain": 247
      },
      "Odontologia": {
        "pts": 2324,
        "monthlyGain": 224
      },
      "Psicologia": {
        "pts": 2196,
        "monthlyGain": 109
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 343,
    "name": "Paulo Costa",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 1671,
        "monthlyGain": 4
      },
      "Endocrinologia": {
        "pts": 1417,
        "monthlyGain": 213
      },
      "Nutrição": {
        "pts": 4381,
        "monthlyGain": 31
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 344,
    "name": "Ana Gomes",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8370,
        "monthlyGain": 149
      },
      "Endocrinologia": {
        "pts": 6651,
        "monthlyGain": 186
      },
      "Nutrição": {
        "pts": 3224,
        "monthlyGain": 207
      },
      "Odontologia": {
        "pts": 4681,
        "monthlyGain": 193
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 345,
    "name": "Diego Barros",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3018,
        "monthlyGain": 12
      },
      "Nutrição": {
        "pts": 7056,
        "monthlyGain": 81
      },
      "Odontologia": {
        "pts": 2557,
        "monthlyGain": 3
      },
      "Psicologia": {
        "pts": 2391,
        "monthlyGain": 229
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 346,
    "name": "Renata Alves",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 5225,
        "monthlyGain": 287
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7512,
        "monthlyGain": 17
      },
      "Psicologia": {
        "pts": 3652,
        "monthlyGain": 160
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 347,
    "name": "Maria Melo",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 8183,
        "monthlyGain": 48
      },
      "Endocrinologia": {
        "pts": 3402,
        "monthlyGain": 228
      },
      "Nutrição": {
        "pts": 4330,
        "monthlyGain": 155
      },
      "Odontologia": {
        "pts": 3151,
        "monthlyGain": 44
      },
      "Psicologia": {
        "pts": 3504,
        "monthlyGain": 45
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 348,
    "name": "Eduardo Correia",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 4614,
        "monthlyGain": 105
      },
      "Endocrinologia": {
        "pts": 4847,
        "monthlyGain": 46
      },
      "Nutrição": {
        "pts": 7358,
        "monthlyGain": 209
      },
      "Odontologia": {
        "pts": 5597,
        "monthlyGain": 163
      },
      "Psicologia": {
        "pts": 2692,
        "monthlyGain": 21
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 349,
    "name": "Patricia Costa",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 6227,
        "monthlyGain": 36
      },
      "Nutrição": {
        "pts": 6561,
        "monthlyGain": 94
      },
      "Odontologia": {
        "pts": 7584,
        "monthlyGain": 262
      },
      "Psicologia": {
        "pts": 938,
        "monthlyGain": 125
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 350,
    "name": "Ana Dias",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 3657,
        "monthlyGain": 108
      },
      "Endocrinologia": {
        "pts": 7979,
        "monthlyGain": 129
      },
      "Nutrição": {
        "pts": 1153,
        "monthlyGain": 202
      },
      "Odontologia": {
        "pts": 874,
        "monthlyGain": 17
      },
      "Psicologia": {
        "pts": 3407,
        "monthlyGain": 110
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 351,
    "name": "Gustavo Batista",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 1672,
        "monthlyGain": 147
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8298,
        "monthlyGain": 249
      },
      "Psicologia": {
        "pts": 9496,
        "monthlyGain": 217
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 352,
    "name": "Ana Cardoso",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 1380,
        "monthlyGain": 243
      },
      "Endocrinologia": {
        "pts": 7224,
        "monthlyGain": 9
      },
      "Nutrição": {
        "pts": 808,
        "monthlyGain": 126
      },
      "Odontologia": {
        "pts": 8623,
        "monthlyGain": 260
      },
      "Psicologia": {
        "pts": 3260,
        "monthlyGain": 104
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 353,
    "name": "Ana Araujo",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 9352,
        "monthlyGain": 244
      },
      "Endocrinologia": {
        "pts": 433,
        "monthlyGain": 157
      },
      "Nutrição": {
        "pts": 5598,
        "monthlyGain": 68
      },
      "Odontologia": {
        "pts": 1584,
        "monthlyGain": 149
      },
      "Psicologia": {
        "pts": 4803,
        "monthlyGain": 195
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 354,
    "name": "Fernanda Cardoso",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 382,
        "monthlyGain": 279
      },
      "Endocrinologia": {
        "pts": 8046,
        "monthlyGain": 155
      },
      "Nutrição": {
        "pts": 9854,
        "monthlyGain": 12
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6274,
        "monthlyGain": 179
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 355,
    "name": "Fernanda Silva",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 4175,
        "monthlyGain": 11
      },
      "Endocrinologia": {
        "pts": 8895,
        "monthlyGain": 214
      },
      "Nutrição": {
        "pts": 8816,
        "monthlyGain": 60
      },
      "Odontologia": {
        "pts": 5528,
        "monthlyGain": 183
      },
      "Psicologia": {
        "pts": 9283,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 356,
    "name": "Patricia Santos",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 5502,
        "monthlyGain": 119
      },
      "Endocrinologia": {
        "pts": 365,
        "monthlyGain": 78
      },
      "Nutrição": {
        "pts": 4605,
        "monthlyGain": 227
      },
      "Odontologia": {
        "pts": 7148,
        "monthlyGain": 172
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 357,
    "name": "Diego Cardoso",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 5718,
        "monthlyGain": 108
      },
      "Endocrinologia": {
        "pts": 8453,
        "monthlyGain": 158
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9863,
        "monthlyGain": 225
      },
      "Psicologia": {
        "pts": 9448,
        "monthlyGain": 213
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 358,
    "name": "Camila Gomes",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7803,
        "monthlyGain": 205
      },
      "Nutrição": {
        "pts": 2525,
        "monthlyGain": 161
      },
      "Odontologia": {
        "pts": 7907,
        "monthlyGain": 43
      },
      "Psicologia": {
        "pts": 4061,
        "monthlyGain": 181
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 359,
    "name": "Paulo Freitas",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 8025,
        "monthlyGain": 64
      },
      "Endocrinologia": {
        "pts": 5714,
        "monthlyGain": 155
      },
      "Nutrição": {
        "pts": 1362,
        "monthlyGain": 285
      },
      "Odontologia": {
        "pts": 1710,
        "monthlyGain": 250
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 360,
    "name": "Eduardo Teixeira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3465,
        "monthlyGain": 298
      },
      "Endocrinologia": {
        "pts": 5161,
        "monthlyGain": 38
      },
      "Nutrição": {
        "pts": 5896,
        "monthlyGain": 111
      },
      "Odontologia": {
        "pts": 3587,
        "monthlyGain": 297
      },
      "Psicologia": {
        "pts": 1233,
        "monthlyGain": 166
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 361,
    "name": "Carlos Teixeira",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 565,
        "monthlyGain": 267
      },
      "Nutrição": {
        "pts": 3323,
        "monthlyGain": 177
      },
      "Odontologia": {
        "pts": 7992,
        "monthlyGain": 271
      },
      "Psicologia": {
        "pts": 2171,
        "monthlyGain": 156
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 362,
    "name": "Diego Lima",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 1147,
        "monthlyGain": 93
      },
      "Endocrinologia": {
        "pts": 3488,
        "monthlyGain": 238
      },
      "Nutrição": {
        "pts": 3980,
        "monthlyGain": 57
      },
      "Odontologia": {
        "pts": 8863,
        "monthlyGain": 249
      },
      "Psicologia": {
        "pts": 123,
        "monthlyGain": 189
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 363,
    "name": "Bruno Nogueira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 8441,
        "monthlyGain": 199
      },
      "Endocrinologia": {
        "pts": 5691,
        "monthlyGain": 186
      },
      "Nutrição": {
        "pts": 5506,
        "monthlyGain": 92
      },
      "Odontologia": {
        "pts": 6261,
        "monthlyGain": 0
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 364,
    "name": "Bruno Alves",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5086,
        "monthlyGain": 258
      },
      "Nutrição": {
        "pts": 7738,
        "monthlyGain": 118
      },
      "Odontologia": {
        "pts": 1100,
        "monthlyGain": 77
      },
      "Psicologia": {
        "pts": 1062,
        "monthlyGain": 57
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 365,
    "name": "Eduardo Correia",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 2585,
        "monthlyGain": 145
      },
      "Endocrinologia": {
        "pts": 1570,
        "monthlyGain": 51
      },
      "Nutrição": {
        "pts": 1282,
        "monthlyGain": 210
      },
      "Odontologia": {
        "pts": 7642,
        "monthlyGain": 238
      },
      "Psicologia": {
        "pts": 2565,
        "monthlyGain": 158
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 366,
    "name": "Eduardo Teixeira",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 7157,
        "monthlyGain": 246
      },
      "Nutrição": {
        "pts": 8855,
        "monthlyGain": 269
      },
      "Odontologia": {
        "pts": 5923,
        "monthlyGain": 264
      },
      "Psicologia": {
        "pts": 988,
        "monthlyGain": 294
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 367,
    "name": "Fernanda Oliveira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 7098,
        "monthlyGain": 96
      },
      "Endocrinologia": {
        "pts": 6075,
        "monthlyGain": 58
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7240,
        "monthlyGain": 135
      },
      "Psicologia": {
        "pts": 2110,
        "monthlyGain": 61
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 368,
    "name": "Ricardo Martins",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1565,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3150,
        "monthlyGain": 272
      },
      "Odontologia": {
        "pts": 7040,
        "monthlyGain": 184
      },
      "Psicologia": {
        "pts": 3863,
        "monthlyGain": 10
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 369,
    "name": "Diego Carvalho",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 2948,
        "monthlyGain": 92
      },
      "Endocrinologia": {
        "pts": 7591,
        "monthlyGain": 26
      },
      "Nutrição": {
        "pts": 1599,
        "monthlyGain": 270
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 9699,
        "monthlyGain": 106
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 370,
    "name": "Aline Correia",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 9824,
        "monthlyGain": 244
      },
      "Endocrinologia": {
        "pts": 7749,
        "monthlyGain": 80
      },
      "Nutrição": {
        "pts": 8338,
        "monthlyGain": 4
      },
      "Odontologia": {
        "pts": 7188,
        "monthlyGain": 155
      },
      "Psicologia": {
        "pts": 7977,
        "monthlyGain": 194
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 371,
    "name": "Ana Oliveira",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 4114,
        "monthlyGain": 118
      },
      "Endocrinologia": {
        "pts": 9545,
        "monthlyGain": 229
      },
      "Nutrição": {
        "pts": 7045,
        "monthlyGain": 44
      },
      "Odontologia": {
        "pts": 7266,
        "monthlyGain": 98
      },
      "Psicologia": {
        "pts": 159,
        "monthlyGain": 2
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 372,
    "name": "Paulo Monteiro",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 9110,
        "monthlyGain": 6
      },
      "Endocrinologia": {
        "pts": 2847,
        "monthlyGain": 138
      },
      "Nutrição": {
        "pts": 356,
        "monthlyGain": 278
      },
      "Odontologia": {
        "pts": 1171,
        "monthlyGain": 68
      },
      "Psicologia": {
        "pts": 6624,
        "monthlyGain": 204
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 373,
    "name": "Bruno Silva",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 397,
        "monthlyGain": 246
      },
      "Endocrinologia": {
        "pts": 2524,
        "monthlyGain": 236
      },
      "Nutrição": {
        "pts": 6766,
        "monthlyGain": 123
      },
      "Odontologia": {
        "pts": 3631,
        "monthlyGain": 280
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 374,
    "name": "Paulo Ferreira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 6941,
        "monthlyGain": 113
      },
      "Endocrinologia": {
        "pts": 8375,
        "monthlyGain": 60
      },
      "Nutrição": {
        "pts": 1862,
        "monthlyGain": 216
      },
      "Odontologia": {
        "pts": 3573,
        "monthlyGain": 43
      },
      "Psicologia": {
        "pts": 2746,
        "monthlyGain": 44
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 375,
    "name": "João Costa",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 6091,
        "monthlyGain": 92
      },
      "Endocrinologia": {
        "pts": 5134,
        "monthlyGain": 68
      },
      "Nutrição": {
        "pts": 5587,
        "monthlyGain": 43
      },
      "Odontologia": {
        "pts": 1505,
        "monthlyGain": 50
      },
      "Psicologia": {
        "pts": 7497,
        "monthlyGain": 137
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 376,
    "name": "Larissa Araujo",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 2166,
        "monthlyGain": 69
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 8718,
        "monthlyGain": 232
      },
      "Odontologia": {
        "pts": 1221,
        "monthlyGain": 207
      },
      "Psicologia": {
        "pts": 7603,
        "monthlyGain": 101
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 377,
    "name": "Juliana Nogueira",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 419,
        "monthlyGain": 14
      },
      "Endocrinologia": {
        "pts": 2252,
        "monthlyGain": 58
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 3709,
        "monthlyGain": 27
      },
      "Psicologia": {
        "pts": 842,
        "monthlyGain": 128
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 378,
    "name": "Bruno Santos",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 6842,
        "monthlyGain": 250
      },
      "Endocrinologia": {
        "pts": 2759,
        "monthlyGain": 258
      },
      "Nutrição": {
        "pts": 4707,
        "monthlyGain": 36
      },
      "Odontologia": {
        "pts": 3088,
        "monthlyGain": 164
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 379,
    "name": "Larissa Martins",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 2710,
        "monthlyGain": 215
      },
      "Endocrinologia": {
        "pts": 7538,
        "monthlyGain": 137
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9300,
        "monthlyGain": 113
      },
      "Psicologia": {
        "pts": 9321,
        "monthlyGain": 238
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 380,
    "name": "Gustavo Barros",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4411,
        "monthlyGain": 75
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4369,
        "monthlyGain": 101
      },
      "Odontologia": {
        "pts": 5067,
        "monthlyGain": 292
      },
      "Psicologia": {
        "pts": 5954,
        "monthlyGain": 296
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 381,
    "name": "Diego Melo",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 3275,
        "monthlyGain": 142
      },
      "Endocrinologia": {
        "pts": 9689,
        "monthlyGain": 2
      },
      "Nutrição": {
        "pts": 7429,
        "monthlyGain": 299
      },
      "Odontologia": {
        "pts": 5456,
        "monthlyGain": 217
      },
      "Psicologia": {
        "pts": 8099,
        "monthlyGain": 149
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 382,
    "name": "Gustavo Correia",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 2799,
        "monthlyGain": 257
      },
      "Endocrinologia": {
        "pts": 2197,
        "monthlyGain": 269
      },
      "Nutrição": {
        "pts": 141,
        "monthlyGain": 166
      },
      "Odontologia": {
        "pts": 9043,
        "monthlyGain": 133
      },
      "Psicologia": {
        "pts": 458,
        "monthlyGain": 156
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 383,
    "name": "Gustavo Rocha",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 7399,
        "monthlyGain": 195
      },
      "Endocrinologia": {
        "pts": 5038,
        "monthlyGain": 63
      },
      "Nutrição": {
        "pts": 6090,
        "monthlyGain": 209
      },
      "Odontologia": {
        "pts": 2786,
        "monthlyGain": 160
      },
      "Psicologia": {
        "pts": 2636,
        "monthlyGain": 91
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 384,
    "name": "Renata Costa",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 8349,
        "monthlyGain": 180
      },
      "Endocrinologia": {
        "pts": 723,
        "monthlyGain": 264
      },
      "Nutrição": {
        "pts": 7570,
        "monthlyGain": 251
      },
      "Odontologia": {
        "pts": 7982,
        "monthlyGain": 220
      },
      "Psicologia": {
        "pts": 6416,
        "monthlyGain": 105
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 385,
    "name": "Paulo Martins",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 7487,
        "monthlyGain": 268
      },
      "Endocrinologia": {
        "pts": 3444,
        "monthlyGain": 156
      },
      "Nutrição": {
        "pts": 3463,
        "monthlyGain": 154
      },
      "Odontologia": {
        "pts": 5953,
        "monthlyGain": 246
      },
      "Psicologia": {
        "pts": 601,
        "monthlyGain": 247
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 386,
    "name": "Diego Ferreira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 911,
        "monthlyGain": 245
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 9888,
        "monthlyGain": 123
      },
      "Odontologia": {
        "pts": 5478,
        "monthlyGain": 157
      },
      "Psicologia": {
        "pts": 3890,
        "monthlyGain": 97
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 387,
    "name": "Mariana Cardoso",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 3204,
        "monthlyGain": 282
      },
      "Endocrinologia": {
        "pts": 3492,
        "monthlyGain": 24
      },
      "Nutrição": {
        "pts": 5277,
        "monthlyGain": 47
      },
      "Odontologia": {
        "pts": 8602,
        "monthlyGain": 61
      },
      "Psicologia": {
        "pts": 9359,
        "monthlyGain": 68
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 388,
    "name": "Mariana Carvalho",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 2822,
        "monthlyGain": 285
      },
      "Endocrinologia": {
        "pts": 1015,
        "monthlyGain": 113
      },
      "Nutrição": {
        "pts": 8019,
        "monthlyGain": 124
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2779,
        "monthlyGain": 134
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 389,
    "name": "João Pereira",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 2868,
        "monthlyGain": 75
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1042,
        "monthlyGain": 154
      },
      "Psicologia": {
        "pts": 2496,
        "monthlyGain": 274
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 390,
    "name": "Diego Gomes",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 2843,
        "monthlyGain": 151
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8226,
        "monthlyGain": 263
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 391,
    "name": "Mariana Martins",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1691,
        "monthlyGain": 252
      },
      "Nutrição": {
        "pts": 3089,
        "monthlyGain": 243
      },
      "Odontologia": {
        "pts": 3619,
        "monthlyGain": 122
      },
      "Psicologia": {
        "pts": 8185,
        "monthlyGain": 7
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 392,
    "name": "Gustavo Nogueira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3631,
        "monthlyGain": 156
      },
      "Nutrição": {
        "pts": 9491,
        "monthlyGain": 203
      },
      "Odontologia": {
        "pts": 9689,
        "monthlyGain": 163
      },
      "Psicologia": {
        "pts": 9719,
        "monthlyGain": 290
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 393,
    "name": "Patricia Correia",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 7866,
        "monthlyGain": 41
      },
      "Endocrinologia": {
        "pts": 8232,
        "monthlyGain": 185
      },
      "Nutrição": {
        "pts": 8197,
        "monthlyGain": 183
      },
      "Odontologia": {
        "pts": 9586,
        "monthlyGain": 87
      },
      "Psicologia": {
        "pts": 6119,
        "monthlyGain": 222
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 394,
    "name": "Patricia Freitas",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 3626,
        "monthlyGain": 109
      },
      "Endocrinologia": {
        "pts": 3924,
        "monthlyGain": 13
      },
      "Nutrição": {
        "pts": 6027,
        "monthlyGain": 189
      },
      "Odontologia": {
        "pts": 5395,
        "monthlyGain": 258
      },
      "Psicologia": {
        "pts": 5353,
        "monthlyGain": 243
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 395,
    "name": "Diego Melo",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 1478,
        "monthlyGain": 37
      },
      "Endocrinologia": {
        "pts": 8823,
        "monthlyGain": 241
      },
      "Nutrição": {
        "pts": 3733,
        "monthlyGain": 25
      },
      "Odontologia": {
        "pts": 9899,
        "monthlyGain": 77
      },
      "Psicologia": {
        "pts": 699,
        "monthlyGain": 108
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 396,
    "name": "Ana Oliveira",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 1507,
        "monthlyGain": 53
      },
      "Endocrinologia": {
        "pts": 6995,
        "monthlyGain": 233
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7652,
        "monthlyGain": 75
      },
      "Psicologia": {
        "pts": 3258,
        "monthlyGain": 9
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 397,
    "name": "João Ribeiro",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 4219,
        "monthlyGain": 295
      },
      "Endocrinologia": {
        "pts": 5991,
        "monthlyGain": 96
      },
      "Nutrição": {
        "pts": 5236,
        "monthlyGain": 226
      },
      "Odontologia": {
        "pts": 8235,
        "monthlyGain": 188
      },
      "Psicologia": {
        "pts": 6033,
        "monthlyGain": 207
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 398,
    "name": "Mariana Costa",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5359,
        "monthlyGain": 139
      },
      "Endocrinologia": {
        "pts": 7397,
        "monthlyGain": 252
      },
      "Nutrição": {
        "pts": 225,
        "monthlyGain": 198
      },
      "Odontologia": {
        "pts": 5755,
        "monthlyGain": 127
      },
      "Psicologia": {
        "pts": 8545,
        "monthlyGain": 187
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 399,
    "name": "Patricia Pereira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3180,
        "monthlyGain": 13
      },
      "Endocrinologia": {
        "pts": 2567,
        "monthlyGain": 213
      },
      "Nutrição": {
        "pts": 6581,
        "monthlyGain": 12
      },
      "Odontologia": {
        "pts": 9088,
        "monthlyGain": 33
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 400,
    "name": "Carlos Souza",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": 1474,
        "monthlyGain": 190
      },
      "Endocrinologia": {
        "pts": 6261,
        "monthlyGain": 80
      },
      "Nutrição": {
        "pts": 712,
        "monthlyGain": 47
      },
      "Odontologia": {
        "pts": 8710,
        "monthlyGain": 269
      },
      "Psicologia": {
        "pts": 1172,
        "monthlyGain": 272
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 401,
    "name": "Maria Teixeira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1164,
        "monthlyGain": 6
      },
      "Endocrinologia": {
        "pts": 1242,
        "monthlyGain": 54
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 2251,
        "monthlyGain": 72
      },
      "Psicologia": {
        "pts": 2027,
        "monthlyGain": 149
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 402,
    "name": "Fernanda Souza",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 8872,
        "monthlyGain": 125
      },
      "Endocrinologia": {
        "pts": 3612,
        "monthlyGain": 107
      },
      "Nutrição": {
        "pts": 2908,
        "monthlyGain": 188
      },
      "Odontologia": {
        "pts": 6911,
        "monthlyGain": 215
      },
      "Psicologia": {
        "pts": 2187,
        "monthlyGain": 292
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 403,
    "name": "Paulo Nogueira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 8084,
        "monthlyGain": 64
      },
      "Endocrinologia": {
        "pts": 9245,
        "monthlyGain": 113
      },
      "Nutrição": {
        "pts": 2831,
        "monthlyGain": 267
      },
      "Odontologia": {
        "pts": 2045,
        "monthlyGain": 34
      },
      "Psicologia": {
        "pts": 3290,
        "monthlyGain": 85
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 404,
    "name": "Bruno Costa",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 2253,
        "monthlyGain": 207
      },
      "Endocrinologia": {
        "pts": 4382,
        "monthlyGain": 275
      },
      "Nutrição": {
        "pts": 2088,
        "monthlyGain": 89
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6235,
        "monthlyGain": 148
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 405,
    "name": "João Carvalho",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 1699,
        "monthlyGain": 11
      },
      "Endocrinologia": {
        "pts": 3552,
        "monthlyGain": 128
      },
      "Nutrição": {
        "pts": 4315,
        "monthlyGain": 270
      },
      "Odontologia": {
        "pts": 911,
        "monthlyGain": 262
      },
      "Psicologia": {
        "pts": 7024,
        "monthlyGain": 222
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 406,
    "name": "Aline Batista",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 6686,
        "monthlyGain": 96
      },
      "Endocrinologia": {
        "pts": 7765,
        "monthlyGain": 217
      },
      "Nutrição": {
        "pts": 4740,
        "monthlyGain": 8
      },
      "Odontologia": {
        "pts": 8588,
        "monthlyGain": 76
      },
      "Psicologia": {
        "pts": 1471,
        "monthlyGain": 246
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 407,
    "name": "Renata Silva",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 2869,
        "monthlyGain": 199
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5157,
        "monthlyGain": 15
      },
      "Odontologia": {
        "pts": 6292,
        "monthlyGain": 198
      },
      "Psicologia": {
        "pts": 9653,
        "monthlyGain": 153
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 408,
    "name": "Fernanda Teixeira",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5572,
        "monthlyGain": 102
      },
      "Nutrição": {
        "pts": 1087,
        "monthlyGain": 92
      },
      "Odontologia": {
        "pts": 8150,
        "monthlyGain": 64
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 409,
    "name": "Ricardo Martins",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7372,
        "monthlyGain": 9
      },
      "Odontologia": {
        "pts": 4469,
        "monthlyGain": 141
      },
      "Psicologia": {
        "pts": 9857,
        "monthlyGain": 180
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 410,
    "name": "João Pereira",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 4311,
        "monthlyGain": 225
      },
      "Endocrinologia": {
        "pts": 164,
        "monthlyGain": 198
      },
      "Nutrição": {
        "pts": 8176,
        "monthlyGain": 55
      },
      "Odontologia": {
        "pts": 7629,
        "monthlyGain": 27
      },
      "Psicologia": {
        "pts": 9388,
        "monthlyGain": 281
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 411,
    "name": "Renata Melo",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8001,
        "monthlyGain": 43
      },
      "Nutrição": {
        "pts": 9512,
        "monthlyGain": 234
      },
      "Odontologia": {
        "pts": 260,
        "monthlyGain": 18
      },
      "Psicologia": {
        "pts": 5410,
        "monthlyGain": 143
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 412,
    "name": "Diego Alves",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3658,
        "monthlyGain": 246
      },
      "Odontologia": {
        "pts": 6595,
        "monthlyGain": 85
      },
      "Psicologia": {
        "pts": 7676,
        "monthlyGain": 11
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 413,
    "name": "Maria Rocha",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 8405,
        "monthlyGain": 209
      },
      "Endocrinologia": {
        "pts": 1053,
        "monthlyGain": 282
      },
      "Nutrição": {
        "pts": 4549,
        "monthlyGain": 240
      },
      "Odontologia": {
        "pts": 1889,
        "monthlyGain": 86
      },
      "Psicologia": {
        "pts": 7514,
        "monthlyGain": 99
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 414,
    "name": "Eduardo Cardoso",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 9720,
        "monthlyGain": 154
      },
      "Endocrinologia": {
        "pts": 6761,
        "monthlyGain": 280
      },
      "Nutrição": {
        "pts": 4339,
        "monthlyGain": 16
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 7621,
        "monthlyGain": 202
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 415,
    "name": "Bruno Costa",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 2962,
        "monthlyGain": 170
      },
      "Endocrinologia": {
        "pts": 5547,
        "monthlyGain": 39
      },
      "Nutrição": {
        "pts": 1041,
        "monthlyGain": 245
      },
      "Odontologia": {
        "pts": 3981,
        "monthlyGain": 248
      },
      "Psicologia": {
        "pts": 9176,
        "monthlyGain": 170
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 416,
    "name": "Gustavo Rocha",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 3392,
        "monthlyGain": 221
      },
      "Endocrinologia": {
        "pts": 7610,
        "monthlyGain": 192
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 5073,
        "monthlyGain": 137
      },
      "Psicologia": {
        "pts": 8195,
        "monthlyGain": 231
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 417,
    "name": "Gustavo Carvalho",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 7693,
        "monthlyGain": 193
      },
      "Endocrinologia": {
        "pts": 7985,
        "monthlyGain": 174
      },
      "Nutrição": {
        "pts": 4798,
        "monthlyGain": 196
      },
      "Odontologia": {
        "pts": 2356,
        "monthlyGain": 46
      },
      "Psicologia": {
        "pts": 5979,
        "monthlyGain": 185
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 418,
    "name": "João Carvalho",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 5454,
        "monthlyGain": 119
      },
      "Nutrição": {
        "pts": 6032,
        "monthlyGain": 175
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 612,
        "monthlyGain": 61
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 419,
    "name": "Renata Teixeira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 1775,
        "monthlyGain": 239
      },
      "Endocrinologia": {
        "pts": 8446,
        "monthlyGain": 32
      },
      "Nutrição": {
        "pts": 2684,
        "monthlyGain": 220
      },
      "Odontologia": {
        "pts": 9252,
        "monthlyGain": 205
      },
      "Psicologia": {
        "pts": 8554,
        "monthlyGain": 44
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 420,
    "name": "Felipe Gomes",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 2554,
        "monthlyGain": 229
      },
      "Endocrinologia": {
        "pts": 1233,
        "monthlyGain": 183
      },
      "Nutrição": {
        "pts": 9449,
        "monthlyGain": 158
      },
      "Odontologia": {
        "pts": 9377,
        "monthlyGain": 28
      },
      "Psicologia": {
        "pts": 7408,
        "monthlyGain": 268
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 421,
    "name": "Lucas Rocha",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 560,
        "monthlyGain": 125
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 1788,
        "monthlyGain": 77
      },
      "Odontologia": {
        "pts": 8622,
        "monthlyGain": 9
      },
      "Psicologia": {
        "pts": 9860,
        "monthlyGain": 49
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 422,
    "name": "Larissa Cardoso",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 2711,
        "monthlyGain": 18
      },
      "Endocrinologia": {
        "pts": 7825,
        "monthlyGain": 61
      },
      "Nutrição": {
        "pts": 5154,
        "monthlyGain": 236
      },
      "Odontologia": {
        "pts": 7160,
        "monthlyGain": 279
      },
      "Psicologia": {
        "pts": 6153,
        "monthlyGain": 97
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 423,
    "name": "Ana Pereira",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 1222,
        "monthlyGain": 77
      },
      "Endocrinologia": {
        "pts": 2835,
        "monthlyGain": 125
      },
      "Nutrição": {
        "pts": 4906,
        "monthlyGain": 55
      },
      "Odontologia": {
        "pts": 5798,
        "monthlyGain": 56
      },
      "Psicologia": {
        "pts": 2194,
        "monthlyGain": 86
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 424,
    "name": "Larissa Melo",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 3261,
        "monthlyGain": 123
      },
      "Endocrinologia": {
        "pts": 6139,
        "monthlyGain": 297
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 132,
        "monthlyGain": 139
      },
      "Psicologia": {
        "pts": 3537,
        "monthlyGain": 121
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 425,
    "name": "Patricia Martins",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3414,
        "monthlyGain": 222
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 5216,
        "monthlyGain": 266
      },
      "Odontologia": {
        "pts": 9726,
        "monthlyGain": 262
      },
      "Psicologia": {
        "pts": 170,
        "monthlyGain": 201
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 426,
    "name": "Camila Carvalho",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 3127,
        "monthlyGain": 155
      },
      "Endocrinologia": {
        "pts": 3343,
        "monthlyGain": 171
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 5474,
        "monthlyGain": 225
      },
      "Psicologia": {
        "pts": 4672,
        "monthlyGain": 279
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 427,
    "name": "Ricardo Gomes",
    "company": "McKesson",
    "specialties": {
      "Dermatologia": {
        "pts": 4731,
        "monthlyGain": 118
      },
      "Endocrinologia": {
        "pts": 8354,
        "monthlyGain": 114
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1600,
        "monthlyGain": 61
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 428,
    "name": "Paulo Teixeira",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 3874,
        "monthlyGain": 145
      },
      "Endocrinologia": {
        "pts": 944,
        "monthlyGain": 134
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 376,
        "monthlyGain": 15
      },
      "Psicologia": {
        "pts": 9288,
        "monthlyGain": 194
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 429,
    "name": "Fernanda Araujo",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9159,
        "monthlyGain": 11
      },
      "Nutrição": {
        "pts": 5846,
        "monthlyGain": 61
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 430,
    "name": "Mariana Oliveira",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 2609,
        "monthlyGain": 126
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 3322,
        "monthlyGain": 7
      },
      "Odontologia": {
        "pts": 3120,
        "monthlyGain": 235
      },
      "Psicologia": {
        "pts": 2912,
        "monthlyGain": 157
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 431,
    "name": "Ricardo Ribeiro",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 8660,
        "monthlyGain": 227
      },
      "Endocrinologia": {
        "pts": 346,
        "monthlyGain": 161
      },
      "Nutrição": {
        "pts": 9167,
        "monthlyGain": 246
      },
      "Odontologia": {
        "pts": 4664,
        "monthlyGain": 203
      },
      "Psicologia": {
        "pts": 7747,
        "monthlyGain": 276
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 432,
    "name": "Juliana Melo",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 9464,
        "monthlyGain": 20
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 7683,
        "monthlyGain": 182
      },
      "Odontologia": {
        "pts": 7378,
        "monthlyGain": 60
      },
      "Psicologia": {
        "pts": 1928,
        "monthlyGain": 108
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 433,
    "name": "Paulo Correia",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 4030,
        "monthlyGain": 25
      },
      "Endocrinologia": {
        "pts": 6992,
        "monthlyGain": 1
      },
      "Nutrição": {
        "pts": 2119,
        "monthlyGain": 90
      },
      "Odontologia": {
        "pts": 6655,
        "monthlyGain": 255
      },
      "Psicologia": {
        "pts": 1120,
        "monthlyGain": 216
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 434,
    "name": "Mariana Araujo",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 2385,
        "monthlyGain": 192
      },
      "Endocrinologia": {
        "pts": 5026,
        "monthlyGain": 273
      },
      "Nutrição": {
        "pts": 4289,
        "monthlyGain": 36
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 437,
        "monthlyGain": 104
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 435,
    "name": "Gustavo Teixeira",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 9840,
        "monthlyGain": 37
      },
      "Endocrinologia": {
        "pts": 5531,
        "monthlyGain": 130
      },
      "Nutrição": {
        "pts": 7442,
        "monthlyGain": 188
      },
      "Odontologia": {
        "pts": 8259,
        "monthlyGain": 82
      },
      "Psicologia": {
        "pts": 2873,
        "monthlyGain": 48
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 436,
    "name": "Aline Silva",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 7385,
        "monthlyGain": 266
      },
      "Endocrinologia": {
        "pts": 5794,
        "monthlyGain": 135
      },
      "Nutrição": {
        "pts": 2376,
        "monthlyGain": 131
      },
      "Odontologia": {
        "pts": 9008,
        "monthlyGain": 35
      },
      "Psicologia": {
        "pts": 8238,
        "monthlyGain": 251
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 437,
    "name": "Lucas Melo",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 3411,
        "monthlyGain": 23
      },
      "Endocrinologia": {
        "pts": 649,
        "monthlyGain": 102
      },
      "Nutrição": {
        "pts": 2192,
        "monthlyGain": 7
      },
      "Odontologia": {
        "pts": 6033,
        "monthlyGain": 216
      },
      "Psicologia": {
        "pts": 8154,
        "monthlyGain": 211
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 438,
    "name": "Aline Costa",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 9285,
        "monthlyGain": 180
      },
      "Endocrinologia": {
        "pts": 3777,
        "monthlyGain": 89
      },
      "Nutrição": {
        "pts": 7261,
        "monthlyGain": 123
      },
      "Odontologia": {
        "pts": 7408,
        "monthlyGain": 113
      },
      "Psicologia": {
        "pts": 8353,
        "monthlyGain": 114
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 439,
    "name": "Eduardo Correia",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 4871,
        "monthlyGain": 115
      },
      "Endocrinologia": {
        "pts": 5029,
        "monthlyGain": 281
      },
      "Nutrição": {
        "pts": 6079,
        "monthlyGain": 44
      },
      "Odontologia": {
        "pts": 7619,
        "monthlyGain": 257
      },
      "Psicologia": {
        "pts": 9384,
        "monthlyGain": 281
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 440,
    "name": "Maria Martins",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 4829,
        "monthlyGain": 216
      },
      "Endocrinologia": {
        "pts": 1705,
        "monthlyGain": 21
      },
      "Nutrição": {
        "pts": 6511,
        "monthlyGain": 155
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 6604,
        "monthlyGain": 273
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 441,
    "name": "João Freitas",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 7236,
        "monthlyGain": 98
      },
      "Endocrinologia": {
        "pts": 1095,
        "monthlyGain": 214
      },
      "Nutrição": {
        "pts": 3796,
        "monthlyGain": 12
      },
      "Odontologia": {
        "pts": 2653,
        "monthlyGain": 30
      },
      "Psicologia": {
        "pts": 7798,
        "monthlyGain": 92
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 442,
    "name": "Gustavo Nogueira",
    "company": "AmerisourceBergen",
    "specialties": {
      "Dermatologia": {
        "pts": 1705,
        "monthlyGain": 2
      },
      "Endocrinologia": {
        "pts": 6360,
        "monthlyGain": 105
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 4605,
        "monthlyGain": 31
      },
      "Psicologia": {
        "pts": 4998,
        "monthlyGain": 255
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 443,
    "name": "Eduardo Monteiro",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 2829,
        "monthlyGain": 104
      },
      "Endocrinologia": {
        "pts": 4317,
        "monthlyGain": 212
      },
      "Nutrição": {
        "pts": 3198,
        "monthlyGain": 68
      },
      "Odontologia": {
        "pts": 7787,
        "monthlyGain": 57
      },
      "Psicologia": {
        "pts": 2919,
        "monthlyGain": 179
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 444,
    "name": "Lucas Ribeiro",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 6595,
        "monthlyGain": 293
      },
      "Endocrinologia": {
        "pts": 9513,
        "monthlyGain": 174
      },
      "Nutrição": {
        "pts": 9844,
        "monthlyGain": 185
      },
      "Odontologia": {
        "pts": 7673,
        "monthlyGain": 189
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 445,
    "name": "Patricia Oliveira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 877,
        "monthlyGain": 202
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4464,
        "monthlyGain": 198
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 5461,
        "monthlyGain": 39
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 446,
    "name": "Diego Silva",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 7079,
        "monthlyGain": 78
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 571,
        "monthlyGain": 294
      },
      "Odontologia": {
        "pts": 9825,
        "monthlyGain": 235
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 447,
    "name": "Aline Souza",
    "company": "General Motors",
    "specialties": {
      "Dermatologia": {
        "pts": 8334,
        "monthlyGain": 252
      },
      "Endocrinologia": {
        "pts": 9228,
        "monthlyGain": 78
      },
      "Nutrição": {
        "pts": 6563,
        "monthlyGain": 85
      },
      "Odontologia": {
        "pts": 302,
        "monthlyGain": 48
      },
      "Psicologia": {
        "pts": 3013,
        "monthlyGain": 259
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 448,
    "name": "Felipe Alves",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 2072,
        "monthlyGain": 29
      },
      "Endocrinologia": {
        "pts": 8649,
        "monthlyGain": 208
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7153,
        "monthlyGain": 165
      },
      "Psicologia": {
        "pts": 7712,
        "monthlyGain": 210
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 449,
    "name": "Aline Rocha",
    "company": "Amazon",
    "specialties": {
      "Dermatologia": {
        "pts": 3511,
        "monthlyGain": 174
      },
      "Endocrinologia": {
        "pts": 2535,
        "monthlyGain": 188
      },
      "Nutrição": {
        "pts": 4017,
        "monthlyGain": 232
      },
      "Odontologia": {
        "pts": 6454,
        "monthlyGain": 165
      },
      "Psicologia": {
        "pts": 7433,
        "monthlyGain": 226
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 450,
    "name": "Mariana Batista",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 3784,
        "monthlyGain": 266
      },
      "Nutrição": {
        "pts": 2557,
        "monthlyGain": 179
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 8547,
        "monthlyGain": 62
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 451,
    "name": "Eduardo Araujo",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 6156,
        "monthlyGain": 44
      },
      "Endocrinologia": {
        "pts": 5341,
        "monthlyGain": 57
      },
      "Nutrição": {
        "pts": 7579,
        "monthlyGain": 164
      },
      "Odontologia": {
        "pts": 2541,
        "monthlyGain": 185
      },
      "Psicologia": {
        "pts": 124,
        "monthlyGain": 160
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 452,
    "name": "Bruno Nogueira",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 1612,
        "monthlyGain": 101
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2173,
        "monthlyGain": 226
      },
      "Odontologia": {
        "pts": 4382,
        "monthlyGain": 18
      },
      "Psicologia": {
        "pts": 294,
        "monthlyGain": 76
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 453,
    "name": "João Batista",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8378,
        "monthlyGain": 16
      },
      "Nutrição": {
        "pts": 2741,
        "monthlyGain": 134
      },
      "Odontologia": {
        "pts": 2571,
        "monthlyGain": 288
      },
      "Psicologia": {
        "pts": 5290,
        "monthlyGain": 86
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 454,
    "name": "Ricardo Santos",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 1433,
        "monthlyGain": 247
      },
      "Endocrinologia": {
        "pts": 3248,
        "monthlyGain": 190
      },
      "Nutrição": {
        "pts": 5296,
        "monthlyGain": 79
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 3418,
        "monthlyGain": 101
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 455,
    "name": "Paulo Batista",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 9962,
        "monthlyGain": 228
      },
      "Endocrinologia": {
        "pts": 8860,
        "monthlyGain": 242
      },
      "Nutrição": {
        "pts": 9900,
        "monthlyGain": 143
      },
      "Odontologia": {
        "pts": 1846,
        "monthlyGain": 89
      },
      "Psicologia": {
        "pts": 8008,
        "monthlyGain": 228
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 456,
    "name": "Camila Martins",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 1107,
        "monthlyGain": 276
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 1678,
        "monthlyGain": 143
      },
      "Psicologia": {
        "pts": 3148,
        "monthlyGain": 89
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 457,
    "name": "João Costa",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 1776,
        "monthlyGain": 243
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7337,
        "monthlyGain": 295
      },
      "Psicologia": {
        "pts": 8001,
        "monthlyGain": 173
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 458,
    "name": "Renata Freitas",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 940,
        "monthlyGain": 97
      },
      "Endocrinologia": {
        "pts": 9873,
        "monthlyGain": 176
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 9811,
        "monthlyGain": 196
      },
      "Psicologia": {
        "pts": 2676,
        "monthlyGain": 113
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 459,
    "name": "João Cardoso",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 4743,
        "monthlyGain": 109
      },
      "Endocrinologia": {
        "pts": 823,
        "monthlyGain": 238
      },
      "Nutrição": {
        "pts": 5735,
        "monthlyGain": 234
      },
      "Odontologia": {
        "pts": 9930,
        "monthlyGain": 145
      },
      "Psicologia": {
        "pts": 658,
        "monthlyGain": 204
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 460,
    "name": "Fernanda Barros",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 259,
        "monthlyGain": 237
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2463,
        "monthlyGain": 116
      },
      "Odontologia": {
        "pts": 1124,
        "monthlyGain": 82
      },
      "Psicologia": {
        "pts": 113,
        "monthlyGain": 297
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 461,
    "name": "João Freitas",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 3409,
        "monthlyGain": 32
      },
      "Endocrinologia": {
        "pts": 2785,
        "monthlyGain": 77
      },
      "Nutrição": {
        "pts": 9855,
        "monthlyGain": 69
      },
      "Odontologia": {
        "pts": 6168,
        "monthlyGain": 54
      },
      "Psicologia": {
        "pts": 2009,
        "monthlyGain": 238
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 462,
    "name": "Fernanda Martins",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 1060,
        "monthlyGain": 66
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 6434,
        "monthlyGain": 3
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 279,
        "monthlyGain": 22
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 463,
    "name": "Bruno Pereira",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 9376,
        "monthlyGain": 224
      },
      "Endocrinologia": {
        "pts": 1140,
        "monthlyGain": 78
      },
      "Nutrição": {
        "pts": 4428,
        "monthlyGain": 216
      },
      "Odontologia": {
        "pts": 6921,
        "monthlyGain": 194
      },
      "Psicologia": {
        "pts": 8056,
        "monthlyGain": 208
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 464,
    "name": "Patricia Correia",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 575,
        "monthlyGain": 280
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 8802,
        "monthlyGain": 127
      },
      "Odontologia": {
        "pts": 8491,
        "monthlyGain": 274
      },
      "Psicologia": {
        "pts": 8471,
        "monthlyGain": 21
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 465,
    "name": "Juliana Pereira",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5216,
        "monthlyGain": 124
      },
      "Endocrinologia": {
        "pts": 9825,
        "monthlyGain": 17
      },
      "Nutrição": {
        "pts": 5587,
        "monthlyGain": 239
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 9627,
        "monthlyGain": 125
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 466,
    "name": "Paulo Barros",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 4179,
        "monthlyGain": 294
      },
      "Endocrinologia": {
        "pts": 3917,
        "monthlyGain": 186
      },
      "Nutrição": {
        "pts": 8823,
        "monthlyGain": 61
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 1890,
        "monthlyGain": 147
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 467,
    "name": "João Ferreira",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 8197,
        "monthlyGain": 81
      },
      "Endocrinologia": {
        "pts": 6282,
        "monthlyGain": 297
      },
      "Nutrição": {
        "pts": 1394,
        "monthlyGain": 192
      },
      "Odontologia": {
        "pts": 1319,
        "monthlyGain": 83
      },
      "Psicologia": {
        "pts": 594,
        "monthlyGain": 52
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 468,
    "name": "Ricardo Pereira",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 3633,
        "monthlyGain": 115
      },
      "Endocrinologia": {
        "pts": 6347,
        "monthlyGain": 40
      },
      "Nutrição": {
        "pts": 6426,
        "monthlyGain": 57
      },
      "Odontologia": {
        "pts": 7799,
        "monthlyGain": 10
      },
      "Psicologia": {
        "pts": 2952,
        "monthlyGain": 51
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 469,
    "name": "Bruno Gomes",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 2935,
        "monthlyGain": 108
      },
      "Endocrinologia": {
        "pts": 1295,
        "monthlyGain": 173
      },
      "Nutrição": {
        "pts": 3877,
        "monthlyGain": 222
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 470,
    "name": "Eduardo Martins",
    "company": "UnitedHealth Group",
    "specialties": {
      "Dermatologia": {
        "pts": 3240,
        "monthlyGain": 105
      },
      "Endocrinologia": {
        "pts": 694,
        "monthlyGain": 221
      },
      "Nutrição": {
        "pts": 7061,
        "monthlyGain": 292
      },
      "Odontologia": {
        "pts": 7425,
        "monthlyGain": 190
      },
      "Psicologia": {
        "pts": 8826,
        "monthlyGain": 280
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 471,
    "name": "João Dias",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 2996,
        "monthlyGain": 40
      },
      "Odontologia": {
        "pts": 9139,
        "monthlyGain": 243
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 472,
    "name": "Gustavo Santos",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 9104,
        "monthlyGain": 207
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4691,
        "monthlyGain": 117
      },
      "Odontologia": {
        "pts": 1063,
        "monthlyGain": 116
      },
      "Psicologia": {
        "pts": 3407,
        "monthlyGain": 63
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 473,
    "name": "Renata Souza",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 9426,
        "monthlyGain": 121
      },
      "Nutrição": {
        "pts": 3099,
        "monthlyGain": 183
      },
      "Odontologia": {
        "pts": 7981,
        "monthlyGain": 45
      },
      "Psicologia": {
        "pts": 4808,
        "monthlyGain": 184
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 474,
    "name": "Ana Correia",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 8928,
        "monthlyGain": 47
      },
      "Endocrinologia": {
        "pts": 9654,
        "monthlyGain": 277
      },
      "Nutrição": {
        "pts": 873,
        "monthlyGain": 249
      },
      "Odontologia": {
        "pts": 7572,
        "monthlyGain": 221
      },
      "Psicologia": {
        "pts": 5282,
        "monthlyGain": 202
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 475,
    "name": "João Alves",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 6473,
        "monthlyGain": 179
      },
      "Endocrinologia": {
        "pts": 7511,
        "monthlyGain": 298
      },
      "Nutrição": {
        "pts": 9580,
        "monthlyGain": 65
      },
      "Odontologia": {
        "pts": 8483,
        "monthlyGain": 176
      },
      "Psicologia": {
        "pts": 9936,
        "monthlyGain": 294
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 476,
    "name": "Ricardo Barros",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5670,
        "monthlyGain": 250
      },
      "Endocrinologia": {
        "pts": 1244,
        "monthlyGain": 59
      },
      "Nutrição": {
        "pts": 366,
        "monthlyGain": 220
      },
      "Odontologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Psicologia": {
        "pts": 2033,
        "monthlyGain": 143
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 477,
    "name": "Fernanda Santos",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 5754,
        "monthlyGain": 170
      },
      "Endocrinologia": {
        "pts": 7459,
        "monthlyGain": 56
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 8677,
        "monthlyGain": 46
      },
      "Psicologia": {
        "pts": 6457,
        "monthlyGain": 7
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 478,
    "name": "Patricia Araujo",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 6650,
        "monthlyGain": 136
      },
      "Endocrinologia": {
        "pts": 3001,
        "monthlyGain": 132
      },
      "Nutrição": {
        "pts": 7284,
        "monthlyGain": 177
      },
      "Odontologia": {
        "pts": 773,
        "monthlyGain": 290
      },
      "Psicologia": {
        "pts": 5865,
        "monthlyGain": 106
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 479,
    "name": "Fernanda Araujo",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 3724,
        "monthlyGain": 179
      },
      "Endocrinologia": {
        "pts": 3546,
        "monthlyGain": 15
      },
      "Nutrição": {
        "pts": 267,
        "monthlyGain": 199
      },
      "Odontologia": {
        "pts": 7453,
        "monthlyGain": 117
      },
      "Psicologia": {
        "pts": 542,
        "monthlyGain": 251
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 480,
    "name": "Ricardo Rocha",
    "company": "Microsoft",
    "specialties": {
      "Dermatologia": {
        "pts": 9240,
        "monthlyGain": 24
      },
      "Endocrinologia": {
        "pts": 4424,
        "monthlyGain": 224
      },
      "Nutrição": {
        "pts": 822,
        "monthlyGain": 291
      },
      "Odontologia": {
        "pts": 9585,
        "monthlyGain": 263
      },
      "Psicologia": {
        "pts": 7800,
        "monthlyGain": 82
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 481,
    "name": "Fernanda Souza",
    "company": "Costco",
    "specialties": {
      "Dermatologia": {
        "pts": 5231,
        "monthlyGain": 43
      },
      "Endocrinologia": {
        "pts": 7045,
        "monthlyGain": 59
      },
      "Nutrição": {
        "pts": 5674,
        "monthlyGain": 283
      },
      "Odontologia": {
        "pts": 5659,
        "monthlyGain": 228
      },
      "Psicologia": {
        "pts": 319,
        "monthlyGain": 4
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 482,
    "name": "Camila Araujo",
    "company": "Berkshire Hathaway",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 8096,
        "monthlyGain": 195
      },
      "Nutrição": {
        "pts": 6025,
        "monthlyGain": 268
      },
      "Odontologia": {
        "pts": 8081,
        "monthlyGain": 176
      },
      "Psicologia": {
        "pts": 2799,
        "monthlyGain": 119
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 483,
    "name": "Patricia Araujo",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 9716,
        "monthlyGain": 20
      },
      "Endocrinologia": {
        "pts": 8845,
        "monthlyGain": 215
      },
      "Nutrição": {
        "pts": 5371,
        "monthlyGain": 81
      },
      "Odontologia": {
        "pts": 6959,
        "monthlyGain": 24
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 484,
    "name": "Camila Lima",
    "company": "CVS Health",
    "specialties": {
      "Dermatologia": {
        "pts": 2563,
        "monthlyGain": 290
      },
      "Endocrinologia": {
        "pts": 1913,
        "monthlyGain": 281
      },
      "Nutrição": {
        "pts": 1293,
        "monthlyGain": 215
      },
      "Odontologia": {
        "pts": 6437,
        "monthlyGain": 143
      },
      "Psicologia": {
        "pts": 3789,
        "monthlyGain": 43
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 485,
    "name": "Gustavo Santos",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 565,
        "monthlyGain": 277
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 8395,
        "monthlyGain": 92
      },
      "Odontologia": {
        "pts": 9105,
        "monthlyGain": 181
      },
      "Psicologia": {
        "pts": null,
        "monthlyGain": null
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 486,
    "name": "Ricardo Araujo",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 8807,
        "monthlyGain": 285
      },
      "Endocrinologia": {
        "pts": 5473,
        "monthlyGain": 80
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7156,
        "monthlyGain": 194
      },
      "Psicologia": {
        "pts": 7540,
        "monthlyGain": 30
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 487,
    "name": "Carlos Teixeira",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Endocrinologia": {
        "pts": 4650,
        "monthlyGain": 91
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7530,
        "monthlyGain": 263
      },
      "Psicologia": {
        "pts": 1600,
        "monthlyGain": 268
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 488,
    "name": "Diego Ferreira",
    "company": "Exxon Mobil",
    "specialties": {
      "Dermatologia": {
        "pts": 1480,
        "monthlyGain": 276
      },
      "Endocrinologia": {
        "pts": 8035,
        "monthlyGain": 55
      },
      "Nutrição": {
        "pts": 2448,
        "monthlyGain": 242
      },
      "Odontologia": {
        "pts": 3634,
        "monthlyGain": 197
      },
      "Psicologia": {
        "pts": 1823,
        "monthlyGain": 106
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 489,
    "name": "Lucas Nogueira",
    "company": "Ford Motor",
    "specialties": {
      "Dermatologia": {
        "pts": 8625,
        "monthlyGain": 265
      },
      "Endocrinologia": {
        "pts": 4211,
        "monthlyGain": 20
      },
      "Nutrição": {
        "pts": 9354,
        "monthlyGain": 200
      },
      "Odontologia": {
        "pts": 6692,
        "monthlyGain": 41
      },
      "Psicologia": {
        "pts": 7846,
        "monthlyGain": 211
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 490,
    "name": "Bruno Martins",
    "company": "Walmart",
    "specialties": {
      "Dermatologia": {
        "pts": 7106,
        "monthlyGain": 23
      },
      "Endocrinologia": {
        "pts": 526,
        "monthlyGain": 6
      },
      "Nutrição": {
        "pts": 2666,
        "monthlyGain": 250
      },
      "Odontologia": {
        "pts": 6369,
        "monthlyGain": 88
      },
      "Psicologia": {
        "pts": 1281,
        "monthlyGain": 239
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 491,
    "name": "Ricardo Oliveira",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 4578,
        "monthlyGain": 14
      },
      "Endocrinologia": {
        "pts": 3807,
        "monthlyGain": 11
      },
      "Nutrição": {
        "pts": 7250,
        "monthlyGain": 64
      },
      "Odontologia": {
        "pts": 7764,
        "monthlyGain": 242
      },
      "Psicologia": {
        "pts": 1168,
        "monthlyGain": 208
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 492,
    "name": "Gustavo Araujo",
    "company": "Cardinal Health",
    "specialties": {
      "Dermatologia": {
        "pts": 9676,
        "monthlyGain": 98
      },
      "Endocrinologia": {
        "pts": null,
        "monthlyGain": null
      },
      "Nutrição": {
        "pts": 4693,
        "monthlyGain": 180
      },
      "Odontologia": {
        "pts": 1535,
        "monthlyGain": 208
      },
      "Psicologia": {
        "pts": 7336,
        "monthlyGain": 154
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 493,
    "name": "Patricia Nogueira",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 2372,
        "monthlyGain": 153
      },
      "Endocrinologia": {
        "pts": 3346,
        "monthlyGain": 190
      },
      "Nutrição": {
        "pts": null,
        "monthlyGain": null
      },
      "Odontologia": {
        "pts": 7708,
        "monthlyGain": 134
      },
      "Psicologia": {
        "pts": 448,
        "monthlyGain": 215
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 494,
    "name": "Bruno Carvalho",
    "company": "Cigna",
    "specialties": {
      "Dermatologia": {
        "pts": 1074,
        "monthlyGain": 272
      },
      "Endocrinologia": {
        "pts": 4283,
        "monthlyGain": 232
      },
      "Nutrição": {
        "pts": 1468,
        "monthlyGain": 96
      },
      "Odontologia": {
        "pts": 6113,
        "monthlyGain": 171
      },
      "Psicologia": {
        "pts": 8719,
        "monthlyGain": 95
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 495,
    "name": "João Costa",
    "company": "Apple",
    "specialties": {
      "Dermatologia": {
        "pts": 7380,
        "monthlyGain": 254
      },
      "Endocrinologia": {
        "pts": 7522,
        "monthlyGain": 17
      },
      "Nutrição": {
        "pts": 1857,
        "monthlyGain": 20
      },
      "Odontologia": {
        "pts": 6345,
        "monthlyGain": 141
      },
      "Psicologia": {
        "pts": 7688,
        "monthlyGain": 0
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 496,
    "name": "Ricardo Martins",
    "company": "Chevron",
    "specialties": {
      "Dermatologia": {
        "pts": 5628,
        "monthlyGain": 120
      },
      "Endocrinologia": {
        "pts": 5492,
        "monthlyGain": 260
      },
      "Nutrição": {
        "pts": 6307,
        "monthlyGain": 295
      },
      "Odontologia": {
        "pts": 3831,
        "monthlyGain": 9
      },
      "Psicologia": {
        "pts": 208,
        "monthlyGain": 242
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 497,
    "name": "Renata Carvalho",
    "company": "Alphabet (Google)",
    "specialties": {
      "Dermatologia": {
        "pts": 5243,
        "monthlyGain": 226
      },
      "Endocrinologia": {
        "pts": 7545,
        "monthlyGain": 22
      },
      "Nutrição": {
        "pts": 9155,
        "monthlyGain": 163
      },
      "Odontologia": {
        "pts": 4347,
        "monthlyGain": 138
      },
      "Psicologia": {
        "pts": 3252,
        "monthlyGain": 178
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 498,
    "name": "Carlos Cardoso",
    "company": "AT&T",
    "specialties": {
      "Dermatologia": {
        "pts": 7135,
        "monthlyGain": 244
      },
      "Endocrinologia": {
        "pts": 7903,
        "monthlyGain": 8
      },
      "Nutrição": {
        "pts": 1751,
        "monthlyGain": 222
      },
      "Odontologia": {
        "pts": 5275,
        "monthlyGain": 207
      },
      "Psicologia": {
        "pts": 6465,
        "monthlyGain": 258
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 499,
    "name": "Ana Martins",
    "company": "Verizon",
    "specialties": {
      "Dermatologia": {
        "pts": 4516,
        "monthlyGain": 94
      },
      "Endocrinologia": {
        "pts": 7449,
        "monthlyGain": 8
      },
      "Nutrição": {
        "pts": 174,
        "monthlyGain": 212
      },
      "Odontologia": {
        "pts": 7892,
        "monthlyGain": 3
      },
      "Psicologia": {
        "pts": 5092,
        "monthlyGain": 172
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  },
  {
    "id": 500,
    "name": "Bruno Rocha",
    "company": "JPMorgan Chase",
    "specialties": {
      "Dermatologia": {
        "pts": 4252,
        "monthlyGain": 46
      },
      "Endocrinologia": {
        "pts": 8519,
        "monthlyGain": 227
      },
      "Nutrição": {
        "pts": 2886,
        "monthlyGain": 26
      },
      "Odontologia": {
        "pts": 8414,
        "monthlyGain": 254
      },
      "Psicologia": {
        "pts": 2867,
        "monthlyGain": 277
      }
    },
    "avatarIcon": "bi-person-fill",
    "isCurrentUser": false
  }
];

const DoctorsData = [
  { id: 1, name: "Cora Coralina", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 2, name: "Paulo Mendes", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui'], periods: ['tarde'] },
  { id: 3, name: "Fernanda Alves", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 4, name: "Ricardo Nunes", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 5, name: "Juliana Castro", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 6, name: "João Silva", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 7, name: "Marina Rocha", specialty: "Nutrição", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde','noite'] },
  { id: 8, name: "Eduardo Teixeira", specialty: "Nutrição", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 9, name: "Patrícia Gomes", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['tarde'] },
  { id: 10, name: "Felipe Barros", specialty: "Nutrição", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['noite'] },

  { id: 11, name: "Maria Souza", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 12, name: "Lucas Ferreira", specialty: "Dermatologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 13, name: "Renata Pires", specialty: "Dermatologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['ter','qua','qui','sex'], periods: ['manha','tarde'] },
  { id: 14, name: "Bruno Carvalho", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 15, name: "Camila Duarte", specialty: "Dermatologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 16, name: "Pedro Santos", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 17, name: "André Ribeiro", specialty: "Odontologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui'], periods: ['tarde'] },
  { id: 18, name: "Vanessa Martins", specialty: "Odontologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 19, name: "Guilherme Lopes", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 20, name: "Aline Freitas", specialty: "Odontologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 21, name: "Ana Lima", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 22, name: "Beatriz Moraes", specialty: "Psicologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 23, name: "Carla Farias", specialty: "Psicologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 24, name: "Denise Albuquerque", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 25, name: "Tatiane Rezende", specialty: "Psicologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 26, name: "Rafael Nunes", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha','tarde'] },
  { id: 27, name: "Sabrina Lopes", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 28, name: "Thiago Vieira", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 29, name: "Vanessa Rocha", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 30, name: "Walter Cruz", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 31, name: "Yara Melo", specialty: "Nutrição", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 32, name: "André Farias", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 33, name: "Beatriz Ramos", specialty: "Nutrição", clinic: "Care Plus Clinic - Campo Belo", workDays: ['ter','qua','qui','sex'], periods: ['manha','tarde'] },
  { id: 34, name: "Caio Batista", specialty: "Nutrição", clinic: "Care Plus Clinic - Brooklin", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 35, name: "Daniela Moura", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 36, name: "Eduardo Pacheco", specialty: "Dermatologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 37, name: "Fernanda Rezende", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 38, name: "Gustavo Tavares", specialty: "Dermatologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 39, name: "Helena Campos", specialty: "Dermatologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 40, name: "Igor Santana", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 41, name: "Joana Ribeiro", specialty: "Odontologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 42, name: "Kleber Macedo", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 43, name: "Larissa Prado", specialty: "Odontologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 44, name: "Marcelo Diniz", specialty: "Odontologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 45, name: "Natália Queiroz", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 46, name: "Otávio Lacerda", specialty: "Psicologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha','tarde'] },
  { id: 47, name: "Paula Monteiro", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 48, name: "Rodrigo Peixoto", specialty: "Psicologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 49, name: "Simone Braga", specialty: "Psicologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 50, name: "Tiago Falcão", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 51, name: "Úrsula Pires", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 52, name: "Victor Neves", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 53, name: "Wendy Torres", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 54, name: "Xavier Mota", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 55, name: "Yasmin Coelho", specialty: "Endocrinologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 56, name: "Zeca Andrade", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 57, name: "Amanda Torres", specialty: "Nutrição", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 58, name: "Bernardo Costa", specialty: "Nutrição", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 59, name: "Camila Dias", specialty: "Nutrição", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 60, name: "Daniel Freire", specialty: "Nutrição", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 61, name: "Elaine Matos", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 62, name: "Fábio Brito", specialty: "Dermatologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 63, name: "Gisele Duarte", specialty: "Dermatologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 64, name: "Hugo Melo", specialty: "Dermatologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 65, name: "Ingrid Lopes", specialty: "Dermatologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 66, name: "Jonas Ribeiro", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 67, name: "Karina Alves", specialty: "Odontologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 68, name: "Leandro Nogueira", specialty: "Odontologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 69, name: "Mirela Pinto", specialty: "Odontologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 70, name: "Norberto Sá", specialty: "Odontologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['seg','ter','qua'], periods: ['tarde'] },

  { id: 71, name: "Patrícia Cunha", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['seg','ter','qua','qui','sex'], periods: ['manha'] },
  { id: 72, name: "Renato Guedes", specialty: "Psicologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qui','sex'], periods: ['tarde'] },
  { id: 73, name: "Silvia Porto", specialty: "Psicologia", clinic: "Care Plus Clinic - Brooklin", workDays: ['ter','qua','qui','sex'], periods: ['manha'] },
  { id: 74, name: "Tadeu Barros", specialty: "Psicologia", clinic: "Care Plus Clinic - Morumbi", workDays: ['qua','qui','sex'], periods: ['noite'] },
  { id: 75, name: "Ulyana Freitas", specialty: "Psicologia", clinic: "Care Plus Clinic - Campo Belo", workDays: ['seg','ter','qua'], periods: ['tarde'] }
];

