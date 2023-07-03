export const formatMs = (duration: number): string => {
  if (duration > 1000) {
    return duration / 1000 + "s";
  } else {
    return duration + "ms";
  }
};
