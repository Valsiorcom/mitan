import { useEffect } from "react";

interface WebVitals {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
  navigationType: string;
}

type Metric = {
  name: "CLS" | "FCP" | "FID" | "INP" | "LCP" | "TTFB";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
  navigationType: string;
};

export function reportWebVitals(metric: Metric) {
  // Only send metrics in production
  if (process.env.NODE_ENV !== "production") {
    console.log(metric);
    return;
  }

  // Send to analytics endpoint
  if (process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING === "true") {
    const endpoint = `/api/analytics/web-vitals`;
    const body = {
      ...metric,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Use sendBeacon to ensure data is sent even if page unloads
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, JSON.stringify(body));
    } else {
      fetch(endpoint, { method: "POST", body: JSON.stringify(body) }).catch(
        () => {}
      );
    }
  }
}

export function useWebVitals() {
  useEffect(() => {
    try {
      import("web-vitals").then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
        getCLS(reportWebVitals);
        getFCP(reportWebVitals);
        getFID(reportWebVitals);
        getLCP(reportWebVitals);
        getTTFB(reportWebVitals);
      });
    } catch (error) {
      console.error("Failed to load web-vitals:", error);
    }
  }, []);
}
