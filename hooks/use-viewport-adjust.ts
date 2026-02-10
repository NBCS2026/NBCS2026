"use client";

import { useEffect } from "react";

export function useViewportAdjust() {
  useEffect(() => {
    const updateCSSVars = () => {
      // Ensure window is available
      if (typeof window === 'undefined') return;
      
      const width = window.innerWidth;
      const root = document.documentElement;
      
      // Calculate logo size based on viewport
      // Note: CSS variables are only used in specific media query ranges
      // Outside those ranges, Tailwind classes apply
      let logoSize = 190; // default (matches w-[190px])
      if (width >= 515 && width <= 768) {
        logoSize = 210;
      } else if (width >= 769 && width <= 850) {
        logoSize = 70;
      } else if (width >= 851 && width <= 905) {
        logoSize = 80;
      }
      // 905px-1024px: uses default 190px (Tailwind w-[190px])
      // 1024px+: uses 230px (Tailwind lg:w-[230px])
      
      // Calculate nav link font size
      let navFontSize = 1; // 1rem default
      if (width >= 768 && width <= 850) {
        navFontSize = 0.7;
      } else if (width >= 851 && width <= 905) {
        navFontSize = 0.75;
      } else if (width >= 905 && width <= 1145) {
        navFontSize = 0.8;
      }
      
      // Calculate nav gap
      let navGap = 16; // 1rem default (4px = 0.25rem, but we use px for precision)
      if (width >= 768 && width <= 850) {
        navGap = 4; // 0.25rem
      } else if (width >= 851 && width <= 905) {
        navGap = 6; // 0.375rem
      } else if (width >= 905 && width <= 1145) {
        navGap = 8; // 0.5rem
      }
      
      root.style.setProperty('--logo-width', `${logoSize}px`);
      root.style.setProperty('--nav-font-size', `${navFontSize}rem`);
      root.style.setProperty('--nav-gap', `${navGap}px`);
      
      // Log for debugging
      if (process.env.NODE_ENV === 'development') {
        console.log('Viewport Adjust:', {
          width,
          logoSize,
          navFontSize: `${navFontSize}rem`,
          navGap: `${navGap}px`,
        });
      }
    };

    // Run immediately and after a short delay to ensure DOM is ready
    updateCSSVars();
    const timeoutId = setTimeout(updateCSSVars, 100);
    
    window.addEventListener('resize', updateCSSVars);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateCSSVars);
    };
  }, []);
}

