import React from 'react';

interface StatsBarPropsType {
  value: number;
}

function StatsBar({ value }: StatsBarPropsType) {
  return (
    <div className="h-[10rem] flex items-end overflow-hidden w-[1.2rem] bg-success-200">
      <span
        className={`w-full bg-success-500  h-[${Math.round(8 * value)}rem]`}
      ></span>
    </div>
  );
}

export default StatsBar;

// h-[${Math.round(value * 100)}%]
