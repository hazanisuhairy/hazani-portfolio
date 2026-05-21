// src/App.jsx
//
// Folder structure:
//
// src/
// ├── components/
// │   ├── Hero/           # All hero section UI (background, content, layout)
// │   ├── Projects/       # Project cards and section
// │   ├── Skills/         # Skills cards and section
// │   ├── Experience/     # Timeline and experience section
// │   └── shared/         # Reusable UI primitives
// ├── data/               # All content/text for each section
// ├── assets/             # Images, icons, etc.
// ├── styles/             # Tailwind and custom CSS
// └── App.jsx             # Main layout
//
// This structure separates content from UI, making it scalable and easy to localize or update.

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
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
