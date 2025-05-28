
import React from 'react';
import { ShoppingCart, Zap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40,
    xl: 60
  };

  if (variant === 'icon') {
    return (
      <div className="relative inline-flex items-center justify-center">
        <div className="relative">
          <ShoppingCart 
            size={iconSizes[size]} 
            className="text-brand-blue animate-pulse-scale"
          />
          <Zap 
            size={iconSizes[size] * 0.6} 
            className="absolute -top-1 -right-1 text-brand-yellow animate-bounce-in"
          />
        </div>
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <span className={`font-poppins font-black ${sizeClasses[size]} text-brand-blue`}>
        umapromonaweb
      </span>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="bg-gradient-to-br from-brand-blue to-brand-blue/80 p-2 rounded-xl shadow-lg">
          <ShoppingCart 
            size={iconSizes[size]} 
            className="text-white"
          />
          <Zap 
            size={iconSizes[size] * 0.5} 
            className="absolute -top-1 -right-1 text-brand-yellow animate-pulse"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`font-poppins font-black ${sizeClasses[size]} text-brand-blue leading-none`}>
          umapromo
        </span>
        <span className={`font-poppins font-black ${sizeClasses[size]} text-brand-orange leading-none`}>
          naweb
        </span>
      </div>
    </div>
  );
};

export default Logo;
