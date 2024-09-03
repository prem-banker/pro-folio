// STRING UTILS

export const standardizeName = (name: string) => {
  return name.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const addLineBreaks = (desc: string, maxLineLength: number): string => {
  // Split the input string by whitespace and newline characters, capturing delimiters
  const words = desc.split(/(\s+|\n+)/);
  let result = "/**\n*"; // Start the comment block
  let currentLine = " "; // Initialize the current line

  for (const word of words) {
    if (word.match(/^\n+$/)) {
      // Handle one or more newlines
      // Count the number of newline characters
      const numNewlines = word.length / 1; // Each \n is 1 character
      result += currentLine + "\n*";
      currentLine = " ";
      // Add the required number of blank lines
      result += "\n*".repeat(numNewlines - 1); // Only add additional blank lines, don't repeat on the first one
    } else if (currentLine.length + word.length >= maxLineLength) {
      // If adding the part would exceed the max line length, add the current line to the result
      result += currentLine + "\n*";
      currentLine = " " + word.trim(); // Start a new line with the current word
    } else {
      // Otherwise, add the part to the current line
      currentLine += word;
    }
  }

  // Add the last line and close the comment block
  result += currentLine + "\n*/";
  return result;
};

export const addLineBreaksWoComments = (
  desc: string,
  maxLineLength: number
): string => {
  const words = desc.split(" ");
  let result = "";
  let currentLine = "";

  for (const word of words) {
    if (currentLine.length + word.length >= maxLineLength) {
      result += currentLine + "\n";
      currentLine = "" + word;
    } else {
      currentLine += " " + word;
    }
  }
  result += currentLine + "\n";
  return result;
};

export const getLastElement = (str: string, delimiter: string): string => {
  const parts = str.split(delimiter);
  return parts[parts.length - 1];
};

export const getLineBreakLength = () => {
  if (typeof window === "undefined") return 60; // Default value for server-side rendering
  const screenWidth = window.innerWidth;

  if (screenWidth > 1850) {
    return 70;
  } else if (screenWidth > 1750) {
    return 65;
  } else if (screenWidth > 1650) {
    return 60;
  } else if (screenWidth > 1400) {
    return 55;
  } else if (screenWidth > 1300) {
    return 45;
  } else if (screenWidth > 1200) {
    return 40;
  } else if (screenWidth > 1100) {
    return 35;
  } else {
    return 30;
  }
};
