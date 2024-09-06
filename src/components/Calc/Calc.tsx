import { useCalc } from '@/context/Calc.provider';
import Display from '../Display';
import Keyboard from '../Keyboard';

type CalcProps = {
  type: 'simple' | 'cientific';
};

function Calc({ type }: CalcProps) {
  const { currentDisplay } = useCalc();
  return (
    type && (
      <div>
        <Display data={currentDisplay} />
        <Keyboard />
      </div>
    )
  );
}

export default Calc;
