import Link from "next/link";
import { 
  RevealGroup, 
  RevealItem, 
  RevealTitle, 
  Tilt3DCard, 
  ParallaxImage,
  SharedElementMorph 
} from "@/components/Motion";
import { CursorTrigger } from "@/components/Cursor";

export default function JoxyPage() {
  return (
    <div className="container">
      <div style={{ padding: "var(--spacing-md) 0 1rem" }}>
        <CursorTrigger>
          <Link href="/experience" className="btn-editorial hover-arrow-container" style={{ border: "none", color: "var(--text-secondary)", paddingLeft: 0 }}>
            <span className="hover-arrow-left" style={{ display: "inline-block", marginRight: "0.5rem", transition: "transform 0.4s var(--ease-editorial)" }}>←</span> 
            ALL ARCHITECTURES
          </Link>
        </CursorTrigger>
      </div>

      <section className="section-xl" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1rem" }}>
              <span>Case Study / Distributed Multi-Agent Systems</span>
            </div>
            <p className="text-meta">Chief Technology Officer / Feb 2026 – Present</p>
          </RevealItem>
        </RevealGroup>
        
        <RevealTitle>
          <SharedElementMorph layoutId="project-title-joxy">
            <h1 className="display-1" style={{ marginTop: "1rem" }}>Joxy.ai</h1>
          </SharedElementMorph>
        </RevealTitle>
        
        <RevealGroup delay={0.3}>
          <RevealItem>
            <p className="display-3" style={{ maxWidth: "26ch", marginTop: "1.5rem" }}>
              An autonomous AI marketing workforce replacing specialized silos with a "one-person giant."
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Hero Visual Exhibit with Shared Element Morph */}
      <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
        <RevealItem>
          <Tilt3DCard className="project-card-interactive">
            <ParallaxImage
              src="/generated assets/vh-joxy-01-kinetic.png"
              alt="Joxy Agent OS Architecture - Physical brass routing and slate execution nodes"
              aspectRatio="21 / 9"
              layoutId="project-image-joxy"
            />
            <div style={{ padding: "1.25rem 2rem", background: "var(--bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="text-meta">Fig 02.1 / The Joxy Agent OS Core Routing Architecture</span>
              <span className="accent-badge">Operational Architecture</span>
            </div>
          </Tilt3DCard>
        </RevealItem>
      </RevealGroup>

      <div className="divider"></div>

      <section className="section">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <h2 className="display-3">The Problem</h2>
          </RevealItem>
          <div>
            <RevealItem>
              <p className="text-lead">
                AI chatbots provide advice; businesses need reliable execution.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-body" style={{ marginTop: "1.5rem" }}>
                Advice isn't the bottleneck in modern marketing—execution is. Getting autonomous agents to execute complex marketing tasks across Meta Ads, Google Ads, and content channels without hallucination or cascading error loops is a classic distributed systems problem that cannot be solved with chat prompts alone.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      {/* System Deep-Dive with Stock Architecture Visuals */}
      <section className="section">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <h2 className="display-3">Architecture</h2>
          </RevealItem>
          <div>
            {/* Architecture Pillar 1 */}
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <span className="text-meta">01 / State &amp; Memory</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>Agentic Memory</h3>
                <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                  Scoped stores with consolidation, supersession, and controlled forgetting. Contradictory old facts are cleanly superseded rather than kept in prompt history, preventing context contamination.
                </p>
                <div style={{ maxWidth: "600px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <img src="/generated assets/vh-joxy-02-memory-layers.png" alt="Scoped Memory Spatial Architecture" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                  <div style={{ padding: "0.75rem 1.25rem", background: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}>
                    <span className="text-meta" style={{ fontSize: "0.7rem" }}>Fig 02.2 / Scoped Memory Layering &amp; Supersession Plane</span>
                  </div>
                </div>
              </div>
            </RevealItem>
            
            {/* Architecture Pillar 2 */}
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <span className="text-meta">02 / Execution Rigor</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>The Watcher Pattern</h3>
                <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                  Long tasks use a Worker/Watcher split. Workers emit periodic heartbeats; Watchers monitor for staleness, enforce bounded retries, and guarantee explicit exit criteria before any state commit.
                </p>
                <div style={{ maxWidth: "600px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <img src="/generated assets/vh-detail-02-blue-refraction.png" alt="Mechanical Watcher Heartbeat Diagram" style={{ width: "100%", height: "240px", objectFit: "cover" }} />
                  <div style={{ padding: "0.75rem 1.25rem", background: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}>
                    <span className="text-meta" style={{ fontSize: "0.7rem" }}>Fig 02.3 / Worker-Watcher Distributed Heartbeat Loop</span>
                  </div>
                </div>
              </div>
            </RevealItem>
            
            {/* Architecture Pillar 3 */}
            <RevealItem>
              <div>
                <span className="text-meta">03 / Inference Economics</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>Model Routing</h3>
                <p className="text-body">
                  "Big models plan. Small models execute." Frontier reasoning models establish the plan and verification gates; smaller, fine-tuned models execute narrow sub-tasks, achieving a ~90% reduction in inference costs.
                </p>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <section className="section-xl">
        <RevealGroup className="grid-asymmetric">
          <RevealItem>
            <h2 className="display-3">The Agent Roster</h2>
            <p className="text-meta" style={{ marginTop: "1rem" }}>Autonomous Specialist Nodes</p>
          </RevealItem>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--accent-cobalt)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Kat</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>Meta Ads management &amp; audience targeting</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Rex</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>Google Search &amp; Performance Max optimization</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Scout</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>Competitor intelligence &amp; trend research</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Atlas</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>SEO &amp; Generative Engine Optimization (GEO)</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Scribble</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>Direct-response ad copywriting &amp; angles</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="text-meta" style={{ color: "var(--text-primary)", fontWeight: 600 }}>Pulse</p>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>Cross-platform event webhooks &amp; execution</p>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <div style={{ padding: "var(--spacing-md) 0 var(--spacing-xl)" }}>
        <CursorTrigger state="project">
          <Link href="/experience/boostit" className="btn-editorial" style={{ fontSize: "1rem" }}>
            Next Case Study: Boostit Pipeline <span className="hover-arrow">→</span>
          </Link>
        </CursorTrigger>
      </div>
    </div>
  );
}
