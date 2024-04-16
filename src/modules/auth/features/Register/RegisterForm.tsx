import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterBody, type LoginBody } from 'modules/auth/types/auth';
import Input from 'modules/shared/components/Input';
import * as yup from 'yup';
import SubmitButton from 'modules/auth/components/Button/Button';
import { Checkbox } from 'modules/shared/components/ui/checkbox';
import {
  useLoginQuery,
  useRegisterQuery,
} from 'modules/auth/data/queries/auth.query';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { Link } from 'react-router-dom';
import { toast, useToast } from 'modules/shared/components/ui/use-toast';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { X } from 'lucide-react';

function RegisterForm() {
  const {
    isPending,
    mutateAsync: registerAction,
    isError,
    error,
  } = useRegisterQuery();
  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { toast } = useToast();

  const onSubmit: SubmitHandler<RegisterBody> = async (data) => {
    const response = await registerAction({
      ...data,
      is_instructor: true,
    });
    if (response?.status == 200) {
      toast({
        variant: 'success',
        title:
          'registred with success! check your email to verify your account',

        action: (
          <ToastAction altText="Try again">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    } else {
      toast({
        variant: 'error',
        title: response?.errors?.message || 'something went wrong',
        action: (
          <ToastAction altText="Try again">
            <X className="w-5 h-5 bg-transparent" />
          </ToastAction>
        ),
      });
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterBody>({
    resolver: yupResolver(
      yup.object().shape({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        username: yup.string().required('Username is required'),
        email: yup
          .string()
          .email('Invalid email format')
          .required('Email is required'),
        password: yup
          .string()
          .min(8, 'Password must be at least 8 characters')
          //   .matches(/[0-9]/, 'Password requires a number')
          //   .matches(/[a-z]/, 'Password requires a lowercase letter')
          //   .matches(/[A-Z]/, 'Password requires an uppercase letter')
          //   .matches(/[^\w]/, 'Password requires a symbol')
          .required('Password is required'),
        confirmPassword: yup
          .string()
          //.oneOf([yup.ref('password'), undefined], 'Passwords must match')
          .required('Please confirm your password'),
      })
    ),
  });

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full gap-[1rem] flex items-start justify-center">
        <Input
          id="First Name"
          name="firstName"
          label="First name"
          placeholder="First name..."
          register={register}
          errors={errors}
        />
        <Input
          id="Last name"
          name="lastName"
          label="Last name"
          placeholder="Last name"
          register={register}
          errors={errors}
        />
      </div>
      <Input
        id="Username"
        name="username"
        label="Username"
        placeholder="Username..."
        register={register}
        errors={errors}
      />
      <Input
        id="Email"
        name="email"
        label="Email"
        placeholder="Email Address"
        register={register}
        errors={errors}
      />{' '}
      <div className="w-full gap-[1rem] flex items-start justify-center">
        <Input
          id="Password"
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          register={register}
          errors={errors}
        />
        <Input
          id="Confirm Password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          register={register}
          type="password"
          errors={errors}
        />
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-start justify-center gap-2">
          <Checkbox
            id="remember"
            //  name="rememberMe"
          />
          <p className="text-sm font-light text-gray-700">
            I Agree with all of your{' '}
            <Link
              className="ease-linear text-secondary-500 hover:underline duration-250"
              to="/"
            >
              Terms & Conditions
            </Link>
          </p>
        </div>
        <SubmitButton isLoading={isPending} text="Create Account" />
      </div>
    </form>
  );
}

export default RegisterForm;
