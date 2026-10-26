"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

function copyWithCommand(value: string) {
  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.top = "0";
  field.style.left = "0";
  field.style.fontSize = "16px";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.focus();
  field.select();
  field.setSelectionRange(0, field.value.length);

  let copied = false;
  const onCopy = (event: ClipboardEvent) => {
    event.preventDefault();
    event.clipboardData?.setData("text/plain", value);
    copied = true;
  };
  document.addEventListener("copy", onCopy);
  try {
    copied = document.execCommand("copy") || copied;
  } catch {
    copied = false;
  }
  document.removeEventListener("copy", onCopy);
  field.remove();
  return copied;
}

async function writeClipboard(value: string) {
  const clipboardPromise = navigator.clipboard
    ? navigator.clipboard.writeText(value).then(
        () => true,
        () => false,
      )
    : Promise.resolve(false);
  const commandOk = copyWithCommand(value);
  return commandOk || clipboardPromise;
}

export function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  async function onCopy() {
    const ok = await writeClipboard(code);
    if (!ok) return;
    setCopied(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      onPointerDown={onCopy}
      aria-live="polite"
      className="inline-flex min-h-12 min-w-44 items-center justify-center border border-gold px-6 font-heading text-xs tracking-[0.16em] text-gold uppercase transition-colors hover:bg-gold hover:text-black"
    >
      {copied ? site.ui.copied : site.ui.copyCode}
    </button>
  );
}
