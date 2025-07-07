import React from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  className?: 'header' | 'home' | 'search' | 'show' | 'send' | 'favourites';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset'; 
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick, type = 'button' }) => {
  return (
    <button
      className={clsx(s.button, className && s[className])}
      onClick={onClick}
      type={type} 
    >
      {children}
    </button>
  );
};

export default Button;
