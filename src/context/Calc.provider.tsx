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
  const [numberToCalc, setNumberToCalc] = useState<string>('');
  const [currentDisplay, setCurrentDisplay] = useState<string>('');
  const [op, setOp] = useState<string>('');
  const [shouldOverride, setShouldOverride] = useState<boolean>(false);

  const clearDisplay = () => {
    setCurrentDisplay('');
    setNumberToCalc('');
  };

  const handleCalcFrom = (num1: string, num2: string) => {
    switch (op) {
      case '+':
        return (Number(num2) + Number(num1)).toString();
      case '-':
        return (Number(num2) - Number(num1)).toString();
      case 'x':
        return (Number(num2) * Number(num1)).toString();
      case '/':
        return (Number(num2) / Number(num1)).toString();
      default:
        return currentDisplay;
    }
  };

  const setOperation = (symbol: OperationsType) => {
    setOp(symbol);
    setPastOperations([...pastOperations, currentDisplay, symbol]);

    if (numberToCalc) {
      const result = handleCalcFrom(currentDisplay, numberToCalc);
      setCurrentDisplay(result);
      setNumberToCalc('');
    }

    setShouldOverride(true);
  };

  const appendNumber = (typedNumber: string) => {
    if (shouldOverride) {
      setNumberToCalc(currentDisplay);
      setCurrentDisplay(`${typedNumber}`);
      setShouldOverride(false);
      return;
    }
    return setCurrentDisplay(`${currentDisplay}${typedNumber}`);
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
