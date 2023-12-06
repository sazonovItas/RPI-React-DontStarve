import "./404Page.css";
import background from "/images/backgrounds/NotFoundPage.png";
import { useTranslation } from "react-i18next";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import character from "../../assets/images/404NotFound/character.png";

function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <>
      <ErrorComponent
        Title={t("NotFoundPage.Title")}
        SubTitle={t("NotFoundPage.SubTitle")}
        Description={t("NotFoundPage.Description")}
        Img={character}
        BackImg={background}
      />
    </>
  );
}

export default NotFoundPage;
