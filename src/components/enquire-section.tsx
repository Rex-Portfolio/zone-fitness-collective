import { site } from "@/content/site";
import { GoldButton } from "@/components/gold-button";
import { SectionHeading } from "@/components/section-heading";

export function EnquireSection() {
  const headingId = `${site.enquire.id}-heading`;
  return (
    <section id={site.enquire.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading id={headingId}>{site.enquire.title}</SectionHeading>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GoldButton href={site.enquire.primary.href}>{site.enquire.primary.label}</GoldButton>
          <GoldButton href={site.enquire.secondary.href} variant="outline">
            {site.enquire.secondary.label}
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
