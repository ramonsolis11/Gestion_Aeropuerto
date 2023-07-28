// frontend/src/components/GateDetail.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';
import { useParams } from 'react-router-dom';

const GateDetail = () => {
    const [puerta, setPuerta] = useState({});
    const { id } = useParams();

    useEffect(() => {
        obtenerPuerta();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const obtenerPuerta = async () => {
        try {
        const response = await backend.get(`/puertas/${id}`);
        setPuerta(response.data);
        } catch (error) {
        console.error('Error al obtener la puerta de embarque:', error);
        }
    };

    return (
        <div>
        <h2>Detalles de la Puerta de Embarque</h2>
        <p>Número de Puerta: {puerta.numero}</p>
        <p>Estado: {puerta.disponible ? 'Disponible' : 'Ocupada'}</p>
        {/* Agregar más detalles si es necesario */}
        </div>
    );
};

export default GateDetail;
