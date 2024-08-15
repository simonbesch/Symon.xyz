import "../styles/Skills.scss";
import { useLoaderData, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";

function Skills() {
  const skills = useLoaderData();
  const { isAdmin } = useAdmin();

  const mapSkillsTechno = skills.map((data, index) =>
    data.category === "Technos" ? (
      isAdmin ? (
        <Link to={`/skills/${data.id}`}>
          <p key={index} className="TechAndImg">
            <img src={data.icon} alt={data.name} />
            <li className={data.levelCSS}>{data.name} + </li>
          </p>
        </Link>
      ) : (
        <p key={index} className="TechAndImg">
          <img src={data.icon} alt={data.name} />
          <li className={data.levelCSS}>{data.name}</li>
        </p>
      )
    ) : null
  );
  const mapSkillsAutresTechnos = skills.map((data, index) =>
    data.category === "AutresTechnos" ? (
      isAdmin ? (
        <Link to={`/skills/${data.id}`}>
          <p key={index} className="TechAndImg">
            <img src={data.icon} alt={data.name} />
            <li className={data.levelCSS}>{data.name} + </li>
          </p>
        </Link>
      ) : (
        <p key={index} className="TechAndImg">
          <img src={data.icon} alt={data.name} />
          <li className={data.levelCSS}>{data.name}</li>
        </p>
      )
    ) : null
  );
  const mapSkillsLociciels = skills.map((data, index) =>
    data.category === "Logiciels" ? (
      isAdmin ? (
        <Link to={`/skills/${data.id}`}>
          <p key={index} className="TechAndImg">
            <img src={data.icon} alt={data.name} />
            <li className={data.levelCSS}>{data.name} + </li>
          </p>
        </Link>
      ) : (
        <p key={index} className="TechAndImg">
          <img src={data.icon} alt={data.name} />
          <li className={data.levelCSS}>{data.name}</li>
        </p>
      )
    ) : null
  );
  const mapSkillsInteretPerso = skills.map((data, index) =>
    data.category === "InteretPerso" ? (
      isAdmin ? (
        <Link to={`/skills/${data.id}`}>
          <p key={index} className="TechAndImg">
            <img src={data.icon} alt={data.name} />
            <li className={data.levelCSS}>{data.name} + </li>
          </p>
        </Link>
      ) : (
        <p key={index} className="TechAndImg">
          <img src={data.icon} alt={data.name} />
          <li className={data.levelCSS}>{data.name}</li>
        </p>
      )
    ) : null
  );
  const mapSkillsLangues = skills.map((data, index) =>
    data.category === "Langues" ? (
      isAdmin ? (
        <Link to={`/skills/${data.id}`}>
          <p key={index} className="TechAndImg">
            <img src={data.icon} alt={data.name} />
            <li className={data.levelCSS}>{data.name} + </li>
          </p>
        </Link>
      ) : (
        <p key={index} className="TechAndImg">
          <img src={data.icon} alt={data.name} />
          <li className={data.levelCSS}>{data.name}</li>
        </p>
      )
    ) : null
  );

  return (
    <div className="skillsContainer">
      <h1>Mes skills </h1>
      <div className="skillsContainerC">
        <div className="skillsContainerD">
          <h4>Technos :</h4>
          <ul>{mapSkillsTechno}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Autres Technos :</h4>
          <ul>{mapSkillsAutresTechnos}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Logiciels :</h4>
          <ul>{mapSkillsLociciels}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Interets Personnels :</h4>
          <ul>{mapSkillsInteretPerso}</ul>
        </div>
        <div className="skillsContainerD">
          <h4>Langues :</h4>
          <ul>{mapSkillsLangues}</ul>
        </div>
        {isAdmin ? (
          <Link to={`/skills/add`}>
            <div className="skillsContainerD adminAddSkills">
              <h4>Ajouter un skills + </h4>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
export default Skills;
