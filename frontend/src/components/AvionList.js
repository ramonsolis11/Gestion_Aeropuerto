// frontend/src/components/AvionList.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';
import { Link } from 'react-router-dom';

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
                <Link to={`/aviones/${avion.id}`}>{avion.numeroRegistro} - {avion.aerolinea}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default AvionList;

