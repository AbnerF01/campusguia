import React, { useState, useEffect } from 'react';
import { MapPin, Star, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllBuildings } from '../data/places';
import './SearchPage.css'; // Reusamos los estilos

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();
  const allBuildings = getAllBuildings();

  // Cargar favoritos al inicio
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('buap_favorites') || '[]');
    setFavorites(saved);
  }, []);

  const toggleFavorite = (place) => {
    let newFavs;
    if (favorites.some(f => f.id === place.id)) {
      newFavs = favorites.filter(f => f.id !== place.id);
    } else {
      newFavs = [...favorites, place];
    }
    setFavorites(newFavs);
    localStorage.setItem('buap_favorites', JSON.stringify(newFavs));
  };

  const isFavorite = (id) => favorites.some(f => f.id === id);

  return (
    <div className="search-page page-container h-full w-full flex-col">
      <div className="search-header p-4 pb-0">
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--buap-blue)' }}>Mis Favoritos</h2>
        <p className="text-sm text-secondary mb-4">Guarda tus salones y facultades frecuentes tocando la estrella.</p>
      </div>

      <div className="results-container">
        {allBuildings.map(place => (
          <div key={place.id} className="result-item transition-all hover-scale">
            <div 
              className="result-icon" 
              onClick={() => toggleFavorite(place)}
              style={{ backgroundColor: isFavorite(place.id) ? 'var(--buap-gold)' : 'rgba(0,0,0,0.05)', cursor: 'pointer' }}
            >
              <Star 
                size={24} 
                color={isFavorite(place.id) ? 'var(--white)' : 'var(--text-secondary)'} 
                fill={isFavorite(place.id) ? 'var(--white)' : 'none'} 
              />
            </div>
            <div className="result-info" onClick={() => navigate(`/?lat=${place.lat}&lng=${place.lng}`)}>
              <h4 className="result-name">{place.name}</h4>
              <span className="result-category">{place.category}</span>
            </div>
            <ChevronRight size={20} color="var(--text-secondary)" onClick={() => navigate(`/?lat=${place.lat}&lng=${place.lng}`)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
