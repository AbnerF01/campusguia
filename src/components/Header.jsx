import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header glass">
      <div className="header-content">
        <img 
          src="/Logo_de_la_BUAP.png" 
          alt="Logo BUAP" 
          className="buap-logo"
        />
        <h1 className="header-title text-sm font-bold">CampusGuía BUAP</h1>
      </div>
    </header>
  );
};

export default Header;
