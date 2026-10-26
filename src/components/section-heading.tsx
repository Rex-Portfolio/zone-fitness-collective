export function SectionHeading({ id, children }: { id: string; children: string }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <h2
        id={id}
        className="font-heading text-3xl tracking-[0.16em] text-white uppercase sm:text-4xl"
      >
        {children}
      </h2>
      <span className="mx-auto mt-5 block h-px w-16 bg-gold" aria-hidden="true" />
    </div>
  );
}
