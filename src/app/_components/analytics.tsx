"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "function") return;
    window.gtag("config", "G-109S1VWRWC", {
      page_path: pathname,
    });
  }, [pathname]);

  return null;
}
