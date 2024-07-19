import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useWeather } from "../contexts/WeatherContext";
import "../styles/Footer.scss";
import logo from "../assets/logo.png";

function Footer() {
  const { time, isLoading } = useWeather();
  return (
    <footer>
      {isLoading ? (
        <div className="Tours">
          <p>
            {time.name}, {time.sys.country}
          </p>
          <p>Temps: {time.weather[0].description}</p>
          <p>Température: {Math.floor(time.main.temp - 273.15)}°</p>
        </div>
      ) : null}

      <h5>Merci à la Wild Code School ❤️</h5>
      <h5>Copyright © Simon Bescheron</h5>
      <h5>
        <Link to="/about" className="linkAbout">
          A propos du site ?
        </Link>
        &ensp;
        <Link to="/login" className="linkAbout">
          Connection
        </Link>
      </h5>

      <img src={logo} alt="" className="logoImg" />
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
  pays: PropTypes.string,
  temps: PropTypes.string,
  temp: PropTypes.number,
};

export default Footer;
