// backend/src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const Avion = require('./models/Avion');
const Gate = require('./models/Gate');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Sincronizar los modelos con la base de datos
sequelize
    .sync()
    .then(() => {
        console.log('Base de datos y tablas creadas correctamente.');
    })
    .catch((error) => {
        console.error('Error al crear la base de datos:', error);
    });

    // Configurar rutas
    const avionRoutes = require('./routes/avionRoutes');
    const gateRoutes = require('./routes/gateRoutes');

    app.use('/api', avionRoutes);
    app.use('/api', gateRoutes);

    // Iniciar el servidor
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});