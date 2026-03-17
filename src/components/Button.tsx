import React from 'react';
import { SUPPORT_LINK } from '../utils/constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick 
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer';
  
  const variants = {
    primary: 'bg-green-600 text-white hover:bg-green-700 shadow-lg',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = SUPPORT_LINK;
    }
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;