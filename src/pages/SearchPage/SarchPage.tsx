import { useEffect } from "react";
import background from "/images/backgrounds/SearchPage.png";

function SearchPage() {
  useEffect(() => {
    const body = document.body;
    if (body != null) {
      body.style.backgroundImage = `url(${background})`;
    }
  });
  return <></>;
}

export default SearchPage;
