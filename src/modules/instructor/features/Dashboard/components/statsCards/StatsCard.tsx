import { cn } from 'modules/shared/lib/utility';
import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface StatsCardPropsType {
  Icon: any;
  name: string;
  backgroundColor: string;
}
function StatsCard({ Icon, name, backgroundColor }: StatsCardPropsType) {
  return (
    <div
      className={cn(
        'flex items-center h-[6.8rem] max-w-[19.5rem] w-full justify-start gap-[2rem] duration-300 cursor-pointer',
        `bg-white py-3 px-6`
      )}
    >
      <div style={{ backgroundColor }} className="p-4">
        <Icon />
      </div>

      <div className="flex flex-col gap-[0.75rem] justify-center">
        <span className="text-2xl text-gray-900 leading-8">19,132</span>
        <span className="text-gray-700 text-sm leading-5">{name} </span>
      </div>
    </div>
  );
}

export default StatsCard;
