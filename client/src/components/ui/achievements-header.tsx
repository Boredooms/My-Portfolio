import { useEffect, useState } from 'react';

interface AchievementsHeaderProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '%', '&', '*', '!', '?', '+', '=', '<', '>', '~', '`', '^', '|', '[', ']', '{', '}'];

export default function AchievementsHeader({ text, className = '' }: AchievementsHeaderProps) {
  const originalText = 'ACHIEVEMENTS';
  const [displayText, setDisplayText] = useState(originalText);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // More aggressive glitching for longer word: 3-5 characters
      const numGlitch = Math.random() < 0.2 ? 3 : Math.random() < 0.5 ? 4 : 5;
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
      
      // Restore original after 90ms (faster)
      setTimeout(() => setDisplayText(originalText), 90);
    }, 1000 + Math.random() * 1500); // Much more frequent: 1-2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center ${className}`}>
      <h1 className="relative text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-tight tracking-wider glitch-text" data-text={displayText} style={{fontFamily: 'Orbitron, monospace'}}>
        {displayText}
      </h1>
    </div>
  );
}