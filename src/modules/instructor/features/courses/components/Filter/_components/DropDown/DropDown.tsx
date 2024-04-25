import DropDownIcon from 'modules/instructor/assets/icons/Courses/DropDownIcon';
import DownArrowIcon from 'modules/shared/assets/icons/arrow/ArrowDown';
import {
  DropdownMenuSubTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from 'modules/shared/components/ui/dropdown-menu';
import { useState } from 'react';
import { string } from 'yup';

interface optionType {
  action: () => any;
  name: string;
}
interface SelectGenericTypeProps {
  Options: optionType[];
  label?: string;
  isLoading?: boolean;
  text?: string;
}
function DropDownGeneric({
  Options,
  label,
  text,
  isLoading,
}: SelectGenericTypeProps) {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="flex w-full relative items-start flex-col gap-2">
      <h1 className="absolute -top-6 text-sm font-light text-gray-500">
        {label}
      </h1>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer outline-none w-full h-full py-2 group min-w-[4rem] bg-white">
          <span
            className={`text-[16px]  leading-5 text-gray-700 font-normal	 px-4 flex items-center justify-between`}
          >
            {value || text || ''}
            <DropDownIcon className="!text-gray-700 ease-linear duration-200 group-aria-expanded:rotate-180" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuRadioGroup className="w-full">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              Options?.map((item, index) => {
                return (
                  <DropdownMenuItem
                    key={index}
                    className="w-full font-normal leading-5 text-gray-700 duration-200 ease-linear cursor-pointer"
                    onClick={(e) => {
                      item?.action();
                      setValue(item?.name);
                    }}
                  >
                    {item?.name}
                  </DropdownMenuItem>
                );
              })
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropDownGeneric;
