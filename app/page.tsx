import Link from "next/link";
import { Hero } from "@/components/Hero";
import { CapabilityGrid, CommandCenter, EvidencePanel } from "@/components/Visuals";
import { Card, Section } from "@/components/Section";
import { capabilities, pillars } from "@/data/site";
import { Reveal } from "@/components/Motion";

export default function HomePage() {
  return (
    <main>
      <Hero
        eyebrow="United Kingdom 🇬🇧 • Global Operations"
        title="AI-powered infrastructure for digital commerce and global growth."
        copy="IAMILKAY® designs global digital infrastructure for modern enterprises: AI systems, software technologies, mobile applications, performance intelligence and commerce operations deployed with institutional discipline."
        primary={{ label: "Explore Software", href: "/software" }}
        secondary={{ label: "View Operations", href: "/global-operations" }}
        visual={<CommandCenter />}
      />

      <Section
        eyebrow="Market Intelligence"
        title="AI and search intelligence layer."
        copy="Market-inspired operating indicators for AI search, Google demand, marketplace commerce and automated data systems."
      >
        <CapabilityGrid />
      </Section>

      <Section
        eyebrow="Operational Proof"
        title="Real interfaces, real product evidence."
        copy="Smartmetrics and GetSmarty visuals are staged as an active software ecosystem for IAMILKAY®."
      >
        <EvidencePanel />
      </Section>

      <Section
        eyebrow="Corporate Operating System"
        title="A serious enterprise stack for global growth."
        copy="Software, performance intelligence and commerce operations are organized into a single institutional digital identity."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title}>
                <Card className="min-h-80">
                  <Icon className="mb-8 text-signal" size={30} />
                  <p className="text-xs font-black uppercase tracking-[.2em] text-signal">{pillar.label}</p>
                  <h3 className="mt-4 text-3xl font-black tracking-[-.04em]">{pillar.title}</h3>
                  <p className="mt-5 leading-7 text-slate-400">{pillar.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <section className="px-5 pb-24 md:px-10 xl:px-16">
        <Reveal className="mx-auto max-w-[1500px] rounded-[34px] border border-white/10 bg-white/[.04] p-8 shadow-premium md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-market">Enterprise Desk</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none tracking-[-.05em] md:text-6xl">Start a serious infrastructure conversation.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-400">For software, AI CRM, performance media, marketplace commerce or global digital operations.</p>
            </div>
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center text-sm font-black uppercase tracking-[.12em] text-ink hover:bg-signal">
              Contact IAMILKAY®
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
