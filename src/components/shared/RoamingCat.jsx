import { useEffect, useState } from 'react'

export default function RoamingCat({ start = 35, delay = 2200, orange = false, name = 'Mochi' }) {
  const [position, setPosition] = useState(start)
  const [direction, setDirection] = useState(1)
  const [walking, setWalking] = useState(false)
  const [greeting, setGreeting] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer
    let current = start
    function wander() {
      if (motion.matches || document.hidden) { setWalking(false); timer = setTimeout(wander, 4000); return }
      const next = 8 + Math.random() * 72
      setDirection(next > current ? 1 : -1)
      setPosition(next)
      current = next
      setWalking(true)
      timer = setTimeout(() => { setWalking(false); timer = setTimeout(wander, 2500 + Math.random() * 3000) }, 6500)
    }
    timer = setTimeout(wander, delay)
    return () => clearTimeout(timer)
  }, [start, delay])

  useEffect(() => {
    if (!greeting) return
    const timer = setTimeout(() => setGreeting(false), 2200)
    return () => clearTimeout(timer)
  }, [greeting])

  if (hidden) return null
  return <div className={`roaming-cat ${walking ? 'cat-walking' : 'cat-resting'}`} style={{ left: `${position}%`, '--cat-coat': orange ? '#e5a357' : '#d3bca5', '--cat-light': orange ? '#f3c183' : '#dfcbb6', '--cat-dark': orange ? '#c98640' : '#bba38d', '--cat-stripe': orange ? '#b56b2d' : '#9b816a' }}>
    <div className={`cat-bubble ${greeting ? 'cat-bubble-visible' : ''}`} role="status">{greeting ? `${name}: Prrr… ♡` : ''}</div>
    <button className="cat-pet" onClick={() => setGreeting(true)} aria-label={`Pet ${name}, the ${orange ? 'orange' : 'cream'} cat`} title="Pet me!">
      <svg viewBox="0 0 120 90" width="90" height="68" aria-hidden="true" style={{ transform: `scaleX(${direction})` }}>
        <ellipse cx="56" cy="82" rx="39" ry="4" fill="#000" opacity=".22" />
        <g className="cat-body">
          <path className="cat-tail" d="M35 56C8 57 6 32 18 24C25 20 27 28 22 31C16 36 19 46 36 44" fill="var(--cat-dark)" stroke="#675748" strokeWidth="2" />
          <path className="cat-leg cat-leg-back" d="M38 60L34 78Q32 83 41 82L48 65" fill="var(--cat-dark)" stroke="#675748" strokeWidth="2" />
          <path className="cat-leg cat-leg-front" d="M73 60L77 79Q76 84 86 82L84 58" fill="var(--cat-coat)" stroke="#675748" strokeWidth="2" />
          <ellipse cx="59" cy="55" rx="30" ry="21" fill="var(--cat-coat)" stroke="#675748" strokeWidth="2" />
          <path d="M42 39L46 49M53 36L56 46M64 37L67 46" stroke="var(--cat-stripe)" strokeWidth="4" strokeLinecap="round" />
          <path className="cat-leg cat-leg-near-back" d="M43 63L44 79Q43 84 53 82L56 64" fill="var(--cat-light)" stroke="#675748" strokeWidth="2" />
          <path className="cat-leg cat-leg-near-front" d="M70 63L66 79Q65 84 76 82L82 60" fill="var(--cat-light)" stroke="#675748" strokeWidth="2" />
          <g className="cat-head">
            <path d="M68 32L65 9Q65 5 70 9L84 20L96 8Q100 5 100 11L100 34" fill="var(--cat-coat)" stroke="#675748" strokeWidth="2" strokeLinejoin="round" />
            <path d="M70 14L72 26L80 24ZM96 14L89 24L97 26Z" fill="#c58f88" />
            <ellipse cx="83" cy="36" rx="23" ry="19" fill="var(--cat-light)" stroke="#675748" strokeWidth="2" />
            <path d="M79 20L81 27M87 20L86 27" stroke="var(--cat-stripe)" strokeWidth="3" strokeLinecap="round" />
            <g className="cat-eyes"><path d="M71 35Q75 31 78 35M89 35Q93 31 96 35" fill="none" stroke="#40372f" strokeWidth="2.5" strokeLinecap="round" /></g>
            <path d="M81 40L85 40L83 43Z" fill="#b07876" /><path d="M83 43Q78 47 76 43M83 43Q87 47 90 43" fill="none" stroke="#675748" strokeWidth="1.5" />
            <path d="M68 40L54 37M68 44L54 46M98 40L112 37M98 44L112 46" stroke="#8c7866" strokeWidth="1.2" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </button>
    <button className="cat-hide" onClick={() => setHidden(true)} aria-label={`Hide ${name}`} title="Let the cat nap">×</button>
  </div>
}
