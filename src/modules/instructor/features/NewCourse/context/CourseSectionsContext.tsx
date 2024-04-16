import React, { ReactNode, createContext, useContext, useState } from 'react';

interface CourseSectionsContextType {
  BasicInformation: any;
  setBasicInformations: React.Dispatch<React.SetStateAction<any[] | null>>;
  Sections: sectionType[] | null;
  setSections: React.Dispatch<React.SetStateAction<sectionType[] | null>>;
  Instructors: any[] | null;
  setInstructors: React.Dispatch<React.SetStateAction<any[] | null>>;
  AdvancedInformation: any;
  setAdvancedInformation: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export interface sectionType {
  lessons: lessonType[] | null;
  name: string;
}

export interface videoLessonType {
  url: string;
  file: File;
  id: string;
}
export interface lessonType {
  name: string;
  video: videoLessonType | null;
  File: string;
  captions: string;
  Description: string;
  Notes: string;
}
const CourseSectionsContext = createContext<
  CourseSectionsContextType | undefined
>(undefined);

export interface StepsProviderType {
  children: ReactNode;
}

export const useCourseSections = (): CourseSectionsContextType => {
  const context = useContext(CourseSectionsContext);
  if (!context) {
    throw new Error(
      'useCourseSections must be used within a CourseSectionsProvider'
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

  const [Instructors, setInstructors] = useState<any[] | null>([]);
  const [BasicInformation, setBasicInformations] = useState<any[] | null>(null);
  const [AdvancedInformation, setAdvancedInformation] = useState<any | null>({
    courseDescriptions: '',
    whatYouWillTeach: { '0': '' },
    targetAudience: { '0': '' },
    courseRequirements: { '0': '' },
  });

  const contextValue: CourseSectionsContextType = {
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
    <CourseSectionsContext.Provider value={contextValue}>
      {children}
    </CourseSectionsContext.Provider>
  );
};

export default CourseSectionsContext;
