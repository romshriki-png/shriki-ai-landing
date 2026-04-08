"use client";

import { motion } from "framer-motion";
import Particles from "./particles";
import { Counter } from "./counter";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 60% 30%, #1a2060 0%, #0B0F2E 55%, #060920 100%)",
      }}
    >
      {/* Particles */}
      <Particles />

      {/* Grid overlay */}
      <div className="grid-overlay" style={{ zIndex: 2 }} />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Teal glow blob */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,194,194,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 860,
          margin: "0 auto",
          padding: "120px 24px 80px",
          textAlign: "center",
          width: "100%",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 32,
            padding: "8px 18px",
            borderRadius: 100,
            background: "rgba(20,25,55,0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(0,194,194,0.2)",
            fontSize: 13,
            fontFamily: "'Space Mono', monospace",
            color: "#00C2C2",
            letterSpacing: "0.05em",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#00C2C2",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          AI AUTOMATIONS FOR B2B
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "clamp(44px, 7vw, 84px)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          AI שמניע את{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00C2C2 0%, #00FFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            העסק שלך
          </span>
          {" "}קדימה
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "rgba(255,255,255,0.65)",
            maxWidth: 560,
            margin: "0 auto 40px",
            lineHeight: 1.75,
          }}
        >
          אוטומציות AI מותאמות אישית לעסקים B2B.
          <br />
          חסכו שעות עבודה, הפחיתו טעויות, וצמחו מהר יותר.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contact"
            style={{
              background: "#00C2C2",
              color: "#080C1F",
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 36px",
              borderRadius: 12,
              textDecoration: "none",
              boxShadow: "0 0 40px rgba(0,194,194,0.3)",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#00A5A5";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#00C2C2";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            קבל ייעוץ חינם
          </a>
          <a
            href="#how-it-works"
            style={{
              background: "rgba(20,25,55,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(0,194,194,0.2)",
              color: "#fff",
              fontWeight: 500,
              fontSize: 16,
              padding: "14px 36px",
              borderRadius: 12,
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,194,194,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,194,194,0.2)";
            }}
          >
            ראה איך זה עובד ↓
          </a>
        </motion.div>

        {/* Trust bar with counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
            rowGap: 10,
            fontFamily: "'Heebo', sans-serif",
            fontWeight: 300,
            fontSize: "clamp(14px, 3vw, 19px)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <span>✓ מעל <Counter target={30} suffix="+" /> עסקים</span>
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", display: "inline-block", flexShrink: 0 }} />
          <span>✓ תוצאות תוך <Counter target={14} /> יום</span>
          <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.15)", display: "inline-block", flexShrink: 0 }} />
          <span>✓ ייעוץ ראשוני חינם</span>
        </motion.div>
      </div>
    </section>
  );
}
