import Image from "next/image";
import { site } from "@/content/site";
import { GoldButton } from "@/components/gold-button";

export function Hero() {
  return (
    <header
      id={site.hero.id}
      className="relative flex min-h-svh flex-col items-center justify-center px-6 py-20 text-center"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mb-10 h-28 w-28 sm:h-36 sm:w-36">
        <Image
          src={site.assets.logo}
          alt=""
          fill
          priority
          sizes="144px"
          className="object-contain"
        />
      </div>
      <h1 className="relative z-10 max-w-4xl font-heading text-[1.65rem] leading-tight tracking-[0.14em] text-white uppercase sm:text-4xl md:text-5xl md:tracking-[0.18em]">
        {site.hero.title}
      </h1>
      <p className="relative z-10 mt-6 max-w-xl font-heading text-xs tracking-[0.28em] text-gold uppercase sm:text-sm">
        {site.hero.subtitle}
      </p>
      <div className="relative z-10 mt-12">
        <GoldButton href={site.hero.cta.href}>{site.hero.cta.label}</GoldButton>
      </div>
    </header>
  );
}
