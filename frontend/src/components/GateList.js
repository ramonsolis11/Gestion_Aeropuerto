// frontend/src/components/GateList.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';
import { Link } from 'react-router-dom';

const GateList = () => {
    const [puertas, setPuertas] = useState([]);

    useEffect(() => {
        obtenerPuertasEmbarque();
    }, []);

    const obtenerPuertasEmbarque = async () => {
        try {
        const response = await backend.get('/puertas');
        setPuertas(response.data);
        } catch (error) {
        console.error('Error al obtener las puertas de embarque:', error);
        }
    };

    return (
        <div>
        <h2>Lista de Puertas de Embarque</h2>
        <ul>
            {puertas.map((puerta) => (
            <li key={puerta.id}>
                <Link to={`/puertas/${puerta.id}`}>Puerta {puerta.numero}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default GateList;

