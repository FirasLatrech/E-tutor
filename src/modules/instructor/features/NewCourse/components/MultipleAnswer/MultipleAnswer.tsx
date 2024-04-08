import Input from 'modules/shared/components/Input';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface MultipleAnswerPropsType {
  label: string;
}
function MultipleAnswer({ label }: MultipleAnswerPropsType) {
  const [value, setValue] = useState<string[]>(['', '', '', '']);
  return (
    <div className="w-full flex flex-col gap-[1rem]">
      <div className="flex w-full justify-between">
        <div className="w-full flex gap-[0.5rem]">
          <p className="text-gray-900 text-lg leading-6	">{label}</p>
          <p className="text-lg text-gray-900 leading-6	">{`(${value?.length}/8)`}</p>
        </div>
        <p
          onClick={() => value?.length < 8 && setValue((old) => [...old, ''])}
          className={`text-primary-500 whitespace-nowrap cursor-pointer hover:color-primary-300 ease-linear duration-200${
            value?.length >= 8 ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          + Add New
        </p>
      </div>
      <div className="flex gap-1 flex-col">
        {value?.map((value, index) => {
          return (
            <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          >
            <div className="ease-linear duration-300">
              <h1 className="text-sm">{`0${index + 1}`}</h1>
              <Input id="tittle" name="tittle" placeholder={`${label}...`} />
            </div></motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default MultipleAnswer;
