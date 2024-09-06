import { useCalc } from '@/context/Calc.provider';
import './Display.css';

function Display() {
  const { currentDisplay } = useCalc();
  return <div className="calc-display">{currentDisplay}</div>;
}

export default Display;
