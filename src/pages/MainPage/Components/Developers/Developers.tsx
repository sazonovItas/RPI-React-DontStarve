import PolygonTitle from "../../../../components/common/PolygonTitle/PolygonTitle";
import DeveloperCard from "./DeveloperCard/DeveloperCard";
import { DevelopersProps } from "./DevelopersValidator";
import "./Developers.css";

function Developers(props: DevelopersProps) {
  return (
    <>
      <div className="Authors-container" id="developers">
        <div className="center-polygon-container">
          <PolygonTitle
            width={"100%"}
            text={props.Developers.Title}
            backColor={"#3C2F28"}
            fontColor={"#FFF"}
          />
        </div>
        {props.Developers.Developers.map((item, index) => (
          <a key={index} href={item.Link}>
            <DeveloperCard Logo={item.Logo} Nick={item.Nick} />
          </a>
        ))}
      </div>
    </>
  );
}

export default Developers;
