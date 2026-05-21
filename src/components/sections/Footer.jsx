import { BriefcaseBusiness, Code2, Mail } from 'lucide-react'

function Footer() {
  return (
    <footer className="border-t-[3px] border-black px-4 pb-8 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">

        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="neo-button inline-flex bg-yellow-300 p-2"
            aria-label="GitHub"
          >
            <Code2 size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="neo-button inline-flex bg-cyan-300 p-2"
            aria-label="LinkedIn"
          >
            <BriefcaseBusiness size={16} />
          </a>
          <a
            href="mailto:hazani@example.com"
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
