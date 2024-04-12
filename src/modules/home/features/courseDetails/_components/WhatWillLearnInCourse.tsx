import React from 'react';
import checkCircle from 'modules/shared/assets/icons/courseDetails/checkCircle.svg';
type Props = {
  courseDetails: ICourse;
};
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { ICourse } from 'modules/shared/types/course';
export const WhatWillLearnInCourse = ({ courseDetails }: Props) => {
  const course_content = courseDetails?.course_content;
  console.log(course_content);
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="w-full h-[300px] bg-[#E1F7E366] p-6 flex flex-col gap-6">
        <div className="text-[24px] font-[600]">
          {' '}
          What you will learn in this course
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="w-[100%] flex flex-col gap-6">
            {course_content &&
              course_content?.map((item: string, index: number) => {
                return (
                  <div className="flex items-start gap-x-3" key={index}>
                    <img src={checkCircle} alt="" />
                    <p className="text-gray-700 text-[14px] font-[300]">
                      {item}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
