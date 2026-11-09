import RoamingCat from './components/shared/RoamingCat'
import InteractiveEffects from './components/shared/InteractiveEffects'
import EducationSection from './components/sections/EducationSection'
import Navbar from './components/Navbar'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import ExperienceSection from './components/sections/ExperienceSection'
import Footer from './components/sections/Footer'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <main className="portfolio-main">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <InteractiveEffects />
      <RoamingCat name="Mochi" start={18} />
      <RoamingCat name="Mango" start={48} delay={4300} orange />
      <RoamingCat name="Pumpkin" start={73} delay={6700} orange />
    </div>
  )
}

export default App
