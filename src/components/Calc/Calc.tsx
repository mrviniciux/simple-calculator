import Display from '../Display';
import Keyboard from '../Keyboard';
import styles from './Calc.module.css';

type CalcProps = {
  type: 'simple' | 'cientific';
};

function Calc({ type }: CalcProps) {
  return (
    type && (
      <div className={styles['calc-main']}>
        <Display />
        <Keyboard />
      </div>
    )
  );
}

export default Calc;
