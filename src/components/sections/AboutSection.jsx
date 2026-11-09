// src/components/sections/AboutSection.jsx
// About section now renders content from src/data/aboutData.js

import SectionContainer from '../shared/SectionContainer'
import aboutData from '../../data/aboutData'

function AboutSection() {
  return (
    <SectionContainer id="about" heading={aboutData.heading} subheading="Curiosity is where it all begins.">
      <div className="about-layout">
        <figure className="profile-photo"><img src="/images/profile.jpg" alt="Hazani Suhairy smiling while holding a cat" width="960" height="1280" loading="lazy" /><figcaption>A little about the person behind the code.</figcaption></figure>
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
      </div>
    </SectionContainer>
  )
}

export default AboutSection
