import React from 'react';

export function Card({ children, className = '', hover = true, ...props }) {
  const baseStyles = 'bg-[#112236] border border-[#1E3A5F] rounded-2xl overflow-hidden';
  const hoverStyles = hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F59E0B]/5' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
}
