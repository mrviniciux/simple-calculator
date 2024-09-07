import styles from './Display.module.css';

function Display({ currentDisplay }: { currentDisplay: string }) {
  return (
    <div data-testid="display" className={styles['calc-display']}>
      {currentDisplay}
    </div>
  );
}

export default Display;
