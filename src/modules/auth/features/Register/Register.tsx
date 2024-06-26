import SocialMediaBtn from 'modules/auth/components/SocialMediaBtn';
import {
  SocialMediaAuth,
  type SocialMediaAuthType,
} from 'modules/auth/constants/SocialMediaAuth.constant';
import RegisterImage from '../../assets/images/signUp/image.png';
import RegisterForm from './RegisterForm';

const Register = () => {
  return (
    <div className="flex items-center max-md:w-[90%] justify-center h-full">
      <div className="w-[45%] max-xl:hidden flex items-end justify-end bg-secondary-100 h-full">
        <img className="object-contain" src={RegisterImage} />
      </div>
      <div className="flex h-full w-[55%] max-xl:w-full items-center justify-center">
        <div className="max-xl:w-full max-md:mt-10 flex max-2xl:w-[80%] w-[70%] mr-12 max-xl:mr-0 items-center gap-[3rem] flex-col justify-center h-[90%]">
          <p className="leading-10 max-md:text-3xl max-xs:text-2xl font-semibold text-4xl text-black">
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
          <div className="flex max-md:flex-col gap-2 w-full -mt-4 items-center justify-between">
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
