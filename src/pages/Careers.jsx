import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Layers, Users, TrendingUp } from "lucide-react";
import { ClosingCTA } from "../components/Sections.jsx";

const VALUES = [
  { icon: MapPin, title: "Purposeful Work", desc: "Every role plays into a real decision — a location, a plan, a community someone will live in." },
  { icon: Layers, title: "Long-Term Thinking", desc: "We build with today in mind, while keeping an eye on how a project and a career both grow over time." },
  { icon: Users, title: "A Small, Direct Team", desc: "Fewer layers means your work is visible, and your judgement is trusted early." },
  { icon: TrendingUp, title: "Room to Grow With Us", desc: "As our portfolio expands across Hyderabad and the AP Capital Region, so do the opportunities within it." },
];

export default function Careers() {
  return (
    <div>
      <section className="section" style={{ paddingTop: 150, textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>Careers at Future Property Group</div>
          <h1 className="h1" style={{ fontSize: "clamp(30px,4vw,44px)" }}>Build Places. Build a Career.</h1>
          <p className="lead center">
            We're a small, focused team choosing locations, planning communities and delivering on
            what we promise — across Hill City, Pearl City, Neo City, Srikara Homes and Park Heights.
            If that way of working appeals to you, we'd like to hear from you.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Why FPG</div>
          <h2 className="h2 center" style={{ maxWidth: 620 }}>What It's Like to Work Here.</h2>
          <div className="grid grid-4" style={{ marginTop: 40 }}>
            {VALUES.map((v, i) => (
              <div key={i} className="card">
                <v.icon size={26} color="#CB0301" strokeWidth={1.6} />
                <div className="h4" style={{ marginTop: 16 }}>{v.title}</div>
                <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 13.5, color: "var(--gray)", lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 640 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>Current Openings</div>
          <h2 className="h2 center">No Listed Openings Right Now.</h2>
          <p className="lead center">
            We don't have specific positions posted at the moment, but we're always glad to hear
            from people who share our approach to location, planning and long-term thinking. Reach
            out through our Contact page with your CV and a note on where you'd fit in, and we'll
            keep it on file for when a role opens up.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: 10 }}>
            Get In Touch
          </Link>
        </div>
      </section>

      <ClosingCTA
        title="Your Future Has an Address."
        paragraphs={["And maybe, so does your next role. Get in touch to start the conversation."]}
        ctas={[{ label: "Talk to Our Team", primary: true }]}
      />
    </div>
  );
}
