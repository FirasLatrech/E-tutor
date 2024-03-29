import React from 'react';
import AttatchmentIcon from 'modules/shared/assets/icons/courseDetails/fielText.svg';
import Button from 'modules/shared/components/Button';
type Props = {};

export const AttachFiles = (props: Props) => {
  return (
    <div className="flex flex-col gap-8 pt-6 pb-6">
      <div className="text-2xl font-semibold tracking-tight scroll-m-20">
        Attach Files (01)
      </div>
      <div className="text-gray-900   flex items-center justify-between gap-8 bg-gray-50 h-[96px] pl-4 pr-4">
        <div className="flex items-center gap-x-3">
          <img src={AttatchmentIcon} alt="" />
          <div className="flex flex-col gap-y-1">
            <div>Create account on webflow.pdf</div>
            <span className="text-[14px] font-[400] text-gray-600">
              12.6 MB
            </span>
          </div>
        </div>
        <div>
          <Button text="Downlod File " variant="primary" size="xl" />
        </div>
      </div>
    </div>
  );
};
