import Button from 'modules/shared/components/Button';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useState } from 'react';
import UploadedVideo from './UploadedVideo';
import { UploadVideoForStreaming } from 'modules/shared/data/api/videoStreaming.service';
import { UploadButton } from '@uploadthing/react';

function AddVideo() {
  const { isOpen, setClose } = useModal();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      console.log(file);

      const uploaded = await UploadVideoForStreaming(file);
      console.log(uploaded);
    }
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] flex flex-col gap-3 items-start justify-center">
        <div className="flex h-[3rem] w-full items-center">
          <div className="border relative w-full border-gray-100 h-full">
            <input
              className="w-full h-full opacity-0"
              id="large_size"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
            {selectedFile ? (
              <UploadedVideo videoFile={selectedFile} />
            ) : (
              <p className="absolute overflow-hidden whitespace-nowrap text-ellipsis w-[94%] text-gray-500 top-3 left-3">
                {'Upload Files'}
              </p>
            )}
          </div>
          <label
            htmlFor="large_size"
            className="text-base whitespace-nowrap font-semibold	 text-centerq flex items-center cursor-pointer justify-center h-full px-4 text-gray-900 bg-gray-100"
          >
            Upload File
          </label>
        </div>
        <div className="flex gap-1">
          <strong className="text-sm text-gray-900">Note:</strong>
          <span className="text-sm text-gray-700">
            All files should be at least 720p and less than 4.0 GB.
          </span>
        </div>
        <div className="flex justify-between items-center w-full">
          <Button
            onClick={setClose}
            additionnalClasses="!py-3 !px-6 "
            variant="tertiaryGray"
            text={'Cancel'}
          />
          <Button
            onClick={() => {
              if (selectedFile) {
                // Handle upload logic here
                console.log('Selected file:', selectedFile);
              }
            }}
            variant="primary"
            additionnalClasses="!py-3 !px-6  "
            text={'Upload Video'}
          />
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
