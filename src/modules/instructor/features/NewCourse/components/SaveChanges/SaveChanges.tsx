import React, { ReactNode } from 'react';
import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';
import Button from 'modules/shared/components/Button';

interface SaveChangesPropsType {
  currentStep: number;
}

function SaveChanges({ currentStep }: SaveChangesPropsType) {
  return (
    <div className="w-full flex items-center justify-between py-6 px-8 border-b border-gray-100">
      <p className="text-2xl font-semibold">
        {CreateCourseSteps[currentStep]?.text}
      </p>
      <div className="flex items-center justify-center gap-[1rem]">
        <Button variant="secondaryPrimary" text={''}>
          <p className="leading-5 text-primary-500 text-[1rem]">Save</p>
        </Button>
        <Button variant="tertiaryPrimary" text={''}>
          <p className="leading-5 text-primary-500 text-[1rem]">
            Save & Preview
          </p>
        </Button>
      </div>
    </div>
  );
}

export default SaveChanges;
