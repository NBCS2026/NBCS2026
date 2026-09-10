"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
import { Foundation } from "@/components/svg/foundation";
import { ChevronDown } from "lucide-react";
import { WELCOME_MESSAGES, type WelcomeMessage } from "@/data/welcome-messages";

function MessageCard({ message, isFr }: { message: WelcomeMessage; isFr: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(112);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const id = useId();
  const paragraphs = isFr ? message.paragraphsFr : message.paragraphsEn;
  const signature = isFr ? message.signatureFr : message.signatureEn;
  const title = isFr ? message.titleFr : message.titleEn;

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    const observer = new ResizeObserver(() => setContentHeight(content.getBoundingClientRect().height));
    observer.observe(content);
    return () => observer.disconnect();
  }, []);

  function toggleMessage() {
    if (expanded && cardRef.current && cardRef.current.getBoundingClientRect().top < 0) {
      cardRef.current.scrollIntoView({ block: "start", behavior: "instant" });
    }
    setExpanded(!expanded);
  }

  return (
    <article ref={cardRef} aria-labelledby={`${id}-title`} className="scroll-mt-36 overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white p-6 shadow-[0_12px_40px_rgba(93,24,49,0.06)] sm:p-8">
      <header className="mb-5 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
        {message.image && (
          <img src={message.image} alt={(isFr ? message.imageAltFr : message.imageAltEn) || ""} className={`${message.portrait ? "aspect-square w-28 sm:w-36" : "aspect-[3/2] w-48 sm:w-56"} shrink-0 rounded-2xl object-cover shadow-sm`} loading="lazy" />
        )}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8C0C3A]">{isFr ? message.labelFr : message.labelEn}</p>
          <h3 id={`${id}-title`} className="mt-2 font-heading text-xl font-black leading-tight text-[#5D1831] sm:text-2xl">{title}</h3>
          <div className="mt-3 space-y-1 text-sm leading-relaxed text-[#5D1831]">
            {signature.map((line, index) => <p key={line} className={index === 0 ? "font-semibold" : ""}>{line}</p>)}
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden transition-[height] duration-500 ease-in-out motion-reduce:transition-none" style={{ height: expanded ? contentHeight : 112 }}>
        {!expanded && (
          <div className="absolute inset-0 text-[15px] leading-7 text-[#1E1E1E]/80 sm:text-base">
            <p className="line-clamp-4">{paragraphs.slice(0, 2).join(" ")}</p>
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
          </div>
        )}
        <div id={`${id}-content`} ref={contentRef} role="region" aria-labelledby={`${id}-title`} aria-hidden={!expanded} className={expanded ? "visible" : "invisible"}>
          <div className="space-y-5 text-[15px] leading-[1.75] text-[#1E1E1E]/80 sm:text-base">
            {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-8 border-l-4 border-[#8C0C3A] pl-4 text-sm leading-relaxed text-[#5D1831] sm:text-base">
            {signature.map((line, index) => <p key={line} className={index === 0 ? "font-black" : ""}>{line}</p>)}
          </div>
          {message.logo && (
            <div className="mt-6">
              {message.logo === "foundation" ? (
                <Foundation role="img" aria-label={isFr ? "Fondation Michaëlle Jean" : "Michaëlle Jean Foundation"} className="h-auto w-[270px] max-w-full [&_path]:fill-[#5D1831]" />
              ) : (
                <img src={message.logo} alt={(isFr ? message.logoAltFr : message.logoAltEn) || ""} className="h-auto max-h-24 w-auto max-w-full sm:max-w-[240px] object-contain" loading="lazy" />
              )}
            </div>
          )}
        </div>
      </div>

      <button type="button" onClick={toggleMessage} aria-expanded={expanded} aria-controls={`${id}-content`} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#E8D4DB] px-5 py-2 text-sm font-semibold text-[#8C0C3A] transition-colors hover:bg-[#FAF6F7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8C0C3A]">
        {expanded ? (isFr ? "Fermer le message" : "Close message") : (isFr ? "Lire le message complet" : "Read full message")}
        <span className="sr-only"> — {signature[0]}</span>
        <ChevronDown aria-hidden="true" className={`size-4 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} />
      </button>
    </article>
  );
}

export function WelcomeMessages({ locale }: { locale: string }) {
  const isFr = locale === "fr";
  return (
    <section id="welcome-messages" className="scroll-mt-36 bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">{isFr ? "Bienvenue à Winnipeg" : "Welcome to Winnipeg"}</p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#1E1E1E]">{isFr ? "Messages de bienvenue" : "Welcome messages"}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr ? "Des mots de bienvenue de la Fondation Michaëlle Jean et des personnes qui accueillent le 5e Sommet au Manitoba." : "Words of welcome from the Michaëlle Jean Foundation and those hosting the 5th Summit in Manitoba."}
          </p>
        </div>
        <div className="space-y-5">
          {WELCOME_MESSAGES.map(message => <MessageCard key={message.id} message={message} isFr={isFr} />)}
        </div>
      </div>
    </section>
  );
}
