import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import fulllogo from 'modules/shared/assets/icons/logo/fulllogo.svg';
import useAuthStore from 'modules/shared/store/useAuthStore';
import useCartStore from 'modules/shared/store/useCartStore';
import Button from '../Button';
import Select from '../select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '../ui/input';
import HeartIcon from './../../assets/icons/heartIcon.svg';
import scoopIcon from './../../assets/icons/scoop.svg';
import shoppingCart from './../../assets/icons/shoppingCart.svg';
import { DropdownMenuDemo } from './_commponets/dropDownProfile';
/**
 * Renders the under header component with navigation elements and user information.
 *
 * @return {JSX.Element} The JSX element representing the under header component.
 */
const UnderHeader = () => {
  const { isAuthenticated, user } = useAuthStore();
  console.log(user);

  console.log(user?.photo_url);
  const Fallback = isAuthenticated && user?.firstName[0] + user?.lastName[0];
  const { t } = useTranslation('underheader');
  console.log(user?.photo?.path ?? user?.photo_url);
  // routes data

  // check if route is active

  const { data } = useCartStore();

  return (
    <nav className="bg-white  min-h-[88px] flex items-center justify-between border-b-[1px] border-[#E9EAF0] shadow-sm  ">
      <div className="w-full pl-6 pr-6 ">
        <div className="flex items-center justify-between max-md:flex-col ">
          <div className="flex items-center justify-center ">
            <img src={fulllogo} alt="logo" />
            <div className="flex items-center gap-x-6 max-xl:hidden">
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
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-3">
              {/* <img src={bellIcon} alt="bellIcon" /> */}
              {/* <img src={ActiveBellIcon} alt="ActiveBellIcon" /> */}
              <img src={HeartIcon} alt="HeartIcon" />
              <Link to={'/cart'}>
                <div
                  className="relative cursor-pointer min-w-6 min-h-6"
                  onClick={() => {}}
                >
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
                      <AvatarImage
                        src={user?.photo?.path ?? user?.photo_url}
                        alt={user.name}
                      />
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
