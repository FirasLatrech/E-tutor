import { cn } from 'modules/shared/lib/utility';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { Link } from 'react-router-dom';
import DropdownLanguage from '../dropdownlanguage';
import DropdownCurrency from '../dropdownCurrency';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  // routes data
  const routes = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Courses',
      path: '/login',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
    {
      name: 'Becom an Instructor',
      path: '/instructor',
    },
  ];

  //check if route is active
  const isActive = (routePath: string) => {
    return window.location.pathname === routePath;
  };

  return (
    <nav className="bg-gray-900 shadow-lg h-[52px]">
      <div className="pl-6 pr-6 mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center  justify-start space-x-4 h-[46px]">
            {routes.map((route) => (
              <Link
                to={route.path}
                key={route.name}
                className={`flex items-center px-2 h-full `}
              >
                <span
                  className={cn(
                    'text-sm font-400 pl-1 pr-1 h-full flex items-center text-gray-500    ',
                    isActive(route.path) &&
                      'text-white border-t-2 w-full  border-primary-500  	 '
                  )}
                >
                  {route.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <DropdownCurrency />
            <DropdownLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
