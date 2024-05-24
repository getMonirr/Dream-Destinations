export const tags = {
  USER: "USER",
  TRAVEL: "TRAVEL",
} as const;

// generate tags array
export const appTags = Object.values(tags);
