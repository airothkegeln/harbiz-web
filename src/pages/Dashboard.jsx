import { Dumbbell, Users, Calendar, DollarSign, TrendingUp, Video, Utensils, Plus } from 'lucide-react';

const Dashboard = () => {
  const quickActions = [
    { icon: Dumbbell, label: 'Crear Workout' },
    { icon: Users, label: 'Añadir Cliente' },
    { icon: Utensils, label: 'Plan Nutricional' },
    { icon: Video, label: 'Subir Video' },
  ];

  const activities = [
    { icon: Users, title: 'María González completó su workout', time: 'Hace 5 min', color: 'green' },
    { icon: Calendar, title: 'Nueva reserva: Ana Martínez - 14:00', time: 'Hace 15 min', color: 'indigo' },
    { icon: Dumbbell, title: 'Carlos López inició programa "Fuerza"', time: 'Hace 1 hora', color: 'primary' },
    { icon: DollarSign, title: 'Pago recibido - Pedro Sánchez', time: 'Hace 2 horas', color: 'coral' },
  ];

  const upcomingEvents = [
    { time: '09:00', client: 'María González', type: 'Personal', color: 'indigo' },
    { time: '11:00', client: 'Carlos López', type: 'Online', color: 'green' },
    { time: '14:00', client: 'Ana Martínez', type: 'Presencial', color: 'primary' },
    { time: '16:00', client: 'Pedro Sánchez', type: 'Nutrición', color: 'coral' },
  ];

  const stats = [
    { icon: Users, label: 'Clientes Activos', value: '24', change: '+3', color: 'primary' },
    { icon: Calendar, label: 'Sesiones Semana', value: '48', change: '+12%', color: 'indigo' },
    { icon: DollarSign, label: 'Ingresos Mes', value: '$4.2M', change: '+8%', color: 'green' },
    { icon: TrendingUp, label: 'Cumplimiento', value: '87%', change: '+5%', color: 'coral' },
  ];

  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const dates = [24, 25, 26, 27, 28, 29, 30];
  const events = [false, true, false, true, true, false, false];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">¡Hola, Andrés! 👋</h1>
          <p className="page-subtitle">Estos son los resumenes de tu negocio hoy</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Nueva Sesión
        </button>
      </div>

      {/* Quick Actions */}
      <div className="card" style={{ marginBottom: '24px' }}>
        <div className="card-header">
          <h3 className="card-title">Accesos Rápidos</h3>
        </div>
        <div className="quick-actions">
          {quickActions.map((action, i) => (
            <button key={i} className="quick-action">
              <div className="quick-action-icon">
                <action.icon size={20} />
              </div>
              <span className="quick-action-label">{action.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-icon ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid-2">
        {/* Activity Feed */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Actividad Reciente</h3>
            <button className="btn btn-secondary">Ver todo</button>
          </div>
          {activities.map((activity, i) => (
            <div key={i} className="activity-item">
              <div className={`activity-icon stat-icon ${activity.color}`}>
                <activity.icon size={16} />
              </div>
              <div className="activity-content">
                <div className="activity-title">{activity.title}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar & Events */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Próximos Eventos</h3>
            <button className="btn btn-secondary">Calendario</button>
          </div>
          
          {/* Mini Calendar */}
          <div style={{ marginBottom: '20px' }}>
            <div className="calendar-mini" style={{ marginBottom: '8px' }}>
              {days.map((d, i) => (
                <div key={i} className="calendar-day header">{d}</div>
              ))}
            </div>
            <div className="calendar-mini">
              {dates.map((d, i) => (
                <div key={i} className={`calendar-day ${events[i] ? 'has-event' : ''} ${d === 27 ? 'today' : ''}`}>
                  {d}
                </div>
              ))}
            </div>
          </div>

          {/* Events */}
          {upcomingEvents.map((event, i) => (
            <div key={i} className="activity-item" style={{ borderLeft: `3px solid var(--${event.color === 'primary' ? 'primary' : event.color === 'indigo' ? 'indigo' : event.color === 'green' ? 'success' : 'coral'})`, paddingLeft: '12px' }}>
              <div className="activity-content">
                <div className="activity-title">{event.client}</div>
                <div className="activity-time">{event.time} • {event.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
