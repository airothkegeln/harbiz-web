import { useState } from 'react';
import { Search, Plus, MoreVertical, Mail, Phone, Filter } from 'lucide-react';

const Clients = () => {
  const [showModal, setShowModal] = useState(false);

  const clients = [
    { id: 1, name: 'María González', email: 'maria@email.com', phone: '+56912345678', plan: 'Premium', status: 'active', compliance: 92, sessions: 24 },
    { id: 2, name: 'Carlos López', email: 'carlos@email.com', phone: '+56923456789', plan: 'Básico', status: 'active', compliance: 78, sessions: 12 },
    { id: 3, name: 'Ana Martínez', email: 'ana@email.com', phone: '+56934567890', plan: 'Elite', status: 'active', compliance: 95, sessions: 48 },
    { id: 4, name: 'Pedro Sánchez', email: 'pedro@email.com', phone: '+56945678901', plan: 'Premium', status: 'inactive', compliance: 45, sessions: 8 },
    { id: 5, name: 'Laura Torres', email: 'laura@email.com', phone: '+56956789012', plan: 'Pro', status: 'active', compliance: 88, sessions: 32 },
    { id: 6, name: 'Jorge Reyes', email: 'jorge@email.com', phone: '+56967890123', plan: 'Básico', status: 'active', compliance: 65, sessions: 15 },
  ];

  const tags = ['Todos', 'Activos', 'Inactivos', 'Nuevo', 'En Riesgo'];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Clientes</h1>
          <p className="page-subtitle">Gestiona tu comunidad de clientes</p>
        </div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          <Plus size={18} />
          Añadir Cliente
        </button>
      </div>

      {/* Tags Filter */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
        {tags.map((tag, i) => (
          <button 
            key={i} 
            className={`btn ${i === 0 ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '8px 16px' }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div className="search-bar" style={{ flex: 1, maxWidth: '400px' }}>
          <Search size={20} color="#9ca3af" />
          <input type="text" placeholder="Buscar cliente..." />
        </div>
        <button className="btn btn-secondary">
          <Filter size={18} />
          Filtros
        </button>
      </div>

      {/* Clients Table */}
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Plan</th>
              <th>Cumplimiento</th>
              <th>Sesiones</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ 
                      width: '40px', height: '40px', borderRadius: '50%', 
                      background: 'var(--primary)', display: 'flex', alignItems: 'center', 
                      justifyContent: 'center', fontWeight: '700', color: 'var(--black)' 
                    }}>
                      {client.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: '600' }}>{client.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>{client.email}</div>
                    </div>
                  </div>
                </td>
                <td><span className="tag pro">{client.plan}</span></td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '60px', height: '6px', background: 'var(--gray-200)', borderRadius: '3px' }}>
                      <div style={{ 
                        width: `${client.compliance}%`, height: '100%', 
                        background: client.compliance >= 80 ? 'var(--success)' : client.compliance >= 60 ? 'var(--warning)' : 'var(--danger)',
                        borderRadius: '3px'
                      }} />
                    </div>
                    <span style={{ fontSize: '13px' }}>{client.compliance}%</span>
                  </div>
                </td>
                <td>{client.sessions}</td>
                <td>
                  <span className={`tag ${client.status}`}>
                    {client.status === 'active' ? 'Activo' : 'Inactivo'}
                  </span>
                </td>
                <td>
                  <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <MoreVertical size={18} color="#9ca3af" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Client Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h2 className="modal-title">Añadir Cliente</h2>
            <form>
              <div className="form-group">
                <label className="form-label">Nombre completo</label>
                <input type="text" className="form-input" placeholder="Juan Pérez" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" placeholder="juan@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input type="tel" className="form-input" placeholder="+56912345678" />
              </div>
              <div className="form-group">
                <label className="form-label">Plan</label>
                <select className="form-input">
                  <option>Básico - $60.000</option>
                  <option>Premium - $80.000</option>
                  <option>Elite - $120.000</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn btn-primary">
                  Añadir Cliente
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;
