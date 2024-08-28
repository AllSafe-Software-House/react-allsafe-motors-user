// src/api/axios.js
import axios from 'axios';
const lang = localStorage.getItem('lang')
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: { lang: lang },
});

export default axiosInstance;
