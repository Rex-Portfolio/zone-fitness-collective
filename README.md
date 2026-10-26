# Zone Fitness Collective

One-page marketing site for Zone Fitness Collective, a premium personal training brand in Singapore. The site is a static Next.js app (App Router, TypeScript, Tailwind CSS) with no backend.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production check:

```bash
npm run build
npm start
```

## Edit copy and links

Every public sentence and URL is in [`src/content/site.ts`](src/content/site.ts). Change wording, navigation labels, testimonials, and links there. You do not need to edit components for copy updates.

Add testimonials by appending objects to `testimonials.items`:

```ts
{
  quote: "Your quote.",
  name: "Name",
  role: "Role",
}
```

The carousel rotates when there are two or more quotes. It pauses on hover and keyboard focus, and it does not autoplay when the visitor prefers reduced motion.

## Placeholders to replace

Search the repo for these tokens and replace each full value with the real URL.

| Token | File | Replace with |
| --- | --- | --- |
| `TALLY_URL` | `src/content/site.ts` (`links.tally`) | Full Tally form URL, for example `https://tally.so/r/your-id` |
| `MAPS_URL` | `src/content/site.ts` (`links.maps`) | Google Maps URL for the studio |
| `WHATSAPP_URL` | `src/content/site.ts` (`links.whatsapp`) | WhatsApp link, for example `https://wa.me/65XXXXXXXX` |
| `INSTAGRAM_URL` | `src/content/site.ts` (`links.instagram`) | Instagram profile URL |
| `TELEGRAM_URL` | `src/content/site.ts` (`links.telegram`) | Telegram URL |
| `EMAIL_URL` | `src/content/site.ts` (`links.email`) | Address used after `mailto:` |
| `LFTOFF_URL` | `src/content/site.ts` (`links.lftoff`) | LFTOFF Athletics website |
| `LTS_URL` | `src/content/site.ts` (`links.lts`) | LTS website |

The LFTOFF offer text and the code that the button copies are `partners.items[0].offer.text` and `partners.items[0].offer.code` in the same file. The button shows "Copied!" after a successful copy.

Drop replacement media over these files. Keep the same file names.

| File | Used for | Notes |
| --- | --- | --- |
| `public/assets/logo.png` | Hero and navigation mark | Transparent PNG. A square gold Z fits the current frame. |
| `public/assets/hero-video.mp4` | Full-page background on desktop | H.264 MP4. Muted, and it should loop cleanly. |
| `public/assets/hero-poster.jpg` | Still image behind the page | Shown on phones, on slow connections, and when the visitor prefers reduced motion. The video file is not downloaded in those cases. |
| `public/assets/trainer-andy.png` | Andy Toh | Transparent cutout. |
| `public/assets/trainer-christophe.png` | Christophe Ang | Transparent cutout. |
| `public/assets/trainer-rexmond.png` | Rexmond Lim | Transparent cutout. |
| `public/assets/partner-lftoff.png` | LFTOFF Athletics | Logo on a transparent background. |
| `public/assets/partner-lts.png` | LTS | Logo on a transparent background. |
| `src/app/icon.png` | Favicon | Gold mark on black. Next.js builds the favicon from this file. |
| `src/app/apple-icon.png` | Apple touch icon | Same mark, used when someone saves the site to a home screen. |
| `public/og.png` | Open Graph and Twitter share image | Logo on black, 1200 by 630 pixels. |

Trainer photos should share one canvas size, with the person standing on the bottom edge of the transparent PNG. The layout gives every photo the same height and aligns them to that bottom edge. The included stand-ins are 800 by 1100.

The files in `public/assets`, `public/og.png`, `src/app/icon.png`, and `src/app/apple-icon.png` are generated stand-ins so the page runs before the real artwork arrives. They are marked as placeholders in the image itself.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, add a new project and import the GitHub repository.
3. Use the Next.js preset. Build command: `npm run build`. Install command: `npm install`. No environment variables are required.
4. Deploy.
5. Open the project, then Settings, then Domains.
6. Add `zonefitnesscollective.com`.
7. Add `www.zonefitnesscollective.com`.
8. At the domain registrar, create the DNS records Vercel shows. The apex domain is usually an A record. The `www` host is usually a CNAME.
9. `vercel.json` permanently redirects `www.zonefitnesscollective.com` to `https://zonefitnesscollective.com`. After the domain is verified, visitors who type the `www` address land on the root domain.
10. In the Vercel project, open Analytics and enable Web Analytics. The app already renders `@vercel/analytics`, so page views are collected on the production deployment. Local development does not send analytics.

## Behaviour worth knowing

- The background video plays only on viewports at least 768 pixels wide, and only when the visitor has not asked for reduced motion and the connection is not flagged as slow or data-saver. Everyone else sees `hero-poster.jpg`.
- The navigation bar sits under the full-screen hero and sticks to the top once the visitor scrolls. On small screens the links collapse into a menu button.
- The copyright year is the year of the build.
