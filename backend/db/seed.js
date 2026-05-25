const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

// Leer y evaluar el archivo places.js
const placesFilePath = path.resolve(__dirname, '../../src/data/places.js');
let placesContent = fs.readFileSync(placesFilePath, 'utf-8');

// Modificar el contenido para que sea evaluable en CommonJS
placesContent = placesContent.replace('export const poIs =', 'const poIs =');
placesContent = placesContent.replace('export const getAllBuildings', 'const getAllBuildings');
placesContent += '\nmodule.exports = { poIs };';

const tempFilePath = path.resolve(__dirname, 'temp_places.js');
fs.writeFileSync(tempFilePath, placesContent);

const { poIs } = require('./temp_places.js');

async function seed() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'campusguia_db',
  });

  try {
    console.log('Vaciando tablas...');
    await connection.execute('SET FOREIGN_KEY_CHECKS = 0');
    await connection.execute('TRUNCATE TABLE favorites');
    await connection.execute('TRUNCATE TABLE buildings');
    await connection.execute('TRUNCATE TABLE pois');
    await connection.execute('SET FOREIGN_KEY_CHECKS = 1');

    console.log('Insertando POIs...');
    for (const poi of poIs) {
      await connection.execute(
        'INSERT INTO pois (id, type, name, category, lat, lng, contact_phone, contact_email, contact_hours) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          poi.id,
          poi.type,
          poi.name,
          poi.category || null,
          poi.lat,
          poi.lng,
          poi.contact?.phone || null,
          poi.contact?.email || null,
          poi.contact?.hours || null
        ]
      );

      if (poi.buildings && poi.buildings.length > 0) {
        for (const b of poi.buildings) {
          await connection.execute(
            'INSERT INTO buildings (id, poi_id, name, type, lat, lng) VALUES (?, ?, ?, ?, ?, ?)',
            [b.id, poi.id, b.name, b.type, b.lat, b.lng]
          );
        }
      }
    }

    console.log('Migración completada exitosamente.');
  } catch (error) {
    console.error('Error durante la migración:', error);
  } finally {
    await connection.end();
    // Limpiar archivo temporal
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
  }
}

seed();
