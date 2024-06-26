import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import { Draggable } from '@hello-pangea/dnd';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import {
  type lessonType,
  type sectionType,
  useCourseSections,
  videoLessonType,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import DropDownGeneric from 'modules/shared/components/DropDownGeneric';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import EditLessonModal from './EditLessonModal';
import { motion } from 'framer-motion';
import AddDescription from './AddDescription';
import AddCaptions from './AddCaptionsModal';
import AddNotes from './AddNotes';
import AddVideo from './AddVideoModal';

interface CourseLessonPropsType {
  Lesson: lessonType;
  SectionNumber: number;
  index: number;
}
function CourseLesson({ Lesson, SectionNumber, index }: CourseLessonPropsType) {
  const { setOpen, setClose } = useModal();
  const { Sections, setSections } = useCourseSections();

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
                (lesson: lessonType, index) => lesson?.name != LessonName
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
                if (lesson?.name.toUpperCase() == LessonName.toUpperCase()) {
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
                if (lesson?.name.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    captions: captions || lesson?.captions || '',
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
                if (lesson?.name.toUpperCase() == LessonName.toUpperCase()) {
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
                if (lesson?.name.toUpperCase() == LessonName.toUpperCase()) {
                  return {
                    ...lesson,
                    video: video || lesson?.video || '',
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
          lesson?.name.toUpperCase() == NewName.toUpperCase()
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
                if (lesson?.name == Lesson?.name) {
                  return {
                    ...lesson,
                    name: NewName,
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
      draggableId={`Section-${SectionNumber}-${Lesson.name}`}
      index={index}
      key={`Section-${SectionNumber}-${Lesson.name}`}
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
                  {Lesson?.name}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <DropDownGeneric
                  text="contents"
                  Options={[
                    {
                      label: 'Video',
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
                      label: 'Attach File',
                      action: () =>
                        setOpen(
                          <ModalContainer title="Attach File">
                            Attach File
                          </ModalContainer>
                        ),
                    },
                    {
                      label: 'Captions',
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
                      label: 'Description',
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
                      label: 'Lecture Notes',
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
                  onClick={() => DeleteLesson(SectionNumber, Lesson?.name)}
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
