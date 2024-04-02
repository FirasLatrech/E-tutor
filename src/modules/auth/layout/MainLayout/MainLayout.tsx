import Button from 'modules/shared/components/Button';
import React, { ReactNode } from 'react';
import BrandLogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import { Link } from 'react-router-dom';

interface MainLayoutPropsType {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutPropsType) {
  return (
    <div className="flex items-center flex-col justify-center h-screen w-full">
      <div className="border-b w-full flex items-center justify-center border-gray-100">
        <div className="w-[68%] py-4 flex items-center justify-between   ">
          <img src={BrandLogo} />
          <div className="flex items-center justify-center gap-[1rem]">
            <Link
              to="/register"
              className="text-gray-600 font-light text-sm hover:underline ease-linear duration-200"
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
