import { type ReactNode, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SmallLogo from 'modules/instructor/assets/icons/Sidebar/SmallLogo';
import toggleSideBarIcon from 'modules/instructor/assets/images/SideBar/arrowLeft.png';
import { InstructorRoutes } from 'modules/instructor/constants/instructorRoutes.constant';
import BrandLogo from 'modules/shared/assets/icons/logo/whitelogo.svg';
import NavBar from '../NavBar/NavBar';
import { motion } from 'framer-motion';
import { PATH } from 'modules/instructor/routes/paths';
import menuSideBar from 'modules/instructor/assets/icons/Sidebar/menu.svg';
import { useMediaQuery } from '@uidotdev/usehooks';
import MenuLogo from 'modules/instructor/assets/icons/Sidebar/MenuLogo';
interface MainLayoutPropsType {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutPropsType) {
  const { pathname } = useLocation();
  const SideBarCanToggle = useMediaQuery('(min-width: 1400px)');

  const [isOpenSideBar, setOpenSideBar] = useState(SideBarCanToggle);
  const navigate = useNavigate();
  const hideSideBarToggle = useMediaQuery(
    '(max-width: 1400px) and (min-width: 700px)'
  );
  const hideSideBar = useMediaQuery('(max-width: 700px)');

  useEffect(() => {
    setOpenSideBar(SideBarCanToggle);
  }, [SideBarCanToggle]);

  return (
    <div className="w-screen min-h-screen h-screen pb-full flex">
      <div
        className={`max-w-[17.5rem] z-50 ease-linear duration-300 h-full bg-gray-900 ${
          isOpenSideBar ? 'w-[17.5rem]' : 'w-[5rem] '
        } ${hideSideBar && !isOpenSideBar ? 'fixed -left-[5rem]' : ''} ${
          hideSideBar ? 'fixed' : ''
        }`}
      >
        <div
          className={`border-b relative border-gray-800 py-5 ${
            isOpenSideBar ? 'px-6' : 'px-4'
          }  `}
        >
          {isOpenSideBar ? (
            <img
              className="h-[2rem] cursor-pointer w-[7.125rem]"
              src={BrandLogo}
              onClick={() => navigate(PATH.DASHBOARD)}
            />
          ) : (
            <SmallLogo
              className="cursor-pointer"
              onClick={() => navigate(PATH.DASHBOARD)}
            />
          )}
          {hideSideBarToggle && (
            <img
              src={toggleSideBarIcon}
              onClick={() => setOpenSideBar((old) => !old)}
              className={`absolute cursor-pointer bg-white rounded-full ease-linear duration-200 -right-[0.7rem] top-[40%] z-20 ${
                isOpenSideBar ? 'rotate-0' : 'rotate-180'
              }`}
            />
          )}
        </div>
        <div className="flex  items-start justify-center w-full flex-col mt-[0.8rem]">
          {InstructorRoutes?.map((Route, index) => {
            const Icon = Route?.icon;
            const isActiveRoute = pathname
              .toUpperCase()
              .includes(Route?.path?.toUpperCase());
            return (
              <Link
                className={`flex w-full group items-center justify-start gap-3 px-6 py-3 hover:bg-gray-800 ${
                  isActiveRoute ? '!bg-primary-500' : ''
                } ease-linear duration-200`}
                to={Route?.path}
                key={index}
                onClick={() => setOpenSideBar(false)}
              >
                <Icon className=" !text-primary-500" />
                {isOpenSideBar && (
                  <p
                    className={`capitalize whitespace-nowrap text-[0.875rem] text-gray-500 ${
                      isActiveRoute ? '!text-white' : ''
                    } group-hover:!text-white`}
                  >
                    {Route?.text}
                  </p>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {isOpenSideBar && hideSideBar && (
        <div
          onClick={() => setOpenSideBar(false)}
          className="w-screen left-0 top-0 bg-[#00000080] h-screen fixed z-40 opacity-50"
        />
      )}
      <div className="w-full flex bg-gray-50 overflow-y-auto flex-col">
        <NavBar
          setOpenSideBar={setOpenSideBar}
          isOpenSideBar={isOpenSideBar || !hideSideBar}
        />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
