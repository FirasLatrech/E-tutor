import Button from 'modules/shared/components/Button';
import {
  type sectionType,
  useCourseSections,
} from '../../../context/CourseSectionsContext';
import { useSteps } from '../../../context/StepsContext';
import CourseLesson from './components/CourseLesson/CourseLesson';
import CourseSection from './components/CourseSection/CourseSection';

function Curriculum() {
  const { Sections, setSections } = useCourseSections();
  const { currentStep, setCurrentStep } = useSteps();

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[95%] p-2 py-6 flex flex-col gap-3">
        {Sections?.map((section: sectionType, indexSection: number) => {
          return (
            <div className="bg-gray-50 p-6 !pb-2">
              <CourseSection
                courseSection={section}
                SectionNumber={indexSection}
                key={`section${indexSection}`}
              />
              <div className="py-3 w-full flex flex-col items-center justify-center gap-[1rem]">
                {section?.lessons?.map((lesson, indexLesson) => {
                  return (
                    <CourseLesson
                      SectionNumber={indexSection}
                      key={`lesson${indexSection}${indexLesson}`}
                      Lesson={lesson}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <Button
          onClick={() => {
            setSections((old: sectionType[] | null) => [
              ...(old || []),
              {
                name: '',
                lessons: [
                  { name: 'lecture 1', type: '' },
                  { name: 'lecture 2', type: '' },
                ],
              },
            ]);
          }}
          variant="secondaryPrimary"
          text="Add Sections"
          className="w-full !text-lg"
        />
      </div>
      <div className="flex justify-between items-center pb-4 w-[90%] mt-4">
        <Button
          onClick={() => {
            setCurrentStep((old) => old - 1);
          }}
          additionnalClasses="!p-4 !px-8 !text-lg"
          variant="tertiaryGray"
          text={currentStep == 0 ? 'Cancel' : 'Previous'}
        />
        <Button
          variant="primary"
          additionnalClasses="!p-4 !px-8 !text-lg"
          text={'Save & Next'}
          onClick={() => {
            setCurrentStep((old) => old + 1);
          }}
        />
      </div>
    </div>
  );
}

export default Curriculum;
