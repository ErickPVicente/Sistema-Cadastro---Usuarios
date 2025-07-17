import axios from 'axios';

// Configuração base do axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptador de resposta para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Erro com resposta do servidor
      console.error('Erro da API:', error.response.data);
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Erro de rede
      console.error('Erro de rede:', error.request);
      return Promise.reject({
        error: 'Erro de conexão',
        message: 'Não foi possível conectar com o servidor'
      });
    } else {
      // Outro tipo de erro
      console.error('Erro:', error.message);
      return Promise.reject({
        error: 'Erro inesperado',
        message: error.message
      });
    }
  }
);

export default api;
