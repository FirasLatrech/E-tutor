import { useState } from 'react';
import UploadImage from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadImage/UploadImage';
import UploadVideo from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadVideo/UploadVideo';
import Button from 'modules/shared/components/Button';
import { useSteps } from '../../../context/StepsContext';
import {
  CourseInformationType,
  useCourseSections,
} from '../../../context/CourseSectionsContext';
import TextEditor from 'modules/shared/components/TextEditor';
import MultipleAnswer from '../../MultipleAnswer';

function AdvanceInformation() {
  const { AdvancedInformation, setAdvancedInformation } = useCourseSections();
  const { currentStep, setCurrentStep } = useSteps();
  const [value, setValue] = useState<string>('');
  const [courseDetails, setCourseDetails] = useState<any>(AdvancedInformation);
  console.log(courseDetails);

  const handleSubmit = () => {
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
                CourseThumbnail: value,
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
            defaultValue={AdvancedInformation?.whatYouWillTeach}
            label="What you will teach in this course"
            onChange={(value: string, index: number) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                whatYouWillTeach: { ...prev.whatYouWillTeach, [index]: value },
              }))
            }
          />
          <MultipleAnswer
            defaultValue={AdvancedInformation?.targetAudience}
            label="Target Audience"
            onChange={(value: string, index: number) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                targetAudience: { ...prev.targetAudience, [index]: value },
              }))
            }
          />
          <MultipleAnswer
            defaultValue={AdvancedInformation?.courseRequirements}
            label="Course requirements"
            onChange={(value: string, index: number) =>
              setCourseDetails((prev: CourseInformationType) => ({
                ...prev,
                courseRequirements: {
                  ...prev.courseRequirements,
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
