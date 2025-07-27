import { useEffect, useState } from 'react';

interface AboutHeaderProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '%', '&', '*', '!', '?', '+', '=', '<', '>', '~', '`', '^', '|', '[', ']', '{', '}'];

export default function AboutHeader({ text, className = '' }: AboutHeaderProps) {
  const originalText = 'ABOUT';
  const [displayText, setDisplayText] = useState(originalText);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // More frequent glitching with 2-3 characters
      const numGlitch = Math.random() < 0.3 ? 2 : Math.random() < 0.7 ? 3 : 4;
      const glitchPositions: number[] = [];
      
      for (let i = 0; i < numGlitch; i++) {
        let pos = Math.floor(Math.random() * originalText.length);
        if (!glitchPositions.includes(pos)) {
          glitchPositions.push(pos);
        }
      }
      
      // Create glitched version with random characters each time
      const glitchedText = originalText.split('').map((char, index) => {
        if (glitchPositions.includes(index)) {
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        }
        return char;
      }).join('');
      
      setDisplayText(glitchedText);
      
      // Restore original after 80ms (faster)
      setTimeout(() => setDisplayText(originalText), 80);
    }, 800 + Math.random() * 1200); // Much more frequent: 0.8-2 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center ${className}`}>
      <h1 className="relative text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-white leading-tight tracking-wider glitch-text" data-text={displayText} style={{fontFamily: 'Orbitron, monospace'}}>
        {displayText}
      </h1>
    </div>
  );
}