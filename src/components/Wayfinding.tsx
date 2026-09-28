"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export function Wayfinding() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/experience" },
    { name: "THINK", path: "/writing" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="wayfinding">
      {links.map((link, index) => {
        // Special case for root path vs other paths
        const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
        
        return (
          <Link key={link.name} href={link.path} className="wayfinding-link">
            <span className="wayfinding-num">0{index + 1}</span>
            <span className="wayfinding-text" style={{ opacity: isActive ? 1 : 0.4 }}>
              {link.name}
            </span>
            {isActive && (
              <motion.div
                layoutId="wayfinding-indicator"
                className="wayfinding-indicator"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
