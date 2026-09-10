"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface NavLinKProps extends React.HTMLAttributes<HTMLElement> {
  onClose?: () => void;
}

export function NavLink({ className, onClick }: NavLinKProps) {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const Links = [
    { title: t("home"), url: "/" },
    {
      title: t("about"),
      url: "/about",
    },
    {
      title: t("program"),
      url: "/program",
    },
    {
      title: t("summit_week"),
      url: "/summit-week",
    },
    {
      title: t("exhibitors"),
      url: "/exhibitors",
    },
    {
      title: t("media"),
      url: "/media",
    },
    {
      title: t("tickets"),
      url: "/ticket",
    },
    {
      title: locale === "fr" ? "PLANIFIER" : "PLAN",
      url: "/info",
    },
    { title: locale === "fr" ? "PARTENAIRES" : "PARTNERS", url: "/partners" },
    {
      title: t("contact"),
      url: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <nav aria-label={locale === "fr" ? "Navigation principale" : "Main navigation"} className={cn(`${className}`)}>
      {locale === "fr" && (
        <style jsx>{`
            @media (min-width: 932px) and (max-width: 1023px) {
              .french-nav-text {
                font-size: 8px;
                gap: 0.375rem !important;
              }
            }
          `}</style>
      )}
      <ul
        className={`flex flex-row gap-1.5 md:gap-2.5 xl:gap-5 2xl:gap-7 3xl:gap-9 justify-center font-medium text-xs xl:text-sm 2xl:text-base 3xl:text-lg ${
          locale === "fr" ? "french-nav-text" : ""
        }`}
      >
        {Links.map((link) => {
          const isActive =
            pathname === link.url || pathname?.startsWith(`${link.url}/`);
          return (
            <li key={link.url}>
              <Link
                className={`whitespace-nowrap ${
                  isActive ? "border-b-2 border-current" : "border-b-2 border-transparent"
                } inline-flex min-h-11 items-center hover:border-current`}
                aria-current={isActive ? "page" : undefined}
                href={link.url}
                onClick={onClick}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
