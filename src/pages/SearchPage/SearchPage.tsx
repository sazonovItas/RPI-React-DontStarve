import { useEffect, useState } from "react";
import background from "/images/backgrounds/NotFoundPage.png";
import "./SearchPage.css";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import Intro from "../../components/common/Intro/Intro";
import { useDatabase } from "../../db/DataContext";
import SepTitle from "../../components/common/SepTitle/SepTitle";
import SearchCharacterCards from "./Components/SearchCards/SearchCards";
import { Character } from "../../db/DbScheme";
import SearchInput from "./Components/SearchInput/SI";

function SearchPage() {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });

  const db = useDatabase();
  const [searchResult, setSearchResult] = useState<Character[] | null>(
    db.Characters,
  );
  const findCharacters = (searchValue: string): void => {
    const characters = db.Characters.filter((a) =>
      a.Name.toLowerCase().includes(searchValue.toLowerCase()),
    ).map((a) => {
      return a;
    });
    if (searchValue.length === 0) {
      setSearchResult(db.Characters);
    } else {
      setSearchResult(characters);
    }
  };

  return (
    <>
      <Header isFullWidth={true} />
      <div className="main-container">
        <Intro
          Title={db.SearchPage.Intro.Title}
          Desc={db.SearchPage.Intro.Desc}
        />
        <SearchInput
          onSearch={findCharacters}
          searchText={db.SearchPage.SearchInput.Text}
          id={"searching"}
        />
        <SepTitle Text={db.SearchPage.Title.Text} Id={db.SearchPage.Title.Id} />
        <SearchCharacterCards cards={searchResult} />
        <Footer
          Title={db.SearchPage.Footer.Title}
          Menu={db.SearchPage.Footer.Menu}
        />
      </div>
    </>
  );
}

export default SearchPage;
