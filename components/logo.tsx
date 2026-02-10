import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link href="/" className="w-[160px] md:w-[170px] lg:w-[190px] xl:w-[230px] 2xl:w-[260px] 3xl:w-[300px] flex-shrink-0 ml-[2px] md:-ml-1 lg:-ml-2 xl:ml-3">
      <img src="/logo.webp" alt="site logo" className="w-full h-auto" />
    </Link>
  );
}
