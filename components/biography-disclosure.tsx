"use client";
import { useId, useState } from "react";

export function BiographyDisclosure({ label, text, name }: { label: string; text: string; name: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="mt-2">
      <button type="button" aria-expanded={open} aria-controls={id} aria-label={`${label} — ${name}`} onClick={() => setOpen(!open)} className="inline-flex min-h-11 items-center rounded-sm text-sm font-semibold text-[#8C0C3A] underline underline-offset-2">
        {label}
      </button>
      <div id={id} hidden={!open} className="mt-2 max-w-[70ch] text-sm leading-[1.75] text-[#1E1E1E]/80">{text}</div>
    </div>
  );
}
