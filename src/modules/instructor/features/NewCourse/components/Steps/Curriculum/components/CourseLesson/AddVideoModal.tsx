import Button from 'modules/shared/components/Button';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useState } from 'react';
import { UploadVideoForStreaming } from 'modules/shared/data/api/videoStreaming.service';
import { UploadButton } from '@uploadthing/react';
import { UploadFile, UploadVideo } from 'modules/shared/data/api/File.service';
import { useUploadVideoQuery } from 'modules/shared/data/queries/file.query';
import UploadVideoLesson from './UploadVideo';
import {
  lessonType,
  videoLessonType,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';

interface AddVideoPropsType {
  AddVideoToLesson: (
    sectionNumber: number,
    lessonName: string,
    video: videoLessonType
  ) => void;
  SectionNumber: number;
  Lesson: lessonType;
}

function AddVideo({
  SectionNumber,
  Lesson,
  AddVideoToLesson,
}: AddVideoPropsType) {
  const { isOpen, setClose } = useModal();

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[90%] flex flex-col gap-3 items-start justify-center">
        <UploadVideoLesson
          Lesson={Lesson}
          AddVideoToLesson={(video: videoLessonType) =>
            AddVideoToLesson(SectionNumber, Lesson.name, video)
          }
        />
        <div className="flex gap-1">
          <strong className="text-sm text-gray-900">Note:</strong>
          <span className="text-sm text-gray-700">
            file should be at least 720p and less than 4.0 GB.
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
            onClick={setClose}
            variant="primary"
            additionnalClasses="!py-3 !px-6  "
            text={'ok'}
          />
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
