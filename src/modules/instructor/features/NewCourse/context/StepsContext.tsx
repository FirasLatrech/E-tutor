import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

interface StepsContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepsContext = createContext<StepsContextType | undefined>(undefined);

export interface StepsProviderType {
  children: ReactNode;
}

export const useSteps = (): StepsContextType => {
  const context = useContext(StepsContext);
  if (!context) {
    throw new Error('useSteps must be used within a StepsProvider');
  }
  return context;
};

export const StepsProvider = ({ children }: StepsProviderType) => {
  const [currentStep, setCurrentStep] = useState(0);

  const contextValue: StepsContextType = { currentStep, setCurrentStep };

  return (
    <StepsContext.Provider value={contextValue}>
      {children}
    </StepsContext.Provider>
  );
};

export default StepsContext;
