/* Shared shell for report sub-pages.
   Exposes: LogoSVG, ReportNav, ReportFooter on window.
   Load AFTER React + Babel, BEFORE the page's own script. */

const { useState: __useState, useRef: __useRef, useEffect: __useEffect } = React;

function LogoSVG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="49.47 49.42 277.54 276.4" style={{ height: "20px", width: "20px", display: "block" }} fill="#ffffff" aria-hidden="true">
      <path fillRule="evenodd" d="M182.100 49.516 C 145.533 51.664,114.833 65.171,89.884 90.089 C 35.961 143.943,36.010 231.471,89.992 285.405 C 152.531 347.888,257.073 336.334,304.405 261.707 C 314.924 245.122,323.277 222.051,324.710 205.628 L 324.852 203.997 312.076 204.049 L 299.300 204.100 298.784 207.000 C 284.676 286.234,195.323 325.781,127.300 282.899 C 72.968 248.649,58.388 175.002,95.563 122.600 C 137.823 63.031,224.798 58.613,272.728 113.600 C 276.242 117.632,282.600 126.184,282.600 126.879 C 282.600 126.927,277.695 128.602,271.700 130.600 C 265.705 132.598,260.807 134.293,260.815 134.367 C 260.854 134.707,312.501 180.598,312.579 180.362 C 312.873 179.483,327.117 112.291,327.018 112.250 C 326.952 112.222,322.579 113.639,317.301 115.400 C 306.111 119.131,307.545 118.822,306.869 117.650 C 285.983 81.415,247.067 55.744,205.200 50.585 C 198.018 49.700,187.360 49.207,182.100 49.516 M174.870 108.999 C 174.634 109.094,174.385 109.263,174.316 109.374 C 174.247 109.485,171.183 123.239,167.507 139.938 C 160.359 172.412,159.927 174.321,157.791 182.860 C 157.026 185.917,156.400 188.719,156.400 189.087 L 156.400 189.754 162.150 189.880 C 177.701 190.219,179.044 190.278,179.269 190.636 C 179.617 191.190,173.483 223.249,167.299 253.200 C 164.968 264.489,164.689 266.524,165.589 265.710 C 167.829 263.682,218.098 172.360,218.740 169.152 L 218.850 168.600 208.612 168.600 C 197.734 168.600,197.600 168.588,197.600 167.643 C 197.600 167.344,202.387 154.106,208.238 138.225 C 218.371 110.721,218.859 109.338,218.500 109.075 C 218.063 108.756,175.657 108.681,174.870 108.999 " />
    </svg>
  );
}

function ReportNav({ active }) {
  const [strategyOpen, setStrategyOpen] = __useState(false);
  const [missionOpen, setMissionOpen] = __useState(false);
  const [feasibilityOpen, setFeasibilityOpen] = __useState(false);
  const [reportOpen, setReportOpen] = __useState(false);

  const sT = __useRef(null), mT = __useRef(null), fT = __useRef(null), rT = __useRef(null);

  const open = (which) => () => {
    if (which === "strategy") { clearTimeout(sT.current); setStrategyOpen(true); }
    if (which === "mission") { clearTimeout(mT.current); setMissionOpen(true); }
    if (which === "feasibility") { clearTimeout(fT.current); setFeasibilityOpen(true); }
    if (which === "report") { clearTimeout(rT.current); setReportOpen(true); }
  };
  const close = (which) => () => {
    if (which === "strategy") { sT.current = setTimeout(() => setStrategyOpen(false), 120); }
    if (which === "mission") { mT.current = setTimeout(() => setMissionOpen(false), 120); }
    if (which === "feasibility") { fT.current = setTimeout(() => setFeasibilityOpen(false), 120); }
    if (which === "report") { rT.current = setTimeout(() => setReportOpen(false), 120); }
  };

  const chevron = (o) => (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5, transition: "transform 0.25s", transform: o ? "rotate(180deg)" : "rotate(0deg)" }}>
      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const dropdownShell = (o) => ({
    position: "absolute", top: "calc(100% + 10px)", left: "50%",
    background: "rgba(23,23,23,0.97)", backdropFilter: "blur(16px)",
    border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px",
    padding: "8px", minWidth: "260px",
    opacity: o ? 1 : 0,
    pointerEvents: o ? "auto" : "none",
    transform: o ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(-6px)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
    zIndex: 100,
  });

  const arrowTip = {
    position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%) rotate(45deg)",
    width: "10px", height: "10px", background: "rgba(23,23,23,0.97)",
    border: "1px solid rgba(255,255,255,0.1)", borderBottom: "none", borderRight: "none",
  };

  const dropItem = (href, title, sub) => (
    <a key={href} href={href} style={{ display: "block", padding: "10px 14px", borderRadius: "10px", textDecoration: "none", transition: "background 0.15s", color: "#fff" }}
      onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
      <p style={{ fontSize: "13px", fontWeight: 500, margin: 0, letterSpacing: "-0.02em" }}>{title}</p>
      <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "2px 0 0" }}>{sub}</p>
    </a>
  );

  const reportLinks = [
    { href: "contents.html", title: "Contents", sub: "Table of contents" },
    { href: "executive-summary.html", title: "Executive Summary", sub: "Project at a glance" },
    { href: "problem.html", title: "Problem & Brief", sub: "Needs, scope, success criteria" },
    { href: "design-process.html", title: "Design Process", sub: "Ideation → decision → prototype" },
    { href: "considerations.html", title: "Considerations", sub: "Social, cultural, environmental, budgetary" },
    { href: "risks.html", title: "Risks & Concerns", sub: "Register + FAQ" },
    { href: "implementation.html", title: "Implementation Plan", sub: "Timeline, training, M&E" },
    { href: "recommendations.html", title: "Recommendations", sub: "Next steps" },
    { href: "references.html", title: "References", sub: "Bibliography" },
  ];

  const items = [
    { label: "strategy", href: "index.html#strategy", kind: "strategy" },
    { label: "mission", href: "index.html#mission", kind: "mission" },
    { label: "feasibility", href: "index.html#feasibility", kind: "feasibility" },
    { label: "report", href: "contents.html", kind: "report" },
    { label: "team", href: "index.html#team" },
  ];

  return (
    <nav style={{ padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(14px)", zIndex: 50 }}>
      <a href="index.html" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <LogoSVG />
        <span style={{ color: "#fff", fontSize: "14px", letterSpacing: "-0.02em" }}>E-Overflow</span>
      </a>
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {items.map(({ label, href, kind }) => {
          if (kind === "strategy") return (
            <div key={label} style={{ position: "relative" }} onMouseEnter={open("strategy")} onMouseLeave={close("strategy")}>
              <a href={href} style={{ color: active === "strategy" ? "#fff" : "rgba(212,212,212,1)", fontSize: "14px", padding: "8px 20px", borderRadius: "999px", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                {label}{chevron(strategyOpen)}
              </a>
              <div style={dropdownShell(strategyOpen)}>
                <div style={arrowTip}></div>
                {dropItem("solution-one.html", "Solution One — Timer", "Scheduled load shifting")}
                {dropItem("solution-two.html", "Solution Two — Diverter", "Real-time surplus sensing")}
              </div>
            </div>
          );
          if (kind === "mission") return (
            <div key={label} style={{ position: "relative" }} onMouseEnter={open("mission")} onMouseLeave={close("mission")}>
              <a href={href} style={{ color: active === "mission" ? "#fff" : "rgba(212,212,212,1)", fontSize: "14px", padding: "8px 20px", borderRadius: "999px", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                {label}{chevron(missionOpen)}
              </a>
              <div style={dropdownShell(missionOpen)}>
                <div style={arrowTip}></div>
                {dropItem("lama-lama.html", "Lama Lama Community", "Cape York, Queensland")}
              </div>
            </div>
          );
          if (kind === "feasibility") return (
            <div key={label} style={{ position: "relative" }} onMouseEnter={open("feasibility")} onMouseLeave={close("feasibility")}>
              <a href={href} style={{ color: active === "feasibility" ? "#fff" : "rgba(212,212,212,1)", fontSize: "14px", padding: "8px 20px", borderRadius: "999px", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                {label}{chevron(feasibilityOpen)}
              </a>
              <div style={dropdownShell(feasibilityOpen)}>
                <div style={arrowTip}></div>
                {dropItem("lama-lama-feasibility.html", "Lama Lama — Feasibility Study", "Preliminary draft, 2026")}
              </div>
            </div>
          );
          if (kind === "report") return (
            <div key={label} style={{ position: "relative" }} onMouseEnter={open("report")} onMouseLeave={close("report")}>
              <a href={href} style={{ color: active === "report" || reportOpen ? "#fff" : "rgba(212,212,212,1)", fontSize: "14px", padding: "8px 20px", borderRadius: "999px", textDecoration: "none", display: "flex", alignItems: "center", gap: "5px" }}>
                {label}{chevron(reportOpen)}
              </a>
              <div style={dropdownShell(reportOpen)}>
                <div style={arrowTip}></div>
                {reportLinks.map(r => dropItem(r.href, r.title, r.sub))}
              </div>
            </div>
          );
          return (
            <a key={label} href={href} style={{ color: active === label ? "#fff" : "rgba(212,212,212,1)", fontSize: "14px", padding: "8px 20px", borderRadius: "999px", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = active === label ? "#fff" : "rgba(212,212,212,1)"}
            >{label}</a>
          );
        })}
      </div>
      <a href="contact.html" style={{ background: "#fff", color: "#000", fontSize: "14px", borderRadius: "999px", padding: "10px 22px", textDecoration: "none", transition: "background 0.2s" }}
        onMouseEnter={e => e.currentTarget.style.background = "#e5e5e5"}
        onMouseLeave={e => e.currentTarget.style.background = "#fff"}
      >learn more</a>
    </nav>
  );
}

function ReportFooter({ prev, next }) {
  return (
    <div>
      {(prev || next) && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", background: "#000" }}>
          {prev ? (
            <a href={prev.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", textDecoration: "none", display: "flex", flexDirection: "column", gap: "4px" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
              <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>← previous</span>
              <span style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>{prev.label}</span>
            </a>
          ) : <span />}
          {next ? (
            <a href={next.href} style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", textDecoration: "none", display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end", textAlign: "right" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>
              <span style={{ fontSize: "11px", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>next →</span>
              <span style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>{next.label}</span>
            </a>
          ) : <span />}
        </div>
      )}
      <footer style={{ background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "48px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <LogoSVG />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>© 2026 E-Overflow — EWB Challenge for Yintjingga Aboriginal Corporation</span>
        </div>
        <div style={{ display: "flex", gap: "24px" }}>
          <a href="contents.html" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>contents</a>
          <a href="references.html" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>references</a>
          <a href="contact.html" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>contact</a>
        </div>
      </footer>
    </div>
  );
}

window.LogoSVG = LogoSVG;
window.ReportNav = ReportNav;
window.ReportFooter = ReportFooter;
