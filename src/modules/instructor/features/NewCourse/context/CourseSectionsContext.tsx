import React, { ReactNode, createContext, useContext, useState } from 'react';

interface CourseSectionsContextType {
  Sections: sectionType[] | null;
  setSections: React.Dispatch<React.SetStateAction<sectionType[] | null>>;
  Instructors: any[] | null;
  setInstructors: React.Dispatch<React.SetStateAction<any[] | null>>;
}

export interface sectionType {
  lessons: lessonType[] | null;
  name: string;
}
export interface lessonType {
  name: string;
  type: string;
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
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
};

export const CourseSectionsProvider = ({ children }: StepsProviderType) => {
  const [Sections, setSections] = useState<sectionType[] | null>([
    {
      name: '',
      lessons: [
        { name: 'lecture 1', type: '' },
        { name: 'lecture 2', type: '' },
      ],
    },
  ]);

  const [Instructors, setInstructors] = useState<any[] | null>([{ username:"John Doe", pictureLink: '', job: 'UI/Ux Designer' }])
    console.log(Instructors);

  const contextValue: CourseSectionsContextType = {
    Sections,
    setSections,
    Instructors,
    setInstructors,
  };

  return (
    <CourseSectionsContext.Provider value={contextValue}>
      {children}
    </CourseSectionsContext.Provider>
  );
};

export default CourseSectionsContext;
