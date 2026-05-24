import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { Card, Section } from "@/components/Section";
import { mobileProducts } from "@/data/site";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Mobile Applications",
  description: "Mobile application systems by IAMILKAY® for enterprise commerce, CRM and operations."
};

export default function MobileApplicationsPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Enterprise Mobile Applications"
        title="Mobile products for commerce, CRM and operational intelligence."
        copy="IAMILKAY® presents mobile products as secure enterprise interfaces for customers, field teams, commerce operators and CRM-driven communication."
      />

      <Section eyebrow="Mobile Portfolio" title="App Store style product systems." copy="Premium device presentation, operational use cases and enterprise deployment readiness.">
        <div className="grid gap-6 lg:grid-cols-3">
          {mobileProducts.map((product) => (
            <Reveal key={product.title}>
              <Card className="min-h-[640px]">
                <div className="mx-auto mb-8 h-[410px] w-[220px] overflow-hidden rounded-[38px] border border-white/20 bg-ink p-3 shadow-premium">
                  <div className="relative h-full overflow-hidden rounded-[28px]">
                    <Image src={product.image} alt={`${product.title} preview`} fill className="object-cover" sizes="220px" />
                  </div>
                </div>
                <h3 className="text-3xl font-black tracking-[-.04em]">{product.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{product.copy}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Mobile Proof Layer" title="Operational app interfaces." copy="Real mobile application assets are staged in a premium enterprise product presentation.">
        <Reveal className="relative min-h-[560px] overflow-hidden rounded-[34px] border border-white/10">
          <Image src="/media/smartmetrics-iphone.png" alt="Mobile application interface" fill className="object-cover object-top brightness-75" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/90 to-transparent p-8">
            <h3 className="max-w-3xl text-5xl font-black tracking-[-.05em]">Mobile systems for real operational teams.</h3>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">Commerce, CRM and operations mobile layers designed for customer engagement, reporting and field visibility.</p>
          </div>
        </Reveal>
      </Section>
    </main>
  );
}
