import * as React from 'react';
import ArrowDown from '../../assets/icons/navbar/arrowdown.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { cn } from 'modules/shared/lib/utility';
import { getItem, setItem } from 'modules/shared/lib/localStorage';

export default function DropDownLanguage() {
  const [language, setLanguage] = React.useState(getItem('language') || 'en');
  const [onOpenChange, setOnOpenChange] = React.useState(false);

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    setItem('language', selectedLanguage);
  };

  return (
    <DropdownMenu onOpenChange={() => setOnOpenChange(!onOpenChange)}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center gap-1 font-mono text-sm text-white">
          <span className="text-[14px] text-gray-400">
            {language === 'en' && 'English'}
            {language === 'fr' && 'French'}
            {language === 'ar' && 'Arabic'}
          </span>
          <img
            src={ArrowDown}
            alt=""
            className={cn(
              'transition-all duration-300',
              onOpenChange && 'rotate-180 transition-all duration-300'
            )}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="">
        <DropdownMenuRadioGroup>
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
            French
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('ar')}>
            Arabic
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
