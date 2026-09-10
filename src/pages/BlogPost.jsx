import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { BLOGS, getBlogBySlug } from "../data/blogs.js";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogBySlug(slug);
  const [openFaq, setOpenFaq] = useState(0);

  if (!post) return <Navigate to="/blogs" replace />;

  const related = BLOGS.filter(b => b.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <section className="section" style={{ paddingTop: 150, paddingBottom: 40 }}>
        <div className="container grid grid-2 blog-layout" style={{ alignItems: "start", gap: 60 }}>
          {/* Main column */}
          <div style={{ gridColumn: "1 / span 1" }}>
            <div className="eyebrow">{post.category}</div>
            <h1 className="h2" style={{ fontSize: "clamp(26px,3.4vw,36px)" }}>{post.title}</h1>
            <div style={{ fontFamily: "Poppins", fontSize: 13, color: "var(--gray)", marginBottom: 24 }}>
              By Future Property Group Team &middot; {post.date} &middot; {post.readTime}
            </div>
            <img src={post.heroImg} alt={post.title} style={{ width: "100%", height: 340, objectFit: "cover", borderRadius: 4, marginBottom: 30 }} />

            <div className="card-feature" style={{ marginBottom: 34 }}>
              <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14.5, color: "var(--ink)", lineHeight: 1.8, margin: 0 }}>
                {post.summary}
              </p>
            </div>

            {post.specs.length > 0 && (
              <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: 34, fontFamily: "Poppins", fontSize: 13.5 }}>
                <tbody>
                  {post.specs.map((s, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                      <td style={{ padding: "12px 14px", color: "var(--navy)", fontWeight: 500, width: "35%", background: "var(--cream)" }}>{s.label}</td>
                      <td style={{ padding: "12px 14px", color: "var(--gray)" }}>{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {post.sections.map((sec, i) => (
              <div key={i} style={{ marginBottom: 30 }}>
                <div className="h3" style={{ fontSize: 19 }}>{sec.heading}</div>
                {sec.paragraphs.map((p, j) => (
                  <p key={j} style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 14.5, color: "var(--gray)", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>
            ))}

            {post.faqs?.length > 0 && (
              <div style={{ marginTop: 40 }}>
                <div className="h3" style={{ fontSize: 19, marginBottom: 10 }}>Frequently Asked</div>
                {post.faqs.map((f, i) => (
                  <div key={i} style={{ borderBottom: "1px solid var(--line)" }}>
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      style={{
                        width: "100%", background: "none", border: "none", cursor: "pointer",
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        padding: "18px 0", textAlign: "left",
                      }}
                    >
                      <span style={{ fontFamily: "Playfair Display", fontSize: 15.5, color: openFaq === i ? "var(--red)" : "var(--navy)" }}>{f.q}</span>
                      <ChevronDown size={16} color="var(--red)" style={{ transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .25s", flexShrink: 0, marginLeft: 10 }} />
                    </button>
                    {openFaq === i && (
                      <p style={{ fontFamily: "Poppins", fontWeight: 300, fontSize: 13.5, color: "var(--gray)", lineHeight: 1.8, paddingBottom: 18 }}>{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <div style={{ fontFamily: "Poppins", fontSize: 12, letterSpacing: 2, color: "var(--red)", textTransform: "uppercase", marginBottom: 16 }}>
              More Insights
            </div>
            {related.map(b => (
              <Link key={b.slug} to={`/blogs/${b.slug}`} style={{ display: "flex", gap: 12, marginBottom: 18 }}>
                <img src={b.heroImg} alt={b.title} style={{ width: 70, height: 60, objectFit: "cover", borderRadius: 4, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "Poppins", fontSize: 11, color: "var(--gray)", marginBottom: 4 }}>{b.date}</div>
                  <div style={{ fontFamily: "Playfair Display", fontSize: 13.5, color: "var(--navy)", lineHeight: 1.4 }}>{b.title}</div>
                </div>
              </Link>
            ))}
          </aside>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, marginBottom: 30 }}>
            <h2 className="h2" style={{ margin: 0 }}>More from The Journal.</h2>
            <Link to="/blogs" className="btn btn-outline">View All</Link>
          </div>
          <div className="grid grid-3">
            {related.map(b => (
              <Link key={b.slug} to={`/blogs/${b.slug}`}>
                <img src={b.heroImg} alt={b.title} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 4, marginBottom: 14 }} />
                <div style={{ fontFamily: "Poppins", fontSize: 12, color: "var(--gray)", marginBottom: 6 }}>{b.date} &middot; {b.readTime}</div>
                <div style={{ fontFamily: "Playfair Display", fontSize: 15.5, color: "var(--navy)", lineHeight: 1.4 }}>{b.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
