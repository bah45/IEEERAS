import { useState } from "react";
import { PageHero, useScrollAnimation } from "../components/shared";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const { ref, visible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full glass px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 focus:border-red-500/40";
  const inputStyle = { fontFamily: "'Inter',sans-serif", color: "#e8eaf0", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)" };

  return (
    <>
      <PageHero
        label="CONTACT"
        title="Let's"
        highlight="Connect"
        sub="Reach out to IEEE RAS for membership inquiries, media requests, partnership opportunities, or general questions."
      />

      <section ref={ref} className="relative py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <h2 className="font-display font-black text-white text-2xl mb-6" style={{ letterSpacing: "-0.02em" }}>IEEE Robotics and<br />Automation Society</h2>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: "🌐", label: "Website", value: "ieee-ras.org", href: "https://www.ieee-ras.org" },
                { icon: "📧", label: "Email", value: "ras-info@ieee.org", href: "mailto:ras-info@ieee.org" },
                { icon: "🏢", label: "Address", value: "445 Hoes Lane, Piscataway, NJ 08854, USA", href: "https://maps.google.com?q=445+Hoes+Lane+Piscataway+NJ" },
                { icon: "📞", label: "Phone", value: "+1 732 981 0060", href: "tel:+17329810060" },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass card-hover p-4 rounded-xl flex items-start gap-4" style={{ textDecoration: "none" }}>
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="font-mono-ui text-xs text-red-400 mb-0.5" style={{ letterSpacing: "0.08em" }}>{item.label.toUpperCase()}</div>
                    <div className="text-sm text-white">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass p-5 rounded-2xl">
              <div className="font-mono-ui text-xs text-red-400 mb-3 tracking-widest">SOCIAL MEDIA</div>
              <div className="flex flex-col gap-2">
                {[
                  { name: "Twitter / X", url: "https://twitter.com/ieee_ras", handle: "@ieee_ras" },
                  { name: "LinkedIn", url: "https://linkedin.com/company/ieee-ras", handle: "IEEE Robotics and Automation Society" },
                  { name: "YouTube", url: "https://youtube.com/@ieeerasvideo", handle: "@ieeerasvideo" },
                  { name: "IEEE Xplore", url: "https://ieeexplore.ieee.org/browse/periodicals/title?queryText=robotics+automation", handle: "Full publication archive" },
                ].map(s => (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between py-2 border-b hover:text-red-400 transition-colors duration-200" style={{ borderColor: "rgba(255,255,255,0.06)", textDecoration: "none" }}>
                    <span className="font-display font-semibold text-sm text-white">{s.name}</span>
                    <span className="text-xs" style={{ color: "rgba(192,196,208,0.5)", fontFamily: "'JetBrains Mono',monospace" }}>{s.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {sent ? (
              <div className="glass-strong p-10 rounded-3xl text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="text-5xl">✅</div>
                <h3 className="font-display font-black text-white text-xl">Message Sent!</h3>
                <p className="text-sm" style={{ color: "rgba(192,196,208,0.7)" }}>Thank you for reaching out. The IEEE RAS team will respond within 2–3 business days.</p>
                <button onClick={() => setSent(false)} className="btn-ghost px-6 py-2.5 rounded-xl text-sm mt-4">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-3xl flex flex-col gap-5">
                <h3 className="font-display font-bold text-white text-lg mb-2">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono-ui text-xs text-red-400 mb-1.5 block tracking-widest">NAME *</label>
                    <input required type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className={inputClass} style={inputStyle} />
                  </div>
                  <div>
                    <label className="font-mono-ui text-xs text-red-400 mb-1.5 block tracking-widest">EMAIL *</label>
                    <input required type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputClass} style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label className="font-mono-ui text-xs text-red-400 mb-1.5 block tracking-widest">SUBJECT *</label>
                  <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className={inputClass} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="" disabled>Select a subject...</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="chapters">Chapter Information</option>
                    <option value="conferences">Conference / Events</option>
                    <option value="publications">Publications</option>
                    <option value="media">Media / Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono-ui text-xs text-red-400 mb-1.5 block tracking-widest">MESSAGE *</label>
                  <textarea required rows={5} placeholder="Your message..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputClass} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" className="btn-primary py-3.5 rounded-xl text-sm font-semibold mt-2 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
                <p className="text-xs text-center" style={{ color: "rgba(192,196,208,0.4)", fontFamily: "'JetBrains Mono',monospace" }}>
                  For urgent matters, email <a href="mailto:ras-info@ieee.org" className="text-red-400 hover:underline">ras-info@ieee.org</a> directly.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
