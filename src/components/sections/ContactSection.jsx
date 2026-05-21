import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'
import SectionContainer from '../SectionContainer'

function ContactSection() {
  return (
    <SectionContainer id="contact" heading="Contact" subheading="Let us build something great">
      <div className="grid gap-6 lg:grid-cols-5">
        <form className="neo-card bg-white p-6 lg:col-span-3 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="neo-input w-full px-4 py-3 text-sm"
              />
            </div>

            <div className="sm:col-span-1">
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="neo-input w-full px-4 py-3 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project"
                className="neo-input w-full resize-none px-4 py-3 text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="neo-button mt-5 bg-black px-6 py-3 text-sm font-semibold text-white"
          >
            Send Message
          </button>
        </form>

        <aside className="neo-card bg-cyan-100 p-6 lg:col-span-2 md:p-8">
          <h3 className="text-xl font-bold text-slate-900">Connect directly</h3>
          <p className="text-muted mt-3 text-sm leading-relaxed">
            Open to collaborations, internships, and exciting product ideas.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="neo-button flex items-center gap-3 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <Code2 size={18} /> github.com/hazani
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="neo-button flex items-center gap-3 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <BriefcaseBusiness size={18} /> linkedin.com/in/hazani
            </a>
            <a
              href="mailto:hazani@example.com"
              className="neo-button flex items-center gap-3 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
            >
              <Mail size={18} /> hazani@example.com
            </a>
          </div>
        </aside>
      </div>
    </SectionContainer>
  )
}

export default ContactSection
