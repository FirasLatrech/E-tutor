import { Droppable, Draggable } from '@hello-pangea/dnd';
import { DragDropContext } from '@hello-pangea/dnd';
import { useCourseCreation } from '../../../context/CourseCreationContext';
import { useSteps } from '../../../context/StepsContext';
import CourseLesson from './components/CourseLesson/CourseLesson';
import CourseSection from './components/CourseSection/CourseSection';
import Button from 'modules/shared/components/Button';
import {
  lessonType,
  sectionType,
} from 'modules/instructor/types/CourseSteps.type';
import { useUpdateCourseMutation } from 'modules/instructor/data/queries/course/Course.query';
import { useSearchParams } from 'react-router-dom';
import { useGetCourseById } from 'modules/home/data/queries/home.query';
import { useEffect } from 'react';

function Curriculum() {
  const { Sections, setSections } = useCourseCreation();
  const { currentStep, setCurrentStep } = useSteps();

  const { mutateAsync: updateCourse, isPending: isLoadingUpdate } =
    useUpdateCourseMutation();

  let [searchParams, setSearchParams] = useSearchParams();
  const courseId = searchParams.get('id') || undefined;

  const { data: current_course_data, isFetching: course_loading } = courseId
    ? useGetCourseById(courseId)
    : { data: null, isFetching: null };

  useEffect(() => {
    if (
      current_course_data?.chapters &&
      current_course_data?.chapters.length > 0
    ) {
      setSections(current_course_data?.chapters || []);
    }
  }, [current_course_data]);

  async function HandleSubmit() {
    await updateCourse({
      course: {
        chapters: Sections?.map((chapter, chapterIndex) => ({
          ...chapter,
          rang: chapterIndex + 1,
          lessons:
            chapter?.lessons &&
            chapter?.lessons.map((lesson, lessonIndex) => ({
              ...lesson,
              rang: lessonIndex + 1,
          //    Video: { path: lesson?.Video?.path,n id: lesson?.Video?.id },
            })),
        })),
      },
      courseId,
    });
    setCurrentStep((old) => old + 1);
  }

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
                section?.lessons?.[result?.destination?.index]?.title || '',
                section?.lessons?.[result?.source?.index]?.title || ''
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
          old?.[result?.destination?.index]?.title || '',
          old?.[result?.source?.index]?.title || ''
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
      (section) => section.title === draggedName
    );
    const droppedIndex = sections.findIndex(
      (section) => section.title === droppedOnName
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
      (lesson) => lesson.title === draggedName
    );
    const droppedIndex = lessons.findIndex(
      (lesson) => lesson.title === droppedOnName
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
    <div className="flex flex-col items-center justify-center w-full">
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
                    draggableId={section?.title}
                    index={indexSection}
                    key={section?.title}
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
                                  (lesson: lessonType, indexLesson: number) => {
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
          onClick={() => {
            setSections((old: sectionType[] | null) => [
              ...(old || []),
              {
                title: `section ${(old || []).length + 1}`,
                lessons: [
                  {
                    title: 'lecture 1',
                    Video: null,
                    File: '',
                    Captions: '',
                    Description: '',
                    Notes: '',
                  },
                ],
              },
            ]);
          }}
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
            onClick={HandleSubmit}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default Curriculum;
