'use client';

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

export default function DropDownCurrency() {
  const [currency, setCurrency] = React.useState(getItem('currency') || 'EUR');
  const [onOpenChange, setOnOpenChange] = React.useState(false);
  setItem('currency', currency);
  return (
    <DropdownMenu onOpenChange={() => setOnOpenChange(!onOpenChange)}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center justify-center gap-1 font-mono text-sm text-white">
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
      <DropdownMenuContent className="">
        <DropdownMenuRadioGroup>
          <DropdownMenuItem onClick={() => setCurrency('EUR')}>
            EUR
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrency('TND')}>
            TND
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setCurrency('USD')}>
            USD
          </DropdownMenuItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
