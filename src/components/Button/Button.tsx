import React from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  className?: 'header' | 'home' | 'search' | 'show' | 'send';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={clsx(s.button, className && s[className])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
