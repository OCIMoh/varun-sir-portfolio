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

export default function ExperiencePage() {
  return (
    <div className="container">
      <section className="section-xl" style={{ paddingBottom: "4rem" }}>
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1rem" }}>
              <span>Case Studies &amp; Architectures</span>
            </div>
          </RevealItem>
        </RevealGroup>
        
        <RevealTitle>
          <h1 className="display-1">Selected<br/>Experience</h1>
        </RevealTitle>

        <RevealGroup delay={0.2}>
          <RevealItem>
            <p className="text-lead" style={{ maxWidth: "50ch", marginTop: "1rem" }}>
              High-leverage engineering leadership across multi-agent orchestration, asynchronous pipeline infrastructure, and production distributed systems.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      {/* JOXY.AI CASE STUDY CARD WITH SHARED ELEMENT MORPH */}
      <section className="section-xl" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <RevealGroup className="grid-asymmetric">
          <div>
            <RevealItem>
              <div className="tag" style={{ marginBottom: "1rem" }}>Feb 2026 – Present</div>
              <SharedElementMorph layoutId="project-title-joxy">
                <h2 className="display-2" style={{ marginBottom: "0.5rem" }}>Joxy.ai</h2>
              </SharedElementMorph>
              <p className="text-meta" style={{ marginBottom: "1.5rem" }}>Chief Technology Officer / Agent OS</p>
              
              <h3 className="display-3" style={{ marginBottom: "1rem", fontSize: "2rem" }}>Autonomous Marketing Workforce</h3>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                Architected the company's agent OS from the ground up, focusing on multi-agent orchestration, scoped memory stores with controlled forgetting, model-routing economics, and task-verification layers.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
                <span className="tag">The Watcher Pattern</span>
                <span className="tag">Scoped Agentic Memory</span>
                <span className="tag">Model Routing (90% Cost Cut)</span>
              </div>

              <CursorTrigger state="project">
                <Link href="/experience/joxy" className="btn-editorial">
                  Read full case study <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>

          <div>
            <RevealItem>
              <CursorTrigger state="project" style={{ width: "100%" }}>
                <Link href="/experience/joxy" style={{ display: "block" }}>
                  <Tilt3DCard className="project-card-interactive">
                    <div className="project-meta-pill">Joxy Agent OS Architecture</div>
                    <ParallaxImage 
                      src="/images/joxy_agent_os.jpg" 
                      alt="Joxy.ai Multi-Agent Routing Sculpture" 
                      aspectRatio="16 / 10"
                      layoutId="project-image-joxy"
                    />
                    <div style={{ padding: "1.5rem 1.75rem", background: "var(--bg-card)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="text-meta" style={{ fontSize: "0.72rem" }}>Multi-Agent System</span>
                          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                            Kat, Rex, Scout, Atlas, Scribble, Pulse
                          </p>
                        </div>
                        <span className="hover-arrow" style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>→</span>
                      </div>
                    </div>
                  </Tilt3DCard>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      {/* BOOSTIT CASE STUDY CARD WITH SHARED ELEMENT MORPH */}
      <section className="section-xl" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <RevealGroup className="grid-asymmetric">
          <div>
            <RevealItem>
              <div className="tag" style={{ marginBottom: "1rem" }}>Feb 2025 – Present</div>
              <SharedElementMorph layoutId="project-title-boostit">
                <h2 className="display-2" style={{ marginBottom: "0.5rem" }}>Boostit</h2>
              </SharedElementMorph>
              <p className="text-meta" style={{ marginBottom: "1.5rem" }}>Chief Technology Officer / Async Pipeline</p>

              <h3 className="display-3" style={{ marginBottom: "1rem", fontSize: "2rem" }}>Performance-Creative Infrastructure</h3>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                Bridging the gap between AI generation and a robust asynchronous worker system to produce high-volume video pipelines deterministically at 100+ videos/month capacity.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
                <span className="tag">Deterministic Pipeline</span>
                <span className="tag">BullMQ &amp; Redis Queue</span>
                <span className="tag">FFmpeg Cloud Workers</span>
              </div>

              <CursorTrigger state="project">
                <Link href="/experience/boostit" className="btn-editorial">
                  Read full case study <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>

          <div>
            <RevealItem>
              <CursorTrigger state="project" style={{ width: "100%" }}>
                <Link href="/experience/boostit" style={{ display: "block" }}>
                  <Tilt3DCard className="project-card-interactive">
                    <div className="project-meta-pill">Boostit Video Assembly Line</div>
                    <ParallaxImage 
                      src="/images/boostit_pipeline.jpg" 
                      alt="Boostit Kinetic Video Assembly Pipeline" 
                      aspectRatio="16 / 10"
                      layoutId="project-image-boostit"
                    />
                    <div style={{ padding: "1.5rem 1.75rem", background: "var(--bg-card)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="text-meta" style={{ fontSize: "0.72rem" }}>Deterministic Flow</span>
                          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "1rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                            Context → Strategy → Script → AI → FFmpeg → Variations
                          </p>
                        </div>
                        <span className="hover-arrow" style={{ fontSize: "1.2rem", color: "var(--text-primary)" }}>→</span>
                      </div>
                    </div>
                  </Tilt3DCard>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      {/* ARCHIVED / SELECT ENTERPRISE ARCHITECTURES */}
      <section className="section-xl" style={{ paddingTop: "2rem" }}>
        <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Historical Systems (2018–2024)</span>
            </div>
            <h2 className="display-3">Select Enterprise Systems</h2>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="grid-editorial" style={{ gap: "var(--spacing-lg)" }}>
          <RevealItem>
            <Tilt3DCard className="project-card-interactive">
              <div className="project-meta-pill">Distributed Event Mesh</div>
              <ParallaxImage
                src="/images/stock/archived_mesh.jpg"
                alt="Distributed Event Mesh Architecture"
                aspectRatio="16 / 10"
              />
              <div style={{ padding: "1.5rem", background: "var(--bg-card)" }}>
                <span className="text-meta">High-Throughput Streaming</span>
                <h3 className="display-3" style={{ fontSize: "1.6rem", margin: "0.5rem 0" }}>Real-time Event Broker Mesh</h3>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>
                  Architected a zero-loss distributed streaming backbone processing 45k events/sec with bounded latency and strict ordering across dual-region clusters.
                </p>
              </div>
            </Tilt3DCard>
          </RevealItem>

          <RevealItem>
            <Tilt3DCard className="project-card-interactive">
              <div className="project-meta-pill">Financial State Machine</div>
              <ParallaxImage
                src="/images/stock/archived_ledger.jpg"
                alt="Transactional Ledger Core"
                aspectRatio="16 / 10"
              />
              <div style={{ padding: "1.5rem", background: "var(--bg-card)" }}>
                <span className="text-meta">Consensus &amp; Replication</span>
                <h3 className="display-3" style={{ fontSize: "1.6rem", margin: "0.5rem 0" }}>Resilient Transaction Ledger</h3>
                <p className="text-body" style={{ fontSize: "0.9rem" }}>
                  Designed an immutable double-entry ledger state machine with cryptographic audit trails and active-active raft replication for enterprise fintech compliance.
                </p>
              </div>
            </Tilt3DCard>
          </RevealItem>
        </RevealGroup>
      </section>
    </div>
  );
}
