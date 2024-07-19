import { useState } from "react";
import "../styles/Contact.scss";
import pedro from "../assets/pedro.jpg";
import pp from "../assets/pp.jpg";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/courier.png";
import linkd from "../assets/icons/linkd.png";
import github from "../assets/icons/github.png";

function Home() {
  const [isPhone, setIsPhone] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isPedro, setIsPedro] = useState(false);

  return (
    <div className="ContainerContact">
      <p className="contacter"> Pour plus de reneignements, vous pouvez </p>
      <h1>Me contacter</h1>
      <div className="InfoContainer" onClick={() => setIsPedro(!isPedro)}>
        {isPedro ? (
          <img src={pedro} alt="pedro" className="pedro" />
        ) : (
          <img src={pp} alt="pedro" className="pp" />
        )}
        <p>Disponible</p>
      </div>

      <div className="iconContainer">
        <img
          src={phone}
          alt=""
          className="iconContact"
          onClick={() => setIsPhone(!isPhone)}
        />
        {isPhone ? <p>07 81 01 70 32</p> : null}
        <img
          src={mail}
          alt=""
          className="iconContact"
          onClick={() => setIsMail(!isMail)}
        />
        {isMail ? <p>simonbescheron@gmail.com</p> : null}
        <a href="https://www.linkedin.com/in/simon-bescheron/" target="_blank">
          <img src={linkd} alt="" className="iconContact" />
        </a>
        <a href="https://github.com/simonbesch" target="_blank">
          <img src={github} alt="" className="iconContact" />
        </a>
      </div>
    </div>
  );
}

export default Home;
