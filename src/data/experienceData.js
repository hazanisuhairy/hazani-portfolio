// src/data/experienceData.js
// All experience/timeline content centralized here for easy editing and localization.

import { Briefcase, GraduationCap, Landmark } from 'lucide-react'

const experienceData = [
  {
    role: 'Treasurer, Computer Science Club',
    period: 'Universiti Putra Malaysia',
    detail: 'Managed club budgeting, sponsorship planning, and event finance operations while supporting student initiatives.',
    icon: Landmark,
  },
  {
    role: 'Software / Frontend Experience',
    period: 'Internship and practical projects',
    detail: 'Built frontend modules, reusable UI components, and dashboard flows with a focus on clean architecture and usability.',
    icon: Briefcase,
  },
  {
    role: 'University Project Development',
    period: 'Academic collaborations',
    detail: 'Delivered team-based software projects from ideation to deployment, including documentation and testing workflows.',
    icon: GraduationCap,
  },
]

export default experienceData;
