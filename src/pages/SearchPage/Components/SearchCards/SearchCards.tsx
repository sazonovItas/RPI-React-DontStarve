import SearchCard from "../SearchCard/SearchCard";
import "./SearchCards.css";
import { SearchCardsProps } from "./SearchCardsValidator";

function SearchCharacterCards(props: SearchCardsProps) {
  if (props.cards === null) {
    return (
      <>
        <div className="searchcards-container"></div>
      </>
    );
  }

  return (
    <>
      <div className="searchcards-container">
        {props.cards.map((item, key) => (
          <SearchCard
            key={key}
            Link={`/RPI-React-DontStarve/${item.ID}`}
            Src={item.SearchImg}
            Alt={item.Name}
          />
        ))}
      </div>
    </>
  );
}

export default SearchCharacterCards;
