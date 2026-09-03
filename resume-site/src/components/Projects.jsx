import useReveal from "../hooks/useReveal";
import { projects } from "../data/resumeData";

export default function Projects() {
  const [ref, visible] = useReveal();

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۴ — پروژه‌ها</p>
        <h2 className="section__title">پروژه</h2>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <article
              className="glass panel project-card"
              key={p.name}
              style={{ "--delay": `${(i % 3) * 90}ms` }}
            >
              <div className="project-card__glow" />
              <div className="project-card__head">
                {p.icon && (
                  <span className="project-card__icon">
                    <img src={p.icon} alt="" />
                  </span>
                )}
                <h3>{p.name}</h3>
                {p.uiuxImage && (
                  <img
                    src={p.uiuxImage}
                    alt="UI/UX"
                    className="project-card__badge"
                  />
                )}
              </div>
              <p className="project-card__subtitle mono muted">{p.subtitle}</p>
              <p className="project-card__desc">{p.description}</p>
              <div className="skills__chips">
                {p.tags.map((t) => (
                  <span className="chip chip--sm mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link mono"
                >
                  مشاهده‌ی دمو ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
