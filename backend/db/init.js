const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

async function initDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'campusguia_db',
    multipleStatements: true // Permite ejecutar múltiples consultas a la vez
  });

  try {
    const schemaPath = path.resolve(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    console.log('Creando base de datos y tablas...');
    await connection.query(schema);
    console.log('Esquema creado correctamente.');
  } catch (error) {
    console.error('Error al crear el esquema:', error);
  } finally {
    await connection.end();
  }
}

initDb();
