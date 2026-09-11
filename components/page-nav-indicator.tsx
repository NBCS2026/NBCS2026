"use client";

import { useEffect, useState, type RefObject } from "react";
import "./page-nav-indicator.css";

/** Decorative motion; the links retain their accessible current-location state. */
export function PageNavIndicator({
  rail,
  active,
}: {
  rail: RefObject<HTMLDivElement | null>;
  active: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    const row = rail.current;
    if (!row) return;
    const measure = () => {
      const link = [
        ...row.querySelectorAll<HTMLAnchorElement>(
          "a[aria-current='location']",
        ),
      ].find((item) => item.hash.slice(1) === active);
      if (!link) {
        setPosition((previous) => ({ ...previous, width: 0 }));
        return;
      }
      setPosition({
        x: link.offsetLeft,
        y: link.offsetTop,
        width: link.offsetWidth,
        height: link.offsetHeight,
      });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    for (const link of row.querySelectorAll("a")) observer.observe(link);
    return () => observer.disconnect();
  }, [rail, active]);

  return (
    <span
      aria-hidden="true"
      data-ready={position.width > 0}
      className="page-nav-indicator"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: position.width,
        height: position.height,
        opacity: position.width ? 1 : 0,
      }}
    />
  );
}
