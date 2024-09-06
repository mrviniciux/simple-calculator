import Display from '../Display';
import Keyboard from '../Keyboard';
import './Calc.css';

type CalcProps = {
  type: 'simple' | 'cientific';
};

function Calc({ type }: CalcProps) {
  return (
    type && (
      <div className="calc-main">
        <Display />
        <Keyboard />
      </div>
    )
  );
}

export default Calc;
