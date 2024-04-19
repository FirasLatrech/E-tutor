import React, { useEffect } from 'react';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useAllCategory,
  useGetCourseById,
} from 'modules/home/data/queries/home.query';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import SelectGeneric from 'modules/shared/components/SelectGeneric';
import * as yup from 'yup';
import {
  BasicInformationType,
  useCourseCreation,
} from '../../../context/CourseCreationContext';
import { useSteps } from '../../../context/StepsContext';
import { useLevelsQuery } from 'modules/shared/data/queries/level.query';
import { uselanguagesQuery } from 'modules/shared/data/queries/language.query';
import {
  useCreateCourseMutation,
  useUpdateCourseMutation,
} from 'modules/instructor/data/queries/course/Course.query';
import { useSearchParams } from 'react-router-dom';

function BasicInformation() {
  const { BasicInformation, setBasicInformations } = useCourseCreation();
  const { mutateAsync: updateCourseStep } = useUpdateCourseMutation();
  let [searchParams, setSearchParams] = useSearchParams();
  const course_id = searchParams.get('id') || undefined;

  const { data: current_course_data, isFetching: course_loading } = course_id
    ? useGetCourseById(course_id)
    : { data: null, isFetching: null };

  const {
    mutateAsync: createCourse,
    isPending: createCourse_loading,
    data: course_data,
  } = useCreateCourseMutation();

  const onSubmit: SubmitHandler<any> = async (submitData) => {
    if (!current_course_data) {
      const createdCourse = await createCourse({
        ...submitData,
        isDraft: true,
      });
      setSearchParams({ id: createdCourse?.id });
    } else {
      await updateCourseStep({
        course: submitData,
        courseId: course_id,
      });
    }
    setBasicInformations(submitData);
    setCurrentStep(1);
  };
   const basicInformationCourse = {
     title: current_course_data?.title,
     subtitle: current_course_data?.subtitle,
     course_category_id: current_course_data?.course_category?.id,
     course_sub_category_id: current_course_data?.course_sub_category?.id,
     course_topic: current_course_data?.course_topic,
     course_language_id: current_course_data?.course_language?.id,
     subtitle_language_id: current_course_data?.subtitle_language?.id,
     course_level_id: current_course_data?.course_level?.id,
     durations: current_course_data?.durations,
   };
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<BasicInformationType>({
    resolver: yupResolver(
      yup.object().shape({
        title: yup.string().required('Tittle is required'),
        subtitle: yup.string().required('Subtittle is required'),
        course_category_id: yup
          .string()
          .required('Course Category is required'),
        course_sub_category_id: yup
          .string()
          .required('Course Sub-category is required'),
        course_topic: yup.string().required('Course Topic is required'),
        course_language_id: yup
          .number()
          .required('Course Language is required'),
        subtitle_language_id: yup.number(),
        course_level_id: yup.number().required('Course Level is required'),
        durations: yup.string().required('Course Duration is required'),
      })
    ),
  });
  useEffect(() => {
    if (BasicInformation || basicInformationCourse) {
      Object.entries(BasicInformation || basicInformationCourse).forEach(
        ([key, value]) => {
          console.log([key, value]);
          setValue(key as keyof BasicInformationType, value as any);
        }
      );
    }
  }, [BasicInformation]);

  const { data: category_data, isFetching: category_loading } =
    useAllCategory();

  const { data: level_data, isFetching: level_loading } = useLevelsQuery();
  const { data: language_data, isFetching: language_loading } =
    uselanguagesQuery();
  const { setCurrentStep } = useSteps();

 
  console.log(current_course_data);
  console.log(basicInformationCourse);
  

  return (
    <div className="flex justify-center w-full py-6 mt-2">
      <form className="w-[95%] flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              id="title"
              label="title"
              placeholder="your course title"
              {...field}
              errors={errors}
            />
          )}
        />
        <Controller
          name="subtitle"
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
        <div className="flex gap-[2rem] max-sm:flex-col">
          <Controller
            name="course_category_id"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Category"
                isLoading={category_loading}
                items={
                  category_data && !category_loading
                    ? category_data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : ['Default category']
                }
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="course_sub_category_id"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Course Sub-category"
                isLoading={category_loading}
                items={
                  category_data && !category_loading
                    ? category_data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : ['Default category']
                }
                {...field}
                errors={errors}
              />
            )}
          />
        </div>
        <Controller
          name="course_topic"
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
        <div className="flex gap-[2rem] max-xl: grid-cols-2 max-xl:grid max-sm:flex-col max-sm:flex">
          <Controller
            name="course_language_id"
            control={control}
            render={({ field }) => (
              <SelectGeneric
                label="Course Language"
                isLoading={language_loading}
                items={
                  language_data && !language_loading
                    ? language_data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : ['Default category']
                }
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="subtitle_language_id"
            control={control}
            render={({ field }) => (
              <SelectGeneric
                label="Subtitle Language (Optional)"
                isLoading={language_loading}
                items={
                  language_data && !language_loading
                    ? language_data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : ['Default category']
                }
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="course_level_id"
            control={control}
            render={({ field }) => (
              <SelectGeneric
                label="Course Level"
                isLoading={level_loading}
                items={
                  level_data && !level_loading
                    ? level_data?.map((item: any) => ({
                        label: item?.name,
                        value: item?.id,
                      }))
                    : ['Default level']
                }
                {...field}
                errors={errors}
              />
            )}
          />
          <Controller
            name="durations"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <SelectGeneric
                label="Durations"
                items={[
                  { label: '1 month', value: '1 month' },
                  { label: '2 month', value: '2 month' },
                  { label: '3 month', value: '3 month' },
                  { label: '3 month', value: '4 month' },
                ]}
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
            disabled={createCourse_loading}
            additionnalClasses="!p-4 !px-8 !text-lg"
            text={createCourse_loading ? 'saving ...' : 'Save & Next'}
          />
        </div>
      </form>
    </div>
  );
}

export default BasicInformation;
