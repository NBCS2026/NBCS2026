"use client";

import { ChevronDown } from "lucide-react";
import { WELCOME_MESSAGES } from "@/data/welcome-messages";

export function WelcomeMessages({ locale }: { locale: string }) {
  const isFr = locale === "fr";

  return (
    <section className="bg-[#FAF6F7] px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 max-w-3xl">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.16em] text-[#8C0C3A]">
            {isFr ? "Bienvenue à Winnipeg" : "Welcome to Winnipeg"}
          </p>
          <h2 className="mt-3 font-heading text-[clamp(30px,4vw,52px)] font-black leading-tight text-[#1E1E1E]">
            {isFr ? "Messages de bienvenue" : "Welcome messages"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#1E1E1E]/75 sm:text-lg">
            {isFr
              ? "Des mots de bienvenue de la Fondation Michaëlle Jean et des personnes qui accueillent le 5e Sommet au Manitoba."
              : "Words of welcome from the Michaëlle Jean Foundation and those hosting the 5th Summit in Manitoba."}
          </p>
        </div>

        <div className="space-y-4">
          {WELCOME_MESSAGES.map((message, index) => {
            const paragraphs = isFr
              ? message.paragraphsFr
              : message.paragraphsEn;
            const signature = isFr ? message.signatureFr : message.signatureEn;
            const title = isFr ? message.titleFr : message.titleEn;
            const label = isFr ? message.labelFr : message.labelEn;
            const imageAlt = isFr ? message.imageAltFr : message.imageAltEn;

            return (
              <details
                key={message.id}
                open={index === 0}
                className="group overflow-hidden rounded-3xl border border-[#E8D4DB] bg-white shadow-[0_12px_40px_rgba(93,24,49,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 marker:content-none sm:px-8 sm:py-6">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.13em] text-[#8C0C3A]">
                      {label}
                    </span>
                    <span className="mt-1 block font-heading text-xl font-black leading-tight text-[#5D1831] sm:text-2xl">
                      {title}
                    </span>
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#FAF6F7] text-[#8C0C3A]">
                    <ChevronDown
                      className="size-5 transition-transform group-open:rotate-180"
                      aria-hidden
                    />
                  </span>
                </summary>

                <div className="border-t border-[#E8D4DB] px-6 py-7 sm:px-8 sm:py-9">
                  <div
                    className={
                      message.image
                        ? "grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12"
                        : "mx-auto max-w-4xl"
                    }
                  >
                    {message.image && (
                      <figure className="lg:sticky lg:top-6 lg:self-start">
                        <img
                          src={message.image}
                          alt={imageAlt || ""}
                          className="aspect-[3/2] w-full rounded-2xl object-cover shadow-sm"
                          loading="lazy"
                        />
                        <figcaption className="mt-3 text-sm font-semibold leading-relaxed text-[#5D1831]">
                          {signature[0]}
                        </figcaption>
                      </figure>
                    )}
                    <div>
                      <div className="space-y-5 text-[15px] leading-[1.75] text-[#1E1E1E]/82 sm:text-base">
                        {paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                      <div className="mt-8 border-l-4 border-[#8C0C3A] pl-4 text-sm leading-relaxed text-[#5D1831] sm:text-base">
                        {signature.map((line, signatureIndex) => (
                          <p
                            key={line}
                            className={signatureIndex === 0 ? "font-black" : ""}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
