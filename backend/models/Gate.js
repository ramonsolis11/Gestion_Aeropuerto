// backend/models/Gate.js

const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Gate = sequelize.define('gate', {
    numero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    disponible: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
});

module.exports = Gate;
