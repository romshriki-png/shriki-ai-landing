"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "rgba(11,15,46,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,194,194,0.12)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 20px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row-reverse",
        }}
      >
        {/* Logo — right side in RTL */}
        <Image
          src="/logos/logo-white.png"
          alt="Shriki.ai Automations"
          width={110}
          height={31}
          priority
        />

        {/* Nav links — hidden on mobile */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
            {["שירותים", "איך זה עובד", "לקוחות"].map((label) => {
              const href =
                label === "שירותים"
                  ? "#services"
                  : label === "איך זה עובד"
                  ? "#how-it-works"
                  : "#testimonials";
              return (
                <a
                  key={label}
                  href={href}
                  style={{
                    color: "rgba(255,255,255,0.65)",
                    fontSize: 14,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLAnchorElement).style.color = "#00C2C2")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.65)")
                  }
                >
                  {label}
                </a>
              );
            })}
          </nav>
        )}

        {/* CTA — left side in RTL */}
        <a
          href="#contact"
          style={{
            background: "#00C2C2",
            color: "#080C1F",
            fontWeight: 700,
            fontSize: 14,
            padding: "10px 18px",
            borderRadius: 10,
            textDecoration: "none",
            transition: "background 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLAnchorElement).style.background = "#00A5A5")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLAnchorElement).style.background = "#00C2C2")
          }
        >
          השאר פרטים
        </a>
      </div>
    </header>
  );
}
