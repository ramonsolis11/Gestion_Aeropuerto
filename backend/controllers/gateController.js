// backend/controllers/gateController.js

const Gate = require('../models/Gate');

// Función para obtener todas las puertas de embarque
const obtenerPuertasEmbarque = async (req, res) => {
    try {
        const puertas = await Gate.findAll();
        res.json(puertas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las puertas de embarque' });
    }
    };

    // Función para asignar un avión a una puerta de embarque
    const asignarAvionPuerta = async (req, res) => {
    const { id } = req.params;
    try {
        const gate = await Gate.findByPk(id);
        if (!gate) {
        return res.status(404).json({ error: 'Puerta de embarque no encontrada' });
        }
        gate.disponible = false;
        await gate.save();
        res.json(gate);
    } catch (error) {
        res.status(500).json({ error: 'Error al asignar el avión a la puerta de embarque' });
    }
    };

    module.exports = {
    obtenerPuertasEmbarque,
    asignarAvionPuerta,
};
