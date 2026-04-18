import { Globe, Mail, GitBranch } from 'lucide-react';
import { MinimalistHero } from '@/components/ui/minimalist-hero';
import { AboutSection } from '@/components/ui/about-section';
import { Quote } from '@/components/ui/quote-section';
import { ProjectsSection } from '@/components/ui/projects-section';
import { SkillsSection } from '@/components/ui/skills-section';
import UnicornScene from 'unicornstudio-react';
import heroImg from './assets/profile_final.png';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'ABOUT ME', href: '#about' },
  ];

  const socialLinks = [
    { icon: GitBranch, href: 'https://github.com/akil-07' },
    { icon: Globe, href: 'https://www.linkedin.com/in/akil-sudhagar-75629b36b/' },
    { icon: Mail, href: 'mailto:akilsudhagar7@gmail.com' },
  ];

  return (
    <div className="bg-background text-foreground selection:bg-[#EBB000] selection:text-background overflow-hidden relative">
      {/* Pushed slightly below the screen bounds to hide the watermark badge */}
      <div className="fixed -bottom-16 -left-4 -right-4 -top-4 z-0 pointer-events-auto opacity-20 mix-blend-screen">
        <UnicornScene
          projectId="cyXqlVCnHwIBZBhqvjus"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.9/dist/unicornStudio.umd.js"
        />
      </div>

      <div className="relative z-10">
        <MinimalistHero
          logoText="akil."
          navLinks={navLinks}
          mainText="I engineer intelligent systems. Full-Stack GenAI Developer passionate about pushing the boundaries of what's possible."
          readMoreLink="#about"
          imageSrc={heroImg}
          imageAlt="Portrait of Akil"
          overlayText={{
            part1: 'less is',
            part2: 'more.',
          }}
          socialLinks={socialLinks}
          locationText="Chennai"
          infoPoints={[
            { text: "Full-Stack Developer", x: "12%", y: "22%" },
            { text: "GenAI Specialist", x: "88%", y: "32%" },
            { text: "System Architect", x: "18%", y: "68%" },
            { text: "Problem Solver", x: "82%", y: "78%" },
            { text: "Creative Coder", x: "50%", y: "15%" },
          ]}
        />
      </div>

      <div className="relative z-10 bg-transparent">
        <Quote />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default MinimalistHeroDemo;
