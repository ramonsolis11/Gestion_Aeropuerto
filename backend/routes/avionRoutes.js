// backend/routes/avionRoutes.js

const express = require('express');
const avionController = require('../controllers/avionController');

const router = express.Router();

// Rutas para aviones
router.get('/aviones', avionController.obtenerAviones);
router.post('/aviones', avionController.agregarAvion);
router.put('/aviones/:id', avionController.editarAvion);
router.delete('/aviones/:id', avionController.eliminarAvion);

module.exports = router;
