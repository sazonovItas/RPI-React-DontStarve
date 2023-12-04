import { useState } from "react";

const [lang, setLang] = useState("en");

export const getLang = (): string => {
  return lang;
};

export const setLang = (lang: string): void => {
  cur_lang = lang;
};
