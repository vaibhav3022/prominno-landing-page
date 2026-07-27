import React from 'react';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0D1B2A]';
  
  const variants = {
    primary: 'bg-[#F59E0B] text-[#0D1B2A] hover:bg-[#D97706] focus:ring-[#F59E0B] hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border-2 border-[#1E3A5F] text-[#F8FAFC] hover:border-[#F59E0B] hover:text-[#F59E0B] focus:ring-[#F59E0B]',
    ghost: 'text-[#F8FAFC] hover:text-[#F59E0B] hover:bg-[#1E3A5F]/50 focus:ring-[#1E3A5F]',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
