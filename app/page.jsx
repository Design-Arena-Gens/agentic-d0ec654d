import AutoReplyPlayground from "./components/AutoReplyPlayground";

const highlights = [
  {
    title: "Instant channel routing",
    body: "Detect the inbound channel and deploy the right script. SMS, WhatsApp, email, or web chat—Muze replies in under 60 seconds with contextual data from your CRM." 
  },
  {
    title: "Revenue-ready intelligence",
    body: "Sync every reply back to Salesforce or HubSpot with outcome tags so reps know whether to book, nurture, or disqualify before they pick up the thread." 
  },
  {
    title: "Human-in-the-loop controls",
    body: "Revenue operators can approve, pause, or A/B test automations live. Replace bland autoresponders with branded, revenue-generating conversations." 
  }
];

const scenarios = [
  {
    title: "Inbound demo requests",
    description: "Qualify and respond to demo forms within two minutes, add context from Clearbit, and hand off warm prospects to the right AE." 
  },
  {
    title: "Event lead follow-up",
    description: "Trigger blitz sequences the moment badge scans sync, keeping the conversation alive while your team travels." 
  },
  {
    title: "Partner referrals",
    description: "Respect referral agreements, include partner context, and set up a mutual intro call without letting the lead go cold." 
  }
];

const testimonials = [
  {
    quote:
      "Muze removed the black hole between lead capture and first touch. SDRs now start conversations that already feel halfway closed.",
    name: "Alex Morgan",
    role: "VP Revenue, Northbound SaaS"
  },
  {
    quote:
      "We replaced six disconnected Zapier automations and saw reply-to-meeting conversion climb by 38%.",
    name: "Priya Desai",
    role: "Head of RevOps, Clarke Labs"
  },
  {
    quote:
      "The tone presets are so on-brand that prospects ask which rep they were speaking with—it blends perfectly with our team.",
    name: "Luis Herrera",
    role: "Director of Growth, GigaOps"
  }
];

export default function Page() {
  return (
    <main>
      <section className="container hero" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div className="hero-grid">
          <div style={{ display: "grid", gap: "1.75rem" }}>
            <div className="badge">Muze Lead Generation</div>
            <h1 className="section-title" style={{ fontSize: "clamp(3rem, 4vw, 4.75rem)", marginBottom: 0 }}>
              Automate the first reply. Book more qualified meetings.
            </h1>
            <p className="section-subtitle" style={{ maxWidth: "640px" }}>
              Muze catches every inbound lead, crafts a tailored reply, and books the next step before your competition can say “hello”. Plug into your existing CRM and let the automation go to work.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a className="button-primary" href="#playground">Build your reply</a>
              <a className="button-ghost" href="#demo">Schedule a live tour</a>
            </div>
            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-value">-92%</div>
                <div className="metric-label">Average time-to-first-touch</div>
              </div>
              <div className="metric">
                <div className="metric-value">3.4x</div>
                <div className="metric-label">More meetings booked in week one</div>
              </div>
              <div className="metric">
                <div className="metric-value">24/7</div>
                <div className="metric-label">Lead coverage across every channel</div>
              </div>
            </div>
          </div>
          <div className="card" style={{ alignSelf: "stretch", padding: "2.5rem", display: "grid", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span className="badge" style={{ background: "rgba(236, 72, 153, 0.2)", borderColor: "rgba(236, 72, 153, 0.45)", color: "#f472b6" }}>Lead Inbox</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Today · 3m ago</span>
            </div>
            <div style={{ display: "grid", gap: "0.9rem" }}>
              <div style={{ fontWeight: 600 }}>New inbound · Enterprise pricing request</div>
              <div style={{ color: "var(--text-muted)" }}>
                &ldquo;Hi, this is Jordan from Cascade Freight. We loved the live demo and want to understand pricing for 25 seats. How fast can we deploy?&rdquo;
              </div>
              <div style={{ display: "grid", gap: "0.6rem", marginTop: "0.6rem" }}>
                <div style={{ fontSize: "0.95rem", color: "#34d399", fontWeight: 600 }}>Muze drafted reply</div>
                <div style={{
                  background: "rgba(79, 70, 229, 0.16)",
                  borderRadius: "0.9rem",
                  padding: "1.2rem",
                  lineHeight: 1.55
                }}>
                  Hey Jordan! Rolling out Muze to 25 seats takes less than a week—our onboarding squad handles integrations
                  and training. I just opened our enterprise pricing playbook and dropped a tailored plan in your inbox.
                  Does a 20-minute call at 2:30pm CT today work to finalize roll-out?
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button className="button-primary" style={{ flex: 1 }}>Send + Tag AE</button>
              <button className="button-ghost" style={{ flex: 1 }}>Edit script</button>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="badge">Why go Muze</div>
        <h2 className="section-title">AI that thinks like your revenue team</h2>
        <p className="section-subtitle" style={{ maxWidth: "660px" }}>
          Muze captures conversational nuance from your best reps, blends it with live enrichment, and keeps every prospect engaged without feeling like a bot.
        </p>
        <div className="grid" style={{ marginTop: "3rem", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {highlights.map((item) => (
            <div key={item.title} className="card" style={{ display: "grid", gap: "1rem" }}>
              <h3 style={{ fontSize: "1.35rem", margin: 0 }}>{item.title}</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="playground">
        <AutoReplyPlayground />
      </section>

      <section className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="badge">Plays we automate</div>
        <h2 className="section-title">Drop Muze into any go-to-market motion</h2>
        <div className="scenario-grid" style={{ marginTop: "2.5rem" }}>
          {scenarios.map((scenario) => (
            <div key={scenario.title} className="card scenario-card">
              <h3>{scenario.title}</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>{scenario.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="badge">Customer signals</div>
        <h2 className="section-title">Teams trusting Muze to own day zero</h2>
        <div className="testimonial-grid" style={{ marginTop: "2.5rem" }}>
          {testimonials.map((item) => (
            <div key={item.name} className="card testimonial">
              <p style={{ lineHeight: 1.75, fontSize: "1.05rem" }}>&ldquo;{item.quote}&rdquo;</p>
              <div>
                <div style={{ fontWeight: 600 }}>{item.name}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="container" style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
        <div className="card" style={{ display: "grid", gap: "2rem", padding: "3rem" }}>
          <div>
            <div className="badge">Book Muze</div>
            <h2 className="section-title" style={{ marginTop: "1rem" }}>Spin up an autopilot lead desk</h2>
            <p className="section-subtitle" style={{ maxWidth: "520px" }}>
              Drop your details and our onboarding specialists will configure your first Muze playbook within the hour—reply scripts, routing rules, and CRM sync included.
            </p>
          </div>
          <form method="post" action="/api/demo" style={{ maxWidth: "520px" }}>
            <div>
              <label>
                Work email
                <input name="email" type="email" required placeholder="you@company.com" />
              </label>
            </div>
            <div>
              <label>
                Team size
                <input name="teamSize" required placeholder="e.g. 12 SDRs" />
              </label>
            </div>
            <div>
              <label>
                Biggest lead response gap today
                <textarea name="challenge" required placeholder="Describe how leads slip through the cracks" />
              </label>
            </div>
            <div>
              <button className="button-primary" type="submit" style={{ width: "100%" }}>
                Get my launch plan
              </button>
            </div>
            <div className="form-status">
              Muze sends an instant confirmation, then a human specialist follows up in under 10 minutes.
            </div>
          </form>
        </div>
      </section>

      <footer>
        <div className="container footer-columns">
          <div>
            <h4>Muze</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
              Convert every inbound lead with conversational intelligence designed for revenue teams.
            </p>
          </div>
          <div>
            <h4>Product</h4>
            <a className="footer-link" href="#playground">Reply designer</a>
            <a className="footer-link" href="#demo">Book a launch</a>
            <a className="footer-link" href="#">Security</a>
          </div>
          <div>
            <h4>Company</h4>
            <a className="footer-link" href="#">About</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="#">Contact</a>
          </div>
          <div>
            <h4>Stay in touch</h4>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
              Join 3,200+ GTM leaders receiving our conversation benchmarks every Tuesday.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
