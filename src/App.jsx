import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';
import RoutesPage from './pages/RoutesPage';
import FavoritesPage from './pages/FavoritesPage';
import DirectoryPage from './pages/DirectoryPage';

function App() {
  return (
    <Router>
      <Header />
      
      <main className="main-content" style={{ flex: 1, position: 'relative', height: '100%', paddingTop: '60px', paddingBottom: '70px', overflowY: 'auto' }}>
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
        </Routes>
      </main>

      <BottomNav />
    </Router>
  );
}

export default App;
