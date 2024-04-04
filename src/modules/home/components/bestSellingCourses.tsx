import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import MachineLeanringCover from 'modules/shared/assets/images/bestsellingcourse/image1.png';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from 'modules/shared/components/ui/tooltip';
import OurFeautureCourse from './ourFeautureCourse';
import { useBestSellingCourse } from '../data/queries/home.query';
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
  congratulation_message: string;
  course_price: string;
  enrollmentCount: number;
  discount: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
export default function BestSellingCourses() {
  const { status, data, error, isPending } = useBestSellingCourse();
  console.log(data);
  const { t } = useTranslation('home');
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 ">
      <span className="text-[40px] font-[600] h-[100px] ">
        {t('home.bestsellingcourses')}
      </span>
      <div className="grid grid-cols-5 gap-3">
        {data?.map((item: Course) => {
          return (
            <div
              className="flex flex-col items-center justify-center  bg-white w-[250px] h-[340px]  shadow-md"
              key={item.id}
              style={{ direction: 'ltr' }}
            >
              <div className="h-[183px] w-full overflow-hidden">
                <img
                  src={
                    item.course_thumbnail
                      ? item.course_thumbnail
                      : MachineLeanringCover
                  }
                  alt=""
                  width={294}
                  height={183}
                  className="duration-300 cursor-pointer hover:scale-125"
                />
              </div>
              <div className="w-full p-2 text-gray-700">
                <div className="flex items-center justify-between h-[40px] ">
                  <span className="p-1 text-sm bg-primary-100 text-primary-700">
                    {item.course_categories?.name}
                  </span>
                  {/* );
                  })} */}

                  <span className="text-xl text-primary-500">
                    ${item.course_price}
                  </span>
                </div>
                <div className="text-gray-900 font-[400]  h-[60px] ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="text-start">
                        {item?.title}
                      </TooltipTrigger>
                      <TooltipContent>
                        <span>{item?.title}</span>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
                <div className=" flex items-center justify-between pt-2 h-[46px]">
                  <div className="flex items-center gap-1 ">
                    <img src={staricon} alt="staricon" width={20} />
                    <span>{item?.rating}</span>
                  </div>
                  <div>
                    <span className="text-gray-700">
                      {item?.enrollmentCount}
                    </span>
                    <span className="text-gray-500"> students</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Our feature courses */}
      <OurFeautureCourse />
    </div>
  );
}
