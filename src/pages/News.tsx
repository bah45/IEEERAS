import { useState } from "react";
import { Link, useParams } from "react-router";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

export const articles = [
  { slug: "soft-robotics-breakthrough", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&auto=format", category: "Research", date: "Sep 8, 2026", title: "Breakthrough in Soft Robotics Enables Human-Safe Manipulation", desc: "IEEE RAS researchers demonstrate compliant robotic grippers with force-sensing capabilities suitable for collaborative environments.", body: "Researchers affiliated with IEEE RAS Technical Committee on Manipulation have published groundbreaking results demonstrating soft robotic grippers capable of applying precisely calibrated forces while detecting contact with sub-Newton sensitivity. The system, tested in a collaborative assembly line environment, exceeded human-robot safety thresholds required by ISO/TS 15066 standards.\n\nThe gripper design uses a hybrid pneumatic-tendon actuation system embedded with distributed pressure sensors, enabling real-time stiffness modulation. Machine learning algorithms trained on 10,000+ grasping demonstrations allow the system to adapt to novel object shapes without explicit programming.\n\n'This work bridges the gap between industrial precision and human-scale safety,' said the lead author. 'We can now envision robots working alongside humans on tasks previously impossible due to force control limitations.'" },
  { slug: "student-chapters-expansion", img: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=500&fit=crop&auto=format", category: "Community", date: "Sep 2, 2026", title: "IEEE RAS Student Chapters Expand to 50 New Universities Globally", desc: "Record enrollment across Asia-Pacific and Latin America regions reflects growing interest in robotics education.", body: "IEEE Robotics and Automation Society announced the establishment of 50 new student branch chapters across universities in Asia-Pacific and Latin America, bringing the total to over 200 student chapters worldwide. This represents the largest single-year expansion in the Society's history.\n\nThe new chapters span institutions in Indonesia, Vietnam, Brazil, Colombia, and Nigeria — regions where robotics engineering programs have seen rapid growth. Each chapter receives mentoring support from established chapters and access to IEEE RAS educational resources.\n\nThe expansion is supported by IEEE RAS's Student Activities Committee and a dedicated grant program providing seed funding of up to $2,000 per new chapter to organize inaugural events and acquire equipment." },
  { slug: "saridis-award-2026", img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop&auto=format", category: "Awards", date: "Aug 28, 2026", title: "2026 George Saridis Best Transactions Paper Award Announced", desc: "The annual award recognizes outstanding contributions to the IEEE Transactions on Robotics journal.", body: "The IEEE Robotics and Automation Society has announced the recipient of the 2026 George Saridis Best Transactions Paper Award. The award, named in honor of the IEEE RAS founding president George Saridis, recognizes the paper published in IEEE Transactions on Robotics that has made the most significant contribution to the field.\n\nThe award selection committee evaluates papers on originality, technical quality, potential impact, and clarity of presentation. This year's selection recognized work in the area of model-based reinforcement learning for contact-rich manipulation tasks.\n\nThe award will be presented at ICRA 2026 in Atlanta during the awards ceremony. For the full list of IEEE RAS awards, visit ieee-ras.org/awards." },
  { slug: "icra-2026-preview", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=500&fit=crop&auto=format", category: "Events", date: "Aug 15, 2026", title: "ICRA 2026 Preview: 3,000+ Papers, 200+ Workshops", desc: "The International Conference on Robotics and Automation returns to Atlanta with record-breaking submissions.", body: "ICRA 2026, to be held May 19–23 in Atlanta, Georgia, has received a record 3,400+ paper submissions — a 15% increase over 2025. The program committee has accepted approximately 1,400 papers for presentation, spanning manipulation, locomotion, perception, human-robot interaction, and AI-enabled autonomy.\n\nThe conference will feature over 200 workshops and tutorials, an expanded industry exhibition with 80+ companies, and the inaugural Robot Learning Competition. Keynote speakers include leading researchers from academia and industry.\n\nEarly registration is open through March 31, 2026. For full program details, visit the conference website." },
  { slug: "ras-journal-metrics", img: "https://images.unsplash.com/photo-1784821856280-401b76b03266?w=800&h=500&fit=crop&auto=format", category: "Publications", date: "Jul 30, 2026", title: "IEEE Transactions on Robotics Achieves New Impact Factor High", desc: "T-RO reaches an impact factor of 9.4, solidifying its position as the top robotics journal.", body: "IEEE Transactions on Robotics (T-RO) has achieved a record impact factor of 9.4 in the 2025 Journal Citation Reports, reinforcing its standing as the highest-impact peer-reviewed journal in robotics and automation. The journal, published bi-monthly, covers fundamental and applied research across all robotics disciplines.\n\nThe Editor-in-Chief attributed the milestone to increased citation activity for papers on data-driven robotics, large language models for robot learning, and soft robotics — areas that have seen explosive growth in cross-disciplinary engagement.\n\nSubmission guidelines and manuscript preparation instructions are available on the T-RO author portal on IEEE Xplore." },
  { slug: "women-in-robotics", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=500&fit=crop&auto=format", category: "Community", date: "Jul 22, 2026", title: "IEEE RAS Women in Engineering Program Doubles Mentorship Cohort", desc: "The WIE mentorship program pairs early-career researchers with established robotics professionals.", body: "The IEEE RAS Women in Engineering (WIE) affinity group has doubled its mentorship cohort for 2026, matching 200 early-career women researchers and engineers with senior mentors from academia and industry. The program, running since 2019, has supported over 600 participants to date.\n\nMentors commit to monthly virtual sessions, career guidance, and networking introductions over a 12-month period. Program participants report higher rates of conference paper submission, journal publications, and job placement in the first year following mentorship.\n\nApplications for the 2027 cohort will open in October 2026 at ieee-ras.org/wie." },
];

const categories = ["All", "Research", "Community", "Events", "Awards", "Publications"];

export function NewsArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display font-black text-4xl text-white mb-4">Article Not Found</h1>
          <Link to="/news" className="btn-primary px-6 py-3 rounded-xl text-sm" style={{ textDecoration: "none" }}>← Back to News</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(228,0,43,0.07) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <Link to="/news" className="inline-flex items-center gap-2 text-red-400 text-sm mb-8 hover:text-red-300 transition-colors" style={{ textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
            Back to News
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full glass-red" style={{ color: "#ff6b6b" }}>{article.category.toUpperCase()}</span>
            <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.4)" }}>{article.date}</span>
          </div>
          <h1 className="font-display font-black text-white mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.03em" }}>{article.title}</h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(192,196,208,0.75)" }}>{article.desc}</p>
          <div className="rounded-2xl overflow-hidden aspect-video mb-12" style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
            <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="prose">
            {article.body.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed mb-5" style={{ color: "rgba(192,196,208,0.8)" }}>{para}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <Link to="/news" className="btn-ghost px-5 py-2.5 rounded-xl text-sm" style={{ textDecoration: "none" }}>← More News</Link>
            <div className="flex gap-3">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=https://ieee-ras.org/news/${article.slug}`} target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-xl text-xs transition-all duration-200 hover:border-red-500/30" style={{ textDecoration: "none", color: "rgba(192,196,208,0.6)", fontFamily: "'Outfit',sans-serif" }}>Share on 𝕏</a>
              <a href={`https://linkedin.com/sharing/share-offsite/?url=https://ieee-ras.org/news/${article.slug}`} target="_blank" rel="noopener noreferrer" className="glass px-4 py-2 rounded-xl text-xs transition-all duration-200 hover:border-red-500/30" style={{ textDecoration: "none", color: "rgba(192,196,208,0.6)", fontFamily: "'Outfit',sans-serif" }}>Share on LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <SectionLabel>MORE NEWS</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {articles.filter(a => a.slug !== slug).slice(0, 2).map(a => (
              <Link key={a.slug} to={`/news/${a.slug}`} className="glass card-hover rounded-2xl overflow-hidden" style={{ textDecoration: "none" }}>
                <div className="aspect-video overflow-hidden"><img src={a.img} alt={a.title} className="w-full h-full object-cover" /></div>
                <div className="p-4">
                  <div className="font-mono-ui text-xs text-red-400 mb-2">{a.category.toUpperCase()}</div>
                  <h3 className="font-display font-bold text-white text-sm">{a.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function News() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const { ref, visible } = useScrollAnimation();

  const filtered = articles.filter(a =>
    (activeCategory === "All" || a.category === activeCategory) &&
    (a.title.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase()))
  );

  const featured = articles[0];

  return (
    <>
      <PageHero label="NEWS & UPDATES" title="Latest from" highlight="IEEE RAS" sub="Stay current with research breakthroughs, community news, award announcements, and event coverage from the global robotics community." />

      {/* Featured */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionLabel>FEATURED STORY</SectionLabel>
          <Link to={`/news/${featured.slug}`} className="glass card-hover rounded-3xl overflow-hidden grid lg:grid-cols-5 gap-0" style={{ textDecoration: "none" }}>
            <div className="lg:col-span-3 aspect-video lg:aspect-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full glass-red" style={{ color: "#ff6b6b" }}>{featured.category.toUpperCase()}</span>
                <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.4)" }}>{featured.date}</span>
              </div>
              <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.5rem", letterSpacing: "-0.02em" }}>{featured.title}</h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(192,196,208,0.65)" }}>{featured.desc}</p>
              <div className="flex items-center gap-1 text-red-400">
                <span className="text-sm font-semibold" style={{ fontFamily: "'Outfit',sans-serif" }}>Read Full Story</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section ref={ref} className="relative py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex flex-col sm:flex-row gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "rgba(192,196,208,0.4)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input type="text" placeholder="Search news..." value={query} onChange={e => setQuery(e.target.value)}
                className="w-full glass pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
                style={{ fontFamily: "'Inter',sans-serif", color: "#e8eaf0", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" }} />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(c => (
                <button key={c} onClick={() => setActiveCategory(c)} className="px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                  style={{ fontFamily: "'Outfit',sans-serif", background: activeCategory === c ? "#e4002b" : "rgba(255,255,255,0.05)", color: activeCategory === c ? "white" : "rgba(192,196,208,0.7)", border: activeCategory === c ? "1px solid #e4002b" : "1px solid rgba(255,255,255,0.08)" }}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a, i) => (
              <Link key={a.slug} to={`/news/${a.slug}`}
                className={`glass card-hover rounded-2xl overflow-hidden group transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 80}ms`, textDecoration: "none" }}>
                <div className="aspect-video overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono-ui text-xs px-2 py-0.5 rounded-full glass-red" style={{ color: "#ff6b6b" }}>{a.category.toUpperCase()}</span>
                    <span className="font-mono-ui text-xs" style={{ color: "rgba(192,196,208,0.4)" }}>{a.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-white leading-snug mb-2">{a.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "rgba(192,196,208,0.55)" }}>{a.desc}</p>
                  <div className="flex items-center gap-1 text-red-400">
                    <span className="text-xs font-semibold" style={{ fontFamily: "'Outfit',sans-serif" }}>Read More</span>
                    <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
