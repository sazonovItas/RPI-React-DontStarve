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
import CharacterOther from "./Components/Contents/Other/CharacterOther";
import CharacterTips from "./Components/Contents/Tips/CharacterTips";
import CharacterPercs from "./Components/Contents/Percs/CharacterPercs";
import CharacterQuotes from "./Components/Contents/Quotes/CharacterQuotes";
import CharacterGallery from "./Components/Contents/Gallery/CharacterGallery";
import Timeline from "./Components/Contents/Timeline/Timeline.tsx";
import CharacterLocation from "./Components/Contents/Map/Map.tsx";

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
        <CharacterLocation
          Title={db.CharacterPage.Content.Map}
          Place={db.CharacterPage.Content.Birthplace.Place}
          PlaceName={db.CharacterPage.Content.Birthplace.PlaceName}
        />
        <CharacterOrigin
          Title={db.CharacterPage.Content.Background}
          YoutubeVideoId={character.VideoLink}
          Text={character.Background}
        />
        <CharacterPercs
          Title={db.CharacterPage.Content.Percs}
          Pros={character.Percs.Pros}
          Cons={character.Percs.Cons}
          General={character.Percs.General}
        />
        <CharacterTips
          Title={db.CharacterPage.Content.Tips}
          Text={character.Tips}
        />
        <CharacterQuotes
          Title={db.CharacterPage.Content.Quotes}
          Quotes={character.Quotes}
        />
        <CharacterGallery
          Title={db.CharacterPage.Content.Gallery}
          Imgs={character.Gallery}
        />
        <CharacterOther
          Title={db.CharacterPage.Content.Other}
          Text={character.Others}
        />
        <Timeline
          Title={db.CharacterPage.Content.Timeline}
          Timeline={character.Timeline}
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
