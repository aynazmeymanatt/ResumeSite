import { useEffect, useState } from "react";

const LINKS = [
  { id: "hero", label: "خانه" },
  { id: "about", label: "درباره من" },
  { id: "experience", label: "مسیر حرفه‌ای" },
  { id: "projects", label: "پروژه‌ها" },
  { id: "skills", label: "مهارت‌ها" },
  { id: "education", label: "تحصیلات" },
  { id: "contact", label: "تماس" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner glass">
        <a
          href="#hero"
          className="navbar__brand"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          آ.م
        </a>
        <nav className="navbar__links">
          {LINKS.slice(1).map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? "is-active" : ""}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
