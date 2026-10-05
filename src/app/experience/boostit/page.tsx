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

export default function BoostitPage() {
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
              <span>Case Study / Asynchronous Cloud Pipelines</span>
            </div>
            <p className="text-meta">Chief Technology Officer / Feb 2025 – Present</p>
          </RevealItem>
        </RevealGroup>

        <RevealTitle>
          <SharedElementMorph layoutId="project-title-boostit">
            <h1 className="display-1" style={{ marginTop: "1rem" }}>Boostit</h1>
          </SharedElementMorph>
        </RevealTitle>
        
        <RevealGroup delay={0.3}>
          <RevealItem>
            <p className="display-3" style={{ maxWidth: "26ch", marginTop: "1.5rem" }}>
              An AI-powered performance-creative production system for high-growth DTC brands.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Hero Visual Exhibit with Shared Element Morph */}
      <RevealGroup style={{ marginBottom: "var(--spacing-lg)" }}>
        <RevealItem>
          <Tilt3DCard className="project-card-interactive">
            <ParallaxImage
              src="/generated-assets/boostit_ui_pipeline.jpg"
              alt="Boostit Video Pipeline UI - Multi-track timeline and preview player"
              aspectRatio="21 / 9"
              layoutId="project-image-boostit"
            />
            <div style={{ padding: "1.25rem 2rem", background: "var(--bg-card)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="text-meta">Fig 02.2 / The Boostit Deterministic Video Assembly UI</span>
              <span className="accent-badge">100+ High-Volume Render Capacity</span>
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
                Creative Velocity is the primary bottleneck for paid media scale.
              </p>
            </RevealItem>
            <RevealItem>
              <p className="text-body" style={{ marginTop: "1.5rem" }}>
                Traditional ad creative production is too slow and human-intensive to keep up with audience creative fatigue on modern algorithmic platforms. DTC brands need massive, tested creative iterations without compromising visual fidelity or brand compliance.
              </p>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      {/* Infrastructure Deep-Dive with Visuals */}
      <section className="section">
        <RevealGroup className="grid-editorial">
          <RevealItem>
            <h2 className="display-3">Infrastructure</h2>
          </RevealItem>
          <div>
            {/* Step 1 */}
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <span className="text-meta">01 / Process Engineering</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>The Deterministic Pipeline</h3>
                <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                  Bridged generative AI (Google Veo, diffusion models) with rigid software engineering. The pipeline transitions deterministically through 7 discrete stages: Context → Strategy → Script → AI Generation → FFmpeg Stitching → Variations → Automated Delivery.
                </p>
                <div style={{ maxWidth: "600px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <img src="/generated-assets/boostit_ui_matrix.jpg" alt="Combinatorial Modular Variation UI - Grid of video variations" style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "top" }} />
                  <div style={{ padding: "0.75rem 1.25rem", background: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}>
                    <span className="text-meta" style={{ fontSize: "0.7rem" }}>Fig 02.4 / Combinatorial Modular Variation Matrix</span>
                  </div>
                </div>
              </div>
            </RevealItem>
            
            {/* Step 2 */}
            <RevealItem>
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <span className="text-meta">02 / Distributed Compute</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>Asynchronous Workers</h3>
                <p className="text-body" style={{ marginBottom: "1.5rem" }}>
                  Engineered distributed worker infrastructure using BullMQ, Redis clusters, and headless FFmpeg rendering nodes to process concurrent video renders asynchronously without thread blocking or memory leaks.
                </p>
                <div style={{ maxWidth: "600px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)" }}>
                  <img src="/generated-assets/boostit_ui_compute.jpg" alt="Distributed Compute Dashboard - Server load and render queues" style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "top" }} />
                  <div style={{ padding: "0.75rem 1.25rem", background: "var(--bg-card)", borderTop: "1px solid var(--border-color)" }}>
                    <span className="text-meta" style={{ fontSize: "0.7rem" }}>Fig 02.5 / Async Node Cluster Dashboard (BullMQ &amp; Redis)</span>
                  </div>
                </div>
              </div>
            </RevealItem>

            {/* Step 3 */}
            <RevealItem>
              <div>
                <span className="text-meta">03 / Dynamic Composition</span>
                <h3 className="display-3" style={{ fontSize: "2rem", margin: "0.5rem 0 1rem" }}>Modular Asset Assembly</h3>
                <p className="text-body">
                  Decoupled video components (hooks, body demonstrations, call-to-action cards, audio tracks) into programmatic layers, enabling exponential combinatorial video variation generation on demand.
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
            <h2 className="display-3">Key Outcomes</h2>
            <p className="text-meta" style={{ marginTop: "1rem" }}>Production Impact</p>
          </RevealItem>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--accent-cobalt)", paddingLeft: "1rem" }}>
                <p className="display-2" style={{ fontSize: "3rem", margin: 0 }}>100+</p>
                <p className="text-meta" style={{ marginTop: "0.5rem" }}>Videos / Month Per Brand</p>
                <p className="text-body" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Deterministic production velocity</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="display-2" style={{ fontSize: "3rem", margin: 0 }}>85%</p>
                <p className="text-meta" style={{ marginTop: "0.5rem" }}>Turnaround Reduction</p>
                <p className="text-body" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>From weeks to automated hours</p>
              </div>
            </RevealItem>
            <RevealItem>
              <div style={{ borderLeft: "2px solid var(--border-color)", paddingLeft: "1rem" }}>
                <p className="display-2" style={{ fontSize: "3rem", margin: 0 }}>Zero</p>
                <p className="text-meta" style={{ marginTop: "0.5rem" }}>Compute Bottlenecks</p>
                <p className="text-body" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Elastic distributed async queues</p>
              </div>
            </RevealItem>
          </div>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <div style={{ padding: "var(--spacing-md) 0 var(--spacing-xl)" }}>
        <CursorTrigger state="project">
          <Link href="/experience/joxy" className="btn-editorial" style={{ fontSize: "1rem" }}>
            ← Previous Case Study: Joxy.ai
          </Link>
        </CursorTrigger>
      </div>
    </div>
  );
}
