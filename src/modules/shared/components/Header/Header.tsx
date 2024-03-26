import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cn } from 'modules/shared/lib/utility';
import useAuthStore from 'modules/shared/store/useAuthStore';
import DropdownCurrency from '../dropdownCurrency';
import DropdownLanguage from '../dropdownlanguage';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );
  const { t } = useTranslation('sidebar');

  // routes data
  const routes = [
    {
      name: t(`sidebar.home`),
      path: '/',
    },
    {
      name: t(`sidebar.courses`),
      path: '/courses',
    },
    {
      name: t(`sidebar.about`),
      path: '/about',
    },
    {
      name: t(`sidebar.contact`),
      path: '/contact',
    },
    {
      name: t(`sidebar.becomanInstructor`),

      path: '/instructor',
    },
  ];

  // check if route is active
  const isActive = (routePath: string) => {
    if (
      window.location.pathname === '/' ||
      window.location.pathname.includes('/category')
    ) {
      return routePath === '/';
    }
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
            {/* <DropdownCurrency /> */}

            <DropdownLanguage />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
