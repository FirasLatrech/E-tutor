import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

function BasicInformation() {
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(
      yup.object().shape({
        email: yup
          .string()
          .email('Invalid email format')
          .required('Username is required'),
        password: yup
          .string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
      })
    ),
  });

  return (
    <div className=" flex justify-center w-full py-4">
      <form
        className="w-[95%] flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Username or email address..."
          register={register}
          errors={errors}
        />
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Username or email address..."
          register={register}
          errors={errors}
        />
        <div className="flex gap-[2rem]">
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
        </div>
        <Input
          id="email"
          name="email"
          label="Email"
          placeholder="Username or email address..."
          register={register}
          errors={errors}
        />
        <div className="flex gap-[2rem]">
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
          <Input
            id="email"
            name="email"
            label="Email"
            placeholder="Username or email address..."
            register={register}
            errors={errors}
          />
        </div>
        <div className="flex justify-between items-center w-[90%]">
          <Button variant="tertiarySecondary" text={'Cancel'} />
          <Button variant="primary" text={'Save & Next'} />
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
