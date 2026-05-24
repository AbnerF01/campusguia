import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { LogIn, LogOut } from 'lucide-react';
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="app-header glass">
      <div className="header-content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="/Logo_de_la_BUAP.png" 
            alt="Logo BUAP" 
            className="buap-logo"
          />
          <h1 className="header-title text-sm font-bold">CampusGuía BUAP</h1>
        </div>
        
        <div className="auth-section">
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{user.name}</span>
              <button onClick={logout} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#003b5c' }}>
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" style={{ color: '#003b5c', display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
              <LogIn size={20} /> Entrar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
