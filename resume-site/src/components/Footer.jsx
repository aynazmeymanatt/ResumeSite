import { profile } from "../data/resumeData";

export default function Footer() {
  return (
    <footer className="footer mono muted">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="footer__dot">•</span>
      <span>ساخته‌شده با React</span>
    </footer>
  );
}
