import { useCalc } from '@/context/Calc.provider';
import Display from '../Display';
import Keyboard from '../Keyboard';
import './Calc.css';

type CalcProps = {
  type: 'simple' | 'cientific';
};

function Calc({ type }: CalcProps) {
  const { currentDisplay } = useCalc();
  return (
    type && (
      <div className="calc-main">
        <Display data={currentDisplay} />
        <Keyboard />
      </div>
    )
  );
}

export default Calc;
