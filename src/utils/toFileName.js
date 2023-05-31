import KRLocalISOString from "./KRLocalISOString.js";

export function toFileName(text) {
  const localKRDateText = KRLocalISOString().slice(2, 10).replace(/-/g, "");

  return `[${localKRDateText}] ${text}.js`;
}
