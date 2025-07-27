import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function TypingText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  onComplete 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const startTyping = setTimeout(() => {
      setShowCursor(true);
      let currentIndex = 0;
      
      const typeNextChar = () => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
          
          if (currentIndex <= text.length) {
            setTimeout(typeNextChar, speed);
          } else {
            setIsComplete(true);
            setShowCursor(false);
            onComplete?.();
          }
        }
      };
      
      typeNextChar();
    }, delay);

    return () => clearTimeout(startTyping);
  }, [isInView, text, speed, delay, onComplete]);

  return (
    <span ref={ref} className="text-[#4ade80]">
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-pulse text-green-400">|</span>
      )}
    </span>
  );
}