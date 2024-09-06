import { MouseEvent } from 'react';
import Button from '../Button';

function Keyboard() {
  const keys = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

  const keyType = (key: string) => (Number(key) >= 0 ? 'default' : 'operation');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) =>
    console.log(e.currentTarget.innerText);

  return (
    <div>
      {keys.map((k, index) => (
        <Button onClick={handleClick} type={keyType(k)} key={k + index}>
          {k}
        </Button>
      ))}
    </div>
  );
}

export default Keyboard;
