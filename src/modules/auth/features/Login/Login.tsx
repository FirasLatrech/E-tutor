import { useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useLoginQuery } from 'modules/auth/data/queries/auth.query';
import { type LoginBody } from 'modules/auth/types/auth';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import useAuthStore from 'modules/shared/store/useAuthStore';
import * as yup from 'yup';
import { useToast } from 'modules/shared/components/ui/use-toast';
import { ToastAction } from 'modules/shared/components/ui/toast';
import { X } from 'lucide-react';

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
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required'),
      })
    ),
  });

  const { toast } = useToast();
  const onSubmit: SubmitHandler<LoginBody> = async (data) => {
    await login(data);
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
          id="username"
          name="username"
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
            onClick={() =>
              toast({
                variant: 'success',
                title: 'Uh oh! Something went wrong.',
              })
            }
            isLoading={isLoading}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
