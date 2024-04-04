import { InstructorRoutes } from 'modules/instructor/constants/instructorRoutes.constant';
import React, { ReactNode } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import BrandLogo from 'modules/shared/assets/icons/logo/whitelogo.svg';
import NavBar from '../NavBar/NavBar';
import { motion } from 'framer-motion';
interface MainLayoutPropsType {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutPropsType) {
  const { pathname } = useLocation();
  return (
    <div className="w-screen min-h-screen h-screen pb-full flex">
      <div className="max-w-[17.5rem] min-w-[17.5rem] h-full bg-gray-900">
        <div className="border-b py-5 px-6 border-gray-800">
          <img className="h-[2rem] w-[7.125rem]" src={BrandLogo} />
        </div>
        <div className="flex items-start justify-center w-full flex-col mt-[0.8rem]">
          {InstructorRoutes?.map((Route, index) => {
            const Icon = Route?.icon;
            const isActiveRoute = pathname.includes(Route?.path);
            return (
              <Link
                className={`flex w-full group items-center justify-start gap-3 px-6 py-3 hover:bg-gray-800 ${
                  isActiveRoute ? '!bg-primary-500' : ''
                } ease-linear duration-200`}
                to={Route?.path}
                key={index}
              >
                <Icon className=" !text-primary-500" />
                <p
                  className={`capitalize text-[0.875rem] text-gray-500 ${
                    isActiveRoute ? '!text-white' : ''
                  } group-hover:!text-white`}
                >
                  {Route?.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full flex bg-gray-50 overflow-y-auto flex-col">
        <NavBar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
