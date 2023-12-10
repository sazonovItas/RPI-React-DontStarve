import { ContentsProps } from "./ContentsValidator";
import "./Contents.css";

function ContentsComponent(props: ContentsProps) {
  return (
    <>
      <div className="contents-container">
        <h2 className="contents-header">{props.Title}</h2>
        <ul className="contents-list">
          {props.Contents.map((item, key) => (
            <a key={key} href={props.CurUrl + item.Url}>
              <li className="contents-list-item">{item.Text}</li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ContentsComponent;
