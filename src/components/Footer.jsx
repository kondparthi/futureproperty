import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PROJECTS } from "../data/projects.js";

/* Small inline SVG icons — lucide-react's brand/logo icon set changes
   between versions, so these never break on a version bump */
function FacebookIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
    </svg>
  );
}
function LinkedinIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="7" r="1" fill="#fff" stroke="none" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        {/* Centered logo + tagline, Sumadhura-style */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Future Property Group" />
          <div className="name">FUTURE PROPERTY GROUP</div>
          <div className="tag">A TRADITION OF TRUST</div>
        </div>

        <div className="footer-top">
          <div>
            <p style={{ maxWidth: 300, marginBottom: 0 }}>
              Thoughtfully planned places for the life ahead. Building residential
              communities across Hyderabad and the AP Capital Region.
            </p>
            <div className="social-row" style={{ justifyContent: "flex-start" }}>
              <a className="social-icon" href="https://www.facebook.com/futurepropertyin" aria-label="Facebook"><FacebookIcon /></a>
              <a className="social-icon" href="https://www.facebook.com/futurepropertyin" aria-label="Instagram"><InstagramIcon /></a>
              <a className="social-icon" href="https://www.linkedin.com/company/futureproperty/" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Projects</h4>
            {PROJECTS.map(p => (
              <Link key={p.slug} to={`/projects/${p.slug}`}>{p.name}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/contact">Schedule a Visit</Link>
          </div>

          <div className="footer-col">
            <h4>Get In Touch</h4>
            <p style={{ display: "flex", alignItems: "center", gap: 8 }}><Phone size={14} /> [Phone Number]</p>
            <p style={{ display: "flex", alignItems: "center", gap: 8 }}><Mail size={14} /> [Email Address]</p>
            <p style={{ display: "flex", alignItems: "flex-start", gap: 8 }}><MapPin size={14} style={{ marginTop: 3, flexShrink: 0 }} /> [Office Address]</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Future Property Group. All Rights Reserved.</span>
          <span>A Tradition of Trust</span>
        </div>
      </div>
    </footer>
  );
}
