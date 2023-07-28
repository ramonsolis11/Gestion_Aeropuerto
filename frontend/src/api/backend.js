// frontend/src/api/backend.js

import axios from 'axios';

const baseURL = 'http://localhost:5000/api'; // Cambia esta URL según la dirección de tu servidor BackEnd

const instance = axios.create({
    baseURL,
});

export default instance;
