import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';
import React, { ReactNode } from 'react';
import SaveChanges from '../SaveChanges/SaveChanges';

interface CreateCourseLayoutTypeProps {
  children: ReactNode;
  currentSteps: number;
}
function CreateCourseLayout({
  children,
  currentSteps,
}: CreateCourseLayoutTypeProps) {
  const CurrentStepComponent = CreateCourseSteps[currentSteps]?.Component
  return (
    <div className="h-full w-[80%] bg-white">
      <div className="w-full flex items-center justify-between gap-[2.5rem] border-b border-gray-100">
        {CreateCourseSteps?.map(({ text, Icon }, index: number) => {
          return (
            <div
              className={`w-full py-4 gap-3 flex items-center justify-start px-6 gap-1rem ${
                index == currentSteps
                  ? 'border-b-2 border-primary-500 !text-gray-900'
                  : ''
              }`}
            >
              <Icon />
              <p
                className={`text-gray-600 leading-7 ${
                  index == currentSteps ? '!text-gray-900' : ''
                }`}
              >
                {text}
              </p>
            </div>
          );
        })}
      </div>
      <SaveChanges currentStep={currentSteps}/>
      <CurrentStepComponent />
    </div>
  );
}

export default CreateCourseLayout;
