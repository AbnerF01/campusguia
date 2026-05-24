import React, { useContext } from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { PlacesContext } from '../context/PlacesContext';
import { AuthContext } from '../context/AuthContext';
import './SearchPage.css';

const FavoritesPage = () => {
  const { getAllBuildings, loading: placesLoading } = useContext(PlacesContext);
  const { user, favoriteIds, loadingFavorites, toggleFavorite } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="search-page page-container h-full w-full flex-col" style={{ alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }}>
        <Star size={48} color="var(--buap-gold)" style={{ marginBottom: '20px' }} />
        <h2 className="text-xl font-bold mb-4">Inicia sesión para ver tus favoritos</h2>
        <p className="text-secondary mb-6">Guarda tus salones y edificios frecuentes para tenerlos siempre a la mano en cualquier dispositivo.</p>
        <Link to="/login" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#003b5c', color: 'white', fontWeight: 'bold', textDecoration: 'none' }}>Iniciar Sesión</Link>
      </div>
    );
  }

  if (placesLoading || loadingFavorites) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>Cargando favoritos...</div>;
  }

  const allBuildings = getAllBuildings();
  const favoritePlaces = allBuildings.filter(p => favoriteIds.includes(p.id));

  return (
    <div className="search-page page-container h-full w-full flex-col">
      <div className="search-header p-4 pb-0">
        <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--buap-blue)' }}>Mis Favoritos</h2>
        <p className="text-sm text-secondary mb-4">Tus lugares guardados.</p>
      </div>

      <div className="results-container">
        {favoritePlaces.length === 0 ? (
          <p style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>No tienes lugares guardados aún. Explora el mapa o usa el buscador para agregarlos.</p>
        ) : (
          favoritePlaces.map(place => (
            <div key={place.id} className="result-item transition-all hover-scale">
              <div 
                className="result-icon" 
                onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}
                style={{ backgroundColor: 'var(--buap-gold)', cursor: 'pointer' }}
              >
                <Star size={24} color="var(--white)" fill="var(--white)" />
              </div>
              <div className="result-info" onClick={() => navigate(`/?lat=${place.lat}&lng=${place.lng}`)}>
                <h4 className="result-name">{place.name}</h4>
                <span className="result-category">{place.parentName || place.category}</span>
              </div>
              <ChevronRight size={20} color="var(--text-secondary)" onClick={() => navigate(`/?lat=${place.lat}&lng=${place.lng}`)} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
