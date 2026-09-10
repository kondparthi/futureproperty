import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, Compass, Layers, TrendingUp, ArrowRight, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { PROJECTS, IMG } from "../data/projects.js";
import { ClosingCTA } from "../components/Sections.jsx";

const WHAT_WE_DO = [
  { icon: MapPin, title: "Thoughtful Locations", desc: "We look at where Hyderabad is growing and identify locations with strong connectivity and emerging potential.", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80" },
  { icon: Layers, title: "Considered Planning", desc: "From roads and essential infrastructure to open spaces and community amenities, every element has a role to play.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80" },
  { icon: Compass, title: "Distinctive Communities", desc: "Each project has its own character — shaped around its surroundings, its purpose and the people it is designed for.", img: "https://images.unsplash.com/photo-1592595896616-c37162298647?w=500&q=80" },
  { icon: TrendingUp, title: "Long-Term Thinking", desc: "We build with today in mind, while keeping an eye on how the neighbourhood around a project will evolve.", img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=500&q=80" },
];

const JOURNAL = [
  {
    title: "Why Shankarpally Is Emerging as Hyderabad's Next Growth Corridor",
    desc: "A look at the roads, infrastructure and proposed developments putting the Shankarpally–Vikarabad belt on the map.",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
  },
  {
    title: "Inside A Little Hyderabad: The Idea Behind Pearl City",
    desc: "How Pearl City reimagines the city's culture and heritage as a residential community, from the Heritage City to FPG Kalavedika.",
    img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80",
  },
  {
    title: "Plot vs. Apartment: What First-Time Buyers Should Weigh Up",
    desc: "A practical look at how villa plots, bungalow plots and ready apartments each fit different timelines and ways of living.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
];

const FAQS = [
  {
    q: "Which locations does Future Property Group operate in?",
    a: "Our developments span Hyderabad's western and north-western growth corridors — Hill City on the Shankarpally–Vikarabad Road, Pearl City near Nawabpet, and Neo City along the Shankarpally–Mominpet Highway — as well as the AP Capital Region, with Srikara Homes in Tadepalli and Park Heights in Mangalagiri.",
  },
  {
    q: "What types of properties does FPG offer?",
    a: "Our portfolio includes villa plots (Hill City), premium bungalow plots (Pearl City), open plots (Neo City), and ready 2 & 3 BHK apartments (Srikara Homes and Park Heights).",
  },
  {
    q: "Are FPG's projects approved?",
    a: "Yes. Hill City and Pearl City are DTCP-approved, Neo City is HMDA-approved and TG RERA-registered — each project's approvals are listed on its own project page under \"At a Glance.\"",
  },
  {
    q: "What plot sizes and apartment configurations are available?",
    a: "Pearl City's bungalow plots range from 150–350 sq. yds. Srikara Homes and Park Heights both offer 2 & 3 BHK apartments, with Srikara Homes spread across a Stilt + 5 floor structure and Park Heights across G+5.",
  },
  {
    q: "Is Future Property Group only active around Hyderabad?",
    a: "Most of our current portfolio — Hill City, Pearl City and Neo City — is around Hyderabad's growth corridors, but we've also expanded into the AP Capital Region with Srikara Homes in Tadepalli and Park Heights in Mangalagiri.",
  },
  {
    q: "How can I schedule a site visit?",
    a: "You can reach our team through the Contact page, or use the \"Schedule a Visit\" option on any individual project page, and we'll help arrange a visit.",
  },
];

export default function Home() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
      {/* 01. Hero — full-bleed video, centered content, soft top/bottom fade (Sumadhura hero treatment) */}
      <section className="hero">
        <video
          ref={videoRef}
          className="hero-img"
          src="/banner.mp4"
          poster={IMG.heroHome}
          autoPlay
          muted={muted}
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-eyebrow">Future Property Group</div>
          <h1 className="hero-title">Building Places for the Future.</h1>
          <p className="hero-sub">Building thoughtful residential communities for better living in Hyderabad.</p>
          <div className="btn-row">
            <a href="#projects" className="btn btn-primary">Explore Our Projects</a>
            <Link to="/about" className="btn btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>About Future Property Group</Link>
          </div>
        </div>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          style={{
            position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
            width: 44, height: 44, borderRadius: "50%", background: "rgba(0,19,54,.45)",
            border: "1px solid rgba(255,255,255,.55)", display: "flex", alignItems: "center",
            justifyContent: "center", cursor: "pointer", zIndex: 2,
          }}
        >
          {muted ? <VolumeX size={18} color="#fff" /> : <Volume2 size={18} color="#fff" />}
        </button>
        <div className="dot" style={{ width: 50, height: 50, bottom: 40, right: 40, background: "transparent", border: "1px solid rgba(255,255,255,.5)" }} />
      </section>

      {/* 02. Introduction — two column, eyebrow + serif headline + stats, portrait image with overlay label + decorative arc (Sumadhura intro treatment) */}
      <section className="section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="container grid grid-2" style={{ alignItems: "start" }}>
          <div>
            <div className="eyebrow">Introduction</div>
            <h2 className="h2">Real Estate With a Longer View.</h2>
            <p className="lead">
              At Future Property Group, we believe a property is more than a piece of land.
              It is an address, a decision about the future, and a place where life takes shape.
            </p>
            <p className="lead">
              Our approach is centred on choosing locations with promise and creating communities
              with thought behind them. From expansive green surroundings to carefully planned
              infrastructure and lifestyle spaces, each development is shaped to offer more than a
              plot — it is designed to become a place people can see themselves growing into.
            </p>
            <Link to="/about" className="btn btn-outline">Discover Our Story</Link>

            <div className="stat-row">
              <div className="stat"><div className="stat-value">5</div><div className="stat-label">Residential Communities</div></div>
              <div className="stat"><div className="stat-value">2</div><div className="stat-label">Regions — Hyderabad &amp; AP Capital Region</div></div>
              <div className="stat"><div className="stat-value">485+</div><div className="stat-label">Homes &amp; Plots Across Our Portfolio</div></div>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div className="dot-outline" style={{ top: -30, left: -50, width: 260, height: 260 }} />
            <div style={{ position: "relative", borderRadius: 4, overflow: "hidden", maxWidth: 360, marginLeft: "auto", boxShadow: "0 30px 60px rgba(0,0,0,.15)" }}>
              <img src={IMG.aboutHero} alt="A Future Property Group community" style={{ width: "100%", height: 440, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 26, left: 24, fontFamily: "Playfair Display", color: "#fff", fontSize: 19, lineHeight: 1.3 }}>
                A TRADITION<br />OF TRUST
              </div>
            </div>
            <div className="dot" style={{ bottom: -20, left: -20, width: 56, height: 56 }} />
          </div>
        </div>
      </section>

      {/* 03. What We Do */}
      <section className="section bg-cream" style={{ position: "relative" }}>
        <div className="dot" style={{ top: 30, right: 40, width: 32, height: 32 }} />
        <div className="container">
          <div className="eyebrow center" style={{ textAlign: "center" }}>What We Do</div>
          <h2 className="h2 center" style={{ maxWidth: 620 }}>We Create Places, Not Just Plots.</h2>
          <p className="lead center" style={{ marginBottom: 50 }}>Our developments are designed with the larger picture in mind.</p>
          <div className="grid grid-4">
            {WHAT_WE_DO.map((w, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <img src={w.img} alt={w.title} style={{ width: "100%", height: 190, objectFit: "cover" }} />
                <div style={{ padding: "22px 22px 26px" }}>
                  <w.icon size={24} color="#CB0301" strokeWidth={1.6} />
                  <div className="h4" style={{ marginTop: 14 }}>{w.title}</div>
                  <p style={{ fontFamily: "Poppins", fontSize: 13.5, fontWeight: 300, color: "var(--gray)", lineHeight: 1.75, margin: 0 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Our Projects — full-bleed sticky/stacked showcase, mirroring Sumadhura's "Landmarks of Excellence" */}
      <section className="stack-section" id="projects">
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px", padding: "0 6%" }}>
          <div className="eyebrow center" style={{ textAlign: "center", color: "var(--gold)" }}>Our Projects</div>
          <h2 className="h2 center" style={{ color: "#fff" }}>Different Addresses. One Approach.</h2>
          <p className="lead center" style={{ color: "rgba(255,255,255,.75)" }}>
            Explore communities created by Future Property Group across Hyderabad's emerging growth corridors and the AP Capital Region.
          </p>
        </div>
        <div>
          {PROJECTS.map((p, i) => (
            <div key={p.slug} className="stack-panel" style={{ zIndex: i + 1, borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.08)" }}>
              <img src={p.heroImg} alt={p.name} />
              <div className="stack-overlay" />
              <div className="container stack-content">
                <div className="stack-eyebrow">{p.category}</div>
                <div className="stack-location">{p.homeMeta || p.location}</div>
                <h3 className="stack-title">{p.name}</h3>
                {p.homeEmphasis && (
                  <div style={{ fontFamily: "Poppins", fontSize: 14, color: "#fff", marginBottom: 14 }}>{p.homeEmphasis}</div>
                )}
                <p className="stack-desc">{p.homeBlurb || p.tagline}</p>
                <div className="btn-row">
                  <Link to={`/projects/${p.slug}`} className="btn btn-primary">View {p.name}</Link>
                  <Link to="/contact" className="btn btn-outline" style={{ borderColor: "#fff", color: "#fff" }}>Enquire Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05. The FPG Difference */}
      <section className="section bg-navy on-dark">
        <div className="container grid grid-2" style={{ alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">The FPG Difference</div>
            <h2 className="h2">It Starts With Where.<br />Then Comes Everything Else.</h2>
            <p className="lead" style={{ color: "rgba(255,255,255,.78)" }}>
              A good development begins long before the first road is laid. For us, it begins with the location.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,.78)", marginBottom: 18 }}>
              Our projects are positioned around Hyderabad's evolving western and north-western growth
              corridors, with access to major roads, emerging infrastructure, educational institutions,
              employment zones and future development.
            </p>
            <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,.78)", marginBottom: 18 }}>
              Pearl City, for example, sits along the Sangareddy–Vikarabad Highway and within the
              Shankarpally–Mominpet–Vikarabad growth corridor, highlighting proximity to the proposed RRR,
              TMV and other major developments.
            </p>
            <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,.78)", marginBottom: 28 }}>
              Neo City similarly highlights its position along the Shankarpally–Mominpet Highway and
              proximity to the proposed RRR, Ring Rail, TMV and Hyderabad's western IT corridor.
            </p>
            <Link to="/about" className="btn btn-gold">Explore Our Locations</Link>
          </div>
        </div>
      </section>

      {/* 06. Beyond the Plot */}
      <section className="section bg-cream" style={{ position: "relative" }}>
        <div className="dot" style={{ top: 50, right: 0, width: 30, height: 30 }} />
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div style={{ borderRadius: 4, overflow: "hidden", order: 2 }}>
            <img src={IMG.pearlCity} alt="Community spaces" style={{ height: 400, objectFit: "cover", width: "100%" }} />
          </div>
          <div style={{ order: 1 }}>
            <div className="eyebrow">Beyond the Plot</div>
            <h2 className="h2">A Place Should Feel Like<br />More Than an Investment.</h2>
            <p className="lead">
              The communities we create are designed around how people actually want to spend their time.
              Green spaces. Walking paths. Places for children. Recreation. Community gathering spaces.
              Essential infrastructure.
            </p>
            <p className="lead">
              At Pearl City, this thinking extends into spaces inspired by Hyderabad itself — from a
              Charminar-inspired gazebo and heritage-themed areas to parks, sports facilities, cycling
              and walking spaces. At Neo City, the planning includes landscaped gardens, children's
              spaces, avenue plantation, rainwater harvesting, security and internal roads.
            </p>
            <p style={{ fontFamily: "Playfair Display", fontSize: 17, color: "var(--navy)", fontStyle: "italic" }}>
              Because the value of a community is not only measured by its boundaries.
            </p>
          </div>
        </div>
      </section>

      {/* 07. Future Property Group */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>Future Property Group</div>
          <h2 className="h2 center">A Vision That Keeps Moving Forward.</h2>
          <p className="lead center">
            Future Property Group is building a portfolio of residential communities across locations
            that are becoming an important part of Hyderabad's next chapter.
          </p>
          <p className="lead center">
            Our projects may differ in scale, setting and character. What connects them is a simple belief:
          </p>
          <p className="h3 center" style={{ color: "var(--red)" }}>
            Choose the right place. Plan it well. Build it for the future.
          </p>
          <Link to="/about" className="btn btn-outline" style={{ marginTop: 10 }}>More About FPG</Link>
        </div>
      </section>

      {/* 08. The FPG Journal — mirrors Sumadhura's Journal section */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
            <div style={{ maxWidth: 600 }}>
              <div className="eyebrow">The FPG Journal</div>
              <h2 className="h2">Stories From Our Growth Corridors.</h2>
              <p className="lead" style={{ marginBottom: 0 }}>
                Beyond our projects, notes on the locations, planning decisions and everyday details behind them.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline">Explore Now</Link>
          </div>
          <div className="grid grid-3">
            {JOURNAL.map((j, i) => (
              <div key={i}>
                <img src={j.img} alt={j.title} style={{ width: "100%", height: 190, objectFit: "cover", borderRadius: 4, marginBottom: 16 }} />
                <div className="h4" style={{ fontSize: 16, marginBottom: 8 }}>{j.title}</div>
                <p style={{ fontFamily: "Poppins", fontSize: 13, fontWeight: 300, color: "var(--gray)", lineHeight: 1.7 }}>{j.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 09. FAQ — mirrors Sumadhura's "Everything You May Want To Know" */}
      <section className="section bg-cream">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="eyebrow center" style={{ textAlign: "center" }}>FAQ</div>
          <h2 className="h2 center" style={{ maxWidth: 640 }}>Everything You May Want to Know.</h2>
          <p className="lead center" style={{ marginBottom: 40 }}>
            A few answers before you begin your journey with Future Property Group.
          </p>
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
                  {i + 1}. {f.q}
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

      {/* 10. Final CTA — button + full-width photo below, mirroring Sumadhura's closing section */}
      <ClosingCTA
        title="Your Future Has an Address."
        paragraphs={["Explore the communities we've created and discover a place that feels right for what comes next."]}
        ctas={[{ label: "Explore Our Projects", primary: true }, { label: "Talk to Our Team", primary: false }]}
        image={IMG.hoembnr}
      />
    </div>
  );
}
