import { ArrowUpRight, BriefcaseBusiness, Mail } from 'lucide-react'
import SectionContainer from '../SectionContainer'

export default function ContactSection() {
  return (
    <SectionContainer id="contact" heading="Contact" subheading="Something great starts with hello.">
      <div className="contact-links">
        <a className="neo-card contact-link-card" href="mailto:hazaniiisuhairy@gmail.com">
          <span className="contact-link-icon"><Mail size={25} strokeWidth={1.5} /></span>
          <span className="contact-link-copy"><span className="contact-link-label">Email me</span><span className="contact-link-value">hazaniiisuhairy@gmail.com</span></span>
          <ArrowUpRight className="contact-link-arrow" size={22} />
        </a>
        <a className="neo-card contact-link-card" href="https://www.linkedin.com/in/hazani-suhairy-5b298b369" target="_blank" rel="noopener noreferrer">
          <span className="contact-link-icon"><BriefcaseBusiness size={25} strokeWidth={1.5} /></span>
          <span className="contact-link-copy"><span className="contact-link-label">Connect on LinkedIn</span><span className="contact-link-value">Hazani Suhairy</span></span>
          <ArrowUpRight className="contact-link-arrow" size={22} /><span className="sr-only">Opens in a new tab</span>
        </a>
      </div>
    </SectionContainer>
  )
}
