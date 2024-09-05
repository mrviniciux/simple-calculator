import './Button.css';

type ButtonProps = {
  onClick?: () => void;
  text: string;
  type?: 'default' | 'operation';
};

function Button({ text, type = 'default' }: ButtonProps) {
  return <button className={`btn-calc type-${type}`}>{text}</button>;
}

export default Button;
