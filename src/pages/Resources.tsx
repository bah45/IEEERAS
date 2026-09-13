import { useState } from "react";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

const resources = [
  { id: "publications", icon: "📄", name: "IEEE Transactions on Robotics", abbr: "T-RO", tag: "Journal", desc: "The flagship journal of IEEE RAS covering all aspects of robotics. Bi-monthly publication with rigorous peer review.", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8860" },
  { id: "journals", icon: "📋", name: "IEEE Robotics & Automation Letters", abbr: "RA-L", tag: "Journal", desc: "Rapid publication letters for timely robotics research. Conference co-submission option available.", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=7083369" },
  { id: "journals2", icon: "🔧", name: "IEEE Transactions on Automation Science", abbr: "T-ASE", tag: "Journal", desc: "Covers automation science and engineering with emphasis on industry applications.", url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8856" },
  { id: "xplore", icon: "🔍", name: "IEEE Xplore Digital Library", abbr: "Xplore", tag: "Database", desc: "Access millions of IEEE documents, conference papers, journals, and standards.", url: "https://ieeexplore.ieee.org" },
  { id: "standards", icon: "📡", name: "IEEE Standards Association", abbr: "SA", tag: "Standards", desc: "IEEE standards for autonomous systems, robotics safety, and automated infrastructure.", url: "https://standards.ieee.org" },
  { id: "education", icon: "🎓", name: "Education Hub", abbr: "EDU", tag: "Education", desc: "Tutorials, MOOCs, lecture series, and mentoring programs from IEEE RAS for robotics education.", url: "https://www.ieee-ras.org/education" },
  { id: "career", icon: "💼", name: "IEEE Career Center", abbr: "JOBS", tag: "Career", desc: "Find robotics and automation positions, post jobs, and access career development resources.", url: "https://jobs.ieee.org" },
  { id: "tc", icon: "⚙️", name: "Technical Committees", abbr: "TCs", tag: "Community", desc: "Join one of 40+ TCs to collaborate on specialized research, organize events, and shape the field.", url: "https://www.ieee-ras.org/technical-committees" },
  { id: "open", icon: "🌐", name: "IEEE Open Access", abbr: "OA", tag: "Publications", desc: "Free access to IEEE RAS open-access articles and author-accepted manuscripts.", url: "https://open.ieee.org" },
];

const tags = ["All", "Journal", "Database", "Standards", "Education", "Career", "Community", "Publications"];

export default function Resources() {
  const [activeTag, setActiveTag] = useState("All");
  const [query, setQuery] = useState("");
  const { ref, visible } = useScrollAnimation();

  const filtered = resources.filter(r =>
    (activeTag === "All" || r.tag === activeTag) &&
    (r.name.toLowerCase().includes(query.toLowerCase()) || r.desc.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <>
      <PageHero
        label="RESOURCE HUB"
        title="Tools &"
        highlight="Resources"
        sub="Access IEEE RAS publications, journals, educational materials, career resources, and community tools — everything you need to advance in robotics."
      />

      <section ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Search + filter bar */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(192,196,208,0.4)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Search IEEE RAS resources..." value={query} onChange={e => setQuery(e.target.value)}
                className="w-full glass pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ fontFamily: "'Inter',sans-serif", color: "#e8eaf0", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(t => (
                <button key={t} onClick={() => setActiveTag(t)} className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{ fontFamily: "'Outfit',sans-serif", background: activeTag === t ? "#e4002b" : "rgba(255,255,255,0.05)", color: activeTag === t ? "white" : "rgba(192,196,208,0.7)", border: activeTag === t ? "1px solid #e4002b" : "1px solid rgba(255,255,255,0.08)" }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((r, i) => (
              <a key={r.id} id={r.id} href={r.url} target="_blank" rel="noopener noreferrer"
                className={`glass card-hover p-6 rounded-2xl flex flex-col gap-3 group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 60}ms`, textDecoration: "none" }}>
                <div className="flex items-start justify-between">
                  <div className="text-3xl">{r.icon}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full glass-red" style={{ color: "#ff6b6b" }}>{r.tag}</span>
                    <span className="font-mono-ui text-xs glass px-2 py-0.5 rounded-full" style={{ color: "rgba(192,196,208,0.5)" }}>{r.abbr}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white mb-1">{r.name}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.65)" }}>{r.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-red-400 mt-auto">
                  <span className="text-xs font-semibold" style={{ fontFamily: "'Outfit',sans-serif" }}>Access Resource</span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>QUICK LINKS</SectionLabel>
          <h2 className="font-display font-black mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            External <span style={{ color: "#e4002b" }}>Resources</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "IEEE.org", url: "https://ieee.org", desc: "IEEE parent organization" },
              { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org", desc: "Digital library" },
              { name: "IEEE Spectrum", url: "https://spectrum.ieee.org", desc: "Technology news" },
              { name: "IEEE SA", url: "https://standards.ieee.org", desc: "Standards body" },
            ].map(link => (
              <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="glass card-hover p-5 rounded-2xl" style={{ textDecoration: "none" }}>
                <div className="font-display font-bold text-white mb-1">{link.name}</div>
                <div className="text-xs" style={{ color: "rgba(192,196,208,0.55)" }}>{link.desc}</div>
                <div className="mt-3 text-xs text-red-400 font-semibold" style={{ fontFamily: "'Outfit',sans-serif" }}>Visit →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
