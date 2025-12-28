"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";

const CHANNEL_TEMPLATES = {
  sms: {
    label: "SMS",
    prefix: "Hi",
    maxLength: 320
  },
  email: {
    label: "Email",
    prefix: "Hello",
    maxLength: 1800
  },
  whatsapp: {
    label: "WhatsApp",
    prefix: "Hey",
    maxLength: 600
  }
};

const TONES = [
  { id: "friendly", label: "Friendly" },
  { id: "professional", label: "Professional" },
  { id: "energetic", label: "Energetic" }
];

function buildMessage({ leadName, channel, tone, offer, callToAction, responseTime }) {
  const template = CHANNEL_TEMPLATES[channel];
  const greeting = `${template.prefix}${leadName ? ` ${leadName}` : " there"}!`;

  const toneLine = {
    friendly: "We'd love to learn more about what you're aiming to achieve.",
    professional: "Our experts reviewed your request and outlined a quick next step.",
    energetic: "This is exactly the kind of project that gets our team fired up!"
  }[tone];

  const offerLine = offer
    ? `Here is what we can do right away: ${offer}.`
    : "Our concierge will map the best blueprint for you.";

  const ctaLine = callToAction
    ? callToAction
    : "Can we lock in a 15-minute fit call later today?";

  const responseLine = `Expect a dedicated specialist in your inbox within ${responseTime || "3"} minutes.`;

  return [greeting, toneLine, offerLine, ctaLine, responseLine].join(" ");
}

export default function AutoReplyPlayground() {
  const [form, setForm] = useState({
    leadName: "Jordan",
    channel: "sms",
    tone: "friendly",
    offer: "Launch your onboarding flow with pre-built industry cadences",
    callToAction: "Can we hop on a quick intro call in the next hour?",
    responseTime: "2"
  });

  const message = useMemo(() => buildMessage(form), [form]);
  const maxLength = CHANNEL_TEMPLATES[form.channel].maxLength;
  const percentage = Math.min(100, Math.round((message.length / maxLength) * 100));

  const update = (key) => (event) => {
    const value = event.target.value;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className="container" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="badge">Realtime Reply Designer</div>
      <h2 className="section-title">Launch a perfect reply in seconds</h2>
      <p className="section-subtitle" style={{ maxWidth: "640px" }}>
        Personalize Muze&apos;s autopilot replies for each inbound lead. Switch tone, channel, and outcome in-line to
        match the exact playbook your revenue team already runs.
      </p>
      <div className="grid" style={{ marginTop: "2.5rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div className="grid" style={{ gap: "1rem" }}>
            <label>
              Lead name
              <input value={form.leadName} onChange={update("leadName")} placeholder="Jamie" />
            </label>
            <label>
              Channel
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {Object.entries(CHANNEL_TEMPLATES).map(([id, option]) => (
                  <button
                    key={id}
                    type="button"
                    className={clsx("button-ghost", { active: form.channel === id })}
                    style={{
                      flex: 1,
                      borderColor: form.channel === id ? "rgba(99,102,241,0.9)" : undefined,
                      background: form.channel === id ? "rgba(99,102,241,0.18)" : undefined
                    }}
                    onClick={() => setForm((prev) => ({ ...prev, channel: id }))}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </label>
            <label>
              Tone profile
              <div style={{ display: "flex", gap: "0.75rem" }}>
                {TONES.map((tone) => (
                  <button
                    key={tone.id}
                    type="button"
                    className={clsx("button-ghost", { active: form.tone === tone.id })}
                    style={{
                      flex: 1,
                      borderColor: form.tone === tone.id ? "rgba(99,102,241,0.9)" : undefined,
                      background: form.tone === tone.id ? "rgba(99,102,241,0.18)" : undefined
                    }}
                    onClick={() => setForm((prev) => ({ ...prev, tone: tone.id }))}
                  >
                    {tone.label}
                  </button>
                ))}
              </div>
            </label>
            <label>
              Offer snapshot
              <textarea
                value={form.offer}
                onChange={update("offer")}
                placeholder="What do you want Muze to pitch first?"
              />
            </label>
            <label>
              Call to action
              <textarea
                value={form.callToAction}
                onChange={update("callToAction")}
                placeholder="What should the lead do next?"
              />
            </label>
            <label>
              SLA (minutes)
              <input
                type="number"
                min="1"
                max="15"
                value={form.responseTime}
                onChange={update("responseTime")}
              />
            </label>
          </div>
          <div className="form-status">
            {message.length} / {maxLength} characters · {percentage}% of {CHANNEL_TEMPLATES[form.channel].label} allowance
          </div>
        </div>
        <div className="card" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span className="badge" style={{ background: "rgba(45, 212, 191, 0.18)", borderColor: "rgba(45, 212, 191, 0.35)", color: "#34d399" }}>
              Live Preview
            </span>
            <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Channel: {CHANNEL_TEMPLATES[form.channel].label}</span>
          </div>
          <div
            style={{
              background: "linear-gradient(145deg, rgba(9, 9, 20, 0.9), rgba(20, 20, 32, 0.65))",
              borderRadius: "1rem",
              padding: "1.5rem",
              lineHeight: "1.6",
              fontSize: "1.05rem",
              color: "rgba(236, 240, 255, 0.95)"
            }}
          >
            {message}
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button type="button" className="button-primary" style={{ flex: 1 }}>
              Sync to Playbook
            </button>
            <button type="button" className="button-ghost" style={{ flex: 1 }}>
              Export Template
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
