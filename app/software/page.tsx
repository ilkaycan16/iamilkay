import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { SoftwareGrid } from "@/components/Visuals";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Software",
  description: "Enterprise software products and commerce platforms by IAMILKAY®."
};

export default function SoftwarePage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Enterprise Software"
        title="Commerce software presented with institutional product discipline."
        copy="IAMILKAY® presents the GetSmarty software ecosystem as enterprise product infrastructure: commerce systems, SmartCar, SmartEstate, CRM integrations, operational panels and sales-oriented digital workflows."
        primary={{ label: "Request Consultation", href: "/contact" }}
        secondary={{ label: "Deployment Model", href: "/global-operations" }}
        visual={
          <div className="overflow-hidden rounded-[34px] border border-white/10 bg-white/[.04] shadow-premium">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <span className="text-xs font-black uppercase tracking-[.2em] text-slate-400">Software Control Plane</span>
              <span className="text-xs font-black text-market">ACTIVE</span>
            </div>
            <div className="relative h-72">
              <Image src="/media/getsmarty-smarty-mockup.png" alt="GetSmarty dashboard" fill className="object-cover" />
            </div>
          </div>
        }
      />

      <Section eyebrow="Product Portfolio" title="Enterprise software systems." copy="GetSmarty commerce, automotive and property platforms are presented as premium SaaS product systems.">
        <SoftwareGrid />
      </Section>

      <Section eyebrow="Enterprise Layer" title="Every product connects to a broader operating system.">
        <div className="grid gap-5 lg:grid-cols-3">
          {["AI CRM Integration", "Automated Deployment", "Conversion Intelligence"].map((title) => (
            <Reveal key={title}>
              <Card>
                <h3 className="text-3xl font-black tracking-[-.04em]">{title}</h3>
                <p className="mt-5 leading-7 text-slate-400">Software, CRM, tracking, marketplace expansion and automation are designed as one measurable infrastructure layer.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
