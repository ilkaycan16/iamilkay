import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { brand, trustCards } from "@/data/site";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "About",
  description: "About IAMILKAY®, a UK registered global digital operations company."
};

export default function AboutPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="United Kingdom Corporate Position"
        title="A serious digital infrastructure company."
        copy="IAMILKAY® operates from the United Kingdom with a global execution mindset across software, commerce, performance intelligence and AI-supported operations."
      />

      <Section
        eyebrow="Company Data"
        title="Registered identity with institutional clarity."
        copy="The corporate presentation is structured for investors, enterprise clients, global partners and financial professionals."
      >
        <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <Card className="min-h-full">
              <h3 className="text-4xl font-black tracking-[-.05em]">Corporate registry</h3>
              <p className="mt-5 leading-8 text-slate-300">IAMILKAY® is presented as a serious corporate digital infrastructure identity with clear company data, defined operating geography and transparent communication channels.</p>
            </Card>
          </Reveal>
          <Reveal className="overflow-hidden rounded-[30px] border border-white/10">
            {[
              ["Brand", brand.name],
              ["Company Number", brand.companyNumber],
              ["Jurisdiction", "England and Wales"],
              ["Registered Address", brand.address],
              ["Core Domains", "AI Systems • Software Technologies • Mobile Applications • Global Commerce"]
            ].map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-white/10 bg-white/[.035] p-6 md:grid-cols-[220px_1fr]">
                <span className="text-xs font-black uppercase tracking-[.2em] text-signal">{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Trust Architecture" title="Built to communicate scale, confidence and execution." copy="Every business area is framed as infrastructure rather than agency service delivery.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trustCards.map((card) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title}>
                <Card className="min-h-72">
                  <Icon className="mb-8 text-signal" size={28} />
                  <h3 className="text-2xl font-black">{card.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{card.copy}</p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
