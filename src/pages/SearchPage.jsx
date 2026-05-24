import React, { useState, useContext } from 'react';
import { Search as SearchIcon, MapPin, ChevronRight, ChevronDown, Building2, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PlacesContext } from '../context/PlacesContext';
import { AuthContext } from '../context/AuthContext';
import './SearchPage.css';

const SearchPage = () => {
  const { poIs, getAllBuildings, loading } = useContext(PlacesContext);
  const { favoriteIds, toggleFavorite, user } = useContext(AuthContext);
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  const allBuildings = getAllBuildings();
  const isSearching = query.trim().length > 0;
  
  const searchResults = isSearching 
    ? allBuildings.filter(b => 
        b.name.toLowerCase().includes(query.toLowerCase()) || 
        (b.parentName && b.parentName.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  const handleSelectPlace = (lat, lng) => {
    navigate(`/?lat=${lat}&lng=${lng}`);
  };

  const toggleExpand = (id) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  return (
    <div className="search-page page-container h-full w-full flex-col">
      <div className="search-header p-4">
        <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--buap-blue)' }}>Buscar en CU</h2>
        
        <div className="search-bar glass">
          <SearchIcon size={20} color="var(--text-secondary)" />
          <input 
            type="text" 
            placeholder="Edificios, facultades (ej. ARQ3)..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input w-full"
          />
        </div>
      </div>

      <div className="results-container">
        {loading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Cargando lugares...</p>
        ) : isSearching ? (
          /* Modo Búsqueda: Lista plana de edificios encontrados */
          searchResults.length > 0 ? (
            searchResults.map(b => (
              <div 
                key={b.id} 
                className="result-item transition-all hover-scale"
              >
                <div className="result-icon" onClick={() => handleSelectPlace(b.lat, b.lng)} style={{ cursor: 'pointer' }}>
                  <MapPin size={24} color="var(--buap-gold)" />
                </div>
                <div className="result-info" onClick={() => handleSelectPlace(b.lat, b.lng)} style={{ cursor: 'pointer', flex: 1 }}>
                  <h4 className="result-name">{b.name}</h4>
                  <span className="result-category">{b.parentName}</span>
                </div>
                
                {user && (
                  <div 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(b.id); }}
                    style={{ padding: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                  >
                    <Star 
                      size={24} 
                      color={favoriteIds.includes(b.id) ? 'var(--buap-gold)' : 'var(--text-secondary)'} 
                      fill={favoriteIds.includes(b.id) ? 'var(--buap-gold)' : 'none'} 
                    />
                  </div>
                )}
                
                <ChevronRight size={20} color="var(--text-secondary)" onClick={() => handleSelectPlace(b.lat, b.lng)} style={{ cursor: 'pointer' }} />
              </div>
            ))
          ) : (
            <div className="empty-state text-center p-4 text-secondary">
              <p>No se encontraron lugares con "{query}"</p>
            </div>
          )
        ) : (
          /* Modo Normal: Lista de Facultades Expansibles */
          poIs.map(poi => (
            <div key={poi.id} className="poi-group mb-2">
              <div 
                className={`result-item transition-all ${expandedId === poi.id ? 'expanded-item' : 'hover-scale'}`}
                onClick={() => toggleExpand(poi.id)}
                style={{ marginBottom: 0 }}
              >
                <div className="result-icon">
                  <Building2 size={24} color="var(--buap-blue)" />
                </div>
                <div className="result-info">
                  <h4 className="result-name">{poi.name}</h4>
                  <span className="result-category">{poi.category} • {poi.buildings ? poi.buildings.length : 0} edificios</span>
                </div>
                {expandedId === poi.id ? <ChevronDown size={20} color="var(--text-secondary)" /> : <ChevronRight size={20} color="var(--text-secondary)" />}
              </div>

              {/* Lista anidada de edificios */}
              {expandedId === poi.id && poi.buildings && (
                <div className="buildings-list">
                  {poi.buildings.map(b => (
                    <div 
                      key={b.id} 
                      className="building-item transition-all active-scale"
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                      <div onClick={() => handleSelectPlace(b.lat, b.lng)} style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, cursor: 'pointer' }}>
                        <MapPin size={16} color="var(--buap-gold)" />
                        <span className="building-name">{b.name}</span>
                      </div>
                      
                      {user && (
                        <div 
                          onClick={(e) => { e.stopPropagation(); toggleFavorite(b.id); }}
                          style={{ padding: '8px', cursor: 'pointer' }}
                        >
                          <Star 
                            size={20} 
                            color={favoriteIds.includes(b.id) ? 'var(--buap-gold)' : 'var(--text-secondary)'} 
                            fill={favoriteIds.includes(b.id) ? 'var(--buap-gold)' : 'none'} 
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
