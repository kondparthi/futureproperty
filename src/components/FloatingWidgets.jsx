import React, { useState } from "react";
import { X } from "lucide-react";

function WhatsAppIcon({ size = 26 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#fff">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.1-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3.2.8.9-3.1-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2z" />
    </svg>
  );
}

function EnquiryModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,19,54,.55)", zIndex: 400,
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 6, maxWidth: 440, width: "100%",
        padding: "36px 34px", position: "relative", boxShadow: "0 30px 60px rgba(0,0,0,.3)",
      }}>
        <button
          onClick={onClose}
          aria-label="Close"
          style={{ position: "absolute", top: 18, right: 18, background: "none", border: "none", cursor: "pointer" }}
        >
          <X size={20} color="var(--gray)" />
        </button>
        <div className="eyebrow">Let's Connect</div>
        <h3 className="h3" style={{ marginBottom: 24 }}>Talk to Future Property Group</h3>

        {submitted ? (
          <div style={{ padding: "22px 18px", background: "var(--cream)", borderLeft: "3px solid var(--red)", fontFamily: "Playfair Display", fontSize: 14.5, color: "var(--navy)" }}>
            Thank you — your enquiry has been received. Our team will be in touch shortly.
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
            <div className="form-field"><label>Name</label><input type="text" placeholder="Your full name" required /></div>
            <div className="form-field"><label>Email ID</label><input type="email" placeholder="you@email.com" required /></div>
            <div className="form-field"><label>Contact Number</label><input type="tel" placeholder="+91 98765 43210" required /></div>
            <div className="form-field"><label>Message</label><textarea placeholder="Tell us a little about what you're looking for..." /></div>
            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function FloatingWidgets() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Enquire Now — floating vertical tab, right side */}
      <button
        className="floating-enquire"
        onClick={() => setModalOpen(true)}
        aria-label="Enquire Now"
        style={{
          position: "fixed", top: "50%", right: 0, transform: "translateY(-50%)",
          background: "var(--red)", color: "#fff", border: "none", cursor: "pointer",
          padding: "16px 10px", borderRadius: "6px 0 0 6px", zIndex: 150,
          writingMode: "vertical-rl", textOrientation: "mixed",
          fontFamily: "Poppins", fontSize: 13, fontWeight: 500, letterSpacing: 1,
          boxShadow: "-4px 0 14px rgba(0,0,0,.15)",
        }}
      >
        Enquire Now
      </button>

      {/* WhatsApp — floating circle, bottom left */}
      {/* NOTE: replace 910000000000 with your real WhatsApp business number */}
      <a
        className="floating-whatsapp"
        href="https://wa.me/910000000000"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: "fixed", bottom: 24, left: 24, width: 54, height: 54, borderRadius: "50%",
          background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 150, boxShadow: "0 6px 16px rgba(0,0,0,.25)",
        }}
      >
        <WhatsAppIcon size={28} />
      </a>

      {modalOpen && <EnquiryModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
