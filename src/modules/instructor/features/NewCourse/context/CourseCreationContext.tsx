import { CourseInformationType, instructorType, sectionType } from 'modules/instructor/types/createCrouseSteps.type';
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
  AdvancedInformation: CourseInformationType | null;
  setAdvancedInformation: React.Dispatch<
    React.SetStateAction<CourseInformationType | null>
  >;
}

export interface BasicInformationType {
  tittle: string;
  subTittle: string;
  courseCategory: string;
  courseSubCategory: string;
  courseTopic: string;
  courseLanguage: string;
  subtitleLanguage?: string;
  courseLevel: string;
  courseDuration: string;
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
    useState<CourseInformationType | null>({
      CourseThumbnail: '',
      courseDescriptions: '',
      whatYouWillTeach: { '0': '' },
      targetAudience: { '0': '' },
      courseRequirements: { '0': '' },
    });

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
