import { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Clock, Users, Video, MapPin } from 'lucide-react';

const Calendar_ = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                     'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const events = [
    { day: 2, time: '09:00', client: 'María González', type: 'Personal', color: 'indigo' },
    { day: 2, time: '14:00', client: 'Carlos López', type: 'Online', color: 'green' },
    { day: 5, time: '10:00', client: 'Ana Martínez', type: 'Presencial', color: 'primary' },
    { day: 7, time: '09:00', client: 'Reunión Equipo', type: 'Team', color: 'coral' },
    { day: 9, time: '11:00', client: 'Pedro Sánchez', type: 'Nutrición', color: 'warning' },
    { day: 12, time: '15:00', client: 'Laura Torres', type: 'Personal', color: 'indigo' },
    { day: 15, time: '10:00', client: 'Jorge Reyes', type: 'Online', color: 'green' },
  ];

  const upcomingSessions = [
    { time: '09:00', client: 'María González', type: 'Personal', duration: '60 min' },
    { time: '11:00', client: 'Carlos López', type: 'Online', duration: '45 min' },
    { time: '14:00', client: 'Ana Martínez', type: 'Presencial', duration: '60 min' },
    { time: '16:00', client: 'Pedro Sánchez', type: 'Nutrición', duration: '30 min' },
  ];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Agenda</h1>
          <p className="page-subtitle">Gestiona tus sesiones y eventos</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Nueva Sesión
        </button>
      </div>

      <div className="grid-2" style={{ gridTemplateColumns: '2fr 1fr' }}>
        {/* Calendar */}
        <div className="card">
          {/* Calendar Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <button onClick={prevMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <ChevronLeft size={24} />
            </button>
            <h3 style={{ fontSize: '18px', fontWeight: '700' }}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button onClick={nextMonth} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px' }}>
            {dayNames.map((day, i) => (
              <div key={i} style={{ 
                textAlign: 'center', padding: '12px', fontWeight: '600', 
                color: 'var(--gray-500)', fontSize: '12px' 
              }}>
                {day.substring(0, 3)}
              </div>
            ))}
            
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayEvents = events.filter(e => e.day === day);
              return (
                <div 
                  key={day}
                  style={{ 
                    padding: '8px', minHeight: '80px', borderRadius: '8px',
                    background: dayEvents.length > 0 ? 'var(--primary-bg)' : 'transparent',
                    border: '1px solid var(--gray-100)'
                  }}
                >
                  <div style={{ fontWeight: '600', marginBottom: '4px' }}>{day}</div>
                  {dayEvents.slice(0, 2).map((event, j) => (
                    <div 
                      key={j}
                      style={{ 
                        fontSize: '10px', padding: '2px 4px', borderRadius: '4px',
                        background: `var(--${event.color})`,
                        color: 'white', marginBottom: '2px'
                      }}
                    >
                      {event.time} {event.client.substring(0, 8)}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Today's Sessions */}
        <div className="card">
          <h3 className="card-title">Hoy - 27 Marzo</h3>
          
          {upcomingSessions.map((session, i) => (
            <div key={i} style={{ 
              display: 'flex', gap: '12px', padding: '16px', 
              background: 'var(--gray-50)', borderRadius: '12px', marginBottom: '12px' 
            }}>
              <div style={{ 
                width: '4px', borderRadius: '2px', 
                background: session.type === 'Personal' ? 'var(--indigo)' : 
                            session.type === 'Online' ? 'var(--success)' : 'var(--primary)'
              }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', marginBottom: '4px' }}>{session.client}</div>
                <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: 'var(--gray-500)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={14} /> {session.time}
                  </span>
                  <span>{session.duration}</span>
                </div>
              </div>
              <div style={{ color: 'var(--gray-400)' }}>
                {session.type === 'Online' ? <Video size={18} /> : <MapPin size={18} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar_;
