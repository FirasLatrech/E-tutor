import {
  lessonType,
  sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useEffect, useState } from 'react';

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
      <div className="py-2 px-6">
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
        <div className="flex justify-between items-center pb-4 w-full mt-4">
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
