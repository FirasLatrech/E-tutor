import {
  sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import Button from 'modules/shared/components/Button';
import Input from 'modules/shared/components/Input';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import React, { useEffect, useState } from 'react';

interface EditSectionModalPropsType {
  Section: sectionType | undefined;
  Submit: (NewName: string) => boolean;
}
function EditSectionModal({ Section, Submit }: EditSectionModalPropsType) {
  const [value, setValue] = useState<string | null>(Section?.name || null);
  const [error, setError] = useState<string | null>(null);
  const { setClose } = useModal();

  const ChangeSectionNameHandler = () => {
    const submitted: boolean = Submit(value || Section?.name || '');
    if (!submitted) {
      setError('section name already exist');
      return;
    }
    setValue('');
    setError(null);
    setClose();
  };

  return (
    <ModalContainer title={'edit section name'}>
      <div className="py-2 px-6">
        <Input
          id="Section"
          name="Section"
          label="Section"
          onChange={(e) => setValue(e.target.value)}
          value={value || ''}
          placeholder="Write your section name here..."
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
            onClick={ChangeSectionNameHandler}
            variant="primary"
            text={'Save Changes'}
          />
        </div>
      </div>
    </ModalContainer>
  );
}

export default EditSectionModal;
