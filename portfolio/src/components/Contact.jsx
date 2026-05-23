import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="section section-surface">
      <div className="container contact-container">
        <div className="section-label">Let's Connect</div>
        <div className="section-title">Get In Touch</div>
        <div className="section-line" />

        <p className="contact-sub">
          I'm actively looking for Data Science, ML Engineering, or Data Analytics roles.
          If you have an opportunity or just want to say hello, my inbox is open.
        </p>

        <div className="contact-cards">
          <a href={`mailto:${personal.email}`} className="contact-card">
            <div className="cc-icon">✉</div>
            <div className="cc-label">Email</div>
            <div className="cc-value">{personal.email}</div>
          </a>

          <a href={`tel:${personal.phone}`} className="contact-card">
            <div className="cc-icon">📞</div>
            <div className="cc-label">Phone</div>
            <div className="cc-value">{personal.phone}</div>
          </a>

          <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-card">
            <div className="cc-icon">in</div>
            <div className="cc-label">LinkedIn</div>
            <div className="cc-value">Connect with me</div>
          </a>

          <a href={personal.github} target="_blank" rel="noreferrer" className="contact-card">
            <div className="cc-icon">⌥</div>
            <div className="cc-label">GitHub</div>
            <div className="cc-value">gkaveenkumar</div>
          </a>
        </div>

        <a
          href={personal.resumeFile}
          download="Kaveen_Kumar_Resume.pdf"
          className="btn-primary resume-btn"
        >
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
}
