import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { ViewportProvider } from "@/components/viewport-provider";

export const metadata: Metadata = {
  title: "National Black Canadians Summit",
  description:
    "The National Black Canadians Summit is a three-day gathering of leaders, artists, and changemakers.",
  other: {
    'google': 'notranslate',
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // setRequestLocale(locale);
  const messages = await getMessages({ locale });
  // Use fr-ca for French to match Bizzabo's language requirements
  const htmlLang = locale === "fr" ? "fr-ca" : locale;
  return (
    <html lang={htmlLang}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function setLangParam() {
                  try {
                    var langValue = '${locale === "fr" ? "fr-ca" : "en"}';
                    var url = new URL(window.location.href);
                    var currentLang = url.searchParams.get('lang');
                    
                    // Only set if not already correct
                    if (currentLang !== langValue) {
                      url.searchParams.set('lang', langValue);
                      window.history.replaceState(null, '', url.toString());
                    }
                  } catch(e) {
                    console.error('Error setting lang parameter:', e);
                  }
                }
                // Set immediately
                setLangParam();
                // Also set on DOM ready (for Chrome timing compatibility)
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', setLangParam);
                } else {
                  setLangParam();
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} font-body`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ViewportProvider>
            {children}
          </ViewportProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
