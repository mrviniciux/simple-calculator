import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';

type CalcContextType = {
  currentDisplay: string;
  setCurrentDisplay: Dispatch<SetStateAction<string>>;
};

const CalcContext = createContext<CalcContextType | undefined>(undefined);

type CalcProviderProps = {
  children: ReactNode;
};

export const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [currentDisplay, setCurrentDisplay] = useState<string>('');

  return (
    <CalcContext.Provider value={{ currentDisplay, setCurrentDisplay }}>
      {children}
    </CalcContext.Provider>
  );
};

export const useCalc = () => {
  const context = useContext(CalcContext);
  if (!context) {
    throw new Error('useCalc deve ser usado dentro de um CalcProvider');
  }
  return context;
};
