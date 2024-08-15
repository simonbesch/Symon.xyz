import "../styles/Parkour.scss";
import { useLoaderData, Link } from "react-router-dom";
import { useAdmin } from "../contexts/AdminContext";
import { useState } from "react";
import Modal from "react-modal";
import trial from "../assets/icons/trial.png";

function Parkour() {
  const parkour = useLoaderData();
  const { isAdmin } = useAdmin();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");
  const [divData, setDivData] = useState("");
  const [isData, setIsData] = useState(false);
  const [isCroissant, setIsCroissant] = useState(true);

  const mapCv = parkour.map((data) => (
    <p key={data.id}>
      <li className="liDate">
        {data.date}, {data.lieu} : {data.actuel === 1 ? " (En poste) " : null}
      </li>
      <li
        className="liEvenement"
        onClick={() => {
          {
            isData ? setDivData("") : setDivData(data), setIsData(!isData);
          }
        }}
      >
        {data.poste} - {data.structure}
        {data.type === "" ? null : ` - ${data.type}`}
      </li>
      <div
        onClick={() => {
          setModalData(data);
          setModalIsOpen(true);
        }}
      >
        {divData.id === data.id ? (
          <p className="plusDinfos">- plus d'informations -</p>
        ) : null}
      </div>
      {isAdmin ? (
        <Link to={`/parkour/${data.id}`}>
          <button className="btnAddEdit"> Modifier </button>
        </Link>
      ) : null}
    </p>
  ));

  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "60%",
      transform: "translate(-40%, -10%)",
      color: "black",
    },
  };

  const trialChange = () => {
    setIsCroissant(!isCroissant);
  };

  return (
    <div className="parkourContainer">
      <div className="parkourAndTrial">
        <h1>Mon Parcours Professionnel : </h1>
        <button className="btnTrial" onClick={trialChange}>
          <img src={trial} alt="Trier" className="imgTrial" />
        </button>
        {isAdmin ? (
          <Link to={`/parkour/add`}>
            <button className="btnAddEdit"> Ajouter </button>
          </Link>
        ) : null}
      </div>

      <ul
        className={isCroissant ? "ulParkourCroissant" : "ulParkourDeCroissant"}
      >
        {mapCv}
      </ul>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <h1>{modalData.evenement}</h1>
        <p>Date: {modalData.date}</p>
        <p>Lieu: {modalData.lieu}</p>
        <p>Poste: {modalData.poste}</p>
        <p>Structure: {modalData.structure}</p>
        <p>Type: {modalData.type}</p>
        <p>
          En poste ? {modalData.actuel === 1 ? "actuellement en poste" : null}
        </p>
        <p>Description: {modalData.description}</p>
        <div>
          <br />
          <button onClick={() => setModalIsOpen(false)}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
}

export default Parkour;
