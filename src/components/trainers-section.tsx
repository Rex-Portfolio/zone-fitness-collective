import Image from "next/image";
import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function TrainersSection() {
  const headingId = `${site.trainers.id}-heading`;
  return (
    <section id={site.trainers.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id={headingId}>{site.trainers.title}</SectionHeading>
        <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
          {site.trainers.items.map((trainer) => (
            <li key={trainer.name} className="text-center">
              <div className="relative mx-auto flex h-80 w-full max-w-xs items-end justify-center sm:h-96">
                <Image
                  src={trainer.image}
                  alt={trainer.imageAlt}
                  fill
                  sizes="(min-width: 768px) 30vw, 80vw"
                  className="object-contain object-bottom"
                />
              </div>
              <h3 className="mt-6 font-heading text-xl tracking-[0.14em] text-white uppercase">
                {trainer.name}
              </h3>
              <ul className="mx-auto mt-5 max-w-xs space-y-3 text-left">
                {trainer.credentials.map((credential) => (
                  <li key={credential} className="flex gap-3 text-sm leading-relaxed text-ink sm:text-base">
                    <span
                      className="mt-2 inline-block h-2 w-2 shrink-0 rotate-45 bg-gold"
                      aria-hidden="true"
                    />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
