import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { PROJECTS } from "../data/projects.js";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const forceSolid = scrolled || location.pathname !== "/";

  return (
    <>
      <header className={`site-header ${forceSolid ? "scrolled" : ""}`}>
        <div className="container header-inner">
          <Link to="/" className="brand">
            <img src="/fpg_logo.png" alt="Future Property Group" />
            {/* <span className="brand-text">
              <span className="name" style={{ display: "block" }}>FUTURE PROPERTY GROUP</span>
              <span className="tag">A TRADITION OF TRUST</span>
            </span> */}
          </Link>

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div className="nav-dropdown">
              <span style={{ display: "flex", alignItems: "center", gap: 4, cursor: "default" }}>
                Projects <ChevronDown size={13} />
              </span>
              <div className="nav-dropdown-menu">
                {PROJECTS.map(p => (
                  <Link key={p.slug} to={`/projects/${p.slug}`}>{p.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/contact">Contact</Link>
          </nav>

          <Link to="/contact" className="btn btn-primary" style={{ padding: "12px 24px" }}>
            Enquire Now
          </Link>

          <button className="mobile-toggle" onClick={() => setMobileOpen(true)}>
            <Menu color={forceSolid ? "#fff" : "#fff"} size={26} />
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div
            onClick={() => setMobileOpen(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(0,19,54,.5)", zIndex: 290 }}
          />
          <div className="mobile-menu">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
                <img src="/fpg_logo.png" alt="Future Property Group" style={{ height: 42 }} />
              </Link>
              <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer" }}>
                <X color="#fff" size={24} />
              </button>
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div>
              <div style={{ color: "#D8AE47", fontFamily: "Poppins", fontSize: 13, letterSpacing: 2, marginBottom: 10 }}>PROJECTS</div>
              <div className="sub" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {PROJECTS.map(p => (
                  <Link key={p.slug} to={`/projects/${p.slug}`}>{p.name}</Link>
                ))}
              </div>
            </div>
            <Link to="/contact">Contact</Link>
            <Link to="/contact" className="btn btn-primary" style={{ justifyContent: "center", marginTop: 8 }}>
              Enquire Now
            </Link>
          </div>
        </>
      )}
    </>
  );
}
