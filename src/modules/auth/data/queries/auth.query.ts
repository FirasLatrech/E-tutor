import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { type LoginBody, type RegisterBody } from 'modules/auth/types/auth';
import { googleLogin, login, register } from '../api/auth.service';

export const useLoginQuery = () =>
  useMutation({
    mutationFn: async (body: LoginBody) => {
      console.log(body);
      const res = await login(body);
      console.log(res);
      return res;
    },
  });

type RegisterFormDataWithIsInstructor = RegisterBody & {
  is_instructor: boolean;
};

export const useRegisterQuery = () =>
  useMutation({
    mutationFn: async (body: RegisterFormDataWithIsInstructor) => {
      const res = await register(body);
      return res;
    },
  });

interface LoginWithGoogleBody {
  idToken: string;
}

export const useAuthGoogleLoginService = () =>
  useMutation({
    mutationFn: async (body: LoginWithGoogleBody) => {
      const res = await googleLogin(body);
      return res;
    },
  });
