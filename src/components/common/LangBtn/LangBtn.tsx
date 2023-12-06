import "./LangBtn.css";
import { SetLang, GetLangOrSetDefault } from "../../../utils/LangSettings";

function LangBtn() {
  const lang = GetLangOrSetDefault();

  const changeButton = () => {
    SetLang(lang === "en" ? "ru" : "en");
    location.reload();
  };

  return (
    <button
      className={`LangBtn LangBtn-${lang === "en" ? "en" : "ru"}`}
      onClick={() => changeButton()}
    ></button>
  );
}

export default LangBtn;
