"use client";

import { usePathname } from "next/navigation";
import { CursorTrigger } from "@/components/Cursor";

export function SiteFooter() {
  const pathname = usePathname();
  
  if (pathname === "/") {
    return null;
  }

  return (
    <footer 
      className="footer" 
      role="contentinfo"
      style={{ 
        backgroundColor: "var(--bg-card)", 
        color: "var(--text-primary)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        position: "relative",
        zIndex: 20,
        borderTop: "1px solid var(--border-color)",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem"
      }}
    >
      <div>© {new Date().getFullYear()} Varun Handa</div>
      <div className="accent-badge">Available for Select Advisory</div>
      <div>Principal Software Architect</div>
      <CursorTrigger>
        <a href="mailto:contact@varunhanda.com" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
          contact@varunhanda.com
        </a>
      </CursorTrigger>
    </footer>
  );
}
