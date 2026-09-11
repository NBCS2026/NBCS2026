"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

export function ProgramBioDialog({ name, line, bio, portrait, isFr }: {
  name: string; line: ReactNode; bio: string; portrait: ReactNode; isFr: boolean;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  function close() { dialog.current?.close(); }
  return <>
    <button ref={trigger} type="button" className="program-bio-trigger" aria-haspopup="dialog" aria-label={`${isFr ? "Voir la biographie" : "View bio"} — ${name}`} onClick={() => setOpen(true)}>
      {isFr ? "Voir la biographie" : "View bio"}<span aria-hidden="true"> ↗</span>
    </button>
    <dialog ref={dialog} className="program-bio-dialog" aria-labelledby={titleId}
      onClose={() => { setOpen(false); trigger.current?.focus(); }}
      onClick={event => { if (event.target === event.currentTarget) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) close(); } }}>
      {open && <>
        <div className="program-bio-bar"><span>{isFr ? "Biographie" : "Biography"}</span><button type="button" autoFocus onClick={close} aria-label={isFr ? "Fermer la biographie" : "Close biography"}><X aria-hidden="true" size={20} /></button></div>
        <div className="program-bio-content">
          <div className="program-bio-heading">{portrait}<div><h2 id={titleId}>{name}</h2><div className="program-bio-role">{line}</div></div></div>
          {bio.split("\n\n").map((p, i) => <p key={i} className="program-bio-paragraph">{p}</p>)}
        </div>
      </>}
    </dialog>
  </>;
}
