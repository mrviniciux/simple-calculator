import { MouseEvent } from 'react';
import Button from '../Button';
import { useCalc } from '@/context/Calc.provider';
import { AUX_ACTIONS, NUMBER_KEYS, OPERATION_KEYS } from '@/utils/consts';
import styles from './Keyboard.module.css';
import { OperationsType } from '@/utils/types';

function Keyboard() {
  const {
    appendNumber,
    clearDisplay,
    setOperation,
    plusMinusInvertion,
    toPercent,
  } = useCalc();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
    <div className={styles['keyboard-container']}>
      <div className={styles['keyboard-numbers-container']}>
        {AUX_ACTIONS.map((a, index) => (
          <Button
            key={a + index}
            onClick={(event) => handleClick(event)}
            type={'aux'}
          >
            {a}
          </Button>
        ))}
        {NUMBER_KEYS.map((k, index) => (
          <Button
            key={k + index}
            onClick={(event) => handleClick(event)}
            type={'default'}
          >
            {k}
          </Button>
        ))}
      </div>
      <div className={styles['keyboard-operations-container']}>
        {OPERATION_KEYS.map((op, index) => (
          <Button
            key={op + index}
            onClick={(event) => handleClick(event)}
            type={'operation'}
          >
            {op}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Keyboard;
