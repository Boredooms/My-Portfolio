import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Terminal, Award, Users, Lightbulb, Github, ExternalLink } from "lucide-react";
import TypingText from "@/components/ui/typing-text";
import AchievementsHeader from "@/components/ui/achievements-header";



export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hackathonProjects = [
    {
      title: "Educhain Platform",
      event: "Educhain Hackathon 2024",
      description: "Designed and developed a comprehensive educational platform with intuitive user interfaces and seamless user experience.",
      role: "Frontend Designer",
      responsibilities: ["Visual Design Creation", "UI/UX Implementation", "Revising and Editing"],
      tags: ["UI/UX", "Frontend", "Education"],
      icon: Award,
      status: "COMPLETED",
      year: "2024"
    },
    {
      title: "Auraflix Streaming",
      event: "Auraflix Hackathon 2024", 
      description: "Led a team to create an innovative streaming platform with modern design principles and enhanced user engagement features.",
      role: "Frontend Designer & Team Manager",
      responsibilities: ["Design Creation", "Team Collaboration", "Project Leadership"],
      tags: ["Streaming", "Team Lead", "React"],
      icon: Users,
      status: "COMPLETED",
      year: "2024"
    },
    {
      title: "AI Virtual Try-On",
      event: "Aignite Hackathon 2025",
      description: "Developed a cutting-edge generative AI solution for virtual try-on experiences with parameter-based customization.",
      role: "Frontend Designer & AI Integration",
      responsibilities: ["Website Design", "AI Integration", "Virtual Try-On Interface"],
      tags: ["AI/ML", "Computer Vision", "Innovation"],
      icon: Lightbulb,
      status: "COMPLETED",
      year: "2025"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 relative" ref={ref}>

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
                  text="ls ~/achievements/"
                  speed={80}
                  delay={500}
                />
              </div>
            </div>
            <div className="text-gray-300 font-mono">
              <TypingText 
                text="Displaying the hackathons participated and creative works..."
                speed={40}
                delay={1800}
              />
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="mb-6"
          >
            <AchievementsHeader text="ACHIEVEMENTS" />
          </motion.div>
        </motion.div>

        {/* Hackathon Projects Grid - Appears AFTER header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 5, duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 5.5 + index * 0.1 }}
              className="group relative"
            >
              {/* Terminal Window */}
              <div className="bg-black/90 border border-green-400/30 rounded-lg overflow-hidden hover:border-green-400/60 transition-all duration-300">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-green-400/20 bg-gray-900/50">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-green-400 font-mono">{project.title.toLowerCase().replace(/\s+/g, '_')}.sh</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <project.icon className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-mono">{project.status}</span>
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="p-6 space-y-4">
                  {/* Project Header */}
                  <div className="space-y-2">
                    <div className="text-green-400 text-xs font-mono"># {project.event}</div>
                    <h3 className="text-xl font-bold text-white font-mono">
                      {project.title}
                    </h3>
                    <div className="text-green-400 text-sm font-mono">
                      Role: {project.role}
                    </div>
                  </div>

                  {/* ASCII Art Divider */}
                  <div className="text-green-400/40 text-xs font-mono">
                    ════════════════════════════════
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-mono">
                    {project.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-1">
                    <div className="text-green-400 text-xs font-mono">$ cat responsibilities.txt</div>
                    {project.responsibilities.map((resp, idx) => (
                      <div key={idx} className="text-gray-400 text-xs font-mono pl-2">
                        → {resp}
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <div className="text-green-400 text-xs font-mono">$ ls technologies/</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-green-400/10 border border-green-400/30 text-green-400 text-xs font-mono rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="border-t border-green-400/20 pt-4 mt-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-gray-400">Year: {project.year}</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400">DEPLOYED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status */}
              <motion.div
                className="absolute -top-2 -right-2 bg-green-400/20 backdrop-blur-sm border border-green-400/40 rounded-full px-3 py-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
              >
                <span className="text-green-400 text-xs font-mono">#{index + 1}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/80 border border-green-400/30 rounded-lg p-8 inline-block">
            <div className="space-y-4">
              <div className="text-green-400 font-mono text-sm">
                <TypingText 
                  text="$ git remote get-url origin"
                  speed={50}
                  delay={1000}
                />
              </div>
              <div className="text-gray-300 font-mono text-xs">
                <TypingText 
                  text="https://github.com/Boredooms"
                  speed={40}
                  delay={2200}
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 3.5 }}
                className="flex gap-4 justify-center pt-4"
              >
                <motion.a
                  href="https://github.com/Boredooms"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 3.7 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-lg font-mono font-medium hover:bg-green-300 transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View GitHub
                </motion.a>
                <motion.a
                  href="https://github.com/Boredooms?tab=projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 3.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 border border-green-400 text-green-400 px-6 py-3 rounded-lg font-mono font-medium hover:bg-green-400/10 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  All Projects
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
