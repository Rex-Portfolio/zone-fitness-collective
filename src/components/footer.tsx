import { site, type SocialLink } from "@/content/site";
import { externalProps } from "@/components/external";
import { EmailIcon, InstagramIcon, MapIcon, TelegramIcon } from "@/components/icons";

const icons = {
  instagram: InstagramIcon,
  telegram: TelegramIcon,
  email: EmailIcon,
  maps: MapIcon,
} satisfies Record<SocialLink["id"], typeof InstagramIcon>;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/30 px-5 py-12">
      <ul className="flex items-center justify-center gap-2">
        {site.social.map((item) => {
          const Icon = icons[item.id];
          return (
            <li key={item.id}>
              <a
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-11 w-11 items-center justify-center text-gold transition-colors hover:text-white"
                {...externalProps(item.href)}
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="mt-8 text-center text-sm text-ink">
        © {year} {site.name}. {site.footer.rights}
      </p>
    </footer>
  );
}
