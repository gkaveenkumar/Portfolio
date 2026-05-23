import { useState } from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
  const [open, setOpen] = useState(skills.map(() => true)); // all open by default

  const toggle = (i) =>
    setOpen((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <div className="section-title">What I Work With</div>
        <div className="section-line" />

        <div className="accordion-skills">
          {skills.map((cat, i) => (
            <div key={cat.category} className="acc-item">
              <button className="acc-header" onClick={() => toggle(i)}>
                <span className="acc-cat-title">{cat.category}</span>
                <span className={`acc-arrow ${open[i] ? "open" : ""}`}>▼</span>
              </button>
              {open[i] && (
                <div className="acc-body">
                  <div className="skill-grid">
                    {cat.items.map((skill) => (
                      <div key={skill} className="skill-chip">{skill}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
