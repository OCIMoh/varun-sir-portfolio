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
    <div className="container" style={{ position: "relative", zIndex: 1 }}>
      {/* 
        HERO SECTION: Continuous Spatial Immersion 
      */}
      <ParallaxHero>
        <section className="section-xl" style={{ paddingTop: "4vh", paddingBottom: "8vh" }}>
          <RevealGroup delay={0.2}>
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
          
          <RevealGroup delay={0.2} className="grid-editorial" style={{ marginTop: "var(--spacing-md)" }}>
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
        <RevealGroup delay={0.2} style={{ marginBottom: "var(--spacing-lg)", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "0.5rem" }}>
              <span>Case Studies 2025–2026</span>
            </div>
            <h2 className="display-3">Selected Architectures</h2>
            
            <div className="animate-bounce" style={{ marginTop: "4rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
              <span style={{ fontSize: "1.2rem" }}>↓</span>
              <span className="text-meta" style={{ letterSpacing: "0.05em" }}>Scroll to explore</span>
            </div>
          </RevealItem>
        </RevealGroup>
      </ScrollSection>
        
      {/* CASE STUDY 01: JOXY.AI */}
      <ScrollSection className="section">
        <RevealGroup delay={0.2} className="grid-asymmetric" style={{ marginBottom: "var(--spacing-xl)", minHeight: "100vh", alignItems: "center" }}>
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
                      src="/generated-assets/joxy_ui_dashboard.jpg" 
                      alt="Joxy Agent Dashboard UI" 
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
      </ScrollSection>

      {/* CASE STUDY 02: BOOSTIT */}
      <ScrollSection className="section">
        <RevealGroup delay={0.2} className="grid-asymmetric" style={{ marginBottom: "var(--spacing-lg)", minHeight: "100vh", alignItems: "center" }}>
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
                      src="/generated-assets/boostit_ui_pipeline.jpg" 
                      alt="Boostit Video Pipeline UI" 
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
        <RevealGroup delay={0.2} style={{ minHeight: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1.5rem" }}>
              <span>Philosophy &amp; Execution</span>
            </div>
            <h2 className="display-2" style={{ marginBottom: "2.5rem", fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1.1 }}>
              "Done is a claim.<br/>Verified is a fact."
            </h2>
            <p className="text-lead" style={{ marginBottom: "3rem", maxWidth: "700px", margin: "0 auto 3rem auto" }}>
              Completion requires passing explicit exit criteria, not an agent’s self-report. Without automated verification gates, distributed autonomous systems merely compound error rates over time.
            </p>
            <CursorTrigger>
              <Link href="/about" className="btn-editorial">
                Explore full engineering tenets <span className="hover-arrow">→</span>
              </Link>
            </CursorTrigger>
          </RevealItem>
        </RevealGroup>
      </ScrollSection>

      {/* 
        TECHNICAL JOURNAL: Curated Insights with Stock Thumbnails
      */}
      <ScrollSection className="section" id="writing">
        <RevealGroup delay={0.2} className="grid-editorial" style={{ minHeight: "100vh", alignItems: "center" }}>
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
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", alignItems: "center" }}>
                    <div>
                      <span className="text-meta" style={{ display: "block", marginBottom: "0.5rem" }}>Sep 2026 / Agentic Infra</span>
                      <h3 className="display-3" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        Reliability Over Illusion: The Watcher Pattern <span className="hover-arrow" style={{ opacity: 0.5 }}>→</span>
                      </h3>
                      <p className="text-body">
                        Heartbeats, bounded retries, and explicit state machines. Why long-running agentic tasks require distributed systems rigor.
                      </p>
                    </div>
                  </div>
                </Link>
              </CursorTrigger>
            </RevealItem>

            <RevealItem>
              <CursorTrigger className="project-card" style={{ display: "block" }}>
                <Link href="/writing" style={{ display: "block", borderBottom: "1px solid var(--border-color)", paddingBottom: "var(--spacing-sm)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem", alignItems: "center" }}>
                    <div>
                      <span className="text-meta" style={{ display: "block", marginBottom: "0.5rem" }}>Jul 2026 / Economics</span>
                      <h3 className="display-3" style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                        Big Models Plan, Small Models Execute <span className="hover-arrow" style={{ opacity: 0.5 }}>→</span>
                      </h3>
                      <p className="text-body">
                        A concrete framework for reducing LLM token costs by up to 90% without sacrificing capability or output accuracy.
                      </p>
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
      {/* 
        FINAL CTA 
      */}
      <ScrollSection className="section" id="cta">
        <RevealGroup delay={0.2} style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <RevealItem>
            <h2
              className="display-1"
              style={{
                fontSize: "clamp(3rem, 8vw, 8rem)",
                marginBottom: "var(--spacing-md)",
                maxWidth: "1400px",
                lineHeight: 1.1,
                fontFamily: "var(--font-serif)",
                letterSpacing: "-0.02em",
              }}
            >
              Build what scales.
            </h2>
          </RevealItem>
          
          <RevealItem>
            <div style={{ marginTop: "4rem" }}>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "3rem",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    maxWidth: "480px",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    marginBottom: "1rem"
                  }}
                >
                  Systems, products, infrastructure and ideas that need
                  more than the obvious solution.
                </div>

                <CursorTrigger state="accent">
                  <Link
                    href="/about"
                    className="btn-editorial"
                    style={{ 
                      fontSize: "1.1rem",
                      padding: "1rem 2rem",
                      background: "var(--text-primary)",
                      color: "var(--bg-color)"
                    }}
                  >
                    Start a conversation
                    <span className="hover-arrow" style={{ marginLeft: "0.5rem" }}>↗</span>
                  </Link>
                </CursorTrigger>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </ScrollSection>
    </div>
  );
}
