import { site } from "@/content/site";
import { externalProps } from "@/components/external";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppButton() {
  return (
    <a
      href={site.links.whatsapp}
      aria-label={site.ui.whatsappLabel}
      className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-transform hover:scale-105"
      {...externalProps(site.links.whatsapp)}
    >
      <WhatsAppIcon />
    </a>
  );
}
