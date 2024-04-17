import { motion } from 'framer-motion';
import { CreateCourseSteps } from 'modules/instructor/constants/createCourseSteps.constant';
import { CourseSectionsProvider } from './context/CourseSectionsContext';
import { StepsProvider, useSteps } from './context/StepsContext';
import CreateCourseLayout from './layout/CreateCourseLayout/CreateCourseLayout';

function NewCourse() {
  const { currentStep } = useSteps();
  const CurrentStepComponent = CreateCourseSteps[currentStep]?.Component;

  return (
    <div className="bg-gray-50 w-full flex py-10 items-start justify-center">
      <CreateCourseLayout currentStep={currentStep}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <CurrentStepComponent />
        </motion.div>
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
