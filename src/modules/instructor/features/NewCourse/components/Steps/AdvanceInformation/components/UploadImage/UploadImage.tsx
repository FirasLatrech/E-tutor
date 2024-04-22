import React, { useState } from 'react';
import MuxPlayer from '@mux/mux-node';
import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import Button from 'modules/shared/components/Button';
import InputFile from 'modules/shared/components/InputFile';
import { UploadVideoForStreaming } from 'modules/shared/data/api/videoStreaming.service';
import { useUploadFileQuery } from 'modules/shared/data/queries/file.query';
import CreateCourseLoader from 'modules/instructor/assets/icons/CreateCourse/Loader';
import { isValidImage } from 'modules/instructor/utils/file.utils';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

function UploadImage({
  label,
  onChange,
  defaultValue,
}: {
  label: string;
  onChange: any;
  defaultValue: any;
}) {
  const [uploadedFile, setUploadedFile] = useState<string | null>(
    defaultValue ? defaultValue : null
  );
  const [Error, setError] = useState<string | null>(null);
  const { mutateAsync: uploadFile, isPending: isUploadingFile } =
    useUploadFileQuery();

  const handleFileChange = async (file: File) => {
    const formdata = new FormData();
    formdata.append('file', file);

    try {
      /* const isValid = await isValidImage(file);
      if (!isValid) {
        setError('Image is not valid.');
        return;
      }*/

      const res = await uploadFile(file);
      setUploadedFile(res?.file?.path);
      onChange(res.file);
      setError(null);
    } catch (error) {
      console.error('Error checking image:', error);
      setError('Error checking image.');
    }
  };

  return (
    <div className="w-full flex-col gap-[1rem] flex items-start justify-start">
      <p className="text-lg font-medium leading-5">{label}</p>
      <div className="w-full gap-[2rem] flex items-start max-3xl:h-[13rem] justify-start">
        <div className="bg-gray-50 w-full h-full p-[1.6rem] flex items-center justify-center">
          {uploadedFile && !isUploadingFile ? (
            <img
              src={uploadedFile}
              alt="Uploaded"
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full min-h-[10rem]">
              {isUploadingFile ? <CreateCourseLoader /> : <UploadFileIcon />}
            </div>
          )}
        </div>

        <div className="w-full h-full flex flex-col items-start justify-between">
          <p className="text-sm w-full text-gray-600">
            Upload your course Thumbnail here.
            <h2 className="text-black">Important guidelines:</h2>{' '}
            <h2 className={`${Error ? 'text-red-500' : 'text-black'}`}>
              1200x800 pixels or 12:8 Ratio.
            </h2>
            Supported format:
            <h2 className="text-black">.jpg, .jpeg, or .png</h2>
          </p>
          {Error && <p className="text-red-500">{Error}</p>}
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
