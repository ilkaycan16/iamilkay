"use client";

import { FormEvent, useState } from "react";
import { departments } from "@/data/site";
import { useLanguage } from "@/components/LanguageProvider";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");
  const { t } = useLanguage();

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

    setState("error");
    setMessage("The message could not be sent. Please check the fields or try again shortly.");
  }

  return (
    <form onSubmit={submit} className="rounded-[30px] border border-white/10 bg-white/[.04] p-6 shadow-premium backdrop-blur-xl md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label={t("Name")} name="name" required />
        <Field label={t("Company")} name="company" />
        <Field label={t("Email")} name="email" type="email" required />
        <Field label={t("Phone")} name="phone" type="tel" />
        <label className="grid gap-2 md:col-span-2">
          <span className="text-sm font-black text-slate-300">{t("Department Selection")}</span>
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
          <span className="text-sm font-black text-slate-300">{t("Message")}</span>
          <textarea name="message" required minLength={10} className="min-h-40 rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-white outline-none transition focus:border-signal" placeholder="Describe your business, channels, current systems and growth target." />
        </label>
      </div>
      <button disabled={state === "sending"} className="mt-6 rounded-full bg-white px-7 py-4 text-sm font-black uppercase tracking-[.12em] text-ink transition hover:bg-signal disabled:opacity-60" type="submit">
        {state === "sending" ? t("Sending...") : t("Send Enterprise Inquiry")}
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
