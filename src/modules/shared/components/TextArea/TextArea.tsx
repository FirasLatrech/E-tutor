import React, { TextareaHTMLAttributes } from 'react';

interface TextAreaPropsType
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

function TextArea({ label, ...props }: TextAreaPropsType) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm text-gray-900 font-normal">{label}</label>
      <textarea
        {...props}
        rows={10}
        cols={50}
        className="border max-h-[7rem] py-2 flex items-start justify-start border-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-transparent pl-3  outline-none hover:border-1 text-[1rem] text-gray-700 font-light	  hover:border-primary-300"
      />
    </div>
  );
}

export default TextArea;
