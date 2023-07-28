// backend/models/Avion.js

const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Avion = sequelize.define('avion', {
    numeroRegistro: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    aerolinea: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    capacidadPasajeros: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Avion;
