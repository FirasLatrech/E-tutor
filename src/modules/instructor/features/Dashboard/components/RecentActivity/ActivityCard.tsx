import React from 'react';
import ActivityCommentIcon from 'modules/instructor/assets/icons/Dashboard/ActivityCommentIcon';

interface ActivityCardPropsType {
  username: string;
  activityDescription: string;
  activitySubject: string;
}

function ActivityCard({
  username,
  activityDescription,
  activitySubject,
}: ActivityCardPropsType) {
  return (
    <div className="flex gap-[1rem] justify-between items-start w-full p-2 px-6">
      <ActivityCommentIcon className="" />
      <div className="w-full flex flex-col gap-1">
        <p className="text-gray-700">
          <strong className="pr-2 text-gray-900">{username}</strong>
          {activityDescription}
          <p className="text-black">{activitySubject}</p>
        </p>
        <p className="text-gray-500">6 mins ago</p>
      </div>
    </div>
  );
}

export default ActivityCard;
