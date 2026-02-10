"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { _Translator, useTranslations, useLocale } from "next-intl";

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
      title: t("tickets"),
      url: "/ticket",
    },
    {
      title: t("partners"),
      url: "/partners",
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
  const isDarkTheme = pathname?.includes("/ticket");
  return (
    <nav className={cn(`${className}`)}>
      <>
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
        <ul className={`flex flex-row gap-1.5 md:gap-2.5 lg:gap-6 2xl:gap-8 3xl:gap-10 justify-center font-medium text-xs md:text-sm lg:text-base 2xl:text-lg 3xl:text-xl ${
          locale === "fr" ? "french-nav-text" : ""
        }`}
        >
        {Links.map((link, idx) => {
          const isActive = pathname === link.url || pathname?.startsWith(link.url + "/");
          return (
            <li key={idx} onClick={onClick}>
              <Link
                className={`whitespace-nowrap ${
                  isActive 
                    ? "border-b-2 border-white" 
                    : ""
                } hover:border-b-2 hover:border-white`}
                href={link.url}
              >
                {link.title}
              </Link>
            </li>
          );
        })}
        </ul>
      </>
    </nav>
  );
}
