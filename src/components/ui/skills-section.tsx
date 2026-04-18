import { motion } from 'framer-motion';
import { SocialLogin } from './social-login';

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "Tailwind CSS", "Generative AI", "LLMs", "MongoDB",
  "Express", "Vercel", "Git", "System Design"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="flex min-h-screen w-full flex-col items-center justify-center bg-transparent p-8 py-24 font-sans md:p-12">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl">
            Core <span className="text-[#EBB000]">Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-foreground/70">
            The tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium tracking-wider text-foreground/80 transition-colors hover:border-[#EBB000] hover:text-[#EBB000] md:text-base"
            >
              {skill}
            </motion.div>
          ))}
        </div>
        
        {/* Footer/Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 flex flex-col items-center border-t border-foreground/10 pt-16 text-center"
        >
          <h3 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Let's build something.</h3>
          <a href="mailto:akilsudhagar7@gmail.com" className="group relative inline-flex items-center overflow-hidden rounded-full bg-foreground px-8 py-4 text-background">
            <span className="absolute inset-0 bg-[#EBB000] transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"></span>
            <span className="relative font-bold tracking-widest uppercase transition-colors group-hover:text-background">Say Hello</span>
          </a>
          
          <div className="mt-8">
            <SocialLogin />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
