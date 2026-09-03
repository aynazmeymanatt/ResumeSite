import useReveal from "../hooks/useReveal";
import { skills } from "../data/resumeData";

export default function Skills() {
  const [ref, visible] = useReveal();

  return (
    <section id="skills" className="section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۲ — مهارت‌ها</p>
        <h2 className="section__title">ابزارهایی که باهاشون کار کردم</h2>

        <div className="skills__grid">
          {Object.entries(skills).map(([group, items], gi) => (
            <div
              className="glass panel skills__group"
              key={group}
              style={{ "--delay": `${gi * 80}ms` }}
            >
              <h3>{group}</h3>
              <div className="skills__chips">
                {items.map((item) => (
                  <span className="chip mono" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
