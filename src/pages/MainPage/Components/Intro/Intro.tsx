import PolygonTitle from "../../../../components/common/PolygonTitle/PolygonTitle";
import { IntroProps } from "./IntroValidator";
import "./Intro.css";

function Intro(props: IntroProps) {
  return (
    <>
      <div className="Intro-container">
        <div className="center-polygon-container">
          <PolygonTitle
            width={"100%"}
            text={props.Title}
            backColor={"#3C2F28"}
            fontColor={"#FFF"}
          />
        </div>
        <p className="Intro-description">{props.Desc}</p>
      </div>
    </>
  );
}

export default Intro;
