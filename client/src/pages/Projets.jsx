import "../styles/Projets.scss";
import allProjets from "../datas/projetsDatas";
import { useLoaderData, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";

function Projets() {
  const parkour = useLoaderData();
  const { isAdmin } = useAdmin();
  console.info(parkour);
  const mapProjets = parkour.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projets" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapCheckPoints = parkour.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "checkPoints" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const ateliersQuestes = parkour.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "ateliersQuestes" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const sitesPerso = parkour.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "sitesPerso" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
    ) : null
  );

  const mapProjetsPerso = parkour.map((datas) =>
    datas.upload === "yes" ? (
      datas.category === "projetsPerso" ? (
        <div className="divEvenement">
          <div className="divEvenementContainer">
            <Link to={`/projects/${datas.id}`}>
              <img src={datas.img} alt="" />
              <h4 key={datas.id} className="NameProject">
                {datas.name}
              </h4>
            </Link>
          </div>
        </div>
      ) : null
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
          <button className="btnAddEdit"> + </button>
        </Link>
      ) : null}
    </div>
  );
}

export default Projets;
