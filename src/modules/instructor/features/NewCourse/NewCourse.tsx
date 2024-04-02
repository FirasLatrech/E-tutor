import React, { useState } from 'react';
import CreateCourseLayout from './components/CreateCourseLayout/CreateCourseLayout';
import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';
import { StepsProvider, useSteps } from './context/StepsContext';
import { CourseSectionsProvider } from './context/CourseSectionsContext';

function NewCourse() {
  const { currentStep } = useSteps();
  const CurrentStepComponent = CreateCourseSteps[currentStep]?.Component;

  return (
    <div className="bg-gray-50 w-full flex py-10 items-start justify-center">
      <CreateCourseLayout currentStep={currentStep}>
        <CurrentStepComponent />
      </CreateCourseLayout>
    </div>
  );
}

export default function page() {
  return (
    <StepsProvider>
      <CourseSectionsProvider>
        <NewCourse />
      </CourseSectionsProvider>
    </StepsProvider>
  );
}
