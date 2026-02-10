import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

export function LangSelect({ className }: React.HTMLAttributes<HTMLElement>) {
  const local = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLang = (newLocale: string) => {
    if (newLocale !== local) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
  };
  return (
    <Select defaultValue={local} onValueChange={(value) => switchLang(value)}>
      <SelectTrigger
        className={cn(`px-1 md:px-2 lg:px-4 xl:px-5 2xl:px-6 3xl:px-8 h-[32px] md:h-[34px] lg:h-[46px] xl:h-[50px] 2xl:h-[54px] 3xl:h-[60px] rounded-full font-medium text-[10px] md:text-[10px] lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl ${className}`)}
      >
        <SelectValue placeholder={local} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="fr">FR</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
