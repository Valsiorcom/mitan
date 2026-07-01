"use client";

import { useEffect } from "react";

/**
 * Hook to track Core Web Vitals using web-vitals library
 * Only runs in production and when performance monitoring is enabled
 */
export function usePerformanceMonitoring() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING !== "true") return;

    try {
      // Import web-vitals dynamically
      import("web-vitals").then(({ getCLS, getFCP, getFID, getLCP, getTTFB }) => {
        const sendMetric = (metric: Record<string, unknown>) => {
          // Send to analytics
          fetch("/api/analytics/web-vitals", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(metric),
          }).catch(() => {});
        };

        getCLS(sendMetric as Parameters<typeof getCLS>[0]);
        getFCP(sendMetric as Parameters<typeof getFCP>[0]);
        getFID(sendMetric as Parameters<typeof getFID>[0]);
        getLCP(sendMetric as Parameters<typeof getLCP>[0]);
        getTTFB(sendMetric as Parameters<typeof getTTFB>[0]);
      });
    } catch (error) {
      console.error("Failed to load web-vitals:", error);
    }
  }, []);
}
