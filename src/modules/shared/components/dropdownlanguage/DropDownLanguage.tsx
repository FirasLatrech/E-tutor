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
import { useTranslation } from 'react-i18next';

export default function DropDownLanguage() {
  const [language, setLanguage] = React.useState(getItem('language') || 'en');
  const { t, i18n } = useTranslation('translation');

  const [onOpenChange, setOnOpenChange] = React.useState(false);

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    setItem('language', selectedLanguage);
  };

  return (
    <DropdownMenu onOpenChange={() => setOnOpenChange(!onOpenChange)}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center gap-1 text-sm text- white">
          <span className="text-[14px] text-gray-400">
            {language === 'en' && t('languages.en')}
            {language === 'fr' && t('languages.fr')}
            {language === 'ar' && t('languages.ar')}
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
            {t('languages.en')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
            {t('languages.fr')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('ar')}>
            {t('languages.ar')}
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
