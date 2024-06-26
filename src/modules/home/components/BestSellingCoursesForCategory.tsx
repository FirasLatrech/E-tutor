import React, { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { TooltipTrigger } from '@radix-ui/react-tooltip';
import { motion } from 'framer-motion';
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
import { useGetBestCourseByCategoryId } from '../data/queries/home.query';

interface categoryDetails {
  name: string;
}
export default function BestSellingCoursesForCategory({
  id,
  categoryDetails,
}: {
  id: string;
  categoryDetails: categoryDetails;
}) {
  const { data } = useGetBestCourseByCategoryId(id);
  console.log(data);
  const { t } = useTranslation('home');
  const goTo = useNavigation();
  const handelNaviage = (id: string) => {
    goTo(`/courses/${id}`);
  };
  return (
    <div className="flex flex-col items-center w-full pb-[70px] pt-[60px] bg-white">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-[40px] font-[600]  max-xl:text-[30px] "
      >
        {t('home.bestsellingcourses')} in {categoryDetails?.name}
      </motion.span>

      <div className="grid grid-cols-4 gap-3 max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-2xl:grid-cols-5 w-[90%] ">
        {data &&
          Array.isArray(data) &&
          data?.map((item: ICourse) => {
            console.log(item);
            return (
              <div
                className="flex flex-col items-center justify-center w-full bg-white border min-w-[297px]"
                style={{ direction: 'ltr' }}
                key={item.id}
                onClick={() => {
                  handelNaviage(item?.id);
                }}
              >
                <div className="h-[183px]  overflow-hidden ">
                  <img
                    src={item.course_thumbnail}
                    alt=""
                    height={183}
                    className="duration-300 min-w-[297px] cursor-pointer hover:scale-125"
                  />
                </div>
                <div className="w-full text-gray-700 ">
                  <div className="flex items-center justify-between h-[40px] p-2 pt-3">
                    {/* Tags */}
                    <span className="p-1 text-sm bg-primary-100 text-primary-700">
                      {item.course_category?.name}
                    </span>

                    <span className="text-xl text-primary-500">
                      ${item?.course_price}
                    </span>
                  </div>
                  <div className="text-gray-900 font-[400]  h-[60px] p-2">
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
                  <hr className="w-full mt-1 mb-1 bg-gray-100" />
                  <div className="flex items-center justify-between pt-2 h-[46px] p-2">
                    <div className="flex items-center gap-1 ">
                      <img src={staricon} alt="staricon" width={20} />
                      <span>{item.rating}</span>
                    </div>
                    <div>
                      <span className="text-gray-700">
                        {item.enrollmentCount}
                      </span>
                      <span className="text-gray-500"> students</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
