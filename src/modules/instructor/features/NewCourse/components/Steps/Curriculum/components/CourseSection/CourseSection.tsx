import React from 'react';
import { motion } from 'framer-motion';
import AddIcon from 'modules/instructor/assets/icons/CreateCourse/AddIcon';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import {
  lessonType,
  type sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from 'modules/shared/components/ui/dialog';
import { useModal } from 'modules/shared/providers/Modal/modal-provider';
import ModalContainer from 'modules/shared/providers/Modal/ModalContainer';
import EditSectionModal from './EditSectionModal';

interface CourseSectionPropsType {
  courseSection: sectionType;
  SectionNumber: number;
}
function CourseSection({
  courseSection,
  SectionNumber,
}: CourseSectionPropsType) {
  const { Sections, setSections } = useCourseSections();
  const { setOpen } = useModal();

  const DeleteSection = (SectionNumber: number) => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old.filter((section, index) => {
        if (index !== SectionNumber) {
          return section;
        }
      });
    });
  };

  const EditSectionName = (SectionNumber: number, NewName: string) => {
    const IsExistSectionName =
      Sections?.filter(
        (section: sectionType) =>
          section?.name.toUpperCase() == NewName.toUpperCase()
      ) || [];
    if (IsExistSectionName?.length > 0) return false;
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }
      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            name: NewName,
          };
        } else {
          return section;
        }
      });
    });
    return true;
  };
  const AddLesson = () => {
    setSections((old): sectionType[] => {
      if (!old) {
        return [];
      }

      const existingNames = new Set<string>();
      old[SectionNumber]?.lessons?.forEach((lesson) => {
        existingNames.add(lesson.name);
      });

      let newLessonName = `lecture ${
        old[SectionNumber]?.lessons?.length || 0 + 1
      }`;
      while (existingNames.has(newLessonName)) {
        newLessonName = `lecture ${parseInt(newLessonName.split(' ')[1]) + 1}`;
      }

      return old?.map((section, index) => {
        if (index === SectionNumber) {
          return {
            ...section,
            lessons: [
              ...(section?.lessons || []),
              {
                name: newLessonName,
              } as lessonType,
            ],
          };
        } else {
          return section;
        }
      });
    });
  };

  return (
    <>
      <motion.div
        key={SectionNumber}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
      >
        <div className="flex gap-2 items-center h-full justify-between">
          <div className="flex gap-2 items-center h-full justify-start">
            <DragIcon />
            <label className="font-medium flex items-center justify-center gap-3 leading-5">
              {`Section ${String(SectionNumber + 1).padStart(2, '0')}:`}
              <p className="text-gray-900 leading-5 font-normal">
                {courseSection?.name || 'section name'}
              </p>
            </label>
          </div>
          <div className="flex items-center justify-center gap-3">
            <AddIcon
              className="cursor-pointer"
              onClick={() => {
                AddLesson();
              }}
            />
            <EditIcon
              className="cursor-pointer"
              onClick={() => {
                setOpen(
                  <EditSectionModal
                    Submit={(NewName: string) =>
                      EditSectionName(SectionNumber, NewName)
                    }
                    Section={Sections?.[SectionNumber]}
                  />
                );
              }}
            />
            <DeleteIcon
              className="cursor-pointer"
              onClick={() => {
                DeleteSection(SectionNumber);
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default CourseSection;
