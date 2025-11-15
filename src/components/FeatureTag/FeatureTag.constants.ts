export const FEATURE_TAG_SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
} as const;

export type FeatureTagSizeType = typeof FEATURE_TAG_SIZE[keyof typeof FEATURE_TAG_SIZE];


