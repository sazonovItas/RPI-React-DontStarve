import { useEffect } from "react";
import background from "/images/backgrounds/NotFoundPage.png";
import "./SearchPage.css";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import Intro from "../../components/common/Intro/Intro";
import { useDatabase } from "../../db/DataContext";
import SepTitle from "../../components/common/SepTitle/SepTitle";
import SearchCard from "./Components/SearchCard/SearchCard";

function SearchPage() {
  const db = useDatabase();
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });
  return (
    <>
      <Header isFullWidth={true} />
      <div className="main-container">
        <Intro
          Title={db.SearchPage.Intro.Title}
          Desc={db.SearchPage.Intro.Desc}
        />
        <SepTitle Text={db.SearchPage.Title.Text} Id={db.SearchPage.Title.Id} />
        <div className="searchcards-container">
          {db.Characters.map((item, key) => (
            <SearchCard
              key={key}
              Link={`/RPI-React-DontStarve/${item.ID}`}
              Src={item.SearchImg}
              Alt={item.Name}
            />
          ))}
        </div>
        <Footer
          Title={db.SearchPage.Footer.Title}
          Menu={db.SearchPage.Footer.Menu}
        />
      </div>
    </>
  );
}

export default SearchPage;
