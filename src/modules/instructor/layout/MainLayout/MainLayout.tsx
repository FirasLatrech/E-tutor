import { type ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SmallLogo from 'modules/instructor/assets/icons/Sidebar/SmallLogo';
import toggleSideBarIcon from 'modules/instructor/assets/images/SideBar/arrowLeft.png';
import { InstructorRoutes } from 'modules/instructor/constants/instructorRoutes.constant';
import { PATH } from 'modules/instructor/routes/paths';
import BrandLogo from 'modules/shared/assets/icons/logo/whitelogo.svg';
import NavBar from '../NavBar/NavBar';
interface MainLayoutPropsType {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutPropsType) {
  const { pathname } = useLocation();
  const [isOpenSideBar, setOpenSideBar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen min-h-screen pb-full">
      <div
        className={`max-w-[17.5rem] ease-linear duration-300 h-full bg-gray-900 ${
          isOpenSideBar ? 'w-[17.5rem]' : 'w-[5rem] '
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
              onClick={() => {
                navigate(PATH.DASHBOARD);
              }}
            />
          ) : (
            <SmallLogo
              className="cursor-pointer"
              onClick={() => {
                navigate(PATH.DASHBOARD);
              }}
            />
          )}
          <img
            src={toggleSideBarIcon}
            onClick={() => {
              setOpenSideBar((old) => !old);
            }}
            className={`absolute cursor-pointer bg-white rounded-full ease-linear duration-200 -right-[0.7rem] top-[40%] z-20 ${
              isOpenSideBar ? 'rotate-0' : 'rotate-180'
            }`}
          />
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
                onClick={() => {
                  setOpenSideBar(false);
                }}
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
      <div className="flex flex-col w-full overflow-y-auto bg-gray-50">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
