import { NavLink } from 'react-router-dom';
import { Map, Search, BookOpen, Star, Navigation } from 'lucide-react';
import './BottomNav.css';

const BottomNav = () => {
  const navItems = [
    { id: 'map', icon: Map, label: 'Mapa', path: '/' },
    { id: 'search', icon: Search, label: 'Buscar', path: '/search' },
    { id: 'routes', icon: Navigation, label: 'Rutas', path: '/routes' },
    { id: 'favorites', icon: Star, label: 'Favoritos', path: '/favorites' },
    { id: 'directory', icon: BookOpen, label: 'Directorio', path: '/directory' },
  ];

  return (
    <nav className="bottom-nav glass">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => 
              `nav-item ${isActive ? 'active' : ''} transition-all active-scale`
            }
          >
            <div className="icon-wrapper">
              <Icon size={24} />
            </div>
            <span className="nav-label text-xs">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
