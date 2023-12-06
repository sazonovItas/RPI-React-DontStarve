import "./500Page.css";
import background from "/images/backgrounds/ServerErrorPage.png";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";
import character from "/images/500ServerError/character.png";
import { useDatabase } from "../../db/DataContext";

function ServerErrorPage() {
  const db = useDatabase();

  return (
    <>
      <ErrorComponent
        Title={db.ServerErrorPage.Title}
        SubTitle={db.ServerErrorPage.SubTitle}
        Description={db.ServerErrorPage.Description}
        Img={character}
        BackImg={background}
      />
    </>
  );
}

export default ServerErrorPage;
