import React from 'react';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';
import starIconVide from 'modules/shared/assets/icons/courseDetails/starIconVide.svg';
import { Progress } from 'modules/shared/components/ui/progress';

type Props = {};
const ratingData = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 25 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 0 },
];
export const CourseRetting = (props: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Course Reting :
      </div>
      <div className="flex items-center w-full gap-3">
        <div className="w-[200px] h-[190px] border flex items-center justify-center flex-col gap-3 border-gray-100">
          <span className="text-[42px] text-gray-900 font-[600]">4.8</span>
          <div className="flex items-center gap-x-0">
            <img src={staricon} alt="starIcon" />
            <img src={staricon} alt="starIcon" />
            <img src={staricon} alt="starIcon" />
            <img src={staricon} alt="starIcon" />
          </div>
          <span>Course Rating</span>
        </div>
        <div className="flex flex-col w-full gap-[15px]">
          {ratingData.map((data, index) => (
            <div key={index} className="flex items-center w-full gap-x-6">
              <div className="flex items-center gap-1">
                {[...Array(data.stars)].map((_, i) => (
                  <img key={i} src={staricon} alt="staricon" />
                ))}
                {[...Array(5 - data.stars)].map((_, i) => (
                  <img key={i + data.stars} src={starIconVide} alt="staricon" />
                ))}
              </div>
              <div className="text-gray-600 font-[400] text-[15px]">
                {data.stars} Star Rating
              </div>
              <Progress
                className="w-[316px] h-[10px] rounded-none bg-warning-100"
                value={data.percentage}
              />
              <span className="text-gray-900 font-[500]">
                {data.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
