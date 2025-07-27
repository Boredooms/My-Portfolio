import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const createElements = () => {
      const newElements: FloatingElement[] = [];
      for (let i = 0; i < 15; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 20 + 10
        });
      }
      setElements(newElements);
    };

    createElements();
    window.addEventListener('resize', createElements);

    return () => window.removeEventListener('resize', createElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute bg-green-400 rounded-full"
          style={{
            width: element.size,
            height: element.size,
            opacity: element.opacity,
          }}
          animate={{
            x: [element.x, element.x + Math.random() * 200 - 100],
            y: [element.y, element.y + Math.random() * 200 - 100],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
}