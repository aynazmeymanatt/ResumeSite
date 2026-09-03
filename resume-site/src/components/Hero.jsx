import { profile } from "../data/resumeData";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__orbit-wrap">
        <div className="hero__orbit hero__orbit--1" />
        <div className="hero__orbit hero__orbit--2" />
        <div className="hero__avatar glass">
          <img src={avatar} alt={profile.nameEn} />
          <div className="hero__comet" />
        </div>
      </div>

      <p className="eyebrow mono">// از فرانت‌اند تا تحلیل داده</p>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__title mono">{profile.title}</p>
      <p className="hero__tagline">{profile.tagline}</p>

      <div className="hero__cta">
        <a
          href="#contact"
          className="btn btn--primary"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          راه‌های ارتباطی
        </a>
        <a
          href="#projects"
          className="btn btn--ghost"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          پروژه‌ها
        </a>
      </div>

      <div className="hero__scroll-hint mono" aria-hidden="true">
        اسکرول کن ↓
      </div>
    </section>
  );
}
