import './Display.css';

function Display({ data }: { data: string }) {
  return <div className="calc-display">{data}</div>;
}

export default Display;
