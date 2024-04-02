import { string } from 'yup';
import { clearItem, getItem, setItem } from '../lib/localStorage';

export const getTokens = () => {
  return {
    access_token: (getItem('token') as string) || null,
    refresh_token: (getItem('token') as string) || null,
  };
};

export const setTokens = (
  access_token: string,
  refresh_token?: string | null
) => {
  setItem('token', access_token);
  if (refresh_token) {
    setItem('refresh_token', refresh_token);
  }
};

export const clearTokens = () => {
  clearItem('access_token');
  clearItem('refresh_token');
};
