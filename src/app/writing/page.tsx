import Link from "next/link";
import { RevealGroup, RevealItem, RevealTitle } from "@/components/Motion";
import { CursorTrigger } from "@/components/Cursor";

export default function WritingPage() {
  const articles = [
    {
      date: "Sep 2026",
      tag: "Agentic Infra",
      title: "Reliability Over Illusion: The Watcher Pattern",
      description: "Generating plausible output is easy. Reliable execution is hard. Exploring heartbeats, stale-task detection, bounded retries, and explicit exit criteria in long-running agent workflows.",
      image: "/generated-assets/joxy_ui_agent_profile.jpg",
      slug: "#"
    },
    {
      date: "Aug 2026",
      tag: "Architecture",
      title: "Agentic Memory: Beyond Chat History",
      description: "Chat history is not memory. Real agentic memory requires scoped stores, consolidation, supersession, and controlled forgetting. Old facts must be superseded, not kept alongside contradictory new ones.",
      image: "/generated-assets/joxy_ui_node_graph.jpg",
      slug: "#"
    },
    {
      date: "Jul 2026",
      tag: "Economics",
      title: "Big Models Plan, Small Models Execute",
      description: "A framework for reducing LLM token costs by up to 90% without sacrificing capability. How the Planner/Worker/Unblocker pattern intelligently routes inference based on task complexity.",
      image: "/generated-assets/boostit_ui_compute.jpg",
      slug: "#"
    },
    {
      date: "Jun 2026",
      tag: "Pipelines",
      title: "Creative Velocity: Software as a Pipeline",
      description: "Treating creative ad production as a deterministic software pipeline. How we bridged async video generation with distributed workers to produce massive video volume deterministically.",
      image: "/generated-assets/boostit_ui_pipeline.jpg",
      slug: "#"
    }
  ];

  return (
    <div className="container">
      <section className="section-xl" style={{ paddingBottom: "4rem" }}>
        <RevealGroup>
          <RevealItem>
            <div className="accent-badge" style={{ marginBottom: "1rem" }}>
              <span>Essays &amp; Architectural Whitepapers</span>
            </div>
          </RevealItem>
        </RevealGroup>

        <RevealTitle>
          <h1 className="display-1">Technical<br/>Journal</h1>
        </RevealTitle>

        <RevealGroup delay={0.2}>
          <RevealItem>
            <p className="text-lead" style={{ maxWidth: "48ch", marginTop: "1rem" }}>
              Field notes, mathematical models, and architectural patterns from building frontier AI systems in production.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <div className="divider"></div>

      <section className="section-xl" style={{ paddingTop: "2rem" }}>
        <RevealGroup style={{ display: "flex", flexDirection: "column" }}>
          {articles.map((article, idx) => (
            <RevealItem key={idx}>
              <CursorTrigger className="project-card" style={{ display: "block" }}>
                <Link 
                  href={article.slug} 
                  style={{ 
                    display: "block", 
                    borderBottom: "1px solid var(--border-color)", 
                    padding: "var(--spacing-md) 0",
                    transition: "background 0.3s ease"
                  }}
                >
                  <div className="grid-editorial" style={{ alignItems: "center" }}>
                    <div>
                      <div className="accent-badge" style={{ marginBottom: "0.4rem" }}>
                        <span>{article.tag}</span>
                      </div>
                      <span className="text-meta">{article.date}</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
                      <div>
                        <h2 className="display-3" style={{ marginBottom: "1rem", fontSize: "2.25rem" }}>
                          {article.title} <span className="hover-arrow" style={{ opacity: 0.6 }}>→</span>
                        </h2>
                        <p className="text-body">
                          {article.description}
                        </p>
                      </div>
                      <div style={{ width: "120px", height: "120px", borderRadius: "4px", overflow: "hidden", flexShrink: 0 }} className="image-container-editorial">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </CursorTrigger>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>
    </div>
  );
}
