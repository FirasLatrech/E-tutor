import react, { useState } from 'react';
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

function DropDownGeneric() {
    const [value, setValue] = useState();
  return (
    <div>
        
    </div>
  )
}

export default DropDownGeneric