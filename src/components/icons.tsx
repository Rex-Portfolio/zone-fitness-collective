type IconProps = { className?: string };

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function TelegramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M20.7 4.3 3.6 10.9c-1.2.5-1.1 1.1-.2 1.4l4.4 1.4 10.2-6.4c.5-.3.9-.1.6.2l-8.3 7.5-.3 4.5c.4 0 .6-.2.9-.5l2.2-2.1 4.5 3.3c.8.5 1.4.2 1.6-.8l2.9-13.7c.3-1.2-.4-1.7-1.4-1.4Z" />
    </svg>
  );
}

export function EmailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 7.5 12 13l7-5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MapIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12.04 3C7.31 3 3.5 6.76 3.5 11.42c0 1.48.4 2.92 1.16 4.19L3.4 21l5.54-1.2a8.7 8.7 0 0 0 3.1.56h.01c4.73 0 8.54-3.76 8.54-8.42C20.59 6.76 16.77 3 12.04 3Zm4.95 11.93c-.2.58-1.18 1.1-1.64 1.16-.42.06-.95.08-1.54-.1-.35-.1-.8-.26-1.38-.51-2.43-1.05-4.01-3.5-4.13-3.66-.12-.16-1-1.33-1-2.54s.63-1.8.86-2.05c.22-.24.49-.3.65-.3h.47c.15 0 .35-.06.55.42.2.5.69 1.72.75 1.84.06.13.1.27.02.44-.08.16-.12.27-.24.41-.12.14-.25.32-.36.43-.12.12-.24.24-.1.47.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.16Z" />
    </svg>
  );
}

export function ChevronIcon({
  direction,
  className = "h-5 w-5",
}: IconProps & { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d={direction === "left" ? "M14.5 6.5 9 12l5.5 5.5" : "M9.5 6.5 15 12l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
