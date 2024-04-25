import React, { ReactNode } from 'react';
import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';
import Button from 'modules/shared/components/Button';
import { useCourseCreation } from '../../context/CourseCreationContext';

interface SaveChangesPropsType {
  currentStep: number;
}

function SaveChanges({ currentStep }: SaveChangesPropsType) {
  const { Sections, Instructors, BasicInformation, AdvancedInformation } =
    useCourseCreation();
  function saveCurrentStep() {
    switch (currentStep) {
      case 0:
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
    }
  }
  return (
    <div className="w-full max-xs:px-2 flex items-center justify-between py-6 px-8 border-b border-gray-100 max-lg:flex-col max-lg:gap-[2rem] max-lg:items-start">
      <p className="text-2xl font-semibold">
        {CreateCourseSteps[currentStep]?.text}
      </p>
      <div className="flex items-center justify-center gap-[1rem]">
        <Button variant="secondaryPrimary" text={''}>
          <p className="leading-5 text-primary-500 text-[1rem]">Save</p>
        </Button>
        <Button variant="tertiaryPrimary" text={''}>
          <p className="leading-5 text-primary-500 whitespace-nowrap text-[1rem]">
            Save & Preview
          </p>
        </Button>
      </div>
    </div>
  );
}

export default SaveChanges;
