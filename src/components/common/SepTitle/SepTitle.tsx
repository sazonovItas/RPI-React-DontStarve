import { SepTitleProps } from "./SepTitleValidator";
import "./SepTitle.css";

function SepTitle(props: SepTitleProps) {
  return (
    <>
      <div className="SepTitle-container" id={props.Id}>
        <h1 className="SepTitle-text">{props.Text}</h1>
        <div className="SepTitle-separator"></div>
      </div>
    </>
  );
}

export default SepTitle;
