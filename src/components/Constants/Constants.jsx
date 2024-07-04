export const truncate = (text) => {
  return text.length > 200 ? text.substring(0, 150) + "..." : text;
};

export const totalViews = (count) => {
  if (count >= 1000000) {
    return `${Math.floor(count / 1000000)}M views`;
  } else if (count >= 1000) {
    return `${Math.floor(count / 1000)}K views`;
  }
};
