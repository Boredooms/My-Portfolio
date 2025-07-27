import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Terminal, 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  Settings, 
  FileText,
  Github,
  LinkedIn,
  Twitter,
  ExternalLink,
  Zap
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const portfolioSections = [
  { 
    icon: Terminal, 
    label: "~/ Home", 
    command: "cd ~",
    description: "Navigate to root",
    id: "home" 
  },
  { 
    icon: User, 
    label: "about", 
    command: "cat about.md",
    description: "Display user info",
    id: "about" 
  },
  { 
    icon: Code, 
    label: "skills", 
    command: "ls skills/",
    description: "List capabilities",
    id: "skills" 
  },
  { 
    icon: Briefcase, 
    label: "projects", 
    command: "git log --oneline",
    description: "Show commit history",
    id: "projects" 
  },
  { 
    icon: Mail, 
    label: "contact", 
    command: "./contact",
    description: "Execute contact script",
    id: "contact" 
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/devargho", color: "text-white" },
  { icon: LinkedIn, label: "LinkedIn", url: "https://linkedin.com/in/devargho", color: "text-blue-400" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com/devargho", color: "text-blue-400" },
];

const quickActions = [
  { icon: FileText, label: "Resume", command: "cat resume.pdf" },
  { icon: Zap, label: "Skills Test", command: "npm test" },
  { icon: Settings, label: "Config", command: "vim .config" },
];

export default function SidebarPreview() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOnline, setIsOnline] = useState(true);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-950">
      <SidebarProvider defaultOpen={true}>
        <Sidebar variant="floating" className="border-green-400/20">
          <SidebarHeader className="bg-black/40 border-b border-green-400/20">
            <div className="flex items-center gap-3 px-2 py-3">
              <div className="flex items-center justify-center w-8 h-8 bg-green-400/10 border border-green-400/30 rounded">
                <Terminal className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-green-400 font-mono text-sm font-semibold">
                  devargho@portfolio
                </span>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
                  <span className="text-xs text-gray-400 font-mono">
                    {isOnline ? 'online' : 'offline'}
                  </span>
                </div>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent className="bg-black/20">
            {/* Main Navigation */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-green-400/70 font-mono text-xs">
                <Terminal className="w-3 h-3" />
                Terminal Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {portfolioSections.map((section) => (
                    <SidebarMenuItem key={section.id}>
                      <SidebarMenuButton
                        onClick={() => scrollToSection(section.id)}
                        isActive={activeSection === section.id}
                        className="group font-mono text-sm hover:bg-green-400/10 hover:text-green-400 data-[active=true]:bg-green-400/20 data-[active=true]:text-green-400 data-[active=true]:border-l-2 data-[active=true]:border-green-400"
                        title={section.command}
                      >
                        <section.icon className="w-4 h-4" />
                        <div className="flex flex-col items-start">
                          <span>{section.label}</span>
                          <span className="text-xs text-gray-500 group-hover:text-green-400/70">
                            {section.command}
                          </span>
                        </div>
                        {activeSection === section.id && (
                          <motion.span
                            className="ml-auto text-green-400 animate-pulse"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          >
                            ▋
                          </motion.span>
                        )}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Quick Actions */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-blue-400/70 font-mono text-xs">
                <Code className="w-3 h-3" />
                Quick Execute
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {quickActions.map((action, index) => (
                    <SidebarMenuItem key={index}>
                      <SidebarMenuButton 
                        className="font-mono text-sm hover:bg-blue-400/10 hover:text-blue-400"
                        title={action.command}
                      >
                        <action.icon className="w-4 h-4" />
                        <span>{action.label}</span>
                        <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Status */}
            <SidebarGroup>
              <SidebarGroupLabel className="text-purple-400/70 font-mono text-xs">
                System Status
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-2 py-1 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">CPU</span>
                    <Badge variant="outline" className="border-green-400/30 text-green-400">
                      45%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Memory</span>
                    <Badge variant="outline" className="border-blue-400/30 text-blue-400">
                      2.1GB
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400">Uptime</span>
                    <Badge variant="outline" className="border-purple-400/30 text-purple-400">
                      7d 14h
                    </Badge>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="bg-black/40 border-t border-green-400/20">
            {/* Social Links */}
            <div className="px-2 py-3 space-y-3">
              <div className="text-xs text-gray-400 font-mono">Social Links</div>
              <div className="flex justify-between">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`h-8 w-8 p-0 hover:bg-green-400/10 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
              
              {/* Terminal Footer */}
              <div className="bg-black/60 border border-green-400/20 rounded px-2 py-1">
                <div className="text-xs font-mono text-green-400 flex items-center gap-1">
                  <span className="text-gray-500">$</span>
                  <span className="animate-pulse">Ready for commands</span>
                  <span className="animate-pulse ml-auto">▋</span>
                </div>
              </div>
            </div>
          </SidebarFooter>
          
          <SidebarRail />
        </Sidebar>

        {/* Main Content Area */}
        <div className="flex-1 bg-gray-950 flex items-center justify-center">
          <div className="text-center space-y-4">
            <motion.div 
              className="text-6xl font-mono text-green-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              &gt;_
            </motion.div>
            <h1 className="text-2xl font-mono text-white">Sidebar Preview</h1>
            <p className="text-gray-400 font-mono max-w-md">
              This is a preview of how a cyberpunk-themed sidebar would look 
              for the Devargho Chakraborty portfolio website.
            </p>
            <div className="flex items-center justify-center gap-2">
              <SidebarTrigger className="bg-green-400/10 border border-green-400/30 text-green-400 hover:bg-green-400/20" />
              <span className="text-sm text-gray-400 font-mono">
                Click to toggle sidebar
              </span>
            </div>
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}