'use client';

import { useGoogleLogin } from '@react-oauth/google';
import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import { SocialMediaAuth } from 'modules/auth/constants/SocialMediaAuth.constant';
import { exchangeCodeForIdToken } from 'modules/auth/data/api/auth.service';
import {
  useAuthGoogleLoginService,
} from 'modules/auth/data/queries/auth.query';
import HTTP_CODES_ENUM from 'modules/shared/constants/http-code.constant';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { set } from 'react-hook-form';

export default function GoogleAuth() {
  const { mutateAsync: authGoogleLoginService } = useAuthGoogleLoginService();

  const { setUser } = useAuthStore((state) => state);
  const { setIsAuthenticated, setToken } = useAuthStore((state) => state);

  const onSuccess = async (tokenResponse: any) => {
    console.log('success', tokenResponse);
    const idToken = await exchangeCodeForIdToken(tokenResponse?.code)
    
    const { status, data } = await authGoogleLoginService({
      idToken
    });

    if (status === HTTP_CODES_ENUM.OK) {
      setToken(data.token);
      setIsAuthenticated(true);
      setUser(data.user);
    }
  };

  const Googlelogin = useGoogleLogin({
    onSuccess,
    flow: 'auth-code',
  });

  return (
    <>
      <SocialMediaBtn
        text={SocialMediaAuth[0]?.text}
        icon={SocialMediaAuth[0]?.icon}
        onClick={() => Googlelogin()}
      />
    </>
  );
}
