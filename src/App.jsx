import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { 
  LayoutDashboard, Users, Dumbbell, Calendar, DollarSign, 
  Settings, BookOpen, TrendingUp, MessageSquare, Plus,
  Search, Bell, User, ChevronRight
} from 'lucide-react';

// Components
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Library from './pages/Library';
import Calendar_ from './pages/Calendar';
import Business from './pages/Business';
import Settings_ from './pages/Settings';

const navItems = [
  { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { path: '/clients', icon: Users, label: 'Clientes' },
  { path: '/library', icon: BookOpen, label: 'Librería' },
  { path: '/calendar', icon: Calendar, label: 'Agenda' },
  { path: '/business', icon: DollarSign, label: 'Negocio' },
  { path: '/settings', icon: Settings, label: 'Configuración' },
];

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-logo">
            <span style={{ fontSize: '28px' }}>💪</span>
            <h1>FitnessPro</h1>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map(({ path, icon: Icon, label }) => (
              <NavLink 
                key={path} 
                to={path} 
                end={path === '/'}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Top Header */}
          <header className="top-header">
            <div className="search-bar">
              <Search size={20} color="#9ca3af" />
              <input type="text" placeholder="Buscar clientes, workouts..." />
            </div>
            
            <div className="user-menu">
              <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <Bell size={20} color="#6b7280" />
              </button>
              <div className="user-avatar">AR</div>
            </div>
          </header>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/library" element={<Library />} />
            <Route path="/calendar" element={<Calendar_ />} />
            <Route path="/business" element={<Business />} />
            <Route path="/settings" element={<Settings_ />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
