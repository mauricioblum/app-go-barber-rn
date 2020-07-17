import axios from 'axios';

const api = axios.create({
  baseURL: 'http://90bff64b02e2.ngrok.io/',
});

export default api;
