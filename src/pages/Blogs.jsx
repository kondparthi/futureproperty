import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { BLOGS } from "../data/blogs.js";

export default function Blogs() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(BLOGS.map(b => b.category))];

  const filtered = BLOGS.filter(b => {
    const matchesCategory = category === "All" || b.category === category;
    const matchesQuery = b.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <section className="section-sm" style={{ paddingTop: 150, paddingBottom: 30, borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div style={{ maxWidth: 620 }}>
            <div className="eyebrow">The FPG Journal</div>
            <h1 className="h1" style={{ fontSize: "clamp(28px,3.6vw,40px)" }}>What We Think About, Between Addresses.</h1>
            <p className="lead" style={{ marginBottom: 0 }}>
              Notes on locations, planning decisions and the everyday details behind Future Property Group's communities.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <div style={{ position: "relative" }}>
              <Search size={15} style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--gray)" }} />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search articles"
                style={{
                  border: "1px solid var(--line)", borderRadius: 999, padding: "11px 18px 11px 38px",
                  fontFamily: "Poppins", fontSize: 13.5, width: 220,
                }}
              />
            </div>
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              style={{
                border: "1px solid var(--line)", borderRadius: 999, padding: "11px 18px",
                fontFamily: "Poppins", fontSize: 13.5, color: "var(--navy)", background: "#fff",
              }}
            >
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ fontFamily: "Poppins", color: "var(--gray)", textAlign: "center" }}>No articles match your search.</p>
          ) : (
            <div className="grid grid-3">
              {filtered.map(b => (
                <Link key={b.slug} to={`/blogs/${b.slug}`} style={{ display: "block" }}>
                  <img src={b.heroImg} alt={b.title} style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 4, marginBottom: 16, display: "block" }} />
                  <div style={{ fontFamily: "Poppins", fontSize: 12, color: "var(--gray)", marginBottom: 8 }}>
                    {b.date} &middot; {b.readTime}
                  </div>
                  <div style={{ fontFamily: "Playfair Display", fontSize: 18, color: "var(--navy)", lineHeight: 1.4 }}>{b.title}</div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
