import { useDatabase } from "../../../db/DataContext";
import hands from "/images/common/Hands.png";
import "./Footer.css";

function Footer() {
  const db = useDatabase();

  return (
    <>
      <div className="footer-container">
        <img className="Hands" src={hands} alt="Hands" />
        <div className="footer-description">
          <div>
            <img
              className="footer-logo"
              src={db.Footer.Logo.Src}
              alt={db.Footer.Logo.Alt}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
