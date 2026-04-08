"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "שיחת היכרות",
    description:
      "מפגש ראשוני חינמי של 30 דקות. נבין את האתגרים שלכם ונזהה היכן AI יכול לייצר ערך מיידי.",
  },
  {
    number: "02",
    title: "תכנית מותאמת",
    description:
      "מגישים לכם רואדמאפ מדויק — מה בונים, באיזה סדר, ומה התוצאות הצפויות בכל שלב.",
  },
  {
    number: "03",
    title: "פיתוח ויישום",
    description:
      "בונים, בודקים ומטמיעים. תוצאות ראשונות תוך 14 יום. אין הפתעות, אין עיכובים.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        position: "relative",
        padding: "100px 24px",
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(0,194,194,0.05) 0%, transparent 60%), #080C1F",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
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
            התהליך
          </p>
          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 58px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            פשוט. מהיר. עובד.
          </h2>
        </motion.div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 40,
            position: "relative",
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{ textAlign: "center" }}
            >
              {/* Circle */}
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "rgba(20,25,55,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(0,194,194,0.25)",
                  boxShadow: "0 0 28px rgba(0,194,194,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 28px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    color: "#00C2C2",
                    fontSize: 22,
                    fontWeight: 700,
                  }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: 14,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.75,
                  fontSize: 15,
                  maxWidth: 280,
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
