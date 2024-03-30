import { useMutation } from '@tanstack/react-query';
import { RegisterBody, type LoginBody } from 'modules/auth/types/auth';
import { googleLogin, login, register } from '../api/auth.service';
import { useCallback } from 'react';

export const useLoginQuery = () =>
  useMutation({
    mutationFn: async (body: LoginBody) => {
      const res = await login(body);
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

export const useAuthGoogleLoginService = () =>
  useMutation({
    mutationFn: async (body: any) => {
      const res = await googleLogin(body);
      return res;
    },
  });
