import { RevealGroup, RevealItem, RevealTitle, Tilt3DCard, ParallaxImage } from "@/components/Motion";
import { CursorTrigger } from "@/components/Cursor";

export default function ContactPage() {
  return (
    <div className="container">
      <section className="section-xl" style={{ paddingBottom: "3rem" }}>
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1rem" }}>
              <span>Executive Advisory &amp; Architecture</span>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealTitle>
          <h1 className="display-1">Start a<br/>Conversation</h1>
        </RevealTitle>

        <RevealGroup delay={0.2}>
          <RevealItem>
            <p className="text-lead" style={{ maxWidth: "48ch", marginTop: "1rem" }}>
              Open to technical advisory, fractional CTO engagements, and sparring on difficult distributed systems problems.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Visual Anchor: Pavilion to the Horizon */}
      <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
        <RevealItem>
          <Tilt3DCard className="project-card-interactive">
            <ParallaxImage
              src="/images/stock/contact_pavilion.jpg"
              alt="Architectural pavilion overlooking calm horizon"
              aspectRatio="21 / 8"
            />
            <div style={{ padding: "1rem 2rem", background: "var(--bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="text-meta">San Francisco, CA / Global Remote Advisory</span>
              <span className="accent-badge">Available Q4 2026</span>
            </div>
          </Tilt3DCard>
        </RevealItem>
      </RevealGroup>

      <div className="divider"></div>

      <section className="section">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <h2 className="display-3">Engagement Scope</h2>
            <p className="text-meta" style={{ marginTop: "1rem" }}>Collaboration Models</p>
          </RevealItem>
          <div>
            <ul style={{ listStyleType: "none", marginBottom: "var(--spacing-lg)" }}>
              <RevealItem>
                <li style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                  <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>01 // High Leverage</div>
                  <strong style={{ display: "block", marginBottom: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.75rem" }}>
                    Advisory &amp; Systems Consulting
                  </strong>
                  <p className="text-body">
                    Guiding technical founders and executive engineering teams on multi-agent architectures, async video rendering pipelines, and model-routing cost optimizations.
                  </p>
                </li>
              </RevealItem>
              <RevealItem>
                <li style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                  <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>02 // Leadership</div>
                  <strong style={{ display: "block", marginBottom: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.75rem" }}>
                    Fractional CTO &amp; Technical Due Diligence
                  </strong>
                  <p className="text-body">
                    Steering zero-to-one architectural roadmaps, vetting core engineering hires, and auditing AI systems for mission-critical reliability.
                  </p>
                </li>
              </RevealItem>
              <RevealItem>
                <li style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
                  <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>03 // Keynotes</div>
                  <strong style={{ display: "block", marginBottom: "0.5rem", fontFamily: "var(--font-serif)", fontSize: "1.75rem" }}>
                    Technical Keynotes &amp; Private Workshops
                  </strong>
                  <p className="text-body">
                    Delivering in-depth technical talks on "Reliability Over Illusion" and distributed systems patterns for enterprise AI leaders.
                  </p>
                </li>
              </RevealItem>
            </ul>

            <RevealItem>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", alignItems: "center" }}>
                <CursorTrigger state="accent">
                  <a href="mailto:contact@varunhanda.com" className="btn-editorial" style={{ fontSize: "1.05rem" }}>
                    contact@varunhanda.com <span className="hover-arrow">→</span>
                  </a>
                </CursorTrigger>
                <CursorTrigger>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-editorial" style={{ fontSize: "1.05rem" }}>
                    LinkedIn ↗
                  </a>
                </CursorTrigger>
                <CursorTrigger>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-editorial" style={{ fontSize: "1.05rem" }}>
                    GitHub ↗
                  </a>
                </CursorTrigger>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>
    </div>
  );
}
