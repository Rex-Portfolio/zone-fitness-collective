import { site } from "@/content/site";
import { GoldButton } from "@/components/gold-button";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  const headingId = `${site.about.id}-heading`;
  return (
    <section id={site.about.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id={headingId}>{site.about.title}</SectionHeading>
        <div className="space-y-6 text-center text-base leading-relaxed text-ink sm:text-lg">
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <GoldButton href={site.about.cta.href}>{site.about.cta.label}</GoldButton>
        </div>
      </div>
    </section>
  );
}
