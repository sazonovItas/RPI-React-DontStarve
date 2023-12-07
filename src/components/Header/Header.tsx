import { useDatabase } from "../../db/DataContext";
import "./Header.css";

function Header() {
  const db = useDatabase();
  console.log(db.Header.Logo.Src);

  return (
    <>
      <div className="header-container">
        <img
          className="logo"
          src={db.Header.Logo.Src}
          alt={db.Header.Logo.Alt}
        />
        <div className="header-description">
          <h1 className="header-title">{db.Header.Title}</h1>
          <div className="MENU-H">
            {db.Header.Menu.map((item, index) => (
              <a key={index} className="Item-Top-H" href={item.Url}>
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
