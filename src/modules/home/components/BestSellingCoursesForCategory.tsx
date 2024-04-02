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
import OurFeautureCourse from './ourFeautureCourse';
export default function BestSellingCoursesForCategory({
  id,
}: {
  id: string | undefined;
}) {
  const { t } = useTranslation('home');
  return (
    <div className="flex flex-col items-center w-full pb-[70px] pt-[60px] bg-white">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-[40px] font-[600] h-[100px] "
      >
        {t('home.bestsellingcourses')} in Web Development
      </motion.span>

      <div
        className="flex w-[294px] flex-col items-center justify-center  bg-white border"
        style={{ direction: 'ltr' }}
      >
        <div className="h-[183px] w-[294px] overflow-hidden ">
          <img
            src={MachineLeanringCover}
            alt=""
            width={294}
            height={183}
            className="duration-300 cursor-pointer hover:scale-125"
          />
        </div>
        <div className="p-2 text-gray-700">
          <div className="flex items-center justify-between h-[40px] ">
            {/* Tags */}
            <span className="p-1 text-sm bg-primary-100 text-primary-700">
              DESIGN
            </span>
            <span className="text-xl text-primary-500">$57</span>
          </div>
          <div className="text-gray-900 font-[400]  h-[60px] ">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="text-start">
                  Machine Learning A-Z™: Hands-On Python ...
                </TooltipTrigger>
                <TooltipContent>
                  <span>
                    Machine Learning A-Z™: Hands-On Python & R In Data
                  </span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <SeparatorHorizontal size={1} className="w-full bg-gray-100" />
          <div className="flex items-center justify-between pt-2 h-[46px]">
            <div className="flex items-center gap-1 ">
              <img src={staricon} alt="staricon" width={20} />
              <span>5.0</span>
            </div>
            <div>
              <span className="text-gray-700">265.7K</span>
              <span className="text-gray-500"> students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
