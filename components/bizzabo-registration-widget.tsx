"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

const FLOW_ID = "952c7914-98bb-4958-8add-066e946ee763";
const EVENT_ID = "792278";
const TICKETS_SCRIPT_SRC =
  "https://organizer.bizzabo.com/widgets/flows/tickets/ticketsSelect.js";
const POPUP_SCRIPT_SRC =
  "https://organizer.bizzabo.com/widgets/flows/popup/registrationPopup.js";

function bizzaboLangFromLocale(locale: string) {
  return locale === "fr" ? "fr-ca" : "en";
}

/** Ensure ?lang= is set before Bizzabo reads the parent URL for the iframe. */
function syncBizzaboLangParam(langValue: string) {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("lang") !== langValue) {
      url.searchParams.set("lang", langValue);
      window.history.replaceState(null, "", url.toString());
    }
  } catch {
    // ignore
  }
}

function loadScript({
  id,
  src,
  attributes,
}: {
  id: string;
  src: string;
  attributes?: Record<string, string>;
}) {
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }

  const script = document.createElement("script");
  script.id = id;
  script.type = "text/javascript";
  script.async = true;
  script.src = src;

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      script.setAttribute(key, value);
    }
  }

  document.body.appendChild(script);
  return script;
}

function clearBizzaboIframes() {
  document
    .querySelectorAll(
      'iframe[src*="events.bizzabo.com"], iframe[id*="ticketsSelect"]',
    )
    .forEach((el) => { el.remove(); });
}

export function BizzaboRegistrationWidget() {
  const locale = useLocale();
  const lang = bizzaboLangFromLocale(locale);
  const mountId = useRef(0);
  const widgetRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"loading" | "ready" | "slow">("loading");
  const [attempt, setAttempt] = useState(0);
  const directRegistrationUrl = `https://events.bizzabo.com/flows/events/${EVENT_ID}/flow/${FLOW_ID}?lang=${lang}`;

  // biome-ignore lint/correctness/useExhaustiveDependencies: A retry intentionally remounts the provider scripts and frames.
  useEffect(() => {
    const id = ++mountId.current;
    setState("loading");
    const timeout = window.setTimeout(
      () => setState((current) => (current === "ready" ? current : "slow")),
      20000,
    );
    let disposed = false;
    const onReady = () => {
      if (!disposed) setState("ready");
      window.clearTimeout(timeout);
    };
    const onError = () => {
      if (!disposed) setState("slow");
      window.clearTimeout(timeout);
    };
    const frames = new Set<HTMLIFrameElement>();
    const observeFrames = () => {
      widgetRef.current?.querySelectorAll("iframe").forEach((frame) => {
        if (!frame.title)
          frame.title =
            lang === "fr-ca" ? "Inscription au Sommet" : "Summit registration";
        if (!frames.has(frame)) {
          frames.add(frame);
          frame.addEventListener("load", onReady);
        }
      });
    };
    const observer = new MutationObserver(observeFrames);
    if (widgetRef.current)
      observer.observe(widgetRef.current, { childList: true, subtree: true });
    syncBizzaboLangParam(lang);
    clearBizzaboIframes();

    const ticketsScript = loadScript({
      id: `bz-inline-registration-script-${FLOW_ID}`,
      src: TICKETS_SCRIPT_SRC,
      attributes: {
        class: "bz-inline-widget-script",
        "data-event-id": EVENT_ID,
      },
    });

    const popupScript = loadScript({
      id: `bz-popup-registration-script-${FLOW_ID}`,
      src: POPUP_SCRIPT_SRC,
      attributes: {
        "data-event-id": EVENT_ID,
        "data-registration-proxy": "true",
        "data-unique-name": EVENT_ID,
        "data-flow-id": FLOW_ID,
        "data-inline-widget": "true",
      },
    });

    ticketsScript.addEventListener("error", onError);
    popupScript.addEventListener("error", onError);
    return () => {
      disposed = true;
      window.clearTimeout(timeout);
      observer.disconnect();
      ticketsScript.removeEventListener("error", onError);
      popupScript.removeEventListener("error", onError);
      frames.forEach((frame) => { frame.removeEventListener("load", onReady); });
      if (mountId.current === id) {
        ticketsScript.remove();
        popupScript.remove();
        clearBizzaboIframes();
      }
    };
  }, [lang, attempt]);

  return (
    <>
      <div
        ref={widgetRef}
        key={`bz-widget-${lang}`}
        className="bz-widget-tickets-inline w-full"
        style={{ display: "inline-flex", width: "100%" }}
        data-flow-id={FLOW_ID}
        data-event-id={EVENT_ID}
        data-registration-proxy="true"
        data-lang={lang}
      />
      {state !== "ready" && (
        // biome-ignore lint/a11y/useSemanticElements: This is a loading status with a retry control, not a form calculation output.
        <div
          role="status"
          className="rounded-xl border border-[#E8D4DB] bg-[#FAF6F7] p-4 text-center text-sm text-[#5D1831]"
        >
          <p>
            {state === "loading"
              ? locale === "fr"
                ? "Chargement de l’inscription…"
                : "Loading registration…"
              : locale === "fr"
                ? "L’inscription prend plus de temps à charger."
                : "Registration is taking longer to load."}
          </p>
          {state === "slow" && (
            <button
              type="button"
              onClick={() => setAttempt((value) => value + 1)}
              className="mt-3 min-h-11 rounded-full border border-[#8C0C3A] px-5 py-2 font-semibold"
            >
              {locale === "fr"
                ? "Recharger l’inscription"
                : "Reload registration"}
            </button>
          )}
        </div>
      )}
      <p className="mt-4 text-center">
        <a
          href={directRegistrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-[#8C0C3A] underline underline-offset-4"
        >
          {locale === "fr"
            ? "Ouvrir l’inscription dans un nouvel onglet"
            : "Open registration in a new tab"}
        </a>
      </p>
    </>
  );
}
