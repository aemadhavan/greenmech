"use client";

import { useState } from "react";

export default function ContactForm() {
  const [fields, setFields] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const inputClass = "w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm transition-colors";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fields),
    });
    if (res.ok) {
      setStatus("success");
      setFields({ name: "", company: "", email: "", phone: "", message: "" });
    } else {
      const data = await res.json().catch(() => ({}));
      setErrorMsg(data.error || "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-3">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-[#2A4262] font-semibold text-lg">Message sent!</p>
        <p className="text-[#7698B0] text-sm">We&apos;ll get back to you within 24 business hours.</p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm text-[#1B72B8] underline underline-offset-2">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#2A4262] mb-1.5">
            Full Name <span className="text-[#F47920]">*</span>
          </label>
          <input id="name" type="text" required autoComplete="name" placeholder="Your full name…"
            className={inputClass} value={fields.name}
            onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#2A4262] mb-1.5">Company</label>
          <input id="company" type="text" autoComplete="organization" placeholder="Your company…"
            className={inputClass} value={fields.company}
            onChange={(e) => setFields((f) => ({ ...f, company: e.target.value }))} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#2A4262] mb-1.5">
            Email <span className="text-[#F47920]">*</span>
          </label>
          <input id="email" type="email" required autoComplete="email" spellCheck={false} placeholder="your@email.com…"
            className={inputClass} value={fields.email}
            onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#2A4262] mb-1.5">Phone</label>
          <input id="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000…"
            className={inputClass} value={fields.phone}
            onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-[#2A4262] mb-1.5">
          Message <span className="text-[#F47920]">*</span>
        </label>
        <textarea id="message" rows={6} required placeholder="Describe your machining requirements, material, quantity, tolerances…"
          className={`${inputClass} resize-none`} value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))} />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === "sending"}
        className="w-full py-4 bg-[#F47920] text-[#071523] font-bold rounded-lg hover:bg-[#D36410] transition-all duration-200 hover:shadow-xl hover:shadow-[#F47920]/20 text-base tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: "var(--font-rajdhani)", textWrap: "balance" }}>
        {status === "sending" ? "SENDING…" : "SEND MESSAGE"}
      </button>
      <p className="text-center text-xs text-[#7698B0]">We respond within 24 business hours.</p>
    </form>
  );
}
