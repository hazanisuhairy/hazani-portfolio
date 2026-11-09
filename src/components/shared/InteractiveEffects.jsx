import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Check, Copy, Expand, X } from 'lucide-react'

export default function InteractiveEffects() {
  const dialogRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  const [copied, setCopied] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    document.querySelectorAll('.section-heading, .neo-card, .award-photo, .project-poster, .profile-photo').forEach(element => {
      element.classList.add('reveal-on-scroll')
      observer.observe(element)
    })
    function handleClick(event) {
      const link = event.target.closest('a[href]')
      if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const url = new URL(link.href)
      if (url.origin !== window.location.origin || !/\.(png|jpe?g|webp)$/i.test(url.pathname)) return
      event.preventDefault()
      const figure = link.closest('figure')
      setPhoto({ src: link.href, alt: link.querySelector('img')?.alt || 'Project poster', caption: figure?.querySelector('figcaption')?.textContent || link.querySelector('img')?.alt || 'Project poster' })
      dialogRef.current.showModal()
    }
    function onScroll() {
      setShowTop(window.scrollY > 650)
      const total = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--scroll-progress', `${total > 0 ? window.scrollY / total * 100 : 0}%`)
    }
    document.addEventListener('click', handleClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => { observer.disconnect(); document.removeEventListener('click', handleClick); window.removeEventListener('scroll', onScroll) }
  }, [])

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2500)
    return () => clearTimeout(timer)
  }, [copied])

  async function copyEmail() {
    try { await navigator.clipboard.writeText('hazaniiisuhairy@gmail.com'); setCopied(true) }
    catch { window.location.href = 'mailto:hazaniiisuhairy@gmail.com' }
  }

  return <>
    <div className="reading-progress" aria-hidden="true" />
    <div className="quick-actions"><button onClick={copyEmail} aria-label="Copy email address" title="Copy email address">{copied ? <Check size={18} /> : <Copy size={18} />}</button>{showTop && <button onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })} aria-label="Back to top" title="Back to top"><ArrowUp size={19} /></button>}</div>
    <div className={`copy-toast ${copied ? 'is-active' : ''}`} role="status">{copied ? 'Email address copied. Say hello!' : ''}</div>
    <dialog ref={dialogRef} className="image-dialog" aria-label="Image preview" onClose={() => setPhoto(null)} onClick={event => { if (event.target === event.currentTarget) dialogRef.current.close() }}>
      <button autoFocus className="dialog-close" onClick={() => dialogRef.current.close()} aria-label="Close image preview"><X size={23} /></button>
      {photo && <figure><img src={photo.src} alt={photo.alt} /><figcaption><span>{photo.caption}</span><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label="Open original image in new tab"><Expand size={18} /></a></figcaption></figure>}
    </dialog>
  </>
}
