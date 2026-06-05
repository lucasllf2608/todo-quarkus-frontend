import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080'
});


export const criarCategoria = async (categoriaDados) => {
    const response  = await api.post('/categorias', categoriaDados);
    response.data;
}


export default api;