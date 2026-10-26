"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { ChevronIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function Testimonials() {
  const items = site.testimonials.items;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const headingId = `${site.testimonials.id}-heading`;
  const count = items.length;

  useEffect(() => {
    if (paused || reduced || count < 2) return;
    const timer = window.setInterval(() => {
      const scroller = scrollerRef.current;
      if (!scroller || scroller.clientWidth === 0) return;
      const current = Math.round(scroller.scrollLeft / scroller.clientWidth);
      const next = (current + 1) % count;
      scroller.scrollTo({
        left: next * scroller.clientWidth,
        behavior: "smooth",
      });
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduced, count]);

  if (count === 0) return null;

  function scrollTo(next: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const wrapped = (next + count) % count;
    scroller.scrollTo({
      left: wrapped * scroller.clientWidth,
      behavior: reduced ? "auto" : "smooth",
    });
  }

  function onScroll() {
    const scroller = scrollerRef.current;
    if (!scroller || scroller.clientWidth === 0) return;
    setIndex(Math.round(scroller.scrollLeft / scroller.clientWidth));
  }

  return (
    <section id={site.testimonials.id} aria-labelledby={headingId} className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id={headingId}>{site.testimonials.title}</SectionHeading>
        <div
          className="border border-white/10 bg-panel/75 px-4 py-8 backdrop-blur-sm sm:px-8 md:px-12 md:py-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false);
            }
          }}
        >
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
            onScroll={onScroll}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={site.ui.testimonialsLabel}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollTo(index + 1);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollTo(index - 1);
              }
            }}
          >
            {items.map((item, itemIndex) => (
              <figure
                key={`${item.name}-${item.role}`}
                className="w-full shrink-0 snap-center px-2 text-center"
                aria-hidden={itemIndex === index ? undefined : true}
              >
                <blockquote>
                  <p className="text-lg leading-relaxed text-white sm:text-xl">
                    <span className="mr-1 font-heading text-gold" aria-hidden="true">
                      “
                    </span>
                    {item.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm tracking-wide text-ink sm:text-base">
                  <span className="text-white">{item.name}</span>, {item.role}
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-gold disabled:opacity-30"
              aria-label={site.ui.previousTestimonial}
              disabled={count < 2}
              onClick={() => scrollTo(index - 1)}
            >
              <ChevronIcon direction="left" />
            </button>
            <div className="flex items-center">
              {items.map((item, itemIndex) => (
                <button
                  key={`${item.name}-dot`}
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center"
                  aria-label={`${site.ui.showTestimonial} ${itemIndex + 1}`}
                  aria-current={itemIndex === index ? "true" : undefined}
                  onClick={() => scrollTo(itemIndex)}
                >
                  <span
                    className={`block h-2.5 w-2.5 rotate-45 ${itemIndex === index ? "bg-gold" : "bg-white/35"}`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-gold disabled:opacity-30"
              aria-label={site.ui.nextTestimonial}
              disabled={count < 2}
              onClick={() => scrollTo(index + 1)}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
