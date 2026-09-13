import { useState } from "react";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

const allEvents = [
  { month: "MAY", day: "19", endDay: "23", year: "2026", name: "ICRA 2026", full: "International Conference on Robotics and Automation", location: "Atlanta, Georgia, USA", type: "Conference", desc: "The flagship IEEE RAS conference bringing together researchers and practitioners across all robotics and automation domains.", url: "https://2026.ieee-icra.org", color: "#e4002b" },
  { month: "SEP", day: "22", endDay: "25", year: "2026", name: "RAS Summer School", full: "IEEE RAS Graduate Summer School on Robotics", location: "Online / Hybrid", type: "Workshop", desc: "A graduate-level intensive program covering foundational and advanced topics in robotics, open to students worldwide.", url: "https://www.ieee-ras.org/education/summer-schools", color: "#7c3aed" },
  { month: "OCT", day: "14", endDay: "18", year: "2026", name: "IROS 2026", full: "International Conference on Intelligent Robots and Systems", location: "Abu Dhabi, UAE", type: "Conference", desc: "Co-sponsored by IEEE RAS, IROS is one of the world's largest robotics research conferences.", url: "https://www.iros2026.org", color: "#00629B" },
  { month: "NOV", day: "5", endDay: "7", year: "2026", name: "RO-MAN 2026", full: "IEEE International Conference on Robot and Human Interactive Communication", location: "Tokyo, Japan", type: "Conference", desc: "Focuses on robot technologies for human-robot interaction and communication research.", url: "https://ro-man2026.org", color: "#059669" },
  { month: "DEC", day: "9", endDay: "11", year: "2026", name: "Humanoids 2026", full: "IEEE-RAS International Conference on Humanoid Robots", location: "Seoul, South Korea", type: "Conference", desc: "The premier venue for humanoid robot research, covering locomotion, manipulation, perception and cognitive capabilities.", url: "https://humanoids2026.org", color: "#d97706" },
  { month: "JAN", day: "15", endDay: "17", year: "2027", name: "ISMR 2027", full: "International Symposium on Medical Robotics", location: "Los Angeles, CA, USA", type: "Symposium", desc: "Dedicated to surgical robotics, rehabilitation engineering, and biomedical applications of robotics.", url: "https://www.ieee-ras.org/conferences-workshops/technically-co-sponsored/ismr", color: "#db2777" },
];

const filters = ["All", "Conference", "Workshop", "Symposium", "Webinar"];

export default function Events() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, visible } = useScrollAnimation();

  const filtered = activeFilter === "All" ? allEvents : allEvents.filter(e => e.type === activeFilter);

  return (
    <>
      <PageHero
        label="EVENTS & CONFERENCES"
        title="Events &"
        highlight="Conferences"
        sub="Connect with the global robotics community at IEEE RAS flagship conferences, workshops, summer schools, and symposia."
      />

      {/* Featured event */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>FEATURED EVENT</SectionLabel>
          <div className="glass-strong rounded-3xl overflow-hidden grid lg:grid-cols-2 gap-0" style={{ border: "1px solid rgba(228,0,43,0.2)" }}>
            <div className="relative aspect-video lg:aspect-auto overflow-hidden">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&auto=format" alt="ICRA 2026" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent, rgba(3,6,15,0.6))" }} />
              <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-full">
                <span className="font-mono-ui text-xs text-red-400">● FLAGSHIP CONFERENCE</span>
              </div>
            </div>
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="font-mono-ui text-xs text-red-400 mb-2 tracking-widest">MAY 19–23, 2026</div>
              <h2 className="font-display font-black text-white mb-1" style={{ fontSize: "2rem", letterSpacing: "-0.02em" }}>ICRA 2026</h2>
              <p className="text-sm mb-4" style={{ color: "rgba(192,196,208,0.7)" }}>International Conference on Robotics and Automation</p>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-sm" style={{ color: "rgba(192,196,208,0.65)" }}>Atlanta, Georgia, USA</span>
              </div>
              <p className="text-xs leading-relaxed mb-8" style={{ color: "rgba(192,196,208,0.6)" }}>
                ICRA is the world's most prestigious robotics conference. Join thousands of researchers for five days of cutting-edge papers, workshops, demos, and networking.
              </p>
              <div className="flex gap-3">
                <a href="https://2026.ieee-icra.org" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2.5 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>Register Now</a>
                <a href="https://2026.ieee-icra.org" target="_blank" rel="noopener noreferrer" className="btn-ghost px-6 py-2.5 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All events */}
      <section ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionLabel>ALL EVENTS</SectionLabel>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
                Upcoming <span style={{ color: "#e4002b" }}>Events</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {filters.map(f => (
                  <button key={f} onClick={() => setActiveFilter(f)} className="px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200"
                    style={{ fontFamily: "'Outfit',sans-serif", background: activeFilter === f ? "#e4002b" : "rgba(255,255,255,0.05)", color: activeFilter === f ? "white" : "rgba(192,196,208,0.7)", border: activeFilter === f ? "1px solid #e4002b" : "1px solid rgba(255,255,255,0.08)" }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {filtered.map((ev, i) => (
              <div key={ev.name} className={`glass card-hover p-5 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex-shrink-0 w-24 text-center glass-strong p-3 rounded-xl">
                  <div className="font-mono-ui text-xs mb-1" style={{ color: ev.color, letterSpacing: "0.1em" }}>{ev.month}</div>
                  <div className="font-display font-black text-2xl text-white">{ev.day}–{ev.endDay}</div>
                  <div className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.5)" }}>{ev.year}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full" style={{ background: `${ev.color}20`, color: ev.color }}>{ev.type.toUpperCase()}</span>
                    <div className="flex items-center gap-1 text-xs" style={{ color: "rgba(192,196,208,0.5)" }}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                      {ev.location}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-white">{ev.name}</h3>
                  <p className="text-xs mt-1 truncate" style={{ color: "rgba(192,196,208,0.55)" }}>{ev.desc}</p>
                </div>
                <a href={ev.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200" style={{ fontFamily: "'Outfit',sans-serif", background: `${ev.color}15`, color: ev.color, border: `1px solid ${ev.color}30`, textDecoration: "none" }}>
                  Register
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar link */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="glass p-8 rounded-3xl">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-display font-bold text-white text-xl mb-3">Full Events Calendar</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(192,196,208,0.65)" }}>Browse the complete list of IEEE RAS technically sponsored and co-sponsored conferences on the official website.</p>
            <a href="https://www.ieee-ras.org/conferences-workshops" target="_blank" rel="noopener noreferrer" className="btn-primary px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
              View Official Calendar
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
