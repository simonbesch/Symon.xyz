import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/Contact.scss";
import pedro from "../assets/pedro.jpg";
import pp from "../assets/pp.jpg";
import mail from "../assets/icons/courier.png";
import linkd from "../assets/icons/linkd.png";
import github from "../assets/icons/github.png";
import { useAdmin } from "../contexts/AdminContext";

function Home() {
  const infos = useLoaderData();
  const [isMail, setIsMail] = useState(false);
  const [isPedro, setIsPedro] = useState(false);
  const { isAdmin } = useAdmin();

  return (
    <div className="ContainerContact">
      <p className="contacter"> Pour plus de renseignements, vous pouvez </p>
      <h1>Me contacter</h1>
      <div className="InfoContainer" onClick={() => setIsPedro(!isPedro)}>
        {isPedro ? (
          <img src={pedro} alt="pedro" className="pedro" />
        ) : (
          <img src={pp} alt="pedro" className="pp" />
        )}
      </div>
      <div className="Dispo">
        <p className={infos.dispo}>{infos.dispo}</p>
      </div>
      <div className="InfoContainer">
        <img src={mail} alt="" onClick={() => setIsMail(!isMail)} />
        {isMail ? <p>{infos.mail}</p> : null}
        <a href={infos.lnk} target="_blank">
          <img src={linkd} alt="" />
        </a>
        <a href={infos.github} target="_blank">
          <img src={github} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Home;
