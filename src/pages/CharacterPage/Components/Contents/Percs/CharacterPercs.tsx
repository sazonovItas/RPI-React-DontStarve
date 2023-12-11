import { CharacterPercsProps } from "./CharacterPercsValidator";
import "./CharacterPercs.css";
import SepTitle from "../../../../../components/common/SepTitle/SepTitle";
import ListItems from "../../../../../components/common/ListItems/ListItems";
import PlusIcon from "/images/common/Plus.webp";
import MinusIcon from "/images/common/Minus.webp";
import InfoIcon from "/images/common/Info.webp";

function CharacterPercs(props: CharacterPercsProps) {
  return (
    <>
      <SepTitle Text={props.Title} Id="percs" />
      <div className="CharacterPercs-container">
        <ListItems
          Img={PlusIcon}
          Color="green"
          BackColor="rgba(0,700,0,0.15)"
          Text={props.Pros}
        />
        <ListItems
          Img={MinusIcon}
          Color="red"
          BackColor="rgba(700,0,0,0.15)"
          Text={props.Cons}
        />
        <ListItems
          Img={InfoIcon}
          Color="blue"
          BackColor="rgba(0,0,700,0.15)"
          Text={props.General}
        />
      </div>
    </>
  );
}

export default CharacterPercs;
