import {
  lessonType,
  sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import Button from 'modules/shared/components/Button';
import TextArea from 'modules/shared/components/TextArea/TextArea';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useState } from 'react';

interface AddCaptionsPropsType {
  AddCaptionsToLesson: (
    sectionNumber: number,
    lessonName: string,
    captions: string | null
  ) => void;
  SectionNumber: number;
  Lesson: lessonType;
}
function AddCaptions({
  SectionNumber,
  Lesson,
  AddCaptionsToLesson,
}: AddCaptionsPropsType) {
  const { isOpen, setClose } = useModal();
  const [LessonCaptionsValue, setLessonCaptionsValue] = useState<string>(
    Lesson?.captions
  );

  return (
    <div className="p-4 flex flex-col gap-[2rem]">
      <TextArea
        onChange={(e) => setLessonCaptionsValue(e.target.value)}
        value={LessonCaptionsValue}
        label={'Captions'}
        placeholder="Write your lecture Captions here..."
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
            AddCaptionsToLesson(
              SectionNumber,
              Lesson?.name,
              LessonCaptionsValue
            )
          }
          variant="primary"
          additionnalClasses="!py-3 !px-6  "
          text={'Add Captions'}
        />
      </div>
    </div>
  );
}

export default AddCaptions;
