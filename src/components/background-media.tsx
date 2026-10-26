"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

type NetworkInformation = {
  saveData?: boolean;
  effectiveType?: string;
};

function connectionIsSlow() {
  const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
  if (!connection) return false;
  return (
    connection.saveData === true ||
    connection.effectiveType === "slow-2g" ||
    connection.effectiveType === "2g" ||
    connection.effectiveType === "3g"
  );
}

function canPlayVideo() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  return !reduced && !mobile && !connectionIsSlow();
}

export function BackgroundMedia() {
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPlayVideo(canPlayVideo());
    update();
    mobile.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Image
        src={site.assets.heroPoster}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {playVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={site.assets.heroPoster}
          preload="metadata"
        >
          <source src={site.assets.heroVideo} type="video/mp4" />
        </video>
      ) : null}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
