import { useEffect } from "react";
import background from "/images/backgrounds/NotFoundPage.png";
import "./SearchPage.css";
import Header from "../../components/Layouts/Header/Header";
import Footer from "../../components/Layouts/Footer/Footer";

function SearchPage() {
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
        <Footer />
      </div>
    </>
  );
}

export default SearchPage;
