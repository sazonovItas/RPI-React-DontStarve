export function SetLang(lang: string) {
  localStorage.setItem("lang", lang);
}

export function GetLangOrSetDefault(): string {
  const lang = localStorage.getItem("lang");
  if (lang === null || (lang !== "en" && lang !== "ru")) {
    localStorage.setItem("lang", "en");
    return "en";
  }

  return lang.toLowerCase();
}
