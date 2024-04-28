import CourseBuyed from 'modules/instructor/assets/icons/Notifications/CourseBuyed';
import CourseCommented from 'modules/instructor/assets/icons/Notifications/CourseCommented';
import {
  notificationTypes,
  NotificationIconsPerType,
  NotificationTagPerType,
} from 'modules/instructor/features/constants/notification-type.constant';
import { timeAgo } from 'modules/instructor/utils/date.utils';
import { Badge } from 'modules/shared/components/Tag/Tag';
import React from 'react';

function Notification({
  message,
  createdAt,
  description,
  type,
}: {
  message: string;
  description: string;
  createdAt: Date;
  type: string;
}) {
  const NotificationIcon = NotificationIconsPerType[type];
  const NotificationsTagText = NotificationTagPerType[type]?.text;
  const NotificationsTagVariant = NotificationTagPerType[type]?.variant;
  return (
    <div className="bg-white py-4 px-4 w-full">
      <div className="flex items-center justify-start gap-6">
        <div className="rounded-full p-4 border flex items-center justify-center bg-white border-gray-200">
          <NotificationIcon />
        </div>
        <div className="flex w-full flex-col items-start justify-between gap-2">
          <div className="w-full flex items-start justify-between gap-2">
            <p className="w-[85%] overflow-hidden text-ellipsis ">{message}</p>
            <p className="text-sm whitespace-nowrap i text-gray-400">
              {timeAgo(new Date(createdAt))}
            </p>
          </div>
          <div className="flex w-full items-start justify-between gap-2">
            <p className="text-sm whitespace-nowrap i text-gray-400">
              {description || 'no description provided.'}
            </p>
            <Badge variant={NotificationsTagVariant}>
              {NotificationsTagText}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
