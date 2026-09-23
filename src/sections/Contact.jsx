import { useState } from "react";
import { Mail, Send, Check, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "../components/BrandIcons";
import Reveal from "../components/Reveal";
import StarField from "../components/StarField";
import { profile } from "../data/portfolio";

// Web3Forms delivers the submission straight to profile.email — no
// backend of our own needed. Replace WEB3FORMS_ACCESS_KEY with a real key
// from https://web3forms.com (free, no account required, just enter an
// email and it's emailed to you instantly) before this goes live.
const WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <StarField density={70} />
      <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full grad-celestial opacity-[0.06] blur-[140px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-semibold text-ink-100 sm:text-4xl">
            Let's build something meaningful.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-4 max-w-md text-ink-500">
            I'm open to software engineering opportunities, internships and interesting projects.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-soft">
              <Mail size={16} /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-soft">
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-soft">
              <GithubIcon size={16} /> GitHub
            </a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-ink-300 transition-colors hover:text-accent-soft">
              <LeetcodeIcon size={16} /> LeetCode
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <form onSubmit={handleSubmit} className="glass mx-auto mt-12 max-w-xl rounded-3xl p-7 text-left sm:p-9">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wide text-ink-500">Name</span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-border bg-navy-900/70 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wide text-ink-500">Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-border bg-navy-900/70 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-accent"
                  placeholder="you@email.com"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="text-xs font-medium uppercase tracking-wide text-ink-500">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-navy-900/70 px-4 py-2.5 text-sm text-ink-100 outline-none transition-colors focus:border-accent"
                placeholder="What would you like to talk about?"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full grad-primary px-6 py-3 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
              {status !== "sending" && <Send size={15} />}
            </button>

            {status === "sent" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-cyan">
                <Check size={16} /> Message sent — thanks for reaching out, I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 flex items-center gap-2 text-sm text-ink-300">
                <AlertCircle size={16} /> Couldn't send that — please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
