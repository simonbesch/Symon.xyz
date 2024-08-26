import "../styles/Projets.scss";
import allProjets from "../datas/projetsDatas";
import { useLoaderData, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";

function Projets() {
  const projects = useLoaderData();
  const { isAdmin } = useAdmin();
  const mapProjets = projects.map((datas) =>
    datas.category === "projets" ? (
      <div className="divEvenement">
        <div className="divEvenementContainer">
          <Link to={`/projets/details/${datas.id}`}>
            <img src={datas.img1} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.title}
            </h4>
          </Link>
        </div>
      </div>
    ) : null
  );

  const mapCheckPoints = projects.map((datas) =>
    datas.category === "checkPoints" ? (
      <div className="divEvenement">
        <div className="divEvenementContainer">
          <Link to={`/projets/details/${datas.id}`}>
            <img src={datas.img1} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.title}
            </h4>
          </Link>
        </div>
      </div>
    ) : null
  );

  const ateliersQuestes = projects.map((datas) =>
    datas.category === "ateliersQuestes" ? (
      <div className="divEvenement">
        <div className="divEvenementContainer">
          <Link to={`/projets/details/${datas.id}`}>
            <img src={datas.img1} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.title}
            </h4>
          </Link>
        </div>
      </div>
    ) : null
  );

  const sitesPerso = projects.map((datas) =>
    datas.category === "sitesPerso" ? (
      <div className="divEvenement">
        <div className="divEvenementContainer">
          <Link to={`/projets/details/${datas.id}`}>
            <img src={datas.img1} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.title}
            </h4>
          </Link>
        </div>
      </div>
    ) : null
  );

  const mapProjetsPerso = projects.map((datas) =>
    datas.category === "projetsPerso" ? (
      <div className="divEvenement">
        <div className="divEvenementContainer">
          <Link to={`/projets/details/${datas.id}`}>
            <img src={datas.img1} alt="" />
            <h4 key={datas.id} className="NameProject">
              {datas.title}
            </h4>
          </Link>
        </div>
      </div>
    ) : null
  );

  return (
    <div className="ProjetsContainerAll">
      <h3>Projets:</h3>
      <div className="ProjectContainer">{mapProjets}</div>
      <h3>Sites Personnels:</h3>
      <div className="ProjectContainer">{sitesPerso}</div>
      <h3>Projets Personnels:</h3>
      <div className="ProjectContainer">{mapProjetsPerso}</div>
      <h3>CheckPoints:</h3>
      <div className="ProjectContainer">{mapCheckPoints}</div>
      <h3>Ateliers et Quests WCS:</h3>
      <div className="ProjectContainer">{ateliersQuestes}</div>
      {isAdmin ? (
        <Link to={`/projets/add`}>
          <button className="btnAddEdit"> Ajouter </button>
        </Link>
      ) : null}
    </div>
  );
}

export default Projets;
