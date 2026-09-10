import React from "react";
import { Link } from "react-router-dom";

export function FeatureGrid({ items, columns = 3 }) {
  if (!items || !items.length) return null;
  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {items.map((it, i) => (
        <div key={i} className="card-feature">
          <div className="h4">{it.title}</div>
          <p style={{ fontSize: 13.5, color: "var(--gray)", lineHeight: 1.75, margin: 0 }}>{it.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function GlanceGrid({ items }) {
  if (!items || !items.length) return null;
  return (
    <div className="glance-grid">
      {items.map((it, i) => (
        <div key={i} className="glance-item">
          <div className="glance-value">{it.value}</div>
          <div className="glance-label">{it.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ConnectivityList({ items }) {
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

export function ClosingCTA({ title, paragraphs, ctas, image }) {
  return (
    <section className={`section${image ? "" : " bg-navy on-dark"}`} style={{ textAlign: "center", background: image ? "#fff" : undefined, paddingBottom: image ? 0 : undefined }}>
      <div className={image ? "" : "on-dark"}>
        <div className="container" style={{ maxWidth: 720 }}>
          <h2 className="h2 center">{title}</h2>
          {paragraphs?.map((p, i) => (
            <p key={i} className="lead center">{p}</p>
          ))}
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 20, marginBottom: image ? 40 : 0 }}>
            {ctas?.map((c, i) => (
              <Link key={i} to="/contact" className={`btn ${c.primary ? "btn-primary" : "btn-outline"}`}>
                {c.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {image && (
        <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      )}
    </section>
  );
}
