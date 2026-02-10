"use client";

import { Footer } from "@/components/footer";
import { LangSelect } from "@/components/lang-select";
import { Logo } from "@/components/logo";
import { NavLink } from "@/components/nav-link";
import ToggleMenu from "@/components/toggle-menu";
import { Button } from "@/components/ui/button";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const params = useParams<{ locale: string }>();
  const t = useTranslations("contact");
  const { locale } = params;
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Store form reference before async operations
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Parse JSON response
      const result = await response.json();

      // Check if response is ok
      if (response.ok && result.message) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you within 2-3 business days.",
        });
        // Reset form if it still exists
        if (form) {
          form.reset();
        }
      } else {
        // Handle error response
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus({
        type: "error",
        message: error instanceof Error ? error.message : "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <div className="h-screen relative bg-[linear-gradient(to_bottom,rgba(93,4,36,0.9)_10%,rgba(115,10,47,0.7)_42%,rgba(102,9,42,0.5)_76%,rgba(89,8,37,0.3)_110%),url('/contact_main.webp')] bg-cover bg-center">
        <header
          className="flex items-center text-white max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto pt-12 px-8 md:px-12 lg:px-16 2xl:px-20 3xl:px-16 4xl:px-24 mb-18 md:mb-52 lg:mb-18 w-full"
        >
          <Logo />
          <NavLink className="hidden md:block flex-1 mx-8 3xl:mx-8 4xl:mx-16" />
          <ul className="md:flex gap-5 items-center hidden ml-auto md:mr-8 lg:mr-12 2xl:mr-20 3xl:mr-16 4xl:mr-24">
            <li>
              <LangSelect />
            </li>

          </ul>
          <ToggleMenu local={locale} className="ml-auto md:ml-0" />
        </header>
        <div className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 text-center">
          <p
            className="font-heading bold text-[clamp(14px,1.82vw,28px)] tracking-[0.40em] text-white max-w-[38ch] mx-auto md:max-w-full mb-5"
          >
            {t("pretitle")}
          </p>
          <h1
            className={`font-heading font-black ${
              locale === "en"
                ? "text-[clamp(30px,4.62vw,71px)]"
                : "text-[clamp(24px,2.79vw,45px)]"
            } tracking-widest text-white leading-none`}
          >
            {t("title")}
          </h1>
        </div>
      </div>
      <main className="bg-white rounded-t-2xl pt-14">
        {/* <section className="max-w-[1440px] mx-auto px-5 flex flex-col md:flex-row gap-8 items-center mb-16 lg:mb-[142px]">
          <div className="max-w-[60ch]">
            <p className="font-bold text-[24px] text-center md:text-start md:text-[43px] mb-6 md:mb-14">
              <span className="text-light-red">{t("text_one")}</span>{" "}
              {t("text_two")}
            </p>
            <p className="font-medium text-[14px] md:text-[15px] text-dark-gray">
              {t("text_three")}
            </p>
          </div>
          <div className="w-full md:w-auto md:basis-[600px] space-y-6">
            <div>
              <Select>
                <SelectTrigger
                  className={`px-5 h-11 font-medium data-placeholder:text-black [&_svg]:text-black`}
                >
                  <SelectValue
                    placeholder={locale == "en" ? "Subject" : "Object"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="fr">FR</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="name" className="font-medium">
                {t("text_four")}
              </label>
              <Input id="name" className="mt-3.5" />
            </div>
            <div>
              <label htmlFor="email" className="font-medium">
                {t("text_five")}
              </label>
              <Input id="email" type="email" className="mt-3.5" />
            </div>
            <div>
              <label htmlFor="message" className="font-medium">
                {t("text_six")}
              </label>
              <Input id="message" className="mt-3.5" />
            </div>

            <div className="space-y-3">
              <p className="font-medium text-dark-gray">{t("text_seven")}</p>
              <Button className="bg-transparent border hover:bg-transparent cursor-pointer rounded-full h-[50px] px-20 text-black font-semibold w-full md:w-auto">
                {t("text_eight")}
              </Button>
            </div>
          </div>
        </section> */}
        
        {/* Contact Form Section */}
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 mb-12 sm:mb-16 md:mb-24 lg:mb-[142px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
            {/* Left Side - Title and Description */}
            <div className="space-y-6">
              <h2 className="font-bold text-[24px] lg:text-[43px] text-center lg:text-left">
                {t("text_one")}{" "}
                <span className="text-light-red">{t("text_two")}</span>
              </h2>
              <p className="font-medium text-[14px] md:text-[16px] lg:text-[18px] text-light-gray leading-relaxed text-center lg:text-left">
                {t("text_three")}
              </p>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="space-y-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block font-medium text-[14px] mb-2">
                    {t("text_four")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-red focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium text-[14px] mb-2">
                    {t("text_five")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-red focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium text-[14px] mb-2">
                    {t("text_six")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-light-red focus:border-transparent resize-vertical"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {submitStatus.type && (
                  <div
                    className={`p-3 rounded-lg text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-light-red text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-light-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : t("text_eight")}
                </button>
              </form>
              
              <p className="text-[12px] md:text-[14px] text-gray-500 text-center">
                {t("text_seven")}
              </p>
            </div>
          </div>
        </section>
        
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 space-y-6 md:space-y-9 mb-16 lg:mb-[142px]">
          <h1 className="font-bold text-[24px] lg:text-[43px] text-center">
            {t("text_nine")}{" "}
            <span className="text-light-red">{t("text_ten")}</span>
          </h1>

          <p className="tracking-widest mx-auto text-light-red font-medium text-[clamp(14px,1.43vw,22px)] mb-7">
            {t("post_title")}
          </p>
          <p className="font-medium text-[14px] text-center md:text-start md:text-[21px] text-light-gray">
            {t("text_eleven")}
            <a href="mailto:nbcs-spcn@fmjf.ca" className="text-black font-bold">
              {t("text_twelve")}
            </a>
          </p>
          <p className="font-medium text-center md:text-start text-[14px] md:text-[21px] text-light-gray">
            {t("text_thirteen")}{" "}
            <a href="mailto:nbcs-spcn@fmjf.ca" className="text-black font-bold">
              {t("text_fourteen")}
            </a>
          </p>
        </section>
        <section className="max-w-[1440px] 2xl:max-w-[1600px] 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto px-5 2xl:px-8 3xl:px-16 4xl:px-24 space-y-6 md:space-y-9 mb-16 lg:mb-[142px]">
          <h1 className="font-bold text-[24px] lg:text-[43px] text-center text-light-red">
            {t("text_fifteen")}{" "}
            <span className="text-black">{t("text_sixteen")}</span>
          </h1>
          <p className="font-medium text-[14px] md:text-[21px] text-light-red">
            {t("text_seventeen")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 gap-y-6 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 md:gap-y-14">
            <Link
              href="https://www.instagram.com/michaellej_fdn/?hl=en"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <img src="/instagram2.png" alt="instagram" />
              <span className="underline cursor-pointer">
                {t("text_eighteen")}
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/company/fondationmjfoundation/"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <img src="/contact_linkedin.png" alt="linkedin icon" />
              <span className="underline cursor-pointer">
                {t("text_nineteen")}
              </span>
            </Link>
            <Link
              href="https://www.facebook.com/FondationMichaelleJeanFoundation"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <img src="/contact_facebook.png" alt="instagram" />
              <span className="underline cursor-pointer">
                {t("text_twenty")}
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
