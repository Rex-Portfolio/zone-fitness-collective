export function externalProps(href: string) {
  if (/^https?:\/\//i.test(href)) {
    return { target: "_blank", rel: "noopener noreferrer" } as const;
  }
  return {};
}
