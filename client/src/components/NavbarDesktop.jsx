import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import "../styles/anim.css";
import logo from "../assets/logo.png";

function NavbarDesktop() {
  return (
    <div>
      <div className="GlobalContainer">
        <div className="linkDesktopContainer">
          <span>
            <img src={logo} alt="" className="logoImg" />
          </span>
          <Link to="/" className="linkDesktop">
            Home
          </Link>
          <Link to="/parkour" className="linkDesktop">
            Parcours
          </Link>
          <Link to="/skills" className="linkDesktop">
            Skills
          </Link>
        </div>
        <div className="linkPlusDiv">
          <Link to="/projets" className="linkProjets">
            <button className="glowing-btn">
              <span className="glowing-txt">
                Pr<span className="faulty-letter">o</span>jets
              </span>
            </button>
          </Link>
          <Link to="/contact" className="linkContact">
            Contactez moi
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
