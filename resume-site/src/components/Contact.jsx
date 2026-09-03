import useReveal from "../hooks/useReveal";
import { contact } from "../data/resumeData";

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section id="contact" className="section section--contact">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۶ — تماس</p>
        <h2 className="section__title">راه‌های ارتباطی</h2>
        <p className="contact__lead">
         از همکاری روی پروژه‌های تازه تا گفت‌وگویی کوتاه درباره‌ی تکنولوژی، طراحی و داده، هم‌صحبتی با شما می‌تواند آغازگر اتفاقی تازه باشد

        </p>

        <div className="contact__grid">
          <a className="glass panel contact__card" href={`mailto:${contact.email}`}>
            <span className="contact__icon">✉</span>
            <div>
              <div className="contact__label mono muted">ایمیل</div>
              <div className="contact__value">{contact.email}</div>
            </div>
          </a>

          <a className="glass panel contact__card" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
            <span className="contact__icon">☎</span>
            <div>
              <div className="contact__label mono muted">تلفن</div>
              <div className="contact__value mono">{contact.phone}</div>
            </div>
          </a>

          <a
            className="glass panel contact__card"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__icon">⌥</span>
            <div>
              <div className="contact__label mono muted">گیت‌هاب</div>
              <div className="contact__value mono">aynazmeymanatt</div>
            </div>
          </a>

          <a
            className="glass panel contact__card"
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact__icon">in</span>
            <div>
              <div className="contact__label mono muted">لینکدین</div>
              <div className="contact__value mono">پروفایل من</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
