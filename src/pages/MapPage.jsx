import React from 'react';
import { useSearchParams } from 'react-router-dom';

const MapPage = () => {
  const [searchParams] = useSearchParams();

  // Obtener coordenadas de origen y destino para rutas
  const fromLat = searchParams.get('fromLat');
  const fromLng = searchParams.get('fromLng');
  const toLat = searchParams.get('toLat');
  const toLng = searchParams.get('toLng');

  // Obtener coordenadas de búsqueda sencilla de la URL, o usar las de CU por defecto
  const lat = searchParams.get('lat') || 19.000833;
  const lng = searchParams.get('lng') || -98.200556;
  const zoom = searchParams.get('lat') ? 18 : 16; 
  
  // Decidir si es una ruta o una búsqueda/vista normal
  let googleMapsUrl = '';
  if (fromLat && toLat) {
    // URL para incrustar indicaciones (walking mode dirflg=w)
    googleMapsUrl = `https://maps.google.com/maps?saddr=${fromLat},${fromLng}&daddr=${toLat},${toLng}&hl=es&dirflg=w&output=embed`;
  } else {
    // URL normal
    googleMapsUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=es&z=${zoom}&output=embed`;
  }

  return (
    <div className="page-container h-full w-full relative">
      <iframe 
        title="Mapa de Ciudad Universitaria BUAP"
        src={googleMapsUrl}
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Tarjeta flotante superpuesta */}
      <div className="absolute top-4 left-4 right-4 glass p-4 rounded-xl shadow-md" style={{ zIndex: 10 }}>
        <h3 className="font-bold text-sm text-primary mb-1">
          {fromLat ? 'Ruta trazada' : searchParams.get('lat') ? 'Ubicación seleccionada' : 'Bienvenido a CU'}
        </h3>
        <p className="text-xs text-secondary">
          {fromLat ? 'Mostrando la mejor ruta a pie entre los puntos.' : searchParams.get('lat') ? 'Mostrando el resultado de tu búsqueda.' : 'Explora Ciudad Universitaria utilizando Google Maps.'}
        </p>
      </div>
    </div>
  );
};

export default MapPage;
