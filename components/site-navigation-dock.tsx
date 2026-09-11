"use client";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Logo } from "./logo";
import { NavLink } from "./nav-link";
import { LangSelect } from "./lang-select";
import ToggleMenu from "./toggle-menu";

export function SiteNavigationDock() {
  const locale = useLocale();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  // Re-observe the page header after client-side navigation replaces it.
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname identifies a new header DOM node.
  useEffect(() => {
    const header = document.querySelector('header:not([data-site-dock])');
    if (!header) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0));
    observer.observe(header);
    return () => observer.disconnect();
  }, [pathname]);
  return (
    <>
      <a className="site-skip-link" href="#main-content" aria-label={locale === "fr" ? "Aller au contenu principal" : "Skip to main content"}>
        <span className="sr-only">{locale === "fr" ? "Aller au contenu principal" : "Skip to main content"}</span><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v16m-7-7 7 7 7-7" /></svg>
      </a>
      <header data-site-dock data-visible={visible} hidden={!visible} className="site-navigation-dock">
        <div className="mx-auto flex h-full max-w-[1440px] items-center gap-4 px-5 sm:px-8">
          <Logo />
          <NavLink className="ml-auto hidden xl:block" />
          <div className="ml-auto xl:ml-0"><LangSelect /></div>
          <ToggleMenu local={locale} />
        </div>
      </header>
    </>
  );
}
