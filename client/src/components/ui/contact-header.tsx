import { useEffect, useState } from 'react';

interface ContactHeaderProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '@', '#', '$', '%', '&', '*', '!', '?', '+', '=', '<', '>', '~', '`', '^', '|', '[', ']', '{', '}'];

export default function ContactHeader({ text, className = '' }: ContactHeaderProps) {
  const originalText = "LET'S CONNECT";
  const [displayText, setDisplayText] = useState(originalText);
  
  useEffect(() => {
    const interval = setInterval(() => {
      // More frequent glitching with 3-4 positions (avoiding space and apostrophe)
      const numGlitch = Math.random() < 0.4 ? 3 : 4;
      const glitchPositions: number[] = [];
      
      for (let i = 0; i < numGlitch; i++) {
        let pos = Math.floor(Math.random() * originalText.length);
        // Skip space (position 5) and apostrophe (position 3)
        while (pos === 5 || pos === 3) {
          pos = Math.floor(Math.random() * originalText.length);
        }
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
      
      // Restore original after 85ms (faster)
      setTimeout(() => setDisplayText(originalText), 85);
    }, 1100 + Math.random() * 1400); // Much more frequent: 1.1-2.5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-center ${className}`}>
      <h1 className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight tracking-wider glitch-text" data-text={displayText} style={{fontFamily: 'Orbitron, monospace'}}>
        {displayText}
      </h1>
    </div>
  );
}