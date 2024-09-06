import { useCalc } from '@/context/Calc.provider';
import styles from './Display.module.css';

function Display() {
  const { currentDisplay } = useCalc();
  return <div className={styles['calc-display']}>{currentDisplay}</div>;
}

export default Display;
