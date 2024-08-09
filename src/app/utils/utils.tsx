// STRING UTILS

export const standardizeName = (name: string) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const addLineBreaks = (desc: string, maxLineLength: number): string => {
  const words = desc.split(" ");
  let result = "";
  let currentLine = "/** \n*";

  for (const word of words) {
    if (currentLine.length + word.length >= maxLineLength) {
      result += currentLine + "\n";
      currentLine = "* " + word;
    } else {
      currentLine += " " + word;
    }
  }
  result += currentLine + "\n*/";
  return result;
};

export const getLastElement = (str, delimiter) => {
  const parts = str.split(delimiter);
  return parts[parts.length - 1];
};
