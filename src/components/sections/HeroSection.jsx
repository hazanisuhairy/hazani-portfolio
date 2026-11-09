import { ArrowDown, ArrowUpRight, Code2, Layers, Sparkles } from 'lucide-react'

function HeroSection() {
  return (
    <section id="hero" className="vision-hero">
      <div className="hero-copy">
        <p className="eyebrow">HAZANI SUHAIRY · FULL STACK SOFTWARE DEVELOPER</p>
        <h1>A little curiosity.<br /><span>Endless possibilities.</span></h1>
        <p className="hero-description">Building reliable mobile and web experiences.<br className="hidden sm:block" /> Welcome to my corner of the internet.</p>
        <div className="hero-actions">
          <a className="pill-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
          <a className="text-link" href="/resume-hazani.pdf" download>Download résumé <ArrowDown size={16} /></a>
        </div>
      </div>
      <div className="spatial-scene" aria-label="Illustrative floating workspace with code and design panels">
        <div className="scene-orbit orbit-one" /><div className="scene-orbit orbit-two" />
        <div className="floating-note note-left"><span className="note-icon"><Code2 size={21} /></span><div><small>THE CRAFT</small><strong>Built with intention.</strong></div></div>
        <div className="workspace-window">
          <div className="window-toolbar"><div className="window-dots"><i /><i /><i /></div><span>hazani / creative space</span><Layers size={14} /></div>
          <div className="window-content"><div className="orb-art"><div className="orb-core" /><span className="orb-ring" /></div><span className="window-label">IMAGINE. BUILD. REFINE.</span><h2>Ideas take shape.</h2><p>A space where design meets development.</p><a href="#projects" aria-label="Discover my projects"><ArrowUpRight size={23} /></a></div>
        </div>
        <div className="floating-note note-right"><span className="note-icon"><Sparkles size={21} /></span><div><small>THE MINDSET</small><strong>Always learning.</strong></div></div>
        <div className="scene-caption"><span /> Computer Science Graduate · Junior Full Stack Developer</div>
      </div>
      <a href="#about" className="scroll-cue">A little more about me <ArrowDown size={15} /></a>
    </section>
  )
}
export default HeroSection
