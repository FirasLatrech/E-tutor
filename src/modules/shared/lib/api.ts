import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import {
  RefreshTokenInterceptor,
  errorInterceptor,
  requestInterceptor,
  successInterceptor,
} from './interceptors';
import useAuthStore from '../store/useAuthStore';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_API_END_POINT,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);
api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor)
api.interceptors.response.use((Response)=>Response, RefreshTokenInterceptor);

export { api };
