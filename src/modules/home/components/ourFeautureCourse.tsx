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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from 'modules/shared/components/ui/tooltip';
export default function OurFeautureCourse() {
  const { t } = useTranslation('home');

  return (
    <div className="flex items-center justify-center w-full h-full pt-20 ">
      <div className=" bg-white w-[80%] p-20  border  ">
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-[600] text-[34px]">
            {t('home.ourfeaturecourses')}
          </span>
          <p className=" w-[400px] text-gray-700 ">
            {t('home.ourfeaturecoursesparagraph')}
          </p>
        </div>

        <div
          className="flex   w-[660px]  hover:shadow-xl duration-150 "
          style={{ direction: 'ltr' }}
        >
          <div className=" w-[430px] overflow-hidden">
            <img
              src={MachineLeanringCover}
              alt=""
              width={264}
              height={183}
              className="duration-300 cursor-pointer hover:scale-125"
            />
          </div>
          <div className="flex flex-col justify-between w-full p-3 pl-3 pr-5 border">
            <div className="flex items-center justify-between h-[40px] ">
              {/* Tags */}
              <span className="p-1 text-sm bg-primary-100 text-primary-700">
                DESIGN
              </span>
              <span className="text-xl text-primary-500">$57</span>
            </div>
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
                    5.0 <span className="text-gray-400">(357,914)</span>
                  </span>
                </div>
              </div>
            </div>
            <SeparatorHorizontal size={1} className="w-full bg-gray-100 " />
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between gap-2">
                <img src={userIcon} alt="" />
                <span>
                  265.7K <span className="text-gray-500">studnet</span>
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
          </div>
        </div>
      </div>
    </div>
  );
}
