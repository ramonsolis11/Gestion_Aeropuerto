// backend/src/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const path = require('path');
const Avion = require('./models/Avion');
const Gate = require('./models/Gate');

const app = express();
const PORT = 3001;

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

    // Rutas para aviones
    app.get('/aviones', (req, res) => {
    // Aquí puedes implementar la lógica para obtener la lista de aviones desde la base de datos
    // y luego enviarla al cliente en formato JSON
    const listaDeAviones = [
        { id: 1, modelo: 'Boeing 747', capacidad: 300 },
        { id: 2, modelo: 'Airbus A320', capacidad: 200 },
        // Agrega más aviones si es necesario
    ];
    res.json(listaDeAviones);
    });

    app.post('/aviones', (req, res) => {
    const nuevoAvion = req.body;

    // Verificar si se proporcionan los campos requeridos
    if (!nuevoAvion.modelo || !nuevoAvion.capacidad) {
        return res.status(400).json({ error: 'El modelo y la capacidad del avión son requeridos' });
    }

    // ... implementar la lógica para guardar el nuevo avión en la base de datos ...
    // Responder al cliente con el avión creado y su ID asignado
    nuevoAvion.id = 3; // Supongamos que se asigna el ID 3 al nuevo avión
    res.status(201).json(nuevoAvion);
    });

    app.put('/aviones/:id', (req, res) => {
    const avionId = req.params.id;
    const avionActualizado = req.body;

    // ... implementar la lógica para actualizar el avión en la base de datos ...
    // Responder al cliente con el avión actualizado
    avionActualizado.id = avionId;
    res.json(avionActualizado);
    });

    app.delete('/aviones/:id', (req, res) => {
    const avionId = req.params.id;

    // ... implementar la lógica para eliminar el avión de la base de datos ...
    // Responder al cliente con un mensaje indicando que el avión fue eliminado
    res.json({ message: `Avión con ID ${avionId} eliminado correctamente` });
    });

    // Rutas para puertas de embarque
    app.get('/puertas', (req, res) => {
    // Aquí puedes implementar la lógica para obtener la lista de puertas de embarque desde la base de datos
    // y luego enviarla al cliente en formato JSON
    const listaDePuertas = [
        { numero: 1, estado: 'disponible' },
        { numero: 2, estado: 'ocupada' },
        // Agrega más puertas si es necesario
    ];
    res.json(listaDePuertas);
    });

    app.post('/puertas', (req, res) => {
    const nuevaPuerta = req.body;

    // Verificar si se proporcionan los campos requeridos
    if (!nuevaPuerta.numero || !nuevaPuerta.estado) {
        return res.status(400).json({ error: 'El número y el estado de la puerta de embarque son requeridos' });
    }

    // ... implementar la lógica para guardar la nueva puerta de embarque en la base de datos ...
    // Responder al cliente con la puerta de embarque creada y su número asignado
    nuevaPuerta.numero = 3; // Supongamos que se asigna el número 3 a la nueva puerta de embarque
    res.status(201).json(nuevaPuerta);
    });

    app.put('/puertas/:numero', (req, res) => {
    const numeroPuerta = req.params.numero;
    const puertaActualizada = req.body;

    // ... implementar la lógica para actualizar la puerta de embarque en la base de datos ...
    // Responder al cliente con la puerta de embarque actualizada
    puertaActualizada.numero = numeroPuerta;
    res.json(puertaActualizada);
    });

    app.delete('/puertas/:numero', (req, res) => {
    const numeroPuerta = req.params.numero;

    // ... implementar la lógica para eliminar la puerta de embarque de la base de datos ...
    // Responder al cliente con un mensaje indicando que la puerta de embarque fue eliminada
    res.json({ message: `Puerta de embarque número ${numeroPuerta} eliminada correctamente` });
    });

    // Ruta comodín para manejar rutas no encontradas
    app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'path/to/index.html'));
    });

    // Middleware para manejar errores
    app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
    });

    // Iniciar el servidor
    app.listen(PORT, () => {
    console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});