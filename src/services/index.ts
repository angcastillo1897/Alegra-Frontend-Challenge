import axios from 'axios';

const apiAlegra = axios.create({
    baseURL: 'https://api.alegra.com/api/v1/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${import.meta.env.VITE_ALEGRA_TOKEN}`
    },

    timeout: 5000,
});

apiAlegra.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);


const apiPexels = axios.create({
    baseURL: 'https://api.pexels.com/v1',
    headers: {
        'Content-Type': 'application/json',
        Authorization: import.meta.env.VITE_PEXELS_TOKEN
    },
    timeout: 5000,
});

apiPexels.interceptors.response.use(
    response => response,
    error => {
        return Promise.reject(error);
    }
);

export { apiAlegra, apiPexels };