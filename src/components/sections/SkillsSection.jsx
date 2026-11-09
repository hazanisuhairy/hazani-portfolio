import skillsData from '../../data/skillsData'
import SectionContainer from '../SectionContainer'

// Removed local skills definition, now using skillsData

function SkillsSection() {
  return (
    <SectionContainer id="skills" heading="Skills" subheading="The tools behind the ideas.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon

          return (
            <article
              key={skill.name}
              className="neo-card group bg-white p-5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 inline-flex skill-icon rounded-xl p-3 text-slate-900 transition group-hover:scale-105">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
              <p className="text-muted mt-3 text-sm leading-relaxed">{skill.tools.join(' · ')}</p>
            </article>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default SkillsSection
