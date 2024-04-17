'use client';

import { CodeResponse, useGoogleLogin } from '@react-oauth/google';
import { X } from 'lucide-react';
import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import { SocialMediaAuth } from 'modules/auth/constants/SocialMediaAuth.constant';
import { exchangeCodeForIdToken } from 'modules/auth/data/api/auth.service';
import { useAuthGoogleLoginService } from 'modules/auth/data/queries/auth.query';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import HTTP_CODES_ENUM from 'modules/shared/constants/http-code.constant';
import { useNavigation } from 'modules/shared/hooks/useNavigation';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { set } from 'react-hook-form';


export default function GoogleAuth() {
  const { mutateAsync: authGoogleLoginService } = useAuthGoogleLoginService();
  const { toast } = useToast();
  const { setUser } = useAuthStore((state) => state);
  const { setIsAuthenticated, setToken } = useAuthStore((state) => state);

  const onSuccess = async (tokenResponse: Omit<CodeResponse, "error" | "error_description" | "error_uri">  )=> {
    const idToken = await exchangeCodeForIdToken(tokenResponse?.code);
    console.log(tokenResponse);
    const { status, data } = await authGoogleLoginService({
      idToken,
    });
    console.log(data);
    console.log(status);

    if (status === HTTP_CODES_ENUM.OK) {
      toast({
        variant: 'success',
        title: 'Login successful',

        action: (
          <ToastAction altText="Login">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
      setToken(data.token);
      setIsAuthenticated(true);
      setUser(data.user);
    } else {
      toast({
        variant: 'error',
        title: 'something went wrong',

        action: (
          <ToastAction altText="Try again">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    }
  };

  const onError = () => {
    toast({
      variant: 'error',
      title: 'something went wrong',

      action: (
        <ToastAction altText="Try again">
          <X className="w-5 h-5 bg-transparent" />
        </ToastAction>
      ),
    });
  };

  const Googlelogin = useGoogleLogin({
    onSuccess,
    onError,
    flow: 'auth-code',
  });

  return (
    <>
      <SocialMediaBtn
        text={SocialMediaAuth[0]?.text}
        icon={SocialMediaAuth[0]?.icon}
        onClick={() => {
          Googlelogin();
        }}
      />
    </>
  );
}
