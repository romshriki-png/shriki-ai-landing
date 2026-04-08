"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    tag: "AUTOMATE",
    title: "אוטומציות תהליכים",
    description: "עסקים מאבדים שעות יקרות על תהליכים ידניים וחוזרים — חשבוניות, מיילים, דוחות, עדכוני CRM. אנחנו מזהים את צווארי הבקבוק שלכם ובונים אוטומציות שרצות ברקע 24/7, בלי שתגעו בהן. התוצאה: הצוות שלכם עושה עבודה שיש לה ערך אמיתי.",
    descriptionMobile: "אוטומציות שרצות 24/7 ברקע — חשבוניות, מיילים, CRM. הצוות שלכם מתמקד בעבודה שחשובה.",
    accent: "#00C2C2",
    large: true,
    gridColumn: "1 / 8",
    gridRow: "1",
  },
  {
    tag: "AI AGENTS",
    title: "AI Agents / צ'אט בוטים",
    description: "אייג'נטים חכמים שפועלים בשמכם — עונים ללקוחות, מנתחים נתונים, מקבלים החלטות ראשוניות, ומעבירים לאדם רק כשצריך. עובד מסביב לשעון, לא דורש הפסקות.",
    descriptionMobile: "עונים ללקוחות, מנתחים נתונים, מעבירים לאדם רק כשצריך. עובד מסביב לשעון.",
    accent: "#00FFFF",
    large: false,
    gridColumn: "8 / 13",
    gridRow: "1",
  },
  {
    tag: "INTEGRATE",
    title: "אינטגרציות מערכות",
    description: "CRM, ERP, Slack, Gmail, Google Sheets, WhatsApp — כל הכלים שלכם מדברים אחד עם השני בלי התערבות ידנית. נתונים זורמים אוטומטית, כפילויות נעלמות, וכולם עובדים מאותה תמונה.",
    descriptionMobile: "כל הכלים שלכם מדברים אחד עם השני — Slack, Gmail, CRM ועוד. בלי כפילויות.",
    accent: "#00C2C2",
    large: false,
    gridColumn: "1 / 6",
    gridRow: "2",
  },
  {
    tag: "ANALYTICS",
    title: "BI ואנליטיקה",
    description: "דשבורדים חכמים שמרכזים את כל הנתונים של העסק — מכירות, שירות, תפעול — במקום אחד ובזמן אמת. דוחות שמייצרים את עצמם, התראות שמגיעות לפני שיש בעיה, והחלטות שמבוססות על עובדות ולא על תחושות בטן.",
    descriptionMobile: "דשבורדים בזמן אמת, דוחות אוטומטיים, והתראות לפני שיש בעיה.",
    accent: "#00C2C2",
    large: true,
    gridColumn: "6 / 13",
    gridRow: "2",
  },
];

export default function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="services"
      style={{
        position: "relative",
        padding: isMobile ? "72px 16px" : "100px 24px",
        background: "#080C1F",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: isMobile ? 40 : 64 }}
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
            מה אנחנו עושים
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 58px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            פתרונות AI לכל צורך עסקי
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: isMobile ? 16 : 18, maxWidth: 480, margin: "0 auto" }}>
            מתאימים את הטכנולוגיה לעסק שלכם — לא להיפך.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={
            isMobile
              ? { display: "flex", flexDirection: "column", gap: 12 }
              : {
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gridTemplateRows: "auto auto",
                  gap: 20,
                }
          }
        >
          {cards.map((card, i) => (
            <BentoCard
              key={card.tag}
              gridStyle={
                isMobile
                  ? {}
                  : { gridColumn: card.gridColumn, gridRow: card.gridRow }
              }
              tag={card.tag}
              title={card.title}
              description={isMobile ? card.descriptionMobile : card.description}
              accent={card.accent}
              delay={i * 0.1}
              large={card.large}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Also section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            marginTop: 20,
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
            }}
          >
            מתמחים גם ב:
          </span>
          {["דפי נחיתה", "שיווק דיגיטלי", "יצירת תוכן", "קופירייטינג", "מיתוג"].map((tag) => (
            <span
              key={tag}
              style={{
                padding: "6px 14px",
                borderRadius: 100,
                border: "1px solid rgba(0,194,194,0.18)",
                background: "rgba(0,194,194,0.05)",
                color: "rgba(255,255,255,0.5)",
                fontSize: 13,
                fontFamily: "'Heebo', sans-serif",
                whiteSpace: "nowrap",
                cursor: "default",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.border = "1px solid rgba(0,194,194,0.6)";
                el.style.background = "rgba(0,194,194,0.12)";
                el.style.color = "#00C2C2";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.border = "1px solid rgba(0,194,194,0.18)";
                el.style.background = "rgba(0,194,194,0.05)";
                el.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface BentoCardProps {
  gridStyle: React.CSSProperties;
  tag: string;
  title: string;
  description: string;
  accent: string;
  delay: number;
  large?: boolean;
  isMobile: boolean;
}

function BentoCard({ gridStyle, tag, title, description, accent, delay, large, isMobile }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        borderColor: `${accent}55`,
        boxShadow: `0 0 40px ${accent}15`,
      }}
      style={{
        ...gridStyle,
        background: "rgba(20,25,55,0.6)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(0,194,194,0.12)",
        borderRadius: 20,
        padding: isMobile ? "24px 20px" : large ? "40px 36px" : "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 10 : 16,
        transition: "border-color 0.3s, box-shadow 0.3s",
        cursor: "default",
        overflow: "hidden",
        position: "relative",
        direction: "rtl",
      }}
    >
      {/* Subtle corner glow */}
      <div
        style={{
          position: "absolute",
          top: -40,
          left: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Tag */}
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: isMobile ? 11 : 15,
          color: accent,
          letterSpacing: "0.12em",
          opacity: 0.8,
        }}
      >
        {tag}
      </span>

      {/* Title */}
      <h3
        style={{
          fontSize: isMobile ? 18 : large ? 24 : 20,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "rgba(255,255,255,0.55)",
          lineHeight: 1.7,
          fontSize: isMobile ? 14 : 15,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}
