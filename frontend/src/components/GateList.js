// frontend/src/components/GateList.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';

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
                Puerta {puerta.numero} - {puerta.disponible ? 'Disponible' : 'Ocupada'}
            </li>
            ))}
        </ul>
        </div>
    );
};

export default GateList;
