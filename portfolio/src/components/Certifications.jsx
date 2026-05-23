import { certifications, achievements } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-label">Credentials</div>
        <div className="section-title">Certifications &amp; Achievements</div>
        <div className="section-line" />

        <div className="two-col">
          {/* Certifications */}
          <div>
            <h3 className="sub-heading">Certifications</h3>
            {certifications.map((cert, i) => (
              <div key={i} className="cert-card">
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <div className="cert-meta">
                  <span>{cert.date}</span>
                  {cert.score && <span className="cert-score">{cert.score}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div>
            <h3 className="sub-heading">Highlights</h3>
            <ul className="achievements-list">
              {achievements.map((a, i) => (
                <li key={i} className="achievement-item">
                  <span className="ach-dot" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
