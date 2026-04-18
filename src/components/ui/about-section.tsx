import { motion } from 'framer-motion';

export const AboutSection = () => {
  return (
    <section id="about" className="flex min-h-screen w-full flex-col items-center justify-center bg-transparent p-8 py-24 font-sans md:p-12">
      <div className="w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="text-5xl font-extrabold uppercase tracking-tight text-foreground md:text-7xl drop-shadow-2xl">
            Who <br className="hidden md:block" /> am I<span className="text-[#EBB000]">.</span>
          </h2>
          <div className="max-w-md rounded-xl bg-black/40 p-6 backdrop-blur-md border border-white/10 shadow-xl">
            <p className="text-base leading-relaxed text-foreground/90 md:text-lg drop-shadow-md">
              A passionate full-stack developer blending technical precision with striking visual design. I believe in writing code that not only works flawlessly but feels effortless to the user.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          <div className="relative h-64 w-full overflow-hidden rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-xl md:h-80">
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <p className="text-xl font-bold italic tracking-wide text-[#EBB000] drop-shadow-lg">
                "I don't know if I live many times, but I live my one life to the fullest; one is enough."
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6 rounded-xl bg-black/40 p-8 backdrop-blur-md border border-white/10 shadow-xl">
            <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground drop-shadow-xl">The Approach</h3>
            <p className="text-foreground/90 leading-relaxed drop-shadow-md">
              I am a deeply curious technologist who loves exploring uncharted territories in software development. As a Full-Stack GenAI Developer, I don't just build applications; I integrate cutting-edge artificial intelligence to solve complex problems and create smarter, more intuitive digital experiences.
            </p>
            <p className="text-foreground/90 leading-relaxed drop-shadow-md">
              Based in Chennai, my focus is always on continuous progress and building tools that make a tangible impact.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
