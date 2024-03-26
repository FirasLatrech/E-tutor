import axios from 'axios';
import { type LoginBody } from 'modules/auth/types/auth';
import { api } from 'modules/shared/lib/api';

export const login = async (body: LoginBody) => {
  // const res = new Promise<boolean>((resolve, reject) => {
  //   if (body?.username !== 'user' || body?.password !== 'user') {
  //     reject(new Error('Invalid username or password'));
  //   }

  //   resolve(true);
  // });
  console.log(body);
  const res = await api.post('/auth/email/login', body);

  console.log(res);
  return res;
};
