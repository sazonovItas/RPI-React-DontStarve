import { CharacterQuotesProps } from "./CharacterQuotesValidator";
import "./CharacterQuotes.css";
import SepTitle from "../../../../../components/common/SepTitle/SepTitle";

function CharacterQuotes(props: CharacterQuotesProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="quotes" />
      <div className="CharacterQuotes-container">
        <ul className="CharacterQuotes-list">
          {props.Quotes.map((item, key) => (
            <li key={key}>
              <div className="CharacterQuotes-list-item">
                <p className="Quote-class">{item.Class}: </p>
                <p className="Quote-desc">{item.Text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CharacterQuotes;
