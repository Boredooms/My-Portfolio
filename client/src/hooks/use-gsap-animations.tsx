import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const elementsRef = useRef<Element[]>([]);

  useEffect(() => {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar) => {
      const width = bar.getAttribute('data-width') || '0%';
      gsap.fromTo(bar, 
        { width: '0%' },
        { 
          width: width,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            once: true
          }
        }
      );
    });

    // Animate project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return { elementsRef };
};
