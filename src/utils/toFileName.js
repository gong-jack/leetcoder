import { KRLocalISOString } from "../utils/index.js";

export function toFileName(text) {
  const localKRDateText = KRLocalISOString().slice(2, 10).replace(/-/g, "");

  return `[${localKRDateText}] ${text}.js`;
}
