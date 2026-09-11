"use client";
import { useParams } from "next/navigation";

export default function PageError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const isFr = useParams<{ locale: string }>().locale === "fr";
  return <main id="main-content" className="mx-auto max-w-2xl px-6 py-24">
    <h1 className="text-3xl font-bold text-[#5D1831]">{isFr ? "Cette page n’a pas pu se charger." : "This page could not load."}</h1>
    <button type="button" onClick={reset} className="mt-6 rounded-full bg-[#8C0C3A] px-6 py-3 font-bold text-white">{isFr ? "Réessayer" : "Try again"}</button>
    <a href={isFr ? "/fr" : "/en"} className="ml-6 inline-block py-3 text-[#8C0C3A] underline">{isFr ? "Accueil" : "Home"}</a>
  </main>;
}
