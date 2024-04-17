import React, { type ReactNode } from 'react';
import CheckedStepIcon from 'modules/instructor/assets/icons/CreateCourse/CheckedStepIcons';
import { useMediaQuery } from '@uidotdev/usehooks';
import SaveChanges from '../../components/SaveChanges/SaveChanges';
import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';

interface CreateCourseLayoutTypeProps {
  children: ReactNode;
  currentStep: number;
}
function CreateCourseLayout({
  children,
  currentStep,
}: CreateCourseLayoutTypeProps) {
  const showOneStep = useMediaQuery('(max-width: 1000px)');
  return (
    <div className="w-[80%] bg-white max-xs:w-[90%] max-xs:px-2">
      <div
        className={`scrollbar-primary-500  w-full overflow-auto flex items-center justify-between gap-[2.5rem] border-b border-gray-100 max-xl:gap-1 ${
          showOneStep
            ? 'items-center justify-center'
            : 'items-center justify-between'
        }`}
      >
        {CreateCourseSteps?.map(({ text, Icon }, index: number) => {
          if ((showOneStep && index == currentStep) || !showOneStep)
            return (
              <div
                key={index}
                className={`w-full py-4 gap-3 flex items-center justify-start px-6 gap-1rem max-xl:px-2 ${
                  index == currentStep
                    ? 'border-b-2 border-primary-500 !text-gray-900'
                    : ''
                } ${showOneStep ? 'justify-center' : ''}`}
              >
                <Icon />
                <p
                  className={`text-gray-600 whitespace-nowrap  leading-7 ${
                    index == currentStep ? '!text-gray-900' : ''
                  }`}
                >
                  {text}
                </p>
                {currentStep > index && <CheckedStepIcon />}
              </div>
            );
        })}
      </div>
      <SaveChanges currentStep={currentStep} />
      {children}
    </div>
  );
}

export default CreateCourseLayout;
