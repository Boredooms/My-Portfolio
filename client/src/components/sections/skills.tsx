import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal } from "lucide-react";
import TypingText from "@/components/ui/typing-text";
import SkillsHeader from "@/components/ui/skills-header";



export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Design Software",
      skills: [
        { name: "Figma", level: 92 },
        { name: "DaVinci Resolve", level: 88 },
        { name: "UI/UX Design", level: 95 },
        { name: "Typography", level: 90 },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Responsive Design", level: 92 },
      ]
    },
    {
      title: "Creative & Leadership",
      skills: [
        { name: "Branding & Logo Design", level: 85 },
        { name: "Concept Development", level: 90 },
        { name: "Team Collaboration", level: 95 },
        { name: "Project Management", level: 88 },
      ]
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
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
                  text="cat ~/skills/expertise.json"
                  speed={80}
                  delay={500}
                />
              </div>
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <TypingText 
                text="Parsing technical skills and proficiency levels..."
                speed={40}
                delay={2200}
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="mb-6"
          >
            <SkillsHeader text="SKILLS" />
          </motion.div>
        </motion.div>

        {/* Skills Content - Appears AFTER header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 5.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 lg:gap-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 6 + categoryIndex * 0.1,
                ease: "easeOut" 
              }}
              className="bg-black/90 border border-green-400/30 rounded-lg p-4 lg:p-6 space-y-4 lg:space-y-6 font-mono shadow-[0_0_20px_rgba(34,197,94,0.1)]"
            >
              {/* Terminal Command Header */}
              <div className="text-green-400 font-mono text-xs mb-2 overflow-hidden break-all">
                <TypingText 
                  text={`$ ls ~/${category.title.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '')}/`}
                  speed={60}
                  delay={6000 + categoryIndex * 50}
                />
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-green-400 mb-4 lg:mb-6 tracking-tight font-mono">
                // {category.title}
              </h3>
              
              <div className="space-y-4 lg:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 7 + categoryIndex * 0.3 + skillIndex * 0.1,
                      ease: "easeOut" 
                    }}
                    className="space-y-2 lg:space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium font-mono text-sm lg:text-base truncate pr-2">
                        {skill.name}
                      </span>
                      <span className="text-green-400 text-xs lg:text-sm font-mono font-semibold flex-shrink-0">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm shadow-green-400/20"
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: "0%" }}
                        transition={{ 
                          duration: 1.2, 
                          delay: 7.5 + categoryIndex * 0.3 + skillIndex * 0.1,
                          ease: "easeOut" 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}