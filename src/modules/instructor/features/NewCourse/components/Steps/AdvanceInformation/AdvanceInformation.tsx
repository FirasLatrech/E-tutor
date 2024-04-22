import React, { useEffect, useState } from 'react';
import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import UploadImage from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadImage/UploadImage';
import UploadVideo from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadVideo/UploadVideo';
import Button from 'modules/shared/components/Button';
import { useSteps } from '../../../context/StepsContext';
import { useCourseCreation } from '../../../context/CourseCreationContext';
import TextEditor from 'modules/shared/components/TextEditor';
import MultipleAnswer from './components/MultipleAnswer';
import { useUpdateCourseMutation } from 'modules/instructor/data/queries/course/Course.query';
import { CourseInformationType } from 'modules/instructor/types/CrouseSteps.type';
import { useSearchParams } from 'react-router-dom';
import { useGetCourseById } from 'modules/home/data/queries/home.query';
import { ArrayToObject } from 'modules/instructor/utils/array.utils';
import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';

function AdvanceInformation() {
  const { AdvancedInformation, setAdvancedInformation } = useCourseCreation();
  const { mutateAsync: updateCourseStep, isPending: isLoadingUpdate } =
    useUpdateCourseMutation();
  const { currentStep, setCurrentStep } = useSteps();
  const [value, setValue] = useState<string>('');

  let [searchParams] = useSearchParams();
  const course_id = searchParams.get('id') || undefined;

  const { data: current_course_data, isFetching: course_loading } = course_id
    ? useGetCourseById(course_id)
    : { data: null, isFetching: null };

  useEffect(() => {
    setAdvancedInformation({
      course_thumbnail: current_course_data?.course_thumbnail || '',
      course_content: ArrayToObject(current_course_data?.course_content) || {
        '0': '',
      },
      target_audience: ArrayToObject(current_course_data?.target_audience) || {
        '0': '',
      },
      course_requirements: ArrayToObject(
        current_course_data?.course_requirements
      ) || { '0': '' },
      course_descriptions: current_course_data?.course_descriptions || '',
    });
    setValue(current_course_data?.course_descriptions || '');
  }, [current_course_data]);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateCourseStep({
      course: {
        ...AdvanceInformation,
        course_thumbnail: AdvancedInformation?.course_thumbnail,
        course_requirements: Object.values(
          AdvancedInformation?.course_requirements || []
        ),
        target_audience: Object.values(
          AdvancedInformation?.target_audience || []
        ),
        course_content: Object.values(
          AdvancedInformation?.course_content || []
        ),
        course_descriptions: value,
      },
      courseId: course_id,
    });
   
    setCurrentStep((old) => old + 1);
  };
  return (
    <>
      {course_loading ? (
        <div className='"w-full min-h-[60vh] h-full flex flex-col items-center justify-center'>
          <CreateCourseLoader />
        </div>
      ) : (
        <div className="w-full h-full flex flex-col">
          <form className="w-[95%] flex flex-col " onSubmit={handleSubmit}>
            <div className="flex p-8 w-full gap-[5rem] border-b border-gray-100 flex-col 3xl:flex-row">
              <UploadImage
                defaultValue={AdvancedInformation?.course_thumbnail?.path}
                label={'Course Thumbnail'}
                onChange={(value: string) =>
                  setAdvancedInformation(
                    (prev: CourseInformationType | null) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        course_thumbnail: value,
                      };
                    }
                  )
                }
              />
              <UploadVideo
                label={'Course Trailer'}
                onChange={(value: Object) =>
                  setAdvancedInformation(
                    (prev: CourseInformationType | null) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        course_thumbnail: value,
                      };
                    }
                  )
                }
              />
            </div>
            <div className="flex p-8 flex-col gap-[2rem] border-b border-gray-100">
              <TextEditor
                label={'Course Descriptions'}
                value={value}
                setValue={setValue}
              />

              <MultipleAnswer
                defaultValue={AdvancedInformation?.course_content}
                label="What you will teach in this course"
                onChange={(value: string, index: number) =>
                  setAdvancedInformation(
                    (prev: CourseInformationType | null) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        course_content: {
                          ...prev.course_content,
                          [index]: value,
                        },
                      };
                    }
                  )
                }
              />
              <MultipleAnswer
                defaultValue={AdvancedInformation?.target_audience}
                label="Target Audience"
                onChange={(value: string, index: number) =>
                  setAdvancedInformation(
                    (prev: CourseInformationType | null) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        target_audience: {
                          ...prev.target_audience,
                          [index]: value,
                        },
                      };
                    }
                  )
                }
              />
              <MultipleAnswer
                defaultValue={AdvancedInformation?.course_requirements}
                label="Course requirements"
                onChange={(value: string, index: number) =>
                  setAdvancedInformation(
                    (prev: CourseInformationType | null) => {
                      if (!prev) return null;
                      return {
                        ...prev,
                        course_requirements: {
                          ...prev.course_requirements,
                          [index]: value,
                        },
                      };
                    }
                  )
                }
              />
              <div className="flex justify-between items-center w-full mt-4">
                <Button
                  variant="tertiaryGray"
                  onClick={() => {
                    setCurrentStep((old) => old - 1);
                  }}
                  additionnalClasses="!p-4 !px-8 !text-lg"
                  text={currentStep == 0 ? 'Cancel' : 'Previous'}
                />
                <Button
                  type="submit"
                  disabled={isLoadingUpdate}
                  variant="primary"
                  additionnalClasses="!p-4 !px-8 !text-lg"
                  text={isLoadingUpdate ? 'saving' : 'Save & Next'}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default AdvanceInformation;
