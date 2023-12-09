import { useDatabase } from "../../../db/DataContext";
import hands from "/images/common/Hands.png";
import { FooterProps } from "./FooterValidator.ts";
import "./Footer.css";

function Footer(props: FooterProps) {
  const db = useDatabase();

  return (
    <>
      <div className="footer-container">
        <img className="Hands" src={hands} alt="Hands" />
        <div className="footer-description-container">
          <div className="footer-title-container">
            <img
              className="footer-logo"
              src={db.Footer.Logo.Src}
              alt={db.Footer.Logo.Alt}
            />
            <p className="footer-title">{props.Title}</p>
          </div>
          <div className="footer-Menu-H">
            {props.Menu.map((item, index) => (
              <a key={index} className="footer-Item-Menu-H" href={item.Url}>
                {item.Text}
              </a>
            ))}
            <a href={"https://github.com/sazonovItas/RPI-React-DontStarve"}>
              <img
                src={db.Footer.GithubLogo}
                alt={"GithubLogo"}
                className="footer-githublogo"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
