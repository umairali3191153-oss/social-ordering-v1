
import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

const SynqueLogo: React.FC<LogoProps> = ({ className = "w-8 h-8", color = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      {/* Top Double Chevron Shape */}
      <path 
        d="M10 10L50 45L90 10V25L50 60L10 25V10Z" 
        fill={color} 
      />
      {/* Bottom Wave Shape */}
      <path 
        d="M10 70C10 70 30 55 50 70C70 85 90 70 90 70V90C90 90 70 105 50 90C30 75 10 90 10 90V70Z" 
        fill={color} 
      />
    </svg>
  );
};

export default SynqueLogo;
