// src/components/shared/SectionContainer.jsx
// Reusable section wrapper for headings and layout.

function SectionContainer({ id, heading, subheading, children }) {
  return (
    <section id={id} className="mb-16 scroll-mt-28 md:mb-24">
      <div className="mb-8 md:mb-10">
        <p className="mb-2 inline-block border-2 border-black bg-yellow-200 px-3 py-1 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
          {heading}
        </p>
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{subheading}</h2>
      </div>
      {children}
    </section>
  )
}

export default SectionContainer;
