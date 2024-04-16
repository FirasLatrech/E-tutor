import React from 'react';
import { useNavigate } from 'react-router';
import { CreditCard, LogOut, Settings, User } from 'lucide-react';
import useAuthStore from 'modules/shared/store/useAuthStore';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
/**
 * Renders a dropdown menu for the user with various options such as profile, billing, settings, and logout.
 *
 * @param {React.ReactNode} children - The content of the dropdown menu trigger.
 * @param {string} user_id - The user's ID for navigation purposes.
 * @return {JSX.Element} The dropdown menu JSX element.
 */
export function DropdownMenuDemo({
  children,
  user_id,
}: {
  children: React.ReactNode;
  user_id: string;
}) {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore();
  const handelLogOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              navigate(`/user/${user_id}`);
            }}
          >
            <User className="w-4 h-4 mr-2" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="w-4 h-4 mr-2" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="w-4 h-4 mr-2" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            handelLogOut();
          }}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
