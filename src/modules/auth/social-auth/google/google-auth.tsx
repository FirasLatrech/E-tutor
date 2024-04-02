'use client';

import { useGoogleLogin } from '@react-oauth/google';
import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import { SocialMediaAuth } from 'modules/auth/constants/SocialMediaAuth.constant';
import { useAuthGoogleLoginService } from 'modules/auth/data/queries/auth.query';
import HTTP_CODES_ENUM from 'modules/shared/constants/http-code.constant';
import useAuthStore from 'modules/shared/store/useAuthStore';

export default function GoogleAuth() {
  const { mutateAsync: authGoogleLoginService } = useAuthGoogleLoginService();

  const { setUser } = useAuthStore((state) => state);

  const onSuccess = async (tokenResponse: any) => {
    console.log(tokenResponse);
    if (!tokenResponse.credential) return;

    const { status, data } = await authGoogleLoginService({
      idToken: tokenResponse.credential,
    });

    if (status === HTTP_CODES_ENUM.OK) {
      setUser(data.user);
    }
  };

  const login = useGoogleLogin({
    onSuccess,
    flow: 'auth-code',
  });

  return (
    <>
      <SocialMediaBtn
        text={SocialMediaAuth[0]?.text}
        icon={SocialMediaAuth[0]?.icon}
        onClick={() => login()}
      />
    </>
  );
}
