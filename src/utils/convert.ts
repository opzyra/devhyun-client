import { Html } from "next/document";

export const textToHtml = (text: string): string => {
  return text.replace(/(\n|\r\n)/g, "<br>");
};
