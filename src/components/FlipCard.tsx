import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  BarChart3, 
  Database, 
  Calculator, 
  TrendingUp, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  RotateCw 
} from 'lucide-react';
import { ToolkitItem } from '../data/content';

interface FlipCardProps {
  item: ToolkitItem;
}

const iconMap: Record<string, React.ElementType> = {
  FileSpreadsheet,
  BarChart3,
  Database,
  Calculator,
  TrendingUp,
  FileText,
  ShieldCheck,
  Sparkles,
};

export const FlipCard: React.FC<FlipCardProps> = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const IconComponent = iconMap[item.iconName] || Calculator;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`${item.name}. ${isFlipped ? item.description : 'Press Enter or Space to flip for details.'}`}
      aria-expanded={isFlipped}
      onClick={() => setIsFlipped(!isFlipped)}
      onKeyDown={handleKeyDown}
      className="group perspective-[1000px] h-60 w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-teal focus-visible:ring-offset-2 rounded-2xl select-none"
    >
      <div
        className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-2xl shadow-soft group-hover:[transform:rotateY(180deg)] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 w-full h-full rounded-2xl bg-white dark:bg-darkbg-card border border-cream-200 dark:border-darkbg-border p-6 flex flex-col justify-between [backface-visibility:hidden]">
          <div className="flex items-start justify-between">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm"
              style={{ backgroundColor: item.color }}
            >
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-cream-100 dark:bg-slate-800 text-ink-muted dark:text-slate-300">
              {item.category}
            </span>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink-navy dark:text-white mb-1">
              {item.name}
            </h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">
              Core capability
            </p>
          </div>

          <div className="flex items-center text-xs font-semibold text-accent-teal dark:text-teal-400 pt-3 border-t border-cream-100 dark:border-slate-800/80">
            <RotateCw className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:rotate-180 duration-500" />
            <span>Tap to flip</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between text-white [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-soft"
          style={{ 
            backgroundColor: item.color === '#14213D' ? '#1E293B' : item.color,
            backgroundImage: 'radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 70%)'
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/20">
              <span className="font-heading font-bold text-sm tracking-wide">
                {item.name}
              </span>
              <IconComponent className="w-4 h-4 opacity-75" />
            </div>
            <p className="text-sm leading-relaxed text-white/95 font-normal">
              {item.description}
            </p>
          </div>

          <div className="text-[11px] text-white/75 font-medium flex items-center">
            <RotateCw className="w-3 h-3 mr-1" />
            <span>Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
};
