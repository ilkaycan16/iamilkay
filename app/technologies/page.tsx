import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { technologyDomains } from "@/data/site";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Technologies",
  description: "AI systems, automation, analytics, cloud workflows and technology infrastructure by IAMILKAY®."
};

export default function TechnologiesPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="AI Infrastructure Aesthetics"
        title="Technology systems for intelligent digital operations."
        copy="IAMILKAY® connects AI CRM, workflow automation, analytics, cloud software, commerce systems and mobile applications into one enterprise technology layer."
        visual={
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[.04] shadow-premium">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <span className="text-xs font-black uppercase tracking-[.2em] text-slate-400">AI Systems Graph</span>
              <span className="text-xs font-black text-market">LEARNING</span>
            </div>
            <div className="relative h-72">
              <Image src="/media/smartmetrics-code.png" alt="Code and software technology interface" fill className="object-cover" />
            </div>
          </div>
        }
      />

      <Section eyebrow="Domains" title="Technology domains." copy="A serious platform architecture for intelligence, automation and measurable execution.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {technologyDomains.map((domain) => {
            const Icon = domain.icon;
            return (
              <Reveal key={domain.title}>
                <Card className="min-h-72">
                  <Icon className="mb-8 text-signal" size={28} />
                  <h3 className="text-2xl font-black">{domain.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{domain.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Architecture Visuals" title="CRM, signal and software layers." copy="Real CRM, radar and code visuals create a believable infrastructure identity.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["/media/smartmetrics-crm.png", "Customer system layer"],
            ["/media/smartmetrics-radar.png", "Signal intelligence"],
            ["/media/smartmetrics-code.png", "Engineering execution"]
          ].map(([image, title]) => (
            <Reveal key={title}>
              <Card className="overflow-hidden p-0">
                <div className="relative h-64">
                  <Image src={image} alt={title} fill className="object-cover brightness-75" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">AI, automation, analytics and commerce systems connected to executive visibility.</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
