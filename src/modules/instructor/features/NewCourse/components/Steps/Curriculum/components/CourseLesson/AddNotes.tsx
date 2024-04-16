import {
  lessonType,
  sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import Button from 'modules/shared/components/Button';
import TextArea from 'modules/shared/components/TextArea/TextArea';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useState } from 'react';

interface AddNotesPropsType {
  AddNotesToLesson: (
    sectionNumber: number,
    lessonName: string,
    Notes: string | null
  ) => void;
  SectionNumber: number;
  Lesson: lessonType;
}
function AddNotes({
  SectionNumber,
  Lesson,
  AddNotesToLesson,
}: AddNotesPropsType) {
  const { isOpen, setClose } = useModal();
  const [LessonNotesValue, setLessonNotesValue] = useState<string>(
    Lesson?.Notes
  );

  return (
    <div className="p-4 flex flex-col gap-[2rem]">
      <TextArea
        onChange={(e) => setLessonNotesValue(e.target.value)}
        value={LessonNotesValue}
        label={'Notes'}
        placeholder="Write your lecture Notes here..."
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
            AddNotesToLesson(SectionNumber, Lesson?.name, LessonNotesValue)
          }
          variant="primary"
          additionnalClasses="!py-3 !px-6  "
          text={'Add Notes'}
        />
      </div>
    </div>
  );
}

export default AddNotes;
