import React from 'react'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';

import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';

type Props = {}

export const BreadcrumbLink = (props: Props) => {
  return (
    <div className="w-[80%] pt-10 pb-4">
      <div className="flex flex-col gap-3 max-w-[770px]">
        <BreadcrumbWithCustomSeparator />
        <div className="text-gray-900 font-[600] text-[32px]">
          Complete Website Responsive Design: from Figma to Webflow to Website
          Design
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
  );
}