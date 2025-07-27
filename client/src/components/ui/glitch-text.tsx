import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  intensity?: number;
}

export default function GlitchText({ text, className = '', intensity = 3 }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const glitchChars = '!@#$%^&*(){}[]|\\:";\'<>?,./';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.95) {
        const glitched = text.split('').map(char => {
          if (Math.random() > 0.9) {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join('');
        
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(text), 100);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      style={{
        textShadow: `
          0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
          0.025em 0.05em 0 rgba(0, 0, 255, 0.75)
        `
      }}
    >
      {glitchText}
    </motion.span>
  );
}