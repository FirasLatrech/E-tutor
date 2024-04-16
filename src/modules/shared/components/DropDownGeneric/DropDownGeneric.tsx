import DownArrowIcon from 'modules/shared/assets/icons/arrow/ArrowDown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

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
  return (
    <div className="flex flex-col gap-2">
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
                  className="w-full text-sm font-normal leading-5 text-gray-700 duration-200 ease-linear cursor-pointer"
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
