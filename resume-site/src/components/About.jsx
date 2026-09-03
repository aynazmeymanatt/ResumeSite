import useReveal from "../hooks/useReveal";
import { profile, languages } from "../data/resumeData";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
        <p className="eyebrow mono">۰۱ — درباره من</p>
        <h2 className="section__title">
          مسیری که از رابط کاربری شروع شد، به داده رسید
        </h2>

        <div className="about__grid">
          <div className="glass panel about__bio">
            <p>
              دانشجوی مهندسی نرم‌افزار در دانشگاه صنعتی امیرکبیر با گرایش
              فرعی هوش مصنوعی هستم. مسیرم را با توسعه‌ی فرانت‌اند و ری‌اکت
              شروع کردم و همین حالا، در کنار کار روی زنجیره‌ی تأمین دارو،
              به سمت تحلیل داده و Power BI حرکت کرده‌ام؛ جایی که همان ذوق
              طراحی رابط کاربری را برای روایت داده به کار می‌گیرم.
            </p>
            <div className="about__location mono">📍 {profile.location}</div>
          </div>

          <div className="glass panel about__langs">
            <h3>زبان‌ها</h3>
            {languages.map((lang) => (
              <div className="lang-bar" key={lang.name}>
                <div className="lang-bar__label">
                  <span className="lang-bar__name">
                    <img src={lang.flag} alt="" className="lang-bar__flag" />
                    {lang.name}
                  </span>
                  <span className="mono muted">{lang.level}</span>
                </div>
                <div className="lang-bar__track">
                  <div
                    className="lang-bar__fill"
                    style={{ "--value": `${lang.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
