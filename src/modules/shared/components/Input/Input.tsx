import { type InputHTMLAttributes } from 'react';
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from 'react-hook-form';

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
  variant?: 'default' | 'outlined' | 'rounded';
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  variant = 'outlined',
  ...rest
}: Props<T, U>) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-400  placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent  outline-none hover:border-1  hover:border-primary-300';
      case 'rounded':
        return 'rounded-lg';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col mb-4">
      <label className="flex text-gray-900" htmlFor={name}>
        {label ?? ''}
      </label>
      <input
        className={`w-full p-2 ${getVariantClasses()}    `}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="mt-1 text-xs text-red-500">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
