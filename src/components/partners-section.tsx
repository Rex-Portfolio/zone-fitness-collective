import Image from "next/image";
import { site } from "@/content/site";
import { CopyCodeButton } from "@/components/copy-code-button";
import { externalProps } from "@/components/external";
import { SectionHeading } from "@/components/section-heading";

export function PartnersSection() {
  const headingId = `${site.partners.id}-heading`;
  return (
    <section id={site.partners.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading id={headingId}>{site.partners.title}</SectionHeading>
        <ul className="grid gap-8 sm:grid-cols-2">
          {site.partners.items.map((partner) => (
            <li
              key={partner.name}
              className="flex flex-col items-center border border-white/10 bg-panel/75 px-6 py-8 text-center backdrop-blur-sm"
            >
              <a
                href={partner.href}
                className="relative block h-20 w-full max-w-xs"
                {...externalProps(partner.href)}
              >
                <Image
                  src={partner.image}
                  alt={partner.imageAlt}
                  fill
                  sizes="(min-width: 640px) 320px, 80vw"
                  className="object-contain"
                />
              </a>
              {partner.offer ? (
                <div className="mt-6 flex flex-col items-center gap-4">
                  <p className="font-heading text-sm tracking-[0.16em] text-gold uppercase">
                    {partner.offer.text}
                  </p>
                  <CopyCodeButton code={partner.offer.code} />
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
