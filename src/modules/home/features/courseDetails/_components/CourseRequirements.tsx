import { ICourse } from 'modules/shared/types/course';
import React from 'react';

type Props = {
  courseDetails: ICourse;
};

export const CourseRequirements = ({ courseDetails }: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Course requirements:
      </div>
      <ul className="flex flex-col items-start gap-4 pl-6 text-gray-700 list-disc">
        {courseDetails?.course_requirements &&
          courseDetails?.course_requirements?.map(
            (item: string, index: number) => <li key={index}>{item}</li>
          )}
      </ul>
    </div>
  );
};
