export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
} as const;

export const Z_INDEX = {
  DROPDOWN: 50,
  STICKY: 40,
  FIXED: 30,
  MODAL: 50,
  TOAST: 100,
  TOOLTIP: 50,
} as const;

export const CACHE_CONFIG = {
  // ISR cache times (in seconds)
  INSTANT: 0,
  SHORT: 60,
  MEDIUM: 3600,
  LONG: 86400,
  VERY_LONG: 604800,
} as const;

export const IMAGE_SIZES = {
  THUMBNAIL: { width: 120, height: 120 },
  SMALL: { width: 240, height: 240 },
  MEDIUM: { width: 480, height: 480 },
  LARGE: { width: 960, height: 960 },
  XLARGE: { width: 1920, height: 1440 },
} as const;