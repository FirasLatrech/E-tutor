import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { X } from 'lucide-react';
import SubmitButton from 'modules/auth/components/Button/Button';
import { useLoginQuery } from 'modules/auth/data/queries/auth.query';
import { type LoginBody } from 'modules/auth/types/auth';
import Input from 'modules/shared/components/Input';
import { Checkbox } from 'modules/shared/components/ui/checkbox';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';
import { useNavigation } from 'modules/shared/hooks/useNavigation';

function LoginForm() {
  const { mutateAsync: login, isPending } = useLoginQuery();
  const { toast } = useToast();
  const goTo = useNavigation();
  const { setIsAuthenticated, isAuthenticated, setUser, setToken } =
    useAuthStore((state) => state);
  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    const response = await login(data);
    if (response?.user) {
      setToken(response?.token);
      setIsAuthenticated(true);
      goTo('/');
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
  } = useForm<LoginBody>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email('Invalid email format')
          .required('Username is required'),
        password: yup
          .string()
          .min(4, 'Password must be at least 4 characters')
          .required('Password is required'),
      })
    ),
  });
  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        name="email"
        label="Email"
        placeholder="Username or email address..."
        register={register}
        errors={errors}
      />
      <Input
        id="password"
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
        register={register}
        errors={errors}
      />
      <div className="flex items-center justify-between gap-2 max-md:flex-col max-md:w-full">
        <div className="flex items-start justify-start w-full gap-2">
          <Checkbox
            id="remember"
            //  name="rememberMe"
          />
          <p className="text-sm font-light text-gray-700">Remember me</p>
        </div>

        <SubmitButton isLoading={isPending} text="Sign In" />
      </div>
    </form>
  );
}

export default LoginForm;
