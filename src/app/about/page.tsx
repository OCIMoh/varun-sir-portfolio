import Link from "next/link";
import { RevealGroup, RevealItem, RevealTitle, Tilt3DCard, ParallaxImage } from "@/components/Motion";
import { CursorTrigger } from "@/components/Cursor";

export default function AboutPage() {
  return (
    <div className="container">
      <section className="section-xl" style={{ paddingBottom: "4rem" }}>
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1rem" }}>
              <span>Philosophy &amp; Biography</span>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealTitle>
          <h1 className="display-1">The Architecture<br/>of Reliability</h1>
        </RevealTitle>

        <RevealGroup delay={0.2}>
          <RevealItem>
            <p className="text-lead" style={{ maxWidth: "48ch", marginTop: "1rem" }}>
              15 years engineering distributed backends, real-time queues, and resilient multi-agent infrastructure.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Visual Break: Architectural Travertine Exhibit */}
      <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
        <RevealItem>
          <Tilt3DCard className="project-card-interactive">
            <ParallaxImage
              src="/images/architectural%20image.png"
              alt="Architectural travertine louvers with soft grazing light"
              aspectRatio="21 / 9"
            />
            <div style={{ padding: "1.25rem 2rem", background: "var(--bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="text-meta">Physical Architecture / Form, Geometry &amp; Structural Tolerances</span>
              <span className="accent-badge">System Philosophy</span>
            </div>
          </Tilt3DCard>
        </RevealItem>
      </RevealGroup>

      <div className="divider"></div>

      <section className="section">
        <RevealGroup className="grid-editorial">
          <div>
            <RevealItem>
              <h2 className="display-3">Varun Handa</h2>
              <p className="text-meta" style={{ marginTop: "0.5rem", marginBottom: "1.5rem" }}>
                Principal Architect<br/>15 Years Experience
              </p>
              <div style={{ maxWidth: "280px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)", marginBottom: "1.5rem" }}>
                <img 
                  src="/images/photo.png" 
                  alt="Varun Handa - Executive Portrait" 
                  style={{ width: "100%", height: "340px", objectFit: "cover", filter: "contrast(1.04)" }} 
                />
                <div style={{ padding: "0.5rem 0.75rem", background: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}>
                  <span className="text-meta" style={{ fontSize: "0.68rem" }}>Executive Portrait // San Francisco</span>
                </div>
              </div>
            </RevealItem>
          </div>
          
          <div>
            <RevealItem>
              <p className="text-lead" style={{ marginBottom: "2rem" }}>
                I specialize in the hard distributed-systems problem underneath multi-agent products. It's easy to build a demo that generates plausible-sounding output. It's incredibly difficult to build a reliable system where many agents can plan, act, verify, and learn as one coherent unit.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-body" style={{ marginBottom: "2rem", maxWidth: "100%" }}>
                My work sits at the intersection of AI generation and hard systems engineering—applying execution-reliability thinking to high-volume AI pipelines, agentic memory, and cost-efficient model routing.
              </p>
            </RevealItem>
            <RevealItem>
              <CursorTrigger state="accent">
                <Link href="/experience" className="btn-editorial">
                  Explore selected architectures <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <section className="section">
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Tenets</span>
            </div>
            <h2 className="display-3" style={{ marginBottom: "var(--spacing-lg)" }}>Engineering Philosophy</h2>
          </RevealItem>
        </RevealGroup>
        
        <RevealGroup className="grid-asymmetric" style={{ marginBottom: "var(--spacing-lg)" }}>
          <RevealItem>
            <span className="text-meta">01 / Verification</span>
          </RevealItem>
          <div>
            <RevealItem>
              <h3 className="display-3" style={{ marginBottom: "1rem", fontSize: "2rem" }}>Done is a claim. Verified is a fact.</h3>
              <p className="text-body">
                Completion requires passing explicit exit criteria, not just an agent's self-report. Without automated verification gates, autonomous systems merely compound errors over time.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>

        <RevealGroup className="grid-asymmetric" style={{ marginBottom: "var(--spacing-lg)" }}>
          <RevealItem>
            <span className="text-meta">02 / Economics</span>
          </RevealItem>
          <div>
            <RevealItem>
              <h3 className="display-3" style={{ marginBottom: "1rem", fontSize: "2rem" }}>Big models plan. Small models execute.</h3>
              <p className="text-body">
                Frontier models should handle reasoning and plan formulation; smaller, targeted models handle repetitive execution. This architectural separation slashes token bills by up to 90% without degrading output reliability.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>

        <RevealGroup className="grid-asymmetric">
          <RevealItem>
            <span className="text-meta">03 / State</span>
          </RevealItem>
          <div>
            <RevealItem>
              <h3 className="display-3" style={{ marginBottom: "1rem", fontSize: "2rem" }}>The Watcher Pattern</h3>
              <p className="text-body">
                Long-running tasks require heartbeats, stale-task detection, bounded retries, and explicit state machines. They cannot be left to an LLM's open-ended judgment.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <section className="section">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Track Record</span>
            </div>
            <h2 className="display-3">Career Timeline</h2>
          </RevealItem>
          
          <div>
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-md)", borderBottom: "1px solid var(--border-color)", paddingBottom: "var(--spacing-md)" }}>
                <span className="text-meta">Feb 2026 – Present</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0" }}>Chief Technology Officer, Joxy.ai</h3>
                <p className="text-body">Architected the agent OS for an autonomous AI marketing workforce replacing specialized agency silos.</p>
              </div>
            </RevealItem>
            
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-md)", borderBottom: "1px solid var(--border-color)", paddingBottom: "var(--spacing-md)" }}>
                <span className="text-meta">Feb 2025 – Present</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0" }}>Chief Technology Officer, Boostit</h3>
                <p className="text-body">Built the end-to-end async video generation and creative pipeline infrastructure operating at 100+ videos/month.</p>
              </div>
            </RevealItem>

            <RevealItem>
              <div>
                <span className="text-meta">2011 – 2025</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0" }}>13+ Years of Systems Engineering</h3>
                <p className="text-body">Various engineering leadership roles building high-throughput backends, fault-tolerant databases, and distributed infrastructure.</p>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>
    </div>
  );
}
