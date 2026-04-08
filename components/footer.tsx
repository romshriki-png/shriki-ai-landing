"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "שירותים", href: "#services" },
  { label: "איך זה עובד", href: "#how-it-works" },
  { label: "לקוחות", href: "#testimonials" },
  { label: "צור קשר", href: "#contact" },
];

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <footer
        style={{
          background: "#080C1F",
          borderTop: "1px solid rgba(0,194,194,0.1)",
          padding: "48px 24px 36px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <Image
          src="/logos/logo-white.png"
          alt="Shriki.ai Automations"
          width={100}
          height={28}
          style={{ margin: "0 auto 10px" }}
        />

        {/* Tagline */}
        <p
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: 13,
            fontFamily: "'Heebo', sans-serif",
            marginBottom: 28,
          }}
        >
          אוטומציות AI לעסקים B2B
        </p>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 1,
            background: "rgba(0,194,194,0.25)",
            margin: "0 auto 28px",
          }}
        />

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 32,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 14,
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#00C2C2")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p
          style={{
            color: "rgba(255,255,255,0.2)",
            fontSize: 12,
            fontFamily: "'Space Mono', monospace",
          }}
        >
          © {new Date().getFullYear()} Shriki.ai Automations
        </p>
      </footer>
    );
  }

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,194,194,0.1)",
        padding: "48px 24px",
        background: "#080C1F",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
            marginBottom: 40,
          }}
        >
          {/* Logo + tagline */}
          <div style={{ textAlign: "right" }}>
            <Image
              src="/logos/logo-white.png"
              alt="Shriki.ai Automations"
              width={110}
              height={31}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: 13,
                fontFamily: "'Heebo', sans-serif",
                marginTop: 10,
              }}
            >
              אוטומציות AI לעסקים B2B
            </p>
          </div>

          {/* Nav links */}
          <div style={{ display: "flex", gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 14,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#00C2C2")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.06)",
            marginBottom: 24,
          }}
        />

        {/* Copyright */}
        <p
          style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: 12,
            fontFamily: "'Space Mono', monospace",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()} Shriki.ai Automations · כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
