import { OperationsType } from '@/utils/types';
import React, { createContext, useState, ReactNode, useContext } from 'react';

type CalcContextType = {
  currentDisplay: string;
  appendNumber: (typedNumber: string) => void;
  clearDisplay: () => void;
  setOperation: (operation: OperationsType) => void;
};

const CalcContext = createContext<CalcContextType | undefined>(undefined);

type CalcProviderProps = {
  children: ReactNode;
};

export const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [pastOperations, setPastOperations] = useState<string[]>([]);
  const [currentDisplay, setCurrentDisplay] = useState<string>('');
  const [operation, setOperation] = useState<string>('');

  const clearDisplay = () => setCurrentDisplay('');

  const appendNumber = (typedNumber: string) => {
    if (!operation) {
      setCurrentDisplay(`${currentDisplay}${typedNumber}`);
    }

    if (operation && currentDisplay !== '') {
      setPastOperations([...pastOperations, currentDisplay]);
      clearDisplay();
    }

    console.log('operation', operation);
    console.log('past operations', pastOperations);
  };

  return (
    <CalcContext.Provider
      value={{ currentDisplay, appendNumber, setOperation, clearDisplay }}
    >
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
