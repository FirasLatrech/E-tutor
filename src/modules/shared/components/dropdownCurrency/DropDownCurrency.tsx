'use client';

import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getItem, setItem } from 'modules/shared/lib/localStorage';
import { cn } from 'modules/shared/lib/utility';
import ArrowDown from '../../assets/icons/navbar/arrowdown.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function DropDownCurrency() {
  const { t } = useTranslation('sidebar');
  const [currency, setCurrency] = React.useState(getItem('currency') || 'EUR');
  React.useEffect(() => {
    setCurrency(t('sidebar.eur') || 'EUR');
  }, [getItem('language')]);
  const [onOpenChange, setOnOpenChange] = React.useState(false);
  const onValueChange = (value: string) => {
    if (value === 'EUR') {
      setCurrency(t('sidebar.eur'));
      setItem('currency', currency);
    }
    if (value === 'USD') {
      setCurrency(t('sidebar.usd'));
      setItem('currency', currency);
    }
    if (value === 'TND') {
      setCurrency(t('sidebar.tnd'));
      setItem('currency', currency);
    }
  };

  return (
    <DropdownMenu
      onOpenChange={() => {
        setOnOpenChange(!onOpenChange);
      }}
    >
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center gap-2 text-sm text-white">
          <span className="text-[14px] text-gray-400">{currency}</span>
          <img
            src={ArrowDown}
            alt=""
            className={cn(
              'transition-all duration-300',
              onOpenChange && 'rotate-180 transition-all duration-300'
            )}
          />
        </div>
        {/* <ArrowDown /> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm w-[6rem]">
        <DropdownMenuRadioGroup>
          <DropdownMenuItem
            onClick={() => {
              onValueChange('EUR');
            }}
          >
            {t('sidebar.eur')}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              onValueChange('TND');
            }}
          >
            {t('sidebar.tnd')}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              onValueChange('TND');
            }}
          >
            {t('sidebar.usd')}
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
