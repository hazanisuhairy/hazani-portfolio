// src/components/sections/AboutSection.jsx
// About section now renders content from src/data/aboutData.js

import SectionContainer from '../shared/SectionContainer'
import aboutData from '../../data/aboutData'

function AboutSection() {
  return (
    <SectionContainer id="about" heading={aboutData.heading} subheading={aboutData.subheading}>
      <div className="neo-card bg-cyan-100 p-6 md:p-10">
        <p className="text-muted text-base leading-relaxed md:text-lg">
          {aboutData.description}
            <br />
            <br />
          {aboutData.description2}
            <br />
            <br />
          {aboutData.description3}
        </p>
      </div>
    </SectionContainer>
  )
}

export default AboutSection
