import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// 1. 3D Gold Coin with metallic sheen and embossed symbol
export const GoldCoinSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="coinFace" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FEF08A" />
        <stop offset="45%" stopColor="#F59E0B" />
        <stop offset="85%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#B45309" />
      </radialGradient>
      <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF9C3" />
        <stop offset="40%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <filter id="coinShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#B45309" floodOpacity="0.35" />
      </filter>
    </defs>
    <g filter="url(#coinShadow)">
      {/* Outer Rim */}
      <circle cx="50" cy="50" r="42" fill="url(#coinRim)" stroke="#FDE68A" strokeWidth="2" />
      {/* Inner Recessed Face */}
      <circle cx="50" cy="50" r="35" fill="url(#coinFace)" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Subtle Ridge Dots */}
      <circle cx="50" cy="18" r="1.5" fill="#FEF08A" opacity="0.8" />
      <circle cx="50" cy="82" r="1.5" fill="#FEF08A" opacity="0.8" />
      <circle cx="18" cy="50" r="1.5" fill="#FEF08A" opacity="0.8" />
      <circle cx="82" cy="50" r="1.5" fill="#FEF08A" opacity="0.8" />
      {/* Embossed ₹ Symbol */}
      <text x="50" y="58" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="800" fill="#78350F" textAnchor="middle" opacity="0.85">₹</text>
      <text x="49" y="57" fontFamily="system-ui, sans-serif" fontSize="28" fontWeight="800" fill="#FEF08A" textAnchor="middle">₹</text>
    </g>
  </svg>
);

// 2. 3D Stacked Financial Growth Bars
export const StackedBarsSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 68 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="barTealTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2DD4BF" />
        <stop offset="100%" stopColor="#0F766E" />
      </linearGradient>
      <linearGradient id="barAmberTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="barCoralTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FDA4AF" />
        <stop offset="100%" stopColor="#F26B4E" />
      </linearGradient>
      <filter id="barShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#14213D" floodOpacity="0.2" />
      </filter>
    </defs>
    <g filter="url(#barShadow)">
      {/* Bar 1 (Short - Coral) */}
      <path d="M18 55 L30 48 L30 80 L18 87 Z" fill="#DC2626" />
      <path d="M30 48 L42 55 L42 87 L30 80 Z" fill="#EA580C" />
      <path d="M18 55 L30 48 L42 55 L30 62 Z" fill="url(#barCoralTop)" />

      {/* Bar 2 (Medium - Amber) */}
      <path d="M40 38 L52 31 L52 75 L40 82 Z" fill="#D97706" />
      <path d="M52 31 L64 38 L64 82 L52 75 Z" fill="#B45309" />
      <path d="M40 38 L52 31 L64 38 L52 45 Z" fill="url(#barAmberTop)" />

      {/* Bar 3 (Tall - Teal) */}
      <path d="M62 20 L74 13 L74 70 L62 77 Z" fill="#0D5F58" />
      <path d="M74 13 L86 20 L86 77 L74 70 Z" fill="#0A3C38" />
      <path d="M62 20 L74 13 L86 20 L74 27 Z" fill="url(#barTealTop)" />
    </g>
  </svg>
);

// 3. 3D Pie Wedge
export const PieWedgeSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 64 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pieTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FB7185" />
        <stop offset="50%" stopColor="#F26B4E" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <linearGradient id="pieSide" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#BE123C" />
        <stop offset="100%" stopColor="#881337" />
      </linearGradient>
      <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#881337" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#pieShadow)">
      {/* 3D Depth Sides */}
      <path d="M50 48 L80 62 L80 74 L50 60 Z" fill="url(#pieSide)" />
      <path d="M50 48 L28 62 L28 74 L50 60 Z" fill="#9F1239" />
      <path d="M80 74 C73 80, 42 82, 28 74 L28 62 C42 70, 73 68, 80 62 Z" fill="#4C0519" opacity="0.4" />
      {/* Wedge Top */}
      <path d="M50 38 L80 52 C70 66, 38 66, 28 52 Z" fill="url(#pieTop)" stroke="#FECDD3" strokeWidth="1" />
    </g>
  </svg>
);

// 4. 3D Isometric Cube
export const IsometricCubeSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#14B8A6" />
        <stop offset="100%" stopColor="#0F766E" />
      </linearGradient>
      <linearGradient id="cubeLeft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="cubeRight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0D5F58" />
        <stop offset="100%" stopColor="#042F2C" />
      </linearGradient>
      <filter id="cubeShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#cubeShadow)">
      {/* Top Face */}
      <path d="M50 20 L78 35 L50 50 L22 35 Z" fill="url(#cubeTop)" stroke="#5EEAD4" strokeWidth="0.8" />
      {/* Left Face */}
      <path d="M22 35 L50 50 L50 82 L22 67 Z" fill="url(#cubeLeft)" />
      {/* Right Face */}
      <path d="M50 50 L78 35 L78 67 L50 82 Z" fill="url(#cubeRight)" />
    </g>
  </svg>
);

// 5. 3D Sphere with specular glow
export const ShadedSphereSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 56 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="sphereGrad" cx="35%" cy="30%" r="65%">
        <stop offset="0%" stopColor="#A7F3D0" />
        <stop offset="25%" stopColor="#34D399" />
        <stop offset="65%" stopColor="#059669" />
        <stop offset="100%" stopColor="#064E3B" />
      </radialGradient>
      <filter id="sphereShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#064E3B" floodOpacity="0.3" />
      </filter>
    </defs>
    <g filter="url(#sphereShadow)">
      <circle cx="50" cy="50" r="38" fill="url(#sphereGrad)" />
      {/* Specular Highlight dot */}
      <ellipse cx="40" cy="36" rx="8" ry="4" transform="rotate(-30 40 36)" fill="#FFFFFF" opacity="0.6" />
    </g>
  </svg>
);

// Container with desktop mouse parallax and Framer Motion floating physics
export const FloatingShapesHero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize from -1 to 1 based on center of screen
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  // Compute parallax offsets
  const parallax = (factor: number) => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    return {
      x: mousePos.x * factor * 15,
      y: mousePos.y * factor * 15,
    };
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* 1. Gold Coin - top left floating */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [-6, 6, -6],
          rotate: [-3, 3, -3]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: `translate(${parallax(1.2).x}px, ${parallax(1.2).y}px)` }}
        className="absolute top-2 -left-3 scale-[0.65] opacity-40 sm:scale-90 sm:opacity-80 sm:top-20 sm:left-4 md:top-24 md:left-6 lg:scale-100 lg:opacity-90 lg:top-10 lg:left-[10%] drop-shadow-lg transition-all"
      >
        <GoldCoinSvg size={64} />
      </motion.div>

      {/* 2. Stacked Growth Bars - top right */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [8, -8, 8],
          rotate: [2, -2, 2]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ transform: `translate(${parallax(-1.0).x}px, ${parallax(-1.0).y}px)` }}
        className="absolute top-2 -right-3 scale-[0.65] opacity-40 sm:scale-90 sm:opacity-80 sm:top-20 sm:right-4 md:top-24 md:right-6 lg:scale-100 lg:opacity-90 lg:top-14 lg:right-[14%] drop-shadow-lg transition-all"
      >
        <StackedBarsSvg size={70} />
      </motion.div>

      {/* 3. 3D Isometric Cube - middle right near profile (desktop & tablet) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [-10, 10, -10],
          rotate: [-4, 4, -4]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ transform: `translate(${parallax(1.5).x}px, ${parallax(1.5).y}px)` }}
        className="hidden md:block absolute bottom-24 right-[5%] sm:right-[10%] opacity-95 drop-shadow-xl"
      >
        <IsometricCubeSvg size={62} />
      </motion.div>

      {/* 4. Pie Wedge - bottom left (desktop & tablet) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [7, -7, 7],
          rotate: [3, -3, 3]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        style={{ transform: `translate(${parallax(-1.3).x}px, ${parallax(-1.3).y}px)` }}
        className="hidden sm:block absolute bottom-16 left-[8%] sm:left-[15%] opacity-90 drop-shadow-lg"
      >
        <PieWedgeSvg size={64} />
      </motion.div>

      {/* 5. Shaded Sphere - center background drift (desktop & tablet) */}
      <motion.div
        animate={shouldReduceMotion ? {} : {
          y: [-5, 5, -5],
          scale: [0.96, 1.04, 0.96]
        }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        style={{ transform: `translate(${parallax(0.8).x}px, ${parallax(0.8).y}px)` }}
        className="hidden lg:block absolute top-[45%] left-[4%] sm:left-[2%] opacity-80 drop-shadow-md"
      >
        <ShadedSphereSvg size={54} />
      </motion.div>
    </div>
  );
};
