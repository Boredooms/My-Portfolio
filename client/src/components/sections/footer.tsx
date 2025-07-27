import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 py-16 px-6 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Devargho Chakraborty
            </h3>
            <p className="text-gray-400">
              Frontend Designer & Developer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>and React</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 bg-green-400 text-gray-950 px-4 py-2 rounded-lg hover:bg-green-300 transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 pt-8 border-t border-gray-800/50 text-center text-gray-500"
        >
          <p>© {currentYear} Devargho Chakraborty. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}