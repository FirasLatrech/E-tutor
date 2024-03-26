import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { X } from 'lucide-react';
import { useLoginQuery } from 'modules/auth/data/queries/auth.query';
import { type LoginBody } from 'modules/auth/types/auth';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { useToast } from 'modules/shared/components/ui/use-toast';
import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';

const Login = () => {
  const { isLoading, mutateAsync: login, isError, error } = useLoginQuery();

  const { setIsAuthenticated } = useAuthStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginBody>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
      })
    ),
  });

  const { toast } = useToast();
  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    const res = await login(data);
    console.log(res);
    setIsAuthenticated(true);
  };

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
    <div className="flex items-center justify-center h-screen">
      <form
        className="m-auto w-[90%] md:w-[30%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="mb-8 text-center underline">
          Username: user, Password: user
        </p>

        <Input
          id="email"
          name="email"
          label="Username"
          placeholder="Username"
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

        <div className="flex justify-center mt-5">
          <Button
            variant="tertiaryGray"
            text="Login"
            size="md"
            disabled={false}
            type="submit"
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
