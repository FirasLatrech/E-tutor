import react, { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getItem, setItem } from 'modules/shared/lib/localStorage';
import { cn } from 'modules/shared/lib/utility';
import ArrowDown from '../../assets/icons/arrow/arrowDown.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { SelectGroup, SelectLabel } from '@radix-ui/react-select';

interface SelectGenericTypeProps {
  items: string[];
  label: string;
}
function SelectGeneric({ items, label }: SelectGenericTypeProps) {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex w-full gap-2 flex-col mb-4">
      <label className="flex text-sm font-light  text-gray-900">{label}</label>
      <Select>
        <SelectTrigger className="min-h-[3rem]">
          <span className="text-[16px] font-light text-gray-400">
            {value || 'Select...'}
          </span>
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup className="w-full">
            {items?.map((item, index) => {
              return (
                <SelectItem
                  value={item}
                  key={index}
                  className="w-full"
                  onClick={(e) => setValue(item)}
                >
                  {item}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectGeneric;
