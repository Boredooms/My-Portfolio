import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Code, ExternalLink } from "lucide-react";
import ScrollTypedText from "@/components/ui/scroll-typed-text";
import HeroGlitchText from "@/components/ui/hero-glitch-text";
import MatrixRain from "@/components/ui/matrix-rain";
import FloatingElements from "@/components/ui/floating-elements";

export default function Hero() {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [showCommands, setShowCommands] = useState(false);

  const commands = [
    "whoami",
    "cat about.txt", 
    "ls skills/",
    "git status",
  ];

  const responses = [
    "devargho_chakraborty@terminal:~$ Frontend Designer & Developer",
    "Currently pursuing Computer Science at Techno India University",
    "UI/UX_Design  React  TypeScript  Figma  DaVinci_Resolve",
    "On branch: creative-innovation | All systems operational",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowCommands(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <MatrixRain />
      <FloatingElements />
      
      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          className="bg-black/90 backdrop-blur-sm border border-green-400/30 rounded-lg shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-green-400/20">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <Terminal className="w-4 h-4" />
                <span className="text-sm font-mono">devargho@creative-terminal</span>
              </div>
            </div>
            <div className="text-green-400/60 text-xs font-mono">
              {new Date().toLocaleTimeString()}
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-8 space-y-6 min-h-[400px]">
            {/* Initialization Sequence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-2"
            >
              <ScrollTypedText
                text=">>> Initializing creative terminal..."
                speed={30}
                className="text-green-400 font-mono text-sm"
              />
              <ScrollTypedText
                text=">>> Loading developer profile..."
                speed={30}
                delay={1000}
                className="text-green-400 font-mono text-sm"
              />
              <ScrollTypedText
                text=">>> Connection established."
                speed={30}
                delay={2000}
                className="text-green-400 font-mono text-sm"
              />
            </motion.div>

            {/* Main Name Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.8 }}
              className="text-center space-y-4"
            >
              <div className="text-green-400 font-mono text-sm mb-2">
                $ echo $DEVELOPER_NAME
              </div>
              <div className="space-y-2">
                <HeroGlitchText text="DEVARGHO" className="text-green-400 text-5xl md:text-7xl font-bold tracking-wider" />
                <HeroGlitchText text="CHAKRABORTY" className="text-white text-5xl md:text-7xl font-bold tracking-wider" />
              </div>
              <div className="text-xl md:text-2xl text-green-400 font-mono mt-4">
                Frontend Designer & Developer
              </div>
            </motion.div>

            {showCommands && (
              <motion.div
                className="space-y-3 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3 }}
              >
                {commands.slice(0, currentCommand).map((cmd, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-green-400 font-mono">
                      <span className="text-green-500">$</span> {cmd}
                    </div>
                    <div className="text-gray-300 font-mono text-sm pl-4">
                      {responses[index]}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4 }}
            >
              <button
                onClick={scrollToNext}
                className="group bg-green-400 text-black px-6 py-3 rounded-lg font-mono font-medium hover:bg-green-300 transition-all duration-300 flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                ./view_projects.sh
                <span className="opacity-60 group-hover:opacity-100">↗</span>
              </button>
              
              <a
                href="https://github.com/Boredooms?tab=projects"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-400 text-green-400 px-6 py-3 rounded-lg font-mono font-medium hover:bg-green-400/10 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                github --projects
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Status */}
        <motion.div
          className="absolute -top-4 -right-4 bg-green-400/10 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 5, type: "spring" }}
        >
          <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            STATUS: ONLINE
          </div>
        </motion.div>
      </div>
    </section>
  );
}
