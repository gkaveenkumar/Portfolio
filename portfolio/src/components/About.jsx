import { about, stats, timeline } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section section-surface">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="section-title">Who I Am</div>
        <div className="section-line" />

        <div className="two-col">
          {/* Left: text + stats */}
          <div>
            {about.split("\n\n").map((para, i) => (
              <p key={i} className="about-text" style={{ marginBottom: "1.2rem" }}>
                {para}
              </p>
            ))}

            <div className="stat-grid">
              {stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat-n">{s.value}</div>
                  <div className="stat-l">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: timeline */}
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="tl-item">
                <div className="tl-date">{item.date}</div>
                <div className="tl-role">{item.role}</div>
                <div className="tl-company">{item.company}</div>
                <div className="tl-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
