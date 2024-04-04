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
import DownArrowIcon from 'modules/shared/assets/icons/arrow/ArrowDown';

interface optionType {
  action: () => any;
  name: string;
}
interface SelectGenericTypeProps {
  Options: optionType[];
  label?: string;
  text?: string;
}
function DropDownGeneric({ Options, label, text }: SelectGenericTypeProps) {
  const [value, setValue] = useState<string>();

  return (
    <div className="flex gap-2 flex-col">
      <DropdownMenu>
        <DropdownMenuTrigger
          asChild
          className="cursor-pointer py-2 group min-w-[4rem] bg-primary-100"
        >
          <span className="text-[16px] gap-2 text-primary-500 px-4 font-medium flex items-center justify-between">
            {text || ''}
            <DownArrowIcon className="!text-primary-400 ease-linear duration-200 group-aria-expanded:rotate-180" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuRadioGroup className="w-full">
            {Options?.map((item, index) => {
              return (
                <DropdownMenuItem
                  key={index}
                  className="w-full font-normal	leading-5	text-sm cursor-pointer ease-linear text-gray-700 duration-200"
                  onClick={(e) => item?.action()}
                >
                  {item?.name}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownGeneric;
