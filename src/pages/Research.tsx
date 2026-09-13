import { useState } from "react";
import { Link } from "react-router";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

const domains = [
  { id: "industrial", name: "Industrial Robotics", icon: "🦾", tag: "Robotics", desc: "Automated manufacturing, precision motion control, and collaborative robots (cobots) transforming production lines worldwide.", detail: "IEEE RAS Technical Committee on Industrial Informatics and Manufacturing drives advances in smart factories, flexible automation, and human-robot collaboration on the shop floor." },
  { id: "autonomous", name: "Autonomous Systems", icon: "🤖", tag: "Autonomous", desc: "Self-navigating vehicles, UAVs, UGVs, and intelligent agents operating in complex real-world environments.", detail: "Covers ground vehicles, aerial drones, underwater systems, and space robots. Key topics include SLAM, path planning, and decision-making under uncertainty." },
  { id: "ai", name: "AI & Machine Learning", icon: "🧠", tag: "AI", desc: "Deep learning for robot perception, reinforcement learning for control, and foundation models for embodied intelligence.", detail: "The TC on Robot Learning explores how data-driven methods transform robot sensing, reasoning, and skill acquisition — from grasping to natural language interaction." },
  { id: "hri", name: "Human-Robot Interaction", icon: "🤝", tag: "Robotics", desc: "Safe, intuitive collaboration between humans and machines in shared workspaces and social environments.", detail: "HRI research spans physical interaction, social robotics, trust, transparency, and assistive applications. Key venues include IEEE RO-MAN and HRI conferences." },
  { id: "perception", name: "Robot Perception", icon: "👁️", tag: "AI", desc: "Computer vision, LIDAR, tactile sensing, and multi-modal fusion enabling robots to understand their environment.", detail: "From classical feature extraction to transformer-based scene understanding, perception is the gateway to autonomous behavior in unstructured settings." },
  { id: "medical", name: "Medical Robotics", icon: "🏥", tag: "Robotics", desc: "Surgical robots, rehabilitation exoskeletons, prosthetics, and diagnostic systems improving patient outcomes.", detail: "IEEE RAS co-organizes ISMR and publishes extensively in medical robotics. TC on Medical Robotics and Bionics bridges engineering and clinical practice." },
  { id: "motion", name: "Motion Planning", icon: "🗺️", tag: "Autonomous", desc: "Trajectory optimization, collision avoidance, and real-time planning algorithms for articulated systems.", detail: "From sampling-based planners (RRT, PRM) to optimization-based approaches (iLQR, SQP), motion planning underpins manipulation and mobile robotics." },
  { id: "manipulation", name: "Manipulation", icon: "✋", tag: "Robotics", desc: "Grasping, dexterous hands, tool use, and deformable object handling for industrial and domestic applications.", detail: "The TC on Manipulation covers rigid and soft grasping, learning from demonstration, and assembly tasks requiring sub-millimeter precision." },
  { id: "automation", name: "Process Automation", icon: "⚙️", tag: "Automation", desc: "Industrial control systems, smart manufacturing, IoT integration, and Industry 4.0 architectures.", detail: "Advances in SCADA, PLC programming, digital twins, and cyber-physical systems drive the next wave of industrial efficiency and adaptability." },
];

const filters = ["All", "Robotics", "AI", "Autonomous", "Automation"];

function FeaturedPapers() {
  const { ref, visible } = useScrollAnimation();
  const papers = [
    { journal: "T-RO", vol: "40(2)", year: "2026", title: "Learning Dexterous Manipulation from Human Demonstrations via Embodied Imitation", authors: "Zhang et al.", doi: "https://ieeexplore.ieee.org/Xplore/home.jsp" },
    { journal: "RA-L", vol: "11(1)", year: "2026", title: "Safe Reinforcement Learning for Shared Autonomy in Surgical Robotics", authors: "Park, Kim, Gupta", doi: "https://ieeexplore.ieee.org/Xplore/home.jsp" },
    { journal: "T-RO", vol: "40(1)", year: "2026", title: "Terrain-Adaptive Locomotion for Legged Robots in Unstructured Environments", authors: "Bellicoso et al.", doi: "https://ieeexplore.ieee.org/Xplore/home.jsp" },
  ];
  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <SectionLabel>FEATURED PUBLICATIONS</SectionLabel>
          <div className="flex items-end justify-between">
            <h2 className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
              Recent <span style={{ color: "#e4002b" }}>Research</span>
            </h2>
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer" className="btn-ghost px-5 py-2.5 rounded-xl text-sm" style={{ textDecoration: "none" }}>IEEE Xplore →</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {papers.map((p, i) => (
            <a key={p.title} href={p.doi} target="_blank" rel="noopener noreferrer" className={`glass card-hover p-5 rounded-2xl flex flex-col lg:flex-row items-start gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 100}ms`, textDecoration: "none" }}>
              <div className="flex-shrink-0 glass-red px-3 py-1.5 rounded-xl text-center">
                <div className="font-mono-ui text-xs" style={{ color: "#e4002b" }}>{p.journal}</div>
                <div className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.5)" }}>{p.vol} · {p.year}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-white mb-1">{p.title}</h3>
                <p className="text-xs" style={{ color: "rgba(192,196,208,0.55)" }}>{p.authors}</p>
              </div>
              <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Research() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, visible } = useScrollAnimation();

  const filtered = activeFilter === "All" ? domains : domains.filter(d => d.tag === activeFilter);

  return (
    <>
      <PageHero
        label="RESEARCH & INNOVATION"
        title="Research &"
        highlight="Innovation"
        sub="IEEE RAS Technical Committees drive cutting-edge research across the full spectrum of robotics and automation — from perception to manipulation, from medical to industrial."
      />

      <section id="domains" ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filters */}
          <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                style={{ fontFamily: "'Outfit',sans-serif", background: activeFilter === f ? "#e4002b" : "rgba(255,255,255,0.05)", color: activeFilter === f ? "white" : "rgba(192,196,208,0.7)", border: activeFilter === f ? "1px solid #e4002b" : "1px solid rgba(255,255,255,0.08)" }}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((domain, i) => (
              <div key={domain.id} id={domain.id} className={`glass card-hover p-6 rounded-2xl transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="text-3xl mb-4">{domain.icon}</div>
                <div className="font-mono-ui text-xs mb-2" style={{ color: "#e4002b", letterSpacing: "0.06em" }}>{domain.tag.toUpperCase()}</div>
                <h3 className="font-display font-bold text-white mb-2">{domain.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(192,196,208,0.65)" }}>{domain.desc}</p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.45)", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px", marginTop: "10px" }}>{domain.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedPapers />

      <section id="committees" className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <SectionLabel>TECHNICAL COMMITTEES</SectionLabel>
          <h2 className="font-display font-black mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
            40+ <span style={{ color: "#e4002b" }}>Technical Committees</span>
          </h2>
          <p className="text-sm mb-8 max-w-xl mx-auto" style={{ color: "rgba(192,196,208,0.65)" }}>
            IEEE RAS Technical Committees organize workshops, special sessions, and community activities in specialized research domains.
          </p>
          <a href="https://www.ieee-ras.org/technical-committees" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2" style={{ textDecoration: "none" }}>
            Browse All Committees
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </section>
    </>
  );
}
