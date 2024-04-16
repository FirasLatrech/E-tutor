import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import {
  SocialMediaAuth,
  type SocialMediaAuthType,
} from 'modules/auth/constants/SocialMediaAuth.constant';
import MainLayout from 'modules/auth/layout/MainLayout/MainLayout';
import RegisterImage from '../../assets/images/signUp/image.png';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[45%] max-md:hidden flex items-end justify-end bg-secondary-100 h-full">
        <img className="object-contain" src={RegisterImage} />
      </div>
      <div className="flex h-full w-[55%] max-md:w-[90%] items-center justify-center">
        <div className="flex w-[70%]  max-md:w-[90%] mr-12 items-center gap-[3rem] flex-col justify-center h-[90%]">
          <p className="text-4xl font-semibold leading-10 text-black">
            Create your account
          </p>
          <RegisterForm />
          <div className="flex items-center justify-center w-full gap-4">
            <div className="h-[1px] w-full bg-gray-100" />
            <p className="text-base font-light text-gray-500 uppercase whitespace-nowrap">
              Sign Up with
            </p>
            <div className="h-[1px] w-full bg-gray-100" />
          </div>
          <div className="flex items-center justify-between w-full gap-2 -mt-4 max-md:flex-col ">
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
