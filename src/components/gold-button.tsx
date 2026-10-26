import type { ReactNode } from "react";
import { externalProps } from "@/components/external";

const solid =
  "inline-flex min-h-11 w-full items-center justify-center bg-gold px-8 text-center font-heading text-sm tracking-[0.18em] text-black uppercase transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto";

const outline =
  "inline-flex min-h-11 w-full items-center justify-center border border-gold px-8 text-center font-heading text-sm tracking-[0.18em] text-gold uppercase transition-colors hover:bg-gold hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:w-auto";

export function GoldButton({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <a href={href} className={variant === "solid" ? solid : outline} {...externalProps(href)}>
      {children}
    </a>
  );
}
