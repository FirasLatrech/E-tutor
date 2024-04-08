import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import Button from 'modules/shared/components/Button';
import InputFile from 'modules/shared/components/InputFile';
import React from 'react';

function UploadImage({ label }: { label: string }) {
  return (
    <div className="w-full flex-col gap-[1rem] flex items-start justify-start">
      <p className="font-medium	leading-5 text-lg">{label}</p>
      <div className="w-full gap-[2rem] flex items-start justify-start">
        <div className="bg-gray-50  p-[1.6rem] px-16">
          <UploadFileIcon />
        </div>
        <div className="w-full gap-[2rem] flex flex-col items-start justify-between   ">
          <p className="text-sm w-full text-gray-600">
            Upload your course Thumbnail here.
            <h2 className="text-black">Important guidelines:</h2> 1200x800
            pixels or 12:8 Ratio. Supported format:
            <h2 className="text-black "> .jpg, .jpeg, or .png</h2>
          </p>
          <div>
            <InputFile text="upload image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
