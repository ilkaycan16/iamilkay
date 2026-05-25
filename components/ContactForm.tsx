"use client";

import { FormEvent, useState } from "react";
import { departments } from "@/data/site";

type FormState = "idle" | "sending" | "success" | "error";

const fallbackEmail = "connect@ilkaybatur.com";

function buildMailto(payload: Record<string, FormDataEntryValue>) {
  const subject = `IAMILKAY inquiry: ${String(payload.department || "Enterprise")}`;
  const body = [
    `Name: ${String(payload.name || "")}`,
    `Company: ${String(payload.company || "-")}`,
    `Email: ${String(payload.email || "")}`,
    `Phone: ${String(payload.phone || "-")}`,
    `Department: ${String(payload.department || "-")}`,
    "",
    String(payload.message || "")
  ].join("\n");

  return `mailto:${fallbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setState("success");
      setMessage("Your inquiry has been received. The enterprise desk will review it shortly.");
      event.currentTarget.reset();
      return;
    }

    if (response.status === 503) {
      window.location.href = buildMailto(payload);
      setState("success");
      setMessage("Your email app has opened with the inquiry prepared for connect@ilkaybatur.com.");
      event.currentTarget.reset();
      return;
    }

    setState("error");
    setMessage("The message could not be sent. Please check the fields or email connect@ilkaybatur.com directly.");
  }

  return (
    <form onSubmit={submit} className="rounded-[30px] border border-white/10 bg-white/[.04] p-6 shadow-premium backdrop-blur-xl md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-black text-slate-300">Department Selection</span>
          <select name="department" required className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition focus:border-signal">
            {departments.map((department) => (
              <option key={department}>{department}</option>
            ))}
          </select>
        </label>
        <label className="hidden">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-black text-slate-300">Message</span>
          <textarea name="message" required minLength={10} className="min-h-40 rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition focus:border-signal" placeholder="Describe your business, channels, current systems and growth target." />
        </label>
      </div>
      <button disabled={state === "sending"} className="mt-6 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.12em] text-ink transition hover:bg-signal disabled:opacity-60" type="submit">
        {state === "sending" ? "Sending..." : "Send Enterprise Inquiry"}
      </button>
      {message ? (
        <p className={`mt-4 rounded-2xl border px-4 py-3 text-sm font-bold ${state === "success" ? "border-market/40 text-green-200" : "border-red-300/40 text-red-200"}`}>
          {message}
        </p>
      ) : null}
    </form>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-black text-slate-300">{label}</span>
      <input name={name} type={type} required={required} className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition focus:border-signal" />
    </label>
  );
}
