import type { PropsWithChildren } from "react";
import { usePerformanceMonitoring } from "@/hooks/usePerformanceMonitoring";

/**
 * Providers component for wrapping the application
 * Handles client-side setup and monitoring
 */
export function Providers({ children }: PropsWithChildren) {
  usePerformanceMonitoring();
  return <>{children}</>;
}
