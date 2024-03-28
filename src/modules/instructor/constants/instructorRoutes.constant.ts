import Courses from '../assets/icons/Sidebar/Courses';
import Earning from '../assets/icons/Sidebar/Earning';
import MessageIcon from '../assets/icons/Sidebar/Message';
import NewCourse from '../assets/icons/Sidebar/NewCourse';
import Settings from '../assets/icons/Sidebar/Settings';
import Dashboard from '../assets/icons/Sidebar/dashboard';
import { PATH } from '../routes/paths';

export const InstructorRoutes = [
  { text: 'dashboard', path: PATH.DASHBOARD, icon: Dashboard },
  { text: 'create new course', path: PATH.NEW_COURSES, icon: NewCourse },
  { text: 'my courses', path: PATH.COURSES, icon: Courses },
  { text: 'earning', path: PATH.EARNING, icon: Earning },
  { text: 'message', path: PATH.MESSAGE, icon: MessageIcon },
  { text: 'settings', path: PATH.SETTINGS, icon: Settings },
];
