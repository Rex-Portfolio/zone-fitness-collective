"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { site } from "@/content/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 border-b border-gold/30 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href={`#${site.hero.id}`} className="relative block h-10 w-10 shrink-0">
          <Image
            src={site.assets.logo}
            alt={site.name}
            fill
            sizes="40px"
            className="object-contain"
          />
        </a>
        <ul className="hidden items-center gap-2 md:flex">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-4 font-heading text-xs tracking-[0.16em] text-white uppercase transition-colors hover:bg-gold hover:text-black"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-gold md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? site.ui.closeMenu : site.ui.openMenu}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open ? (
        <ul id={menuId} className="space-y-2 border-t border-gold/20 px-5 py-4 md:hidden">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-gold/50 px-4 font-heading text-sm tracking-[0.16em] text-white uppercase"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
