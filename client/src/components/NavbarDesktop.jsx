import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
import "../styles/anim.css";
import logo from "../assets/logo.png";
import { useAdmin } from "../contexts/AdminContext";

function NavbarDesktop() {
  const { isAdmin } = useAdmin();
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
          {isAdmin ? (
            <Link to="/editInfos">
              <img
                src="https://img.icons8.com/?size=100&id=118624&format=png&color=000000"
                alt=""
                className="logoImgAdmin"
              />
            </Link>
          ) : null}
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
