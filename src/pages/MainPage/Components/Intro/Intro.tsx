import PolygonTitle from "../../../../components/common/PolygonTitle/PolygonTitle";
import { IntroProps } from "./IntroValidator";
import "./Intro.css";

function Intro(props: IntroProps) {
  return (
    <>
      <div className="Intro-container">
        <div className="center-polygon-container">
          <PolygonTitle
            width={"90%"}
            text={props.Title}
            backColor={"#3C2F28"}
          />
        </div>
        <p className="Intro-description">{props.Desc}</p>
      </div>
    </>
  );
}

export default Intro;
