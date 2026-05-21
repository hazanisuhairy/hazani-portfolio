
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'


function HeroBackground() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-12 top-12 h-32 w-32 rotate-12 border-4 border-black bg-pink-300" />
        <div className="absolute right-6 top-20 h-24 w-24 -rotate-12 border-4 border-black bg-cyan-300" />
        <div className="absolute bottom-8 left-1/3 h-20 w-20 rotate-6 border-4 border-black bg-lime-300" />
      </div>
      <div className="absolute right-6 top-6 hidden h-20 w-20 -rotate-6 border-4 border-black bg-yellow-300 md:block" />
      <div className="absolute bottom-8 right-20 hidden h-12 w-12 rotate-6 border-4 border-black bg-pink-300 md:block" />
    </>
  )
}

function HeroContent() {
  return (
    <div className="neo-card relative overflow-hidden bg-white px-6 py-16 sm:px-10 lg:px-16">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mb-3 inline-block border-2 border-black bg-cyan-200 px-3 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900"
      >
        Computer Science Student & Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
      >
        Hello everyone. Welcome to my corner of the internet where I share my projects, ideas, and journey in software developer. 
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
      >
        Passionate about software engineering, machine learning, and elegant UI systems that feel fast, intuitive, and future-ready.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex flex-col gap-4 sm:flex-row"
      >
        <a
          href="#projects"
          className="neo-button inline-flex items-center justify-center gap-2 bg-black px-6 py-3 text-sm font-semibold text-white"
        >
          View Projects <ArrowRight size={16} />
        </a>
        <a
          href="/Hazani-Resume.pdf"
          download
          className="neo-button inline-flex items-center justify-center gap-2 bg-yellow-300 px-6 py-3 text-sm font-semibold text-slate-900"
        >
          Download Resume <Download size={16} />
        </a>
      </motion.div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="relative mb-16 min-h-[80vh] scroll-mt-28 md:mb-24">
      <HeroBackground />
      <HeroContent />
    </section>
  )
}

export default HeroSection
