import { useEffect } from "react";
import background from "/images/backgrounds/CharacterPage.png";

function CharacterPage() {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });
  return <></>;
}

export default CharacterPage;
