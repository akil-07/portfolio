import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { RiGithubFill, RiMailFill, RiLinkedinFill, RiPhoneFill } from "@remixicon/react";

const socialPlatforms = [
  { name: "Mail", icon: RiMailFill, label: "Send an Email", href: "mailto:akilsudhagar7@gmail.com" },
  { name: "LinkedIn", icon: RiLinkedinFill, label: "Visit LinkedIn", href: "https://www.linkedin.com/in/akil-sudhagar-75629b36b/" },
  { name: "GitHub", icon: RiGithubFill, label: "Visit GitHub", href: "https://github.com/akil-07" },
  { name: "Phone", icon: RiPhoneFill, label: "Call Me", href: "tel:6374825608" },
];

function SocialButton({ name, icon: Icon, label, href }: typeof socialPlatforms[0]) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button variant="outline" aria-label={label} size="icon" className="relative z-10" asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Icon size={16} aria-hidden="true" />
        </a>
      </Button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full mb-3 z-20 pointer-events-none"
          >
            <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-xl text-[10px] font-bold tracking-widest text-white uppercase whitespace-nowrap overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] isolate">
              {name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/10 backdrop-blur-md border-r border-b border-white/20 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SocialLogin() {
  return (
    <div className="inline-flex flex-wrap gap-4">
      {socialPlatforms.map((platform) => (
        <SocialButton key={platform.name} {...platform} />
      ))}
    </div>
  );
}
