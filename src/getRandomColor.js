import { digits } from "./getDigits";

export const getRandomColor = () => {
  const color = new Array(6)
    .fill("")
    .map(() => digits[Math.floor(Math.random() * digits.length)])
    .join("");
  return `#${color}`;
};
