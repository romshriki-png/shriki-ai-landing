"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Counter } from "./counter";

const stats = [
  { value: 30, suffix: "+", label: "עסקים שכבר עובדים עם AI", labelMobile: "עסקים פעילים" },
  { value: 500, suffix: "+", label: "שעות עבודה נחסכות בחודש", labelMobile: "שעות נחסכות" },
  { value: 14, suffix: "", label: "ימים לתוצאות ראשונות", labelMobile: "ימים לתוצאות" },
  { value: 98, suffix: "%", label: "שביעות רצון לקוחות", labelMobile: "שביעות רצון" },
];

export default function Stats() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        padding: isMobile ? "56px 20px" : "80px 24px",
        background: "linear-gradient(180deg, #080C1F 0%, #0B0F2E 50%, #080C1F 100%)",
        borderTop: "1px solid rgba(0,194,194,0.08)",
        borderBottom: "1px solid rgba(0,194,194,0.08)",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(0,194,194,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? "12px" : "20px",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                textAlign: "center",
                direction: "ltr",
                background: "rgba(20,25,55,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,194,194,0.1)",
                borderRadius: isMobile ? 16 : 20,
                padding: isMobile ? "24px 12px" : "36px 24px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle corner glow */}
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(0,194,194,0.08) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* Big number */}
              <div
                style={{
                  fontSize: isMobile ? "clamp(32px, 9vw, 48px)" : "clamp(48px, 6vw, 72px)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  background: "linear-gradient(135deg, #00C2C2 0%, #00FFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: 10,
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} duration={1600} />
              </div>

              {/* Teal underline accent */}
              <div
                style={{
                  width: 28,
                  height: 2,
                  background: "rgba(0,194,194,0.35)",
                  borderRadius: 2,
                  margin: "0 auto 10px",
                }}
              />

              {/* Label */}
              <p
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: isMobile ? 12 : 14,
                  lineHeight: 1.5,
                }}
              >
                {isMobile ? stat.labelMobile : stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
