import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';
import RoutesPage from './pages/RoutesPage';
import FavoritesPage from './pages/FavoritesPage';
import DirectoryPage from './pages/DirectoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import { PlacesProvider } from './context/PlacesContext';

function App() {
  return (
    <AuthProvider>
      <PlacesProvider>
        <Router>
          <Header />
          
          <main className="main-content" style={{ flex: 1, position: 'relative', height: '100%', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto' }}>
            <Routes>
              <Route path="/" element={<MapPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/directory" element={<DirectoryPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>

          <BottomNav />
        </Router>
      </PlacesProvider>
    </AuthProvider>
  );
}

export default App;
