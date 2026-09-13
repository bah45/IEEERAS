import { Link } from "react-router";
import { PageHero, useScrollAnimation, SectionLabel, CircuitBg } from "../components/shared";

function Timeline() {
  const { ref, visible } = useScrollAnimation();
  const events = [
    { year: "1984", title: "IEEE RAS Founded", desc: "The IEEE Robotics and Automation Society was established as a technical society of the IEEE." },
    { year: "1985", title: "ICRA Launched", desc: "The International Conference on Robotics and Automation held its inaugural edition, becoming the field's premier conference." },
    { year: "1987", title: "T-RO Journal Established", desc: "IEEE Transactions on Robotics and Automation (later renamed T-RO) began publication." },
    { year: "2001", title: "IROS Partnership", desc: "IEEE RAS co-sponsors the Intelligent Robots and Systems conference, now a flagship annual event." },
    { year: "2013", title: "RA-L Introduced", desc: "IEEE Robotics and Automation Letters launched as a rapid-publication journal bridging conferences and journals." },
    { year: "2020", title: "100+ Global Chapters", desc: "IEEE RAS surpassed 100 active chapters worldwide, reflecting explosive growth in robotics communities." },
    { year: "2026", title: "AI Integration Era", desc: "Technical committees on AI-enabled robotics and autonomous systems reflect the field's rapid evolution." },
  ];
  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>HISTORY</SectionLabel>
          <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            Four Decades of <span style={{ color: "#e4002b" }}>Innovation</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #e4002b, rgba(228,0,43,0.1))" }} />
          <div className="flex flex-col gap-8">
            {events.map((ev, i) => (
              <div key={ev.year} className={`flex gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="flex-shrink-0 w-16 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-2 border-red-500 bg-background z-10" style={{ marginTop: "4px" }} />
                  <div className="font-mono-ui text-xs mt-2" style={{ color: "#e4002b", letterSpacing: "0.06em", writingMode: "horizontal-tb" }}>{ev.year}</div>
                </div>
                <div className="glass card-hover p-5 rounded-2xl flex-1 mb-2">
                  <h3 className="font-display font-bold text-white mb-2">{ev.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.7)" }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const { ref, visible } = useScrollAnimation();
  const vals = [
    { icon: "🔬", title: "Scientific Excellence", desc: "Upholding the highest standards of research quality and peer review across all publications and conferences." },
    { icon: "🌐", title: "Global Community", desc: "Building inclusive networks that connect roboticists across borders, disciplines, and career stages." },
    { icon: "🎓", title: "Education First", desc: "Supporting students, early-career researchers, and lifelong learners through dedicated programs and resources." },
    { icon: "🤝", title: "Collaboration", desc: "Fostering interdisciplinary partnerships between academia, industry, and government for maximum impact." },
    { icon: "⚡", title: "Innovation", desc: "Encouraging bold ideas and breakthrough thinking at the frontier of autonomous systems and intelligent machines." },
    { icon: "♻️", title: "Ethical Responsibility", desc: "Promoting responsible development of robotics and automation with attention to safety, fairness, and social impact." },
  ];
  return (
    <section id="mission" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>VALUES</SectionLabel>
          <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            What We <span style={{ color: "#e4002b" }}>Stand For</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {vals.map((v, i) => (
            <div key={v.title} className={`glass card-hover p-6 rounded-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-3xl mb-4">{v.icon}</div>
              <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.65)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  const { ref, visible } = useScrollAnimation();
  const leaders = [
    { name: "President", role: "IEEE RAS President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format" },
    { name: "President-Elect", role: "IEEE RAS President-Elect", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&auto=format" },
    { name: "Past President", role: "IEEE RAS Immediate Past President", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format" },
    { name: "VP Publications", role: "VP Publications Activities", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format" },
  ];
  return (
    <section id="governance" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>LEADERSHIP</SectionLabel>
          <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            Society <span style={{ color: "#e4002b" }}>Leadership</span>
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto" style={{ color: "rgba(192,196,208,0.6)" }}>
            IEEE RAS is governed by elected volunteers from the global robotics community. Visit <a href="https://www.ieee-ras.org/about-ras/officers" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ieee-ras.org</a> for current officers.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {leaders.map((l, i) => (
            <div key={l.role} className={`glass card-hover p-5 rounded-2xl text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-3">
                <img src={l.img} alt={l.role} className="w-full h-full object-cover" />
              </div>
              <div className="font-mono-ui text-xs mb-1" style={{ color: "#e4002b", letterSpacing: "0.06em" }}>{l.role.toUpperCase()}</div>
              <p className="text-xs" style={{ color: "rgba(192,196,208,0.6)" }}>See ieee-ras.org for current officers</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHero
        label="ABOUT IEEE RAS"
        title="About IEEE Robotics"
        highlight="and Automation Society"
        sub="Founded in 1984, IEEE RAS is the world's premier professional organization for robotics and automation — advancing science, education, and global community."
      />
      <section id="history" className="relative py-20 overflow-hidden">
        <CircuitBg />
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-3 gap-6">
          {[
            { id: "mission", icon: "🎯", title: "Our Mission", text: "To foster innovation, education, and the welfare of people working in the science and technology of robotics and automation." },
            { id: "vision", icon: "🔭", title: "Our Vision", text: "A world where robotics and automation technology improves human lives, drives economic prosperity, and advances scientific knowledge for all." },
            { id: "scope", icon: "🌐", title: "Global Scope", text: "IEEE RAS serves a global community across 100+ countries through conferences, publications, chapters, and technical committees." },
          ].map(card => (
            <div key={card.id} id={card.id} className="glass-strong p-7 rounded-2xl">
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="font-display font-bold text-white text-lg mb-3">{card.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(192,196,208,0.75)" }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Timeline />
      <Values />
      <LeadershipSection />
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display font-black mb-4" style={{ fontSize: "2.5rem", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            Ready to <span style={{ color: "#e4002b" }}>Get Involved?</span>
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(192,196,208,0.7)" }}>Join thousands of robotics professionals shaping the future of automation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/join" className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>Join IEEE RAS</Link>
            <Link to="/chapters" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-semibold" style={{ textDecoration: "none" }}>Find a Chapter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
