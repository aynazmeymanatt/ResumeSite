import useReveal from "../hooks/useReveal";
import { experience } from "../data/resumeData";

export default function Experience() {
  const [ref, visible] = useReveal();

  return (
    <section id="experience" className="section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۳ — مسیر حرفه‌ای</p>
        <h2 className="section__title">مدار تجربه</h2>

        <div className="timeline">
          <div className="timeline__line" />
          {experience.map((item, i) => (
            <div
              className="timeline__item"
              key={item.org}
              style={{ "--delay": `${i * 120}ms` }}
            >
              <div className="timeline__dot" />
              <div className="glass panel timeline__card">
                <div className="timeline__card-body">
                  <div className="timeline__meta mono muted">{item.period}</div>
                  <div className="timeline__head">
                    <h3>{item.role}</h3>
                    {item.image && item.imageSmall && (
                      <img
                        src={item.image}
                        alt=""
                        className="project-card__badge"
                      />
                    )}
                  </div>
                  <p className="timeline__org">{item.org}</p>
                  {item.image && !item.imageSmall && (
                    <div className="timeline__thumb">
                      <img src={item.image} alt={item.org} />
                    </div>
                  )}
                  <ul>
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="skills__chips">
                    {item.tags.map((t) => (
                      <span className="chip chip--sm mono" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
