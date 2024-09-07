import { OPERATION_KEYS } from '@/utils/consts';
import Display from '../Display';
import Keyboard from '../Keyboard';
import styles from './Calc.module.css';
import { useCalc } from '@/context/Calc.provider';
import { OperationsType } from '@/utils/types';
import { MouseEvent } from 'react';

type CalcProps = {
  type: 'simple' | 'cientific';
};

function Calc({ type }: CalcProps) {
  const {
    currentDisplay,
    appendNumber,
    clearDisplay,
    setOperation,
    plusMinusInvertion,
    toPercent,
  } = useCalc();

  const keyPressHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (
      Number(e.currentTarget.innerText) >= 0 ||
      e.currentTarget.innerText === '.'
    ) {
      return appendNumber(e.currentTarget.innerText);
    }

    if (e.currentTarget.innerText === 'C') clearDisplay();
    if (e.currentTarget.innerText === '±') plusMinusInvertion();
    if (e.currentTarget.innerText === '%') toPercent();

    if (OPERATION_KEYS.includes(e.currentTarget.innerText)) {
      setOperation(e.currentTarget.innerText as OperationsType);
    }
  };

  return (
    type && (
      <div className={styles['calc-main']}>
        <Display currentDisplay={currentDisplay} />
        <Keyboard keyPressHandler={keyPressHandler} />
      </div>
    )
  );
}

export default Calc;
