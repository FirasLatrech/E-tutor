import { useLocation } from 'react-router';
import { InstructorRoutes } from 'modules/instructor/constants/instructorRoutes.constant';
import Notification from './components/Notifications/Notification';
import Profile from './components/Profile/Profile';
import Search from './components/search/Search';

function NavBar() {
  const { pathname } = useLocation();
  return (
    <div className="w-full bg-white">
      <div className="w-full py-4 h-[6.25rem] flex items-center justify-center ">
        <div className="flex w-[80%] items-center justify-between ">
          <div className="flex-col flex items-start justify-center gap-[0.5rem] max-lg:hidden">
            <h1 className="text-gray-600 text-sm leading-5">Good Morning</h1>
            <p className="text-gray-900 font-medium text-lg leading-5 capitalize">
              {
                InstructorRoutes?.find((Route) =>
                  pathname.includes(Route?.path)
                )?.text
              }
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1rem] max-lg:w-full max-sm:pl-4">
            <Search />
            <Notification />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
