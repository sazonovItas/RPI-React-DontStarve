import { useEffect } from "react";
import "./404Page.css";
import background from "/images/backgrounds/NotFoundPage.png";
import { useTranslation } from "react-i18next";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import character from "../../assets/images/404NotFound/character.png";

function NotFoundPage() {
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
        Title={t("NotFoundPage.Title")}
        SubTitle={t("NotFoundPage.SubTitle")}
        Description={t("NotFoundPage.Description")}
        Img={character}
      />
    </>
  );
}

export default NotFoundPage;
