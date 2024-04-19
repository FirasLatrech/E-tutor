import React, { useState } from 'react';
import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import UploadImage from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadImage/UploadImage';
import UploadVideo from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadVideo/UploadVideo';
import Button from 'modules/shared/components/Button';
import { useSteps } from '../../../context/StepsContext';
import { useCourseCreation } from '../../../context/CourseCreationContext';
import TextEditor from 'modules/shared/components/TextEditor';
import MultipleAnswer from '../../MultipleAnswer';
import { useUpdateCourseMutation } from 'modules/instructor/data/queries/course/Course.query';
import { CourseInformationType } from 'modules/instructor/types/CrouseSteps.type';

function AdvanceInformation() {
  const { AdvancedInformation, setAdvancedInformation } = useCourseCreation();
  const { mutateAsync: updateCourseStep } = useUpdateCourseMutation();
  const { currentStep, setCurrentStep } = useSteps();
  const [value, setValue] = useState<string>('');
  const [courseDetails, setCourseDetails] = useState<any>(AdvancedInformation);

  const handleSubmit = async () => {
    await updateCourseStep({
      ...courseDetails,
      course_requirements: Object.values(courseDetails?.course_requirements),
      target_audience: Object.values(courseDetails?.target_audience),
      course_descriptions: Object.values(courseDetails?.course_descriptions),
    });
    setAdvancedInformation(courseDetails);
    setCurrentStep((old) => old + 1);
  };
  return (
    <div className="w-full h-full flex flex-col">
      <form className="w-[95%] flex flex-col " onSubmit={handleSubmit}>
        <div className="flex p-8 w-full gap-[2rem] border-b border-gray-100 flex-col 3xl:flex-row">
          <UploadImage
            label={'Course Thumbnail'}
            onChange={(value: string) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                course_thumbnail: value,
              }))
            }
          />
          <UploadVideo label={'Course Trailer'} />
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
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                course_content: { ...prev.course_content, [index]: value },
              }))
            }
          />
          <MultipleAnswer
            defaultValue={AdvancedInformation?.target_audience}
            label="Target Audience"
            onChange={(value: string, index: number) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                target_audience: { ...prev.target_audience, [index]: value },
              }))
            }
          />
          <MultipleAnswer
            defaultValue={AdvancedInformation?.course_requirements}
            label="Course requirements"
            onChange={(value: string, index: number) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                course_requirements: {
                  ...prev.course_requirements,
                  [index]: value,
                },
              }))
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
              variant="primary"
              additionnalClasses="!p-4 !px-8 !text-lg"
              text={'Save & Next'}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdvanceInformation;
