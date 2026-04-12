"use client";

import { useState, FormEvent } from "react";

const ROLES = [
  "CEO",
  "CFO",
  "Denial Management",
  "Compliance",
  "Legal Counsel",
  "Hospital Administration",
  "Nursing",
  "Utilization Management",
  "Others",
];

const PROVIDER_SERVICES = [
  "Authorization",
  "Payor Notification & Follow-up",
  "Accelerated Peer-to-Peer (AP2P)",
  "Concurrent Review",
  "Coding & Clinical Documentation Improvement (CDI)",
  "Claim Submission",
  "Denial Management",
  "Appeal Letter Writing",
  "Litigation & Expert Support",
];

const PAYOR_SERVICES = [
  "Two Midnight Rule Compliance",
  "Inpatient vs. Observation Determination",
  "DRG Clinical Validation",
  "ED Facility Level Methodology Review",
  "Payment Line-Item Claim Review",
  "Provider Dispute & Appeal Support",
  "Expert Medical Opinion Reports",
  "Rebuttal Reports & Deposition Support",
  "Demonstratives & Litigation Support",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || "Something went wrong. Please try again.");
      }

      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const btnText =
    status === "sending"
      ? "Sending…"
      : status === "sent"
        ? "✓ Message Sent!"
        : "Submit Inquiry →";

  const btnStyle: React.CSSProperties =
    status === "sent" ? { background: "#059669", boxShadow: "0 4px 20px rgba(5,150,105,.3)" } : {};

  return (
    <form className="cform" onSubmit={handleSubmit}>
      <h3 style={{ fontSize: "1.32rem", fontWeight: 700, color: "#2A3F7A", marginBottom: 20 }}>Send Us a Message</h3>

      <div className="form-row">
        <div className="fg">
          <label htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" required />
        </div>
        <div className="fg">
          <label htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required />
        </div>
      </div>

      <div className="form-row">
        <div className="fg">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div className="fg">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className="fg">
        <label htmlFor="organization">Organization *</label>
        <input id="organization" name="organization" type="text" required />
      </div>

      <div className="form-row">
        <div className="fg">
          <label htmlFor="role">Role</label>
          <select id="role" name="role" defaultValue="">
            <option value="" disabled>Select your role...</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label htmlFor="service">Service of Interest</label>
          <select id="service" name="service" defaultValue="">
            <option value="" disabled>Select a service...</option>
            <optgroup label="Services for Providers">
              {PROVIDER_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </optgroup>
            <optgroup label="Services for Payors">
              {PAYOR_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </optgroup>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="fg">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
      </div>

      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer", marginTop: 4, marginBottom: 2 }}>
        <input
          name="newsletter"
          type="checkbox"
          value="yes"
          style={{ width: 17, height: 17, minWidth: 17, accentColor: "#2A3F7A", marginTop: 2, cursor: "pointer" }}
        />
        <span style={{ fontSize: "1.1rem", color: "#3D3D4A", lineHeight: 1.55 }}>
          Yes, I would like to subscribe to the <strong style={{ color: "#2A3F7A" }}>MHMDAA Newsletter</strong> for healthcare revenue cycle insights, regulatory updates, and expert commentary.
        </span>
      </label>

      {status === "error" && (
        <p style={{ color: "#dc2626", fontSize: ".92rem", marginBottom: 14 }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        className="btn-p"
        disabled={status === "sending"}
        style={{ width: "100%", marginTop: 6, justifyContent: "center", ...btnStyle }}
      >
        {btnText}
      </button>
    </form>
  );
}
