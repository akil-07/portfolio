import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Hostel Bites',
    category: 'E-Commerce',
    year: '2024',
    link: 'https://hostel-application-omega.vercel.app/menu',
    info: [
      { text: "React & Node.js", x: "10%", y: "-40%" },
      { text: "Real-time Orders", x: "85%", y: "-20%" },
      { text: "Secure Payments", x: "20%", y: "130%" },
      { text: "Admin Panel", x: "75%", y: "110%" },
    ]
  },
  {
    title: 'SEC Hostel Approval',
    category: 'Web Application',
    year: '2024',
    link: 'https://sec-hostel-approval.vercel.app/',
    info: [
      { text: "Workflow Automation", x: "15%", y: "-45%" },
      { text: "Role-based Access", x: "80%", y: "-25%" },
      { text: "Firebase Auth", x: "25%", y: "135%" },
      { text: "Fast Response", x: "70%", y: "115%" },
    ]
  },
  {
    title: 'My Progress',
    category: 'Student Companion App',
    year: '2024',
    link: 'https://my-progress-one.vercel.app/',
    info: [
      { text: "Progress Tracking", x: "12%", y: "-50%" },
      { text: "Clean UI/UX", x: "88%", y: "-30%" },
      { text: "Mobile Responsive", x: "18%", y: "140%" },
      { text: "Local Storage", x: "82%", y: "120%" },
    ]
  },
];

const ProjectItem = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex cursor-pointer items-center justify-between border-b border-foreground/10 py-8 transition-colors hover:bg-foreground/5 md:py-12 px-4"
    >
      <div className="flex flex-col space-y-2 md:flex-row md:items-baseline md:space-x-8 md:space-y-0 relative z-20">
        <span className="text-3xl font-bold tracking-tight text-foreground md:text-5xl group-hover:text-[#EBB000] transition-colors">
          {project.title}
        </span>
        <span className="text-sm font-medium tracking-widest text-foreground/50 uppercase">
          {project.category}
        </span>
      </div>

      <AnimatePresence>
        {isHovered && project.info.map((point, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { delay: idx * 0.05, duration: 0.3 }
            }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            style={{ 
              left: point.x, 
              top: point.y,
              position: 'absolute',
              zIndex: 30
            }}
            className="hidden md:block pointer-events-none"
          >
            <div className="relative">
              <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-md shadow-xl text-[10px] font-bold tracking-wider text-white whitespace-nowrap overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/5 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] isolate">
                {point.text}
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="flex items-center space-x-6 relative z-20">
        <span className="hidden text-sm font-medium text-foreground/50 md:block">{project.year}</span>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBB000] text-background opacity-0 transition-all group-hover:opacity-100 group-hover:scale-110">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </motion.a>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="flex min-h-screen w-full flex-col items-center justify-center p-8 py-24 font-sans md:p-12">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
            Selected <br /> Works<span className="text-[#EBB000]">.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-foreground/10">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
