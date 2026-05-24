const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// Obtener favoritos del usuario autenticado
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const [favorites] = await db.execute('SELECT building_id FROM favorites WHERE user_id = ?', [userId]);
    res.json(favorites.map(f => f.building_id));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
});

// Agregar un favorito
router.post('/', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { buildingId } = req.body;

    if (!buildingId) {
      return res.status(400).json({ error: 'Falta buildingId' });
    }

    await db.execute('INSERT IGNORE INTO favorites (user_id, building_id) VALUES (?, ?)', [userId, buildingId]);
    res.status(201).json({ message: 'Favorito agregado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al agregar favorito' });
  }
});

// Eliminar un favorito
router.delete('/:buildingId', auth, async (req, res) => {
  try {
    const userId = req.user.id;
    const { buildingId } = req.params;

    await db.execute('DELETE FROM favorites WHERE user_id = ? AND building_id = ?', [userId, buildingId]);
    res.json({ message: 'Favorito eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar favorito' });
  }
});

module.exports = router;
