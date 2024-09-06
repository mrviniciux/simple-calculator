import { MouseEvent } from 'react';
import './Button.css';

type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: string;
  type?: 'default' | 'operation' | 'aux';
};

function Button({ onClick, children, type = 'default' }: ButtonProps) {
  return (
    <button
      role="btn-calc"
      onClick={(event) => (onClick ? onClick(event) : undefined)}
      className={`btn-calc type-${type}`}
    >
      {children}
    </button>
  );
}

export default Button;
