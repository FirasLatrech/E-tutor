import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import { Draggable } from '@hello-pangea/dnd';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import { useCourseCreation } from 'modules/instructor/features/NewCourse/context/CourseCreationContext';
import DropDownGeneric from 'modules/shared/components/DropDownGeneric';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import EditLessonModal from './EditLessonModal';
import { motion } from 'framer-motion';
import AddDescription from './AddDescription';
import AddCaptions from './AddCaptionsModal';
import AddNotes from './AddNotes';
import AddVideo from './AddVideoModal';
import {
  lessonType,
  sectionType,
  videoLessonType,
} from 'modules/instructor/types/CourseSteps.type';

interface CourseLessonPropsType {
  Lesson: lessonType;
  SectionNumber: number;
  index: number;
}
function CourseLesson({ Lesson, SectionNumber, index }: CourseLessonPropsType) {
  const { setOpen, setClose } = useModal();
  const { Sections, setSections } = useCourseCreation();

  const DeleteLesson = (SectionNumber: number, LessonName: string) => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.filter(
                (lesson: lessonType, index) => lesson?.title != LessonName
              ) || null,
          };
        } else {
          return section;
        }
      });
    });
  };

  const AddDescriptionToLesson = (
    SectionNumber: number,
    LessonName: string,
    Description: string | null
  ) => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.map((lesson: lessonType): lessonType => {
                if (lesson?.title.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    Description: Description || lesson?.Description || '',
                  } as lessonType;
                } else return lesson;
              }) || null,
          };
        } else {
          return section;
        }
      });
    });
    setClose();
  };

  const AddCaptionsToLesson = (
    SectionNumber: number,
    LessonName: string,
    captions: string | null
  ) => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.map((lesson: lessonType): lessonType => {
                if (lesson?.title.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    Captions: captions || lesson?.Captions || '',
                  } as lessonType;
                } else return lesson;
              }) || null,
          };
        } else {
          return section;
        }
      });
    });
    setClose();
  };

  const AddNotesToLesson = (
    SectionNumber: number,
    LessonName: string,
    notes: string | null
  ) => {
    console.log(notes);
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.map((lesson: lessonType): lessonType => {
                if (lesson?.title.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    Notes: notes || lesson?.Notes || '',
                  } as lessonType;
                } else return lesson;
              }) || null,
          };
        } else {
          return section;
        }
      });
    });
    setClose();
  };

  const AddVideoToLesson = (
    SectionNumber: number,
    LessonName: string,
    video: videoLessonType
  ) => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.map((lesson: lessonType): lessonType => {
                if (lesson?.title.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    Video: video || lesson?.Video || '',
                  } as lessonType;
                } else return lesson;
              }) || null,
          };
        } else {
          return section;
        }
      });
    });
  };

  const EditLessonName = (NewName: string) => {
    let IsExistLessonName: lessonType[] | undefined = [];
    Sections?.forEach((section: sectionType) => {
      IsExistLessonName = section?.lessons?.filter(
        (lesson: lessonType) =>
          lesson?.title.toUpperCase() == NewName.toUpperCase()
      );
    });
    if (IsExistLessonName?.length > 0) return false;

    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons:
              section?.lessons?.map((lesson: lessonType): lessonType => {
                if (lesson?.title == Lesson?.title) {
                  return {
                    ...lesson,
                    title: NewName,
                  };
                } else return lesson;
              }) || null,
          };
        } else {
          return section;
        }
      });
    });
    return true;
  };
  return (
    <Draggable
      draggableId={`Section-${SectionNumber}-${Lesson.title}`}
      index={index}
      key={`Section-${SectionNumber}-${Lesson.title}`}
    >
      {(draggableProvider) => (
        <motion.div
          key={SectionNumber}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="w-full"
        >
          <div
            className="w-full"
            {...draggableProvider.draggableProps}
            ref={draggableProvider.innerRef}
            {...draggableProvider.dragHandleProps}
          >
            <div className="flex items-center justify-between w-full h-full gap-2 px-6 py-2 bg-white">
              <div className="flex items-center justify-start gap-2">
                <DragIcon />
                <p className="text-sm leading-5 text-gray-900">
                  {Lesson?.title}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <DropDownGeneric
                  text="contents"
                  Options={[
                    {
                      name: 'Video',
                      action: () =>
                        setOpen(
                          <ModalContainer title="video">
                            <AddVideo
                              AddVideoToLesson={AddVideoToLesson}
                              SectionNumber={SectionNumber}
                              Lesson={Lesson}
                            />
                          </ModalContainer>
                        ),
                    },
                    {
                      name: 'Attach File',
                      action: () =>
                        setOpen(
                          <ModalContainer title="Attach File">
                            Attach File
                          </ModalContainer>
                        ),
                    },
                    {
                      name: 'Captions',
                      action: () =>
                        setOpen(
                          <ModalContainer title="Captions">
                            <AddCaptions
                              AddCaptionsToLesson={AddCaptionsToLesson}
                              SectionNumber={SectionNumber}
                              Lesson={Lesson}
                            />
                          </ModalContainer>
                        ),
                    },
                    {
                      name: 'Description',
                      action: () =>
                        setOpen(
                          <ModalContainer title="Add Lecture Description">
                            <AddDescription
                              AddDescriptionToLesson={AddDescriptionToLesson}
                              SectionNumber={SectionNumber}
                              Lesson={Lesson}
                            />
                          </ModalContainer>
                        ),
                    },
                    {
                      name: 'Lecture Notes',
                      action: () =>
                        setOpen(
                          <ModalContainer title="Lecture Notes">
                            <AddNotes
                              AddNotesToLesson={AddNotesToLesson}
                              SectionNumber={SectionNumber}
                              Lesson={Lesson}
                            />
                          </ModalContainer>
                        ),
                    },
                  ]}
                />
                <EditIcon
                  className="cursor-pointer"
                  onClick={() =>
                    setOpen(
                      <EditLessonModal
                        Submit={(NewName: string) => EditLessonName(NewName)}
                        Lesson={Lesson}
                      />
                    )
                  }
                />
                <DeleteIcon
                  className="cursor-pointer"
                  onClick={() => DeleteLesson(SectionNumber, Lesson?.title)}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </Draggable>
  );
}

export default CourseLesson;
