import styles from './Display.module.css';

function Display({ currentDisplay }: { currentDisplay: string }) {
  return <div className={styles['calc-display']}>{currentDisplay}</div>;
}

export default Display;
