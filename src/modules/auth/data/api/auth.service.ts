import { type LoginBody } from 'modules/auth/types/auth';
import { api } from 'modules/shared/lib/api';

export const login = async (body: LoginBody) => {
  try {
    console.log(body)
    const res = await api.post('/auth/email/login', body);

    if (res.status !== 200) {
      throw new Error(`Unexpected status code: ${res.status}`);
    }
    return res.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const register = async (body: LoginBody) => {
  try {
    const res = await api.post('/auth/email/register', body);
    console.log(res);
    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export const googleLogin = async (body: any) => {
  console.log(body);
  try {
    const res = await api.post('/auth/google/login', body);
    console.log(res);
    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};
