import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Global Operations",
  description: "Global operations capabilities for IAMILKAY® across commerce, media, AI automation and marketplaces."
};

export default function GlobalOperationsPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="United Kingdom 🇬🇧 • Global Operations"
        title="Global digital operations for companies that move fast."
        copy="IAMILKAY® coordinates AI systems, software technologies, marketplace infrastructure, supplier workflows, mobile operations and reporting systems for companies operating across borders."
      />

      <Section eyebrow="Operating Model" title="Operational pillars." copy="A corporate structure for fast digital execution with serious governance.">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Marketplace Commerce", "Amazon, eBay, Etsy, Shopify and dropshipping systems shaped for international growth."],
            ["Supplier Workflows", "Global sourcing, product data, catalogues, fulfilment coordination and reporting routines."],
            ["Executive Visibility", "Operational dashboards, CRM workflows, performance reports and decision cadence."]
          ].map(([title, copy]) => (
            <Reveal key={title}>
              <Card className="min-h-72">
                <h3 className="text-3xl font-black tracking-[-.04em]">{title}</h3>
                <p className="mt-5 leading-8 text-slate-400">{copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Workflow System" title="From demand signal to operational scale.">
        <div className="grid gap-4 lg:grid-cols-5">
          {["Search Demand", "Product Data", "Media Execution", "CRM Follow-up", "Executive Reporting"].map((step, index) => (
            <Reveal key={step}>
              <div className="rounded-[26px] border border-white/10 bg-white/[.035] p-6">
                <p className="text-xs font-black uppercase tracking-[.2em] text-signal">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-xl font-black">{step}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
