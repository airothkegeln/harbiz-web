// Mock data for Harbiz

export const currentUser = {
  id: 'user-1',
  name: 'Andrés Rothkegel',
  email: 'andres@harbiz.com',
  phone: '+56912345678',
  company: 'FitPro',
  role: 'owner',
  avatar: null
};

export const quickAccessItems = [
  { id: 'qa-1', title: 'Crea con IA tu Workout', subtitle: 'Genera entrenos personalizados', icon: 'dumbbell', url: '/library' },
  { id: 'qa-2', title: 'Añade un Cliente', subtitle: 'Registra un nuevo cliente', icon: 'user-plus', url: '/clients' },
  { id: 'qa-3', title: 'Crea con IA un Plan Nutri', subtitle: 'Planifica nutrición con IA', icon: 'utensils', url: '/library' },
  { id: 'qa-4', title: 'Crea tu Programa', subtitle: 'Diseña un programa', icon: 'calendar', url: '/library' },
];

export const dashboardStats = {
  savedDays: 2.1,
  professionalsCount: 10000,
  freeDays: 30,
};

export const clients = [
  {
    id: 'c-1',
    name: 'Juan Pérez',
    email: 'juan.perez@email.com',
    phone: '+56911111111',
    tags: ['Premium', 'Nutrición'],
    professionals: ['tm-1'],
    activationDate: '2024-01-15',
    app: true,
    plan: { id: 'p-1', name: 'Premium', price: 49.90, status: 'active' },
    planStatus: 'active',
    lastPayment: '2024-03-01',
    movementCompliance: 85,
    trackingCompliance: 90,
    lastActivity: '2024-03-15',
    status: 'active',
  },
  {
    id: 'c-2',
    name: 'Sofía García',
    email: 'sofia.garcia@email.com',
    phone: '+56922222222',
    tags: ['Nuevo'],
    professionals: ['tm-1'],
    activationDate: '2024-02-20',
    app: true,
    plan: { id: 'p-2', name: 'Básico', price: 29.90, status: 'active' },
    planStatus: 'active',
    movementCompliance: 45,
    trackingCompliance: 60,
    lastActivity: '2024-03-14',
    status: 'active',
  },
  {
    id: 'c-3',
    name: 'Pedro Sánchez',
    email: 'pedro.sanchez@email.com',
    phone: '+56933333333',
    tags: ['Musculación'],
    professionals: ['tm-1'],
    activationDate: '2023-11-10',
    app: false,
    plan: { id: 'p-1', name: 'Premium', price: 49.90, status: 'active' },
    planStatus: 'active',
    movementCompliance: 95,
    trackingCompliance: 88,
    lastActivity: '2024-03-15',
    status: 'active',
  },
];

export const events = [
  { id: 'e-1', title: 'Personal Training - Juan', date: '2024-03-18', startTime: '09:00', endTime: '10:00', type: 'individual', clientId: 'c-1', clientName: 'Juan Pérez', serviceType: 'Personal Training', color: '#3B82F6' },
  { id: 'e-2', title: 'CrossFit', date: '2024-03-18', startTime: '12:00', endTime: '13:00', type: 'group', serviceType: 'CrossFit', occupancy: '6/12', color: '#F97316' },
];

export const recentActivity = [
  { id: 'a-1', type: 'task_completed', description: 'Entrenamiento completado con Juan Pérez', timestamp: '2024-03-15 15:00' },
  { id: 'a-2', type: 'client_added', description: 'Nuevo cliente añadido', timestamp: '2024-03-15 12:00' },
];

export const teamMembers = [
  { id: 'tm-1', name: 'Andrés Rothkegel', email: 'andres@harbiz.com', role: 'owner', status: 'online' },
  { id: 'tm-2', name: 'María García', email: 'maria@harbiz.com', role: 'admin', status: 'online' },
  { id: 'tm-3', name: 'Carlos López', email: 'carlos@harbiz.com', role: 'member', status: 'offline' },
];

export const exercises = [
  { id: 'ex-1', name: 'Press de banca', category: ['Pecho'], tags: ['empuje', 'bilateral'], muscleGroup: 'Pecho', level: 'intermedio' },
  { id: 'ex-2', name: 'Sentadilla', category: ['Piernas'], tags: ['bilateral'], muscleGroup: 'Cuádriceps', level: 'intermedio' },
  { id: 'ex-3', name: 'Peso muerto', category: ['Espalda'], tags: ['tracción'], muscleGroup: 'Espalda', level: 'avanzado' },
];

export const workouts = [
  { id: 'w-1', name: 'Entrenamiento Full Body', description: 'Rutina completa', exercises: [] },
];

export const recipes = [
  { id: 'r-1', name: 'Pechuga de pollo con arroz', description: 'Alta en proteínas', calories: 550, protein: 45, tags: ['almuerzo'] },
];

export const programs = [
  { id: 'pg-1', name: 'Programa Principiante', duration: 4, sessionsPerWeek: 3, visibleToClient: true },
];

export const sessionTypes = [
  { id: 'st-1', name: 'Personal Training', type: 'individual', duration: 60, capacity: 1, price: 45 },
  { id: 'st-2', name: 'CrossFit', type: 'group', duration: 60, capacity: 12, price: 15 },
];
