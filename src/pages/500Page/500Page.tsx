import { useEffect } from "react";
import "./500Page.css";
import background from "/images/backgrounds/ServerErrorPage.png";
import { useTranslation } from "react-i18next";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import character from "../../assets/images/500ServerError/character.png";

function ServerErrorPage() {
  const { t } = useTranslation();
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });
  return (
    <>
      <ErrorComponent
        Img={character}
        Title={t("ServerErrorPage.Title")}
        SubTitle={t("ServerErrorPage.SubTitle")}
        Description={t("ServerErrorPage.Description")}
      />
    </>
  );
}

export default ServerErrorPage;
