import React from 'react';
import { type ICourse } from 'modules/shared/types/course';

type Props = {
  courseDetails: ICourse;
};

export const Description = ({ courseDetails }: Props) => {
  return (
    <div className="pt-6 w-[70%] max-lg:w-full flex flex-col gap-8 h-full pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Description
      </div>
      <div className="text-gray-900 text-[14px] font-[300] flex flex-col gap-8">
        <p>{courseDetails?.course_descriptions?.overview}</p>
        <p>{courseDetails?.course_descriptions?.objectives}</p>
      </div>
    </div>
  );
};
