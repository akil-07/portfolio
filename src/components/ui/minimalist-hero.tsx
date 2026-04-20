import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
  infoPoints?: { text: string; x: string; y: string }[];
}

// Helper component for navigation links
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium tracking-widest text-foreground/60 transition-colors hover:text-foreground"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
  infoPoints = [
    { text: "Full-Stack Developer", x: "15%", y: "25%" },
    { text: "GenAI Specialist", x: "80%", y: "35%" },
    { text: "UI/UX Designer", x: "20%", y: "70%" },
    { text: "System Architect", x: "75%", y: "75%" },
  ],
}: MinimalistHeroProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        'relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-8 font-sans md:p-12',
        className
      )}
    >
      {/* Header */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-bold tracking-wider"
        >
          {logoText}
        </motion.div>
        <div className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-6 bg-foreground"></span>
          <span className="block h-0.5 w-5 bg-foreground"></span>
        </motion.button>
      </header>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center md:grid-cols-3">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Read More
          </a>
        </motion.div>

        {/* Center Image with Circle */}
        <div 
          className="relative order-1 md:order-2 flex justify-center items-center h-full cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="absolute z-0 h-[350px] w-[350px] rounded-full bg-[#EBB000] md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]"
            ></motion.div>
            
            <AnimatePresence>
              {isHovered && infoPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, x: "-50%", y: "-50%" }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { delay: index * 0.1, duration: 0.4, ease: "easeOut" }
                  }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  style={{ 
                    left: point.x, 
                    top: point.y,
                    position: 'absolute',
                    zIndex: 20
                  }}
                  className="hidden md:block"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                    className="relative"
                  >
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-xl text-xs font-bold tracking-wider text-white whitespace-nowrap overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] isolate">
                      {point.text}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 backdrop-blur-md border-r border-b border-white/20 rotate-45" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="relative z-10 h-auto w-[28rem] object-contain drop-shadow-2xl md:w-[38rem] lg:w-[50rem] transition-transform duration-500 group-hover:scale-[1.02]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `https://placehold.co/400x600/eab308/ffffff?text=Image+Not+Found`;
                }}
            />
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-7xl font-extrabold text-foreground md:text-8xl lg:text-9xl">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="flex items-center space-x-4"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-sm font-medium text-foreground/80"
        >
          {locationText}
        </motion.div>
      </footer>
    </div>
  );
};
