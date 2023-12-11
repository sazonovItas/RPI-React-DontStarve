import { CharacterQuotesProps } from "./CharacterQuotesValidator";
import "./CharacterQuotes.css";
import SepTitle from "../../../../../components/common/SepTitle/SepTitle";

function CharacterQuotes(props: CharacterQuotesProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="quotes" />
      <div className="CharacterQuotes-container"></div>
    </>
  );
}

export default CharacterQuotes;
