import React from 'react';
import { useTranslation } from 'react-i18next';
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
import OurFeautureCourse from './ourFeautureCourse';
export default function RecentlyAddedCourses() {
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
    // {
    //   cover: MachineLeanringCover,
    //   tag: 'DESIGN',
    //   price: '$57.00',
    //   title: 'Machine Learning A-Z™: Hands-On Python ...',
    //   fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    //   rating: '5.0',
    //   students: '265.7K',
    // },
    // {
    //   cover: MachineLeanringCover,
    //   tag: 'DESIGN',
    //   price: '$57.00',
    //   title: 'Machine Learning A-Z™: Hands-On Python ...',
    //   fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    //   rating: '5.0',
    //   students: '265.7K',
    // },
    // {
    //   cover: MachineLeanringCover,
    //   tag: 'DESIGN',
    //   price: '$57.00',
    //   title: 'Machine Learning A-Z™: Hands-On Python ...',
    //   fullTitle: 'Machine Learning A-Z™: Hands-On Python & R In Data',
    //   rating: '5.0',
    //   students: '265.7K',
    // },
  ];

  const { t, i18n } = useTranslation('home');
  return (
    <div
      className="flex flex-col items-center w-full gap-10 pb-10 g-white b "
      style={{ direction: 'ltr' }}
    >
      <span className="text-[40px] font-[600] h-[100px]  ">
        {t('home.recentlyaddedcourses')}
      </span>

      {/* cart  */}
      <div className="grid grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <HoverCard key={index}>
            <HoverCardTrigger asChild>
              <div className="flex w-[294px] flex-col items-center justify-center  bg-white border">
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
                    <span className="text-xl text-primary-500">
                      {course.price}
                    </span>
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
                      <span className="text-gray-700">{course.students}</span>
                      <span className="text-gray-500"> students</span>
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-[395px] p-0    ">
              <div className="flex items-center justify-between h-[40px] p-2">
                <span className="p-1 text-sm bg-primary-100 text-primary-700">
                  {course.tag}
                </span>
              </div>
              <div className="p-2">{course.title}</div>
              <div className="flex items-center justify-between h-[70px] p-2">
                <div className="flex items-center gap-1 ">
                  <Avatar>
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/112077899?v=4"
                      alt="@Firas"
                    />
                    <AvatarFallback>FL</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-gray-500">Course By </span>
                    <span className="text-gray-900">Firas Latrach</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 ">
                    <img src={staricon} alt="staricon" width={20} />
                    <span className="text-gray-900">
                      5.0 <span className="text-gray-400">(357,914)</span>
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
                    <span className="text-[24px]">{course.price} </span>
                    <span className="text-[17px] text-gray-500 line-through">
                      {course.price}
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
                <div className="flex items-center justify-center w-[80%]  h-[48px] bg-primary-500 pt-2 gap-3  cursor-pointer">
                  <img src={shoppingCartSimple} alt="" width={28} />
                  <span className="font-[600] text-white">Add to Cart</span>
                </div>
                <div className="flex items-center justify-center w-[80%]  bg-primary-100 pt-2 gap-3  cursor-pointer h-[48px] text-primary-500">
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
