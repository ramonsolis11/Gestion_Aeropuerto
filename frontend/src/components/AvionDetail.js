// frontend/src/components/AvionDetail.js

import React, { useEffect, useState } from 'react';
import backend from '../api/backend';
import { useParams } from 'react-router-dom';

const AvionDetail = () => {
    const [avion, setAvion] = useState({});
    const { id } = useParams();

    useEffect(() => {
        obtenerAvion();
    }, []);

    const obtenerAvion = async () => {
        try {
        const response = await backend.get(`/aviones/${id}`);
        setAvion(response.data);
        } catch (error) {
        console.error('Error al obtener el avión:', error);
        }
    };

    return (
        <div>
        <h2>Detalles del Avión</h2>
        <p>Número de Registro: {avion.numeroRegistro}</p>
        <p>Aerolínea: {avion.aerolinea}</p>
        <p>Capacidad de Pasajeros: {avion.capacidadPasajeros}</p>
        <p>Estado: {avion.estado}</p>
        {/* Mostrar más detalles aquí si es necesario */}
        </div>
    );
};

export default AvionDetail;
