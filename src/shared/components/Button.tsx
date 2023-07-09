import React, { MouseEventHandler, ReactNode } from 'react';

const styles = {
    backgroundImage: "linear-gradient(5deg, #FFCC21, #FF963C)",
    fontSize: '18px',
    padding: '14px 64px',
}

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  type?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled, type = 'button' }) => {
  return (
    <button disabled={disabled} className={className + ' rounded-md text-white'} onClick={onClick} style={styles}>
      {children}
    </button>
  );
};

export default Button;
