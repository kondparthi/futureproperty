import React, { useState, useEffect, useRef } from "react";
import {
  Search, Menu, X, ChevronDown, ChevronLeft, ChevronRight,
  ArrowRight, ArrowUpRight, Play, Phone, Mail, MapPin,
  MessageCircle, Volume2, VolumeX, Award
} from "lucide-react";

/* lucide-react dropped brand/logo icons — small inline SVG stand-ins */
function FacebookIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <path d="M15 3h-2a4 4 0 0 0-4 4v3H7v4h2v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
    </svg>
  );
}
function LinkedinIcon({ size = 14, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="7" y1="10" x2="7" y2="17" />
      <circle cx="7" cy="7" r="1" fill={color} stroke="none" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <line x1="11" y1="10" x2="11" y2="17" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/*  Design tokens                                                          */
/* ---------------------------------------------------------------------- */
const C = {
  gold: "#C39B61",
  goldSoft: "#D4AD76",
  cream: "#EAE2D0",
  dark: "#0A0A09",
  charcoal: "#242322",
  ink: "#33312C",
  gray: "#67655F",
  lightGray: "#9C978E",
  offwhite: "#FAF8F3",
  white: "#FFFFFF",
  line: "#E6E1D3",
};

const FONTS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
`;

/* ---------------------------------------------------------------------- */
/*  Image bank (stock photography standing in for real project imagery)   */
/* ---------------------------------------------------------------------- */
const IMG = {
  heroCity: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1800&q=80",
  itsForYou: "https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=900&q=80",
  vResidential: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80",
  vCommercial: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=700&q=80",
  vPlots: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=700&q=80",
  vLogistics: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80",
  sustainability: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=900&q=80",
  standard1: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=80",
  standard2: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&q=80",
  standard3: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
  standard4: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=500&q=80",
  ctaBuilding: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1800&q=80",
};

const PROJECTS = [
  {
    num: "01 / 06",
    location: "Whitefield, Bengaluru",
    name: "Sumadhura Edition",
    type: "Residential",
    bhk: "3 & 4 BHK",
    desc: "An iconic Royal Address where British-inspired architecture and modern luxury live in perfect harmony.",
    img: "https://images.unsplash.com/photo-1622015663084-307d19eabca2?w=1400&q=80",
  },
  {
    num: "02 / 06",
    location: "Financial District, Hyderabad",
    name: "Sumadhura Palais Royale",
    type: "Residential",
    bhk: "4 & 5 BHK",
    desc: "A 52-floor low density, ultra luxury masterpiece shaped by sky lounges, biophilic design and pure grandeur.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
  },
  {
    num: "03 / 06",
    location: "Panathur, Bengaluru",
    name: "Sumadhura Elysium",
    type: "Residential",
    bhk: "3 & 4 BHK",
    desc: "Designed to bring rare tranquility to the heart of Bengaluru's most dynamic IT corridor.",
    img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=80",
  },
  {
    num: "04 / 06",
    location: "Near Bengaluru Airport Toll Gate",
    name: "Sumadhura Panorama",
    type: "Plotted Development",
    bhk: "Starting at 1200 sq.ft",
    desc: "Your plot, your pace, your legacy built where North Bengaluru is headed next.",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80",
  },
  {
    num: "05 / 06",
    location: "Whitefield, Bengaluru",
    name: "Sumadhura Folium",
    type: "Residential",
    bhk: "3 & 4 BHK",
    desc: "A flagship address shaped by skyline views, intuitive design and seamless connectivity.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
  },
  {
    num: "06 / 06",
    location: "Behind Manyata Tech Park, Bengaluru",
    name: "Sumadhura Solea",
    type: "Residential",
    bhk: "3 & 4 BHK",
    desc: "A Mediterranean-inspired enclave shaped by warm facades, textured surfaces and coastal calm.",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1400&q=80",
  },
];

const STANDARDS = [
  { title: "Locations With Foresight", img: IMG.standard1 },
  { title: "Design Speaks Quietly", img: IMG.standard2 },
  { title: "Quality Without Shortcut", img: IMG.standard3 },
  { title: "Timeline We Keep", img: IMG.standard4 },
];

const AWARDS = [
  { title: "ET Real Estate Awards 2026", desc: "Real View and Branded Clubhouse initiatives awarded 'Excellence in Customer Service' at a national level" },
  { title: "ET Real Estate Awards 2026", desc: "The Olympus awarded 'High-end Residential Project'" },
  { title: "ET Real Estate Awards 2026", desc: "Sumadhura Logistics Park awarded 'Industrial / Warehousing Project' in South Zone" },
  { title: "3rd Realty+ Excellence Awards, Hyderabad", desc: "Sumadhura Palais Royale awarded 'Iconic Project of the Year' and 'Skyscraper of the Year'" },
  { title: "3rd Realty+ Excellence Awards, Hyderabad", desc: "The Olympus awarded in 'Excellence in Delivery' category" },
];

const TESTIMONIALS = [
  {
    quote: "Sumadhura connected with what I was looking for right from the beginning. Sarang's floor plan sealed the deal — it is thoughtfully designed and clearly explained by a team that knew every detail. The option to customize the dining area your way is what sets this apart. It's customer-first living, built right into the design.",
    project: "Sarang By Sumadhura",
    name: "Mr. Sathkirthi S Vasuki",
    city: "Bengaluru",
  },
  {
    quote: "The build quality is exceptional, the spaces are generous, and the amenities are designed with real intention — it's not just an add-on. I visited the site on a Friday evening and booked it the very next morning. A decision that big, made that fast, says everything about the confidence Sumadhura inspires.",
    project: "Gardens By The Brooks",
    name: "Mr. Brijesh & Mrs. Supriya",
    city: "Hyderabad",
  },
  {
    quote: "I am thrilled to call Folium my dream home. Two things stood out for me — the Sumadhura name, which speaks for itself, and the location. It is a prime address with a beautiful landscape, and the lake-facing view is an added bonus that makes it truly special. I've already started referring my friends to Folium.",
    project: "Folium By Sumadhura",
    name: "Happy Resident",
    city: "",
  },
  {
    quote: "The concept of a world-class associated living experience in South India is rare. The attention to lifestyle within the project is a perfect experience — had a wonderful journey with the Sumadhura team from booking to handover.",
    project: "Sumadhura Palais Royale",
    name: "Ms. Reshma",
    city: "Hyderabad",
  },
];

const JOURNAL = [
  { date: "July 10, 2026", title: "Panathur, Bangalore: Why Land and Apartment Prices Are Rising in This IT Corridor", img: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=600&q=80" },
  { date: "June 08, 2026", title: "Hyderabad's Financial District: Why Two Sumadhura Addresses Now Anchor the City's Most-Wanted Postcode", img: "https://images.unsplash.com/photo-1481253127861-534498168948?w=600&q=80" },
  { date: "June 05, 2026", title: "9 Things Inside Club Sumadhura at Folium That Aren't in Other Clubhouses", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80" },
];

const MEDIA = [
  { date: "May 30, 2026", title: "Panathur's Rise, As Told By An Insider", desc: "Sumadhura's Director Mr. Bharat Kumar Kanduluri reveals what's fueling Panathur's rapid climb on Bengaluru's realty map.", img: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=700&q=80" },
  { date: "August 04, 2026", title: "Sumadhura Group Inks JDA For Rs 3,500 Crore Development In East Bengaluru", desc: "Developing a premium residential community on seventeen acres, in Whitefield-Kannamangala Corridor with green environment and seamless connectivity.", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80" },
];

const FAQS = [
  { q: "Which cities does Sumadhura Group operate in?", a: "Sumadhura Group is a real estate developer that operates in Bengaluru and Hyderabad, India. Founded in 1995 in Hyderabad, the company expanded into Bengaluru in the early 2000s. Its Bengaluru projects are concentrated in Whitefield, Panathur, Marathahalli, Sarjapur Road, Devanahalli, and near Manyata Tech Park, while its Hyderabad projects are concentrated in the Financial District, Gachibowli, Shamshabad, and Kondapur." },
  { q: "Which are the latest Sumadhura projects?", a: "The latest signature addresses include Sumadhura Palais Royale in the Financial District, Hyderabad, and Sumadhura Edition, Elysium, Folium and Solea across Bengaluru's Whitefield, Panathur and Manyata Tech Park micro-markets." },
  { q: "What types of homes does Sumadhura offer?", a: "Sumadhura builds premium residential apartments (3, 4 & 5 BHK), plotted developments, commercial spaces and logistics & warehousing facilities across Bengaluru and Hyderabad." },
  { q: "Is Sumadhura Group RERA registered?", a: "Yes, every Sumadhura project is registered under the respective state RERA authority before it is opened for sale." },
  { q: "What is the price range of Sumadhura apartments?", a: "Pricing varies by project, location and configuration. Reach out to our sales team for the latest price list on any active project." },
  { q: "How many homes has Sumadhura delivered?", a: "Sumadhura has delivered over 17+ million sq. ft. across 56+ landmark developments, home to more than 12,000 happy families." },
  { q: "How can I book a site visit at a Sumadhura project?", a: "You can schedule a site visit by calling +91 70450 16000, emailing enquiries@sumadhuragroup.com, or using the 'Enquire Now' button on any project page." },
];

/* ---------------------------------------------------------------------- */
/*  Small helpers                                                          */
/* ---------------------------------------------------------------------- */
function SectionEyebrow({ children }) {
  return (
    <div style={{
      fontFamily: "Poppins", fontSize: 12, letterSpacing: 3, fontWeight: 600,
      color: C.gold, textTransform: "uppercase", marginBottom: 10,
    }}>{children}</div>
  );
}

function SectionTitle({ children, center }) {
  return (
    <h2 style={{
      fontFamily: "Playfair Display", fontWeight: 600, color: C.gold,
      fontSize: "clamp(28px,3.4vw,42px)", margin: "0 0 14px 0",
      textAlign: center ? "center" : "left", lineHeight: 1.15,
    }}>{children}</h2>
  );
}

function GoldButton({ children, dark, ...props }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Poppins", fontWeight: 500, fontSize: 14, cursor: "pointer",
        padding: "13px 30px", borderRadius: 999, border: `1px solid ${C.gold}`,
        background: hover ? C.gold : "transparent",
        color: hover ? "#fff" : C.gold,
        display: "inline-flex", alignItems: "center", gap: 8,
        transition: "all .25s ease", whiteSpace: "nowrap",
      }}
    >{children}</button>
  );
}

function SolidButton({ children, ...props }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...props}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "Poppins", fontWeight: 500, fontSize: 14, cursor: "pointer",
        padding: "13px 28px", borderRadius: 999, border: `1px solid ${C.gold}`,
        background: hover ? "transparent" : C.gold,
        color: hover ? C.gold : "#fff",
        display: "inline-flex", alignItems: "center", gap: 8,
        transition: "all .25s ease", whiteSpace: "nowrap",
      }}
    >{children}</button>
  );
}

function CircleArrow({ dir = "right", onClick, small }) {
  const [hover, setHover] = useState(false);
  const size = small ? 38 : 44;
  return (
    <button onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        width: size, height: size, borderRadius: "50%", border: `1px solid ${C.gold}`,
        background: hover ? C.gold : "transparent", display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer", transition: "all .2s ease", flexShrink: 0,
      }}>
      {dir === "right"
        ? <ChevronRight size={18} color={hover ? "#fff" : C.gold} />
        : <ChevronLeft size={18} color={hover ? "#fff" : C.gold} />}
    </button>
  );
}

function DecorDot({ style }) {
  return <div style={{
    position: "absolute", width: 46, height: 46, borderRadius: "50%",
    background: C.cream, ...style,
  }} />;
}

/* ---------------------------------------------------------------------- */
/*  Header                                                                  */
/* ---------------------------------------------------------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = ["Residential", "Commercial", "Plots", "Logistics", "About Us", "Contact Us"];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,9,0.94)" : "linear-gradient(180deg, rgba(0,0,0,0.55), transparent)",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      transition: "background .3s ease", padding: "16px 5%",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div>
        <div style={{ fontFamily: "Playfair Display", fontSize: 22, letterSpacing: 3, color: C.gold, fontWeight: 700 }}>SUMADHURA</div>
        <div style={{ fontFamily: "Poppins", fontSize: 8, letterSpacing: 2, color: "#fff", opacity: .8 }}>FOUNDATION OF HAPPINESS</div>
      </div>
      <nav style={{ display: "flex", alignItems: "center", gap: 30 }} className="desktop-nav">
        {links.map(l => (
          <a key={l} href="#" style={{
            fontFamily: "Poppins", fontSize: 14, color: "#fff", textDecoration: "none",
            display: "flex", alignItems: "center", gap: 4, opacity: .92,
          }}>{l}{(l === "Residential" || l === "Commercial" || l === "Plots" || l === "Logistics") && <ChevronDown size={13} />}</a>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button style={{
          width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,.4)",
          background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }} className="desktop-nav"><Search size={15} color="#fff" /></button>
        <SolidButton className="desktop-nav" style={{ padding: "11px 22px" }}>☰</SolidButton>
        <button onClick={() => setOpen(!open)} style={{
          background: "none", border: "none", cursor: "pointer", display: "none",
        }} className="mobile-menu-btn">
          {open ? <X color="#fff" size={26} /> : <Menu color="#fff" size={26} />}
        </button>
      </div>
      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0, background: C.dark,
          padding: "20px 5%", display: "flex", flexDirection: "column", gap: 18,
        }}>
          {links.map(l => (
            <a key={l} href="#" style={{ fontFamily: "Poppins", color: "#fff", fontSize: 15, textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------------- */
/*  Hero                                                                    */
/* ---------------------------------------------------------------------- */
function Hero() {
  const [muted, setMuted] = useState(true);
  return (
    <section style={{
      position: "relative", height: "92vh", minHeight: 560, overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <img src={IMG.heroCity} alt="Sumadhura skyline" style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(10,10,10,.55) 0%, rgba(10,10,10,.15) 35%, rgba(10,10,10,.15) 60%, rgba(10,10,10,.85) 100%)",
      }} />
      <div style={{ position: "relative", textAlign: "center", padding: "0 20px", zIndex: 2 }}>
        <p style={{
          fontFamily: "Poppins", fontWeight: 500, fontSize: "clamp(15px,2.2vw,26px)", color: "#fff", margin: 0,
        }}>
          <span style={{ color: C.goldSoft, fontWeight: 700 }}>17+ Million</span> Sq. Ft. Delivered &nbsp;|&nbsp;
          <span style={{ color: C.goldSoft, fontWeight: 700 }}> 40+ Million</span> Sq. Ft. Ongoing
        </p>
      </div>
      <button onClick={() => setMuted(!muted)} style={{
        position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)",
        width: 42, height: 42, borderRadius: "50%", background: "rgba(0,0,0,.45)",
        border: "1px solid rgba(255,255,255,.5)", display: "flex", alignItems: "center",
        justifyContent: "center", cursor: "pointer", zIndex: 2,
      }}>
        {muted ? <VolumeX size={17} color="#fff" /> : <Volume2 size={17} color="#fff" />}
      </button>
      <div style={{
        position: "absolute", bottom: 36, right: 40, width: 50, height: 50, borderRadius: "50%",
        border: "1px solid rgba(255,255,255,.5)", zIndex: 2,
      }} />
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Intro                                                                   */
/* ---------------------------------------------------------------------- */
function Intro() {
  const stats = [
    ["30+", "Years of Legacy"], ["56+", "Landmark Delivered"],
    ["17+", "Million Sq. Ft. Delivered"], ["12K+", "Happy Families"],
  ];
  return (
    <section style={{ background: C.white, padding: "90px 5% 60px", position: "relative", overflow: "hidden" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1.1fr 0.7fr", gap: 60, maxWidth: 1300, margin: "0 auto", alignItems: "start",
      }} className="intro-grid">
        <div>
          <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14, marginBottom: 14, maxWidth: 480 }}>
            The Sumadhura Group Luxury Residential &amp; Commercial Projects In Bengaluru &amp; Hyderabad
          </p>
          <h1 style={{
            fontFamily: "Playfair Display", fontWeight: 600, color: C.gold,
            fontSize: "clamp(30px,3.6vw,44px)", lineHeight: 1.2, margin: "0 0 22px 0", maxWidth: 560,
          }}>We Don't Build Homes.<br />We Build Legacies.</h1>
          <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, lineHeight: 1.9, maxWidth: 520, marginBottom: 14 }}>
            In 1995, we started with one belief: that a home built with honesty and craft will always stand apart.
            Three decades on, that belief has shaped the skylines of Bengaluru and Hyderabad with one considered
            decision at a time. At Sumadhura, we have never built for volume. We build for the people who will live,
            work, and grow within what we create. Because a great address is not measured in square feet. It is
            measured in the quality of life it makes possible.
          </p>
          <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, lineHeight: 1.9, maxWidth: 520, marginBottom: 30 }}>
            Shaping skylines and enriching lives across Bengaluru and Hyderabad through premium residences,
            future-ready workspaces, and communities built on trust.
          </p>
          <GoldButton>Explore Now <ArrowUpRight size={15} /></GoldButton>
          <div style={{ display: "flex", gap: 40, marginTop: 50, flexWrap: "wrap" }}>
            {stats.map(([n, l], i) => (
              <div key={i} style={{ paddingRight: 40, borderRight: i < 3 ? `1px solid ${C.line}` : "none" }}>
                <div style={{ fontFamily: "Playfair Display", fontSize: 34, color: C.ink, fontWeight: 600 }}>{n}</div>
                <div style={{ fontFamily: "Poppins", fontSize: 12.5, color: C.gray, marginTop: 4, maxWidth: 100 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <DecorDot style={{ top: -20, right: 40, width: 30, height: 30 }} />
          <div style={{
            position: "absolute", top: -30, left: -60, width: 280, height: 280, border: `1px solid ${C.line}`,
            borderRadius: "50%", borderBottomColor: "transparent", borderLeftColor: "transparent",
          }} className="desktop-nav" />
          <div style={{
            position: "relative", borderRadius: 4, overflow: "hidden", maxWidth: 340, marginLeft: "auto",
            boxShadow: "0 30px 60px rgba(0,0,0,.15)",
          }}>
            <img src={IMG.itsForYou} alt="It's just for you" style={{ width: "100%", display: "block", height: 420, objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 26, left: 24, fontFamily: "Playfair Display", color: "#fff", fontSize: 20, lineHeight: 1.3 }}>
              IT'S JUST<br />FOR YOU
            </div>
          </div>
          <DecorDot style={{ bottom: -20, left: -20, width: 56, height: 56 }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Verticals                                                               */
/* ---------------------------------------------------------------------- */
function Verticals() {
  const items = [
    ["Residential", IMG.vResidential], ["Commercial", IMG.vCommercial],
    ["Plotted Development", IMG.vPlots], ["Logistics & Warehousing", IMG.vLogistics],
  ];
  return (
    <section style={{ background: C.white, padding: "70px 5% 90px", position: "relative" }}>
      <DecorDot style={{ top: 30, right: 0, width: 32, height: 32 }} />
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 50px" }}>
        <SectionTitle center>Built Different. Across Every Vertical.</SectionTitle>
        <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, lineHeight: 1.8 }}>
          Whether it's a dream home, a thriving commercial space, a plotted development, or a world-class
          warehousing facility, every vertical we build is powered by the same promise: excellence, without compromise.
        </p>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, maxWidth: 1300, margin: "0 auto",
      }} className="verticals-grid">
        {items.map(([title, img]) => (
          <div key={title}>
            <div style={{ borderRadius: 4, overflow: "hidden", marginBottom: 16 }}>
              <img src={img} alt={title} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ fontFamily: "Playfair Display", fontSize: 19, color: C.ink }}>{title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Landmarks (sticky stacked project cards)                               */
/* ---------------------------------------------------------------------- */
function Landmarks() {
  return (
    <section style={{ background: C.dark, padding: "70px 0 0" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px", padding: "0 5%" }}>
        <SectionTitle center>Landmarks of Excellence</SectionTitle>
        <p style={{ fontFamily: "Poppins", color: "#bdb8ac", fontSize: 14.5 }}>
          Spaces that inspire, endure, and redefine the way you live and work.
        </p>
      </div>
      <div>
        {PROJECTS.map((p, i) => (
          <div key={p.name} style={{
            position: "sticky", top: 0, height: "88vh", minHeight: 480, zIndex: i + 1,
            overflow: "hidden", borderTop: i === 0 ? "none" : `1px solid rgba(255,255,255,.08)`,
          }}>
            <img src={p.img} alt={p.name} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,.82) 0%, rgba(0,0,0,.35) 45%, rgba(0,0,0,.15) 100%)" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 6%", maxWidth: 560 }}>
              <div style={{ fontFamily: "Poppins", fontSize: 12, letterSpacing: 3, color: "#cfcabd", marginBottom: 10 }}>SIGNATURE &middot; {p.num}</div>
              <div style={{ fontFamily: "Poppins", fontSize: 13, color: "#e7e2d6", marginBottom: 6 }}>{p.location}</div>
              <h3 style={{ fontFamily: "Playfair Display", fontSize: "clamp(28px,3vw,38px)", color: "#fff", margin: "0 0 16px 0" }}>{p.name}</h3>
              <div style={{ display: "flex", gap: 14, alignItems: "center", fontFamily: "Poppins", fontSize: 13, color: "#e7e2d6", marginBottom: 18 }}>
                <span>▦ {p.type}</span><span>|</span><span>{p.bhk}</span>
              </div>
              <p style={{ fontFamily: "Poppins", fontSize: 14, color: "#d8d3c6", lineHeight: 1.8, maxWidth: 420, marginBottom: 26 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 14 }}>
                <SolidButton>View Project</SolidButton>
                <GoldButton style={{ background: "#fff", color: C.ink, border: "1px solid #fff" }}>Download Brochure ⬇</GoldButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Sustainability                                                          */
/* ---------------------------------------------------------------------- */
function Sustainability() {
  const stats = [["5", "IGBC Platinum Certified"], ["3", "IGBC Gold Certified"], ["2", "IGBC Silver Certified"]];
  return (
    <section style={{ background: C.white, padding: "100px 5%", position: "relative" }}>
      <DecorDot style={{ top: 40, right: 0, width: 30, height: 30 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 0.8fr", gap: 60, maxWidth: 1300, margin: "0 auto", alignItems: "center" }} className="intro-grid">
        <div>
          <SectionEyebrow>Sustainability</SectionEyebrow>
          <SectionTitle>Less Footprint. More Life.</SectionTitle>
          <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, lineHeight: 1.9, maxWidth: 480, marginBottom: 34 }}>
            It started with a choice: build faster, or build right. We chose right. That choice shapes the way
            we design — by embracing IGBC green standards, building to consume less, conserve more, and age
            responsibly. For us, sustainability isn't a department. It's the foundation under everything we build.
          </p>
          <div style={{ display: "flex", gap: 40 }}>
            {stats.map(([n, l], i) => (
              <div key={i} style={{ paddingRight: 40, borderRight: i < stats.length - 1 ? `1px solid ${C.line}` : "none" }}>
                <div style={{ fontFamily: "Playfair Display", fontSize: 34, color: C.ink, fontWeight: 600 }}>{n}</div>
                <div style={{ fontFamily: "Poppins", fontSize: 12.5, color: C.gray, marginTop: 4, maxWidth: 100 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderRadius: 4, overflow: "hidden" }}>
          <img src={IMG.sustainability} alt="Sustainability" style={{ width: "100%", height: 340, objectFit: "cover", display: "block" }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Standard Carousel                                                       */
/* ---------------------------------------------------------------------- */
function StandardCarousel() {
  const [start, setStart] = useState(0);
  const visible = 4;
  const max = Math.max(0, STANDARDS.length - visible);
  return (
    <section style={{ background: C.white, padding: "0 5% 90px" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px" }}>
        <SectionTitle center>The Sumadhura Standard</SectionTitle>
        <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5 }}>
          Every home we build begins with a decision, and ends with a promise kept. What you see here is what
          you will live with, beautifully, for years.
        </p>
      </div>
      <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "flex", gap: 20, overflow: "hidden" }}>
          {STANDARDS.map((s) => (
            <div key={s.title} style={{ position: "relative", flex: "1 1 0", minWidth: 200, borderRadius: 4, overflow: "hidden" }}>
              <img src={s.img} alt={s.title} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.75) 100%)" }} />
              <div style={{ position: "absolute", bottom: 18, left: 18, fontFamily: "Playfair Display", color: "#fff", fontSize: 17 }}>{s.title}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 20 }}>
          <CircleArrow dir="left" onClick={() => setStart(Math.max(0, start - 1))} small />
          <CircleArrow dir="right" onClick={() => setStart(Math.min(max, start + 1))} small />
        </div>
        <div style={{ height: 2, background: C.line, marginTop: 10, borderRadius: 2 }}>
          <div style={{ width: "35%", height: "100%", background: C.gold, borderRadius: 2 }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Awards                                                                  */
/* ---------------------------------------------------------------------- */
function Awards() {
  return (
    <section style={{ background: C.offwhite, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 50 }}>
          <div style={{ maxWidth: 560 }}>
            <SectionTitle>Awards &amp; Recognition</SectionTitle>
            <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, lineHeight: 1.8 }}>
              Recognition follows good work, and ours affirms what our homeowners already know. Every project
              reflects integrity, careful community building, and standards we refuse to compromise.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              fontFamily: "Poppins", fontSize: 13, border: `1px solid ${C.gold}`, borderRadius: 999,
              padding: "9px 18px", color: C.gold, display: "flex", alignItems: "center", gap: 6,
            }}>2026 <ChevronDown size={14} /></div>
            <CircleArrow dir="left" small /><CircleArrow dir="right" small />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 24 }} className="awards-grid">
          {AWARDS.map((a, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{
                width: 110, height: 130, margin: "0 auto 18px", borderRadius: "50% 50% 8px 8px", background: "#fff",
                border: `1px solid ${C.line}`, display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 10px 24px rgba(0,0,0,.06)",
              }}>
                <Award size={40} color={C.gold} strokeWidth={1.2} />
              </div>
              <div style={{ fontFamily: "Playfair Display", color: C.gold, fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>{a.title}</div>
              <div style={{ fontFamily: "Poppins", color: C.gray, fontSize: 12.5, lineHeight: 1.6 }}>{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Testimonials                                                            */
/* ---------------------------------------------------------------------- */
function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;
  const max = Math.max(0, TESTIMONIALS.length - visible);
  return (
    <section style={{ background: C.white, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 46 }}>
          <div style={{ maxWidth: 560 }}>
            <SectionTitle>Trust, in their words</SectionTitle>
            <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5 }}>
              Real stories from real homeowners — because the best proof of what we build is how it feels to live there.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <CircleArrow dir="left" onClick={() => setStart(Math.max(0, start - 1))} />
            <CircleArrow dir="right" onClick={() => setStart(Math.min(max, start + 1))} />
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, overflow: "hidden" }} className="testimonial-grid">
          {TESTIMONIALS.slice(start, start + visible).map((t, i) => (
            <div key={i} style={{ background: C.offwhite, borderRadius: 4, padding: "30px 26px", display: "flex", flexDirection: "column", minHeight: 300 }}>
              <div style={{ fontFamily: "Playfair Display", fontSize: 40, color: C.gold, lineHeight: .5, marginBottom: 14 }}>&ldquo;</div>
              <p style={{ fontFamily: "Poppins", fontSize: 13.5, color: C.gray, lineHeight: 1.8, flex: 1 }}>{t.quote}</p>
              <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 20, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontFamily: "Playfair Display", fontSize: 13.5, color: C.ink, marginBottom: 6 }}>{t.project}</div>
                  <div style={{ fontFamily: "Poppins", fontSize: 12, color: C.gold, fontWeight: 600 }}>{t.name.toUpperCase()}</div>
                  <div style={{ fontFamily: "Poppins", fontSize: 11.5, color: C.gray }}>{t.city}</div>
                </div>
                <div style={{
                  width: 32, height: 32, borderRadius: "50%", background: C.gold, display: "flex",
                  alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}><Play size={13} color="#fff" fill="#fff" /></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ height: 2, background: C.line, marginTop: 30, borderRadius: 2 }}>
          <div style={{ width: "30%", height: "100%", background: C.gold, borderRadius: 2 }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Journal + Media                                                         */
/* ---------------------------------------------------------------------- */
function Journal() {
  return (
    <section style={{ background: C.offwhite, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div style={{ maxWidth: 600 }}>
            <SectionTitle>The Sumadhura Journal</SectionTitle>
            <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5 }}>
              Beyond residences, Sumadhura upholds unwavering quality, strategic locations, and timeless designs across every venture.
            </p>
          </div>
          <GoldButton>Explore Now <ArrowUpRight size={15} /></GoldButton>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 26 }} className="testimonial-grid">
          {JOURNAL.map((j, i) => (
            <div key={i}>
              <div style={{ borderRadius: 4, overflow: "hidden", marginBottom: 14 }}>
                <img src={j.img} alt={j.title} style={{ width: "100%", height: 190, objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "Poppins", fontSize: 11.5, color: C.gray, marginBottom: 6 }}>
                <span>{j.date}</span>
              </div>
              <div style={{ fontFamily: "Poppins", fontSize: 14, color: C.ink, lineHeight: 1.5 }}>{j.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MediaInsights() {
  return (
    <section style={{ background: C.white, padding: "90px 5%" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div style={{ maxWidth: 620, marginBottom: 40 }}>
          <SectionTitle>Media Insights</SectionTitle>
          <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5 }}>
            Perspectives that matter. Stories that inspire. Insights that define the future of real estate.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }} className="media-grid">
          {MEDIA.map((m, i) => (
            <div key={i} style={{ background: C.offwhite, borderRadius: 4, overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img src={m.img} alt={m.title} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} />
                <div style={{
                  position: "absolute", top: 16, left: 16, background: C.gold, color: "#fff",
                  fontFamily: "Poppins", fontSize: 11.5, fontWeight: 600, padding: "6px 14px", borderRadius: 999,
                }}>{m.date}</div>
              </div>
              <div style={{ padding: "22px 24px" }}>
                <div style={{ fontFamily: "Playfair Display", fontSize: 18, color: C.ink, marginBottom: 10 }}>{m.title}</div>
                <p style={{ fontFamily: "Poppins", fontSize: 13, color: C.gray, lineHeight: 1.7, marginBottom: 18 }}>{m.desc}</p>
                <a href="#" style={{ fontFamily: "Poppins", fontSize: 13, color: C.gold, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  FAQ                                                                     */
/* ---------------------------------------------------------------------- */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section style={{ background: C.offwhite, padding: "90px 5%" }}>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 46px" }}>
        <SectionTitle center>Everything You May Want To Know</SectionTitle>
        <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5 }}>
          From finding the right home to understanding how we build, here are a few answers before you begin your journey with Sumadhura.
        </p>
      </div>
      <div style={{ maxWidth: 950, margin: "0 auto" }}>
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${C.line}` }}>
            <button onClick={() => setOpenIdx(openIdx === i ? -1 : i)} style={{
              width: "100%", background: "none", border: "none", cursor: "pointer",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "22px 0", textAlign: "left",
            }}>
              <span style={{ fontFamily: "Playfair Display", fontSize: 16, color: openIdx === i ? C.gold : C.ink }}>
                {i + 1}. {f.q}
              </span>
              <ChevronDown size={18} color={C.gold} style={{ transform: openIdx === i ? "rotate(180deg)" : "none", transition: "transform .25s", flexShrink: 0, marginLeft: 12 }} />
            </button>
            {openIdx === i && (
              <p style={{ fontFamily: "Poppins", fontSize: 13.5, color: C.gray, lineHeight: 1.8, paddingBottom: 22, maxWidth: 800 }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  CTA                                                                     */
/* ---------------------------------------------------------------------- */
function CTA() {
  return (
    <section style={{ background: C.white, padding: "90px 5% 0", textAlign: "center" }}>
      <SectionTitle center>Come Home to Sumadhura</SectionTitle>
      <p style={{ fontFamily: "Poppins", color: C.gray, fontSize: 14.5, marginBottom: 30 }}>
        Let's talk. Share your vision, and we'll explore the possibilities together.
      </p>
      <SolidButton style={{ marginBottom: 40 }}>Let's Connect</SolidButton>
      <div style={{ borderRadius: "4px 4px 0 0", overflow: "hidden" }}>
        <img src={IMG.ctaBuilding} alt="Sumadhura development" style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }} />
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/*  Footer                                                                  */
/* ---------------------------------------------------------------------- */
function Footer() {
  const cols = [
    { title: "Explore", items: ["Residential", "Commercial", "Logistics & Warehousing", "Plotted Development"] },
    { title: "Company", items: ["About Us", "Channel Partner", "Sustainability", "Contact Us"] },
    { title: "Resources", items: ["Blog"] },
    { title: "Payments", items: ["Milestone Payment", "Other Payments"] },
  ];
  return (
    <footer style={{ background: C.white, padding: "60px 5% 0" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "Playfair Display", fontSize: 30, letterSpacing: 4, color: C.gold, fontWeight: 700 }}>SUMADHURA</div>
        <div style={{ fontFamily: "Poppins", fontSize: 11, letterSpacing: 3, color: C.ink, marginTop: 6 }}>FOUNDATION OF HAPPINESS</div>
      </div>
      <div style={{ borderTop: `1px solid ${C.line}`, marginTop: 30, paddingTop: 46 }}>
        <div style={{
          maxWidth: 1300, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
          gap: 30,
        }} className="footer-grid">
          <div>
            <div style={{ fontFamily: "Playfair Display", fontSize: 18, color: C.ink, marginBottom: 18 }}>Reach Us</div>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: C.gold, marginBottom: 4 }}>Tel: <span style={{ color: C.gray }}>+91 70450 16000</span></div>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: C.gold, marginBottom: 18 }}>Email: <span style={{ color: C.gray }}>enquiries@sumadhuragroup.com</span></div>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: C.gold, marginBottom: 4 }}>Bangalore Office Address:</div>
            <p style={{ fontFamily: "Poppins", fontSize: 12.5, color: C.gray, lineHeight: 1.7, marginBottom: 16 }}>
              No.108/2, Millennia building, 1st Main, CKB Layout, MSR Layout, Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037
            </p>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: C.gold, marginBottom: 4 }}>Hyderabad Office Address:</div>
            <p style={{ fontFamily: "Poppins", fontSize: 12.5, color: C.gray, lineHeight: 1.7, marginBottom: 20 }}>
              Plot No. 1131, 8-2-2293/A/1, 2ND Floor, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500034
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[FacebookIcon, InstagramIcon, MessageCircle, Mail, LinkedinIcon].map((Icon, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: "50%", border: `1px solid ${C.gold}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}><Icon size={14} color={C.gold} /></div>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: "Playfair Display", fontSize: 18, color: C.ink, marginBottom: 18 }}>{col.title}</div>
              {col.items.map(it => (
                <div key={it} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 12 }}>
                  <ChevronRight size={12} color={C.gold} />
                  <a href="#" style={{ fontFamily: "Poppins", fontSize: 13, color: C.gray, textDecoration: "none" }}>{it}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", margin: "36px 0" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, border: `1px solid ${C.line}`,
            borderRadius: 999, padding: "10px 22px", fontFamily: "Poppins", fontSize: 13, color: C.ink,
          }}>Quick Links <ChevronDown size={14} /></div>
        </div>
        <div style={{
          borderTop: `1px solid ${C.line}`, padding: "22px 0", display: "flex", justifyContent: "space-between",
          flexWrap: "wrap", gap: 12, fontFamily: "Poppins", fontSize: 12, color: C.gray, maxWidth: 1300, margin: "0 auto",
        }}>
          <span>© 2026 Sumadhura Group. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <span>Terms &amp; Conditions</span><span>Privacy Policy</span><span>QHES Policy</span><span>Refund &amp; Cancellation Policy</span>
          </div>
        </div>
      </div>
      <a href="#" style={{
        position: "fixed", bottom: 24, left: 24, width: 52, height: 52, borderRadius: "50%",
        background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 90,
        boxShadow: "0 6px 16px rgba(0,0,0,.2)",
      }}><MessageCircle size={24} color="#fff" fill="#fff" /></a>
    </footer>
  );
}

/* ---------------------------------------------------------------------- */
/*  App                                                                     */
/* ---------------------------------------------------------------------- */
export default function SumadhuraClone() {
  return (
    <div style={{ fontFamily: "Poppins", background: C.white, overflowX: "hidden" }}>
      <style>{FONTS}{`
        * { box-sizing: border-box; }
        body { margin: 0; }
        a:hover { opacity: .75; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
          .intro-grid, .verticals-grid, .awards-grid, .testimonial-grid, .media-grid, .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Header />
      <Hero />
      <Intro />
      <Verticals />
      <Landmarks />
      <Sustainability />
      <StandardCarousel />
      <Awards />
      <Testimonials />
      <Journal />
      <MediaInsights />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
