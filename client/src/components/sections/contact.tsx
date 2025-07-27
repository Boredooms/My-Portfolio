import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Terminal } from "lucide-react";
import TypingText from "@/components/ui/typing-text";
import ContactHeader from "@/components/ui/contact-header";



export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "devarghochakraborty7@gmail.com",
      href: "mailto:devarghochakraborty7@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8336885355",
      href: "tel:+918336885355"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "devargho-chakraborty",
      href: "https://www.linkedin.com/in/devargho-chakraborty-1a9458354"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kolkata, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 relative" ref={ref}>
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
                  text="cat ~/contact/info.txt"
                  speed={80}
                  delay={500}
                />
              </div>
            </div>
            <div className="text-gray-300 text-sm font-mono">
              <TypingText 
                text="Establishing communication channels..."
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
            <ContactHeader text="LET'S CONNECT" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-mono"
          >
            <TypingText 
              text="Ready to bring your next project to life? Let's discuss how we can create something amazing together."
              speed={30}
              delay={4800}
            />
          </motion.div>
        </motion.div>

        {/* Contact Form and Info - Appears AFTER header */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 5, duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 5.5 }}
            className="space-y-8"
          >
            <div>
              <div className="text-green-400 font-mono text-sm mb-4">
                <TypingText 
                  text="$ cat ~/contact/info.txt"
                  speed={60}
                  delay={5800}
                />
              </div>
              <div className="text-3xl font-bold text-white mb-6 font-mono">
                <TypingText 
                  text="# Get In Touch"
                  speed={60}
                  delay={6200}
                />
              </div>
              <div className="text-lg text-gray-300 leading-relaxed mb-8 font-mono">
                <TypingText 
                  text="I'm always open to discussing new opportunities, creative projects, or just having a conversation about design and technology. Feel free to reach out through any of the channels below."
                  speed={25}
                  delay={7000}
                />
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 8.5 + index * 0.3 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 group"
                  target={info.label === "LinkedIn" ? "_blank" : undefined}
                  rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                >
                  <info.icon className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 10.5 }}
              className="pt-8"
            >
              <h4 className="text-xl font-semibold text-white mb-4">
                Available For
              </h4>
              <div className="flex flex-wrap gap-3">
                {["Freelance Projects", "Hackathons", "UI/UX Consulting", "Frontend Development"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-green-400/10 border border-green-400/30 text-green-400 text-sm rounded-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 12 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-green-400 text-gray-950 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-green-300 transition-all duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}