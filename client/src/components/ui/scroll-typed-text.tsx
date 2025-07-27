import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollTypedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

export default function ScrollTypedText({ 
  text, 
  speed = 50, 
  delay = 0, 
  className = "",
  onComplete 
}: ScrollTypedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasStarted) return;

    setHasStarted(true);
    const timer = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          setTimeout(typeChar, speed);
        } else {
          setIsTyping(false);
          onComplete?.();
        }
      };

      typeChar();
    }, delay);

    return () => clearTimeout(timer);
  }, [isInView, text, speed, delay, onComplete, hasStarted]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {isTyping && <span className="animate-pulse text-green-400">|</span>}
    </span>
  );
}