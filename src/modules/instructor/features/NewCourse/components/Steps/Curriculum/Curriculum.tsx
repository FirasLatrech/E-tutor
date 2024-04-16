import { Droppable, Draggable } from '@hello-pangea/dnd';
import { DragDropContext } from '@hello-pangea/dnd';
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

  const onDragEndLessons = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      setSections((old): sectionType[] => {
        if (!old) {
          return [];
        }
        return old.filter((section, index) => {
          if (index == Number(destination.droppableId)) {
            return {
              ...section,
              lessons: reorderLessons(
                section.lessons || [],
                section?.lessons?.[result?.destination?.index]?.name || '',
                section?.lessons?.[result?.source?.index]?.name || ''
              ),
            };
          }
          return section;
        });
      });
    }
  };

  const onDragEndSections = (result: any) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      setSections((old): sectionType[] => {
        if (!old) {
          return [];
        }
        return reorderLessons(
          old || [],
          old?.[result?.destination?.index]?.name || '',
          old?.[result?.source?.index]?.name || ''
        );
      });
    }
  };

  const reorderSections = (
    sections: any[],
    droppedOnName: string,
    draggedName: string
  ): any[] => {
    const draggedIndex = sections.findIndex(
      (section) => section.name === draggedName
    );
    const droppedIndex = sections.findIndex(
      (section) => section.name === droppedOnName
    );

    if (draggedIndex === -1 || droppedIndex === -1) {
      return sections;
    }
    const [draggedLesson] = sections.splice(draggedIndex, 1);

    const newIndex = droppedIndex;

    sections.splice(newIndex, 0, draggedLesson);

    return sections;
  };

  const reorderLessons = (
    lessons: any[],
    droppedOnName: string,
    draggedName: string
  ): any[] => {
    const draggedIndex = lessons.findIndex(
      (lesson) => lesson.name === draggedName
    );
    const droppedIndex = lessons.findIndex(
      (lesson) => lesson.name === droppedOnName
    );

    if (draggedIndex === -1 || droppedIndex === -1) {
      return lessons;
    }
    const [draggedLesson] = lessons.splice(draggedIndex, 1);

    const newIndex = droppedIndex;

    lessons.splice(newIndex, 0, draggedLesson);

    return lessons;
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <DragDropContext onDragEnd={onDragEndSections}>
        <Droppable droppableId={'sections'}>
          {(droppableProvider) => (
            <div
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="w-[95%] p-2 py-6 flex flex-col gap-3"
            >
              {Sections?.map((section: sectionType, indexSection: number) => {
                return (
                  <Draggable
                    draggableId={section?.name}
                    index={indexSection}
                    key={section?.name}
                  >
                    {(draggableProvider) => (
                      <div
                        {...draggableProvider.draggableProps}
                        ref={draggableProvider.innerRef}
                        {...draggableProvider.dragHandleProps}
                        className="bg-gray-50 p-6 !pb-4"
                      >
                        <CourseSection
                          courseSection={section}
                          SectionNumber={indexSection}
                          key={`section${indexSection}`}
                        />
                        <DragDropContext onDragEnd={onDragEndLessons}>
                          <Droppable droppableId={String(indexSection)}>
                            {(droppableProvider) => (
                              <div
                                {...droppableProvider.droppableProps}
                                ref={droppableProvider.innerRef}
                                className="py-3 w-full flex flex-col items-center justify-center gap-[1rem]"
                              >
                                {section?.lessons?.map(
                                  (lesson, indexLesson) => {
                                    return (
                                      <CourseLesson
                                        index={indexLesson}
                                        SectionNumber={indexSection}
                                        key={`lesson${indexSection}${indexLesson}`}
                                        Lesson={lesson}
                                      />
                                    );
                                  }
                                )}
                                {droppableProvider.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </DragDropContext>
                      </div>
                    )}
                  </Draggable>
                );
              })}

              {droppableProvider.placeholder}
            </div>
          )}
        </Droppable>
        <Button
          onClick={() =>
            setSections((old: sectionType[] | null) => [
              ...(old || []),
              {
                name: `section ${(old || []).length + 1}`,
                lessons: [
                  {
                    name: 'lecture 1',
                    video: null,
                    File: '',
                    captions: '',
                    Description: '',
                    Notes: '',
                  },
                ],
              },
            ])
          }
          variant="secondaryPrimary"
          text="Add Sections"
          className="w-[94%] flex items-center justify-center !mr-0 !text-lg "
        />
        <div className="flex justify-between items-center pb-4 w-[90%] mt-4">
          <Button
            onClick={() => setCurrentStep((old) => old - 1)}
            additionnalClasses="!p-4 !px-8 !text-lg"
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
      </DragDropContext>
    </div>
  );
}

export default Curriculum;
