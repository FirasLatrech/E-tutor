import { useUploadVideoQuery } from 'modules/shared/data/queries/file.query';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { LoadingSpinner } from 'modules/shared/assets/icons/Loaders/Loader';
import {
  lessonType,
  videoLessonType,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
interface UploadVideoPropsType {
  AddVideoToLesson: (video: videoLessonType) => void;
  Lesson: lessonType;
}

function UploadVideoLesson({ AddVideoToLesson, Lesson }: UploadVideoPropsType) {
  const { isPending, error, data, mutateAsync } = useUploadVideoQuery();
  const [selectedFile, setSelectedFile] = useState<File | null>(
    Lesson?.video?.file || null
  );
  const [Error, setError] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    console.log(file);
    if ((file?.size || 0) > 1024 * 1024 * 1024 * 4) {
      setError(
        ' Your file is too large. Please select a file under 4GB in size.'
      );
      return;
    }
    if (file) {
      const data = await mutateAsync(file);
      setSelectedFile(file);
      AddVideoToLesson({ url: data?.file?.path, file, id: data?.file.id });
    }
  };
  return (
    <>
      {(data?.file || Lesson?.video?.file) && !isPending ? (
        <div className="flex items-start w-full relative">
          <div className="flex items-start justify-center gap-2">
            <video
              className="w-[200px] top-0 max-h-[400px]"
              src={data?.file.path || Lesson?.video?.url}
            />
            <div className="flex flex-col items-start h-full justify-between gap-1">
              <div className="flex flex-col">
                <div className="flex gap-2 items-start">
                  <p className="uppercase text-sm text-success-500">
                    file uploaded
                  </p>
                  <span className="text-gray-700 self-start ">•</span>
                  <p className="text-gray-700 text-sm">{'1:55'}</p>
                </div>
                <p className="h-[4rem]">{selectedFile?.name}</p>
              </div>
              <div className="">
                <input
                  className="w-0 h-0 opacity-0"
                  id="large_size"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                />
                <label
                  aria-disabled={isPending}
                  htmlFor="large_size"
                  className="text-secondary-500 cursor-pointer font-medium	leading-5"
                >
                  {'Replace Video'}
                </label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {!isPending ? (
            <>
              {' '}
              <div className="flex h-[3rem] w-full items-center">
                <div className="border relative w-full border-gray-100 h-full">
                  <input
                    className="w-full h-full opacity-0"
                    id="large_size"
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    max={1024 * 1024 * 1024 * 4}
                  />

                  <p className="absolute overflow-hidden whitespace-nowrap text-ellipsis w-[94%] text-gray-500 top-3 left-3">
                    {'Upload File'}
                  </p>
                </div>
                <label
                  aria-disabled={isPending}
                  htmlFor="large_size"
                  className="text-base whitespace-nowrap font-semibold	 text-centerq flex items-center cursor-pointer justify-center h-full px-4 text-gray-900 bg-gray-100"
                >
                  {'Upload File'}
                </label>
              </div>
              {Error && <div className="text-red-500">{Error}</div>}
            </>
          ) : (
            <div className="flex w-full h-full items-center justify-center gap-2">
              <LoadingSpinner className="!text-primary-500" />
              <h1 className="text-primary-500">Uploading...</h1>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default UploadVideoLesson;
