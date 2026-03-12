import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Google Analytics Hook
 * Initialize and track page views with Google Analytics
 *
 * Usage:
 * 1. Get your Google Analytics Measurement ID (G-XXXXXXXXXX)
 * 2. Add to your environment variables: VITE_GA_ID=G-XXXXXXXXXX
 * 3. Use this hook in your root component or in App.tsx
 *
 * Example:
 * useGoogleAnalytics('G-XXXXXXXXXX');
 */

declare global {
  interface Window {
    dataLayer: Array<unknown>;
    gtag: Function;
  }
}

export function useGoogleAnalytics(measurementId?: string) {
  const location = useLocation();
  const gaId = measurementId || import.meta.env.VITE_GA_ID;

  useEffect(() => {
    if (!gaId) {
      console.warn(
        "Google Analytics ID not provided. Set VITE_GA_ID in your .env file"
      );
      return;
    }

    // Initialize Google Analytics script
    if (!window.gtag) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", gaId);
    }
  }, [gaId]);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", gaId, {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location, gaId]);
}
