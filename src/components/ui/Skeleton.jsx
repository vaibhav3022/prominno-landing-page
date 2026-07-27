import React, { useState } from 'react';

export function Skeleton({ className = '' }) {
  return (
    <div className={`animate-pulse bg-[#1E3A5F] ${className}`}></div>
  );
}

export function ImageWithSkeleton({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && <Skeleton className="absolute inset-0 w-full h-full" />}
      <img 
        src={src} 
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
