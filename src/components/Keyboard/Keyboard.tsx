import { MouseEvent } from 'react';
import Button from '../Button';

import { AUX_ACTIONS, NUMBER_KEYS, OPERATION_KEYS } from '@/utils/consts';
import styles from './Keyboard.module.css';

type KeyboardProps = {
  keyPressHandler: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Keyboard({ keyPressHandler }: KeyboardProps) {
  return (
    <div className={styles['keyboard-container']}>
      <div className={styles['keyboard-numbers-container']}>
        {AUX_ACTIONS.map((a, index) => (
          <Button
            key={a + index}
            onClick={(event) => keyPressHandler(event)}
            type={'aux'}
          >
            {a}
          </Button>
        ))}
        {NUMBER_KEYS.map((k, index) => (
          <Button
            key={k + index}
            onClick={(event) => keyPressHandler(event)}
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
            onClick={(event) => keyPressHandler(event)}
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
