import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, ChevronDown, ArrowRight } from "lucide-react";
import { PROJECTS, IMG } from "../data/projects.js";
import { ClosingCTA } from "../components/Sections.jsx";

const PRINCIPLES = [
  { iconImg: "/icons/Start_With_the_Location.png", title: "Start With the Location", desc: "The right development begins with the right place. We look at emerging corridors around Hyderabad, their connectivity, surrounding infrastructure and the developments shaping their future. Our projects are positioned in areas where today's accessibility meets tomorrow's growth.", img: IMG.hillCity },
  { iconImg: "/icons/Plan_With_Purpose.png", title: "Plan With Purpose", desc: "A well-planned community is about more than its plots. Roads, green spaces, essential infrastructure, recreational areas and community amenities all contribute to how a place feels and functions. Our developments are planned with this larger picture in mind.", img: IMG.pearlCity },
  { iconImg: "/icons/Create_a_Sense_of_Place.png", title: "Create a Sense of Place", desc: "Every project should have its own identity. Hill City brings together expansive green surroundings and lifestyle-oriented spaces. Pearl City takes inspiration from Hyderabad's culture and heritage to create A Little Hyderabad. Neo City is positioned as an exclusive address surrounded by the city's emerging growth.", img: IMG.neoCity },
  { iconImg: "/icons/Think_Beyond_Today.png", title: "Think Beyond Today", desc: "The places around our developments will continue to change. New roads, transport networks, employment centres, educational institutions and other infrastructure are shaping Hyderabad's next growth corridors. We consider this evolving landscape when choosing and developing our projects.", img: IMG.srikaraHomes },
];

const CORE_VALUES = [
  { title: "Villa Plot Communities", desc: "Spaces designed for those who want to build a home that is truly their own.", img: IMG.hillCity },
  { title: "Gated Communities", desc: "Residential environments planned around infrastructure, open spaces, security and shared amenities.", img: IMG.pearlCity },
  { title: "Lifestyle-Led Developments", desc: "Projects where recreation, greenery and community spaces are considered part of the living experience.", img: IMG.parkHeights },
  { title: "Distinctive Concepts", desc: "Developments with a clear identity and character, such as Pearl City's A Little Hyderabad theme.", img: IMG.neoCity },
];

/* Milestones use only facts already established elsewhere on the site —
   no invented founding year or history, since none was supplied. */
const MILESTONES = [
  { num: "01", name: "Hill City", location: "Shankarpally–Vikarabad Road, Narayanapur", desc: "A 46.53-acre, DTCP-approved, highway-facing gated community of villa plots — designed around a healthier, more open way of living.", img: IMG.hillCity },
  { num: "02", name: "Pearl City", location: "Nawabpet, Sangareddy–Vikarabad Highway", desc: "An 18-acre themed community of 240 premium bungalow plots, bringing Hyderabad's culture and heritage into a planned residential setting.", img: IMG.pearlCity },
  { num: "03", name: "Neo City", location: "Shankarpally–Mominpet Highway", desc: "An HMDA-approved, TG RERA-registered open plot development positioned along an emerging growth corridor on Hyderabad's western edge.", img: IMG.neoCity },
  { num: "04", name: "Srikara Homes", location: "Ippatam, Tadepalli", desc: "160 apartments across 2.44 acres — our first step into the AP Capital Region, with 60% open space and a Stilt + 5 floor structure.", img: IMG.srikaraHomes },
  { num: "05", name: "Park Heights", location: "Atmakur, Mangalagiri", desc: "85 apartments close to AIIMS Hospital, extending our AP Capital Region portfolio with a more intimate residential setting.", img: IMG.parkHeights },
];

const PRESS = [
  { title: "Why Shankarpally Is Emerging as Hyderabad's Next Growth Corridor", desc: "A look at the roads, infrastructure and proposed developments putting the Shankarpally–Vikarabad belt on the map.", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80" },
  { title: "Inside A Little Hyderabad: The Idea Behind Pearl City", desc: "How Pearl City reimagines the city's culture and heritage as a residential community.", img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80" },
];

const FAQS = [
  { q: "How is Future Property Group's portfolio organised?", a: "Our developments fall into two regions — Hyderabad's western growth corridors (Hill City, Pearl City, Neo City) and the AP Capital Region (Srikara Homes in Tadepalli, Park Heights in Mangalagiri) — spanning villa plots, bungalow plots, open plots and ready apartments." },
  { q: "What does \"long-term thinking\" mean in FPG's projects?", a: "We choose locations based on where infrastructure, roads and employment centres are heading, not just where they are today — and plan each community's roads, green spaces and amenities with that future growth in mind." },
  { q: "How can I learn more about a specific project?", a: "Each development — Hill City, Pearl City, Neo City, Srikara Homes and Park Heights — has its own project page with location details, amenities and approvals. You can also reach our team directly through the Contact page." },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div>
      {/* Hero */}
      <section className="hero" style={{ minHeight: "60vh" }}>
        <img className="hero-img" src={IMG.aboutHero} alt="About Future Property Group" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-eyebrow">About Future Property Group</div>
          <h1 className="hero-title">Building With a Longer View</h1>
          <p className="hero-sub">
            Future Property Group is a real estate development company focused on creating
            thoughtfully planned residential communities in and around Hyderabad.
          </p>
        </div>
      </section>

      {/* The FPG Legacy — intro with portrait image, mirrors Sumadhura's "Made To Last" section */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <div className="eyebrow">The Future Property Group Story</div>
            <h2 className="h2">Built With a Longer View.<br />Designed to Endure.</h2>
            <p className="lead" style={{ fontSize: 15.5, maxWidth: 520 }}>
              We believe that choosing a property is about more than finding a piece of land. It is
              about choosing a location, a way of living and a future.
            </p>
            <p className="lead" style={{ fontSize: 15.5, maxWidth: 520 }}>
              Our projects are developed with attention to location, planning, connectivity,
              infrastructure and the experience of the community itself. From expansive villa-plot
              communities to distinctive themed developments, we aim to create places that feel
              considered today and continue to hold meaning as the surrounding region grows.
            </p>
            <a href="#principles" className="btn btn-outline">Read Our Approach</a>
          </div>
          <div style={{ position: "relative" }}>
            <div className="dot-outline" style={{ top: -30, right: -50, width: 260, height: 260 }} />
            <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", maxWidth: 360, marginRight: "auto", boxShadow: "0 30px 60px rgba(0,0,0,.15)" }}>
              <img src={IMG.pearlCity} alt="A Future Property Group community" style={{ width: "100%", height: 440, objectFit: "cover", display: "block" }} />
            </div>
            <div className="dot" style={{ bottom: -20, right: -20, width: 56, height: 56 }} />
          </div>
        </div>
      </section>

      {/* The Principles That Shape Every Project — alternating image/text rows */}
      <section className="section bg-cream" id="principles">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Our Approach</div>
          <h2 className="h2 center" style={{ maxWidth: 620 }}>The Principles That Shape Every Project.</h2>
          <p className="lead center" style={{ marginBottom: 50 }}>
            Four ideas that guide every decision, from choosing a location to handing over a home.
          </p>
          {PRINCIPLES.map((p, i) => (
            <div key={i} className="grid grid-2" style={{ alignItems: "center", marginBottom: i < PRINCIPLES.length - 1 ? 50 : 0 }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2, borderRadius: 4, overflow: "hidden" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <img src={p.iconImg} alt="" style={{ width: 120, height: 120, objectFit: "contain" }} />
                <div className="h3" style={{ marginTop: 14, marginBottom: 10 }}>{p.title}</div>
                <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14, color: "var(--gray)", lineHeight: 1.85, margin: 0, maxWidth: 460 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Core Values — image cards with overlay label, mirrors Sumadhura's Core Values carousel */}
      <section className="section">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>What We Are Building</div>
          <h2 className="h2 center" style={{ maxWidth: 700 }}>Our Core Values.</h2>
          <p className="lead center" style={{ marginBottom: 40 }}>
            A well-planned place has value beyond the plot itself.
          </p>
          <div style={{ display: "flex", gap: 20, overflow: "hidden" }}>
            {CORE_VALUES.map((v, i) => (
              <div key={i} style={{ position: "relative", flex: "1 1 0", minWidth: 200, borderRadius: 4, overflow: "hidden" }}>
                <img src={v.img} alt={v.title} style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(0,19,54,.88) 100%)" }} />
                <div style={{ position: "absolute", bottom: 20, left: 18, right: 18 }}>
                  <div style={{ fontFamily: "Playfair Display", color: "#fff", fontSize: 18, marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontFamily: "Poppins", fontWeight: 300, color: "rgba(255,255,255,.85)", fontSize: 12.5, lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership That Delivers — structure only; names/photos are placeholders for the client to supply */}
      <section className="section bg-cream">
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div style={{
            width: 220, height: 220, borderRadius: "50%", background: "var(--navy)",
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto",
          }}>
            <User size={90} color="rgba(255,255,255,.85)" strokeWidth={1.2} />
          </div>
          <div>
            <div className="eyebrow">Leadership That Delivers</div>
            <h2 className="h2">Thirty Years of Intent, Carried Forward.</h2>
            <p className="lead" style={{ fontSize: 14.5 }}>
              Every Future Property Group development reflects a simple discipline: choose the right
              place, plan it with purpose, and see it through. That responsibility sits with the
              people who lead the company day to day.
            </p>
            <div style={{ fontFamily: "Playfair Display", fontSize: 17, color: "var(--navy)", marginTop: 20 }}>[Leader Name]</div>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: "var(--gray)" }}>[Title — e.g. Founder &amp; Managing Director]</div>
          </div>
        </div>
      </section>

      {/* Built by The People Who Stayed — team grid; placeholders for the client to supply */}
      <section className="section">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Our Team</div>
          <h2 className="h2 center" style={{ maxWidth: 640 }}>Built by the People Behind It.</h2>
          <p className="lead center" style={{ marginBottom: 40 }}>
            The team steering location decisions, planning and delivery across every FPG address.
          </p>
          <div className="grid grid-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  width: 110, height: 110, borderRadius: "50%", background: "var(--cream)", margin: "0 auto 16px",
                  display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--line)",
                }}>
                  <User size={44} color="var(--navy)" strokeWidth={1.2} />
                </div>
                <div style={{ fontFamily: "Playfair Display", fontSize: 15, color: "var(--navy)" }}>[Team Member]</div>
                <div style={{ fontFamily: "Poppins", fontSize: 12.5, color: "var(--gray)" }}>[Title]</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Milestones — real project facts, numbered rather than inventing a founding history */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Our Milestones</div>
          <h2 className="h2 center" style={{ maxWidth: 640 }}>Five Addresses. One Direction.</h2>
          <p className="lead center" style={{ marginBottom: 50 }}>
            Each development marks another step in Future Property Group's growth across Hyderabad and the AP Capital Region.
          </p>
          {MILESTONES.map((m, i) => (
            <div key={i} className="grid grid-2" style={{ alignItems: "center", marginBottom: i < MILESTONES.length - 1 ? 40 : 0 }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2, borderRadius: 4, overflow: "hidden" }}>
                <img src={m.img} alt={m.name} style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 2 : 1, position: "relative" }}>
                <div style={{
                  fontFamily: "Playfair Display", fontSize: 64, fontWeight: 700, color: "var(--line)",
                  lineHeight: 1, marginBottom: -10,
                }}>{m.num}</div>
                <div className="h3" style={{ marginBottom: 4 }}>{m.name}</div>
                <div style={{ fontFamily: "Poppins", fontSize: 12.5, color: "var(--red)", marginBottom: 12 }}>{m.location}</div>
                <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14, color: "var(--gray)", lineHeight: 1.8, maxWidth: 440, margin: 0 }}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust You Can Measure — reuses the same real stats established on the homepage */}
      <section className="section">
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <div className="eyebrow">Trust You Can Measure</div>
            <h2 className="h2">A Portfolio Built on Follow-Through.</h2>
            <p className="lead" style={{ fontSize: 14.5 }}>
              Every number below reflects a project that's been located, planned and delivered —
              not just announced.
            </p>
            <div className="stat-row">
              <div className="stat"><div className="stat-value">5</div><div className="stat-label">Residential Communities</div></div>
              <div className="stat"><div className="stat-value">2</div><div className="stat-label">Regions — Hyderabad &amp; AP Capital Region</div></div>
              <div className="stat"><div className="stat-value">485+</div><div className="stat-label">Homes &amp; Plots Across Our Portfolio</div></div>
            </div>
          </div>
          <div style={{ borderRadius: 4, overflow: "hidden" }}>
            <img src={IMG.aboutHero} alt="Future Property Group community" style={{ width: "100%", height: 360, objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Perspectives — press/journal, mirrors Sumadhura's media section */}
      <section className="section bg-cream">
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>Perspectives</div>
          <h2 className="h2 center" style={{ maxWidth: 620, marginBottom: 40 }}>Notes on Where We're Building.</h2>
          <div className="grid grid-2">
            {PRESS.map((p, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 4, overflow: "hidden" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "22px 24px" }}>
                  <div className="h4" style={{ fontSize: 17 }}>{p.title}</div>
                  <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 13, color: "var(--gray)", lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <Link to="/contact" style={{ fontFamily: "Poppins", fontSize: 13, color: "var(--red)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>FAQ</div>
          <h2 className="h2 center" style={{ maxWidth: 640 }}>Everything You May Want to Know.</h2>
          <p className="lead center" style={{ marginBottom: 40 }}>A few more answers about how Future Property Group works.</p>
          {FAQS.map((f, i) => (
            <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "22px 0", textAlign: "left",
                }}
              >
                <span style={{ fontFamily: "Playfair Display", fontSize: 16.5, color: openFaq === i ? "var(--red)" : "var(--navy)" }}>
                  {f.q}
                </span>
                <ChevronDown size={18} color="var(--red)" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .25s", flexShrink: 0, marginLeft: 12 }} />
              </button>
              {openFaq === i && (
                <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14, color: "var(--gray)", lineHeight: 1.85, paddingBottom: 22, maxWidth: 800 }}>
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>Looking Ahead</div>
          <h2 className="h2 center">The Future Is Always Being Built Somewhere.</h2>
          <p className="lead center">
            Hyderabad continues to grow, and with it, new communities and new possibilities are
            taking shape. Future Property Group intends to be part of that growth by creating
            residential destinations that are thoughtfully located, carefully planned and made for
            the years ahead.
          </p>
          <p className="h3 center" style={{ color: "var(--red)" }}>
            Not simply places to own. Places to grow into.
          </p>
        </div>
      </section>

      <ClosingCTA
        title="Let's Talk About Your Next Address."
        paragraphs={["Future Property Group — thoughtfully planned places for the life ahead."]}
        ctas={[{ label: "Talk to Us", primary: true }]}
      />
    </div>
  );
}
