import React, { useState, useEffect } from 'react';

interface SimpleGlitchHeaderProps {
  text: string;
  className?: string;
}

const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

export default function SimpleGlitchHeader({ text, className = '' }: SimpleGlitchHeaderProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      // Random chance to glitch (20% chance every 150ms)
      if (Math.random() < 0.2) {
        let glitchedText = '';
        
        for (let i = 0; i < text.length; i++) {
          // 30% chance each letter gets glitched
          if (Math.random() < 0.3) {
            glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
          } else {
            glitchedText += text[i];
          }
        }
        
        setDisplayText(glitchedText);
        
        // Return to original text after 120ms
        setTimeout(() => {
          setDisplayText(text);
        }, 120);
      }
    }, 150);

    return () => clearInterval(glitchInterval);
  }, [text]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span className={`inherit ${className}`} style={{ 
        fontSize: 'inherit', 
        fontFamily: 'inherit', 
        fontWeight: '900', 
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        position: 'relative',
        zIndex: 1,
        textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(0, 255, 65, 0.9), 0 0 45px rgba(0, 255, 65, 0.7)',
        filter: 'brightness(1.2) contrast(1.1)'
      }}>
        {displayText}
      </span>
      <span className="glitch-layer-red" style={{ 
        position: 'absolute', 
        top: '0px', 
        left: '0px', 
        width: '100%', 
        height: '100%',
        color: 'rgba(255, 0, 64, 0.9)',
        textShadow: '0 0 10px rgba(255, 0, 64, 0.8), 0 0 20px rgba(255, 0, 64, 0.6)',
        filter: 'brightness(1.3)',
        fontSize: 'inherit', 
        fontFamily: 'inherit', 
        fontWeight: 'inherit', 
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        zIndex: -1,
        clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
        animation: 'coding-glitch-left 2.5s infinite',
        pointerEvents: 'none',
        display: 'inline-block'
      }}>
        {displayText}
      </span>
      <span className="glitch-layer-cyan" style={{ 
        position: 'absolute', 
        top: '0px', 
        left: '0px', 
        width: '100%', 
        height: '100%',
        color: 'rgba(0, 255, 255, 0.9)',
        textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6)',
        filter: 'brightness(1.3)',
        fontSize: 'inherit', 
        fontFamily: 'inherit', 
        fontWeight: 'inherit', 
        letterSpacing: 'inherit',
        lineHeight: 'inherit',
        zIndex: -2,
        clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
        animation: 'coding-glitch-right 2.7s infinite',
        pointerEvents: 'none',
        display: 'inline-block'
      }}>
        {displayText}
      </span>
    </span>
  );
}