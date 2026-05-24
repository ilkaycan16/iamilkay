import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ContactForm } from "@/components/ContactForm";
import { Card, Section } from "@/components/Section";
import { brand, departmentEmails } from "@/data/site";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact IAMILKAY® for software, AI CRM, performance marketing, marketplace commerce and global operations projects."
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        compact
        eyebrow="Enterprise Contact"
        title="Start a serious digital infrastructure conversation."
        copy="For software, AI CRM, paid media, marketplace commerce, dropshipping systems or global digital operations, contact IAMILKAY® directly."
      />

      <Section eyebrow="Communication" title="Enterprise inquiry desk." copy="Department-based contact structure with secure form handling and professional validation.">
        <div className="grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
          <Reveal>
            <Card className="min-h-full">
              <h3 className="text-3xl font-black tracking-[-.04em]">Company data</h3>
              <div className="mt-8 grid gap-5 text-sm">
                <Info label="Brand" value={brand.name} />
                <Info label="Company No." value={brand.companyNumber} />
                <Info label="Registered Address" value={brand.address} />
                <Info label="WhatsApp / Telegram" value={brand.telegram} />
                <Info label="Social" value={brand.social} />
              </div>
            </Card>
          </Reveal>
          <ContactForm />
        </div>
      </Section>

      <Section eyebrow="Departments" title="Professional email structure.">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {departmentEmails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="rounded-[24px] border border-white/10 bg-white/[.035] p-6 text-lg font-black transition hover:border-signal/40 hover:bg-white/[.06]">
              {email}
            </a>
          ))}
        </div>
      </Section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-white/10 pt-5 first:border-t-0 first:pt-0">
      <span className="text-xs font-black uppercase tracking-[.2em] text-signal">{label}</span>
      <p className="mt-2 leading-7 text-slate-300">{value}</p>
    </div>
  );
}
