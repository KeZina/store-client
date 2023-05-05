import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const requestInstance: AxiosInstance = axios.create(defaultConfig);

requestInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (e: any) => {
    if (e.response.status === 401) {
      window.location.href = import.meta.env.VITE_LOGIN_MODULE_URL;
    }
  }
);