import useReveal from "../hooks/useReveal";
import { education, achievements } from "../data/resumeData";

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <section id="education" className="section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۵ — تحصیلات و افتخارات</p>
        <h2 className="section__title">پایه‌های علمی</h2>

        <div className="timeline timeline--compact">
          <div className="timeline__line" />
          {education.map((item, i) => (
            <div
              className="timeline__item"
              key={item.place}
              style={{ "--delay": `${i * 120}ms` }}
            >
              <div className="timeline__dot timeline__dot--gold" />
              <div className="glass panel timeline__card">
                <div className="timeline__card-body">
                  <div className="timeline__head">
                    {item.logo && (
                      <span className="timeline__logo">
                        <img src={item.logo} alt={`لوگوی ${item.place}`} />
                      </span>
                    )}
                    <div>
                      <div className="timeline__meta mono muted">{item.period}</div>
                      <h3>{item.place}</h3>
                    </div>
                  </div>
                  <p className="timeline__org">{item.degree}</p>
                  {item.photo && (
                    <div className="timeline__thumb">
                      <img src={item.photo} alt={item.place} />
                    </div>
                  )}
                  <p className="mono muted">📍 {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements">
          {achievements.map((a) => (
            <div className="glass panel achievement-card" key={a.title}>
              <div className="achievement-card__star">★</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
