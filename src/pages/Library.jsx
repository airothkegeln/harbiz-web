import { useState } from 'react';
import { Plus, Dumbbell, Video, Utensils, FileText, Folder, Sparkles, Search, Filter } from 'lucide-react';

const Library = () => {
  const [activeTab, setActiveTab] = useState('workouts');

  const tabs = [
    { id: 'workouts', icon: Dumbbell, label: 'Workouts' },
    { id: 'videos', icon: Video, label: 'Videos' },
    { id: 'nutrition', icon: Utensils, label: 'Nutrición' },
    { id: 'programs', icon: Folder, label: 'Programas' },
    { id: 'documents', icon: FileText, label: 'Documentos' },
  ];

  const resources = [
    { id: 1, title: 'Rutina Fuerza - Principiantes', type: 'workout', exercises: 8, duration: '45 min', category: 'Fuerza' },
    { id: 2, title: 'HIIT Cardio Intenso', type: 'workout', exercises: 12, duration: '30 min', category: 'Cardio' },
    { id: 3, title: 'Yoga Flow Relax', type: 'workout', exercises: 15, duration: '60 min', category: 'Yoga' },
    { id: 4, title: 'Clase Core & Abdominales', type: 'video', duration: '20 min', views: 156 },
    { id: 5, title: 'Tutorial Sentadilla Perfecta', type: 'video', duration: '8 min', views: 342 },
    { id: 6, title: 'Plan Adelgazar 4 Semanas', type: 'nutrition', calories: 1800, meals: 5 },
    { id: 7, title: 'Dieta Ganancia Muscular', type: 'nutrition', calories: 2800, meals: 6 },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'workout': return Dumbbell;
      case 'video': return Video;
      case 'nutrition': return Utensils;
      default: return FileText;
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Librería</h1>
          <p className="page-subtitle">Gestiona tus recursos y contenido</p>
        </div>
        <button className="btn btn-primary">
          <Sparkles size={18} />
          Crear con IA
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`btn ${activeTab === tab.id ? 'btn-primary' : 'btn-secondary'}`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div className="search-bar" style={{ flex: 1, maxWidth: '400px' }}>
          <Search size={20} color="#9ca3af" />
          <input type="text" placeholder="Buscar recursos..." />
        </div>
        <button className="btn btn-secondary">
          <Filter size={18} />
          Filtros
        </button>
      </div>

      {/* Resources Grid */}
      <div className="grid-3">
        {resources.map((resource) => {
          const Icon = getIcon(resource.type);
          return (
            <div key={resource.id} className="card" style={{ cursor: 'pointer' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '12px', 
                background: 'var(--primary-bg)', display: 'flex', alignItems: 'center', 
                justifyContent: 'center', marginBottom: '16px', color: 'var(--primary-dark)'
              }}>
                <Icon size={24} />
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>
                {resource.title}
              </h3>
              <div style={{ fontSize: '13px', color: 'var(--gray-500)', display: 'flex', gap: '12px' }}>
                {resource.exercises && <span>{resource.exercises} ejercicios</span>}
                {resource.duration && <span>{resource.duration}</span>}
                {resource.calories && <span>{resource.calories} kcal</span>}
                {resource.views && <span>{resource.views} vistas</span>}
              </div>
              <div style={{ marginTop: '12px' }}>
                <span className="tag" style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>
                  {resource.category || resource.type}
                </span>
              </div>
            </div>
          );
        })}
        
        {/* Add New Card */}
        <div className="card" style={{ 
          display: 'flex', flexDirection: 'column', alignItems: 'center', 
          justifyContent: 'center', minHeight: '200px', cursor: 'pointer',
          border: '2px dashed var(--gray-200)'
        }}>
          <Plus size={32} color="#9ca3af" />
          <span style={{ marginTop: '8px', color: 'var(--gray-500)' }}>Crear Nuevo</span>
        </div>
      </div>
    </div>
  );
};

export default Library;
