import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const authInstance: AxiosInstance = axios.create(defaultConfig);
export const instance: AxiosInstance = axios.create(defaultConfig);

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    return config;
  },
  (e: any) => {
    return Promise.reject(e);
  }
);
