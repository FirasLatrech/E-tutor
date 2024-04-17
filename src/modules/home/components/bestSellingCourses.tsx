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
import { useNavigation } from 'modules/shared/hooks/useNavigation';
import { type ICourse } from 'modules/shared/types/course';
import { useBestSellingCourse } from '../data/queries/home.query';
import OurFeautureCourse from './ourFeautureCourse';
export default function BestSellingCourses() {
  const { data } = useBestSellingCourse();

  const { t } = useTranslation('home');
  const goTo = useNavigation();
  const handelNaviage = (id: string) => {
    goTo(`/courses/${id}`);
  };
  return (
    <div className="flex flex-col items-center w-full bg-gray-50 gap-y-6 ">
      <span className="text-[40px] font-[600] h-[100px] max-2xl:h-full ">
        {t('home.bestsellingcourses')}
      </span>
      <div className="grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2  max-xl:grid-cols-4 max-2xl:grid-cols-5 gap-3 w-[90%] h-full">
        {data?.map((item: ICourse) => {
          return (
            <div
              className="flex flex-col items-center justify-center  bg-white w-full h-[340px] min-w-[279px]  shadow-md"
              key={item.id}
              style={{ direction: 'ltr' }}
              onClick={() => {
                handelNaviage(item?.id);
              }}
            >
              <div className="h-[183px] w-full overflow-hidden">
                <img
                  src={
                    item.course_thumbnail
                      ? item.course_thumbnail
                      : MachineLeanringCover
                  }
                  alt=""
                  height={183}
                  className="object-cover duration-300 cursor-pointer hover:scale-125 min-w-[279px]"
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
