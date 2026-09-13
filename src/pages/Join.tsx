import { useState } from "react";
import { Link } from "react-router";
import { PageHero, useScrollAnimation, SectionLabel } from "../components/shared";

const benefits = [
  { icon: "🌐", title: "Global Professional Network", desc: "Connect with 10,000+ robotics professionals, researchers, and engineers across 100+ countries through local chapters and online communities." },
  { icon: "📖", title: "Publications Access", desc: "Full access to IEEE Transactions on Robotics (T-RO) and Robotics & Automation Letters (RA-L), plus discounted IEEE Xplore access." },
  { icon: "🎯", title: "Conference Discounts", desc: "Member discounts on registration for ICRA, IROS, Humanoids, RO-MAN, and all IEEE RAS technically sponsored events." },
  { icon: "⚙️", title: "Technical Committees", desc: "Join specialized TCs to collaborate on research frontiers, organize workshops, and shape the direction of your field." },
  { icon: "🎓", title: "Student Opportunities", desc: "Student members gain access to travel grants, best paper awards, mentorship programs, and the Graduate Summer School." },
  { icon: "💼", title: "Career Development", desc: "Access the IEEE Career Center, professional development webinars, and a global job board focused on robotics and automation roles." },
];

const faqs = [
  { q: "Who can join IEEE RAS?", a: "Anyone interested in robotics and automation can join — students, researchers, engineers, academics, and industry professionals. IEEE membership is required, and RAS membership is added on top." },
  { q: "What is the membership fee?", a: "IEEE membership fees vary by grade and region. IEEE RAS society dues are typically $25–$40/year for professionals and significantly discounted for students. Visit ieee.org/membership for current pricing." },
  { q: "Do I need to be an IEEE member first?", a: "Yes. IEEE RAS is a society of the IEEE. You must first join IEEE, then add the Robotics and Automation Society as a technical society affiliation." },
  { q: "What's the difference between IEEE and IEEE RAS membership?", a: "IEEE is the parent organization for all engineering disciplines. IEEE RAS is a technical society within IEEE specifically focused on robotics and automation. Society membership gives you access to RAS-specific publications, conferences, and communities." },
  { q: "Can students join at a reduced rate?", a: "Yes. Student IEEE membership is substantially reduced, and IEEE RAS student dues are also discounted. Many universities have bulk membership arrangements — check with your department." },
  { q: "How do I start or join a local chapter?", a: "After joining IEEE RAS, you can find local chapters through the IEEE RAS website. If no chapter exists in your area, you can apply to establish one with support from the Society." },
];

export default function Join() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { ref, visible } = useScrollAnimation();

  return (
    <>
      <PageHero
        label="MEMBERSHIP"
        title="Join the Global"
        highlight="Robotics Community"
        sub="Become part of the world's premier professional society for robotics and automation — connect, learn, publish, and advance your career alongside thousands of like-minded professionals."
      />

      {/* Benefits */}
      <section ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionLabel>WHY JOIN</SectionLabel>
            <h2 className="font-display font-black" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
              Member <span style={{ color: "#e4002b" }}>Benefits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={b.title} className={`glass card-hover p-6 rounded-2xl transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-display font-bold text-white mb-2">{b.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.65)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="relative py-12 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="glass-strong p-10 rounded-3xl text-center" style={{ border: "1px solid rgba(228,0,43,0.2)", boxShadow: "0 0 60px rgba(228,0,43,0.08)" }}>
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="font-display font-black text-white text-2xl mb-3" style={{ letterSpacing: "-0.02em" }}>Ready to Join IEEE RAS?</h3>
            <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: "rgba(192,196,208,0.7)" }}>
              Membership starts with joining IEEE. Then add IEEE RAS as your technical society to unlock all society benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3.5 rounded-xl text-sm font-semibold animate-glow-pulse inline-flex items-center justify-center gap-2" style={{ textDecoration: "none" }}>
                Join IEEE + RAS
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a href="https://www.ieee-ras.org/membership" target="_blank" rel="noopener noreferrer" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center justify-center gap-2" style={{ textDecoration: "none" }}>
                View Membership Details
              </a>
            </div>
            <p className="text-xs mt-6" style={{ color: "rgba(192,196,208,0.4)", fontFamily: "'JetBrains Mono',monospace" }}>
              Already an IEEE member? Add RAS at <a href="https://ieee.org/membership" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">ieee.org/membership</a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="font-display font-black" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", color: "#e8eaf0", letterSpacing: "-0.03em" }}>
              Common <span style={{ color: "#e4002b" }}>Questions</span>
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-display font-semibold text-sm text-white">{faq.q}</span>
                  <svg className={`w-5 h-5 flex-shrink-0 text-red-400 transition-transform duration-200 ${openFaq === i ? "rotate-45" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "200px" : "0px" }}>
                  <p className="px-5 pb-5 text-xs leading-relaxed" style={{ color: "rgba(192,196,208,0.7)" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs mb-4" style={{ color: "rgba(192,196,208,0.5)" }}>Still have questions?</p>
            <Link to="/contact" className="btn-ghost px-6 py-2.5 rounded-xl text-sm" style={{ textDecoration: "none" }}>Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
