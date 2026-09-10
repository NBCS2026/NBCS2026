"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LangSelect } from "./lang-select";
import { NavLink } from "./nav-link";
import { Toggle } from "./svg/toggle";

interface ToggleMenuProps {
  local: string;
  className?: string;
}

export default function ToggleMenu({
  local: _local,
  className,
}: ToggleMenuProps) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Sheet open={toggle} onOpenChange={setToggle}>
      <SheetTrigger aria-label={_local === "fr" ? "Ouvrir le menu" : "Open menu"} className={`inline-flex min-h-11 min-w-11 items-center justify-center xl:hidden ${className ?? ""}`}>
        <Toggle />
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto px-4 pt-12 pb-8 sm:px-6">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <NavLink
            onClick={handleToggle}
            className="mb-6 [&_ul]:flex-col [&_ul]:items-start [&_ul]:gap-2 [&_a]:text-base [&_a]:w-full [&_ul]:justify-start"
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
