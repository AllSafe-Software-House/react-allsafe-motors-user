// src/api/axios.js
import axios from 'axios';
import i18next from 'i18next';
const lang = localStorage.getItem('lang')
const axiosInstance = axios.create({
  baseURL: "http://allsafemotors.web-allsafeeg.com/api",
  // timeout: 10000,
  headers: { lang: lang },
});

export default axiosInstance;
