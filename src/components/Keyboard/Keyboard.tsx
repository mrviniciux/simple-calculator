import { MouseEvent } from 'react';
import Button from '../Button';
import { useCalc } from '@/context/Calc.provider';
import { AUX_ACTIONS, NUMBER_KEYS, OPERATION_KEYS } from '@/utils/consts';
import './Keyboard.css';

function Keyboard() {
  const { appendNumber, clearDisplay } = useCalc();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (Number(e.currentTarget.innerText) >= 0) {
      return appendNumber(e.currentTarget.innerText);
    }

    switch (e.currentTarget.innerText) {
      case 'C':
        clearDisplay();
        break;
      default:
        break;
    }
  };

  return (
    <div className="keyboard-container">
      <div className="keyboard-numbers-container">
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
      <div className="keyboard-operations-container">
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
