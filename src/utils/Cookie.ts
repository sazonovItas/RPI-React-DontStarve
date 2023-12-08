import Cookies from "js-cookie";

export const GetOrSetDailyCharacter = (cntOfCharacters: number): number => {
  const cookie = Cookies.get("character");

  if (!cookie) {
    const index = Math.round(Math.random() * cntOfCharacters);
    Cookies.set("character", `${index}`, { expires: 1 });
    return index < cntOfCharacters ? index : cntOfCharacters - 1;
  }

  return parseInt(cookie);
};
