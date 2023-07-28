// backend/controllers/avionController.js

const Avion = require('../models/Avion');

// Función para obtener todos los aviones
const obtenerAviones = async (req, res) => {
    try {
        const aviones = await Avion.findAll();
        res.json(aviones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los aviones' });
    }
    };

    // Función para agregar un nuevo avión
    const agregarAvion = async (req, res) => {
    const { numeroRegistro, aerolinea, capacidadPasajeros, estado } = req.body;
    try {
        const nuevoAvion = await Avion.create({ numeroRegistro, aerolinea, capacidadPasajeros, estado });
        res.status(201).json(nuevoAvion);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar el avión' });
    }
    };

    // Función para editar un avión existente
    const editarAvion = async (req, res) => {
    const { id } = req.params;
    const { numeroRegistro, aerolinea, capacidadPasajeros, estado } = req.body;
    try {
        const avion = await Avion.findByPk(id);
        if (!avion) {
        return res.status(404).json({ error: 'Avión no encontrado' });
        }
        avion.numeroRegistro = numeroRegistro;
        avion.aerolinea = aerolinea;
        avion.capacidadPasajeros = capacidadPasajeros;
        avion.estado = estado;
        await avion.save();
        res.json(avion);
    } catch (error) {
        res.status(500).json({ error: 'Error al editar el avión' });
    }
    };

    // Función para eliminar un avión
    const eliminarAvion = async (req, res) => {
    const { id } = req.params;
    try {
        const avion = await Avion.findByPk(id);
        if (!avion) {
        return res.status(404).json({ error: 'Avión no encontrado' });
        }
        await avion.destroy();
        res.json({ message: 'Avión eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el avión' });
    }
    };

    module.exports = {
    obtenerAviones,
    agregarAvion,
    editarAvion,
    eliminarAvion,
};
