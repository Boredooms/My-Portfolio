import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface TypedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function TypedSection({ 
  children, 
  className = '', 
  delay = 0,
  speed = 30 
}: TypedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isTyping ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface TypedTextProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  prefix?: string;
}

export function TypedText({ 
  text, 
  className = '', 
  speed = 50, 
  delay = 0,
  prefix = ''
}: TypedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, started]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div ref={ref} className={`font-mono ${className}`}>
      <span className="text-green-400">{prefix}</span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-green-400`}>
        ▋
      </span>
    </div>
  );
}