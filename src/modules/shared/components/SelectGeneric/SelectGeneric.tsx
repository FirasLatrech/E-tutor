import React, { useEffect, useState } from 'react';
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';
import { SelectGroup } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> {
  name: string;
  label?: string;
  disabled?: boolean;
  register?: UseFormRegister<T>;
  errors?: FieldErrors<U>;
  variant?: 'default' | 'outlined' | 'rounded';
}

export interface option {
  value: string;
  label: string;
}
interface SelectGenericTypeProps extends Props {
  items: option[] | null;
  label: string;
  isLoading?: boolean;
  value: string | number |undefined;
  onChange: (value: string) => void;
}

function SelectGeneric({
  items = [],
  label,
  isLoading = false,
  value,
  onChange,
  ...props
}: SelectGenericTypeProps) {
  const [selectedValue, setselectedValue] = useState<option | null>(null);

  useEffect(() => {
    if (value) {
      const selectedItem = items?.find((item) => item.value === value);
      if (selectedItem) {
        setselectedValue(selectedItem);
      }
    }
  }, [items, value]);

  return (
    <div className="flex flex-col w-full gap-2 mb-4">
      <label className="flex text-sm font-light text-gray-900">{label}</label>
      <Select
        onValueChange={(value) => {
          const selectedItem = items?.find((item) => item.value === value);
          if (selectedItem) {
            setselectedValue(selectedItem);
            onChange(value);
          }
        }}
      >
        <SelectTrigger className="min-h-[3rem]">
          <span
            className={`text-[16px] font-light  ${
              selectedValue ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            {selectedValue?.label || 'Select...'}
          </span>
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup className="w-full">
            {isLoading ? (
              <p>loading...</p>
            ) : (
              items?.map((item, index) => (
                <SelectItem
                  onClick={() => setselectedValue(item)}
                  value={item?.value}
                  key={props?.name + String(index)}
                  className="w-full cursor-pointer"
                >
                  {item?.label}
                </SelectItem>
              ))
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
      <span
        className={`text-xs text-red-500 opacity-0 ${
          props.errors && props.errors[props.name] ? 'opacity-100' : ''
        }`}
      >
        {(props.errors?.[props.name]?.message as string) || ''}
      </span>
    </div>
  );
}
export default SelectGeneric;
