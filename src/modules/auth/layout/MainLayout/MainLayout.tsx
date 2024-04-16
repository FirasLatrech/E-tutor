import Button from 'modules/shared/components/Button';
import React, { ReactNode } from 'react';
import BrandLogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PATH } from 'modules/auth/routes/paths';

interface MainLayoutPropsType {
  children: ReactNode;
}
function MainLayout({ children }: MainLayoutPropsType) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="flex items-center flex-col justify-center h-screen w-full max-md:h-auto ">
      <div className="border-b w-full flex items-center justify-center border-gray-100">
        <div className="w-[68%] max-md:flex-col max-md:gap-3 max-lg:w-[90%] py-4 flex items-center justify-between   ">
          <img src={BrandLogo} />
          <div className="flex items-center justify-center gap-[1rem]">
            <p className="text-gray-600 font-light text-sm hover:underline ease-linear duration-200">
              {pathname == PATH.LOGIN
                ? 'Already have account?'
                : "Don't have account?"}
            </p>
            <Button
              size="lg"
              className="!bg-primary-100 p-4 py-[15px] !text-[1rem] !text-primary-500 hover:!bg-primary-200 ease-linear duration-200"
              variant={'primary'}
              text={!(pathname == PATH.LOGIN) ? 'Login now' : 'Create account'}
              onClick={() =>
                navigate(pathname == PATH.LOGIN ? PATH.REGISTER : PATH.LOGIN)
              }
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export default MainLayout;
