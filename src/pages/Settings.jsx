import { useState } from 'react';
import { User, Palette, Bell, Shield, CreditCard, Globe, Save } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', icon: User, label: 'Perfil' },
    { id: 'appearance', icon: Palette, label: 'Apariencia' },
    { id: 'notifications', icon: Bell, label: 'Notificaciones' },
    { id: 'security', icon: Shield, label: 'Seguridad' },
    { id: 'billing', icon: CreditCard, label: 'Facturación' },
    { id: 'integrations', icon: Globe, label: 'Integraciones' },
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Configuración</h1>
          <p className="page-subtitle">Personaliza tu cuenta y aplicación</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '24px' }}>
        {/* Tabs */}
        <div>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                border: 'none',
                background: activeTab === tab.id ? 'var(--primary)' : 'transparent',
                color: activeTab === tab.id ? 'var(--black)' : 'var(--gray-600)',
                borderRadius: '12px',
                cursor: 'pointer',
                marginBottom: '4px',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="card">
          {activeTab === 'profile' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>
                Información del Perfil
              </h3>
              <div className="form-group">
                <label className="form-label">Nombre completo</label>
                <input type="text" className="form-input" defaultValue="Andrés Rothkegel" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" defaultValue="andres@email.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Nombre del estudio</label>
                <input type="text" className="form-input" defaultValue="Fitness Pro Chile" />
              </div>
              <div className="form-group">
                <label className="form-label">Teléfono</label>
                <input type="tel" className="form-input" defaultValue="+56912345678" />
              </div>
              <button className="btn btn-primary">
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          )}

          {activeTab === 'appearance' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>
                Personalización (White-label)
              </h3>
              <div className="form-group">
                <label className="form-label">Color Principal</label>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#ffc107', cursor: 'pointer', border: '3px solid var(--gray-800)' }} />
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#4f46e5', cursor: 'pointer' }} />
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#22c55e', cursor: 'pointer' }} />
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#ef4444', cursor: 'pointer' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Logo de la App</label>
                <div style={{ 
                  padding: '40px', border: '2px dashed var(--gray-200)', 
                  borderRadius: '12px', textAlign: 'center', cursor: 'pointer' 
                }}>
                  <span style={{ color: 'var(--gray-500)' }}>Arrastra o haz clic para subir</span>
                </div>
              </div>
              <button className="btn btn-primary">
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>
                Notificaciones
              </h3>
              {[
                { label: 'Recordatorios de sesión', desc: '24h antes' },
                { label: 'Pagos recibidos', desc: 'Cuando un cliente paga' },
                { label: 'Nuevos clientes', desc: 'Cuando alguien se registra' },
                { label: 'Mensajes nuevos', desc: 'Chat con clientes' },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--gray-100)' 
                }}>
                  <div>
                    <div style={{ fontWeight: '600' }}>{item.label}</div>
                    <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>{item.desc}</div>
                  </div>
                  <label style={{ position: 'relative', width: '48px', height: '26px' }}>
                    <input type="checkbox" defaultChecked style={{ opacity: 0, width: 0, height: 0 }} />
                    <span style={{
                      position: 'absolute', cursor: 'pointer',
                      top: 0, left: 0, right: 0, bottom: 0,
                      background: 'var(--primary)', borderRadius: '26px',
                      transition: '0.3s'
                    }}>
                      <span style={{
                        position: 'absolute', height: '20px', width: '20px',
                        left: '3px', bottom: '3px', background: 'white',
                        borderRadius: '50%', transition: '0.3s'
                      }} />
                    </span>
                  </label>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'billing' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>
                Plan de Suscripción
              </h3>
              <div style={{ 
                padding: '24px', background: 'var(--primary-bg)', 
                borderRadius: '16px', border: '2px solid var(--primary)' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>Plan Actual</div>
                    <div style={{ fontSize: '24px', fontWeight: '700' }}>Pro</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '24px', fontWeight: '700' }}>$39USD</div>
                    <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>/mes</div>
                  </div>
                </div>
                <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
                  <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                    Actualizar Plan
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'integrations' && (
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>
                Integraciones
              </h3>
              {[
                { name: 'Google Calendar', status: 'connected' },
                { name: 'Zoom', status: 'disconnected' },
                { name: 'Stripe', status: 'connected' },
                { name: 'YouTube', status: 'disconnected' },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', justifyContent: 'space-between', 
                  alignItems: 'center', padding: '16px', 
                  background: 'var(--gray-50)', borderRadius: '12px', marginBottom: '12px' 
                }}>
                  <div style={{ fontWeight: '600' }}>{item.name}</div>
                  <button className={`btn ${item.status === 'connected' ? 'btn-secondary' : 'btn-primary'}`}>
                    {item.status === 'connected' ? 'Conectado' : 'Conectar'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
