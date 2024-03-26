import React from 'react';
import { BreadcrumbWithCustomSeparator } from './_components/BreadcrumbWithCustomSeparator';

type Props = {};

const courseDetails = (props: Props) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#f5f7fa]">
      {/* BreadcrumbLink */}
      <div className="w-[70%]">
        <div>
          <BreadcrumbWithCustomSeparator />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default courseDetails;
