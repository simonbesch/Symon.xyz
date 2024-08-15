import "../styles/Home.scss";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import { useAdmin } from "../contexts/AdminContext";

function Home() {
  const { isAdmin } = useAdmin();
  return (
    <div>
      <div className="Welcome">
        <h3>
          <SlArrowLeft className="iconeHomeWelcome" />
          BIENVENUE <span className="iconeHomeSlash"> /</span>
          <SlArrowRight className="iconeHomeWelcome" />
        </h3>
      </div>
      <div className="PorteFolio">
        {isAdmin ? <h4 className="adminSession">Sur Mon PorteFolio</h4> : null}
      </div>

      <div className="homeContainer">
        <h1>
          Simon, <span className="devWeb">DEVELOPPEUR WEB</span>
        </h1>
      </div>
      <div className="FullStack">
        <h2>Full Stack</h2>
      </div>
      <div className="buttonHome">
        <a href="https://github.com/simonbesch" target="_blank">
          <button className="buttonHomeProjet" type="button">
            <span>
              GIT
              <img
                src="https://img.icons8.com/?size=100&id=52539&format=png&color=000000"
                alt=""
                className="iconeContactHomeBTN"
              />
              HUB
            </span>
          </button>
        </a>
      </div>
      <div className="iconeHomeContainer">
        <a href="https://www.linkedin.com/in/simon-bescheron/" target="_blank">
          <img
            src="https://img.icons8.com/?size=100&id=67570&format=png&color=000000"
            alt=""
            className="iconeContactHome"
          />
        </a>
        <a href="https://www.instagram.com/simonbesch/" target="_blank">
          <img
            src="https://img.icons8.com/?size=100&id=102339&format=png&color=000000"
            alt=""
            className="iconeContactHome"
          />
        </a>
      </div>
    </div>
  );
}

export default Home;
