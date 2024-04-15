import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from 'modules/shared/components/ui/avatar';
import staricon from 'modules/shared/assets/icons/courseDetails/star.svg';

import { BreadcrumbWithCustomSeparator } from './BreadcrumbWithCustomSeparator';

import { ICourse } from 'modules/shared/types/course';

type Props = {
  course_id: string;
  courseDetails: ICourse;
};

export const BreadcrumbLink = ({ course_id, courseDetails }: Props) => {
  return (
    <div className="w-[80%] pt-10 pb-4">
      <div className="flex flex-col gap-3 max-w-[770px]">
        <BreadcrumbWithCustomSeparator />
        <div className="text-gray-900 font-[600] text-[32px]">
          {courseDetails?.title}
        </div>
        <span className="text-gray-700">{courseDetails?.subtitle}</span>
        <div className="flex items-center justify-between">
          {courseDetails?.instructor?.map(
            (item: {
              firstName: string;
              lastName: string;
              photo: { path: string };
            }) => {
              return (
                <div className="flex items-center justify-center gap-2 text-xs">
                  <Avatar>
                    <AvatarImage src={item?.photo?.path} alt="@Firas" />
                    <AvatarFallback>
                      {item?.firstName[0]} {item?.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <span className="text-gray-600">Created by : </span>
                    <span className="text-gray-900">
                      {item?.firstName} {item?.lastName}{' '}
                    </span>
                  </div>
                </div>
              );
            }
          )}

          <div className="flex">
            {Array.from({ length: courseDetails?.rating }).map((_, index) => (
              <img key={index} src={staricon} alt="staricon" width={20} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
