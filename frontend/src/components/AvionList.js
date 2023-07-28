// frontend/src/components/AvionList.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';

const AvionList = () => {
    const [aviones, setAviones] = useState([]);

    useEffect(() => {
        obtenerAviones();
    }, []);

    const obtenerAviones = async () => {
        try {
        const response = await backend.get('/aviones');
        setAviones(response.data);
        } catch (error) {
        console.error('Error al obtener los aviones:', error);
        }
    };

    return (
        <div>
        <h2>Lista de Aviones</h2>
        <ul>
            {aviones.map((avion) => (
            <li key={avion.id}>
                {avion.numeroRegistro} - {avion.aerolinea} - {avion.capacidadPasajeros} - {avion.estado}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AvionList;
