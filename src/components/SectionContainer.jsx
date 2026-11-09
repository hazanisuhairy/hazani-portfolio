function SectionContainer({ id, heading, subheading, children }) {
  return <section id={id} className="content-section"><div className="section-heading"><p className="eyebrow">{heading}</p><h2>{subheading}</h2></div>{children}</section>
}
export default SectionContainer
