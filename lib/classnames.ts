export const combineClasses = (
  ...classes: (string | undefined | null | false)[]
): string => {
  return classes.filter(Boolean).join(" ");
};

export const conditionalClasses = (
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string => {
  return condition ? trueClass : falseClass || "";
};

export const getStateClasses = (
  state: "default" | "hover" | "active" | "disabled",
  baseClass: string
): string => {
  const stateMap: Record<string, string> = {
    default: baseClass,
    hover: `${baseClass} hover:opacity-80`,
    active: `${baseClass} opacity-60`,
    disabled: `${baseClass} opacity-50 cursor-not-allowed`,
  };
  return stateMap[state];
};