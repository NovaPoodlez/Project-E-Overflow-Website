/* Common UI primitives used across report pages.
   Load AFTER report-shell.jsx, BEFORE page script. */

const { useState: __rcUseState } = React;

function PageHero({ chapter, title, sub }) {
  return (
    <section style={{ padding: "120px 40px 80px", background: "#000", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 24px" }}>{chapter}</p>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 112px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.92, color: "#fff", margin: 0 }}>{title}</h1>
        {sub && <p style={{ fontSize: "clamp(16px, 1.5vw, 20px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, maxWidth: "640px", margin: "32px 0 0" }}>{sub}</p>}
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return <p style={{ fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", margin: "0 0 48px" }}>{children}</p>;
}

function H2({ children }) {
  return <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.95, color: "#fff", margin: 0 }}>{children}</h2>;
}

function Body({ children, dim }) {
  return <p style={{ fontSize: "16px", color: dim ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0 }}>{children}</p>;
}

function Section({ bg, children, pad }) {
  return (
    <section style={{ background: bg || "#000", padding: pad || "100px 40px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}

function NumberRow({ rows }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${rows.length}, 1fr)`, gap: "2px" }}>
      {rows.map((r, i) => {
        const [hov, setHov] = __rcUseState(false);
        return (
          <div key={r.num + i}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ borderTop: `1px solid ${hov ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.12)"}`, paddingTop: "32px", paddingRight: i < rows.length - 1 ? "32px" : "0", paddingBottom: "32px", transition: "border-color 0.3s" }}>
            <span style={{ fontSize: "11px", color: hov ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.3)", letterSpacing: "0.1em", transition: "color 0.3s" }}>{r.num}</span>
            <h3 style={{ fontSize: "clamp(22px, 2.4vw, 36px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff", margin: "16px 0 18px", transform: hov ? "translateX(6px)" : "translateX(0)", transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)" }}>{r.title}</h3>
            <p style={{ fontSize: "14px", color: hov ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.5)", lineHeight: 1.65, transition: "color 0.3s", margin: 0 }}>{r.body}</p>
          </div>
        );
      })}
    </div>
  );
}

function DefinitionList({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {items.map((it, i) => {
        const [hov, setHov] = __rcUseState(false);
        return (
          <div key={i}
            onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
            style={{ borderTop: i === 0 ? "1px solid rgba(255,255,255,0.12)" : "none", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "24px 0", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "32px", alignItems: "start" }}>
            <p style={{ fontSize: "15px", fontWeight: 500, color: hov ? "#fff" : "rgba(255,255,255,0.7)", margin: 0, letterSpacing: "-0.02em", transition: "color 0.2s" }}>{it.label}</p>
            <p style={{ fontSize: "14px", color: hov ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.4)", margin: 0, lineHeight: 1.7, transition: "color 0.3s" }}>{it.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

window.PageHero = PageHero;
window.SectionLabel = SectionLabel;
window.H2 = H2;
window.Body = Body;
window.Section = Section;
window.NumberRow = NumberRow;
window.DefinitionList = DefinitionList;
