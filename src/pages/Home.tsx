import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useScrollAnimation, SectionLabel, CircuitBg } from "../components/shared";

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setTimeout(() => setMounted(true), 100); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid animate-grid-fade" />
      <CircuitBg />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(228,0,43,0.12) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,98,155,0.15) 0%, transparent 70%)", filter: "blur(40px)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <div className={`inline-flex items-center gap-2 glass-red px-3 py-1.5 rounded-full mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono-ui text-xs" style={{ color: "#ff6b6b", letterSpacing: "0.12em" }}>IEEE ROBOTICS AND AUTOMATION SOCIETY</span>
          </div>

          <h1 className={`font-display font-black leading-none mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            <span style={{ color: "#e8eaf0" }}>Advancing</span><br />
            <span className="text-shimmer">Robotics</span><br />
            <span style={{ color: "#e8eaf0" }}>&amp; Automation</span>
          </h1>

          <p className={`text-base leading-relaxed mb-10 max-w-md transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ color: "rgba(192,196,208,0.85)" }}>
            The world's leading professional society dedicated to robotics and automation. Connecting researchers, engineers, and innovators across 100+ countries.
          </p>

          <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <Link to="/about" className="btn-primary px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
              Explore IEEE RAS
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link to="/events" className="btn-ghost px-7 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
              Upcoming Events
            </Link>
          </div>

          <div className={`flex gap-8 mt-12 pt-8 border-t transition-all duration-700 delay-400 ${mounted ? "opacity-100" : "opacity-0"}`} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {[["10K+", "Members"], ["100+", "Chapters"], ["50+", "Conferences"], ["2", "Journals"]].map(([val, label]) => (
              <div key={label}>
                <div className="font-display font-bold text-xl" style={{ color: "#e4002b" }}>{val}</div>
                <div className="text-xs" style={{ color: "rgba(192,196,208,0.5)", fontFamily: "'JetBrains Mono',monospace", letterSpacing: "0.06em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className={`relative flex items-center justify-center transition-all duration-1000 delay-200 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <div className="absolute w-80 h-80 rounded-full border border-red-500/10 animate-rotate-slow" />
          <div className="absolute w-64 h-64 rounded-full border border-blue-500/15 animate-counter-rotate" style={{ borderStyle: "dashed" }} />
          <div className="absolute w-48 h-48 rounded-full border border-red-500/20" style={{ animation: "rotate-slow 30s linear infinite" }} />
          <div className="absolute w-32 h-32 rounded-full border border-red-500/30 animate-pulse-ring" />
          <div className="absolute w-32 h-32 rounded-full border border-red-500/20 animate-pulse-ring" style={{ animationDelay: "1s" }} />

          <div className="relative z-10 w-72 h-72 rounded-3xl overflow-hidden animate-float" style={{ boxShadow: "0 0 60px rgba(228,0,43,0.2), 0 40px 80px rgba(0,0,0,0.5)" }}>
            <img src="https://images.unsplash.com/photo-1784821856280-401b76b03266?w=600&h=600&fit=crop&auto=format" alt="Industrial robotic arm" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,98,155,0.2) 0%, rgba(228,0,43,0.1) 100%)" }} />
            <div className="absolute top-3 left-3 glass px-2 py-1 rounded-md"><span className="font-mono-ui text-xs text-green-400">● ONLINE</span></div>
            <div className="absolute bottom-3 right-3 glass px-2 py-1 rounded-md"><span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.8)" }}>DOF: 6-AXIS</span></div>
          </div>

          <div className="absolute -left-4 top-16 glass px-3 py-2 rounded-xl animate-float-delayed">
            <div className="font-mono-ui text-xs text-red-400">TORQUE</div>
            <div className="font-display font-bold text-white text-sm">98.4 Nm</div>
          </div>
          <div className="absolute -right-4 bottom-20 glass px-3 py-2 rounded-xl animate-float-slow">
            <div className="font-mono-ui text-xs" style={{ color: "#60a5fa" }}>PRECISION</div>
            <div className="font-display font-bold text-white text-sm">±0.02mm</div>
          </div>
          <div className="absolute -top-2 right-8 glass px-3 py-2 rounded-xl animate-float">
            <div className="font-mono-ui text-xs text-yellow-400">VELOCITY</div>
            <div className="font-display font-bold text-white text-sm">2.5 m/s</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.6)", letterSpacing: "0.1em" }}>SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-red-500 to-transparent" style={{ animation: "data-stream 1.5s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

function Stats() {
  const { ref, visible } = useScrollAnimation();
  const stats = [
    { value: "10,000+", label: "Global Members", sub: "researchers & engineers", icon: "👥" },
    { value: "40+", label: "Technical Committees", sub: "specialized domains", icon: "⚙️" },
    { value: "12+", label: "Annual Conferences", sub: "including ICRA & IROS", icon: "🎯" },
    { value: "2", label: "IEEE Journals", sub: "T-RO & RA-L", icon: "📖" },
  ];
  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`glass card-hover p-6 rounded-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="text-2xl mb-3">{s.icon}</div>
              <div className="font-display font-black text-3xl lg:text-4xl mb-1" style={{ color: "#e4002b" }}>{s.value}</div>
              <div className="font-display font-semibold text-sm text-white mb-0.5">{s.label}</div>
              <div className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.5)", letterSpacing: "0.06em" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none" style={{ background: "radial-gradient(ellipse at right, rgba(0,98,155,0.06) 0%, transparent 70%)" }} />
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
          <SectionLabel>ABOUT IEEE RAS</SectionLabel>
          <h2 className="font-display font-black leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", color: "#e8eaf0" }}>
            Shaping the<br /><span style={{ color: "#e4002b" }}>Future of</span><br />Robotics
          </h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(192,196,208,0.8)" }}>
            IEEE RAS is the world's leading professional society dedicated to the science and technology of robotics and automation. Founded in 1984, we foster innovation, education, and professional development across the globe.
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(192,196,208,0.65)" }}>
            Through flagship conferences like ICRA and IROS, journals T-RO and RA-L, and over 40 technical committees, we drive the field forward.
          </p>
          <Link to="/about" className="btn-primary px-6 py-2.5 rounded-xl text-sm inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
            Learn More <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-square" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,98,155,0.15)" }}>
              <img src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=600&fit=crop&auto=format" alt="Autonomous robots" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,15,0.7) 0%, transparent 50%)" }} />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-strong p-5 rounded-2xl max-w-xs" style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
              <div className="font-mono-ui text-xs text-red-400 mb-2 tracking-widest">MISSION</div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(232,234,240,0.85)" }}>To foster innovation, education, and welfare in the fields of robotics and automation</p>
              <div className="mt-3 flex items-center gap-2"><div className="w-6 h-px bg-red-500" /><span className="font-mono-ui text-xs text-red-400">IEEE RAS</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchPreview() {
  const { ref, visible } = useScrollAnimation();
  const domains = [
    { name: "Industrial Robotics", icon: "🦾", to: "/research#industrial" },
    { name: "Autonomous Systems", icon: "🤖", to: "/research#autonomous" },
    { name: "AI & Machine Learning", icon: "🧠", to: "/research#ai" },
    { name: "Human-Robot Interaction", icon: "🤝", to: "/research#hri" },
    { name: "Medical Robotics", icon: "🏥", to: "/research#medical" },
    { name: "Motion Planning", icon: "🗺️", to: "/research#motion" },
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row items-end justify-between mb-10 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <SectionLabel>RESEARCH DOMAINS</SectionLabel>
            <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
              Research &amp; <span style={{ color: "#e4002b" }}>Innovation</span>
            </h2>
          </div>
          <Link to="/research" className="btn-ghost px-5 py-2.5 rounded-xl text-sm self-start lg:self-auto" style={{ textDecoration: "none" }}>View All →</Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((d, i) => (
            <Link key={d.name} to={d.to} className={`glass card-hover p-5 rounded-2xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 60}ms`, textDecoration: "none" }}>
              <div className="text-3xl mb-3">{d.icon}</div>
              <h3 className="font-display font-bold text-sm text-white">{d.name}</h3>
              <div className="mt-3 flex items-center gap-1 text-red-400">
                <span className="text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>Explore</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsPreview() {
  const { ref, visible } = useScrollAnimation();
  const events = [
    { month: "MAY", day: "19–23", year: "2026", name: "ICRA 2026", location: "Atlanta, Georgia, USA", type: "Flagship Conference", color: "#e4002b" },
    { month: "OCT", day: "14–18", year: "2026", name: "IROS 2026", location: "Abu Dhabi, UAE", type: "International Conference", color: "#00629B" },
    { month: "SEP", day: "22–25", year: "2026", name: "RAS Summer School", location: "Online / Hybrid", type: "Educational Event", color: "#7c3aed" },
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row items-end justify-between mb-10 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <SectionLabel>UPCOMING EVENTS</SectionLabel>
            <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>Events &amp; <span style={{ color: "#e4002b" }}>Conferences</span></h2>
          </div>
          <Link to="/events" className="btn-ghost px-5 py-2.5 rounded-xl text-sm self-start lg:self-auto" style={{ textDecoration: "none" }}>View All Events →</Link>
        </div>
        <div className="flex flex-col gap-4">
          {events.map((ev, i) => (
            <div key={ev.name} className={`glass card-hover p-5 rounded-2xl flex flex-col lg:flex-row items-start lg:items-center gap-5 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="flex-shrink-0 w-20 text-center glass-strong p-3 rounded-xl">
                <div className="font-mono-ui text-xs mb-1" style={{ color: ev.color, letterSpacing: "0.1em" }}>{ev.month}</div>
                <div className="font-display font-black text-xl text-white">{ev.day}</div>
                <div className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.5)" }}>{ev.year}</div>
              </div>
              <div className="flex-1">
                <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full mb-1 inline-block" style={{ background: `${ev.color}20`, color: ev.color }}>{ev.type}</span>
                <h3 className="font-display font-bold text-white">{ev.name}</h3>
                <p className="text-xs mt-0.5" style={{ color: "rgba(192,196,208,0.55)" }}>{ev.location}</p>
              </div>
              <Link to="/events" className="flex-shrink-0 px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200" style={{ fontFamily: "'Outfit',sans-serif", background: `${ev.color}15`, color: ev.color, border: `1px solid ${ev.color}30`, textDecoration: "none" }}>
                Register
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsPreview() {
  const { ref, visible } = useScrollAnimation();
  const articles = [
    { img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format", category: "Research", date: "Sep 8, 2026", title: "Breakthrough in Soft Robotics Enables Human-Safe Manipulation", slug: "soft-robotics-breakthrough" },
    { img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop&auto=format", category: "Community", date: "Sep 2, 2026", title: "IEEE RAS Student Chapters Expand to 50 New Universities Globally", slug: "student-chapters-expansion" },
    { img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop&auto=format", category: "Awards", date: "Aug 28, 2026", title: "2026 George Saridis Best Transactions Paper Award Announced", slug: "saridis-award-2026" },
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        <div className={`flex flex-col lg:flex-row items-end justify-between mb-10 gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <SectionLabel>LATEST NEWS</SectionLabel>
            <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>From the <span style={{ color: "#e4002b" }}>Community</span></h2>
          </div>
          <Link to="/news" className="btn-ghost px-5 py-2.5 rounded-xl text-sm self-start lg:self-auto" style={{ textDecoration: "none" }}>All News →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Link key={a.slug} to={`/news/${a.slug}`} className={`glass card-hover rounded-2xl overflow-hidden group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 120}ms`, textDecoration: "none" }}>
              <div className="aspect-video overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full glass-red" style={{ color: "#ff6b6b" }}>{a.category.toUpperCase()}</span>
                  <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.4)" }}>{a.date}</span>
                </div>
                <h3 className="font-display font-bold text-sm text-white leading-snug mb-3">{a.title}</h3>
                <div className="flex items-center gap-1 text-red-400">
                  <span className="text-xs font-semibold" style={{ fontFamily: "'Outfit',sans-serif" }}>Read More</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  const { ref, visible } = useScrollAnimation();
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <CircuitBg />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(228,0,43,0.08) 0%, transparent 70%)" }} />
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          <SectionLabel>JOIN THE COMMUNITY</SectionLabel>
          <h2 className="font-display font-black mb-6 leading-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", letterSpacing: "-0.04em", color: "#e8eaf0" }}>
            Be Part of the<br /><span style={{ color: "#e4002b" }}>Robotics Community</span>
          </h2>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "rgba(192,196,208,0.7)", lineHeight: 1.7 }}>
            Connect with researchers, engineers, students, and innovators shaping the future of robotics and automation worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join" className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold animate-glow-pulse" style={{ textDecoration: "none" }}>Join IEEE RAS</Link>
            <Link to="/chapters" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>Explore Chapters</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ResearchPreview />
      <EventsPreview />
      <NewsPreview />
      <CTABanner />
    </>
  );
}
