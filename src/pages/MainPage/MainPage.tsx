import { useEffect } from "react";
import background from "/images/backgrounds/MainPage.png";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";
import "./MainPage.css";
import Intro from "./Components/Intro/Intro";
import { useDatabase } from "../../db/DataContext";
import Update from "./Components/Update/Update";
import Developers from "./Components/Developers/Developers";

function MainPage() {
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
        <Intro Title={db.MainPage.Intro.Title} Desc={db.MainPage.Intro.Desc} />
        <Update Img={db.MainPage.Update.Img} Desc={db.MainPage.Update.Desc} />
        <Developers Developers={db.MainPage.Authors} />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
