import Course from 'modules/home/components/Course';
import arrowRight from 'modules/shared/assets/arrow/arrowRightPrimary.svg';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';

import checkCircle from 'modules/shared/assets/icons/courseDetails/checkCircle.svg';
import playIcon from 'modules/shared/assets/icons/courseDetails/playIcon.svg';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { AboutCourseCardDetails } from './_components/AboutCourseCardDetails';
import { BreadcrumbWithCustomSeparator } from './_components/BreadcrumbWithCustomSeparator';
import { CourseInstructor } from './_components/courseInstructor';
import { Curriclum } from './_components/Curriclum';
import { CourseRetting } from './_components/CourseRetting';

import { StudentFeedback } from './_components/StudentFeedback';
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
          <div className="w-[80%] pt-10 pb-4">
            <div className="flex flex-col gap-3 max-w-[770px]">
              <BreadcrumbWithCustomSeparator />
              <div className="text-gray-900 font-[600] text-[32px]">
                Complete Website Responsive Design: from Figma to Webflow to
                Website Design
              </div>
              <span className="text-gray-700">
                3 in 1 Course: Learn to design websites with Figma, build with
                Webflow, and make a living freelancing.
              </span>
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2 text-xs">
                  <Avatar>
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/112077899?v=4"
                      alt="@Firas"
                    />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-600">Created by : </span>
                    <span className="text-gray-900">Firas Latrach </span>
                  </div>
                </div>
                <div className="flex">
                  <img src={staricon} alt="staricon" width={20} />
                  <img src={staricon} alt="staricon" width={20} />
                  <img src={staricon} alt="staricon" width={20} />
                </div>
              </div>
            </div>
          </div>
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
                  <span className="w-[130px] hover:border-b hover:border-primary-500  pt-4 duration:300 cursor-pointer text-center h-[60px] text-[16px] text-gray-900">
                    {item.title}
                  </span>
                );
              })}
            </div>
            <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
              <div className="text-2xl font-semibold tracking-tight scroll-m-20">
                Description
              </div>
              <div className="text-gray-900 text-[14px] font-[300] flex flex-col gap-8">
                <p>
                  It gives you a huge self-satisfaction when you look at your
                  work and say, "I made this!". I love that feeling after I'm
                  done working on something. When I lean back in my chair, look
                  at the final result with a smile, and have this little "spark
                  joy" moment. It's especially satisfying when I know I just
                  made $5,000.
                </p>
                <p>
                  I do! And that's why I got into this field. Not for the love
                  of Web Design, which I do now. But for the LIFESTYLE! There
                  are many ways one can achieve this lifestyle. This is my way.
                  This is how I achieved a lifestyle I've been fantasizing about
                  for five years. And I'm going to teach you the same. Often
                  people think Web Design is complicated. That it needs some
                  creative talent or knack for computers. Sure, a lot of people
                  make it very complicated. People make the simplest things
                  complicated. Like most subjects taught in the universities.
                  But I don't like complicated. I like easy. I like life hacks.
                  I like to take the shortest and simplest route to my
                  destination. I haven't gone to an art school or have a
                  computer science degree. I'm an outsider to this field who
                  hacked himself into it, somehow ending up being a sought-after
                  professional. That's how I'm going to teach you Web Design. So
                  you're not demotivated on your way with needless complexity.
                  So you enjoy the process because it's simple and fun. So you
                  can become a Freelance Web Designer in no time.
                </p>
              </div>
            </div>
            {/* What you will learn in this course  */}
            <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
              <div className="w-full h-[300px] bg-[#E1F7E366] p-6 flex flex-col gap-6">
                <div className="text-[24px] font-[600]">
                  {' '}
                  What you will learn in this course
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="w-[50%] ">
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                  </div>
                  <div className="w-[50%]  ">
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                    <div className="flex items-start gap-x-3">
                      <img src={checkCircle} alt="" />
                      <p className="text-gray-700 text-[14px] font-[300]">
                        You will learn how to design beautiful websites using
                        Figma, an interface design tool used by designers at
                        Uber, Airbnb and Microsoft.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Who this course is for: */}
            <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
              <div className="flex flex-col items-start gap-3">
                <div className="text-2xl font-semibold tracking-tight scroll-m-20">
                  Who this course is for:
                </div>
                <div className="flex items-center gap-x-5">
                  <img src={arrowRight} alt="arrowRight" />
                  <div className="text-gray-700 text-[14px] font-[300]">
                    This course is for those who want to launch a Freelance Web
                    Design career.
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src={arrowRight} alt="arrowRight" />
                  <div className="text-gray-700 text-[14px] font-[300]">
                    Praesent eget consequat elit. Duis a pretium purus.
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <img src={arrowRight} alt="arrowRight" />
                  <div className="text-gray-700 text-[14px] font-[300]">
                    Sed sagittis suscipit condimentum pellentesque vulputate
                    feugiat libero nec accumsan.
                  </div>
                </div>
              </div>
            </div>

            {/* Course requirements: */}
            <div className="pt-6 w-[70%] flex flex-col gap-8 h-full pb-6">
              <div className="text-2xl font-semibold tracking-tight scroll-m-20">
                Who this course is for:
              </div>
              <ul className="flex flex-col items-start gap-4 pl-6 text-gray-700 list-disc">
                <li>
                  Nunc auctor consequat lorem, in posuere enim hendrerit sed.
                </li>
                <li>
                  Sed sagittis suscipit condimentum pellentesque vulputate
                  feugiat libero nec accumsan.
                </li>
              </ul>
            </div>

            {/* Curriculum: */}
            <Curriclum />
            {/* CourseInstuctor  */}
            <CourseInstructor />

            {/* courseRetting  */}
            <CourseRetting />

            {/* student Feedback  */}
            <StudentFeedback/>
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
