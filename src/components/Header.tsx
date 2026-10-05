"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CursorTrigger } from "@/components/Cursor";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "/experience", label: "Experience" },
    { href: "/writing", label: "Writing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const linkVariants: Variants = {
    closed: { y: 20, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 50, width: "100%" }}>
        <nav className="nav" aria-label="Primary Navigation" style={{ backgroundColor: isOpen ? "transparent" : "" }}>
          <CursorTrigger>
            <Link href="/" className="nav-brand" style={{ position: "relative", zIndex: 60, color: isOpen ? "var(--text-primary)" : "" }}>
              <span className="nav-brand-dot" aria-hidden="true" style={{ backgroundColor: isOpen ? "var(--accent-cobalt)" : "" }} />
              <span>Varun Handa</span>
            </Link>
          </CursorTrigger>
          
          <div className="nav-links">
            {links.map((link) => (
              <CursorTrigger key={link.href}>
                <Link href={link.href} className="nav-link">{link.label}</Link>
              </CursorTrigger>
            ))}
          </div>

          <CursorTrigger>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              style={{ position: "relative", zIndex: 60 }}
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </CursorTrigger>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="mobile-menu-content">
              {links.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants}>
                  <CursorTrigger>
                    <Link href={link.href} className="mobile-nav-link">
                      {link.label}
                    </Link>
                  </CursorTrigger>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
