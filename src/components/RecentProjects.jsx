import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';
import './ProjectGallery.css';
const logo = '/images/projects/bs-group-logo.webp';

function BrandedPhoto({ photo, eager = false, contain = false }) {
  return <div className={`project-photo${contain ? ' project-photo--contain' : ''}`}>
    <img className="project-photo__image" src={photo.src} alt={photo.alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    <span className="project-photo__brand"><img src={logo} alt="BS GROUP SRL" width="180" height="60" /></span>
  </div>;
}

export default function RecentProjects() {
  const [selected, setSelected] = useState(null);
  const [index, setIndex] = useState(0);
  const dialog = useRef(null);
  const project = projects.find(item => item.id === selected);
  useEffect(() => {
    if (!project) return;
    const el = dialog.current;
    if (!el.open) el.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = overflow; };
  }, [project]);
  function close() { dialog.current.close(); setSelected(null); }
  function move(step) { setIndex(current => (current + step + project.photos.length) % project.photos.length); }
  return <section className="section project-section" aria-labelledby="project-heading">
    <div className="wrap">
      <p className="project-eyebrow">BS GROUP SRL · PORTFOLIO</p>
      <h2 id="project-heading">I nostri <span className="yellow">lavori</span></h2>
      <p className="intro">I nostri cantieri, raccontati attraverso le fotografie degli interventi. Apri un progetto per esplorare tutti gli ambienti e i dettagli.</p>
      <div className="project-grid">
        {projects.map((item, i) => <article className="project-card" key={item.id}>
          <button type="button" className="project-card__cover" aria-label={`Apri le ${item.photos.length} foto: ${item.title}`} onClick={() => { setIndex(0); setSelected(item.id); }}>
            <BrandedPhoto photo={item.photos[0]} />
            <span className="project-card__count">{String(i+1).padStart(2,'0')} / {item.photos.length} foto</span>
          </button>
          <div className="project-card__body"><p className="project-card__category">{item.category}</p><h3>{item.title}</h3><p className="project-card__location">{item.location}</p><p>{item.description}</p>
            <button type="button" className="project-open" onClick={() => { setIndex(0); setSelected(item.id); }}>Esplora il progetto <span aria-hidden="true">↗</span></button>
          </div>
        </article>)}
      </div>
    </div>
    <dialog ref={dialog} className="project-dialog" aria-labelledby="gallery-title" onCancel={event => { event.preventDefault(); close(); }} onClose={() => setSelected(null)} onClick={event => { if (event.target === dialog.current) close(); }} onKeyDown={event => { if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } }}>
      {project && <div className="project-gallery">
        <div className="project-gallery__header"><div><p>{project.location}</p><h2 id="gallery-title">{project.title}</h2></div><button type="button" className="project-close" aria-label="Chiudi galleria" onClick={close} autoFocus>×</button></div>
        <div className="project-gallery__stage"><BrandedPhoto photo={project.photos[index]} eager contain /></div>
        <div className="project-gallery__controls"><button type="button" aria-label="Foto precedente" onClick={() => move(-1)}>←</button><p aria-live="polite">{index+1} / {project.photos.length}<span>{project.photos[index].alt}</span></p><button type="button" aria-label="Foto successiva" onClick={() => move(1)}>→</button></div>
        <div className="project-gallery__thumbs" aria-label="Scegli una foto">{project.photos.map((p,i) => <button key={p.src} type="button" aria-label={`Mostra foto ${i+1}: ${p.alt}`} aria-pressed={i===index} onClick={() => setIndex(i)}><img src={p.src} alt="" loading="lazy" /></button>)}</div>
      </div>}
    </dialog>
  </section>;
}
