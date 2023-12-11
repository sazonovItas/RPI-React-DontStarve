import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import { CharacterTipsProps } from "./CharacterTipsValidator";
import "./CharacterTips.css";

function CharacterTips(props: CharacterTipsProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="tips" />
      <div className="CharacterTips-container">
        <ul className="CharacterTips-list">
          {props.Text.map((item, key) => (
            <li key={key} className="CharacterTips-list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CharacterTips;
