import Image from "next/image";
import Link from "next/link";
import { capabilities, softwareProducts } from "@/data/site";
import { Card } from "@/components/Section";
import { Reveal } from "@/components/Motion";

export function CommandCenter() {
  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-[34px] border border-white/15 bg-white/[.035] shadow-premium backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <span className="text-xs font-black uppercase tracking-[.2em] text-slate-400">IAMILKAY® Command Center</span>
        <span className="text-xs font-black text-market">LIVE</span>
      </div>
      <div className="grid gap-4 p-6">
        {[
          ["Commerce Engine", "Amazon • eBay • Etsy • Shopify", "+18.4%"],
          ["Media Layer", "Google Ads • Meta Ads • TikTok", "+31.7%"],
          ["Automation Layer", "AI CRM • WhatsApp • Email Flows", "24/7"]
        ].map(([label, value, stat]) => (
          <div key={label} className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-3xl border border-white/10 bg-ink/50 p-5">
            <div>
              <small className="text-[10px] font-black uppercase tracking-[.18em] text-slate-500">{label}</small>
              <strong className="mt-1 block text-lg">{value}</strong>
            </div>
            <span className="font-black text-market">{stat}</span>
          </div>
        ))}
      </div>
      <div className="mx-6 min-h-56 rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_20%_42%,rgba(103,232,249,.8)_0_2px,transparent_3px),radial-gradient(circle_at_48%_38%,rgba(52,211,153,.7)_0_2px,transparent_3px),radial-gradient(circle_at_72%_55%,rgba(248,210,124,.65)_0_2px,transparent_3px),linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]" />
    </div>
  );
}

export function EvidencePanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
      <Reveal className="relative min-h-[520px] overflow-hidden rounded-[30px] border border-white/10">
        <Image src="/media/smartmetrics-crm.png" alt="CRM dashboard interface" fill className="object-cover brightness-75 saturate-90" sizes="(min-width: 1024px) 55vw, 100vw" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/90 to-transparent p-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[.2em] text-signal">Operational Visual</p>
          <h3 className="max-w-2xl text-4xl font-black tracking-[-.04em]">CRM and customer intelligence infrastructure.</h3>
          <p className="mt-4 max-w-2xl leading-7 text-slate-300">Dashboard-style operational interfaces support a credible enterprise story around leads, customer data and executive reporting.</p>
        </div>
      </Reveal>
      <div className="grid gap-5">
        {[
          { image: "/media/smartmetrics-table.png", title: "Analytics tables", label: "Data Layer" },
          { image: "/media/getsmarty-smarty-mockup.png", title: "GetSmarty system layer", label: "Commerce Software" }
        ].map((item) => (
          <Reveal key={item.title} className="relative min-h-[250px] overflow-hidden rounded-[30px] border border-white/10">
            <Image src={item.image} alt={item.title} fill className="object-cover brightness-75 saturate-90" sizes="(min-width: 1024px) 45vw, 100vw" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/80 to-transparent p-6">
              <p className="text-xs font-black uppercase tracking-[.2em] text-signal">{item.label}</p>
              <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function CapabilityGrid() {
  return (
    <div className="grid overflow-hidden rounded-[30px] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-4">
      {capabilities.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title} className="rounded-none border-0 border-r border-white/10">
            <Icon className="mb-8 text-signal" size={28} />
            <h3 className="text-2xl font-black tracking-[-.03em]">{item.title}</h3>
            <p className="mt-4 leading-7 text-slate-400">{item.copy}</p>
          </Card>
        );
      })}
    </div>
  );
}

export function SoftwareGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {softwareProducts.map((product) => (
        <Reveal key={product.title}>
          <Card className="flex min-h-[640px] flex-col justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[.2em] text-signal">{product.label}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-.04em]">{product.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{product.copy}</p>
              <div className="relative mt-6 h-56 overflow-hidden rounded-3xl border border-white/10">
                <Image src={product.image} alt={`${product.title} preview`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <ul className="mt-6 grid gap-3 text-sm font-semibold text-slate-300">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-market shadow-glow" />{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <a className="rounded-full bg-white px-5 py-3 text-center text-sm font-black text-ink" href={product.demo} target="_blank" rel="noreferrer">View Demo</a>
              <Link className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-black text-white" href="/contact">Get Information</Link>
            </div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
