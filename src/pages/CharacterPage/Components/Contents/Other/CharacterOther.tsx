import { CharacterOtherProps } from "./CharacterOtherValidator";
import "./CharacterOther.css";
import SepTitle from "../../../../../components/common/SepTitle/SepTitle";

function CharacterOther(props: CharacterOtherProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id={"other"} />
      <div className="CharacterOther-container">
        <p className="CharacterOther-desc">{props.Text}</p>
      </div>
    </>
  );
}

export default CharacterOther;
