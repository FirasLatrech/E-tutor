import axios from 'axios';
import { googleClientId, googleSecret } from 'modules/auth/social-auth/google/google-config';
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
  console.log(body, "IN GOOGLE LOGIN SERVICE");
  try {
    const res = await api.post('/auth/google/login', body);
    console.log(res);
    return res;
  } catch (error: any) {
    return error?.response?.data;
  }
};

 export async function exchangeCodeForIdToken(authorizationCode:string) {
  try {
    const response = await axios.post('https://oauth2.googleapis.com/token', {
      client_id: googleClientId,
      client_secret: googleSecret,
      code: authorizationCode,
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:5173',
    });

    return response.data.id_token;
  } catch (error) {
    console.error('Error exchanging code for token:', error);
    return null;
  }
}