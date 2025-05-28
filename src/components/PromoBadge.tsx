
import React from 'react';
import { Flame, Clock, Star, Zap } from 'lucide-react';

interface PromoBadgeProps {
  type: 'discount' | 'trending' | 'limited' | 'viral';
  text: string;
  percentage?: string;
  animated?: boolean;
}

const PromoBadge: React.FC<PromoBadgeProps> = ({ 
  type, 
  text, 
  percentage, 
  animated = true 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'discount':
        return <Zap className="w-4 h-4" />;
      case 'trending':
        return <Flame className="w-4 h-4" />;
      case 'limited':
        return <Clock className="w-4 h-4" />;
      case 'viral':
        return <Star className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'discount':
        return 'bg-gradient-to-r from-brand-orange to-red-500 text-white';
      case 'trending':
        return 'bg-gradient-to-r from-brand-yellow to-orange-400 text-brand-dark';
      case 'limited':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'viral':
        return 'bg-gradient-to-r from-brand-blue to-purple-500 text-white';
      default:
        return 'bg-gradient-to-r from-brand-blue to-brand-blue/80 text-white';
    }
  };

  return (
    <div className={`
      inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold
      ${getStyles()}
      ${animated ? 'animate-pulse-scale' : ''}
      shadow-lg transform hover:scale-105 transition-transform duration-200
    `}>
      {getIcon()}
      <span className="font-montserrat font-extrabold uppercase tracking-wide">
        {percentage && <span className="text-lg">{percentage}</span>}
        {text}
      </span>
    </div>
  );
};

export default PromoBadge;
