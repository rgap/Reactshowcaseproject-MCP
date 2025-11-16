export const INTENT = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  DANGER: "danger",
} as const;

export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type IntentType = (typeof INTENT)[keyof typeof INTENT];
export type SizeType = (typeof SIZE)[keyof typeof SIZE];

