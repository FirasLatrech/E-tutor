import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { useSteps } from '../../../context/StepsContext';
import { useAllCategory } from 'modules/home/data/queries/home.query';
import SelectGeneric from 'modules/shared/components/SelectGeneric';
import { useCourseSections } from '../../../context/CourseSectionsContext';

function BasicInformation() {
  const { BasicInformation, setBasicInformations } = useCourseSections();
  const onSubmit: SubmitHandler<any> = async (data) => {
    setBasicInformations(data);
    setCurrentStep(1);
  };

  const { data, isFetching } = useAllCategory();
  const { currentStep, setCurrentStep } = useSteps();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<any>({
    resolver: yupResolver(
      yup.object().shape({
        tittle: yup.string().required('Tittle is required'),
        subTittle: yup.string().required('Subtittle is required'),
        courseCategory: yup.string().required('Course Category is required'),
        courseSubCategory: yup
          .string()
          .required('Course Sub-category is required'),
        courseTopic: yup.string().required('Course Topic is required'),
        courseLanguage: yup.string().required('Course Language is required'),
        subtitleLanguage: yup.string(),
        courseLevel: yup.string().required('Course Level is required'),
        courseDuration: yup.string().required('Course Duration is required'),
      })
    ),
  });

  useEffect(() => {
    if (BasicInformation) {
      Object.entries(BasicInformation).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [BasicInformation]);

  return (
    <div className="flex justify-center w-full py-6 mt-2">
      <form className="w-[95%] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="tittle"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              id="tittle"
              label="Tittle"
              placeholder="your course tittle"
              {...field}
              errors={errors}
            />
          )}
        />
        <Controller
          name="subTittle"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              id="subTittle"
              label="Subtittle"
              placeholder="your course subtittle"
              {...field}
              errors={errors}
            />
          )}
        />
        <div className="flex gap-[2rem]">
          <Controller
            name="courseCategory"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Category"
                isLoading={false}
                items={['ff']}
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="courseSubCategory"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Sub-category"
                items={['ddd']}
                {...field}
                errors={errors}
              />
            )}
          />
        </div>
        <Controller
          name="courseTopic"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              id="courseTopic"
              label="Course Topic"
              placeholder="What is primarily taught in your course?"
              {...field}
              errors={errors}
            />
          )}
        />
        <div className="flex gap-[2rem]">
          <Controller
            name="courseLanguage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Language"
                items={['English', 'French', 'Arabic']}
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="subtitleLanguage"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Subtitle Language (Optional)"
                items={['English', 'French', 'Arabic']}
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="courseLevel"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Level"
                items={['Beginner', 'Intermediate', 'Advanced']}
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="courseDuration"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Durations"
                items={['1 month', '3 months', '6 months', '1 year']}
                {...field}
                errors={errors}
              />
            )}
          />
        </div>
        <div className="flex justify-between items-center w-full mt-4">
          <Button
            variant="tertiaryGray"
            additionnalClasses="!p-4 !px-8 !text-lg"
            text={'Cancel'}
          />
          <Button
            type="submit"
            variant="primary"
            additionnalClasses="!p-4 !px-8 !text-lg"
            text={'Save & Next'}
          />
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
