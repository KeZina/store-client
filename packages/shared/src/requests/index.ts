import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const defaultConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
};

export const requestInstance: AxiosInstance = axios.create(defaultConfig);