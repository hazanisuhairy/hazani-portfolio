import {
  Atom,
  Brain,
  Code2,
  Database,
  GitBranch,
  LayoutDashboard,
  Leaf,
  Palette,
  Server,
} from 'lucide-react'
import skillsData from '../../data/skillsData'
import SectionContainer from '../SectionContainer'

// Removed local skills definition, now using skillsData

function SkillsSection() {
  return (
    <SectionContainer id="skills" heading="Skills" subheading="Technology stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon

          return (
            <article
              key={skill.name}
              className="neo-card group bg-white p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 inline-flex rounded-xl border-2 border-black bg-yellow-200 p-3 text-slate-900 transition group-hover:scale-105">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
            </article>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default SkillsSection
