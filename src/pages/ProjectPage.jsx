import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ChevronRight, ChevronDown, CheckCircle2, Layers, Waves, Dumbbell, Baby,
  PartyPopper, Timer, Flower2, CloudRain, ShieldCheck, Route, Zap, Landmark,
  DoorOpen, Target, Sparkles, Building2, Droplets, TrendingUp, Home as HomeIcon,
  UtensilsCrossed, Wind, ClipboardList, Trees,
} from "lucide-react";
import { getProjectBySlug, PROJECTS, IMG } from "../data/projects.js";
import { ClosingCTA } from "../components/Sections.jsx";

/* Best-effort icon per amenity/feature title, derived from keywords —
   avoids needing a separate icon field for every item in the data file. */
function iconFor(title) {
  const t = title.toLowerCase();
  if (t.includes("pool") || t.includes("tank bund") || t.includes("pond") || t.includes("water") && !t.includes("infrastructure")) return Waves;
  if (t.includes("gym") || t.includes("sports") || t.includes("fitness")) return Dumbbell;
  if (t.includes("kid") || t.includes("child")) return Baby;
  if (t.includes("party") || t.includes("banquet") || t.includes("gather") || t.includes("kalavedika")) return PartyPopper;
  if (t.includes("jog") || t.includes("track") || t.includes("cycling")) return Timer;
  if (t.includes("garden") || t.includes("farm") || t.includes("mango") || t.includes("organic") || t.includes("landscape") || t.includes("plantation")) return Flower2;
  if (t.includes("rain")) return CloudRain;
  if (t.includes("security") || t.includes("compound") || t.includes("wall")) return ShieldCheck;
  if (t.includes("road")) return Route;
  if (t.includes("electric") || t.includes("power") || t.includes("ev charging")) return Zap;
  if (t.includes("temple") || t.includes("heritage") || t.includes("gazebo") || t.includes("zoo")) return Landmark;
  if (t.includes("gateway") || t.includes("entrance")) return DoorOpen;
  if (t.includes("court") || t.includes("cricket") || t.includes("basketball") || t.includes("badminton") || t.includes("nets")) return Target;
  if (t.includes("yoga") || t.includes("wellness")) return Sparkles;
  if (t.includes("lift") || t.includes("structure") || t.includes("floor")) return Building2;
  if (t.includes("stp") || t.includes("sewage") || t.includes("drainage")) return Droplets;
  if (t.includes("invest")) return TrendingUp;
  if (t.includes("build your own") || t.includes("luxury home")) return HomeIcon;
  if (t.includes("kitchen") || t.includes("bath") || t.includes("interior")) return UtensilsCrossed;
  if (t.includes("window") || t.includes("ventilation")) return Wind;
  if (t.includes("plan")) return ClipboardList;
  if (t.includes("zoo") || t.includes("tree")) return Trees;
  return Sparkles;
}

function ConnectivityListLocal({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="connect-list">
      {items.map((it, i) => (
        <div key={i} className="connect-row">
          {it.time && <div className="connect-time">{it.time}</div>}
          <div className="connect-place">{it.place}</div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const p = getProjectBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!p) return <Navigate to="/" replace />;

  const amenities = [...(p.sectionAItems || []), ...(p.sectionBItems || [])];
  const mapQuery = encodeURIComponent(`${p.name}, ${p.location}`);

  const faqs = [
    { q: `Is ${p.name} approved?`, a: `${p.name} is backed by ${p.badges.join(", ")}.` },
    { q: `What type of property is ${p.name}?`, a: `${p.name} is a ${p.category.toLowerCase()} development — ${p.tagline}.` },
    {
      q: `Where is ${p.name} located?`,
      a: `${p.name} is located at ${p.location}.${p.connectivity[0] ? ` It's close to ${p.connectivity[0].place}${p.connectivity[1] ? `, and ${p.connectivity[1].place}` : ""}.` : ""}`,
    },
    { q: `How can I visit ${p.name}?`, a: `You can schedule a site visit through the enquiry form on this page, or reach our team via the Contact page.` },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <img className="hero-img" src={p.heroImg} alt={p.name} />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-eyebrow">{p.category} &middot; {p.location}</div>
          <h1 className="hero-title">{p.name}</h1>
          <p className="hero-sub">{p.tagline}</p>
        </div>
      </section>

      {/* Breadcrumb + anchor tabs */}
      <div style={{ borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, padding: "16px 6%" }}>
          <div style={{ fontFamily: "Poppins", fontSize: 13, color: "var(--gray)", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
            <Link to="/" style={{ color: "var(--gray)" }}>Home</Link><ChevronRight size={12} />
            <Link to="/#projects" style={{ color: "var(--gray)" }}>Projects</Link><ChevronRight size={12} />
            <span>{p.category}</span><ChevronRight size={12} />
            <span style={{ color: "var(--navy)" }}>{p.name}</span>
          </div>
          <div style={{ display: "flex", gap: 22, flexWrap: "wrap" }}>
            {["Overview", "Amenities", "Location", "Credentials", "FAQ"].map(t => (
              <a key={t} href={`#${t.toLowerCase()}`} style={{ fontFamily: "Poppins", fontSize: 13, color: "var(--navy)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="section" id="overview">
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div style={{ borderRadius: 4, overflow: "hidden" }}>
            <img src={p.heroImg} alt={p.name} style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
          </div>
          <div>
            <div className="eyebrow">{p.introEyebrow || "Project Overview"}</div>
            <h2 className="h2">{p.introTitle}</h2>
            {p.introParagraphs.map((t, i) => <p key={i} className="lead">{t}</p>)}
            <div className="badge-row">
              {p.badges.map((b, i) => <span key={i} className="badge">{b}</span>)}
            </div>
            <div className="btn-row">
              <Link to="/contact" className="btn btn-primary">Enquire Now</Link>
              <a href="#location" className="btn btn-outline">View Location</a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      {amenities.length > 0 && (
        <section className="section bg-cream" id="amenities">
          <div className="container">
            <div className="eyebrow center" style={{ textAlign: "center" }}>The Amenities</div>
            <h2 className="h2 center" style={{ maxWidth: 620 }}>What {p.name} Brings Together.</h2>
            <p className="lead center" style={{ marginBottom: 40 }}>Every space designed as part of the {p.name} experience.</p>
            <div className="grid grid-4">
              {amenities.map((a, i) => {
                const Icon = iconFor(a.title);
                return (
                  <div key={i} style={{ textAlign: "center", background: "#fff", border: "1px solid var(--line)", padding: "26px 16px", borderRadius: 4 }}>
                    <Icon size={26} color="var(--red)" strokeWidth={1.5} style={{ margin: "0 auto 12px" }} />
                    <div style={{ fontFamily: "Playfair Display", fontSize: 14.5, color: "var(--navy)", marginBottom: 6 }}>{a.title}</div>
                    <div style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 12, color: "var(--gray)", lineHeight: 1.6 }}>{a.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Master Plan */}
      <section className="section">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Spatial Intelligence, Thoughtfully Planned</div>
          <h2 className="h2 center" style={{ maxWidth: 620 }}>The Master Plan.</h2>
          <div className="grid grid-2" style={{ marginTop: 40, alignItems: "stretch" }}>
            <div className="card">
              <div className="h3">Master Plan at a Glance</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {p.glance.map((g, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, padding: "12px 0", borderBottom: i < p.glance.length - 1 ? "1px solid var(--line)" : "none" }}>
                    <CheckCircle2 size={16} color="var(--red)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontFamily: "Poppins", fontSize: 13.5, color: "var(--gray)" }}>
                      <strong style={{ color: "var(--navy)" }}>{g.value}</strong> — {g.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{
              background: "var(--cream)", border: "1px dashed var(--line)", borderRadius: 4,
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              padding: "40px 30px", textAlign: "center",
            }}>
              <Layers size={36} color="var(--navy)" strokeWidth={1.3} style={{ marginBottom: 14 }} />
              <div style={{ fontFamily: "Playfair Display", color: "var(--navy)", fontSize: 16, marginBottom: 6 }}>Detailed Master Plan</div>
              <div style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 13, color: "var(--gray)", maxWidth: 260 }}>
                Available on request — reach out to our team for the full site layout.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Closer Look */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Walk Through {p.name}</div>
          <h2 className="h2 center" style={{ marginBottom: 40 }}>A Closer Look.</h2>
          <div className="grid grid-4">
            {[p.heroImg, IMG.aboutHero, IMG.heroHome, IMG.pearlCity].map((src, i) => (
              <img key={i} src={src} alt={`${p.name} ${i + 1}`} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 4, display: "block" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section" id="location">
        <div className="container grid grid-2" style={{ alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">The Location</div>
            <h2 className="h2">Where {p.name} Sits.</h2>
            <p className="lead">{p.connectivityIntro}</p>
            <ConnectivityListLocal items={p.connectivity} />
          </div>
          <div style={{ borderRadius: 4, overflow: "hidden", border: "1px solid var(--line)" }}>
            <iframe
              title={`${p.name} location map`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-navy on-dark" id="credentials">
        <div className="container">
          <div className="eyebrow">The Credentials</div>
          <h2 className="h2" style={{ maxWidth: 600 }}>Approved. Documented. Transparent.</h2>
          <div className="grid grid-2" style={{ marginTop: 30 }}>
            {p.badges.map((b, i) => (
              <div key={i} style={{
                display: "flex", gap: 12, alignItems: "center", padding: "14px 0",
                borderBottom: i < p.badges.length - 1 ? "1px solid rgba(255,255,255,.12)" : "none",
              }}>
                <CheckCircle2 size={18} color="var(--gold)" />
                <span style={{ fontFamily: "Poppins", fontSize: 14, color: "rgba(255,255,255,.9)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>Your Questions</div>
          <h2 className="h2 center" style={{ marginBottom: 40 }}>Answered, Before You Ask.</h2>
          {faqs.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "20px 0", textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "Playfair Display", fontSize: 16, color: openFaq === i ? "var(--red)" : "var(--navy)" }}>{f.q}</span>
                <ChevronDown size={18} color="var(--red)" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .25s", flexShrink: 0, marginLeft: 12 }} />
              </button>
              {openFaq === i && (
                <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14, color: "var(--gray)", lineHeight: 1.8, paddingBottom: 20, maxWidth: 800 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Enquire */}
      <section className="section bg-cream">
        <div className="container grid grid-2" style={{ alignItems: "flex-start", gap: 50 }}>
          <div className="card" style={{ padding: "36px 32px" }}>
            <h3 className="h3">Enquire About {p.name}</h3>
            {submitted ? (
              <div style={{ padding: "24px 20px", background: "#fff", borderLeft: "3px solid var(--red)", fontFamily: "Playfair Display", fontSize: 14.5, color: "var(--navy)" }}>
                Thank you — your enquiry has been received. Our team will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-field"><label>Full Name</label><input type="text" placeholder="Enter your name" required /></div>
                <div className="form-field"><label>Phone Number</label><input type="tel" placeholder="Enter your phone number" required /></div>
                <div className="form-field"><label>Email Address</label><input type="email" placeholder="Enter your email" required /></div>
                <div className="form-field"><label>Message</label><textarea placeholder={`I'm interested in ${p.name}...`} /></div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Submit Enquiry</button>
              </form>
            )}
          </div>
          <div style={{ borderRadius: 4, overflow: "hidden" }}>
            <img src={p.heroImg} alt={p.name} style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Closing */}
      <ClosingCTA title={p.closingTitle} paragraphs={p.closingParagraphs} ctas={p.ctas} />

      {/* Other projects */}
      <section className="section">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Explore More</div>
          <h2 className="h2 center">Other Future Property Group Addresses</h2>
          <div className="grid grid-4" style={{ marginTop: 30 }}>
            {PROJECTS.filter(x => x.slug !== p.slug).map(x => (
              <Link key={x.slug} to={`/projects/${x.slug}`} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <img src={x.heroImg} alt={x.name} style={{ height: 130, objectFit: "cover", width: "100%" }} />
                <div style={{ padding: "16px 18px" }}>
                  <div className="h4" style={{ marginBottom: 2 }}>{x.name}</div>
                  <div style={{ fontSize: 12, color: "var(--gray)" }}>{x.location}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
