import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'modules/shared/components/Button';
import SelectGeneric from 'modules/shared/components/DropDownGeneric/SelectGeneric';
import Input from 'modules/shared/components/Input';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useSteps } from '../../../context/StepsContext';

function BasicInformation() {
  const onSubmit: SubmitHandler<any> = async (data) => {
    console.log(data);
  };
  console.log('object');

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
  const { currentStep, setCurrentStep } = useSteps();
  return (
    <div className=" flex justify-center w-full py-6 mt-2">
      <form
        className="w-[95%] flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="tittle"
          name="tittle"
          label="Tittle"
          placeholder="your course tittle"
          register={register}
          errors={errors}
        />
        <Input
          id="subTittle"
          name="subTittle"
          label="Subtittle"
          placeholder="your course subtittle"
          register={register}
          errors={errors}
        />
        <div className="flex gap-[2rem]">
          <SelectGeneric label="Course Category" items={['ddd']} />
          <SelectGeneric label="Course Sub-category" items={['ddd']} />
        </div>
        <Input
          id="Course Topic"
          name="courseTopic"
          label="Course Topic"
          placeholder="What is primarily taught in your course?"
          register={register}
          errors={errors}
        />
        <div className="flex gap-[2rem]">
          <SelectGeneric label="Course Language" items={['ddd']} />
          <SelectGeneric
            label="Subtitle Language (Optionnal)"
            items={['ddd']}
          />
          <SelectGeneric label="Course Level" items={['ddd']} />
          <SelectGeneric label="Durations" items={['ddd']} />
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <Button variant="tertiaryGray" text={'Cancel'} />
          <Button
            variant="primary"
            additionnalClasses="!p-4 !px-8 !text-lg"
            text={'Save & Next'}
            onClick={() => setCurrentStep(1)}
          />
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
