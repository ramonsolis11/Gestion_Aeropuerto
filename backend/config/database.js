// backend/config/database.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite', // Nombre del archivo de la base de datos SQLite
});

module.exports = sequelize;
