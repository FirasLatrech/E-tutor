import React from 'react';
import StatsBar from './StatsBar';

function ProfileViewChart() {
  return (
    <div className="w-[25%] min-h-full flex flex-col gap-[0.1rem]">
      <div className="bg-white flex gap-1 items-center justify-between p-4">
        <h1 className="text-gray-900 font-semibold">Profile view</h1>
        <p>Today</p>
      </div>

      <div className="w-full h-full bg-white p-4 min-h-[10rem]">
        <div className="w-full h-full flex items-start justify-center gap-2">
          <StatsBar value={0.5} />
          <StatsBar value={0.56} />
          <StatsBar value={1} />
          <StatsBar value={0.4} />
          <StatsBar value={0.6} />
          <StatsBar value={0.8} />
          <StatsBar value={0.88} />
          <StatsBar value={0.9} />
          <StatsBar value={0.25} />
        </div>
      </div>
    </div>
  );
}

export default ProfileViewChart;
