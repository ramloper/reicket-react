import axios from "axios";

export const privateApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    },
});


export const publicApi = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,

    headers: {
        withCredentials: true,
        // 'Access-Control-Allow-Origin': `${import.meta.env.VITE_APP_URL}`,
    }
});