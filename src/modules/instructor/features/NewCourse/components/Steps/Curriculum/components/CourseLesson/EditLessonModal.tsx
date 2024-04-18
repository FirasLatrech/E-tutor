import React, { useEffect, useState } from 'react';
import {
  type lessonType,
  sectionType,
  useCourseCreation,
} from 'modules/instructor/features/NewCourse/context/CourseCreationContext';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';

interface EditSectionModalPropsType {
  Lesson: lessonType | undefined;
  Submit: (NewName: string) => boolean;
}
function EditLessonModal({ Lesson, Submit }: EditSectionModalPropsType) {
  const [value, setValue] = useState<string | null>(Lesson?.name || null);
  const [error, setError] = useState<string | null>(null);
  const { setClose } = useModal();

  const ChangeLessonNameHandler = () => {
    const submitted: boolean = Submit(value || Lesson?.name || '');
    if (!submitted) {
      setError('lesson name already exist');
      return;
    }
    setClose();
    setValue('');
    setError(null);
  };
  return (
    <ModalContainer title={'edit lesson name'}>
      <div className="px-6 py-2">
        <Input
          id="lesson"
          name="lesson"
          label="Sesson"
          onChange={(e) => setValue(e.target.value)}
          value={value || ''}
          placeholder="Write your lesson name here..."
        />
        <span
          className={`text-xs text-red-500 opacity-0 ${
            error ? 'opacity-100' : ''
          }`}
        >
          {error || '|'}
        </span>
        <div className="flex items-center justify-between w-full pb-4 mt-4">
          <Button
            variant="secondaryGray"
            onClick={() => {
              setValue('');
              setError(null);
              setClose();
            }}
            text={'Cancel'}
          />
          <Button
            additionnalClasses="!py-3"
            onClick={ChangeLessonNameHandler}
            variant="primary"
            text={'Save Changes'}
          />
        </div>
      </div>
    </ModalContainer>
  );
}

export default EditLessonModal;
