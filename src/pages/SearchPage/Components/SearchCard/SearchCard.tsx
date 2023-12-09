import { SearchCardProps } from "./SearchCardValidator";
import "./SearchCard.css";

function SearchCard(props: SearchCardProps) {
  return (
    <>
      <div className="SearchCard-container">
        <a href={props.Link}>
          <img className="SearchCard-img" src={props.Src} alt={props.Alt} />
        </a>
      </div>
    </>
  );
}

export default SearchCard;
