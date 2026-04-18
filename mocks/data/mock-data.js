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

const RegulamentoData = {


  badges: [
    { position: 165, name: 'Maria Silva', pts: 1450, monthlyGain: 60, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 166, name: 'Carlos Souza', pts: 1320, monthlyGain: 40, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 167, name: 'Você', pts: 1250, monthlyGain: 120, avatarIcon: 'bi-person-fill', isCurrentUser: true },
    { position: 168, name: 'Jane Doe', pts: 1240, monthlyGain: 30, avatarIcon: 'bi-person-fill', isCurrentUser: false },
    { position: 169, name: 'Ana Campos', pts: 1210, monthlyGain: 20, avatarIcon: 'bi-person-fill', isCurrentUser: false }
  ],

  actions: [
    { specialty: 'Endocrinologia', icon: 'bi-heart-pulse', title: 'Avaliação de Saúde', subtitle: 'Avaliação Hormonal completa', nuts: 100, pts: 100 },
    { specialty: 'Endocrinologia', icon: 'bi-heart-pulse', title: 'Bioimpedância', subtitle: 'Realizar exame de bioimpedância', nuts: 50, pts: 50 },
    { specialty: 'Endocrinologia', icon: 'bi-heart-pulse', title: 'Calorimetria', subtitle: 'Realizar exame de calorimetria', nuts: 50, pts: 50 }
  ]
};

const SchedulingData = {
  specialties: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia'],
  defaultSpecialty: 'Endocrinologia',
  doctorBySpecialty: {
    Dermatologia: 'Dr. João Pelin',
    Endocrinologia: 'Dra. Cora Coralina',
    Nutrição: 'Nutricionista José Pereira',
    Odontologia: 'Dra. Mariana Lopes',
    Psicologia: 'Psicóloga Ana Prado'
  },
  timeSlots: [
    { id: '08:00', label: '08:00' },
    { id: '09:00', label: '09:00' },
    { id: '09:30', label: '09:30' },
    { id: '10:30', label: '10:30' },
    { id: 'encaixe', label: 'Encaixe' }
  ],
  defaultSlotId: '09:00',
  defaultDateIso: '2025-10-03',
  clinics: [
    {
      id: 'campo-belo',
      name: 'Care Plus Clinic - Campo Belo',
      detail: '500 m • Av. Ver. José Diniz, 3843'
    },
    {
      id: 'brooklin',
      name: 'Care Plus Clinic - Brooklin',
      detail: '3,5 km • Av. das Nações Unidas, 12.901'
    },
    {
      id: 'morumbi',
      name: 'Care Plus Clinic - Morumbi',
      detail: '4,4 km • Av. Roque Petroni Júnior, 1089'
    }
  ],
  defaultClinicId: 'campo-belo',
  benefits: [
    { label: 'Chegue no horário', pts: 20 },
    { label: 'Adicione no Google Calendar', pts: 30 },
    { label: 'Confirme a presença', pts: 15 },
    { label: 'Responda este questionário', pts: 25 }
  ]
};

const SpecialtiesData = {
  specialties: ['Dermatologia', 'Endocrinologia', 'Nutrição', 'Odontologia', 'Psicologia'],
  activeSpecialty: 'Endocrinologia',
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
    { id: 48, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-droplet', title: 'Rotina de skincare', subtitle: 'Realizar rotina diária de cuidados com a pele', nuts: 15, pts: 15 },
    { id: 49, specialty: 'Dermatologia', category: 'Prevenção', icon: 'bi-sun', title: 'Uso de protetor solar', subtitle: 'Aplicar protetor solar no dia', nuts: 10, pts: 10 },

    // Saúde mental
    { id: 41, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-chat-dots', title: 'Acompanhamento contínuo', subtitle: '4 consultas seguidas sem cancelar', nuts: 1000, pts: 1000 },
    { id: 47, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-journal-text', title: 'Registro emocional', subtitle: 'Preencher diário emocional', nuts: 15, pts: 15 },
    { id: 52, specialty: 'Psicologia', category: 'Saúde mental', icon: 'bi-moon-stars', title: 'Higiene do sono', subtitle: 'Seguir rotina de higiene do sono', nuts: 20, pts: 20 },

    // Extras hábitos / clínico
    { id: 42, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up', title: 'Colesterol controlado', subtitle: 'Manter níveis ideais', nuts: 100, pts: 100 },
    { id: 43, specialty: 'Endocrinologia', category: 'Exames', icon: 'bi-graph-up-arrow', title: 'Melhora do colesterol', subtitle: 'Melhorar níveis entre exames', nuts: 100, pts: 100 },
    { id: 44, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-cup-straw', title: 'Hidratação adequada', subtitle: 'Registrar consumo ideal de água no dia', nuts: 10, pts: 10 },
    { id: 45, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-egg-fried', title: 'Plano alimentar seguido', subtitle: 'Seguir plano alimentar prescrito no dia', nuts: 20, pts: 20 },
    { id: 46, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-capsule', title: 'Adesão medicamentosa', subtitle: 'Tomar medicação conforme prescrição', nuts: 20, pts: 20 },
    { id: 50, specialty: 'Endocrinologia', category: 'Hábitos', icon: 'bi-moon', title: 'Sono adequado', subtitle: 'Dormir pelo menos 7h', nuts: 20, pts: 20 },
    { id: 51, specialty: 'Nutrição', category: 'Hábitos', icon: 'bi-moon', title: 'Qualidade do sono', subtitle: 'Registrar sono adequado', nuts: 20, pts: 20 }
  ]
}