import React from 'react';
import StudentsFeedbackSelect from './StudentFeedbackSelect';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';
type Props = {};
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import Button from 'modules/shared/components/Button';

export const StudentFeedback = (props: Props) => {
  return (
    <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight scroll-m-20">
          Students Feedback
        </div>
        <div>
          <StudentsFeedbackSelect />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start pb-5 border-gray-300 gap-x-3">
          <Avatar>
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/112077899?v=4"
              alt="@Firas"
            />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-x-3">
                Firas Latrach .{' '}
                <span className="text-gray-600 font-[300] text-[14px]">
                  1 week ago
                </span>
              </div>
              <div className="flex items-center gap-1">
                <img src={staricon} alt="starIcon" />
                <img src={staricon} alt="starIcon" />
                <img src={staricon} alt="starIcon" />
                <img src={staricon} alt="starIcon" />
              </div>
            </div>
            <div className="text-gray-600 text-[14px] font-[400]">
              I appreciate the precise short videos (10 mins or less each)
              because overly long videos tend to make me lose focus. The
              instructor is very knowledgeable in Web Design and it shows as he
              shares his knowledge. These were my best 6 months of training.
              Thanks, Vako.
            </div>
          </div>
        </div>
        <div>
          <Button text="Load More" variant="secondaryPrimary" />
        </div>
      </div>
    </div>
  );
};
