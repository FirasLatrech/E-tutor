import React, { useState } from 'react';
import SelectGeneric from 'modules/shared/components/SelectGeneric';
import ActivityCard from './ActivityCard';
import { getDateNDaysAgo } from 'modules/instructor/utils/date.utils';
import DropDownGeneric from 'modules/shared/components/DropDownGeneric';

function RecentActivity() {
  const [activityDate, setActivityDate] = useState<string>('');
  const activityDatesPick = [
    {
      value: getDateNDaysAgo(0),
      label: 'Today',
    },
    {
      value: getDateNDaysAgo(3),
      label: '3 days ago',
    },
    {
      value: getDateNDaysAgo(7),
      label: 'Last week ago',
    },
    {
      value: getDateNDaysAgo(14),
      label: '2 weeks ago',
    },
    {
      value: getDateNDaysAgo(30),
      label: '30 days ago',
    },
  ];
  return (
    <div className="w-[70%] flex flex-col gap-[0.1rem]">
      <div className="bg-white flex gap-1 items-center justify-between p-4">
        <h1 className="text-gray-900 font-semibold">Recent Activity</h1>
        <DropDownGeneric
          Options={activityDatesPick}
        />
      </div>
      <div className="bg-white max-h-[20rem] no-scrollbar overflow-auto scroll-smooth flex flex-col gap-[0.5rem]">
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
        <ActivityCard
          username="Kevin"
          activityDescription="comments on your lecture"
          activitySubject="“What is ux” in “2021 ui/ux design with figma”"
        />
      </div>
    </div>
  );
}

export default RecentActivity;
