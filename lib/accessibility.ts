/**
 * Accessibility utilities for common WCAG AA patterns
 */

/**
 * Generates a unique ID for form field associations
 */
export const generateFieldId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
};

/**
 * Determines if color contrast meets WCAG AA standards (4.5:1 for normal text)
 * @param foreground RGB foreground color
 * @param background RGB background color
 * @returns true if contrast is WCAG AA compliant
 */
export const isWCAGAAContrast = (
  foreground: [number, number, number],
  background: [number, number, number]
): boolean => {
  const getLuminance = (rgb: [number, number, number]): number => {
    const [r, g, b] = rgb.map((c) => {
      const val = c / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const l1 = getLuminance(foreground);
  const l2 = getLuminance(background);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  const contrast = (lighter + 0.05) / (darker + 0.05);

  return contrast >= 4.5; // WCAG AA for normal text
};

/**
 * Focus management utilities
 */
export const focusUtils = {
  /**
   * Focus an element if it exists
   */
  focus: (element: HTMLElement | null): void => {
    if (element) {
      element.focus();
    }
  },

  /**
   * Trap focus within a container
   */
  trapFocus: (container: HTMLElement, e: KeyboardEvent): void => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  },
};

/**
 * ARIA label utilities
 */
export const ariaUtils = {
  /**
   * Get accessible name from element
   */
  getName: (element: HTMLElement): string => {
    return (
      element.getAttribute("aria-label") ||
      element.getAttribute("aria-labelledby") ||
      element.textContent ||
      ""
    );
  },

  /**
   * Set error message with ARIA attributes
   */
  setError: (element: HTMLElement, message: string): void => {
    const errorId = `error-${Math.random().toString(36).slice(2, 9)}`;
    const errorElement = document.createElement("span");
    errorElement.id = errorId;
    errorElement.textContent = message;
    errorElement.className = "text-red-600 text-sm";
    element.setAttribute("aria-invalid", "true");
    element.setAttribute("aria-describedby", errorId);
    element.parentNode?.appendChild(errorElement);
  },
};
