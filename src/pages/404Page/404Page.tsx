import "./404Page.css";
import background from "/images/backgrounds/NotFoundPage.png";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import character from "/images/404NotFound/character.png";
import { useDatabase } from "../../db/DataContext";

function NotFoundPage() {
  const db = useDatabase();

  return (
    <>
      <ErrorComponent
        Title={db.NotFoundPage.Title}
        SubTitle={db.NotFoundPage.SubTitle}
        Description={db.NotFoundPage.Description}
        Img={character}
        BackImg={background}
      />
    </>
  );
}

export default NotFoundPage;
