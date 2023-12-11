import "./ListItems.css";
import { ListItemsProps } from "./ListItemsValidator";

function ListItems(props: ListItemsProps) {
  return (
    <>
      <div className="ListItems-Common">
        <img className="ListItems-icon" src={props.Img} alt="List icon" />
        <div
          className="ListItems-container"
          style={{
            background: `linear-gradient(to right, ${props.BackColor} 0%,transparent 100%)`,
            borderLeft: `5px solid ${props.Color}`,
          }}
        >
          <ul className="ListItems-list">
            {props.Text.map((item) => (
              <li className="ListItems-list-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ListItems;
