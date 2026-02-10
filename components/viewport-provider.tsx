"use client";

import { useViewportAdjust } from "@/hooks/use-viewport-adjust";

export function ViewportProvider({ children }: { children: React.ReactNode }) {
  useViewportAdjust();
  
  return <>{children}</>;
}

