import { cn } from 'modules/shared/lib/utility';
import useAuthStore from 'modules/shared/store/useAuthStore';
import { Link } from 'react-router-dom';
import fulllogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import Select from '../select';
import bellIcon from './../../assets/icons/bell.svg';
import ActiveBellIcon from './../../assets/icons/activebell.svg';
import HeartIcon from './../../assets/icons/heartIcon.svg';
import shoppingCart from './../../assets/icons/shoppingCart.svg';

import scoopIcon from './../../assets/icons/scoop.svg';
import { Input } from '../ui/input';
import Button from '../Button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useTranslation } from 'react-i18next';
const UnderHeader = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );
  const { t } = useTranslation('underheader');

  // routes data

  //check if route is active
  const isActive = (routePath: string) => {
    return window.location.pathname === routePath;
  };

  return (
    <nav className="bg-white  min-h-[88px] flex items-center justify-between border-b-[1px] border-[#E9EAF0] shadow-sm ">
      <div className="w-full pl-6 pr-6 ">
        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center w-1/2 h-full space-x-9 ">
            <img src={fulllogo} alt="logo" />
            <Select />
            <div className="border-gray-100 border-[1px] w-96  flex items-center justify-center pl-2 pr-2 ">
              <img src={scoopIcon} alt="scoopIcon" />
              <Input
                type="text"
                placeholder={t('underheader.whatdoyouwanttolearn')}
                className="w-full border-none outline-none placeholder:text-gray-500 "
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-3">
              <img src={bellIcon} alt="bellIcon" />
              {/* <img src={ActiveBellIcon} alt="ActiveBellIcon" /> */}
              <img src={HeartIcon} alt="HeartIcon" />
              <div className="relative">
                <img src={shoppingCart} alt="shoppingCart" />
                {/* <span className="text-white bg-[#FF6636] rounded-full min-w-4 min-h-4 flex items-center justify-center text-[10px]  absolute -right-1  -top-1">
                1
              </span> */}
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* <Button
                text="Create Account"
                variant="secondaryPrimary"
                size="md"
              />
              <Button text="Sign In" variant="primary" size="md" /> */}

              <Avatar>
                <AvatarImage
                  src="https://avatars.githubusercontent.com/u/112077899?v=4"
                  alt="@shadcn"
                />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UnderHeader;
