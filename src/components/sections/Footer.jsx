import { BriefcaseBusiness, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer border-t px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">

        <p>© {new Date().getFullYear()} Hazani Suhairy. Made with curiosity.</p>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/hazani-suhairy-5b298b369" target="_blank" rel="noopener noreferrer" className="neo-button inline-flex p-2" aria-label="LinkedIn (opens in a new tab)"><BriefcaseBusiness size={16} /></a>
          <a
            href="mailto:hazaniiisuhairy@gmail.com"
            className="neo-button inline-flex bg-pink-300 p-2"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
