import { useState } from "react";
import { Link } from "react-router";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

const chapters = [
  { name: "IEEE RAS Boston Chapter", location: "Boston, MA, USA", region: "North America", members: 340, activities: ["Monthly seminars", "Industry tours", "Student mentoring"], url: "https://www.ieee-ras.org/membership/local-chapters" },
  { name: "IEEE RAS Singapore Chapter", location: "Singapore", region: "Asia-Pacific", members: 290, activities: ["Robotics bootcamps", "Hackathons", "University partnerships"], url: "https://www.ieee-ras.org/membership/local-chapters" },
  { name: "IEEE RAS Germany Chapter", location: "Munich, Germany", region: "Europe", members: 210, activities: ["Industry Connect", "Research symposia", "Joint workshops"], url: "https://www.ieee-ras.org/membership/local-chapters" },
  { name: "IEEE RAS Tokyo Chapter", location: "Tokyo, Japan", region: "Asia-Pacific", members: 380, activities: ["HRI research group", "Robot demos", "Annual conference"], url: "https://www.ieee-ras.org/membership/local-chapters" },
  { name: "IEEE RAS India Council", location: "Multiple cities, India", region: "Asia-Pacific", members: 520, activities: ["National competition", "Student chapters", "Online seminars"], url: "https://www.ieee-ras.org/membership/local-chapters" },
  { name: "IEEE RAS UK & Ireland", location: "London, UK", region: "Europe", members: 175, activities: ["Robotics café", "Policy engagement", "Cross-chapter events"], url: "https://www.ieee-ras.org/membership/local-chapters" },
];

const studentChapters = [
  { name: "MIT IEEE RAS Student Branch", univ: "MIT", location: "Cambridge, MA", url: "https://www.ieee-ras.org/membership/student-chapters" },
  { name: "Stanford Robotics Club", univ: "Stanford University", location: "Palo Alto, CA", url: "https://www.ieee-ras.org/membership/student-chapters" },
  { name: "ETH Zürich IEEE RAS", univ: "ETH Zürich", location: "Zürich, Switzerland", url: "https://www.ieee-ras.org/membership/student-chapters" },
  { name: "Carnegie Mellon RAS Chapter", univ: "Carnegie Mellon University", location: "Pittsburgh, PA", url: "https://www.ieee-ras.org/membership/student-chapters" },
  { name: "NUS IEEE RAS Chapter", univ: "Nat. Univ. of Singapore", location: "Singapore", url: "https://www.ieee-ras.org/membership/student-chapters" },
  { name: "IIT Bombay Robotics Club", univ: "IIT Bombay", location: "Mumbai, India", url: "https://www.ieee-ras.org/membership/student-chapters" },
];

const regionColors: Record<string, string> = {
  "North America": "#e4002b",
  "Asia-Pacific": "#00629B",
  "Europe": "#7c3aed",
  "Latin America": "#059669",
  "Middle East & Africa": "#d97706",
};

export default function Chapters() {
  const [search, setSearch] = useState("");
  const { ref, visible } = useScrollAnimation();

  const filtered = chapters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.location.toLowerCase().includes(search.toLowerCase()) ||
    c.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero
        label="GLOBAL COMMUNITY"
        title="Connect With the"
        highlight="Robotics Community"
        sub="IEEE RAS chapters connect researchers, engineers, and students at the local level — organizing events, workshops, and community programs worldwide."
      />

      {/* World map stats */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[["100+", "Active Chapters"], ["60+", "Student Chapters"], ["6", "Regions"], ["50+", "Countries"]].map(([val, label]) => (
              <div key={label} className="glass p-6 rounded-2xl text-center">
                <div className="font-display font-black text-3xl mb-1" style={{ color: "#e4002b" }}>{val}</div>
                <div className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.6)", letterSpacing: "0.08em" }}>{label.toUpperCase()}</div>
              </div>
            ))}
          </div>

          {/* Region chips */}
          <div className="flex flex-wrap gap-3 mb-8">
            {Object.entries(regionColors).map(([region, color]) => (
              <div key={region} className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.7)", letterSpacing: "0.06em" }}>{region}</span>
              </div>
            ))}
          </div>

          <a href="https://www.ieee-ras.org/membership/local-chapters" target="_blank" rel="noopener noreferrer" className="glass-red px-5 py-2.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200 hover:scale-105" style={{ textDecoration: "none", color: "#ff6b6b", fontFamily: "'Outfit',sans-serif" }}>
            View Full Global Map on IEEE RAS
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>

      {/* Chapter directory */}
      <section ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionLabel>CHAPTER DIRECTORY</SectionLabel>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <h2 className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
                Find a <span style={{ color: "#e4002b" }}>Chapter</span>
              </h2>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(192,196,208,0.4)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                <input type="text" placeholder="Search chapters..." value={search} onChange={e => setSearch(e.target.value)}
                  className="glass pl-9 pr-4 py-2 rounded-xl text-sm outline-none focus:border-red-500/40 transition-all duration-200"
                  style={{ fontFamily: "'Inter',sans-serif", color: "#e8eaf0", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", minWidth: "220px" }} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((ch, i) => (
              <div key={ch.name} className={`glass card-hover p-6 rounded-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: regionColors[ch.region] || "#e4002b" }} />
                  <span className="font-mono-ui text-xs ml-2 flex-1" style={{ color: regionColors[ch.region] || "#e4002b" }}>{ch.region.toUpperCase()}</span>
                  <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.4)" }}>{ch.members} members</span>
                </div>
                <h3 className="font-display font-bold text-white mb-1">{ch.name}</h3>
                <p className="text-xs mb-4 flex items-center gap-1" style={{ color: "rgba(192,196,208,0.55)" }}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                  {ch.location}
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {ch.activities.map(a => (
                    <span key={a} className="font-mono-ui text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(192,196,208,0.6)" }}>{a}</span>
                  ))}
                </div>
                <a href={ch.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1" style={{ textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>
                  View Chapter →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student chapters */}
      <section id="student" className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>STUDENT CHAPTERS</SectionLabel>
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
              Student <span style={{ color: "#e4002b" }}>Chapters</span>
            </h2>
            <a href="https://www.ieee-ras.org/membership/student-chapters" target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5 rounded-xl text-sm" style={{ textDecoration: "none" }}>All Student Chapters →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studentChapters.map((sc, i) => (
              <a key={sc.name} href={sc.url} target="_blank" rel="noopener noreferrer" className="glass card-hover p-5 rounded-2xl transition-all duration-300" style={{ textDecoration: "none" }}>
                <div className="font-mono-ui text-xs mb-1" style={{ color: "#e4002b" }}>{sc.univ.toUpperCase()}</div>
                <h3 className="font-display font-semibold text-white mb-1">{sc.name}</h3>
                <p className="text-xs" style={{ color: "rgba(192,196,208,0.5)" }}>{sc.location}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Start a chapter CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="glass p-10 rounded-3xl" style={{ border: "1px solid rgba(228,0,43,0.15)" }}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-display font-black text-white text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>Start a Chapter</h3>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(192,196,208,0.65)" }}>
              Bring IEEE RAS to your city or university. Starting a chapter connects your local community to a global network of robotics professionals.
            </p>
            <a href="https://www.ieee-ras.org/membership/local-chapters/starting-a-chapter" target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
              Learn How to Start a Chapter
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
