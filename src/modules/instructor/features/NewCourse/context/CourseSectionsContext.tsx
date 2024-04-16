import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';

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

  const [Instructors, setInstructors] = useState<any[] | null>([
    { username: 'John Doe', pictureLink: '', job: 'UI/Ux Designer' },
  ]);
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
