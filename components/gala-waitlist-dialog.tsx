"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";

const WAITLIST_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSdA7IngPvWkjKfkwx89RaB0Klt9iJKugT9CQX6yUIbCrk6hfA/viewform";

export function GalaWaitlistDialog({ isFr, title }: { isFr: boolean; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  return <>
    <button ref={trigger} type="button" aria-haspopup="dialog" aria-expanded={open}
      onClick={() => { setLoaded(true); setOpen(true); }}
      className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#8E0C3A] px-6 py-3 text-center font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8E0C3A]">
      {isFr ? "Rejoindre la liste d’attente" : "Join the waitlist"}
    </button>
    <dialog ref={dialog} aria-labelledby={titleId}
      className="fixed inset-0 m-auto h-[90dvh] max-h-[950px] w-[calc(100%-1rem)] max-w-[760px] overflow-hidden rounded-2xl border-0 bg-white p-0 text-[#1E1E1E] shadow-2xl backdrop:bg-black/60"
      onClose={() => { setOpen(false); trigger.current?.focus(); }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const r = event.currentTarget.getBoundingClientRect();
        if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.current?.close();
      }}>
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex shrink-0 items-center justify-between gap-3 bg-[#8E0C3A] px-4 py-3 text-white sm:px-6">
          <h2 id={titleId} className="font-heading text-base font-bold sm:text-xl">{title}</h2>
          <button type="button" autoFocus onClick={() => dialog.current?.close()}
            aria-label={isFr ? "Fermer le formulaire" : "Close form"}
            className="flex size-11 shrink-0 items-center justify-center rounded-full hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white">
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        {loaded && <iframe src={`${WAITLIST_FORM}?embedded=true&hl=${isFr ? "fr" : "en"}`}
          title={title} className="min-h-0 w-full flex-1 border-0" />}
        <div className="shrink-0 border-t border-[#E8D4DB] px-4 py-2">
          <a href={`${WAITLIST_FORM}?hl=${isFr ? "fr" : "en"}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center text-sm font-semibold text-[#8E0C3A] underline underline-offset-4">
            {isFr ? "Ouvrir le formulaire dans un nouvel onglet" : "Open the form in a new tab"}
          </a>
        </div>
      </div>
    </dialog>
  </>;
}
