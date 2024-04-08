import UploadFileIcon from 'modules/instructor/assets/icons/CreateCourse/UploadFileIcon';
import UploadImage from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadImage/UploadImage';
import UploadVideo from 'modules/instructor/features/NewCourse/components/Steps/AdvanceInformation/components/UploadVideo/UploadVideo';
import TextEditor from 'modules/shared/components/TextEditor';
import React, { useState } from 'react';
import MultipleAnswer from '../../MultipleAnswer';
import Button from 'modules/shared/components/Button';
import { useSteps } from '../../../context/StepsContext';

function AdvanceInformation() {
  const { currentStep, setCurrentStep } = useSteps();
  const [value, setValue] = useState<string>('');
  return (
    <div className="w-full h-full flex flex-col">
      <form
        className="w-[95%] flex flex-col "
        //     onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex p-8 gap-[2rem] border-b border-gray-100">
          <UploadImage label={'Course Thumbnail'} />
          <UploadVideo label={'Course Trailer'} />
        </div>
        <div className="flex p-8 flex-col gap-[2rem] border-b border-gray-100">
          <TextEditor
            label={'Course Descriptions'}
            value={value}
            setValue={setValue}
          />
          <MultipleAnswer label="What you will teach in this course" />
          <MultipleAnswer label="Target Audience" />
          <MultipleAnswer label="Course requirements" />
          <div className="flex justify-between items-center w-full mt-4">
            <Button
              onClick={() => setCurrentStep((old) => old - 1)}
              variant="tertiaryGray"
              additionnalClasses="!p-4 !px-8 !text-lg"
              text={currentStep == 0 ? 'Cancel' : 'Previous'}
            />
            <Button
              variant="primary"
              additionnalClasses="!p-4 !px-8 !text-lg"
              text={'Save & Next'}
              onClick={() => setCurrentStep((old) => old + 1)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdvanceInformation;
