import React from 'react';
import UploadIcon from 'modules/shared/assets/icons/Upload/UploadImageIcon';

interface InputFileTypeProps {
  text: string;
  accept?: string;
  onChange?: (file: File) => void;
}

function InputFile({ text, accept, onChange }: InputFileTypeProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file && onChange) {
      onChange(file);
    }
  };

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
          onChange={handleChange}
          accept={accept}
        />
      </div>
    </button>
  );
}

export default InputFile;
