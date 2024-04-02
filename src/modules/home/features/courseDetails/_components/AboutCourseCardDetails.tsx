import React from 'react';
import alarmIcon from 'modules/shared/assets/icons/courseDetails/alaram.svg';
import clockIcon from 'modules/shared/assets/icons/courseDetails/clockIcon.svg';
import primaryClock from 'modules/shared/assets/icons/courseDetails/clockprimaryicon.svg';
import copyIcon from 'modules/shared/assets/icons/courseDetails/copyIcon.svg';
import currency from 'modules/shared/assets/icons/courseDetails/currency.svg';
import facebookIcon from 'modules/shared/assets/icons/courseDetails/facebookIcon.svg';
import levelIcon from 'modules/shared/assets/icons/courseDetails/levelIcon.svg';
import monitor from 'modules/shared/assets/icons/courseDetails/monitor.svg';
import notebook from 'modules/shared/assets/icons/courseDetails/notebook.svg';
import notebookPrimary from 'modules/shared/assets/icons/courseDetails/notebookPrimary.svg';
import notepad from 'modules/shared/assets/icons/courseDetails/notepad.svg';
import notepadPrimary from 'modules/shared/assets/icons/courseDetails/notepadPrimary.svg';
import stack from 'modules/shared/assets/icons/courseDetails/stack.svg';
import trophy from 'modules/shared/assets/icons/courseDetails/trophy.svg';
import usersIcon from 'modules/shared/assets/icons/courseDetails/usersIcons.svg';
import Button from 'modules/shared/components/Button';
type Props = {};
const courseDetail = [
  {
    icon: clockIcon,
    title: 'Course Duration',
    value: '6 Month',
  },
  {
    icon: levelIcon,
    title: 'Course Level',
    value: 'Beginner and Intermediate',
  },
  {
    icon: usersIcon,
    title: 'Students Enrolled',
    value: '69,419,618',
  },
  {
    icon: notebook,
    title: 'Language',
    value: 'Mandarin',
  },
  {
    icon: notepad,
    title: 'Subtitle Language',
    value: 'English',
  },
  // Add more course detail objects here...
];
const courseIncludes = [
  {
    icon: primaryClock,
    title: 'Lifetime access',
  },
  {
    icon: currency,
    title: '30-days money-back guarantee',
  },
  {
    icon: notebookPrimary,
    title: 'Free exercises file & downloadable resources',
  },
  {
    icon: monitor,
    title: 'Access on mobile , tablet and TV',
  },
  {
    icon: trophy,
    title: 'Shareable certificate of completion',
  },
  {
    icon: notepadPrimary,
    title: 'English subtitles',
  },
  {
    icon: stack,
    title: '100% online course',
  },
  // Add more course detail objects here...
];
export const AboutCourseCardDetails = (props: Props) => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <span className="font-[300] text-[22px]">$14.00</span>
          <span className="text-gray-500 line-through text-ellipsis ">
            $26.00
          </span>
        </div>

        {/* discounrt  */}
        <div>
          <span className="p-2 bg-primary-100 text-primary-600">50% off</span>
        </div>
      </div>
      <div className="flex items-center gap-2 pb-4 pl-4 border-b border-gray-100">
        <img src={alarmIcon} alt="" />
        <span className="text-[#E34444]">2 days left at this price!</span>
      </div>
      <div className="flex flex-col w-full gap-4 p-3 pt-5 font-[300] border-b border-gray-100 pb-6">
        {courseDetail.map((detail, index) => (
          <div key={index} className="flex items-center justify-between ">
            <div className="flex items-center gap-2">
              <img src={detail.icon} alt="icon" />
              <span className="text-gray-900 font-[300] text-[14px]">
                {detail.title}
              </span>
            </div>
            <span className="text-gray-600 text-[14px]">{detail.value}</span>
          </div>
        ))}
      </div>
      <div className="p-3">
        <Button
          variant="primary"
          text="Add To Cart"
          size="lg"
          className="w-full"
        ></Button>
        <Button
          variant="secondaryPrimary"
          text="Buy Now"
          size="lg"
          className="w-full "
        ></Button>
      </div>
      <div className="flex pl-2 pr-2">
        <Button
          variant="tertiaryGray"
          text="Wishlist"
          size="lg"
          className="w-full border border-gray-100"
        ></Button>
        <Button
          variant="tertiaryGray"
          text="Gift Course"
          size="lg"
          className="w-full border border-gray-100"
        ></Button>
      </div>
      <div className="text-[14px] p-4 text-gray-600 border-b border-gray-100">
        <span className="text-gray-900">Note</span>: all course have 30-days
        money-back guarantee
      </div>

      <div className="border-b border-gray-100">
        <div className="p-4">
          <span className="text-gray-800 text-[15px] font-[500]">
            This course includes:
          </span>
          <div className="flex flex-col gap-3 ">
            {courseIncludes.map((include, index) => (
              <div key={index} className="flex items-center gap-2 pt-2">
                <img src={include.icon} alt="icon" />
                <span className="text-gray-600 font-[400] text-[14px]">
                  {include.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 text-gray-900">
        <span>Share this course : </span>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 p-3 bg-gray-50 w-[140px] cursor-pointer hover:opacity-80 ">
            <img src={copyIcon} alt="copyIcon" width={21} height={21} />
            <div className="text-gray-700 text-[14px]">Copy Link</div>
          </div>
          <div className="p-3 cursor-pointer bg-gray-50 hover:opacity-80 ">
            <img src={facebookIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
