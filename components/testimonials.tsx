"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "תוך שבועיים Shriki.ai אוטומציה את כל תהליך ה-onboarding שלנו. חסכנו 15 שעות עבודה בשבוע.",
    name: "יעל כהן",
    role: "מנכ״לית, TechFlow",
    initials: "יכ",
  },
  {
    quote:
      "האייג'נט שבנו מטפל ב-80% מהפניות של הלקוחות שלנו אוטומטית. הצוות מתמקד בדברים שחשובים.",
    name: "אבי לוי",
    role: "VP Operations, ScaleUp",
    initials: "אל",
  },
  {
    quote:
      "הייתי סקפטי בהתחלה. אחרי חודש — אני לא מבין איך עבדנו בלי זה.",
    name: "מיכל גולן",
    role: "מנהלת שיווק, GrowthCo",
    initials: "מג",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        padding: "100px 24px",
        background: "#0B0F2E",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 300,
              color: "#00C2C2",
              fontSize: 18,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            מה אומרים הלקוחות
          </p>
          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            עסקים שחסכו זמן, הרוויחו כסף
          </h2>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: "rgba(20,25,55,0.6)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(0,194,194,0.12)",
                borderRadius: 20,
                padding: "36px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              {/* Quote mark */}
              <span
                style={{
                  color: "#00C2C2",
                  fontSize: 40,
                  lineHeight: 1,
                  userSelect: "none",
                  display: "block",
                  textAlign: "right",
                }}
              >
                &ldquo;
              </span>

              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.75,
                  fontSize: 15,
                  flex: 1,
                  textAlign: "right",
                  direction: "rtl",
                }}
              >
                {t.quote}
              </p>

              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  paddingTop: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: 12,
                  direction: "rtl",
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #00C2C2, #0B0F2E)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontWeight: 600, color: "#fff", fontSize: 14 }}>
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'Heebo', sans-serif",
                      fontWeight: 300,
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
