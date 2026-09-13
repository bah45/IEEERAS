import { Link, useLocation } from "react-router";
import { useState, useEffect, useRef } from "react";

/* ─── LOGOS ─── */
export function IEEERASLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const scale = size === "sm" ? 0.75 : size === "lg" ? 1.3 : 1;
  return (
    <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", transform: `scale(${scale})`, transformOrigin: "left center", textDecoration: "none" }}>
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44, flexShrink: 0 }}>
        <circle cx="22" cy="22" r="20" stroke="#e4002b" strokeWidth="1.5" fill="none" opacity="0.25" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
          <rect key={i} x="20.5" y="1" width="3" height="4.5" rx="1" fill="#e4002b" transform={`rotate(${angle} 22 22)`} opacity="0.8" />
        ))}
        <path d="M22 10 L30 22 L22 34 L14 22 Z" fill="#00629B" opacity="0.95" />
        <path d="M22 15.5 L26.5 22 L22 28.5 L17.5 22 Z" fill="white" opacity="0.95" />
        <circle cx="19.5" cy="21" r="1.4" fill="#e4002b" />
        <circle cx="24.5" cy="21" r="1.4" fill="#e4002b" />
        <path d="M19.2 24.2 Q22 26 24.8 24.2" stroke="#e4002b" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "#00629B", letterSpacing: "-0.02em" }}>IEEE</span>
        <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: "0.5rem", color: "rgba(232,234,240,0.8)", letterSpacing: "0.1em", textTransform: "uppercase", lineHeight: 1.3 }}>Robotics &amp; Automation Society</span>
      </div>
    </Link>
  );
}

/* ─── NAVBAR ─── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [location.pathname]);

  const navLinks = [
    { label: "About", to: "/about" },
    { label: "Research", to: "/research" },
    { label: "Events", to: "/events" },
    { label: "Chapters", to: "/chapters" },
    { label: "Resources", to: "/resources" },
    { label: "News", to: "/news" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl" : "bg-transparent"}`}
      style={{ borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <IEEERASLogo size="sm" />

        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="relative text-sm font-medium transition-all duration-200 group"
              style={{ fontFamily: "'Outfit',sans-serif", color: isActive(to) ? "#e4002b" : "rgba(232,234,240,0.65)", textDecoration: "none" }}
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px transition-all duration-300" style={{ width: isActive(to) ? "100%" : "0%", background: "#e4002b" }} />
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-red-400 opacity-40 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/join" className="btn-primary px-5 py-2 text-sm rounded-lg" style={{ textDecoration: "none", display: "inline-block" }}>Join IEEE RAS</Link>
        </div>

        <button className="lg:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      <div className="lg:hidden glass-strong overflow-hidden transition-all duration-300" style={{ maxHeight: menuOpen ? "420px" : "0px" }}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ label, to }) => (
            <Link key={to} to={to} className="py-3 text-sm border-b font-medium" style={{ fontFamily: "'Outfit',sans-serif", color: isActive(to) ? "#e4002b" : "rgba(232,234,240,0.75)", borderColor: "rgba(255,255,255,0.05)", textDecoration: "none", display: "block" }}>
              {label}
            </Link>
          ))}
          <Link to="/join" className="btn-primary px-5 py-2.5 text-sm rounded-lg mt-3 text-center" style={{ textDecoration: "none", display: "block" }}>Join IEEE RAS</Link>
        </div>
      </div>
    </nav>
  );
}

/* ─── FOOTER ─── */
export function Footer() {
  const cols = [
    { title: "Organization", links: [["About IEEE RAS", "/about"], ["Mission & Vision", "/about#mission"], ["History", "/about#history"], ["Governance", "/about#governance"], ["Contact", "/contact"]] },
    { title: "Resources", links: [["Publications", "/resources#publications"], ["Journals", "/resources#journals"], ["Conferences", "/events"], ["Technical Committees", "/research#committees"], ["Standards", "/resources#standards"]] },
    { title: "Community", links: [["Student Chapters", "/chapters#student"], ["Chapter Directory", "/chapters"], ["Membership", "/join"], ["Awards", "/news#awards"], ["Career Center", "/resources#career"]] },
    { title: "Connect", links: [["Contact Us", "/contact"], ["Newsletter", "/join"], ["IEEE.org", "https://ieee.org"], ["IEEE Xplore", "https://ieeexplore.ieee.org"], ["Media Kit", "/contact"]] },
  ];

  return (
    <footer className="relative border-t pt-16 pb-8" style={{ borderColor: "rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.5)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <IEEERASLogo size="sm" />
            <p className="text-xs mt-4 leading-relaxed" style={{ color: "rgba(192,196,208,0.45)", maxWidth: 200 }}>
              Advancing the science and technology of robotics and automation worldwide since 1984.
            </p>
            <div className="flex gap-3 mt-6">
              {[["𝕏", "https://twitter.com/ieee_ras"], ["in", "https://linkedin.com/company/ieee-ras"], ["▶", "https://youtube.com/@ieeerasvideo"], ["●", "https://ieee-ras.org"]].map(([icon, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 glass rounded-lg flex items-center justify-center transition-all duration-200 hover:border-red-500/30" style={{ textDecoration: "none", color: "rgba(192,196,208,0.5)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono',monospace" }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div className="font-mono-ui text-xs mb-4" style={{ color: "#e4002b", letterSpacing: "0.1em" }}>{col.title.toUpperCase()}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="text-xs transition-colors duration-200 hover:text-red-400" style={{ color: "rgba(192,196,208,0.45)", textDecoration: "none" }}>{label}</a>
                    ) : (
                      <Link to={href} className="text-xs transition-colors duration-200 hover:text-red-400" style={{ color: "rgba(192,196,208,0.45)", textDecoration: "none" }}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pt-6 gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.25)", letterSpacing: "0.04em" }}>
            © 2026 IEEE Robotics and Automation Society. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Cookie Policy", "/cookies"]].map(([label, to]) => (
              <Link key={label} to={to} className="font-mono-ui text-xs hover:text-red-400 transition-colors duration-200" style={{ color: "rgba(192,196,208,0.25)", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── SCROLL ANIMATION HOOK ─── */
export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── PAGE HERO ─── */
export function PageHero({ label, title, highlight, sub, children }: {
  label: string; title: string; highlight?: string; sub?: string; children?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 80); }, []);
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <CircuitBg />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(228,0,43,0.07) 0%, transparent 60%)" }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <div className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 glass-red px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono-ui text-xs" style={{ color: "#ff6b6b", letterSpacing: "0.12em" }}>{label}</span>
          </div>
          <h1 className="font-display font-black leading-tight mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", color: "#e8eaf0" }}>
            {title}{highlight && <><br /><span style={{ color: "#e4002b" }}>{highlight}</span></>}
          </h1>
          {sub && <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(192,196,208,0.7)", lineHeight: 1.8 }}>{sub}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ─── CIRCUIT BG ─── */
export function CircuitBg() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" opacity="0.06">
      <defs>
        <pattern id="circ2" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M0 50 H35 M65 50 H100" stroke="#e4002b" strokeWidth="0.8" />
          <path d="M50 0 V35 M50 65 V100" stroke="#00629B" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="5" fill="none" stroke="#e4002b" strokeWidth="0.8" />
          <circle cx="35" cy="50" r="2" fill="#e4002b" />
          <circle cx="65" cy="50" r="2" fill="#00629B" />
          <path d="M65 50 Q75 50 75 40 V10" stroke="#00629B" strokeWidth="0.8" fill="none" />
          <path d="M35 50 Q25 50 25 60 V90" stroke="#e4002b" strokeWidth="0.8" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circ2)" />
    </svg>
  );
}

/* ─── SECTION LABEL ─── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="font-mono-ui text-xs text-red-400 mb-3 tracking-widest">{children}</div>;
}
