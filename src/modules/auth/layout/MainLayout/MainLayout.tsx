import React, { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import Button from 'modules/shared/components/Button';

interface MainLayoutPropsType {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutPropsType) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center w-full border-b border-gray-100">
        <div className="w-[88%] py-4 flex items-center justify-between max-md:flex-col space-y-3 h-full ">
          <img src={BrandLogo} className="" />
          <div className="flex items-center justify-center gap-[2rem]">
            <Link
              to="/register"
              className="text-sm font-light text-gray-600 duration-200 ease-linear hover:underline"
            >
              Don't have account?
            </Link>
            <Button
              size="lg"
              className="!bg-primary-100 p-4 py-[15px] !text-[1rem] !text-primary-500 hover:!bg-primary-200 ease-linear duration-200"
              variant={'primary'}
              text="Create Account"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
