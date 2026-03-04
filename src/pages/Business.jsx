import { DollarSign, TrendingUp, Users, Download, CreditCard } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Business = () => {
  const data = [
    { month: 'Oct', income: 2800 },
    { month: 'Nov', income: 3200 },
    { month: 'Dec', income: 2900 },
    { month: 'Ene', income: 3800 },
    { month: 'Feb', income: 4200 },
    { month: 'Mar', income: 4500 },
  ];

  const stats = [
    { icon: DollarSign, label: 'Ingresos Totales', value: '$25.2M', change: '+12%' },
    { icon: TrendingUp, label: 'Este Mes', value: '$4.5M', change: '+8%' },
    { icon: Users, label: 'Clientes Pagando', value: '18', change: '+2' },
    { icon: CreditCard, label: 'Pendiente Cobro', value: '$340K', change: '' },
  ];

  const recentPayments = [
    { client: 'María González', plan: 'Premium', amount: '$80.000', date: '2026-03-01', status: 'paid' },
    { client: 'Carlos López', plan: 'Básico', amount: '$60.000', date: '2026-03-01', status: 'pending' },
    { client: 'Ana Martínez', plan: 'Elite', amount: '$120.000', date: '2026-02-28', status: 'paid' },
    { client: 'Laura Torres', plan: 'Premium', amount: '$80.000', date: '2026-02-28', status: 'paid' },
  ];

  const products = [
    { name: 'Plan Básico', price: '$60.000', period: 'mes', clients: 8 },
    { name: 'Plan Premium', price: '$80.000', period: 'mes', clients: 12 },
    { name: 'Plan Elite', price: '$120.000', period: 'mes', clients: 5 },
  ];

  return (
    <div>
      <div className="page-header">
        <div>
          <h1 className="page-title">Negocio</h1>
          <p className="page-subtitle">Datos financieros y métricas</p>
        </div>
        <button className="btn btn-secondary">
          <Download size={18} />
          Exportar Informe
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-icon ${i === 0 ? 'primary' : i === 1 ? 'green' : i === 2 ? 'indigo' : 'coral'}`}>
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
        {/* Income Chart */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Ingresos últimos 6 meses</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="income" stroke="#ffc107" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Plans */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Planes</h3>
          </div>
          {products.map((plan, i) => (
            <div key={i} style={{ 
              display: 'flex', justifyContent: 'space-between', 
              padding: '16px', background: 'var(--gray-50)', borderRadius: '12px', marginBottom: '12px' 
            }}>
              <div>
                <div style={{ fontWeight: '600' }}>{plan.name}</div>
                <div style={{ fontSize: '13px', color: 'var(--gray-500)' }}>
                  {plan.clients} clientes
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '700', fontSize: '18px' }}>{plan.price}</div>
                <div style={{ fontSize: '12px', color: 'var(--gray-500)' }}>/{plan.period}</div>
              </div>
            </div>
          ))}
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            + Nuevo Plan
          </button>
        </div>
      </div>

      {/* Recent Payments */}
      <div className="card" style={{ marginTop: '24px' }}>
        <div className="card-header">
          <h3 className="card-title">Pagos Recientes</h3>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Plan</th>
              <th>Monto</th>
              <th>Fecha</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {recentPayments.map((payment, i) => (
              <tr key={i}>
                <td style={{ fontWeight: '600' }}>{payment.client}</td>
                <td>{payment.plan}</td>
                <td>{payment.amount}</td>
                <td>{payment.date}</td>
                <td>
                  <span className={`tag ${payment.status}`}>
                    {payment.status === 'paid' ? '✓ Pagado' : '⏳ Pendiente'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Business;
