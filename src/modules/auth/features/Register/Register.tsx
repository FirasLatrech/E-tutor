import {
  SocialMediaAuth,
  SocialMediaAuthType,
} from 'modules/auth/constants/SocialMediaAuth.constant';
import RegisterForm from './RegisterForm';
import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';

import RegisterImage from '../../assets/images/signUp/image.png';
import MainLayout from 'modules/auth/layout/MainLayout/MainLayout';

const Register = () => {
  return (
      <div className="flex items-center justify-center h-full">
        <div className="w-[45%] flex items-end justify-end bg-secondary-100 h-full">
          <img className="object-contain" src={RegisterImage} />
        </div>
        <div className="flex h-full w-[55%] items-center justify-center">
          <div className="flex w-[60%] mr-12 items-center gap-[3rem] flex-col justify-center h-[90%]">
            <p className="leading-10 font-semibold text-4xl text-black">
              Create your account
            </p>
            <RegisterForm />
            <div className="w-full flex items-center justify-center gap-4">
              <div className="h-[1px] w-full bg-gray-100" />
              <p className="font-light text-gray-500 text-base uppercase whitespace-nowrap">
                Sign Up with
              </p>
              <div className="h-[1px] w-full bg-gray-100" />
            </div>
            <div className="flex gap-2 w-full -mt-4 items-center justify-between">
              {SocialMediaAuth?.map((props: SocialMediaAuthType) => {
                return <SocialMediaBtn {...props} />;
              })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Register;
