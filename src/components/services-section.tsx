import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function ServicesSection() {
  const headingId = `${site.services.id}-heading`;
  return (
    <section id={site.services.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id={headingId}>{site.services.title}</SectionHeading>
        <ul className="grid gap-6 md:grid-cols-3">
          {site.services.items.map((service) => (
            <li
              key={service.title}
              className="flex h-full flex-col border border-white/10 bg-panel/75 px-6 py-8 backdrop-blur-sm"
            >
              <span className="mb-6 inline-block h-2 w-2 rotate-45 bg-gold" aria-hidden="true" />
              <h3 className="font-heading text-lg leading-snug tracking-[0.12em] text-white uppercase">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink">{service.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
