import React from 'react';
import {
  sectionType,
  useCourseSections,
} from '../../../context/CourseSectionsContext';
import Button from 'modules/shared/components/Button';
import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import { useSteps } from '../../../context/StepsContext';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import AddIcon from 'modules/instructor/assets/icons/CreateCourse/AddIcon';
import CourseSection from './components/CourseSection/CourseSection';
import CourseLesson from './components/CourseLesson/CourseLesson';

function Curriculum() {
  const { Sections, setSections } = useCourseSections();
  const { currentStep, setCurrentStep } = useSteps();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-[95%] p-2 py-6 flex flex-col gap-3">
        {Sections?.map((section: sectionType, index: number) => {
          return (
            <div className="bg-gray-50 p-6 !pb-2">
              <CourseSection
                courseSection={section}
                SectionNumber={index}
                key={`section${index}`}
              />
              <div className="py-3 w-full flex flex-col items-center justify-center gap-[1rem]">
                {section?.lessons?.map((lesson) => {
                  console.log(section);
                  return (
                    <CourseLesson key={`lesson${index}`} Lesson={lesson} />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Button
          onClick={() =>
            setSections((old: sectionType[] | null) => [
              ...(old || []),
              {
                name: '',
                lessons: [
                  { name: 'lecture 1', type: '' },
                  { name: 'lecture 2', type: '' },
                ],
              },
            ])
          }
          variant="secondaryPrimary"
          text="Add Sections"
          className="w-full !text-lg"
        />
      </div>
      <div className="flex justify-between items-center pb-4 w-[90%] mt-4">
        <Button
          onClick={() => setCurrentStep((old) => old - 1)}
          variant="tertiaryGray"
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
  );
}

export default Curriculum;
