import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, Code } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: '~/', command: 'cd ~' },
    { id: 'about', label: 'about', command: 'cat about.md' },
    { id: 'skills', label: 'skills', command: 'ls skills/' },
    { id: 'projects', label: 'achievements', command: 'git log --oneline' },
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-green-400/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Terminal Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-2 bg-black/80 border border-green-400/30 rounded px-3 py-1">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm">devargho@terminal</span>
            </div>
          </motion.div>
          
          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-4 py-2 rounded font-mono text-sm transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-green-400/10 text-green-400 border border-green-400/30' 
                    : 'text-gray-400 hover:text-green-400 hover:bg-green-400/5'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                title={item.command}
              >
                {item.label}
                
                {/* Terminal cursor */}
                {activeSection === item.id && (
                  <motion.span
                    className="inline-block ml-1 text-green-400 animate-pulse"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▋
                  </motion.span>
                )}
              </motion.button>
            ))}
            
            {/* Execute Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="ml-4 flex items-center gap-2 bg-green-400 text-black px-4 py-2 rounded font-mono text-sm font-medium hover:bg-green-300 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-4 h-4" />
              ./contact
              <span className="opacity-60 group-hover:opacity-100">↗</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className="h-0.5 bg-green-400"></div>
              <div className="h-0.5 bg-green-400"></div>
              <div className="h-0.5 bg-green-400"></div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
