export const truncate = (text) => {
  return text.length > 80 ? text.substring(0, 80) + "..." : text;
};

export const totalViews = (count) => {
  if (count >= 1000000) {
    return `${Math.floor(count / 1000000)}M views`;
  } else if (count >= 1000) {
    return `${Math.floor(count / 1000)}K views`;
  }
};

export const likesCount = (count) => {
  if (count > 1000000) {
    return `${Math.floor(count / 1000000)}M`;
  } else if (count >= 1000) {
    return `${Math.floor(count / 1000)}K`;
  }
};
