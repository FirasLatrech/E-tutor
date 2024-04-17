import React from 'react';
import { useTranslation } from 'react-i18next';
import { Item } from '@radix-ui/react-dropdown-menu';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { MoveLeft, MoveRight, SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import checkout from 'modules/shared/assets/icons/ourFeautureCourse/checkout.svg';
import duarationIcon from 'modules/shared/assets/icons/ourFeautureCourse/duration.svg';
import heartIcon from 'modules/shared/assets/icons/ourFeautureCourse/heartIcon.svg';
import niveauIcon from 'modules/shared/assets/icons/ourFeautureCourse/niveau.svg';
import shoppingCartSimple from 'modules/shared/assets/icons/ourFeautureCourse/shoppingCartSimple.svg';
import userIcon from 'modules/shared/assets/icons/ourFeautureCourse/userIcon.svg';
import MachineLeanringCover from 'modules/shared/assets/images/bestsellingcourse/image1.png';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from 'modules/shared/components/ui/hover-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from 'modules/shared/components/ui/tooltip';
import { useRecentlyCourses } from '../data/queries/home.query';
import OurFeautureCourse from './ourFeautureCourse';
export default function RecentlyAddedCourses() {
  interface Course {
    id: number;
    title: string;
    subtitle: string | null;
    durations: string;
    course_thumbnail: string;
    rating: number;
    course_trailer: string;
    course_descriptions: {
      overview: string;
      objectives: string[];
      duration: string;
      format: string;
      level: string;
      certification: boolean;
      prerequisites: string[];
    };
    course_categories: {
      id: number;
      name: string;
      color: string;
      icon: string;
      create_by: number;
      background_color: string;
      courses_count: number;
      createdAt: string;
      deletedAt: string | null;
    };
    course_content: { message: string };
    target_audience: { message: string };
    course_requirements: { message: string };
    course_curriculum: { message: string };
    welcome_message: string;
    course_level: {
      id: number;
      name: string;
      createdAt: Date;
      deletedAt: Date;
    };
    congratulation_message: string;
    course_price: string;
    enrollmentCount: number;
    discount: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    instructor: Array<{
      id: number;
      email: string;
      username: string;
      firstName: string;
      lastName: string;
      photo: {
        path: string;
      };
    }>;
  }
  const { data, isPending } = useRecentlyCourses();
  console.log(data);
  const { t, i18n } = useTranslation('home');
  return (
    <div
      className="flex flex-col items-center w-full gap-5 pb-10 jus-c g-white b "
      style={{ direction: 'ltr' }}
    >
      <span className="text-[40px] max-md:text-[25px] mt-5 font-[600] h-[100px]  ">
        {t('home.recentlyaddedcourses')}
      </span>

      {/* cart  */}
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2  max-xl:grid-cols-4 max-2xl:grid-cols-5 gap-3 w-[90%] h-full">
        {data &&
          data?.map((course: Course, index: number) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div
                  className="flex flex-col items-center justify-center w-full border border-gray-100 min-w-[297px]"
                  key={index}
                >
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={course.course_thumbnail}
                      alt=""
                      height={183}
                      className="object-cover duration-300 cursor-pointer hover:scale-125 min-w-[297px]"
                    />
                  </div>
                  <div className="w-full p-2 text-gray-700 ">
                    <div className="flex items-center justify-between h-[40px]  ">
                      <span className="p-1 text-sm bg-primary-100 text-primary-700">
                        {course?.course_categories?.name}
                      </span>
                      <span className="text-xl text-primary-500">
                        ${course?.course_price}
                      </span>
                    </div>
                    <div className="text-gray-900 font-[400]  h-[60px] ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-start">
                            {course.title}
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>{course.title}</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <SeparatorHorizontal
                      size={1}
                      className="w-full bg-gray-100"
                    />
                    <div className="flex items-center justify-between pt-2 h-[46px]">
                      <div className="flex items-center gap-1 ">
                        <img src={staricon} alt="staricon" width={20} />
                        <span>{course.rating}</span>
                      </div>
                      <div>
                        <span className="text-gray-700">
                          {course.enrollmentCount}
                        </span>
                        <span className="text-gray-500"> students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[395px] p-0    ">
                <div className="flex items-center justify-between h-[40px] p-2">
                  <span className="p-1 text-sm bg-primary-100 text-primary-700">
                    {course?.course_categories?.name}
                  </span>
                </div>
                <div className="p-2">{course?.title}</div>
                <div className="flex items-center justify-between h-[70px] p-2">
                  {course?.instructor?.map((item, index: number) => {
                    console.log(item);
                    return (
                      <div className="flex items-center gap-1 " key={index}>
                        <Avatar>
                          <AvatarImage src={item?.photo?.path} alt="@Firas" />
                          <AvatarFallback>FL</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-gray-500">Course By </span>
                          <span className="text-gray-900">
                            {item?.firstName} {item?.lastName}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <div>
                    <div className="flex items-center gap-1 ">
                      <img src={staricon} alt="staricon" width={20} />
                      <span className="text-gray-900">
                        {/* {item} */}
                        {course.rating}
                        <span className="text-gray-400">(357,914)</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2 text-sm">
                  <div className="flex items-center justify-between gap-2">
                    <img src={userIcon} alt="" />
                    <span className="flex flex-col">
                      <span>265.7K</span>
                      <span className="text-gray-500">studnet</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <img src={niveauIcon} alt="" />
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <img src={duarationIcon} alt="" />
                    <span>6 hour</span>
                  </div>
                </div>
                <div className="h-[60px] flex items-center justify-between p-2">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <div>
                      <span className="text-[24px]">
                        {course.course_price}{' '}
                      </span>
                      <span className="text-[17px] text-gray-500 line-through">
                        {course.course_price}
                      </span>
                    </div>
                    <span className="p-2 bg-primary-100 text-primary-500">
                      56% OFF
                    </span>
                  </div>
                  <div className="p-4 cursor-pointer bg-primary-100">
                    <img src={heartIcon} alt="heartIcon" />
                  </div>
                </div>
                <hr className="w-full h-[1px] bg-gray-200 mt-4" />
                <div className="p-2 pt-2">
                  <span className="text-gray-900">What you’ll learn</span>
                  <div className="flex items-start gap-4">
                    <img src={checkout} alt="checkout" />
                    <span className="text-gray-600">
                      Learn to use Python professionally, learning both Python 2
                      and Python 3!
                    </span>
                  </div>
                </div>
                <hr className="w-full h-[1px] bg-gray-200 mt-4" />
                <div className="flex flex-col items-center justify-center gap-3 h-[120px] pt-2 pb-2">
                  <div className="flex items-center justify-center w-[80%]  h-[53px] bg-primary-500 pt-2 gap-3  cursor-pointer hover:opacity-50 duration-300">
                    <img src={shoppingCartSimple} alt="" width={28} />
                    <span className="font-[600] text-white">Add to Cart</span>
                  </div>
                  <div className="flex items-center justify-center w-[80%]  bg-primary-100 pt-2 gap-3  cursor-pointer h-[48px] text-primary-500 hover:opacity-50 duration-300">
                    <span className="font-[600]">Course Detail</span>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
      </div>

      <div className="flex gap-5 text-primary-500 w-[230px] bg-primary-200 h-[50px] items-center justify-center font-[600] cursor-pointer">
        {t('home.browseallcourse')}{' '}
        {i18n.language === 'ar' ? (
          <MoveLeft
            fill="#FF6636"
            color="#FF6636"
            className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
          />
        ) : (
          <MoveRight
            fill="#FF6636"
            color="#FF6636"
            className="duration-300 cursor-pointer hover:animate-out hover:rotate-x-30"
          />
        )}
      </div>

      {/* Our feature courses */}
    </div>
  );
}
