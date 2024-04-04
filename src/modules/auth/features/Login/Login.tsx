import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLoginQuery } from 'modules/auth/data/queries/auth.query';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import useAuthStore from 'modules/shared/store/useAuthStore';
import LoginImage from '../../assets/images/LogIn/image.png';
import MainLayout from 'modules/auth/layout/MainLayout/MainLayout';
import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import {
  SocialMediaAuth,
  SocialMediaAuthType,
} from 'modules/auth/constants/SocialMediaAuth.constant';
import LoginForm from './LoginForm';
import GoogleAuth from 'modules/auth/social-auth/google/google-auth';

const Login = () => {
  const { isPending, mutateAsync: login, isError, error } = useLoginQuery();
  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { toast } = useToast();
  useEffect(() => {
    if (isError) {
      toast({
        variant: 'error',
        title: 'Write your success message Label',

        action: (
          <ToastAction altText="Try again">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    }
  }, [isError]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[45%] flex items-end justify-end bg-secondary-100 h-full">
        <img className="object-contain" src={LoginImage} />
      </div>
      <div className="flex h-full w-[55%] items-center justify-center">
        <div className="flex w-[60%] items-center gap-[3rem] flex-col justify-center h-[90%]">
          <p className="text-4xl font-semibold leading-10 text-black">
            Sign in to your account
          </p>
          <LoginForm />
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] w-full bg-gray-100" />
            <p className="text-base font-light text-gray-500 uppercase whitespace-nowrap">
              Sign in with
            </p>
            <div className="h-[1px] w-full bg-gray-100" />
          </div>
          <div className="flex items-center justify-between w-full gap-4 -mt-4">
            {SocialMediaAuth?.map(
              (props: SocialMediaAuthType, index: number) => {
                if (props.text === 'google') return <GoogleAuth key={index} />;
                else return <SocialMediaBtn key={index} {...props} />;
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
