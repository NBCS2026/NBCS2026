import { Headphones, ExternalLink } from "lucide-react";
import { getProgramWordlyLink } from "@/data/program-wordly-links";

export function ProgramWordlyLink({ day, sessionId, title, isFr }: {
  day: string; sessionId: string; title: string; isFr: boolean;
}) {
  const url = getProgramWordlyLink(day, sessionId);
  if (!url) return null;
  const label = isFr ? "Interprétation et sous-titrage en direct" : "Interpretation & live captions";
  return <div className="program-wordly-wrap">
    <a className="program-wordly-link" href={url} target="_blank" rel="noopener noreferrer"
      aria-label={`${label} — ${title} — Wordly (${isFr ? "nouvel onglet" : "new tab"})`}>
      <Headphones size={18} aria-hidden="true" />
      <span>{label}<span className="program-wordly-provider">Wordly</span></span>
      <ExternalLink size={14} aria-hidden="true" className="shrink-0" />
    </a>
  </div>;
}
