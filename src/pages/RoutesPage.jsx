import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Navigation } from 'lucide-react';
import { getAllBuildings } from '../data/places';
import './RoutesPage.css';

const RoutesPage = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
  
  const allBuildings = getAllBuildings();

  const handleCalculateRoute = () => {
    if (!origin || !destination) return;
    
    const originPlace = allBuildings.find(p => p.id === origin);
    const destPlace = allBuildings.find(p => p.id === destination);
    
    if (originPlace && destPlace) {
      navigate(`/?fromLat=${originPlace.lat}&fromLng=${originPlace.lng}&toLat=${destPlace.lat}&toLng=${destPlace.lng}`);
    }
  };

  return (
    <div className="routes-page page-container h-full w-full flex-col p-4">
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--buap-blue)' }}>Rutas y Tiempos</h2>
      <p className="text-sm text-secondary mb-6">Calcula la ruta a pie entre dos edificios del campus.</p>

      <div className="route-form glass p-4 rounded-xl shadow-md">
        <div className="form-group mb-4">
          <label className="text-xs font-bold text-primary mb-1 block">Origen</label>
          <select 
            className="route-select w-full" 
            value={origin} 
            onChange={(e) => setOrigin(e.target.value)}
          >
            <option value="">Selecciona tu ubicación de origen...</option>
            {allBuildings.map(p => (
              <option key={p.id} value={p.id} disabled={destination === p.id}>{p.parentName} - {p.name}</option>
            ))}
          </select>
        </div>

        <div className="form-group mb-6">
          <label className="text-xs font-bold text-primary mb-1 block">Destino</label>
          <select 
            className="route-select w-full" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)}
          >
            <option value="">Selecciona a dónde vas...</option>
            {allBuildings.map(p => (
              <option key={p.id} value={p.id} disabled={origin === p.id}>{p.parentName} - {p.name}</option>
            ))}
          </select>
        </div>

        <button 
          className={`route-button w-full transition-all hover-scale active-scale ${(!origin || !destination) ? 'disabled' : ''}`}
          onClick={handleCalculateRoute}
          disabled={!origin || !destination}
        >
          <Navigation size={18} />
          <span>Calcular Ruta Caminando</span>
        </button>
      </div>

      <div className="route-illustration mt-8 flex justify-center items-center flex-col text-secondary">
        <Map size={48} opacity={0.2} color="var(--buap-blue)" />
        <p className="text-xs mt-2 text-center" style={{ opacity: 0.5 }}>Selecciona un origen y destino para ver las indicaciones en el mapa.</p>
      </div>
    </div>
  );
};

export default RoutesPage;
