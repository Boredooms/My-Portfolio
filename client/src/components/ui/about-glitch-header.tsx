import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AboutGlitchHeaderProps {
  className?: string;
}

export default function AboutGlitchHeader({ className = '' }: AboutGlitchHeaderProps) {
  const originalText = "ABOUT";
  const [glitchText, setGlitchText] = useState(originalText);

  useEffect(() => {
    const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.92) {
        const glitched = originalText.split('').map(char => {
          if (Math.random() > 0.85) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join('');
        
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 120);
      }
    }, 150);

    return () => clearInterval(glitchInterval);
  }, [originalText]);

  return (
    <motion.span
      className={`relative inline-block font-black font-mono leading-none ${className}`}
      style={{
        textShadow: `
          0.05em 0 0 rgba(255, 0, 64, 0.8),
          -0.025em -0.05em 0 rgba(0, 255, 65, 0.8),
          0.025em 0.05em 0 rgba(0, 255, 255, 0.8)
        `
      }}
    >
      <span className="relative z-10">{glitchText}</span>
      <span 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          color: '#ff0040',
          textShadow: '2px 0 #ff0040',
          transform: 'translateX(-2px)',
          opacity: 0.6
        }}
      >
        {glitchText}
      </span>
      <span 
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          color: '#00ffff',
          textShadow: '-2px 0 #00ffff',
          transform: 'translateX(2px)',
          opacity: 0.6
        }}
      >
        {glitchText}
      </span>
    </motion.span>
  );
}