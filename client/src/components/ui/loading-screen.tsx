import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState("Loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const phases = [
      "Loading",
      "Initializing Portfolio",
      "Loading Assets",
      "Preparing Experience"
    ];

    let currentPhase = 0;
    let progressInterval: NodeJS.Timeout;
    let textInterval: NodeJS.Timeout;

    // Progress animation
    progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 100);

    // Text cycling
    textInterval = setInterval(() => {
      currentPhase = (currentPhase + 1) % phases.length;
      setLoadingText(phases[currentPhase]);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gray-950 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-2xl font-light tracking-wider text-white">
                Devargho Chakraborty
              </h1>
              
              <div className="w-64 h-[1px] bg-gray-800 mx-auto relative overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-green-500"
                  initial={{ width: "0%" }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
              
              <motion.p
                className="text-sm text-gray-400 font-light tracking-wide min-h-[20px]"
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {loadingText}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
