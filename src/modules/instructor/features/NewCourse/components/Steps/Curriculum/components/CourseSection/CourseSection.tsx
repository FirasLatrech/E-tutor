import AddIcon from 'modules/instructor/assets/icons/CreateCourse/AddIcon';
import DragIcon from 'modules/instructor/assets/icons/CreateCourse/DragIcon';
import EditIcon from 'modules/instructor/assets/icons/CreateCourse/EditIcon';
import DeleteIcon from 'modules/instructor/assets/icons/CreateCourse/deleteIcon';
import {
  sectionType,
  useCourseSections,
} from 'modules/instructor/features/NewCourse/context/CourseSectionsContext';
import React from 'react';

interface CourseSectionPropsType {
  courseSection: sectionType;
  SectionNumber: number;
}
function CourseSection({
  courseSection,
  SectionNumber,
}: CourseSectionPropsType) {
  const { Sections, setSections } = useCourseSections();

 const AddLesson = () => {
    console.log('object');
   setSections((old): sectionType[] => {
     if (!old) {
       return [];
     }
     return old.map((section, index) => {
       if (index === SectionNumber) {
         return {
           ...section,
           lessons: [
             ...(section?.lessons || []),
             {
               name: `lecture ${section?.lessons?.length || 0 + 1}`,
               type: '',
             },
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
          <AddIcon className="cursor-pointer" onClick={() => AddLesson()} />
          <EditIcon className="cursor-pointer" />
          <DeleteIcon className="cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default CourseSection;
