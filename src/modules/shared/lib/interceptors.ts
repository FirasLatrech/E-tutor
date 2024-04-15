import {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import { getItem } from './localStorage';
import { api } from './api';
import useAuthStore from '../store/useAuthStore';

export interface ConsoleError {
  status: number;
  data: unknown;
}

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = getItem<string>('token');

  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }
  return config;
};

export const successInterceptor = (response: AxiosResponse): AxiosResponse => {
  return response;
};

export const errorInterceptor = async (error: AxiosError): Promise<void> => {
  if (error.response?.status === 401) {
    await Promise.reject(error);
  } else {
    if (error.response) {
      const errorMessage: ConsoleError = {
        status: error.response.status,
        data: error.response.data,
      };
      console.error(errorMessage);
    } else if (error.request) {
      console.error(error.request);
    } else {
      console.log(error);
      console.error('Error', error.message);
    }
    await Promise.reject(error);
  }
};

export  const RefreshTokenInterceptor = async (error:any) => {
  const { clearToken, setToken } =
  useAuthStore((state) => state);
  if (error?.response?.status === 503) {
    window.location.reload()
  }
  const previousRequest = error?.config

  if (error?.response?.status === 401 && !previousRequest?.sent) {
    previousRequest.sent = true

    try {
      console.log('refresh')
      const response = await api.get('/auth/refresh')
      const { accessToken } = response.data.payload
      setToken(accessToken)
      previousRequest.headers['Authorization'] = `Bearer ${accessToken}`
      return api(previousRequest)
    } catch (err) {
      clearToken()
      window.location.replace('/')
    }
  }

  return Promise.reject(error?.response?.data || error)
}