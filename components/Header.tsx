"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems, tickerItems } from "@/data/site";
import { LanguageSelect, useLanguage } from "@/components/LanguageProvider";

export function MarketTicker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="fixed left-0 top-0 z-50 h-10 w-full overflow-hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl">
      <div className="animate-[ticker_48s_linear_infinite] flex h-full w-max items-center gap-10">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="whitespace-nowrap text-[10px] font-black uppercase tracking-[.18em] text-slate-400">
            <span className="text-white">{item.split(" / ")[0]}</span>
            <span className="mx-2 text-market">/</span>
            {item.split(" / ")[1]}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <MarketTicker />
      <header className="fixed left-0 top-10 z-40 w-full border-b border-white/0 px-3 py-3 transition-all md:px-8 md:py-4 xl:px-16">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 rounded-[22px] border border-white/10 bg-ink/70 px-3 py-3 shadow-premium backdrop-blur-2xl md:gap-5 md:rounded-[28px] md:px-4">
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none" aria-label="IAMILKAY home">
            <span className="grid h-10 w-10 flex-none place-items-center rounded-2xl border border-white/25 bg-gradient-to-br from-white/20 via-slate-900 to-black text-[15px] font-black shadow-glow md:h-12 md:w-12 md:text-[17px]">
              I
            </span>
            <span className="grid min-w-0 gap-1 text-[13px] font-black uppercase leading-none tracking-[.1em] md:text-sm md:tracking-[.16em]">
              {brand.name}
              <small className="hidden truncate text-[9px] font-black uppercase tracking-[.18em] text-slate-400 sm:block md:tracking-[.25em]">{brand.region}</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.035] p-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-xs font-extrabold transition ${
                    active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {t(item.label)}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-none items-center gap-2 md:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3 py-2 text-xs font-black text-slate-300 md:flex">
              <span>🇬🇧</span>
              <LanguageSelect />
            </div>
            <Link href="/contact" className="hidden rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-ink shadow-glow transition hover:bg-signal md:inline-flex">
              {t("Enterprise Desk")}
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="grid h-11 w-11 flex-none place-items-center rounded-2xl border border-white/10 bg-white/[.04] text-white lg:hidden md:h-12 md:w-12"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-x-3 top-[112px] z-50 grid max-h-[calc(100vh-132px)] gap-2 overflow-y-auto rounded-[24px] border border-white/10 bg-ink/95 p-3 shadow-premium backdrop-blur-2xl sm:inset-x-4 sm:top-[128px] sm:max-h-[calc(100vh-148px)] sm:rounded-[28px] sm:p-4 lg:hidden">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[.04] px-4 py-3">
            <span className="text-xs font-black uppercase tracking-[.18em] text-slate-400">Language</span>
            <LanguageSelect compact />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-extrabold text-slate-200 transition hover:bg-white/10 hover:text-white sm:py-4"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      ) : null}
    </>
  );
}
