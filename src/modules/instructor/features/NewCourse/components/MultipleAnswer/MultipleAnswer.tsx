import { useState } from 'react';
import { motion } from 'framer-motion';
import Input from 'modules/shared/components/Input';

interface MultipleAnswerPropsType {
  label: string;
  onChange: (newValue: string, index: number) => void;
  defaultValue: Object | undefined;
}

function MultipleAnswer({
  label,
  onChange,
  defaultValue,
}: MultipleAnswerPropsType) {
  const [value, setValue] = useState<Object>(defaultValue || {'0':''});
  console.log(value);
  return (
    <div className="w-full flex flex-col gap-[1rem]">
      <div className="flex w-full justify-between">
        <div className="w-full flex gap-[0.5rem]">
          <p className="text-gray-900 text-lg leading-6">{label}</p>
          <p className="text-lg text-gray-900 leading-6">{`(${
            Object.values(value).length
          }/8)`}</p>
        </div>
        <p
          onClick={() => {
            Object.values(value).length < 8 &&
              setValue((old) => ({ ...old, [Object.keys(old).length]: '' }));
          }}
          className={`text-primary-500 whitespace-nowrap cursor-pointer hover:color-primary-300 ease-linear duration-200${
            Object.values(value).length >= 8
              ? ' cursor-not-allowed'
              : ' cursor-pointer'
          }`}
        >
          + Add New
        </p>
      </div>
      <div className="flex gap-1 flex-col">
        {Object.entries(value).map(([key, value], index) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="ease-linear duration-300">
              <h1 className="text-sm">{`0${index + 1}`}</h1>
              <Input
                onChange={(e) => {
                  onChange(e.target.value, parseInt(key));
                }}
                id={`input-${index}`}
                name={`input-${index}`}
                placeholder={`${label}...`}
                defaultValue={value || ''}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MultipleAnswer;
