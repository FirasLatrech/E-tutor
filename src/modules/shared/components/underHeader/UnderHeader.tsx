import { useTranslation } from 'react-i18next';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import fulllogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import { cn } from 'modules/shared/lib/utility';
import useAuthStore from 'modules/shared/store/useAuthStore';
import Button from '../Button';
import Select from '../select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import ActiveBellIcon from './../../assets/icons/activebell.svg';
import bellIcon from './../../assets/icons/bell.svg';
import HeartIcon from './../../assets/icons/heartIcon.svg';
import scoopIcon from './../../assets/icons/scoop.svg';
import shoppingCart from './../../assets/icons/shoppingCart.svg';
import useCartStore from 'modules/shared/store/useCartStore';
import { DropdownMenuDemo } from './_commponets/dropDownProfile';

const UnderHeader = () => {
  const { isAuthenticated, setIsAuthenticated, user } = useAuthStore();
  console.log(isAuthenticated);
  console.log(user);
  const Fallback = isAuthenticated && user?.firstName[0] + user?.username[0];
  const { t } = useTranslation('underheader');

  // routes data

  // check if route is active
  const isActive = (routePath: string) => {
    return window.location.pathname === routePath;
  };
  const { data } = useCartStore();
  console.log(data);

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
              <Link to={'/cart'}>
                <div className="relative cursor-pointer " onClick={() => {}}>
                  <img src={shoppingCart} alt="shoppingCart" />
                  <span className="text-white bg-[#FF6636] rounded-full min-w-4 min-h-4 flex items-center justify-center text-[10px]  absolute -right-1  -top-1">
                    {data?.length}
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-1">
              {isAuthenticated ? (
                <>
                  <DropdownMenuDemo user_id={user?.id || ''}>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src={user?.photo?.path} alt={user.name} />
                      <AvatarFallback>{Fallback}</AvatarFallback>
                    </Avatar>
                  </DropdownMenuDemo>
                </>
              ) : (
                <>
                  <Link to="/register">
                    <Button
                      text="Create Account"
                      variant="secondaryPrimary"
                      size="md"
                    />
                  </Link>
                  <Link to="/login">
                    <Button text="Sign In" variant="primary" size="md" />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UnderHeader;
