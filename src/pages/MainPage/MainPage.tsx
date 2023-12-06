import { useEffect } from "react";
import background from "/images/backgrounds/MainPage.png";

function MainPage() {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });
  return <></>;
}

export default MainPage;
