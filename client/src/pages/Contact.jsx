import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "../styles/Contact.scss";
import pedro from "../assets/pedro.jpg";
import pp from "../assets/pp.jpg";
import linkd from "../assets/icons/linkd.png";
import github from "../assets/icons/github.png";
import { useAdmin } from "../contexts/AdminContext";
import emailjs from "emailjs-com";
import { SlArrowRight } from "react-icons/sl";

function Home() {
  const infos = useLoaderData();
  const [isPedro, setIsPedro] = useState(false);
  const { isAdmin } = useAdmin();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID,
        import.meta.env.VITE_MAIL_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_MAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
    e.target.reset();
  };

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

      <div className="form-group">
        <form class="formContainer" onSubmit={handleOnSubmit}>
          <br />
          <h2>Let's Talk !</h2>
          <br />
          <div class="formElement">
            <SlArrowRight />
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Nom"
              required
            />
          </div>

          <div class="formElement">
            <SlArrowRight />
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Email"
              required
            />
          </div>
          <br />
          <div class="formElement">
            <label for="message">Ton message :</label>
            <textarea
              name="message"
              rows="8"
              cols="30"
              placeholder="ici :)"
              required
            />
          </div>
          <button type="submit" className="formButton">
            Submit
          </button>
        </form>
      </div>
      <div className="InfoContainer2">
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
