import {
  CourseInformationType,
  instructorType,
  sectionType,
} from 'modules/instructor/types/CrouseSteps.type';
import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';

interface CourseCreationContextType {
  BasicInformation: any;
  setBasicInformations: React.Dispatch<React.SetStateAction<any[] | null>>;
  Sections: sectionType[] | null;
  setSections: React.Dispatch<React.SetStateAction<sectionType[] | null>>;
  Instructors: instructorType[] | null;
  setInstructors: React.Dispatch<React.SetStateAction<instructorType[] | null>>;
  AdvancedInformation: CourseInformationType | null ;
  setAdvancedInformation: React.Dispatch<
    React.SetStateAction<CourseInformationType | null >
  >;
}

export interface BasicInformationType {
  title: string;
  subtitle: string;
  course_category_id: string;
  course_sub_category_id: string;
  course_topic: string;
  course_language_id: number;
  subtitle_language_id?: number;
  course_level_id: number;
  durations: string;
}

const CourseCreationContext = createContext<
  CourseCreationContextType | undefined
>(undefined);

export interface StepsProviderType {
  children: ReactNode;
}

export const useCourseCreation = (): CourseCreationContextType => {
  const context = useContext(CourseCreationContext);
  if (!context) {
    throw new Error(
      'useCourseCreation must be used within a CourseSectionsProvider'
    );
  }
  return context;
};

export const CourseSectionsProvider = ({ children }: StepsProviderType) => {
  const [Sections, setSections] = useState<sectionType[] | null>([
    {
      name: 'section 1',
      lessons: [
        {
          name: 'lecture 1',
          video: null,
          File: '',
          captions: '',
          Description: '',
          Notes: '',
        },
        {
          name: 'lecture 2',
          video: null,
          File: '',
          captions: '',
          Description: '',
          Notes: '',
        },
      ],
    },
  ]);

  const [Instructors, setInstructors] = useState<instructorType[] | null>([]);
  const [BasicInformation, setBasicInformations] = useState<any[] | null>(null);
  const [AdvancedInformation, setAdvancedInformation] =
    useState<CourseInformationType | null>(null
      /*{
      course_thumbnail: '',
      course_content: { '0': '' },
      target_audience: { '0': '' },
      course_requirements: { '0': '' },
      course_descriptions: '',
    }*/);

  const contextValue: CourseCreationContextType = {
    Sections,
    setSections,
    Instructors,
    setInstructors,
    setBasicInformations,
    BasicInformation,
    setAdvancedInformation,
    AdvancedInformation,
  };

  return (
    <CourseCreationContext.Provider value={contextValue}>
      {children}
    </CourseCreationContext.Provider>
  );
};

export default CourseCreationContext;
