import { Code2, ExternalLink, Image as ImageIcon } from 'lucide-react'
import SectionContainer from '../SectionContainer'
import projectsData from '../../data/projectsData'

function ProjectsSection() {
  return (
    <SectionContainer id="projects" heading="Projects" subheading="Selected work">
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project) => (
          <article
            key={project.title}
            className="neo-card group bg-white p-5"
          >
            <div className="mb-5 flex h-44 items-center justify-center rounded-2xl border-[3px] border-black bg-pink-200">
              <ImageIcon className="text-slate-400" size={34} />
            </div>

            <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-2 border-black bg-cyan-200 px-3 py-1 text-xs font-semibold text-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-5 flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="neo-button inline-flex items-center gap-2 bg-black px-4 py-2 text-sm font-semibold text-white"
              >
                <Code2 size={16} /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="neo-button inline-flex items-center gap-2 bg-yellow-300 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                <ExternalLink size={16} /> Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionContainer>
  )
}

export default ProjectsSection
