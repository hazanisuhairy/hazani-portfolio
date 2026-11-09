import { Play, Expand } from 'lucide-react'
import SectionContainer from '../SectionContainer'
import projectsData from '../../data/projectsData'

function ProjectsSection() {
  return <SectionContainer id="projects" heading="Featured project" subheading="Made to make a difference.">
    {projectsData.map(project => <article className="neo-card featured-project" key={project.title}>
      <a className="project-app-preview" href={project.image} target="_blank" rel="noopener noreferrer" aria-label="View full-size Signary app screenshot"><img src={project.image} alt="Signary iOS app launch screen: Malaysian Sign Language Translator, created by Hazani Suhairy" width="590" height="1280" loading="lazy" /></a>
      <div className="featured-project-copy"><p className="eyebrow">{project.subtitle}</p><h3>{project.title}</h3><p className="text-muted leading-relaxed">{project.description}</p><ul className="resume-list">{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul><div className="flex flex-wrap gap-2 mt-6">{project.tags.map(tag => <span key={tag} className="project-tag rounded-full text-xs">{tag}</span>)}</div><a className="pill-primary project-video-link" href={project.videoUrl} target="_blank" rel="noopener noreferrer"><Play size={16} /> Watch project demo <span className="sr-only">on YouTube (opens in a new tab)</span></a></div>
    </article>)}
    {projectsData.filter(project => project.poster).map(project => <figure className="project-poster" key={project.poster}>
      <a href={project.poster} target="_blank" rel="noopener noreferrer" aria-label="View full-size final year project poster"><img src={project.poster} alt="Signary final year project poster detailing the Malaysian Sign Language gesture-to-text system, workflow, and recognition" width="1104" height="1564" loading="lazy" /></a>
      <figcaption><div><p className="eyebrow">A closer look</p><h3>The story behind Signary.</h3><p>Explore the research, real-time recognition workflow, and accessibility goals behind my final year project.</p></div><a className="text-link" href={project.poster} target="_blank" rel="noopener noreferrer">View full poster <Expand size={16} /><span className="sr-only"> (opens in a new tab)</span></a></figcaption>
    </figure>)}
  </SectionContainer>
}
export default ProjectsSection
