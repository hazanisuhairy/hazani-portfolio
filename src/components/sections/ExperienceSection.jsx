import { Briefcase } from 'lucide-react'
import experiences from '../../data/experienceData'
import SectionContainer from '../SectionContainer'


function ExperienceSection() {
  return (
    <SectionContainer
      id="experience"
      heading="Experience"
      subheading="Learning. Building. Growing."
    >
      <div className="relative ml-3 space-y-6 experience-line border-l pl-6 md:ml-6 md:pl-8">
        {experiences.map((item) => {
          const Icon = Briefcase

          return (
            <article key={item.role} className="neo-card relative bg-white p-5 md:p-6">
              <span className="absolute -left-[37px] top-7 inline-flex rounded-full timeline-icon border bg-white p-2 text-slate-900 md:-left-[43px]">
                <Icon size={16} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{item.role}</h3>
              <p className="mt-2 text-sm text-stone-500">{item.organization}</p>
              <ul className="resume-list">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            </article>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default ExperienceSection
