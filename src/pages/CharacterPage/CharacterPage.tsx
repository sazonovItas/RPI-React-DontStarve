import { useEffect, useMemo } from "react";
import background from "/images/backgrounds/CharacterPage.jpg";
import { useParams } from "react-router-dom";
import { useDatabase } from "../../db/DataContext";
import { Character } from "../../db/DbScheme";
import NotFoundPage from "../404Page/404Page";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import CharacterIntro from "./Components/CharacterIntro/CharacterIntro";
import CharacterOrigin from "./Components/Contents/Origin/CharacterOrigin";

function CharacterPage() {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });

  const db = useDatabase();
  const { id } = useParams();
  const character: Character | undefined = useMemo(
    () => db.Characters.find((e) => e.ID == id),
    [id, db],
  );

  if (character == undefined) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Header isFullWidth={true} />
      <div className="main-container">
        <CharacterIntro
          Name={character.Name}
          Phrase={character.Phrase}
          PhraseColor={character.PhraseColor}
          Description={character.Description}
          StatsImg={character.StatsImg}
          Content={db.CharacterPage.Content}
        />
        <CharacterOrigin
          Title={db.CharacterPage.Content.Background}
          YoutubeVideoId={character.VideoLink}
          Text={character.Background}
        />
        <Footer
          Title={db.CharacterPage.Footer.Title}
          Menu={db.CharacterPage.Footer.Menu}
        />
      </div>
    </>
  );
}

export default CharacterPage;
