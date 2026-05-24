import React, { createContext, useState, useEffect } from 'react';
import { fetchPlaces } from '../services/api';

export const PlacesContext = createContext();

export const PlacesProvider = ({ children }) => {
  const [poIs, setPoIs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const data = await fetchPlaces();
        setPoIs(data);
        setLoading(false);
      } catch (err) {
        console.error('Error al cargar lugares desde la API, usando datos locales de respaldo si existen:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    loadPlaces();
  }, []);

  const getAllBuildings = () => {
    let all = [];
    poIs.forEach(poi => {
      if (poi.buildings) {
        poi.buildings.forEach(b => {
          all.push({
            ...b,
            parentName: poi.name
          });
        });
      } else {
        all.push({
          id: poi.id,
          name: poi.name,
          lat: poi.lat,
          lng: poi.lng,
          parentName: poi.category
        });
      }
    });
    return all;
  };

  return (
    <PlacesContext.Provider value={{ poIs, getAllBuildings, loading, error }}>
      {children}
    </PlacesContext.Provider>
  );
};
