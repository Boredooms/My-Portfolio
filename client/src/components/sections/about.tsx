import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Palette, Award, Terminal } from "lucide-react";
import TypingText from "@/components/ui/typing-text";
import AboutHeader from "@/components/ui/about-header";


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor's Degree in Computer Science & Technology",
      detail: "Techno India University (2024-2028)"
    },
    {
      icon: Code,
      title: "Frontend Focus",
      description: "Specialized in modern frontend technologies",
      detail: "React, TypeScript, Modern CSS"
    },
    {
      icon: Palette,
      title: "Design Skills",
      description: "UI/UX Design, Typography, Branding",
      detail: "Figma, DaVinci Resolve"
    },
    {
      icon: Award,
      title: "Hackathons",
      description: "Multiple hackathon experiences",
      detail: "Educhain, Auraflix, Aignite (2024-2025)"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 relative" ref={ref}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-black/80 border border-green-400/30 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-green-400" />
              <div className="text-green-400 font-mono">
                <TypingText 
                  text="cat ~/about/devargho.md"
                  speed={80}
                  delay={500}
                />
              </div>
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <TypingText 
                text="Loading personal information and background..."
                speed={40}
                delay={2000}
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 4, duration: 0.8 }}
            className="mb-6"
          >
            <AboutHeader text="ABOUT" />
          </motion.div>
        </motion.div>

        {/* Terminal Window */}
        <div className="bg-black/90 border border-green-400/30 rounded-lg overflow-hidden mb-16 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-green-400/20 bg-gray-900/50">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-green-400 font-mono text-sm">~/about/profile.txt</span>
            </div>
            <div className="text-green-400/60 text-xs font-mono">PERSONAL_DATA.md</div>
          </div>

          {/* Terminal Content - Appears immediately with terminal */}
          <div className="p-8 space-y-6">
            <div className="space-y-6">
              {/* Terminal Command Header */}
              <div className="text-green-400 text-sm font-mono">
                <TypingText 
                  text="$ cat ~/about/devargho.md"
                  speed={60}
                  delay={0}
                />
              </div>

              {/* File Header */}
              <div className="text-white text-lg font-bold font-mono">
                <TypingText 
                  text="# Devargho Chakraborty - Frontend Designer & Developer"
                  speed={50}
                  delay={1000}
                />
              </div>

              {/* About Me Section */}
              <div className="space-y-4">
                <div className="text-green-400 text-base font-mono">
                  <TypingText 
                    text="## About Me"
                    speed={60}
                    delay={3000}
                  />
                </div>
                
                <div className="text-white font-mono text-sm leading-relaxed">
                  <TypingText 
                    text="Currently pursuing Bachelor's in Computer Science & Technology at Techno India University (2024-2028). Passionate frontend designer with expertise in modern web technologies and UI/UX design."
                    speed={30}
                    delay={3700}
                  />
                </div>
                
                <div className="text-white font-mono text-sm leading-relaxed">
                  <TypingText 
                    text="Specialized in React, TypeScript, Figma, and DaVinci Resolve. Multiple hackathon experiences including Educhain, Auraflix, and Aignite competitions."
                    speed={30}
                    delay={6500}
                  />
                </div>
              </div>

              {/* Command Divider */}
              <div className="text-green-400 text-sm font-mono py-2">
                <TypingText 
                  text="$ cat ~/about/skills.md"
                  speed={60}
                  delay={9000}
                />
              </div>

              {/* Core Technologies */}
              <div className="space-y-4">
                <div className="text-green-400 text-base font-mono">
                  <TypingText 
                    text="## Core Technologies"
                    speed={60}
                    delay={10000}
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {[
                    "React", "TypeScript", "Figma",
                    "UI/UX Design", "DaVinci Resolve", "Team Leadership"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 11 + index * 0.1 }}
                      className="px-4 py-2 bg-green-400/10 border border-green-400/30 text-green-400 text-sm font-mono rounded text-center hover:bg-green-400/20 transition-colors"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Terminal Prompt */}
              <div className="pt-4">
                <div className="text-green-400 font-mono text-sm flex items-center">
                  <TypingText 
                    text="$ "
                    speed={100}
                    delay={12000}
                  />
                  <motion.span 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: [0, 1, 0] } : {}}
                    transition={{ delay: 12.5, repeat: Infinity, duration: 1 }}
                    className="ml-1 text-green-400"
                  >
                    |
                  </motion.span>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 7 + index * 0.1 }}
              className="bg-black/80 border border-green-400/30 rounded-lg p-6 hover:border-green-400/60 transition-all duration-300 group"
            >
              <item.icon className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold text-white mb-2 font-mono">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm mb-2 section-text">
                {item.description}
              </p>
              <p className="text-green-400 text-xs font-mono">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
