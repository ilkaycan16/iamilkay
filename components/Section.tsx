import type { ReactNode } from "react";
import { Reveal } from "@/components/Motion";

type SectionProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, copy, children, className = "" }: SectionProps) {
  return (
    <section className={`px-5 py-20 md:px-10 md:py-28 xl:px-16 ${className}`}>
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[.95fr_.7fr] lg:items-end">
          <div>
            {eyebrow ? <p className="mb-5 text-xs font-black uppercase tracking-[.22em] text-signal">{eyebrow}</p> : null}
            <h2 className="max-w-5xl text-4xl font-black leading-none tracking-[-.05em] md:text-6xl xl:text-7xl">{title}</h2>
          </div>
          {copy ? <p className="max-w-2xl text-base leading-8 text-slate-400 md:text-lg">{copy}</p> : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-[28px] border border-white/10 bg-white/[.035] p-7 shadow-[0_24px_80px_rgba(0,0,0,.24)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-signal/40 hover:bg-white/[.055] ${className}`}>
      {children}
    </div>
  );
}
