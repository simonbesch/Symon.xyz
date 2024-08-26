import "../styles/ProjetsDetails.scss";
import { useLoaderData, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import TextareaAutosize from "react-textarea-autosize";

function ProjetsDetails() {
  const details = useLoaderData();
  const { isAdmin } = useAdmin();

  return (
    <div key={details.id} className="DPContainer">
      <h1>{details.title}</h1>
      {details.online === "" ? null : (
        <div className="DPOnline">
          <h4>
            <img
              src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
              alt=""
              className="arrowProjet"
            />
            <a href={details.online} target="_blanck">
              <button className="btnDeployement">
                Lien du site (déployement)
              </button>
            </a>
          </h4>
        </div>
      )}
      {details.github === "" ? null : (
        <div className="DPGithub">
          <h4>
            <img
              src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
              alt=""
              className="arrowProjet"
            />
            <a href={details.github} target="_blanck">
              Visiter le repository Github
            </a>
          </h4>
        </div>
      )}
      {details.lien === "" ? null : (
        <div className="DPLien">
          <h4>
            <img
              src="https://img.icons8.com/?size=100&id=gkgXdvj3Owk3&format=png&color=000000"
              alt=""
              className="arrowProjet"
            />
            <a href={details.lien} target="_blanck">
              Autre Lien
            </a>
          </h4>
        </div>
      )}
      {details.mates === "" ? null : (
        <div className="DPMates">
          <h4>Equipe :</h4>
          <p>{details.mates}</p>
        </div>
      )}
      {details.description1 === "" ? null : (
        <div className="DPDescription">
          <h4>Description : </h4>
          <TextareaAutosize
            defaultValue={details.description1}
            readonly="readonly"
            className="textAreaComponant"
          />
          <br />
          {details.description2 === "" ? null : (
            <TextareaAutosize
              defaultValue={details.description2}
              readonly="readonly"
              className="textAreaComponant"
            />
          )}
          <br />
          {details.description3 === "" ? null : (
            <TextareaAutosize
              defaultValue={details.description3}
              readonly="readonly"
              className="textAreaComponant"
            />
          )}
        </div>
      )}
      {details.img1 === "" ? null : (
        <div className="DPimgContainerP">
          <h4>Images du projet :</h4>
          <div className="DPimgContainer">
            <img src={details.img1} alt="" className="DPimg" />
            {details.img2 === "" ? null : (
              <img src={details.img2} alt="" className="DPimg" />
            )}
            {details.img3 === "" ? null : (
              <img src={details.img3} alt="" className="DPimg" />
            )}
            {details.img4 === "" ? null : (
              <img src={details.img4} alt="" className="DPimg" />
            )}
            {details.img5 === "" ? null : (
              <img src={details.img5} alt="" className="DPimg" />
            )}
            {details.img6 === "" ? null : (
              <img src={details.img6} alt="" className="DPimg" />
            )}
            {details.img7 === "" ? null : (
              <img src={details.img7} alt="" className="DPimg" />
            )}
            {details.img8 === "" ? null : (
              <img src={details.img8} alt="" className="DPimg" />
            )}
            {details.img9 === "" ? null : (
              <img src={details.img9} alt="" className="DPimg" />
            )}
            {details.img10 === "" ? null : (
              <img src={details.img10} alt="" className="DPimg" />
            )}{" "}
          </div>
        </div>
      )}
      {isAdmin ? (
        <Link to={`/projets/${details.id}`}>
          <button className="btnAddEdit"> Modifier </button>
        </Link>
      ) : null}
    </div>
  );
}

export default ProjetsDetails;
