import React from 'react';
import StudentsFeedbackSelect from './StudentFeedbackSelect';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';
type Props = {};
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import MachineLeanringCover from 'modules/shared/assets/images/bestsellingcourse/image1.png';
import Button from 'modules/shared/components/Button';
import { MoveLeft, MoveRight, SeparatorHorizontal } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'modules/shared/components/ui/tooltip';
const courses = [
  {
    cover: MachineLeanringCover,
    tag: 'DESIGN',
    price: '$57.00',
    title: 'Machine Learning A-Z™: Hands-On Python ...',
    fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    rating: '5.0',
    students: '265.7K',
  },
  {
    cover: MachineLeanringCover,
    tag: 'DESIGN',
    price: '$57.00',
    title: 'Machine Learning A-Z™: Hands-On Python ...',
    fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    rating: '5.0',
    students: '265.7K',
  },
  {
    cover: MachineLeanringCover,
    tag: 'DESIGN',
    price: '$57.00',
    title: 'Machine Learning A-Z™: Hands-On Python ...',
    fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    rating: '5.0',
    students: '265.7K',
  },
];
export const RelatedCourse = (props: Props) => {
  return (
    <div className="pt-6 w-[100%] flex flex-col gap-8 h-full pb-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Related Courses
        </div>

        <div className="flex gap-5 text-primary-500 w-[120px] bg-primary-100 h-[40px] items-center justify-center font-[400] cursor-pointer">
          <span>View All</span>
          <MoveRight
            fill="#FF6636"
            color="#FF6636"
            className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
          />
        </div>
      </div>
      <div className="flex gap-x-5">
        {courses.map((course, index) => (
          <div
            className="flex w-[294px] flex-col items-center justify-center  bg-white border"
            key={index}
          >
            <div className="h-[183px] w-[294px] overflow-hidden">
              <img
                src={course.cover}
                alt=""
                width={294}
                height={183}
                className="duration-300 cursor-pointer hover:scale-125"
              />
            </div>
            <div className="p-2 text-gray-700">
              <div className="flex items-center justify-between h-[40px] ">
                <span className="p-1 text-sm bg-primary-100 text-primary-700">
                  {course.tag}
                </span>
                <span className="text-xl text-primary-500">{course.price}</span>
              </div>
              <div className="text-gray-900 font-[400]  h-[60px] ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="text-start">
                      {course.title}
                    </TooltipTrigger>
                    <TooltipContent>
                      <span>{course.fullTitle}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
              <div className="flex items-center justify-between pt-2 h-[46px]">
                <div className="flex items-center gap-1 ">
                  <img src={staricon} alt="staricon" width={20} />
                  <span>{course.rating}</span>
                </div>
                <div>
                  <span className="text-gray-700">{course.students}</span>
                  <span className="text-gray-500"> students</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
