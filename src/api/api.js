// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://allsafemotors.web-allsafeeg.com/api",
  timeout: 10000,
});

// Add a request interceptor to dynamically set the language
axiosInstance.interceptors.request.use(
  (config) => {
    const lang = localStorage.getItem('lang');
    if (lang) {
      config.headers['lang'] = lang;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

