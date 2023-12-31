import { PolygonTitleProps } from "./PolygonTitleValidator";
import "./PolygonTitle.css";

function PolygonTitle(props: PolygonTitleProps) {
  return (
    <>
      <div
        className="PolygonTitle-container"
        style={{
          width: `${props.width}`,
          backgroundColor: `${props.backColor}`,
        }}
      >
        <p
          className="PolygonTitle-text"
          style={{ color: `${props.fontColor}` }}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

export default PolygonTitle;
