import { useDatabase } from "../../../db/DataContext";
import LangBtn from "../../common/LangBtn/LangBtn";
import { HeaderProps } from "./HeaderValidator";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { useState } from "react";

function Header(props: HeaderProps) {
  const db = useDatabase();
  const [IsHiddenMenu, setIsHiddenMenu] = useState(false);

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
          <div className="header-title-langbtn">
            <h1 className="header-title">{db.Header.Title}</h1>
            <div className="DropDownMenu">
              <button
                className="MenuIcon"
                onClick={() => setIsHiddenMenu(IsHiddenMenu ? false : true)}
              >
                <MenuIcon />
              </button>
              <div
                className="PhoneMenu-H"
                style={{ display: `${IsHiddenMenu ? "block" : "none"}` }}
              >
                {db.Header.Menu.map((item, index) => (
                  <a key={index} className="PhoneItem-Menu-H" href={item.Url}>
                    {item.Text}
                  </a>
                ))}
              </div>
            </div>
            <LangBtn />
          </div>
          <div className="Menu-H">
            {db.Header.Menu.map((item, index) => (
              <a key={index} className="Item-Menu-H" href={item.Url}>
                {item.Text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
