import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import { lessonType } from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import React from 'react';

interface CourseLessonPropsType {
  Lesson: lessonType;
}
function CourseLesson({ Lesson }: CourseLessonPropsType) {
  return (
    <div className="w-full">
      <div className="flex items-center h-full justify-start gap-2 bg-white w-full p-6">
        <DragIcon />
        <p className="text-gray-900 leading-5 text-sm">{Lesson?.name}</p>
      </div>
    </div>
  );
}

export default CourseLesson;
