
import playIcon from 'modules/shared/assets/icons/courseDetails/playIcon.svg';


import { AboutCourseCardDetails } from './_components/AboutCourseCardDetails';
import { BreadcrumbWithCustomSeparator } from './_components/BreadcrumbWithCustomSeparator';
import { CourseInstructor } from './_components/courseInstructor';
import { Curriclum } from './_components/Curriclum';
import { CourseRetting } from './_components/CourseRetting';

import { StudentFeedback } from './_components/StudentFeedback';
import { RelatedCourse } from './_components/RelatedCourse';
import { CourseFor } from './_components/CourseFor';
import { BreadcrumbLink } from './_components/BreadcrumbLink';
import { Description } from './_components/Description';
import { WhatWillLearnInCourse } from './_components/WhatWillLearnInCourse';
import { CourseRequirements } from './_components/CourseRequirements';
type Props = {};
const aboutVideo = [
  {
    title: 'Overview',
  },
  {
    title: 'Curriculum',
  },
  {
    title: 'Instructor',
  },
  {
    title: 'Review',
  },
];

const courseDetails = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <div className="w-full">
        <div className="flex items-center justify-center w-full h-full bg-[#f5f7fa] ">
          {/* BreadcrumbLink */}

          <BreadcrumbLink />
        </div>
        <div className="flex flex-col items-center justify-center w-full bg-white ">
          <div className="w-[80%] h-full pt-4 ">
            <div className="bg-gray-600 w-[70%] h-[500px] flex items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:opacity-50">
                <img src={playIcon} alt="" />
              </div>
            </div>
            <div className=" border-b border-gray-100 w-[70%] flex items-center justify-between">
              {aboutVideo.map((item) => {
                return (
                  <span className="w-[130px] hover:border-b hover:border-primary-500  pt-4 duration:300 cursor-pointer text-center h-[60px] text-[16px] text-gray-900" key={item.title}>
                    {item.title}
                  </span>
                );
              })}
            </div>
            <Description />
            {/* What you will learn in this course  */}
            <WhatWillLearnInCourse />

            {/* Who this course is for: */}
            <CourseFor />

            {/* Course requirements: */}
            <CourseRequirements/>

            {/* Curriculum: */}
            <Curriclum />
            {/* CourseInstuctor  */}
            <CourseInstructor />

            {/* courseRetting  */}
            <CourseRetting />

            {/* student Feedback  */}
            <StudentFeedback />

            <RelatedCourse />
          </div>
        </div>
      </div>
      <div className="w-[360px] h-[1060px] shadow-lg absolute  right-[30px] bg-white flex flex-col self-start">
        <AboutCourseCardDetails />
      </div>
    </div>
  );
};
export default courseDetails;
