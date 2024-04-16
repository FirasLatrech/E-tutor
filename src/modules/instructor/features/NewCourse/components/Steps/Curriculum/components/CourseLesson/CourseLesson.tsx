import React from 'react';
import { motion } from 'framer-motion';
import AddIcon from 'modules/instructor/assets/icons/CreateCourse/AddIcon';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import {
  type lessonType,
  type sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import DropDownGeneric from 'modules/shared/components/DropDownGeneric';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import EditLessonModal from './EditLessonModal';

interface CourseLessonPropsType {
  Lesson: lessonType;
  SectionNumber: number;
}
function CourseLesson({ Lesson, SectionNumber }: CourseLessonPropsType) {
  const { setOpen } = useModal();
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
    <motion.div
      key={SectionNumber}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      className="w-full"
    >
      <div className="w-full">
        <div className="flex items-center h-full py-2 justify-between gap-2 bg-white w-full px-6">
          <div className="flex items-center justify-start gap-2">
            <DragIcon />
            <p className="text-gray-900 leading-5 text-sm">{Lesson?.name}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <DropDownGeneric
              text="contents"
              Options={[
                {
                  name: 'Video',
                  action: () => {
                    setOpen(
                      <ModalContainer title="video">video</ModalContainer>
                    );
                  },
                },
                {
                  name: 'Attach File',
                  action: () => {
                    setOpen(
                      <ModalContainer title="Attach File">
                        Attach File
                      </ModalContainer>
                    );
                  },
                },
                {
                  name: 'Captions',
                  action: () => {
                    setOpen(
                      <ModalContainer title="Captions">Captions</ModalContainer>
                    );
                  },
                },
                {
                  name: 'Description',
                  action: () => {
                    setOpen(
                      <ModalContainer title="Description">
                        Description
                      </ModalContainer>
                    );
                  },
                },
                {
                  name: '  Lecture Notes',
                  action: () => {
                    setOpen(
                      <ModalContainer title="Lecture Notes">
                        Lecture Notes
                      </ModalContainer>
                    );
                  },
                },
              ]}
            />
            <EditIcon
              className="cursor-pointer"
              onClick={() => {
                setOpen(
                  <EditLessonModal
                    Submit={(NewName: string) => EditLessonName(NewName)}
                    Lesson={Lesson}
                  />
                );
              }}
            />
            <DeleteIcon
              className="cursor-pointer"
              onClick={() => {
                DeleteLesson(SectionNumber, Lesson?.name);
              }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CourseLesson;
