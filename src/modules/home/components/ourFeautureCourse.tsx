import React from 'react';
import { useTranslation } from 'react-i18next';
import { SeparatorHorizontal } from 'lucide-react';
import staricon from 'modules/shared/assets/icons/bestSelling/star.svg';
import duarationIcon from 'modules/shared/assets/icons/ourFeautureCourse/duration.svg';
import niveauIcon from 'modules/shared/assets/icons/ourFeautureCourse/niveau.svg';
import userIcon from 'modules/shared/assets/icons/ourFeautureCourse/userIcon.svg';
import MachineLeanringCover from 'modules/shared/assets/images/bestsellingcourse/image1.png';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import { Skeleton } from 'modules/shared/components/ui/skeleton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'modules/shared/components/ui/tooltip';
import { useBestCourse } from '../data/queries/home.query';
export default function OurFeautureCourse() {
  const { t } = useTranslation('home');
  const { data, error, isPending } = useBestCourse();
  console.log(data);
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
  }
  return (
    <div className="flex items-center justify-center w-full h-full pt-20 ">
      <div className=" flex flex-col gap-y-4 bg-white w-[90%] p-10  border border-gray-100  ">
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-[600] max-md:text-[20px] text-[34px]">
            {t('home.ourfeaturecourses')}
          </span>
          <p className=" w-[400px] text-gray-700 ">
            {t('home.ourfeaturecoursesparagraph')}
          </p>
        </div>
        {isPending ? (
          <div>
            <Skeleton className="w-[660px] h-[220px]" />
          </div>
        ) : (
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-3 overflow-auto max-xl:grid-cols-1">
              {data &&
                data?.map((item: Course) => (
                  <div
                    className="flex duration-150 "
                    key={item.id}
                    style={{ direction: 'ltr' }}
                  >
                    <div className="flex duration-300 hover:shadow-xl">
                      <div className="min-w-[220px] h-[200px]">
                        <img
                          src={item.course_thumbnail}
                          alt=""
                          className="w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col justify-between p-3 border border-gray-100 min-w-[350px] w-full h-[200px]">
                        <div className="flex items-center justify-between h-[40px] ">
                          {/* Tags */}
                          <span className="p-1 text-sm bg-primary-100 text-primary-700">
                            {item.course_categories?.name}
                          </span>
                          <span className="text-xl text-primary-500">
                            ${item.course_price}
                          </span>
                        </div>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="text-start">
                              {item.title}
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>{item.title}</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <div className="flex items-center justify-between h-[70px]">
                          <div className="flex items-center gap-1">
                            <Avatar>
                              <AvatarImage
                                src="https://avatars.githubusercontent.com/u/112077899?v=4"
                                alt="@Firas"
                              />
                              <AvatarFallback>FL</AvatarFallback>
                            </Avatar>
                            <span>Firas Latrach</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 ">
                              <img src={staricon} alt="staricon" width={20} />
                              <span className="text-gray-900">
                                {item.rating.toFixed(1)}{' '}
                                <span className="text-gray-400">(357,914)</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <SeparatorHorizontal
                          size={1}
                          className="w-full bg-gray-100 "
                        />
                        <div className="flex items-center justify-between">
                          <div className="flex items-center justify-between gap-2">
                            <img src={userIcon} alt="" />
                            <span>
                              {item.enrollmentCount}{' '}
                              <span className="text-gray-500">studnet</span>
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <img src={niveauIcon} alt="" />
                            <span>{item?.course_level?.name}</span>
                          </div>
                          <div className="flex items-center justify-between gap-2">
                            <img src={duarationIcon} alt="" />
                            <span>{item?.durations}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
