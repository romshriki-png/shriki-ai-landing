"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormValues {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const inputStyle: React.CSSProperties = {
  background: "rgba(11,15,46,0.8)",
  border: "1px solid rgba(0,194,194,0.2)",
  borderRadius: 10,
  padding: "13px 16px",
  color: "#fff",
  fontSize: 15,
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "'Rubik', sans-serif",
  textAlign: "right",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "rgba(255,255,255,0.65)",
  marginBottom: 8,
  textAlign: "right",
};

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  function onSubmit(_data: FormValues) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmitted(true);
        resolve();
      }, 1000);
    });
  }

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "100px 24px",
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0,194,194,0.07) 0%, transparent 55%), #080C1F",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
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
            בואו נדבר
          </p>
          <h2
            style={{
              fontSize: "clamp(38px, 5vw, 60px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            מוכן להתחיל?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 18 }}>
            השאר פרטים ואחזור אליך תוך 24 שעות.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: "rgba(20,25,55,0.6)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0,194,194,0.15)",
            borderRadius: 24,
            padding: "48px 44px",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(0,194,194,0.15)",
                  border: "1px solid rgba(0,194,194,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  fontSize: 30,
                }}
              >
                ✓
              </div>
              <h3 style={{ fontSize: 26, fontWeight: 700, color: "#00C2C2", marginBottom: 10 }}>
                קיבלתי!
              </h3>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16 }}>
                אחזור אליך תוך 24 שעות.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>שם מלא *</label>
                  <input
                    {...register("name", { required: "שדה חובה" })}
                    placeholder="ישראל ישראלי"
                    style={inputStyle}
                  />
                  {errors.name && (
                    <span style={{ color: "#f87171", fontSize: 12, marginTop: 4, display: "block", textAlign: "right" }}>
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>חברה *</label>
                  <input
                    {...register("company", { required: "שדה חובה" })}
                    placeholder="שם החברה"
                    style={inputStyle}
                  />
                  {errors.company && (
                    <span style={{ color: "#f87171", fontSize: 12, marginTop: 4, display: "block", textAlign: "right" }}>
                      {errors.company.message}
                    </span>
                  )}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>אימייל *</label>
                  <input
                    {...register("email", {
                      required: "שדה חובה",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "אימייל לא תקין" },
                    })}
                    type="email"
                    placeholder="you@company.com"
                    dir="ltr"
                    style={{ ...inputStyle, textAlign: "left" }}
                  />
                  {errors.email && (
                    <span style={{ color: "#f87171", fontSize: 12, marginTop: 4, display: "block", textAlign: "right" }}>
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <label style={labelStyle}>טלפון</label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="050-0000000"
                    dir="ltr"
                    style={{ ...inputStyle, textAlign: "left" }}
                  />
                </div>
              </div>

              <div>
                <label style={labelStyle}>ספר לי על העסק שלך</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="מה אתה מחפש לשפר? איזה תהליכים לוקחים לך הכי הרבה זמן?"
                  style={{ ...inputStyle, resize: "none" }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting ? "rgba(0,194,194,0.5)" : "#00C2C2",
                  color: "#080C1F",
                  fontWeight: 700,
                  fontSize: "clamp(13px, 3.5vw, 16px)",
                  padding: "16px",
                  borderRadius: 12,
                  border: "none",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  boxShadow: "0 0 32px rgba(0,194,194,0.2)",
                  transition: "all 0.2s",
                  fontFamily: "'Rubik', sans-serif",
                  width: "100%",
                }}
              >
                {isSubmitting ? "שולח..." : "שלח ואחזור אליך תוך 24 שעות →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
