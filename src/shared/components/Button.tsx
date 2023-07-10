import React, { MouseEventHandler, ReactNode } from 'react';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  type?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className, disabled, type = 'button' }) => {
  return (
    <button disabled={disabled} className={className + ' rounded-md text-light text-lg bg-primary-gradient px-16 py-3.5'} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
