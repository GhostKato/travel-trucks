import React from 'react';
import s from './Button.module.css';
import clsx from 'clsx';

type ButtonProps = {
  className?: 'default' | 'search';
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ className = 'default', children }) => {
  return (
    <button className={clsx(s.button, s[className])}>
      {children}
    </button>
  );
};

export default Button;
