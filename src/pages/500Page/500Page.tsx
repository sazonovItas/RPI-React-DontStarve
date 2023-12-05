import { useEffect } from "react";
import "./500Page.css";
import background from "/images/backgrounds/ServerErrorPage.png";
import { useTranslation } from "react-i18next";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
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
      <ErrorPage
        Img={character}
        Title={t("ServerErrorPage.Title")}
        SubTitle={t("ServerErrorPage.SubTitle")}
        Description={t("ServerErrorPage.Description")}
      />
    </>
  );
}

export default ServerErrorPage;
