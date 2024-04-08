import { InstructorRoutes } from 'modules/instructor/constants/instructorRoutes.constant';
import React, { ReactNode, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import BrandLogo from 'modules/shared/assets/icons/logo/whitelogo.svg';
import NavBar from '../NavBar/NavBar';
import { motion } from 'framer-motion';
import { PATH } from 'modules/instructor/routes/paths';
import toggleSideBarIcon from 'modules/instructor/assets/images/SideBar/arrowLeft.png'
import SmallLogo from 'modules/instructor/assets/icons/Sidebar/SmallLogo';
interface MainLayoutPropsType {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutPropsType) {
  const { pathname } = useLocation();
  const [isOpenSideBar, setOpenSideBar] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="w-screen min-h-screen h-screen pb-full flex">
      <div className={`max-w-[17.5rem] ease-linear duration-300 h-full bg-gray-900 ${isOpenSideBar ? "w-[17.5rem]" : "w-[5rem] "}`}>
        <div className={`border-b relative border-gray-800 py-5 ${isOpenSideBar ? "px-6":"px-4"}  `}>
         {isOpenSideBar ?  <img className="h-[2rem] cursor-pointer w-[7.125rem]" src={BrandLogo} onClick={()=>navigate(PATH.DASHBOARD)}/> : <SmallLogo className="cursor-pointer"  onClick={()=>navigate(PATH.DASHBOARD)}/>}
          <img src={toggleSideBarIcon} onClick={()=>setOpenSideBar((old)=>!old)} className={`absolute cursor-pointer bg-white rounded-full ease-linear duration-200 -right-[0.7rem] top-[40%] z-20 ${isOpenSideBar ? "rotate-0":"rotate-180"}`}/>
        </div>
        <div className="flex  items-start justify-center w-full flex-col mt-[0.8rem]">
          {InstructorRoutes?.map((Route, index) => {
            const Icon = Route?.icon;
            const isActiveRoute = pathname.toUpperCase().includes(Route?.path?.toUpperCase());
            return (
              <Link
                className={`flex w-full group items-center justify-start gap-3 px-6 py-3 hover:bg-gray-800 ${
                  isActiveRoute ? '!bg-primary-500' : ''
                } ease-linear duration-200`}
                to={Route?.path}
                key={index}
              >
                <Icon className=" !text-primary-500" />
              {isOpenSideBar &&  <p
                  className={`capitalize whitespace-nowrap text-[0.875rem] text-gray-500 ${
                    isActiveRoute ? '!text-white' : ''
                  } group-hover:!text-white`}
                >
                  {Route?.text}
                </p>}
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
