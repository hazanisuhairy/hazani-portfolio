import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav className="neo-card mx-auto flex max-w-6xl items-center justify-between bg-yellow-200 px-5 py-3">
        <a href="#hero" className="text-lg font-bold tracking-tight text-slate-900">
          Hazani Suhairy
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-pink-600"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="neo-button inline-flex bg-white p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="neo-card mx-auto mt-3 max-w-6xl bg-cyan-200 px-5 py-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
