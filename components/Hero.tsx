import Link from "next/link";
import { metrics } from "@/data/site";
import { Reveal } from "@/components/Motion";

type HeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: React.ReactNode;
  compact?: boolean;
};

export function Hero({ eyebrow, title, copy, primary, secondary, visual, compact = false }: HeroProps) {
  return (
    <section className={`relative overflow-hidden px-5 pb-16 pt-44 md:px-10 xl:px-16 ${compact ? "md:pt-52" : "min-h-screen md:pt-64"}`}>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-14%] top-[14%] h-[44vw] w-[44vw] rounded-full bg-signal/20 blur-[120px]" />
        <div className="absolute bottom-[8%] left-[-12%] h-[36vw] w-[36vw] rounded-full bg-market/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.024)_1px,transparent_1px)] bg-[size:72px_72px] opacity-50" />
      </div>
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
        <Reveal>
          <p className="mb-6 text-xs font-black uppercase tracking-[.22em] text-signal">{eyebrow}</p>
          <h1 className="max-w-6xl text-5xl font-black leading-[.92] tracking-[-.065em] md:text-7xl xl:text-[112px]">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">{copy}</p>
          {(primary || secondary) ? (
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {primary ? <Link className="rounded-full bg-white px-7 py-4 text-center text-sm font-black text-ink shadow-glow transition hover:bg-signal" href={primary.href}>{primary.label}</Link> : null}
              {secondary ? <Link className="rounded-full border border-white/15 bg-white/[.04] px-7 py-4 text-center text-sm font-black text-white transition hover:border-signal/50 hover:bg-signal/10" href={secondary.href}>{secondary.label}</Link> : null}
            </div>
          ) : null}
          {!compact ? (
            <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-white/10 bg-white/[.035] p-5">
                  <strong className="block text-4xl font-black tracking-[-.05em]">{metric.value}</strong>
                  <span className="mt-3 block text-xs leading-5 text-slate-400">{metric.label}</span>
                </div>
              ))}
            </div>
          ) : null}
        </Reveal>
        {visual ? <Reveal delay={0.12}>{visual}</Reveal> : null}
      </div>
    </section>
  );
}
