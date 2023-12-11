import "./Update.css";
import { UpdateProps } from "./UpdateValidator";

function Update(props: UpdateProps) {
  return (
    <>
      <div className="Update-container">
        <a href={props.Link}>
          <img className="Update-img" src={props.Img} alt={"Update image"} />
          <div className="Update-desc">{props.Desc}</div>
        </a>
      </div>
    </>
  );
}

export default Update;
