import Image from "next/image";
import Link from "next/link";
import { capabilities, softwareProducts } from "@/data/site";
import { Card } from "@/components/Section";
import { Reveal } from "@/components/Motion";

export function CommandCenter() {
  const lanes = [
    { label: "Marketplace Revenue Systems", value: "Amazon / eBay / Etsy / Shopify", stat: "ACTIVE" },
    { label: "Performance Intelligence", value: "Google Ads / Meta / TikTok / Search", stat: "LIVE" },
    { label: "Customer Operations", value: "AI CRM / Email Routing / WhatsApp Desk", stat: "24/7" }
  ];

  const signals = [
    ["Search demand", "84.2", "+12.6%"],
    ["Commerce feeds", "31", "synced"],
    ["CRM events", "9.8k", "tracked"]
  ];

  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-[28px] border border-white/15 bg-[#06101d] shadow-premium backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgba(103,232,249,.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,.08),rgba(255,255,255,.015))]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative flex items-center justify-between border-b border-white/10 bg-black/20 px-5 py-4 md:px-6">
        <div>
          <span className="text-[10px] font-black uppercase tracking-[.22em] text-slate-500">IAMILKAY® Operations Console</span>
          <p className="mt-1 text-sm font-black text-white">United Kingdom infrastructure desk</p>
        </div>
        <span className="rounded-full border border-market/30 bg-market/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.18em] text-market">Online</span>
      </div>

      <div className="relative grid gap-5 p-5 md:p-6 xl:grid-cols-[.92fr_1.08fr]">
        <div className="grid gap-4">
          {lanes.map((lane) => (
            <div key={lane.label} className="rounded-[22px] border border-white/10 bg-black/25 p-5 shadow-[0_20px_70px_rgba(0,0,0,.22)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <small className="text-[10px] font-black uppercase tracking-[.18em] text-slate-500">{lane.label}</small>
                  <strong className="mt-2 block text-lg leading-snug text-white">{lane.value}</strong>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[.14em] text-market">{lane.stat}</span>
              </div>
              <div className="mt-5 grid grid-cols-12 gap-1">
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-2 rounded-full bg-signal/20"
                    style={{ opacity: 0.25 + ((index % 5) * 0.14) }}
                  />
                ))}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-3">
            {signals.map(([label, value, delta]) => (
              <div key={label} className="rounded-[18px] border border-white/10 bg-white/[.045] p-4">
                <p className="text-[10px] font-black uppercase tracking-[.14em] text-slate-500">{label}</p>
                <strong className="mt-2 block text-2xl tracking-[-.04em] text-white">{value}</strong>
                <span className="mt-1 block text-xs font-black text-market">{delta}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0a1424]">
          <Image
            src="/media/smartmetrics-crm.png"
            alt="Enterprise CRM operations dashboard"
            fill
            className="object-cover opacity-50 mix-blend-screen"
            sizes="(min-width: 1280px) 45vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/30 via-[#07111f]/45 to-[#07111f]" />

          <div className="relative grid h-full content-between gap-5 p-5 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.22em] text-signal">Executive view</p>
                <h3 className="mt-2 max-w-sm text-3xl font-black leading-none tracking-[-.05em] text-white">Executive operating intelligence.</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/10 text-xl">🇬🇧</span>
            </div>

            <div className="grid gap-3">
              {[
                ["Inquiry pipeline", "Software / Marketing / Commerce", "91%"],
                ["Marketplace control", "SKU, feed, ads and conversion layer", "76%"],
                ["Automation readiness", "CRM routing and follow-up systems", "88%"]
              ].map(([label, value, progress]) => (
                <div key={label} className="rounded-[18px] border border-white/10 bg-black/35 p-4 backdrop-blur">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black text-white">{label}</p>
                      <p className="mt-1 text-xs font-semibold text-slate-400">{value}</p>
                    </div>
                    <span className="text-sm font-black text-market">{progress}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full rounded-full bg-gradient-to-r from-signal to-market" style={{ width: progress }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[1fr_auto] items-end gap-4 rounded-[20px] border border-white/10 bg-white/[.055] p-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.2em] text-slate-500">Connected products</p>
                <p className="mt-2 text-sm font-bold text-slate-200">Commerce software, CRM intelligence and enterprise contact infrastructure operating as one control layer.</p>
              </div>
              <div className="hidden h-20 w-32 overflow-hidden rounded-2xl border border-white/10 md:block">
                <Image src="/media/getsmarty-smarty-mockup.png" alt="GetSmarty commerce system preview" width={180} height={112} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-5 mb-5 grid gap-3 border-t border-white/10 pt-4 text-[11px] font-black uppercase tracking-[.16em] text-slate-500 md:mx-6 md:grid-cols-4">
        {["London-based", "Secure mail routing", "Production deployment", "Marketplace operations"].map((item) => (
          <span key={item} className="rounded-full border border-white/10 bg-white/[.035] px-4 py-3 text-center">{item}</span>
        ))}
      </div>
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
