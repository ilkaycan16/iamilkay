import Link from "next/link";
import { Send, MessageCircle } from "lucide-react";
import { brand, navItems } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden gap-3 md:grid">
        <a className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-ink/80 text-white shadow-premium backdrop-blur-xl" href={`https://wa.me/${brand.whatsapp.replace("+", "")}`} aria-label="WhatsApp">
          <MessageCircle size={19} />
        </a>
        <a className="grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-ink/80 text-white shadow-premium backdrop-blur-xl" href={`tg://resolve?phone=${brand.telegram.replace("+", "")}`} aria-label="Telegram">
          <Send size={19} />
        </a>
      </div>
      <nav className="fixed inset-x-3 bottom-3 z-50 flex rounded-[24px] border border-white/15 bg-ink/85 p-2 shadow-premium backdrop-blur-2xl md:hidden">
        <Link className="grid min-h-12 flex-1 place-items-center rounded-2xl text-[11px] font-black text-slate-300" href="/">Home</Link>
        <Link className="grid min-h-12 flex-1 place-items-center rounded-2xl text-[11px] font-black text-slate-300" href="/software">Software</Link>
        <a className="grid min-h-12 flex-1 place-items-center rounded-2xl bg-white/10 text-[11px] font-black text-white" href={`https://wa.me/${brand.whatsapp.replace("+", "")}`}>WA</a>
        <a className="grid min-h-12 flex-1 place-items-center rounded-2xl bg-white/10 text-[11px] font-black text-white" href={`tg://resolve?phone=${brand.telegram.replace("+", "")}`}>TG</a>
        <Link className="grid min-h-12 flex-1 place-items-center rounded-2xl text-[11px] font-black text-slate-300" href="/contact">Contact</Link>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/70 px-5 pb-28 pt-16 md:px-10 xl:px-16">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <strong className="text-xl font-black tracking-[.14em]">{brand.name}</strong>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
            Company No. {brand.companyNumber} • {brand.address} • {brand.region}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-400">
          {navItems.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
