export const LANGUAGE = {
  EN: "en",
  ES: "es",
} as const;

export type LanguageType = typeof LANGUAGE[keyof typeof LANGUAGE];


