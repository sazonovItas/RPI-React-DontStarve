import PolygonTitle from "../../../../../components/common/PolygonTitle/PolygonTitle";
import { DeveloperCardProps } from "./DeveloperCardValidator";
import "./DeveloperCard.css";

function DeveloperCard(props: DeveloperCardProps) {
  return (
    <>
      <div className="DevloperCard-container">
        <img
          className="DeveloperCard-img"
          src={props.Logo.Src}
          alt={props.Logo.Alt}
        />
        <PolygonTitle
          text={props.Nick}
          width={"72%"}
          backColor={"#D4CBCB"}
          fontColor={"#000"}
        />
      </div>
    </>
  );
}

export default DeveloperCard;
