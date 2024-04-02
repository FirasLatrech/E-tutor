import React from 'react';
import checkCircle from 'modules/shared/assets/icons/courseDetails/checkCircle.svg';
type Props = {};
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
export const WhatWillLearnInCourse = (props: Props) => {
  return (
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
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
            <div className="flex items-start gap-x-3">
              <img src={checkCircle} alt="" />
              <p className="text-gray-700 text-[14px] font-[300]">
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
            <div className="flex items-start gap-x-3">
              <img src={checkCircle} alt="" />
              <p className="text-gray-700 text-[14px] font-[300]">
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
          </div>
          <div className="w-[50%]  ">
            <div className="flex items-start gap-x-3">
              <img src={checkCircle} alt="" />
              <p className="text-gray-700 text-[14px] font-[300]">
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
            <div className="flex items-start gap-x-3">
              <img src={checkCircle} alt="" />
              <p className="text-gray-700 text-[14px] font-[300]">
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
            <div className="flex items-start gap-x-3">
              <img src={checkCircle} alt="" />
              <p className="text-gray-700 text-[14px] font-[300]">
                You will learn how to design beautiful websites using Figma, an
                interface design tool used by designers at Uber, Airbnb and
                Microsoft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
