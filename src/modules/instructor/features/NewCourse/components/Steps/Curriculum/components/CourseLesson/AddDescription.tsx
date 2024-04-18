import {
  lessonType,
  sectionType,
  useCourseCreation,
} from 'modules/instructor/features/NewCourse/context/CourseCreationContext';
import Button from 'modules/shared/components/Button';
import TextArea from 'modules/shared/components/TextArea/TextArea';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useState } from 'react';

interface AddDescriptionPropsType {
  AddDescriptionToLesson: (
    sectionNumber: number,
    lessonName: string,
    Description: string | null
  ) => void;
  SectionNumber: number;
  Lesson: lessonType;
}
function AddDescription({
  SectionNumber,
  Lesson,
  AddDescriptionToLesson,
}: AddDescriptionPropsType) {
  const { isOpen, setClose } = useModal();
  const [LessonDescriptionValue, setLessonDescriptionValue] = useState<string>(
    Lesson?.Description
  );

  return (
    <div className="p-4 flex flex-col gap-[2rem]">
      <TextArea
        onChange={(e) => setLessonDescriptionValue(e.target.value)}
        value={LessonDescriptionValue}
        label={'Description'}
        placeholder="Write your lecture description here..."
      />
      <div className="flex justify-between items-center w-full">
        <Button
          onClick={setClose}
          additionnalClasses="!py-3 !px-6 "
          variant="tertiaryGray"
          text={'Cancel'}
        />
        <Button
          onClick={() =>
            AddDescriptionToLesson(
              SectionNumber,
              Lesson?.name,
              LessonDescriptionValue
            )
          }
          variant="primary"
          additionnalClasses="!py-3 !px-6  "
          text={'Add Description'}
        />
      </div>
    </div>
  );
}

export default AddDescription;
