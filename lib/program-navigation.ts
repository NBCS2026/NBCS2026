import type { ProgramDay } from "../data/program";

export function navigateProgram(day: ProgramDay, anchor: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("day", String(day));
  url.hash = anchor;
  window.history.pushState(null, "", url);
  // pushState does not fire popstate; notify both the day tabs and disclosures.
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function focusProgramTarget(anchor: string) {
  const target = document.getElementById(anchor);
  if (!target) return;
  (target.querySelector<HTMLButtonElement>("button") || target).focus({ preventScroll: true });
  target.scrollIntoView({
    block: "start",
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
  });
}
