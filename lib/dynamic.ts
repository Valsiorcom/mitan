import dynamic from "next/dynamic";
import { ComponentType } from "react";

/**
 * Dynamically import components with SSR disabled for client-only components
 */
export function createDynamicComponent<P extends Record<string, unknown>>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  options?: Parameters<typeof dynamic>[1]
) {
  return dynamic(importFunc, {
    loading: () => null,
    ssr: false,
    ...options,
  });
}

/**
 * Dynamically import UI components
 */
export const DynamicDialog = dynamic(
  () => import("@/components/ui/Dialog").then((mod) => ({ default: mod.Dialog })),
  { ssr: false }
);

export const DynamicModal = dynamic(
  () => import("@/components/ui/Modal").then((mod) => ({ default: mod.Modal })),
  { ssr: false }
);

export const DynamicTooltip = dynamic(
  () => import("@/components/ui/Tooltip").then((mod) => ({ default: mod.Tooltip })),
  { ssr: false }
);
