import { useDatabase } from "../../../db/DataContext";
import LangBtn from "../../common/LangBtn/LangBtn";
import { HeaderProps } from "./HeaderValidator";
import "./Header.css";

function Header(props: HeaderProps) {
  const db = useDatabase();

  return (
    <>
      <div
        id="main"
        className="header-container"
        style={{ width: ` ${props.isFullWidth ? "100%" : "auto"}` }}
      >
        <img
          className="header-logo"
          src={db.Header.Logo.Src}
          alt={db.Header.Logo.Alt}
        />
        <div className="header-description">
          <h1 className="header-title">{db.Header.Title}</h1>
          <div className="Menu-H">
            {db.Header.Menu.map((item, index) => (
              <a key={index} className="Item-Menu-H" href={item.Url}>
                {item.Text}
              </a>
            ))}
            <LangBtn />
          </div>
          <div className="DropDownMenu"></div>
        </div>
      </div>
    </>
  );
}

export default Header;
