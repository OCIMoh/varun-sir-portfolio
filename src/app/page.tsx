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
import { ParallaxHero } from "@/components/ParallaxHero";
import { ScrollSection } from "@/components/ScrollSection";

export default function Home() {
  return (
    <div className="container video-overlay" style={{ position: "relative", zIndex: 1 }}>
      {/* 
        HERO SECTION: Continuous Spatial Immersion 
      */}
      <ParallaxHero>
        <section className="section-xl" style={{ paddingTop: "4vh", paddingBottom: "8vh" }}>
          <RevealGroup>
            <RevealItem>
              <div className="accent-badge" style={{ marginBottom: "1.5rem" }}>
                <span>Distributed Systems &amp; Autonomous Multi-Agent Infrastructure</span>
              </div>
            </RevealItem>
          </RevealGroup>

          <RevealTitle>
            <h1 className="display-1" style={{ maxWidth: "13ch" }}>
              Agentic infra &amp;<br />
              distributed systems.
            </h1>
          </RevealTitle>
          
          <RevealGroup delay={0.25} className="grid-editorial" style={{ marginTop: "var(--spacing-md)" }}>
            <RevealItem className="text-meta">
              Varun Handa <br/>
              Principal Software Architect <br/>
              15 Years Systems Engineering
            </RevealItem>
            <div>
              <RevealItem>
                <p className="text-lead" style={{ marginBottom: "var(--spacing-md)" }}>
                  I focus on the hard distributed-systems problem underneath multi-agent products: getting dozens of agents to plan, act, verify, and learn as one coherent system.
                </p>
              </RevealItem>
              <RevealItem>
                <CursorTrigger state="accent">
                  <Link href="/about" className="btn-editorial">
                    Read engineering philosophy <span className="hover-arrow">→</span>
                  </Link>
                </CursorTrigger>
              </RevealItem>
            </div>
          </RevealGroup>
        </section>
      </ParallaxHero>

      {/* 
        SELECTED ARCHITECTURES: Shared Element Morphs (Barba.js pattern)
      */}
      <ScrollSection className="section" id="work">
        <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Case Studies 2025–2026</span>
            </div>
            <h2 className="display-3">Selected Architectures</h2>
          </RevealItem>
        </RevealGroup>
        
        {/* CASE STUDY 01: JOXY.AI */}
        <RevealGroup className="grid-asymmetric" style={{ marginBottom: "var(--spacing-xl)" }}>
          <div>
            <RevealItem>
              <div className="tag" style={{ marginBottom: "1rem" }}>Feb 2026 – Present</div>
              <SharedElementMorph layoutId="project-title-joxy">
                <h3 className="display-2" style={{ marginBottom: "0.5rem" }}>Joxy.ai</h3>
              </SharedElementMorph>
              <p className="text-meta" style={{ marginBottom: "1.5rem" }}>Chief Technology Officer / Agent OS</p>
              <p className="text-lead" style={{ marginBottom: "2rem" }}>
                Architecting the agent OS for an autonomous marketing workforce. Moving beyond conversational chat into verified, deterministic execution.
              </p>
              <CursorTrigger state="project">
                <Link href="/experience/joxy" className="btn-editorial">
                  Explore full architecture <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>

          <div>
            <RevealItem>
              <CursorTrigger state="project" style={{ width: "100%" }}>
                <Link href="/experience/joxy" style={{ display: "block" }}>
                  <Tilt3DCard className="project-card-interactive">
                    <div className="project-meta-pill">Physical Multi-Agent Routing Engine</div>
                    <ParallaxImage 
                      src="/generated assets/vh-joxy-01-kinetic.png" 
                      alt="Joxy Agent OS - Machined brass routing tracks and dark slate execution nodes" 
                      aspectRatio="16 / 11"
                      layoutId="project-image-joxy"
                    />
                    <div style={{ padding: "1.5rem 1.75rem", background: "var(--bg-card)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="text-meta" style={{ fontSize: "0.72rem" }}>Core Pattern</span>
                          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                            The Watcher Pattern &amp; Scoped Memory
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

        {/* CASE STUDY 02: BOOSTIT */}
        <RevealGroup className="grid-asymmetric" style={{ marginBottom: "var(--spacing-lg)" }}>
          <div>
            <RevealItem>
              <div className="tag" style={{ marginBottom: "1rem" }}>Feb 2025 – Present</div>
              <SharedElementMorph layoutId="project-title-boostit">
                <h3 className="display-2" style={{ marginBottom: "0.5rem" }}>Boostit</h3>
              </SharedElementMorph>
              <p className="text-meta" style={{ marginBottom: "1.5rem" }}>Chief Technology Officer / Async Pipeline</p>
              <p className="text-lead" style={{ marginBottom: "2rem" }}>
                High-throughput async performance-creative pipeline. Turning creative strategy into a deterministic software manufacturing line.
              </p>
              <CursorTrigger state="project">
                <Link href="/experience/boostit" className="btn-editorial">
                  Explore the pipeline <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>

          <div>
            <RevealItem>
              <CursorTrigger state="project" style={{ width: "100%" }}>
                <Link href="/experience/boostit" style={{ display: "block" }}>
                  <Tilt3DCard className="project-card-interactive">
                    <div className="project-meta-pill">Deterministic Video Assembly</div>
                    <ParallaxImage 
                      src="/generated assets/vh-boostit-01-moving-frames.png" 
                      alt="Boostit Kinetic Pipeline - Brushed aluminum rails and dark smoked glass partitions" 
                      aspectRatio="16 / 11"
                      layoutId="project-image-boostit"
                    />
                    <div style={{ padding: "1.5rem 1.75rem", background: "var(--bg-card)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span className="text-meta" style={{ fontSize: "0.72rem" }}>Infrastructure Scale</span>
                          <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginTop: "0.2rem" }}>
                            BullMQ, Redis &amp; 100+ High-Volume Render Queues
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
      </ScrollSection>

      {/* 
        TACTILE SYSTEMS & PHYSICAL RIGOR (Atmospheric Transition)
      */}
      <ScrollSection className="section">
        <RevealGroup className="grid-editorial" style={{ alignItems: "center" }}>
          <div>
            <RevealItem>
              <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
                <span>Philosophy &amp; Execution</span>
              </div>
              <h2 className="display-3" style={{ marginBottom: "1.5rem" }}>
                "Done is a claim.<br/>Verified is a fact."
              </h2>
              <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                Completion requires passing explicit exit criteria, not an agent’s self-report. Without automated verification gates, distributed autonomous systems merely compound error rates over time.
              </p>
              <CursorTrigger>
                <Link href="/about" className="btn-editorial">
                  Explore full engineering tenets <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>

          <div>
            <RevealItem>
              <Tilt3DCard className="project-card-interactive" style={{ maxWidth: "600px" }}>
                <ParallaxImage 
                  src="/generated assets/vh-detail-05-aperture.png" 
                  alt="Architectural travertine louvers with soft grazing light" 
                  aspectRatio="16 / 10"
                />
                <div style={{ padding: "1rem 1.5rem", background: "var(--bg-card)" }}>
                  <p className="text-meta" style={{ fontSize: "0.72rem" }}>
                    Fig 01.3 / Architectural Structural Rigor &amp; Tolerance
                  </p>
                </div>
              </Tilt3DCard>
            </RevealItem>
          </div>
        </RevealGroup>
      </ScrollSection>

      {/* 
        TECHNICAL JOURNAL: Curated Insights with Stock Thumbnails
      */}
      <ScrollSection className="section" id="writing">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Writing</span>
            </div>
            <h2 className="display-3">Technical Journal</h2>
            <p className="text-meta" style={{ marginTop: "1rem" }}>
              Systems Thinking &amp; Architecture
            </p>
          </RevealItem>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-md)" }}>
            <RevealItem>
              <CursorTrigger className="project-card" style={{ display: "block" }}>
                <Link href="/writing" style={{ display: "block", borderBottom: "1px solid var(--border-color)", paddingBottom: "var(--spacing-sm)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center" }}>
                    <div>
                      <span className="text-meta" style={{ display: "block", marginBottom: "0.5rem" }}>Sep 2026 / Agentic Infra</span>
                      <h3 className="display-3" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        Reliability Over Illusion: The Watcher Pattern <span className="hover-arrow" style={{ opacity: 0.5 }}>→</span>
                      </h3>
                      <p className="text-body">
                        Heartbeats, bounded retries, and explicit state machines. Why long-running agentic tasks require distributed systems rigor.
                      </p>
                    </div>
                    <div style={{ width: "90px", height: "90px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }} className="image-container-editorial">
                      <img src="/generated assets/vh-economics-01-balance.png" alt="Watcher pattern architectural stone" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </Link>
              </CursorTrigger>
            </RevealItem>

            <RevealItem>
              <CursorTrigger className="project-card" style={{ display: "block" }}>
                <Link href="/writing" style={{ display: "block", borderBottom: "1px solid var(--border-color)", paddingBottom: "var(--spacing-sm)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "1.5rem", alignItems: "center" }}>
                    <div>
                      <span className="text-meta" style={{ display: "block", marginBottom: "0.5rem" }}>Jul 2026 / Economics</span>
                      <h3 className="display-3" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        Big Models Plan, Small Models Execute <span className="hover-arrow" style={{ opacity: 0.5 }}>→</span>
                      </h3>
                      <p className="text-body">
                        A concrete framework for reducing LLM token costs by up to 90% without sacrificing capability or output accuracy.
                      </p>
                    </div>
                    <div style={{ width: "90px", height: "90px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }} className="image-container-editorial">
                      <img src="/generated assets/vh-joxy-02-memory-layers.png" alt="Economics architectural cantilever" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </Link>
              </CursorTrigger>
            </RevealItem>
            
            <RevealItem>
              <CursorTrigger state="accent">
                <Link href="/writing" className="btn-editorial" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
                  View complete index (4 articles) <span className="hover-arrow">→</span>
                </Link>
              </CursorTrigger>
            </RevealItem>
          </div>
        </RevealGroup>
      </ScrollSection>
    </div>
  );
}
