"use client";

import { useEffect, useRef } from "react";
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
    .forEach((el) => el.remove());
}

export function BizzaboRegistrationWidget() {
  const locale = useLocale();
  const lang = bizzaboLangFromLocale(locale);
  const mountId = useRef(0);

  useEffect(() => {
    const id = ++mountId.current;
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

    return () => {
      if (mountId.current === id) {
        ticketsScript.remove();
        popupScript.remove();
        clearBizzaboIframes();
      }
    };
  }, [lang]);

  return (
    <div
      key={`bz-widget-${lang}`}
      className="bz-widget-tickets-inline w-full"
      style={{ display: "inline-flex", width: "100%" }}
      data-flow-id={FLOW_ID}
      data-event-id={EVENT_ID}
      data-registration-proxy="true"
      data-lang={lang}
    />
  );
}
