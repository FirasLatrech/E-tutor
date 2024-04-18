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

interface SelectGenericTypeProps extends Props {
  items: string[] | null;
  label: string;
  isLoading?: boolean;
  value: string | undefined;
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
  console.log(props);
  return (
    <div className="flex flex-col w-full gap-2 mb-4">
      <label className="flex text-sm font-light text-gray-900">{label}</label>
      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger className="min-h-[3rem]">
          <span
            className={`text-[16px] font-light  ${
              value ? 'text-gray-700' : 'text-gray-400'
            }`}
          >
            {value || 'Select...'}
          </span>
        </SelectTrigger>
        <SelectContent className="w-full">
          <SelectGroup className="w-full">
            {isLoading ? (
              <p>loading...</p>
            ) : (
              items?.map((item, index) => (
                <SelectItem
                  value={item}
                  key={props?.name + String(index)}
                  className="w-full cursor-pointer"
                >
                  {item}
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
