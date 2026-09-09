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
      title: t("tickets"),
      url: "/ticket",
    },
    {
      title: t("info"),
      url: "/info",
    },
    {
      title: t("contact"),
      url: "/contact",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className={cn(`${className}`)}>
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
          const isInfoLink = link.url === "/info";
          return (
            <li key={link.url}>
              <Link
                className={`${
                  isInfoLink
                    ? "flex flex-col items-center justify-center text-center leading-tight"
                    : "whitespace-nowrap"
                } ${
                  isActive ? "border-b-2 border-white" : ""
                } hover:border-b-2 hover:border-white`}
                href={link.url}
                onClick={onClick}
              >
                {isInfoLink ? (
                  <>
                    <span>{t("info_line1")}</span>
                    <span>{t("info_line2")}</span>
                    <span>{t("info_line3")}</span>
                  </>
                ) : (
                  link.title
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
