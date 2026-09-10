"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ExternalLink, Maximize2, X } from "lucide-react";

type Article = {
  title: string;
  source: string;
  date: string;
  url: string;
  summaryEn: string;
  summaryFr: string;
};

export function ArticlePreviewCard({ item, locale }: { item: Article; locale: string }) {
  const isFr = locale === "fr";
  const summary = isFr ? item.summaryFr : item.summaryEn;
  const previewLabel = isFr ? "Aperçu de l’article" : "Article preview";
  return (
    <Dialog.Root>
      <article className="min-w-0">
        <Dialog.Trigger asChild>
          <button type="button" aria-label={`${previewLabel} — ${item.title}`} className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#E8D4DB] bg-white text-left shadow-sm transition-colors hover:border-[#8C0C3A]">
            <span aria-hidden="true" className="block w-full border-b border-[#E8D4DB] bg-[#FAF6F7] p-4 sm:p-5">
              <span className="block overflow-hidden rounded-lg border border-[#E8D4DB] bg-white transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transform-none">
                <span className="flex items-center gap-1.5 border-b border-[#E8D4DB] px-3 py-2 text-[10px] text-[#5D1831]">
                  <span className="size-1.5 rounded-full bg-[#E8D4DB]" /><span className="size-1.5 rounded-full bg-[#E8D4DB]" /><span className="size-1.5 rounded-full bg-[#E8D4DB]" />
                  <span className="ml-2 truncate">{new URL(item.url).hostname.replace(/^www\./, "")}</span>
                  <Maximize2 className="ml-auto size-3 shrink-0" />
                </span>
                <span className="block min-h-44 p-4 sm:p-5">
                  <span className="block border-b border-[#E8D4DB] pb-2 font-heading text-xs font-bold uppercase tracking-wide text-[#8C0C3A]">{item.source}</span>
                  <span className="mt-3 line-clamp-3 block font-heading text-lg font-black leading-snug text-[#5D1831]">{item.title}</span>
                  <span className="mt-3 block text-xs text-[#1E1E1E]/65">{item.date}</span>
                </span>
              </span>
            </span>
            <span className="flex flex-1 flex-col p-5">
              <span className="font-heading text-lg font-bold leading-snug text-[#5D1831]">{item.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-[#1E1E1E]/70">{summary}</span>
              <span className="mt-auto flex items-center justify-between gap-3 pt-4 text-sm font-semibold text-[#8C0C3A]">{previewLabel}<Maximize2 className="size-4 shrink-0" aria-hidden="true" /></span>
            </span>
          </button>
        </Dialog.Trigger>
      </article>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[71] max-h-[85svh] w-[calc(100vw_-_2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-[#E8D4DB] bg-white p-6 shadow-xl sm:p-9">
          <div className="pr-10 text-xs font-bold uppercase tracking-wider text-[#8C0C3A]">{item.source} · {item.date}</div>
          <Dialog.Title className="mt-5 font-heading text-2xl font-black leading-tight text-[#5D1831] sm:text-3xl">{item.title}</Dialog.Title>
          <Dialog.Description className="mt-5 text-base leading-relaxed text-[#1E1E1E]/75">{summary}</Dialog.Description>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-full bg-[#8C0C3A] px-5 py-3 text-sm font-bold text-white hover:bg-[#5D1831]">{isFr ? "Lire l’article" : "Read article"}<ExternalLink className="size-4" aria-hidden="true" /></a>
          <Dialog.Close className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full text-[#5D1831] hover:bg-[#FAF6F7]" aria-label={isFr ? "Fermer l’aperçu" : "Close preview"}><X className="size-5" aria-hidden="true" /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
