import React from 'react';
import Button from 'modules/shared/components/Button';
import { useCourseCreation } from '../../../context/CourseCreationContext';
import { useSteps } from '../../../context/StepsContext';
import AddInstructor from './components/AddInstructor/AddInstructor';
import Message from './components/Message/Message';

function PublishCourse() {
  const { Sections, Instructors, BasicInformation, AdvancedInformation } =
    useCourseCreation();
  const { currentStep, setCurrentStep } = useSteps();

  const CreateNewCourse = () => {
    console.log(Sections, Instructors, BasicInformation, AdvancedInformation);
  };
  return (
    <div className="w-full px-9 py-4 h-full flex flex-col gap-[3rem]">
      <Message />
      <AddInstructor />
      <div className="flex justify-between items-center pb-4 w-full mt-4">
        <Button
          onClick={() => {
            setCurrentStep((old) => old - 1);
          }}
          additionnalClasses="!p-4 !px-8 !text-lg"
          variant="tertiaryGray"
          text={'Prev Step'}
        />
        <Button
          variant="primary"
          additionnalClasses="!p-4 !px-8 !text-lg"
          text={'Submit for Review'}
          onClick={() => {
            CreateNewCourse();
          }}
        />
      </div>
    </div>
  );
}

export default PublishCourse;
