import { Briefcase, GraduationCap, Landmark } from 'lucide-react'
import SectionContainer from '../SectionContainer'

const experiences = [
  {
    role: 'Treasurer, Computer Science Club',
    period: 'Universiti Putra Malaysia',
    detail:
      'Managed club budgeting, sponsorship planning, and event finance operations while supporting student initiatives.',
    icon: Landmark,
  },
  {
    role: 'Software / Frontend Experience',
    period: 'Internship and practical projects',
    detail:
      'Built frontend modules, reusable UI components, and dashboard flows with a focus on clean architecture and usability.',
    icon: Briefcase,
  },
  {
    role: 'University Project Development',
    period: 'Academic collaborations',
    detail:
      'Delivered team-based software projects from ideation to deployment, including documentation and testing workflows.',
    icon: GraduationCap,
  },
]

function ExperienceSection() {
  return (
    <SectionContainer
      id="experience"
      heading="Experience"
      subheading="Timeline and leadership"
    >
      <div className="relative ml-3 space-y-6 border-l-4 border-black pl-6 md:ml-6 md:pl-8">
        {experiences.map((item) => {
          const Icon = item.icon

          return (
            <article key={item.role} className="neo-card relative bg-white p-5 md:p-6">
              <span className="absolute -left-[37px] top-7 inline-flex rounded-full border-[3px] border-black bg-yellow-300 p-2 text-slate-900 md:-left-[43px]">
                <Icon size={16} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pink-700">
                {item.period}
              </p>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{item.role}</h3>
              <p className="text-muted mt-2 text-sm leading-relaxed">{item.detail}</p>
            </article>
          )
        })}
      </div>
    </SectionContainer>
  )
}

export default ExperienceSection
