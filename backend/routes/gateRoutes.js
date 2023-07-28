// backend/routes/gateRoutes.js

const express = require('express');
const gateController = require('../controllers/gateController');

const router = express.Router();

// Rutas para puertas de embarque
router.get('/puertas', gateController.obtenerPuertasEmbarque);
router.put('/puertas/:id', gateController.asignarAvionPuerta);

module.exports = router;

