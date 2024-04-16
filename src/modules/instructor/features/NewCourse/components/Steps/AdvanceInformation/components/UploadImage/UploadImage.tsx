import React, { useState } from 'react';
import MuxPlayer from '@mux/mux-node';
import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import Button from 'modules/shared/components/Button';
import InputFile from 'modules/shared/components/InputFile';
import { UploadVideoForStreaming } from 'modules/shared/data/api/videoStreaming.service';

function UploadImage({ label, onChange }: { label: string; onChange: any }) {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileChange = async (file: File) => {
    const formdata = new FormData();
    formdata.append('file', file);
    // await UploadVideoForStreaming(formdata);
    setUploadedFile(file);
    onChange('url');
  };

  return (
    <div className="w-full flex-col gap-[1rem] flex items-start justify-start">
      <p className="text-lg font-medium leading-5">{label}</p>
      <div className="w-full gap-[2rem] flex items-start justify-start">
        <div className="bg-gray-50 min-w-80 p-[1.6rem] flex items-center justify-center">
          {uploadedFile ? (
            <img
              src={URL.createObjectURL(uploadedFile)}
              alt="Uploaded"
              className="h-[200px] w-full"
            />
          ) : (
            <UploadFileIcon />
          )}
        </div>

        <div className="w-full gap-[2rem] flex flex-col items-start justify-between">
          <p className="w-full text-sm text-gray-600">
            Upload your course Thumbnail here.
            <h2 className="text-black">Important guidelines:</h2> 1200x800
            pixels or 12:8 Ratio. Supported format:
            <h2 className="text-black">.jpg, .jpeg, or .png</h2>
          </p>
          <div>
            <InputFile
              text="upload image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
