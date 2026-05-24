const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    // Obtener POIs
    const [pois] = await db.execute('SELECT * FROM pois');
    
    // Obtener todos los edificios
    const [buildings] = await db.execute('SELECT * FROM buildings');

    // Mapear los edificios a sus respectivos POIs para mantener la estructura del frontend
    const poisWithBuildings = pois.map(poi => {
      // Cast a número o string donde sea necesario, dependiendo del esquema, pero enviamos tal cual.
      // parseFloat para lat/lng por si vienen como string de la BD
      poi.lat = parseFloat(poi.lat);
      poi.lng = parseFloat(poi.lng);
      
      const poiBuildings = buildings
        .filter(b => b.poi_id === poi.id)
        .map(b => ({
          id: b.id,
          name: b.name,
          type: b.type,
          lat: parseFloat(b.lat),
          lng: parseFloat(b.lng)
        }));

      // Reconstruir el objeto `contact` como lo espera el Frontend
      let contact = undefined;
      if (poi.contact_phone || poi.contact_email || poi.contact_hours) {
        contact = {
          phone: poi.contact_phone,
          email: poi.contact_email,
          hours: poi.contact_hours
        };
      }

      return {
        id: poi.id,
        type: poi.type,
        name: poi.name,
        category: poi.category,
        lat: poi.lat,
        lng: poi.lng,
        contact,
        buildings: poiBuildings.length > 0 ? poiBuildings : undefined
      };
    });

    res.json(poisWithBuildings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los lugares' });
  }
});

module.exports = router;
