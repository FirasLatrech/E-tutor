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
          <div className="flex-col flex items-start justify-center gap-[0.5rem]">
            <h1 className="text-sm leading-5 text-gray-600">Good Morning</h1>
            <p className="text-lg font-medium leading-5 text-gray-900 capitalize">
              {
                InstructorRoutes?.find((Route) =>
                  pathname.includes(Route?.path)
                )?.text
              }
            </p>
          </div>
          <div className="flex items-center justify-center gap-[1rem]">
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
