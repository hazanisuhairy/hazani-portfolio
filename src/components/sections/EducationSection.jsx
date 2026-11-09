import SectionContainer from '../SectionContainer'
import educationData from '../../data/educationData'
import leadershipData from '../../data/leadershipData'
import awardPhotos from '../../data/awardPhotos'

export default function EducationSection() {
  return <>
    <SectionContainer id="education" heading="Education & awards" subheading="A foundation for what comes next.">
      <div className="grid gap-6">{educationData.map(item => <article key={item.title} className="neo-card p-6 md:p-8">
        <div className="flex flex-wrap justify-between gap-3"><p className="eyebrow">{item.period}</p><span className="cgpa">CGPA {item.cgpa}</span></div>
        <h3 className="text-2xl font-semibold">{item.title}</h3><p className="text-muted mt-2 text-sm">{item.organization}</p>
        {item.awards && <><p className="mt-6 text-sm font-medium">Awards & recognition</p><ul className="resume-list">{item.awards.map(award => <li key={award}>{award}</li>)}</ul><p className="text-muted mt-4 text-xs leading-relaxed">Award-winning project: {item.project}</p></>}
      </article>)}</div>
      {awardPhotos.length > 0 && <div className="award-gallery" aria-label="Award photographs">{awardPhotos.map(photo => <figure key={photo.src} className={`award-photo ${photo.src.endsWith('sulam-gold.png') ? 'award-certificate' : ''}`}><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.alt}`}><img src={photo.src} alt={photo.alt} loading="lazy" /></a><figcaption>{photo.caption}</figcaption></figure>)}</div>}
    </SectionContainer>
    <SectionContainer id="leadership" heading="Leadership & involvement" subheading="Contributing beyond the code."><div className="grid gap-6 md:grid-cols-2">{leadershipData.map(item => <article key={item.title} className="neo-card p-6 md:p-8"><p className="eyebrow">{item.period}</p><h3 className="text-xl font-semibold">{item.title}</h3><p className="text-muted mt-2 text-sm">{item.organization}</p><ul className="resume-list">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul></article>)}</div></SectionContainer>
  </>
}
