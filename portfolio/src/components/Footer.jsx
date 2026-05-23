import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="logo">KK<span className="logo-dot">.</span></span>
        <p className="footer-copy">
          © {new Date().getFullYear()} Kaveen Kumar G — Built with React & Vite
        </p>
        <div className="footer-links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${personal.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}
