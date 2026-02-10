"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Toggle } from "./svg/toggle";
import { NavLink } from "./nav-link";
import { LangSelect } from "./lang-select";
import { Button } from "./ui/button";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";

interface ToggleMenuProps {
  local: string;
  className?: string;
}

export default function ToggleMenu({ local, className }: ToggleMenuProps) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Sheet open={toggle} onOpenChange={handleToggle}>
      <SheetTrigger className={`md:hidden ${className ?? ""}`}>
        <Toggle />
      </SheetTrigger>
      <SheetContent className="w-full px-8 pt-10">
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <NavLink
            onClick={handleToggle}
            className="mb-6 [&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-6 [&_ul]:justify-start"
          />
          <ul className="flex flex-col gap-6">
            <li>
              <LangSelect className="data-placeholder:text-black [&_svg]:text-black" />
            </li>

          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
