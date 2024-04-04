import React from 'react';
import Message from './components/Message/Message';
import AddInstructor from './components/AddInstructor/AddInstructor';
import Button from 'modules/shared/components/Button';
import { useCourseSections } from '../../../context/CourseSectionsContext';
import { useSteps } from '../../../context/StepsContext';

function PublishCourse() {
  const { Sections, setSections } = useCourseSections();
  const { currentStep, setCurrentStep } = useSteps();

  return (
    <div className="w-full px-9 py-4 h-full flex flex-col gap-[3rem]">
      <Message />
      <AddInstructor />
      <div className="flex justify-between items-center pb-4 w-full mt-4">
        <Button
          onClick={() => setCurrentStep((old) => old - 1)}
          additionnalClasses="!p-4 !px-8 !text-lg"
          variant="tertiaryGray"
          text={'Prev Step'}
        />
        <Button
          variant="primary"
          additionnalClasses="!p-4 !px-8 !text-lg"
          text={'Submit for Review'}
          onClick={() => setCurrentStep((old) => old + 1)}
        />
      </div>
    </div>
  );
}

export default PublishCourse;
