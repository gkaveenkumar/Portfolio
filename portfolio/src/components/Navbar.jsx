import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "Certifications", "Contact"];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="logo">KK<span className="logo-dot">.</span></a>

      {/* Desktop links */}
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
      </ul>

      <a
        href={personal.resumeFile}
        download="Kaveen_Kumar_Resume.pdf"
        className="nav-cta"
      >
        Download CV
      </a>

      {/* Mobile hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              {l}
            </a>
          ))}
          <a href={personal.resumeFile} download className="nav-cta" onClick={() => setMenuOpen(false)}>
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
