import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, ChevronRight, ChevronDown, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { poIs, getAllBuildings } from '../data/places';
import './SearchPage.css';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  // Si hay query, buscamos en todas las facultades y todos los edificios
  const allBuildings = getAllBuildings();
  
  const isSearching = query.trim().length > 0;
  
  const searchResults = isSearching 
    ? allBuildings.filter(b => 
        b.name.toLowerCase().includes(query.toLowerCase()) || 
        b.parentName.toLowerCase().includes(query.toLowerCase())
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
        {isSearching ? (
          /* Modo Búsqueda: Lista plana de edificios encontrados */
          searchResults.length > 0 ? (
            searchResults.map(b => (
              <div 
                key={b.id} 
                className="result-item transition-all hover-scale"
                onClick={() => handleSelectPlace(b.lat, b.lng)}
              >
                <div className="result-icon">
                  <MapPin size={24} color="var(--buap-gold)" />
                </div>
                <div className="result-info">
                  <h4 className="result-name">{b.name}</h4>
                  <span className="result-category">{b.parentName}</span>
                </div>
                <ChevronRight size={20} color="var(--text-secondary)" />
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
                      onClick={() => handleSelectPlace(b.lat, b.lng)}
                    >
                      <MapPin size={16} color="var(--buap-gold)" />
                      <span className="building-name">{b.name}</span>
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
