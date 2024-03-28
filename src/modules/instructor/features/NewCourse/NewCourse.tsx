import React, { useState } from 'react';
import CreateCourseLayout from './components/CreateCourseLayout/CreateCourseLayout';

function NewCourse() {
  const [currentSteps, SetCurrentStep] = useState(0);
  return (
    <div className="bg-gray-50 h-full w-full flex py-10 items-center justify-center">
      <CreateCourseLayout currentSteps={currentSteps}>
        NewCourse
      </CreateCourseLayout>
    </div>
  );
}

export default NewCourse;
