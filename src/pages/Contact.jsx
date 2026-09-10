import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/projects.js";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <section className="section-sm bg-navy on-dark" style={{ paddingTop: 150 }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="eyebrow">Contact Us</div>
          <h1 className="h1">Let's Find the Right Place for What Comes Next.</h1>
          <p className="lead" style={{ color: "rgba(255,255,255,.8)" }}>
            Whether you are looking for a home, exploring a new investment or simply want to know
            more about our projects, our team is here to help. Tell us what you are looking for,
            and we'll help you explore the possibilities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "flex-start", gap: 60 }}>
          {/* Left: info */}
          <div>
            <div className="eyebrow">Get In Touch</div>
            <h2 className="h2">Have a Project in Mind?</h2>
            <p className="lead">
              Explore our developments and speak with our team about availability, project
              details, locations and site visits.
            </p>
            <Link to="/#projects" className="btn btn-outline" style={{ marginBottom: 40 }}>
              Explore Our Projects <ArrowRight size={15} />
            </Link>

            <div className="contact-info-row">
              <div className="contact-info-icon"><Phone size={18} /></div>
              <div>
                <div className="h4" style={{ marginBottom: 2 }}>Call Us</div>
                <div style={{ color: "var(--gray)", fontSize: 14 }}>[Phone Number]</div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="contact-info-icon"><Mail size={18} /></div>
              <div>
                <div className="h4" style={{ marginBottom: 2 }}>Email Us</div>
                <div style={{ color: "var(--gray)", fontSize: 14 }}>[Email Address]</div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="contact-info-icon"><MapPin size={18} /></div>
              <div>
                <div className="h4" style={{ marginBottom: 2 }}>Visit Us</div>
                <div style={{ color: "var(--gray)", fontSize: 14 }}>[Office Address]</div>
              </div>
            </div>

            <div className="divider" style={{ margin: "36px 0" }} />

            <div className="eyebrow">Visit a Project</div>
            <h3 className="h3">Want to see a development for yourself?</h3>
            <p style={{ fontSize: 13.5, color: "var(--gray)", lineHeight: 1.8, marginBottom: 18 }}>
              Our team can help you arrange a site visit and take you through the project, its
              surroundings and the available options.
            </p>
            <Link to="/contact" className="btn btn-primary">Schedule a Site Visit</Link>
          </div>

          {/* Right: form */}
          <div className="card" style={{ padding: "40px 36px" }}>
            <h3 className="h3" style={{ marginBottom: 22 }}>Send Us an Enquiry</h3>
            {submitted ? (
              <div style={{
                padding: "28px 22px", background: "var(--cream)", borderLeft: "3px solid var(--red)",
                fontSize: 14.5, color: "var(--navy)", fontFamily: "Playfair Display",
              }}>
                Thank you — your enquiry has been received. Our team will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label>Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="form-field">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="form-field">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-field">
                  <label>I'm Interested In</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a project</option>
                    {PROJECTS.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
