import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Marketing Intelligence",
  description: "Marketing intelligence systems by IAMILKAY® across Google, Meta, TikTok, analytics and CRM."
};

const channels = ["Google Ads", "Meta Ads", "TikTok Ads", "GA4", "GTM", "Server Signals"];

export default function MarketingPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Performance Infrastructure"
        title="Marketing intelligence, not agency noise."
        copy="IAMILKAY® presents marketing as an enterprise intelligence system built around signals, governance and growth architecture."
      />

      <Section eyebrow="Growth Architecture" title="Advertising systems as infrastructure." copy="A disciplined framework for advertising, analytics, creative testing and revenue intelligence.">
        <div className="grid gap-4 lg:grid-cols-4">
          {["Signal Capture", "Channel Execution", "Conversion Layer", "Governance"].map((item, index) => (
            <Reveal key={item}>
              <Card className="min-h-56">
                <p className="text-xs font-black uppercase tracking-[.2em] text-signal">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black">{item}</h3>
                <p className="mt-4 leading-7 text-slate-400">Pixels, CRM, marketplace data, channel execution and executive review cycles.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Real Visuals" title="Search, media and CRM intelligence." copy="Marketing becomes infrastructure: tracking, creative testing, automation and executive oversight.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["/media/smartmetrics-table.png", "Paid Media Systems"],
            ["/media/smartmetrics-radar.png", "Search Intelligence"],
            ["/media/smartmetrics-crm.png", "CRM Operations"]
          ].map(([image, title]) => (
            <Reveal key={title}>
              <Card className="overflow-hidden p-0">
                <div className="relative h-64">
                  <Image src={image} alt={title} fill className="object-cover brightness-75" />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">Google demand, AI discovery, conversion events and marketplace signals are translated into operating decisions.</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Channel Layer" title="Global media ecosystem." copy="Enterprise paid media systems connected to search, social, analytics and CRM workflows.">
        <div className="flex flex-wrap gap-3">
          {channels.map((channel) => (
            <span key={channel} className="rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-black text-slate-200">{channel}</span>
          ))}
        </div>
      </Section>
    </main>
  );
}
