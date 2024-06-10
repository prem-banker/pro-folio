// STRING UTILS

export const standardizeName = (name: string) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
