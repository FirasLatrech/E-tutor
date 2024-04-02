import UploadIcon from 'modules/shared/assets/icons/Upload/UploadImageIcon'
import React from 'react';

interface InputFileTypeProps {
  text: string;
}
function InputFile({ text }: InputFileTypeProps) {
  return (
    <button
      className="bg-primary-100 hover:bg-primary-200 text-primary-500  font-medium 
      text-sm 
      relative
      px-5 py-2.5 
      text-center 
      flex gap-[1rem]
      mr-2 mb-2
      dark:bg-blue-600
      dark:hover:bg-blue-700
      dark:focus:ring-blue-800 
      min-w-[100px]"
    >
      <div className="flex relative items-end justify-end gap-[0.5rem]">
        <p className="capitalize">{text}</p>
        <UploadIcon />
        <input
          type="file"
          className="w-full opacity-0 h-full absolute m-0 block "
        />
      </div>
    </button>
  );
}

export default InputFile;
