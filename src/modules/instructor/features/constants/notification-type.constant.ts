import CourseBuyed from 'modules/instructor/assets/icons/Notifications/CourseBuyed';
import CourseCommented from 'modules/instructor/assets/icons/Notifications/CourseCommented';
import CourseViewed from 'modules/instructor/assets/icons/Notifications/CourseViewed';
import { EnumVariantTag } from 'modules/shared/components/Tag/Tag';

export const notificationTypes = {
  COURSE_VIEWED: 'course_viewed',
  COURSE_COMMENTED: 'course_commented',
  COURSE_BUYED: 'course_buyed',
  COURSE_RATED: 'course_rated',
};

export const NotificationIconsPerType = {
  [notificationTypes.COURSE_VIEWED]: CourseViewed,
  [notificationTypes.COURSE_COMMENTED]: CourseCommented,
  [notificationTypes.COURSE_RATED]: CourseCommented,
  [notificationTypes.COURSE_BUYED]: CourseBuyed,
};

export const NotificationTagPerType: Record<
  string,
  { text: string; variant: EnumVariantTag }
> = {
  [notificationTypes.COURSE_VIEWED]: {
    text: 'course viewed',
    variant: 'default',
  },
  [notificationTypes.COURSE_COMMENTED]: {
    text: 'course commented',
    variant: 'destructive',
  },
  [notificationTypes.COURSE_RATED]: {
    text: 'course rated',
    variant: 'secondary',
  },
  [notificationTypes.COURSE_BUYED]: {
    text: 'course buyed',
    variant: 'outline',
  },
};
